-- Run this in Supabase SQL Editor to update ALL notes to match main.js fallback data
-- This fixes the issue where notes reverted to old content

-- Update "Who is Memo?"
UPDATE notes SET 
    date = 'January 2, 2026 at 8:41 PM',
    preview = 'I''m the son of immigrants and grew up in a home shaped by...',
    content = '<p>I''m the son of immigrant parents who grew up in a home shaped by addiction, abuse, and instability after my father was deported, leaving my mom to raise three kids alone.</p>
<p>For a long time I drifted into my own bad habits, but eventually I stopped seeing myself as a victim and started taking responsibility for who I want to become. That''s why I''m obsessed with software and web development—creating tools and systems that actually help people who feel lost or unsupported—because I know what it''s like to need help and not have it.</p>
<h3>Interests</h3>
<p>I''m naturally social, I love soccer and being out in nature, and I''m all in on anything that pushes me to grow. Right now I''m especially interested in:</p>
<p><b>AI</b><br>I''m fascinated by Artificial Intelligence. Every day I immerse myself in anything AI-related, staying on the forefront of cutting-edge developments in the space. My goal is to help people understand and integrate this powerful technology into their everyday lives.</p>
<p><b>Pharmacology</b><br>Pharmacology has always been a big interest of mine, since I was a kid I was always intrigued on how chemicals can affect your brain, and as an adult it was amplified. I love peptides, research chemicals, and anything biohacking related.</p>
<p><b>Cybersecurity</b><br>Cybersecurity has come more recently, I like how people use their brain power to do things like look for vulnerabilities and the idea of OSINT is very interesting to me. I plan on doing more research in this field.</p>
<p><b>Finance</b><br>I love the stock market and the crypto market, it was a big part of my life from 2020-2022. I love reading charts and I am always looking at world events and thinking how it could affect the NYSE.</p>
<p><b>My goal is to use AI and technology to help people who wouldn''t otherwise have the resources or guidance to help themselves—turning my own experience into something that actually makes a difference.</b></p>',
    updated_at = NOW()
WHERE id = 'who-is-memo';

-- Update "Currently..."
UPDATE notes SET 
    date = 'January 13, 2026 at 10:00 AM',
    preview = 'What I''m reading, watching, learning, and building right now...',
    content = '<p>What I''m up to right now. I try to keep this updated so you can see what''s on my plate.</p>
<div class="currently-item">
    <span class="currently-emoji">💻</span>
    <div class="currently-content">
        <div class="currently-label">Building</div>
        <div class="currently-value">Building a personal site for myself, and workshopping two sites (<a href="https://varsitysoles.vercel.app" target="_blank">Varsity Soles</a>, <a href="https://dwaynesite.vercel.app" target="_blank">Dwayne Fitness</a>)</div>
    </div>
</div>
<div class="currently-item">
    <span class="currently-emoji">🧠</span>
    <div class="currently-content">
        <div class="currently-label">Learning</div>
        <div class="currently-value">How to prompt AI better, MCP, Cybersecurity, and slowly diving into software development and marketing</div>
    </div>
</div>
<div class="currently-item">
    <span class="currently-emoji">📚</span>
    <div class="currently-content">
        <div class="currently-label">Reading</div>
        <div class="currently-value">Lots of research notes on X/Twitter, Future of AI blog posts, and Cybersecurity reports</div>
    </div>
</div>
<div class="currently-item">
    <span class="currently-emoji">🎯</span>
    <div class="currently-content">
        <div class="currently-label">Focused on</div>
        <div class="currently-value">Getting the foundation set for my career and expanding my skills. Looking for businesses who could use a site revamp and offering them services</div>
    </div>
</div>',
    updated_at = NOW()
WHERE id = 'currently';

-- Update "Thoughts"
UPDATE notes SET 
    date = 'January 13, 2026 at 10:00 AM',
    preview = 'Random reflections, ideas, and things on my mind...',
    content = '<p>Random reflections, ideas, and things on my mind. This is where I share what I''m thinking about.</p>
