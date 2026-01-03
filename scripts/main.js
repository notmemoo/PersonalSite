document.addEventListener('DOMContentLoaded', () => {
    const noteItems = document.querySelectorAll('.note-item');
    const appBody = document.body;
    const mobileBackBtn = document.getElementById('mobile-back');
    const noteTitleEl = document.getElementById('note-title');
    const noteBodyEl = document.getElementById('note-body');
    const noteDateEl = document.querySelector('.note-date');

    // Live Content Data
    const notesData = {
        'who-is-memo': {
            title: "Who is Memo?",
            date: "January 2, 2026 at 8:41 PM",
            content: `
                <p>I’m the son of immigrant parents who grew up in a home shaped by addiction, abuse, and instability after my father was deported, leaving my mom to raise three kids alone.</p>
                <p>For a long time I drifted into my own bad habits, but eventually I stopped seeing myself as a victim and started taking responsibility for who I want to become. That’s why I’m obsessed with software and web development—creating tools and systems that actually help people who feel lost or unsupported—because I know what it’s like to need help and not have it.</p>
                <br>
                <h3>Interests</h3>
                <p>I’m naturally social, I love soccer and being out in nature, and I’m all in on anything that pushes me to grow. Right now I’m especially interested in:</p>
                <p><b>AI</b><br>
I'm fascinated by Artificial Intelligence. Every day I immerse myself in anything AI-related, staying on the forefront of cutting-edge developments in the space. My goal is to help people understand and integrate this powerful technology into their everyday lives.</p>
                <br>
                <p><b>Pharmacology</b><br>
Pharmacology has always been a big interest of mine, since I was a kid I was always intrigued on how chemicals can affect your brain, and as an adult it was amplified. I love peptides, research chemicals, and anything biohacking related.</p>
                <br>
                <p><b>Cybersecurity</b><br>
Cybersecurity has come more recently, I like how people use their brain power to do things like look for vulnerabilities and the idea of OSINT is very interesting to me. I plan on doing more research in this field.</p>
                <br>
                <p><b>Finance</b><br>
I love the stock market and the crypto market, it was a big part of my life from 2020-2022. I love reading charts and I am always looking at world events and thinking how it could affect the NYSE.</p>
                <br>
                <p>I want to use technology and AI to turn those interests into real solutions for real people.</p>
            `
        },
        'projects': {
            title: "My Work",
            date: "January 1, 2026 at 10:00 AM",
            content: `
                <p>I started recently, and I have two projects I am very proud of. I am still learning how to make things look more professional, one by one.</p>
                <br>
                <div class="project-card">
                    <h3>Varsity Soles</h3>
                    <p>A project I'm making for a friend. Features integrated videos for showcasing his previous work, a dedicated backend, and an admin panel. Includes an easily accessible contact form, social media redirects, and POS integration built directly into the site.</p>
                    <p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;">Built with Next.js, React, and deployed on Vercel</p>
                    <a href="https://varsitysoles.vercel.app" target="_blank" style="color: #E0AB38">Visit Site</a>
                </div>
                <br>
                <div class="project-card">
                    <h3>Super Steve Massage</h3>
                    <p>Another project I've been working on for a friend. Showcases all of his services with a well-thought-out "About Me" section, smooth scroll animations, and a Google Maps embed. Includes a dedicated backend for payments, customer intake forms, and customer inquiries.</p>
                    <p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;">Built with Next.js, React, Google Maps API, and deployed on Vercel</p>
                    <a href="https://superstevemassage.vercel.app" target="_blank" style="color: #E0AB38">Visit Site</a>
                </div>
            `
        },
        'future': {
            title: "Future & Goals",
            date: "December 30, 2025 at 2:15 PM",
            content: `
                <p>Long term, I’m building a life where my family has something solid to stand on—where our family name means resilience, not chaos.</p>
                <br>
                <p>I want to use technology, AI, and my interests in finance, cybersecurity, and pharmacology to create practical tools and systems that make it easier for people to move forward when they don’t have guidance or resources.</p>
                <br>
                <p><b>Ultimately, my goal is to turn what I went through into fuel for helping others out of their own stuck places, so the pain I grew up with becomes proof that change is possible, not a life sentence.</b></p>
            `
        },
        'contact': {
            title: "Contact",
            date: "December 25, 2025 at 9:00 AM",
            content: `
                <p>If you ever want to talk, reach out! I am very happy to make connections!</p>
                <br>
                <ul>
                    <li><b>Email:</b> <a href="mailto:memomar168@gmail.com" style="color: #E0AB38; text-decoration: none;">memomar168@gmail.com</a></li>
                    <li><b>Twitter:</b> <a href="https://x.com/powerupmemo" target="_blank" style="color: #E0AB38; text-decoration: none;">@powerupmemo</a></li>
                    <li><b>Location:</b> Seattle, WA</li>
                </ul>
            `
        }
    };

    // Function to render note
    function loadNote(noteId) {
        const note = notesData[noteId];
        if (!note) return;

        // Fade out slightly for effect (optional, simplified for now)
        noteTitleEl.textContent = note.title;
        noteDateEl.textContent = note.date;
        noteBodyEl.innerHTML = note.content;

        // Update Active State
        noteItems.forEach(item => item.classList.remove('active'));
        const activeItem = document.querySelector(`.note-item[data-id="${noteId}"]`);
        if (activeItem) activeItem.classList.add('active');
    }

    // Event Listeners for Notes
    noteItems.forEach(item => {
        item.addEventListener('click', () => {
            const noteId = item.getAttribute('data-id');
            loadNote(noteId);

            // Mobile Transition: Slide to Editor
            if (window.innerWidth <= 768) {
                appBody.classList.add('view-note');
            }
        });
    });

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
