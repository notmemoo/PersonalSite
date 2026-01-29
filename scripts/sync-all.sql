-- Full sync: adds Home + Pricing notes, updates Projects + Contact, reorders everything
-- Run in Supabase SQL Editor

-- Add Home note
INSERT INTO notes (id, title, date, preview, display_order, content)
VALUES (
  'home',
  'Welcome',
  'January 29, 2026 at 1:00 PM',
  'I build websites and digital systems for small businesses...',
  1,
  '<p style="font-size: 1.1em; line-height: 1.7;">I''m <b>Memo</b> — a web developer in <b>Tacoma, WA</b> helping small businesses get online, get found, and get booked.</p><p>I build clean, fast websites with admin panels so you control your own content. I also set up Google Business Profiles, SEO, and AI automations — everything a local business needs to compete online without the agency price tag.</p><div class="currently-item" style="margin-top: 20px;"><span class="currently-emoji">🌐</span><div class="currently-content"><div class="currently-label">Websites & Landing Pages</div><div class="currently-value">Mobile-first, fast-loading sites built with clean code — not templates.</div></div></div><div class="currently-item"><span class="currently-emoji">📍</span><div class="currently-content"><div class="currently-label">Google Business Profiles</div><div class="currently-value">Get your business on Google Search & Maps with an optimized profile.</div></div></div><div class="currently-item"><span class="currently-emoji">📈</span><div class="currently-content"><div class="currently-label">SEO & Ads</div><div class="currently-value">Show up when people search for what you do. Simple campaigns with clear goals.</div></div></div><div class="currently-item"><span class="currently-emoji">🤖</span><div class="currently-content"><div class="currently-label">AI Automation</div><div class="currently-value">Chatbots, lead capture, automated workflows — less manual work, faster responses.</div></div></div><p style="margin-top: 20px;"><b>Based in Tacoma</b>, serving businesses across Pierce County and the greater Puget Sound area.</p>'
) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, preview = EXCLUDED.preview, content = EXCLUDED.content, display_order = EXCLUDED.display_order;

-- Add Pricing note
INSERT INTO notes (id, title, date, preview, display_order, content)
VALUES (
  'pricing',
  'Pricing',
  'January 29, 2026 at 1:00 PM',
  'Transparent pricing for every budget...',
  3,
  '<p>Straight-up pricing. No hidden fees, no surprise invoices. Pick what fits your business.</p><div class="project-card"><h3>🚀 Starter — $500–$800</h3><p>Perfect for new businesses that need to get online fast.</p><ul><li>Landing page or 1–3 page site</li><li>Mobile responsive design</li><li>Contact form</li><li>Basic SEO setup</li><li>Google Business Profile setup</li></ul><p style="color: #8E8E93; font-size: 0.9em;">Turnaround: 1–2 weeks</p></div><div class="project-card" style="border-left: 3px solid #E0AB38;"><h3>⭐ Professional — $1,000–$2,000</h3><p>The full package for established businesses ready to level up.</p><ul><li>Custom 5–8 page website</li><li>Admin panel — manage your own content</li><li>SEO optimization</li><li>Google Business Profile setup</li><li>Social media integration</li><li>2 rounds of revisions</li></ul><p style="color: #E0AB38; font-size: 0.9em;">⭐ Most Popular</p><p style="color: #8E8E93; font-size: 0.9em;">Turnaround: 2–4 weeks</p></div><div class="project-card"><h3>💎 Premium — $2,500–$4,000</h3><p>Everything you need to dominate online.</p><ul><li>Everything in Professional</li><li>AI chatbot integration</li><li>Advanced SEO & analytics dashboard</li><li>Custom automations</li><li>3 months of maintenance included</li><li>Priority support</li></ul><p style="color: #8E8E93; font-size: 0.9em;">Turnaround: 3–6 weeks</p></div><div class="project-card"><h3>🔄 Monthly Maintenance — $75–$150/mo</h3><ul><li>Content updates & edits</li><li>Hosting management</li><li>Performance monitoring</li><li>Monthly reports</li><li>Priority support</li></ul></div>'
) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, preview = EXCLUDED.preview, content = EXCLUDED.content, display_order = EXCLUDED.display_order;

