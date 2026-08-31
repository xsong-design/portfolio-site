# Manus Research Brief — Portfolio Site References

## Objective
Find 5-8 of the absolute best interactive/experimental product designer portfolio sites on the web. Quality over quantity — I want deep analysis of each site, not a surface-level list. I'm building my own portfolio and want to reverse-engineer what the best designers are doing with animation, micro-interactions, unconventional layouts, and storytelling.

## What I'm Looking For

### Must-haves
- **Product designers or UX/UI designers** (not illustrators, photographers, or pure artists)
- **Interactive/experimental** — sites that go beyond standard templates
- **Currently live** — working URLs I can visit
- **Notable quality** — award-winning (Awwwards, CSS Design Awards, FWA) or widely recognized in the design community

### Interaction patterns I care about (find a mix across the 5-8 sites)
- Scroll-driven animations (parallax, scroll-triggered reveals, scroll-linked progress)
- Cursor/mouse-reactive elements (custom cursors, hover effects, magnetic buttons)
- Page transitions (smooth route changes, morph animations between pages)
- 3D elements (WebGL, Three.js, Spline scenes)
- Typographic experiments (kinetic type, variable fonts, text animations)
- Unconventional navigation (non-standard menus, spatial navigation, gesture-based)
- Storytelling through interaction (case studies that unfold interactively)

## For Each Site — Deep Dive

### Basic info
- **Designer name** and current role/company
- **URL**
- **Screenshot or description** of the homepage and at least one inner page (case study or about)

### Interaction & Design Breakdown
- **Primary interaction pattern(s)** from the list above
- **Detailed description of how the interactions work** — don't just say "scroll animation," walk through the experience: what happens when you scroll? What triggers? What eases? How does it feel?
- **What's memorable** — the 1-2 things that stick with you after visiting
- **How case studies are presented** — static images? Interactive walkthroughs? Video? Before/after? How do they transition between sections?
- **Navigation approach** — standard nav bar? Hidden menu? Scroll-based? Something else?
- **Typography choices** — what fonts? How is type used as a design element?
- **Color and visual language** — palette, use of whitespace, imagery style
- **Loading/entry experience** — is there a loader? How does the first impression land?

### Technical Deep Dive
- **Estimated tech stack** — check page source, look for framework hints (`__next`, `astro`, `svelte`, `gatsby`, etc.). Check `<meta>` tags, script filenames, and network requests.
- **Animation library** if identifiable (GSAP, Framer Motion, Lottie, custom CSS, WebGL/Three.js, Rive, etc.)
- **Performance** — run a quick Lighthouse audit or note page load speed. Does it feel fast or sluggish? Any janky animations?
- **Mobile experience** — visit on mobile (or simulate). Does the interactivity translate? What's adapted vs. stripped out?
- **Code quality signals** — is it well-structured? Any obvious performance anti-patterns?

### Honest Critique
- **Top 3 things to steal/learn from** — specific, actionable takeaways
- **What doesn't work** — anything overdone, confusing, or that hurts usability
- **Accessibility audit** — check for: `prefers-reduced-motion` support, color contrast, keyboard navigation, screen reader basics. Note any obvious gaps.
- **What I'd do differently** — if you were rebuilding this site, what would you change?

## Where to Search
1. **Awwwards** — filter by "portfolio" category, sort by score
2. **CSS Design Awards** — portfolio category
3. **Godly.website** — curated web design inspiration
4. **SiteInspire** — filter by "portfolio" style
5. **Hoverstat.es** — experimental web design archive
6. **Design Twitter/X** — threads about best portfolios of 2024/2025
7. **Bestfolios** — curated designer portfolios

Start with Awwwards and Godly — they tend to surface the most interactive/experimental work. Cross-reference across sources to find sites that show up repeatedly (a signal of quality).

## Output Format

Deliver a single markdown document with:

1. **Executive summary** (300-500 words)
   - Top 3-5 patterns/trends across all sites
   - What separates a "great" interactive portfolio from a "good" one
   - The biggest mistakes you noticed even among the best

2. **Site-by-site deep dives** — using the full documentation structure above, organized from most to least relevant to my project. Each site should be 400-600 words of analysis, not just bullet points.

3. **Comparison matrix** — a table mapping each site against:
   - Interaction patterns used
   - Tech stack
   - Performance (fast/medium/slow)
   - Mobile support (full/partial/desktop-only)
   - Accessibility (good/fair/poor)

4. **Steal-worthy patterns** — a consolidated list of the best ideas across all sites, grouped by type (animation, navigation, case study presentation, typography, loading experience). For each, note which site does it best and why.

5. **Recommendations for my project** — given my constraints (enterprise SaaS case studies, Lighthouse 90+, WCAG AA, static/JAMstack, $0 hosting), which 3-4 interaction patterns should I prioritize? What should I explicitly avoid?

## Context About My Portfolio
- I'm a product designer at Meta (Business Messaging → Engagement team)
- I want to showcase 3-5 case studies from enterprise SaaS / messaging platform work
- The site should feel interactive and experimental but still professional
- Performance matters — targeting Lighthouse 90+
- Must be accessible (WCAG AA)
- Will be built as a static/JAMstack site with $0 hosting
- Tech stack is TBD but likely Next.js or Astro with GSAP or Framer Motion

## Quality Bar
Only include sites that made you think "how did they do that?" or "I've never seen that before." If a site is just well-designed but doesn't push boundaries on interactivity, skip it. I'd rather have 5 extraordinary sites than 8 that include filler.
