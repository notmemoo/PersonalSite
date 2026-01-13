-- Supabase Database Setup for Memo's Notes
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor)

-- Create the notes table
CREATE TABLE IF NOT EXISTS notes (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    date TEXT,
    preview TEXT,
    content TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

-- Allow public read access (anyone can view notes)
CREATE POLICY "Allow public read access" ON notes
    FOR SELECT
    USING (true);

-- Allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated insert" ON notes
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated update" ON notes
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow authenticated delete" ON notes
    FOR DELETE
    TO authenticated
    USING (true);

-- Insert initial seed data
INSERT INTO notes (id, title, date, preview, content, display_order) VALUES
(
    'who-is-memo',
    'Who is Memo?',
    'January 2, 2026 at 8:41 PM',
    'I''m the son of immigrants and grew up in a home shaped by...',
    '<p>I''m the son of immigrant parents who grew up in a home shaped by addiction, abuse, and instability after my father was deported, leaving my mom to raise three kids alone.</p>
<p>For a long time I drifted into my own bad habits, but eventually I stopped seeing myself as a victim and started taking responsibility for who I want to become. That''s why I''m obsessed with software and web development—creating tools and systems that actually help people who feel lost or unsupported—because I know what it''s like to need help and not have it.</p>
<h3>Interests</h3>
<p>I''m naturally social, I love soccer and being out in nature, and I''m all in on anything that pushes me to grow. Right now I''m especially interested in:</p>
<p><b>AI</b><br>I''m fascinated by Artificial Intelligence. Every day I immerse myself in anything AI-related, staying on the forefront of cutting-edge developments in the space. My goal is to help people understand and integrate this powerful technology into their everyday lives.</p>
<p><b>Pharmacology</b><br>Pharmacology has always been a big interest of mine, since I was a kid I was always intrigued on how chemicals can affect your brain, and as an adult it was amplified. I love peptides, research chemicals, and anything biohacking related.</p>
<p><b>Cybersecurity</b><br>Cybersecurity has come more recently, I like how people use their brain power to do things like look for vulnerabilities and the idea of OSINT is very interesting to me. I plan on doing more research in this field.</p>
<p><b>Finance</b><br>I love the stock market and the crypto market, it was a big part of my life from 2020-2022. I love reading charts and I am always looking at world events and thinking how it could affect the NYSE.</p>
<p>I want to use technology and AI to turn those interests into real solutions for real people.</p>',
    1
),
(
    'currently',
    'Currently...',
    'January 12, 2026 at 4:00 PM',
    'What I''m reading, watching, learning, and building right now...',
    '<p>What I''m up to right now. I try to keep this updated so you can see what''s on my plate.</p>
<div class="currently-item">
    <span class="currently-emoji">💻</span>
    <div class="currently-content">
        <div class="currently-label">Building</div>
        <div class="currently-value">This personal site + client projects (Varsity Soles, Super Steve Massage)</div>
    </div>
</div>
<div class="currently-item">
    <span class="currently-emoji">🧠</span>
    <div class="currently-content">
        <div class="currently-label">Learning</div>
        <div class="currently-value">AI agents, Next.js, and diving deeper into web development</div>
    </div>
</div>
<div class="currently-item">
    <span class="currently-emoji">📚</span>
    <div class="currently-content">
        <div class="currently-label">Reading</div>
        <div class="currently-value">Anything AI-related, research papers, tech blogs</div>
    </div>
</div>
<div class="currently-item">
    <span class="currently-emoji">🎯</span>
    <div class="currently-content">
        <div class="currently-label">Focused on</div>
        <div class="currently-value">Building a solid foundation for my career and helping others along the way</div>
    </div>
</div>',
    2
),
(
    'thoughts',
    'Thoughts',
    'January 12, 2026 at 3:30 PM',
    'Random reflections, ideas, and things on my mind...',
    '<p>Random reflections, ideas, and things on my mind. This is where I share what I''m thinking about.</p>
<div class="journal-entry">
    <div class="journal-date">January 12, 2026</div>
    <p>Started adding more personal touches to this site. I want people who visit to actually get a sense of who I am, not just see a portfolio. The iOS Notes vibe feels right—it''s personal, intimate, like you''re reading my actual thoughts.</p>
    <p>Been thinking a lot about how tech can help people who grew up like me. There''s so much potential to build tools that actually make a difference.</p>
</div>
<div class="journal-entry">
    <div class="journal-date">January 10, 2026</div>
    <p>AI is moving so fast. Every day there''s something new. I''m trying to stay on top of it all while also actually building things. It''s a balance—consuming vs. creating.</p>
</div>',
    3
),
(
    'projects',
    'My Work',
    'January 1, 2026 at 10:00 AM',
    'I started recently, and I have two projects I am very proud of...',
    '<p>I started recently, and I have two projects I am very proud of. I am still learning how to make things look more professional, one by one.</p>
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
</div>',
    4
),
(
    'future',
    'Future & Goals',
    'December 30, 2025 at 2:15 PM',
    'Long term, I''m building a life where my family has something...',
    '<p>Long term, I''m building a life where my family has something solid to stand on—where our family name means resilience, not chaos.</p>
<p>I want to use technology, AI, and my interests in finance, cybersecurity, and pharmacology to create practical tools and systems that make it easier for people to move forward when they don''t have guidance or resources.</p>
<p><b>Ultimately, my goal is to turn what I went through into fuel for helping others out of their own stuck places, so the pain I grew up with becomes proof that change is possible, not a life sentence.</b></p>',
    5
),
(
    'contact',
    'Contact',
    'December 25, 2025 at 9:00 AM',
    'If you ever want to talk, reach out! I am very happy to...',
    '<p>If you ever want to talk, reach out! I am very happy to make connections!</p>
<ul>
    <li><b>Email:</b> <a href="mailto:gjmartinezjim@gmail.com">gjmartinezjim@gmail.com</a></li>
    <li><b>Twitter:</b> <a href="https://x.com/powerupmemo" target="_blank">@powerupmemo</a></li>
    <li><b>Location:</b> Seattle, WA</li>
</ul>',
    6
),
(
    'music',
    'Music',
    'January 13, 2026 at 10:49 AM',
    'What I''m listening to right now and some of my favorite playlists...',
    '<p>Music is a big part of my life. Here''s what I''m vibing to and some playlists for different moods.</p>

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
    7
);
