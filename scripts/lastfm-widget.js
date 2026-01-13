// Last.fm Widget - Fetches and displays recently played/now playing
// Uses Last.fm API with the user's public scrobbles

const LASTFM_USERNAME = 'notmemo';
const LASTFM_API_KEY = '2062b96b9f6bcd6428e81014fecd02a0';

class LastFMWidget {
    constructor(containerSelector, apiKey) {
        this.container = document.querySelector(containerSelector);
        this.apiKey = apiKey;
        this.username = LASTFM_USERNAME;
        this.refreshInterval = 30000; // 30 seconds
        this.intervalId = null;
    }

    async fetchRecentTracks() {
        if (!this.apiKey) {
            console.warn('⚠️ Last.fm API key not configured');
            return null;
        }

        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${this.username}&api_key=${this.apiKey}&format=json&limit=5`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Last.fm API error');
            const data = await response.json();
            return data.recenttracks?.track || [];
        } catch (error) {
            console.error('Error fetching Last.fm data:', error);
            return null;
        }
    }

    formatTimeAgo(timestamp) {
        if (!timestamp) return 'Just now';

        const now = Date.now();
        const then = parseInt(timestamp) * 1000;
        const diffSeconds = Math.floor((now - then) / 1000);

        if (diffSeconds < 60) return 'Just now';
        if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}m ago`;
        if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)}h ago`;
        return `${Math.floor(diffSeconds / 86400)}d ago`;
    }

    render(tracks) {
        if (!this.container) return;

        if (!tracks || tracks.length === 0) {
            this.container.innerHTML = `
                <div class="lastfm-empty">
                    <span class="lastfm-icon">🎵</span>
                    <span>No recent tracks</span>
                </div>
            `;
            return;
        }

        const currentTrack = tracks[0];
        const isNowPlaying = currentTrack['@attr']?.nowplaying === 'true';
        const albumArt = currentTrack.image?.[2]?.['#text'] || currentTrack.image?.[1]?.['#text'] || '';

        this.container.innerHTML = `
            <div class="lastfm-widget ${isNowPlaying ? 'now-playing' : ''}">
                <div class="lastfm-header">
                    <span class="lastfm-status">${isNowPlaying ? '🎧 Now Playing' : '🎵 Recently Played'}</span>
                </div>
                <div class="lastfm-track">
                    ${albumArt ? `<img src="${albumArt}" alt="Album art" class="lastfm-album-art">` : '<div class="lastfm-album-art-placeholder">🎵</div>'}
                    <div class="lastfm-track-info">
                        <div class="lastfm-track-name">${this.escapeHtml(currentTrack.name)}</div>
                        <div class="lastfm-artist">${this.escapeHtml(currentTrack.artist?.['#text'] || currentTrack.artist)}</div>
                        ${!isNowPlaying && currentTrack.date ? `<div class="lastfm-time">${this.formatTimeAgo(currentTrack.date.uts)}</div>` : ''}
                    </div>
                    ${isNowPlaying ? '<div class="lastfm-playing-indicator"><span></span><span></span><span></span></div>' : ''}
                </div>
            </div>
        `;
    }

    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    async update() {
        const tracks = await this.fetchRecentTracks();
        this.render(tracks);
    }

    start() {
        this.update();
        this.intervalId = setInterval(() => this.update(), this.refreshInterval);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on a page with Last.fm widget container
    const container = document.querySelector('#lastfm-widget');
    if (container && LASTFM_API_KEY) {
        const widget = new LastFMWidget('#lastfm-widget', LASTFM_API_KEY);
        widget.start();
        console.log('🎵 Last.fm widget initialized for user:', LASTFM_USERNAME);
    }
});

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.LastFMWidget = LastFMWidget;
}