-- Update Projects (remove Dwayne, add screenshots)
UPDATE notes SET
  preview = 'Recent projects I''ve built for clients...',
  content = '<div class="project-card"><img src="assets/projects/ash-performance.jpg" alt="ASH Performance website screenshot" style="width:100%; border-radius: 8px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.1);"><h3>ASH Performance</h3><p>A basketball training site for a professional trainer. In-person training with tiered pricing, virtual 1:1 coaching subscription, Skool community integration, and a custom admin panel so the client manages all content themselves.</p><p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;">React · Tailwind CSS · Framer Motion · Express.js · Vercel + Render</p><a href="https://ashperformance.vercel.app" target="_blank">Visit Site →</a></div><div class="project-card"><img src="assets/projects/varsity-soles.jpg" alt="Varsity Soles website screenshot" style="width:100%; border-radius: 8px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.1);"><h3>Varsity Soles</h3><p>Sneaker restoration e-commerce site with video showcases, before/after galleries, integrated POS, contact form, and a dedicated admin panel for managing inventory and content.</p><p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;">Next.js · React · Vercel</p><a href="https://varsitysoles.vercel.app" target="_blank">Visit Site →</a></div><h3 style="margin-top: 32px;">💬 What Clients Say</h3><div class="project-card" style="border-left: 3px solid #E0AB38;"><p style="font-style: italic;">"Working with Memo on my site went well overall and I appreciated how responsive and patient he was throughout the process. He was open to revisions and made sure the site reflected what I was looking for. I''d recommend his services to anyone needing website development support."</p><p style="color: #8E8E93; font-size: 0.9em; margin-top: 8px;"><b style="color: inherit;">— Asher</b>, ASH Performance</p></div>',
  display_order = 2
WHERE id = 'projects';

-- Update Contact with form
UPDATE notes SET
  preview = 'Ready to get started? Let''s talk about your project...',
  content = '<p>Tell me about your project and I''ll get back to you within 24 hours.</p><form id="contact-form" style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;"><input type="text" name="name" placeholder="Your name" required style="padding: 12px; border-radius: 8px; border: 1px solid rgba(142,142,147,0.3); background: rgba(142,142,147,0.08); color: inherit; font-size: 1em; font-family: inherit;"><input type="email" name="email" placeholder="Your email" required style="padding: 12px; border-radius: 8px; border: 1px solid rgba(142,142,147,0.3); background: rgba(142,142,147,0.08); color: inherit; font-size: 1em; font-family: inherit;"><input type="text" name="business" placeholder="Business name (optional)" style="padding: 12px; border-radius: 8px; border: 1px solid rgba(142,142,147,0.3); background: rgba(142,142,147,0.08); color: inherit; font-size: 1em; font-family: inherit;"><select name="service" style="padding: 12px; border-radius: 8px; border: 1px solid rgba(142,142,147,0.3); background: rgba(142,142,147,0.08); color: inherit; font-size: 1em; font-family: inherit;"><option value="">What are you looking for?</option><option value="starter">Starter Website ($500–$800)</option><option value="professional">Professional Website ($1,000–$2,000)</option><option value="premium">Premium Package ($2,500–$4,000)</option><option value="maintenance">Monthly Maintenance</option><option value="other">Something else</option></select><textarea name="message" placeholder="Tell me about your project..." rows="4" style="padding: 12px; border-radius: 8px; border: 1px solid rgba(142,142,147,0.3); background: rgba(142,142,147,0.08); color: inherit; font-size: 1em; font-family: inherit; resize: vertical;"></textarea><button type="submit" style="padding: 12px 24px; border-radius: 8px; border: none; background: #E0AB38; color: #000; font-size: 1em; font-weight: 600; cursor: pointer; font-family: inherit;">Send Message</button></form><p style="margin-top: 20px; color: #8E8E93; font-size: 0.9em;">Or reach out directly:</p><ul><li><b>Email:</b> <a href="mailto:gjmartinezjim@gmail.com">gjmartinezjim@gmail.com</a></li><li><b>Twitter:</b> <a href="https://x.com/powerupmemo" target="_blank">@powerupmemo</a></li><li><b>Location:</b> Tacoma, WA</li></ul>',
  display_order = 7
WHERE id = 'contact';

-- Reorder existing notes
UPDATE notes SET display_order = 2 WHERE id = 'projects';
UPDATE notes SET display_order = 4 WHERE id = 'what-i-do';
UPDATE notes SET display_order = 5 WHERE id = 'who-is-memo';
UPDATE notes SET display_order = 6 WHERE id = 'currently';
UPDATE notes SET display_order = 8 WHERE id = 'future';
UPDATE notes SET display_order = 9 WHERE id = 'thoughts';
UPDATE notes SET display_order = 10 WHERE id = 'music';