<div class="journal-entry">
    <div class="journal-date">January 13, 2026</div>
    <p>Working on my personal site now that all my homework is done. Very excited for the future, and I''m interested in how far I can take this. Currently focused on web development, but I have an idea for an app, and I really don''t want to rush into it.</p>
    <p>The market is screaming innovation, and I want to be the one to innovate it. Marketing should be easy, the market is there. Nothing on social media, yet. For now, I need to focus on the UI and making sure everything is smooth. Big things coming!</p>
</div>',
    updated_at = NOW()
WHERE id = 'thoughts';

-- Update "My Work" (projects)
UPDATE notes SET 
    date = 'January 13, 2026 at 10:00 AM',
    preview = 'I''ve made a few projects so far, but these are some that stand out...',
    content = '<p>I''ve made a few projects so far, but these are some of the ones that stand out to me. I''m still learning, and eventually I plan to move on from personal sites and landing pages to apps and productivity tools.</p>
<div class="project-card">
    <h3>Varsity Soles</h3>
    <p>A project I''m making for a friend. Features integrated videos for showcasing his previous work, a dedicated backend, and an admin panel. Includes an easily accessible contact form, social media redirects, and POS integration built directly into the site.</p>
    <p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;">Built with Next.js, React, and deployed on Vercel</p>
    <a href="https://varsitysoles.vercel.app" target="_blank">Visit Site</a>
</div>
<div class="project-card">
    <h3>Super Steve Massage</h3>
    <p>Another project I''ve been working on for a friend. Showcases all of his services with a well-thought-out "About Me" section, smooth scroll animations, and a Google Maps embed. Includes a dedicated backend for payments, customer intake forms, and customer inquiries.</p>
    <p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;">Built with Next.js, React, Google Maps API, and deployed on Vercel</p>
    <a href="https://superstevemassage.vercel.app" target="_blank">Visit Site</a>
</div>
<div class="project-card">
    <h3>Dwayne Fitness</h3>
    <p>A site I made for my nephew. He''s embarking on his fitness journey, and I wanted to help him stay motivated with somewhat of a personal blog. He has an admin panel he can log in to and change everything on his site manually. Eventually, we''ll add a blog section where he can share his thoughts and what he''s working on.</p>
    <p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;">Features a custom-built admin panel—no third-party CMS provider</p>
    <a href="https://dwaynesite.vercel.app" target="_blank">Visit Site</a>
</div>',
    updated_at = NOW()
WHERE id = 'projects';

-- Update "Future & Goals"
UPDATE notes SET 
    date = 'December 30, 2025 at 2:15 PM',
    preview = 'Long term, I''m building a life where my family has something...',
    content = '<p>Long term, I''m building a life where my family has something solid to stand on—where our family name means resilience, not chaos.</p>
<p>I want to use technology, AI, and my interests in finance, cybersecurity, and pharmacology to create practical tools and systems that make it easier for people to move forward when they don''t have guidance or resources.</p>
<p><b>Ultimately, my goal is to turn what I went through into fuel for helping others out of their own stuck places, so the pain I grew up with becomes proof that change is possible, not a life sentence.</b></p>',
    updated_at = NOW()
WHERE id = 'future';

-- Update "Contact"
UPDATE notes SET 
    date = 'December 25, 2025 at 9:00 AM',
    preview = 'If you ever want to talk, reach out! I am very happy to...',
    content = '<p>If you ever want to talk, reach out! I am very happy to make connections!</p>
<ul>
    <li><b>Email:</b> <a href="mailto:gjmartinezjim@gmail.com">gjmartinezjim@gmail.com</a></li>
    <li><b>Twitter:</b> <a href="https://x.com/powerupmemo" target="_blank">@powerupmemo</a></li>
    <li><b>Location:</b> Seattle, WA</li>
</ul>',
    updated_at = NOW()
WHERE id = 'contact';

-- Update "Music" (keeping Spotify embeds)
UPDATE notes SET 
    date = 'January 13, 2026 at 10:49 AM',
    preview = 'What I''m listening to right now and some of my favorite playlists...',
    content = '<p>Music is a big part of my life. Here''s what I''m vibing to and some playlists for different moods.</p>

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
</div>',
    updated_at = NOW()
WHERE id = 'music';

-- Verify the updates
SELECT id, title, LEFT(content, 50) as content_preview FROM notes ORDER BY display_order;
