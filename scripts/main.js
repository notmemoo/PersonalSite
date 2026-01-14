// Supabase Configuration
const SUPABASE_URL = 'https://ndibahrudhbqxtjcgvtu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kaWJhaHJ1ZGhicXh0amNndnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyNjM1MjEsImV4cCI6MjA4MzgzOTUyMX0.0SoAg5pq3PDDFzugOpUglwbSNwNQ33u6H_nmCPwbNjc';

// Fallback data (used if Supabase fails)
const fallbackNotesData = {
    'who-is-memo': {
        title: "Who is Memo?",
        date: "January 13, 2026 at 3:50 PM",
        preview: "I'm the son of immigrants who grew up in a home shaped by...",
        content: `
            <p>I'm the son of immigrants who grew up in a home shaped by addiction and instability. After my father was deported, my mom raised three kids alone, and without guidance, I drifted into my own bad habits for years.</p>
            <p>Eventually, I stopped seeing myself as a victim and started taking responsibility for who I wanted to become. That shift is why I'm driven to build software and systems that help people who feel stuck or unsupported, because I know what it's like to need help and not have access to it.</p>
            <h3>What Drives Me</h3>
            <p>I'm naturally social, love soccer and nature, and I'm all in on self-improvement. Right now, my focus is on using AI, cybersecurity, finance, and pharmacology to create practical tools that solve real problems.</p>
            <p><b>AI:</b> I stay at the cutting edge of artificial intelligence and focus on helping people understand and integrate it into their lives and businesses in ways that actually matter.</p>
            <p><b>Finance & Markets:</b> From 2020-2022, I was deep in stocks and crypto—reading charts, tracking world events, and understanding how markets move. That analytical mindset now shapes how I approach problem-solving for clients.</p>
            <p><b>Cybersecurity & Pharmacology:</b> I'm fascinated by how systems work—whether it's finding vulnerabilities in code, understanding OSINT techniques, or how compounds affect the brain through biohacking and peptides.</p>
            <p><b>My mission is simple: Use technology to help people who don't have the resources or guidance to help themselves, turning my own experience into something that actually makes a difference.</b></p>
        `
    },
    'currently': {
        title: "Currently...",
        date: "January 13, 2026 at 3:50 PM",
        preview: "What I'm working on right now. Updated regularly...",
        content: `
            <p>What I'm working on right now. Updated regularly so you know where my focus is.</p>
            <div class="currently-item">
                <span class="currently-emoji">💻</span>
                <div class="currently-content">
                    <div class="currently-label">Building</div>
                    <div class="currently-value">Finishing my personal site, revamping two client projects (<a href="https://varsitysoles.vercel.app" target="_blank">Varsity Soles</a> e-commerce, <a href="https://dwaynesite.vercel.app" target="_blank">Dwayne Fitness</a> landing page), and using AI tools to move faster without sacrificing quality.</div>
                </div>
            </div>
            <div class="currently-item">
                <span class="currently-emoji">🧠</span>
                <div class="currently-content">
                    <div class="currently-label">Learning</div>
                    <div class="currently-value">Mastering AI prompting and MCP integration, diving into cybersecurity fundamentals (OSINT, vulnerability research), and sharpening my marketing skills so I can position client work that actually converts.</div>
                </div>
            </div>
            <div class="currently-item">
                <span class="currently-emoji">📚</span>
                <div class="currently-content">
                    <div class="currently-label">Reading</div>
                    <div class="currently-value">Daily deep-dives on X/Twitter for AI breakthroughs, cybersecurity reports to understand how systems break, and fintech/market analysis to stay sharp on how money and technology intersect.</div>
                </div>
            </div>
            <div class="currently-item">
                <span class="currently-emoji">🎯</span>
                <div class="currently-content">
                    <div class="currently-label">Focused on</div>
                    <div class="currently-value">Building a foundation where my skills compound: landing 2-3 more client projects this month, tightening my offer so it's crystal clear who I help and how, and turning every project into proof I can deliver results—not just talk about them.</div>
                </div>
            </div>
        `
    },
    'thoughts': {
        title: "Thoughts",
        date: "January 13, 2026 at 3:50 PM",
        preview: "Random reflections and what's on my mind...",
        content: `
            <p>Random reflections and what's on my mind. Raw, unfiltered updates on where my head's at.</p>
            <div class="journal-entry">
                <div class="journal-date">January 13, 2026</div>
                <p>Homework's done, personal site is live, and now I'm focused on shipping client work and sharpening my skills in web development. I've got an app idea brewing, something tied to education and helping people get things done, but I'm not rushing it.</p>
                <p>Right now, the work is simple: master the fundamentals, build proof with real projects, and resist the urge to jump ahead before the foundation is solid. The market for AI-powered tools that simplify complex topics (finance, health, tech) is wide open, but execution matters more than the idea.</p>
                <p>For now: UI polish on current projects, no social media distractions, and making sure everything I ship actually works. When the app idea is ready, it'll be backed by real skill and client proof—not just hype.</p>
                <p><b>Big things are being built, not just talked about.</b></p>
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
        title: "Let's Work",
        date: "January 13, 2026 at 3:50 PM",
        preview: "If you're a small business owner or someone building something...",
        content: `
            <p>If you're a small business owner, solo professional, or someone building something that needs a website, backend, or tech support—reach out. I help people who don't have time to figure out the tech side so they can focus on what they're actually good at.</p>
            <p>Also open to connecting if you're working on something interesting in AI, finance, cybersecurity, or just want to talk shop about building in public.</p>
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
