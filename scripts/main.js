// Supabase Configuration
const SUPABASE_URL = 'https://ndibahrudhbqxtjcgvtu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kaWJhaHJ1ZGhicXh0amNndnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyNjM1MjEsImV4cCI6MjA4MzgzOTUyMX0.0SoAg5pq3PDDFzugOpUglwbSNwNQ33u6H_nmCPwbNjc';

// Fallback data (used if Supabase fails)
const fallbackNotesData = {
    'who-is-memo': {
        title: "Who is Memo?",
        date: "January 13, 2026 at 7:00 PM",
        preview: "I'm a web developer and AI-focused builder based in Seattle...",
        content: `
            <p>I'm a web developer and AI-focused builder based in Seattle, WA. I design and implement clean, fast websites and simple systems for small businesses and solo professionals who want their tech and marketing handled so they can focus on running their business.</p>
            <p>My work is centered on practical execution: clear offers, responsive sites, basic analytics, and lightweight automations that help clients get found, get booked, and get paid.</p>
        `
    },
    'what-i-do': {
        title: "What I Do",
        date: "January 13, 2026 at 7:00 PM",
        preview: "I help businesses improve their online presence and operations...",
        content: `
            <p>I help businesses improve their online presence and operations with a mix of web development, marketing setup, and AI automation.</p>
            
            <h3>🌐 Websites & Landing Pages</h3>
            <p>Design and build responsive, fast-loading websites and landing pages. Focus on clear structure, simple navigation, and easy ways for customers to contact or book.</p>
            <ul>
                <li>Mobile-first, responsive design</li>
                <li>Fast load times and clean code</li>
                <li>Contact forms and booking integrations</li>
                <li>Basic SEO setup</li>
                <li>Hosting and deployment</li>
            </ul>
            
            <h3>📍 Google Business Profiles</h3>
            <p>Create, claim, and optimize Google Business Profiles so businesses appear properly on Search and Maps. Configure categories, services, descriptions, photos, and links to drive calls, directions, and website visits.</p>
            <ul>
                <li>Profile creation or claiming</li>
                <li>Category and service optimization</li>
                <li>Photo and description setup</li>
                <li>Link configuration for calls, directions, and bookings</li>
                <li>Review response strategy</li>
            </ul>
            
            <h3>📈 Ads & Traffic</h3>
            <p>Set up straightforward ad campaigns (Google or social) to send targeted traffic to websites or landing pages. Focus on simple campaigns with clear goals such as calls, bookings, or form submissions.</p>
            <ul>
                <li>Campaign setup and targeting</li>
                <li>Ad copy and creative guidance</li>
                <li>Budget recommendations</li>
                <li>Basic tracking and reporting</li>
                <li>Ongoing optimization</li>
            </ul>
            
            <h3>🤖 AI Automation</h3>
            <p>Use AI tools to automate repetitive tasks like lead capture, basic customer responses, and simple workflows. Integrate AI into existing tools where possible to reduce manual work and improve response times.</p>
            <ul>
                <li>Workflow analysis and automation setup</li>
                <li>AI chatbot or response integration</li>
                <li>Lead capture and routing automation</li>
                <li>Tool integration (CRM, email, calendars)</li>
                <li>Training and documentation</li>
            </ul>
        `
    },
    'currently': {
        title: "Currently",
        date: "January 13, 2026 at 7:00 PM",
        preview: "What I'm working on right now...",
        content: `
            <p>What I'm working on right now.</p>
            <div class="currently-item">
                <span class="currently-emoji">💻</span>
                <div class="currently-content">
                    <div class="currently-label">Building</div>
                    <div class="currently-value">Personal site plus two active projects (<a href="https://varsitysoles.vercel.app" target="_blank">Varsity Soles</a> e-commerce and <a href="https://dwaynesite.vercel.app" target="_blank">Dwayne Fitness</a> site) to showcase live client work.</div>
                </div>
            </div>
            <div class="currently-item">
                <span class="currently-emoji">📈</span>
                <div class="currently-content">
                    <div class="currently-label">Improving</div>
                    <div class="currently-value">AI prompting, front-end fundamentals, and basic marketing skills to make each project more effective, not just visually better.</div>
                </div>
            </div>
            <div class="currently-item">
                <span class="currently-emoji">🎯</span>
                <div class="currently-content">
                    <div class="currently-label">Focused on</div>
                    <div class="currently-value">Landing additional small business projects, refining my service offer, and turning every completed project into a clear case study with measurable outcomes.</div>
                </div>
            </div>
        `
    },
    'thoughts': {
        title: "Thoughts",
        date: "January 13, 2026 at 7:00 PM",
        preview: "Short updates on what I'm focusing on...",
        content: `
            <p>Short updates on what I'm focusing on.</p>
            <div class="journal-entry">
                <div class="journal-date">January 13, 2026</div>
                <p>Currently refining my personal site, client work, and service list: websites, Google Business Profiles, ads, and AI automation for small businesses. Priority is finishing current builds, improving UI and reliability, and preparing simple case studies for each project.</p>
                <p>The near-term goal is straightforward: stable delivery of small business projects, clear offers, and repeatable processes for setup, launch, and basic optimization.</p>
            </div>
        `
    },
    'projects': {
        title: "My Work",
        date: "January 13, 2026 at 10:00 AM",
        preview: "I've made a few projects so far, but these are some that stand out...",
        content: `
            <p>I've made a few projects so far, but these are some of the ones that stand out to me. I'm still learning, and eventually I plan to move on from personal sites and landing pages to apps and productivity tools.</p>
            <div class="project-card">
                <h3>Varsity Soles</h3>
                <p>A project I'm making for a friend. Features integrated videos for showcasing his previous work, a dedicated backend, and an admin panel. Includes an easily accessible contact form, social media redirects, and POS integration built directly into the site.</p>
                <p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;">Built with Next.js, React, and deployed on Vercel</p>
                <a href="https://varsitysoles.vercel.app" target="_blank">Visit Site</a>
            </div>
            <div class="project-card">
                <h3>Super Steve Massage</h3>
                <p>Another project I've been working on for a friend. Showcases all of his services with a well-thought-out "About Me" section, smooth scroll animations, and a Google Maps embed. Includes a dedicated backend for payments, customer intake forms, and customer inquiries.</p>
                <p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;">Built with Next.js, React, Google Maps API, and deployed on Vercel</p>
                <a href="https://superstevemassage.vercel.app" target="_blank">Visit Site</a>
            </div>
            <div class="project-card">
                <h3>Dwayne Fitness</h3>
                <p>A site I made for my nephew. He's embarking on his fitness journey, and I wanted to help him stay motivated with somewhat of a personal blog. He has an admin panel he can log in to and change everything on his site manually. Eventually, we'll add a blog section where he can share his thoughts and what he's working on.</p>
                <p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;">Features a custom-built admin panel—no third-party CMS provider</p>
                <a href="https://dwaynesite.vercel.app" target="_blank">Visit Site</a>
            </div>
        `
    },
    'future': {
        title: "Future & Goals",
        date: "December 30, 2025 at 2:15 PM",
        preview: "Long term, I'm building a life where my family has something...",
        content: `
            <p>Long term, I'm building a life where my family has something solid to stand on—where our family name means resilience, not chaos.</p>
            <p>I want to use technology, AI, and my interests in finance, cybersecurity, and pharmacology to create practical tools and systems that make it easier for people to move forward when they don't have guidance or resources.</p>
            <p><b>Ultimately, my goal is to turn what I went through into fuel for helping others out of their own stuck places, so the pain I grew up with becomes proof that change is possible, not a life sentence.</b></p>
        `
    },
    'contact': {
        title: "Work With Me",
        date: "January 13, 2026 at 7:00 PM",
        preview: "If you need a website, Google Business Profile, ads, or AI automation...",
        content: `
            <p>If you need a website, a refresh of your existing site, a Google Business Profile set up correctly, basic ad campaigns, or simple AI automations, I can handle the technical side so you can focus on operations and customers.</p>
            <ul>
                <li><b>Email:</b> <a href="mailto:gjmartinezjim@gmail.com">gjmartinezjim@gmail.com</a></li>
                <li><b>Twitter:</b> <a href="https://x.com/powerupmemo" target="_blank">@powerupmemo</a></li>
                <li><b>Location:</b> Seattle, WA</li>
            </ul>
        `
    },
    'music': {
        title: "Music",
        date: "January 13, 2026 at 10:49 AM",
        preview: "What I'm listening to right now and some of my favorite playlists...",
        content: `
            <p>Music is a big part of my life. Here's what I'm vibing to and some playlists for different moods.</p>
            
            <div id="lastfm-widget"></div>
            
            <div class="playlist-section">
                <h3>🎧 My Playlists</h3>
                
                <div class="spotify-embed">
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6bSTPN88xc67NOPqGKQhrx?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                
                <div class="spotify-embed">
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0aM89xfJHHmliwazX6XHw7?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                
                <div class="spotify-embed">
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5d6t5wIZ5Gb6XCTMFZIfzv?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        `
    }
};


