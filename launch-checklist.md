# Portfolio Site — Launch Checklist

## Timeline
- **Target launch date:** April 15, 2026
- **Hours/week:** 3-4h (hands-on) + autonomous agent runs
- **Work windows:** After work hours, inspiration-driven
- **Created:** 2026-03-10
- **Last updated:** 2026-03-10

---

## Phase 0: Environment Setup ✅
- [x] Install Node.js
- [x] Install Git
- [x] Create GitHub repo
- [x] Authenticate GitHub in Cursor

## Phase 1: Project Scaffolding ✅
- [x] Scaffold Next.js + Tailwind project
- [ ] Verify dev server runs (`npm run dev`)
- [ ] Clean out boilerplate content
- [ ] Set up basic folder structure (pages, components, public/images)

## Phase 2: Design Foundations (Week 1 — Mar 10-16)
> **Your time: ~2h** | Agent can handle: token config, font setup
- [ ] Pick color palette (2-3 brand colors + neutrals)
- [ ] Choose typography (1-2 Google Fonts — e.g., Inter + a display font)
- [ ] Define spacing scale (use Tailwind defaults or customize)
- [ ] Decide navigation structure (simple: Home, Projects, About)
- [ ] Configure Tailwind with your design tokens
- [ ] Quick sketch/notes on homepage layout (paper, notes app, or just describe to Cursor)

## Phase 3: Layout & Core Components (Week 2 — Mar 17-23)
> **Your time: ~3h** | Agent can handle: component scaffolding, responsive setup
- [ ] Build navigation component (name, links, mobile menu)
- [ ] Build footer component (links, copyright, socials)
- [ ] Build shared page layout (nav + content + footer wrapper)
- [ ] Build project card component (thumbnail, title, description, tag)
- [ ] Set up project data structure (array of projects with metadata)

## Phase 4a: Homepage + About (Week 3 — Mar 24-30)
> **Your time: ~3h** | Agent can handle: page structure, responsive tweaks
- [ ] Homepage — hero section (name, tagline, brief intro)
- [ ] Homepage — project grid (cards linking to case studies)
- [ ] Homepage — optional: brief "about" blurb or CTA
- [ ] About page — bio and background
- [ ] About page — skills/tools section
- [ ] About page — contact info or links

## Phase 4b: Case Studies (Week 4 — Mar 31 - Apr 6)
> **Your time: ~4h** | This is the most hands-on phase — content is on you
- [ ] Case study 1 — choose project and outline key sections
- [ ] Case study 1 — write content (problem, process, outcome)
- [ ] Case study 1 — gather/prep images and assets
- [ ] Case study 1 — build page in Cursor
- [ ] Case study 2 — choose project and outline key sections
- [ ] Case study 2 — write content (problem, process, outcome)
- [ ] Case study 2 — gather/prep images and assets
- [ ] Case study 2 — build page in Cursor

## Phase 5: Polish + Deploy (Week 5 — Apr 7-13)
> **Your time: ~3h** | Agent can handle: static export config, GitHub Actions
- [ ] Responsive check — all pages on mobile viewport
- [ ] Hover states on interactive elements
- [ ] Favicon and browser tab title
- [ ] SEO meta tags (title, description, OG image) on all pages
- [ ] Configure Next.js static export (`output: 'export'`)
- [ ] Set up GitHub Actions deployment workflow
- [ ] Push to GitHub and enable GitHub Pages
- [ ] Verify live site loads correctly
- [ ] Test on phone (real device)
- [ ] Test on Chrome + Safari at minimum
- [ ] Share with 1-2 people for quick feedback

## 🚀 LAUNCH — April 15, 2026

## Post-Launch (Not Blocking Launch)
- [ ] Custom domain setup
- [ ] Analytics (Plausible or Google Analytics)
- [ ] Case study 3+
- [ ] Page transitions and scroll animations
- [ ] Performance tuning (Lighthouse 90+)
- [ ] Open Graph images for social sharing
- [ ] Resume/CV page or download

---

## Week-by-Week Schedule

| Week | Dates | Focus | Your Time | Agent Tasks |
|------|-------|-------|-----------|-------------|
| 1 | Mar 10-16 | Design foundations + tokens | ~2h | Tailwind config, font imports |
| 2 | Mar 17-23 | Layout + components | ~3h | Scaffold components, responsive |
| 3 | Mar 24-30 | Homepage + About page | ~3h | Page structure, content placement |
| 4 | Mar 31 - Apr 6 | Case studies (content heavy) | ~4h | Page build from your content |
| 5 | Apr 7-13 | Polish + deploy | ~3h | Static export, GitHub Actions, SEO |
| — | **Apr 15** | **🚀 Launch** | — | — |
| Buffer | Apr 14-15 | Fix anything from feedback | 1-2h | Bug fixes |

**Total your time: ~16-17h** | **Agent time: ~8-12h additional**

---

## Scope Rules (To Stay On Track)

### In scope for launch
- Clean, responsive site with good typography
- Homepage with project cards
- 2 case studies with real content
- About page
- Deployed on GitHub Pages

### Explicitly deferred (do NOT spend time on these before launch)
- Custom domain
- Analytics
- Fancy animations or page transitions
- More than 2 case studies
- CMS integration
- Perfect Lighthouse scores

### If you're behind schedule, cut in this order
1. About page depth → keep it to 1-2 paragraphs
2. Second case study → launch with 1, add the second in week 6
3. SEO meta tags → can add post-launch
4. Hover states → functional > fancy

---

## Decision: Skip Figma, Go Direct-to-Code

Given the 5-week timeline, designing in Figma first (Phase 2 of the original plan) would eat 1-2 weeks. Instead:
- Make quick design token decisions (colors, fonts, spacing)
- Go straight into Cursor and build visually using vibe coding
- Iterate in the browser, not in a design tool
- You're a designer — you'll know when it looks right in the browser

---

*Tracked by portfolio-planner skill — ask "portfolio status" anytime*
