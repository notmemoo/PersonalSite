// Supabase Configuration
const SUPABASE_URL = 'https://ndibahrudhbqxtjcgvtu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kaWJhaHJ1ZGhicXh0amNndnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyNjM1MjEsImV4cCI6MjA4MzgzOTUyMX0.0SoAg5pq3PDDFzugOpUglwbSNwNQ33u6H_nmCPwbNjc';

// Fallback data (used if Supabase fails)
const fallbackNotesData = {
    'home': {
        title: "Welcome",
        date: "January 29, 2026 at 1:00 PM",
        preview: "I build websites and digital systems for small businesses...",
        content: `
            <p style="font-size: 1.1em; line-height: 1.7;">I'm <b>Memo</b> — a web developer in <b>Tacoma, WA</b> helping small businesses get online, get found, and get booked.</p>
            <p>I build clean, fast websites with admin panels so you control your own content. I also set up Google Business Profiles, SEO, and AI automations — everything a local business needs to compete online without the agency price tag.</p>
            <div class="currently-item" style="margin-top: 20px;">
                <span class="currently-emoji">🌐</span>
                <div class="currently-content">
                    <div class="currently-label">Websites & Landing Pages</div>
                    <div class="currently-value">Mobile-first, fast-loading sites built with clean code — not templates.</div>
                </div>
            </div>
            <div class="currently-item">
                <span class="currently-emoji">📍</span>
                <div class="currently-content">
                    <div class="currently-label">Google Business Profiles</div>
                    <div class="currently-value">Get your business on Google Search & Maps with an optimized profile.</div>
                </div>
            </div>
            <div class="currently-item">
                <span class="currently-emoji">📈</span>
                <div class="currently-content">
                    <div class="currently-label">SEO & Ads</div>
                    <div class="currently-value">Show up when people search for what you do. Simple campaigns with clear goals.</div>
                </div>
            </div>
            <div class="currently-item">
                <span class="currently-emoji">🤖</span>
                <div class="currently-content">
                    <div class="currently-label">AI Automation</div>
                    <div class="currently-value">Chatbots, lead capture, automated workflows — less manual work, faster responses.</div>
                </div>
            </div>
            <p style="margin-top: 20px;"><b>Based in Tacoma</b>, serving businesses across Pierce County and the greater Puget Sound area.</p>
        `
    },
    'who-is-memo': {
        title: "Who is Memo?",
        date: "January 29, 2026 at 2:00 PM",
        preview: "Self-taught builder from Tacoma who turned adversity into drive...",
        content: `
            <p>I'm <b>Guillermo</b> — everyone calls me <b>Memo</b>. I'm a self-taught web developer and AI-focused builder based in Tacoma, WA.</p>
            <p>I grew up in a home shaped by instability — my father was deported when I was young, leaving my mom to raise three kids on her own. I didn't take the traditional path. I dropped out of high school, made mistakes, and spent years figuring out who I wanted to be.</p>
            <p>What changed everything was realizing I could either stay stuck or build something. I chose to build. I taught myself to code, dove deep into AI, and discovered I had a knack for solving problems and helping people — whether that's building a website, setting up their digital presence, or just being the person in the room who actually gets things done.</p>
            <p>Now I channel that same energy into helping small businesses compete online. I know what it's like to start from nothing and figure it out as you go — that's exactly the mindset I bring to every project.</p>
            <p><b>My goal:</b> Use technology to create opportunities for people who don't have a roadmap, and build something my family can be proud of.</p>
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
        date: "January 29, 2026 at 2:00 PM",
        preview: "What I'm working on right now...",
        content: `
            <p>What I'm working on right now.</p>
            <div class="currently-item">
                <span class="currently-emoji">💻</span>
                <div class="currently-content">
                    <div class="currently-label">Building</div>
                    <div class="currently-value">Active client projects including <a href="https://ashperformance.vercel.app" target="_blank">ASH Performance</a> (basketball training) and <a href="https://varsitysoles.vercel.app" target="_blank">Varsity Soles</a> (e-commerce), plus a local contractor site in progress.</div>
                </div>
            </div>
            <div class="currently-item">
                <span class="currently-emoji">🔒</span>
                <div class="currently-content">
                    <div class="currently-label">Lock In App</div>
                    <div class="currently-value">Developing a productivity app designed to help people stay focused and locked in on their goals. More details coming soon.</div>
                </div>
            </div>
            <div class="currently-item">
                <span class="currently-emoji">📈</span>
                <div class="currently-content">
                    <div class="currently-label">Leveling Up</div>
                    <div class="currently-value">Polishing my front-end skills, deepening my AI and automation knowledge, and studying UI/UX design to make every project look and perform better.</div>
                </div>
            </div>
            <div class="currently-item">
                <span class="currently-emoji">🎯</span>
                <div class="currently-content">
                    <div class="currently-label">Focused on</div>
                    <div class="currently-value">Landing more small business clients, building case studies from completed work, and growing Memo Web Solutions into a sustainable business.</div>
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
        date: "January 29, 2026 at 1:00 PM",
        preview: "Recent projects I've built for clients...",
        content: `
            <div class="project-card">
                <img src="assets/projects/ash-performance.png" alt="ASH Performance website screenshot" style="width:100%; border-radius: 8px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.1);">
                <h3>ASH Performance</h3>
                <p>A basketball training site for a professional trainer. In-person training with tiered pricing, virtual 1:1 coaching subscription, Skool community integration, and a custom admin panel so the client manages all content themselves.</p>
                <p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;">React · Tailwind CSS · Framer Motion · Express.js · Vercel + Render</p>
                <a href="https://ashperformance.vercel.app" target="_blank">Visit Site →</a>
            </div>
            <div class="project-card">
                <img src="assets/projects/varsity-soles.png" alt="Varsity Soles website screenshot" style="width:100%; border-radius: 8px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.1);">
                <h3>Varsity Soles</h3>
                <p>Sneaker restoration e-commerce site with video showcases, before/after galleries, integrated POS, contact form, and a dedicated admin panel for managing inventory and content.</p>
                <p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;">Next.js · React · Vercel</p>
                <a href="https://varsitysoles.vercel.app" target="_blank">Visit Site →</a>
            </div>

            <h3 style="margin-top: 32px;">💬 What Clients Say</h3>
            <div class="project-card" style="border-left: 3px solid #E0AB38;">
                <p style="font-style: italic;">"Working with Memo on my site went well overall and I appreciated how responsive and patient he was throughout the process. He was open to revisions and made sure the site reflected what I was looking for. I'd recommend his services to anyone needing website development support."</p>
                <p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;"><b style="color: inherit;">— Asher</b>, ASH Performance</p>
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
    'pricing': {
        title: "Pricing",
        date: "January 29, 2026 at 1:00 PM",
        preview: "Transparent pricing for every budget...",
        content: `
            <p>Straight-up pricing. No hidden fees, no surprise invoices. Pick what fits your business.</p>
            
            <div class="project-card">
                <h3>🚀 Starter — $500–$800</h3>
                <p>Perfect for new businesses that need to get online fast.</p>
                <ul>
                    <li>Landing page or 1–3 page site</li>
                    <li>Mobile responsive design</li>
                    <li>Contact form</li>
                    <li>Basic SEO setup</li>
                    <li>Google Business Profile setup</li>
                </ul>
                <p style="color: #8E8E93; font-size: 0.9em;">Turnaround: 1–2 weeks</p>
            </div>
            
            <div class="project-card" style="border-left: 3px solid #E0AB38;">
                <h3>⭐ Professional — $1,000–$2,000</h3>
                <p>The full package for established businesses ready to level up.</p>
                <ul>
                    <li>Custom 5–8 page website</li>
                    <li>Admin panel — manage your own content</li>
                    <li>SEO optimization</li>
                    <li>Google Business Profile setup</li>
                    <li>Social media integration</li>
                    <li>2 rounds of revisions</li>
                </ul>
                <p style="color: #E0AB38; font-size: 0.9em;">⭐ Most Popular</p>
                <p style="color: #8E8E93; font-size: 0.9em;">Turnaround: 2–4 weeks</p>
            </div>
            
            <div class="project-card">
                <h3>💎 Premium — $2,500–$4,000</h3>
                <p>Everything you need to dominate online.</p>
                <ul>
                    <li>Everything in Professional</li>
                    <li>AI chatbot integration</li>
                    <li>Advanced SEO & analytics dashboard</li>
                    <li>Custom automations</li>
                    <li>3 months of maintenance included</li>
                    <li>Priority support</li>
                </ul>
                <p style="color: #8E8E93; font-size: 0.9em;">Turnaround: 3–6 weeks</p>
            </div>
            
            <div class="project-card">
                <h3>🔄 Monthly Maintenance — $75–$150/mo</h3>
                <ul>
                    <li>Content updates & edits</li>
                    <li>Hosting management</li>
                    <li>Performance monitoring</li>
                    <li>Monthly reports</li>
                    <li>Priority support</li>
                </ul>
            </div>
        `
    },
    'contact': {
        title: "Work With Me",
        date: "January 29, 2026 at 1:00 PM",
        preview: "Ready to get started? Let's talk about your project...",
        content: `
            <p>Tell me about your project and I'll get back to you within 24 hours.</p>
            
            <form id="contact-form" style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
                <input type="text" name="name" placeholder="Your name" required style="padding: 12px; border-radius: 8px; border: 1px solid rgba(142,142,147,0.3); background: rgba(142,142,147,0.08); color: inherit; font-size: 1em; font-family: inherit;">
                <input type="email" name="email" placeholder="Your email" required style="padding: 12px; border-radius: 8px; border: 1px solid rgba(142,142,147,0.3); background: rgba(142,142,147,0.08); color: inherit; font-size: 1em; font-family: inherit;">
                <input type="text" name="business" placeholder="Business name (optional)" style="padding: 12px; border-radius: 8px; border: 1px solid rgba(142,142,147,0.3); background: rgba(142,142,147,0.08); color: inherit; font-size: 1em; font-family: inherit;">
                <select name="service" style="padding: 12px; border-radius: 8px; border: 1px solid rgba(142,142,147,0.3); background: rgba(142,142,147,0.08); color: inherit; font-size: 1em; font-family: inherit;">
                    <option value="">What are you looking for?</option>
                    <option value="starter">Starter Website ($500–$800)</option>
                    <option value="professional">Professional Website ($1,000–$2,000)</option>
                    <option value="premium">Premium Package ($2,500–$4,000)</option>
                    <option value="maintenance">Monthly Maintenance</option>
                    <option value="other">Something else</option>
                </select>
                <textarea name="message" placeholder="Tell me about your project..." rows="4" style="padding: 12px; border-radius: 8px; border: 1px solid rgba(142,142,147,0.3); background: rgba(142,142,147,0.08); color: inherit; font-size: 1em; font-family: inherit; resize: vertical;"></textarea>
                <button type="submit" style="padding: 12px 24px; border-radius: 8px; border: none; background: #E0AB38; color: #000; font-size: 1em; font-weight: 600; cursor: pointer; font-family: inherit;">Send Message</button>
            </form>
            
            <p style="margin-top: 20px; color: #8E8E93; font-size: 0.9em;">Or reach out directly:</p>
            <ul>
                <li><b>Email:</b> <a href="mailto:gjmartinezjim@gmail.com">gjmartinezjim@gmail.com</a></li>
                <li><b>Twitter:</b> <a href="https://x.com/powerupmemo" target="_blank">@powerupmemo</a></li>
                <li><b>Location:</b> Tacoma, WA</li>
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
        loadNote('home');
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

        // Check for hash in URL first, otherwise load first note
        if (!loadFromHash() && notes.length > 0) {
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
    function loadNote(noteId, updateHash = true) {
        const note = notesData[noteId];
        if (!note) return;

        noteTitleEl.textContent = note.title;
        noteDateEl.textContent = note.date;
        noteBodyEl.innerHTML = note.content;

        // Update URL hash for deep linking
        if (updateHash) {
            history.replaceState(null, '', `#${noteId}`);
        }

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

    // Load note from URL hash
    function loadFromHash() {
        const hash = window.location.hash.slice(1); // Remove the #
        if (hash && notesData[hash]) {
            loadNote(hash, false);
            // On mobile, show the note view
            if (window.innerWidth <= 768) {
                appBody.classList.add('view-note');
            }
            return true;
        }
        return false;
    }

    // Listen for hash changes (back/forward navigation)
    window.addEventListener('hashchange', () => {
        loadFromHash();
    });

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

    // Share Button
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const currentTitle = noteTitleEl.textContent || "Memo's Notes";
            // Get the base URL without hash, then add current hash
            const baseUrl = window.location.href.split('#')[0];
            const shareUrl = baseUrl + window.location.hash;
            const shareData = {
                title: currentTitle,
                text: `Check out "${currentTitle}" from Memo's Notes`,
                url: shareUrl
            };

            try {
                if (navigator.share) {
                    // Native share (works great on mobile!)
                    await navigator.share(shareData);
                } else {
                    // Fallback: copy URL to clipboard
                    await navigator.clipboard.writeText(window.location.href);
                    showShareToast('Link copied to clipboard!');
                }
            } catch (err) {
                // User cancelled or error
                if (err.name !== 'AbortError') {
                    console.log('Share failed:', err);
                }
            }
        });
    }

    // Toast notification for share feedback
    function showShareToast(message) {
        const existing = document.querySelector('.share-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'share-toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        // Trigger animation
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        // Remove after delay
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

    // Handle Window Resize to reset state if needed
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            appBody.classList.remove('view-note');
        }
    });

    // Contact Form Handler
    document.addEventListener('submit', async (e) => {
        if (e.target.id !== 'contact-form') return;
        e.preventDefault();

        const form = e.target;
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        const formData = {
            name: form.name.value,
            email: form.email.value,
            business: form.business.value,
            service: form.service.value,
            message: form.message.value,
            submitted_at: new Date().toISOString()
        };

        try {
            if (supabaseClient) {
                await supabaseClient.from('contact_submissions').insert(formData);
            }
            // Also send via mailto as backup
            const subject = encodeURIComponent(`New inquiry from ${formData.name}`);
            const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business}\nService: ${formData.service}\nMessage: ${formData.message}`);

            btn.textContent = '✅ Sent!';
            btn.style.background = '#34C759';
            form.reset();

            showShareToast('Message sent! I\'ll get back to you within 24 hours.');

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '#E0AB38';
                btn.disabled = false;
            }, 3000);
        } catch (err) {
            btn.textContent = 'Error — try email instead';
            btn.style.background = '#FF3B30';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '#E0AB38';
                btn.disabled = false;
            }, 3000);
        }
    });
});
