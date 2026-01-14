-- Run this in Supabase SQL Editor to update ALL notes with refined content
-- Updated: January 13, 2026

-- Update "Who is Memo?"
UPDATE notes SET 
    title = 'Who is Memo?',
    date = 'January 13, 2026 at 3:50 PM',
    preview = 'I''m the son of immigrants who grew up in a home shaped by...',
    content = '<p>I''m the son of immigrants who grew up in a home shaped by addiction and instability. After my father was deported, my mom raised three kids alone, and without guidance, I drifted into my own bad habits for years.</p>
<p>Eventually, I stopped seeing myself as a victim and started taking responsibility for who I wanted to become. That shift is why I''m driven to build software and systems that help people who feel stuck or unsupported, because I know what it''s like to need help and not have access to it.</p>
<h3>What Drives Me</h3>
<p>I''m naturally social, love soccer and nature, and I''m all in on self-improvement. Right now, my focus is on using AI, cybersecurity, finance, and pharmacology to create practical tools that solve real problems.</p>
<p><b>AI:</b> I stay at the cutting edge of artificial intelligence and focus on helping people understand and integrate it into their lives and businesses in ways that actually matter.</p>
<p><b>Finance & Markets:</b> From 2020-2022, I was deep in stocks and crypto—reading charts, tracking world events, and understanding how markets move. That analytical mindset now shapes how I approach problem-solving for clients.</p>
<p><b>Cybersecurity & Pharmacology:</b> I''m fascinated by how systems work—whether it''s finding vulnerabilities in code, understanding OSINT techniques, or how compounds affect the brain through biohacking and peptides.</p>
<p><b>My mission is simple: Use technology to help people who don''t have the resources or guidance to help themselves, turning my own experience into something that actually makes a difference.</b></p>',
    updated_at = NOW()
WHERE id = 'who-is-memo';

-- Update "Currently..."
UPDATE notes SET 
    title = 'Currently...',
    date = 'January 13, 2026 at 3:50 PM',
    preview = 'What I''m working on right now. Updated regularly...',
    content = '<p>What I''m working on right now. Updated regularly so you know where my focus is.</p>
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
        <div class="currently-value">Building a foundation where my skills compound: landing 2-3 more client projects this month, tightening my offer so it''s crystal clear who I help and how, and turning every project into proof I can deliver results—not just talk about them.</div>
    </div>
</div>',
    updated_at = NOW()
WHERE id = 'currently';

-- Update "Thoughts"
UPDATE notes SET 
    title = 'Thoughts',
    date = 'January 13, 2026 at 3:50 PM',
    preview = 'Random reflections and what''s on my mind...',
    content = '<p>Random reflections and what''s on my mind. Raw, unfiltered updates on where my head''s at.</p>
<div class="journal-entry">
    <div class="journal-date">January 13, 2026</div>
    <p>Homework''s done, personal site is live, and now I''m focused on shipping client work and sharpening my skills in web development. I''ve got an app idea brewing, something tied to education and helping people get things done, but I''m not rushing it.</p>
    <p>Right now, the work is simple: master the fundamentals, build proof with real projects, and resist the urge to jump ahead before the foundation is solid. The market for AI-powered tools that simplify complex topics (finance, health, tech) is wide open, but execution matters more than the idea.</p>
    <p>For now: UI polish on current projects, no social media distractions, and making sure everything I ship actually works. When the app idea is ready, it''ll be backed by real skill and client proof—not just hype.</p>
    <p><b>Big things are being built, not just talked about.</b></p>
</div>',
    updated_at = NOW()
WHERE id = 'thoughts';

-- Update "My Work" (projects) - keeping existing content
UPDATE notes SET 
    date = 'January 13, 2026 at 3:50 PM',
    updated_at = NOW()
WHERE id = 'projects';

-- Update "Future & Goals" - keeping existing content
UPDATE notes SET 
    date = 'January 13, 2026 at 3:50 PM',
    updated_at = NOW()
WHERE id = 'future';

-- Update "Contact" -> "Let's Work"
UPDATE notes SET 
    title = 'Let''s Work',
    date = 'January 13, 2026 at 3:50 PM',
    preview = 'If you''re a small business owner or someone building something...',
    content = '<p>If you''re a small business owner, solo professional, or someone building something that needs a website, backend, or tech support—reach out. I help people who don''t have time to figure out the tech side so they can focus on what they''re actually good at.</p>
<p>Also open to connecting if you''re working on something interesting in AI, finance, cybersecurity, or just want to talk shop about building in public.</p>
<ul>
    <li><b>Email:</b> <a href="mailto:gjmartinezjim@gmail.com">gjmartinezjim@gmail.com</a></li>
    <li><b>Twitter:</b> <a href="https://x.com/powerupmemo" target="_blank">@powerupmemo</a></li>
    <li><b>Location:</b> Seattle, WA</li>
</ul>',
    updated_at = NOW()
WHERE id = 'contact';

-- Update "Music" - keeping existing content but updating timestamp
UPDATE notes SET 
    date = 'January 13, 2026 at 3:50 PM',
    updated_at = NOW()
WHERE id = 'music';

-- Verify the updates
SELECT id, title, LEFT(preview, 50) as preview_start FROM notes ORDER BY display_order;