document.addEventListener('DOMContentLoaded', async () => {
    const noteListEl = document.querySelector('.note-list');
    const noteCountEl = document.querySelector('.note-count');
    const appBody = document.body;
    const mobileBackBtn = document.getElementById('mobile-back');
    const noteTitleEl = document.getElementById('note-title');
    const noteBodyEl = document.getElementById('note-body');
    const noteDateEl = document.querySelector('.note-date');

    let notesData = {};
    let supabaseClient = null;

    // Try to initialize Supabase
    try {
        if (typeof supabase !== 'undefined') {
            supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            const { data, error } = await supabaseClient
                .from('notes')
                .select('*')
                .order('display_order', { ascending: true });

            if (!error && data && data.length > 0) {
                // Convert array to object keyed by id
                data.forEach(note => {
                    notesData[note.id] = {
                        title: note.title,
                        date: note.date,
                        preview: note.preview,
                        content: note.content
                    };
                });
                console.log('✅ Loaded notes from Supabase');

                // Rebuild sidebar with Supabase data
                rebuildSidebar(data);
            } else {
                throw new Error(error?.message || 'No data from Supabase');
            }
        } else {
            throw new Error('Supabase not loaded');
        }
    } catch (e) {
        console.log('⚠️ Using fallback data:', e.message);
        notesData = fallbackNotesData;
        attachNoteListeners();
        loadNote('who-is-memo');
    }

    // Rebuild sidebar from database data
    function rebuildSidebar(notes) {
        noteListEl.innerHTML = '';
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.className = 'note-item' + (index === 0 ? ' active' : '');
            li.dataset.id = note.id;
            li.innerHTML = `
            <div class="note-content">
                <h3 class="note-title">${escapeHtml(note.title)}</h3>
                <div class="note-meta">
                    <span class="note-time">${getRelativeTime(note.updated_at || note.date)}</span>
                    <span class="note-preview">${escapeHtml(note.preview || '')}</span>
                </div>
            </div>
        `;
            noteListEl.appendChild(li);
        });

        // Update note count
        if (noteCountEl) {
            noteCountEl.textContent = `${notes.length} Notes`;
        }

        // Re-attach event listeners
        attachNoteListeners();

        // Load first note
        if (notes.length > 0) {
            loadNote(notes[0].id);
        }
    }

    function getRelativeTime(dateStr) {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        const now = new Date();
        const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return date.toLocaleDateString('en-US', { weekday: 'long' });
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    function escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Function to render note
    function loadNote(noteId) {
        const note = notesData[noteId];
        if (!note) return;

        noteTitleEl.textContent = note.title;
        noteDateEl.textContent = note.date;
        noteBodyEl.innerHTML = note.content;

        // Initialize Last.fm widget if this is the Music note
        if (noteId === 'music' && typeof window.LastFMWidget !== 'undefined') {
            const container = document.querySelector('#lastfm-widget');
            if (container) {
                const widget = new window.LastFMWidget('#lastfm-widget', '2062b96b9f6bcd6428e81014fecd02a0');
                widget.start();
            }
        }

        // Update Active State
        document.querySelectorAll('.note-item').forEach(item => item.classList.remove('active'));
        const activeItem = document.querySelector(`.note-item[data-id="${noteId}"]`);
        if (activeItem) activeItem.classList.add('active');
    }

    // Attach event listeners to note items
    function attachNoteListeners() {
        document.querySelectorAll('.note-item').forEach(item => {
            item.addEventListener('click', () => {
                const noteId = item.getAttribute('data-id');
                loadNote(noteId);

                // Mobile Transition: Slide to Editor
                if (window.innerWidth <= 768) {
                    appBody.classList.add('view-note');
                }
            });
        });
    }

    // Initial setup for fallback mode
    if (Object.keys(notesData).length > 0 && notesData === fallbackNotesData) {
        attachNoteListeners();
    }

    // Mobile Back Button
    mobileBackBtn.addEventListener('click', () => {
        appBody.classList.remove('view-note');
    });

    // Handle Window Resize to reset state if needed
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            appBody.classList.remove('view-note');
        }
    });
});
