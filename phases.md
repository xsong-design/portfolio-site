# Project Phases

## Overview
| Phase | Name | Status | Active Agents |
|-------|------|--------|---------------|
| 1 | Research & Plan | **Complete** | — |
| 2 | Design & Build | **Active** | Designer, Front End, Back End |
| 3 | Content & Polish | Waiting | Xiao, Front End, Back End |
| 4 | Launch | Waiting | All |

> **Note:** Original Phase 2 (Design) and Phase 3 (Build) merged into a single phase.
> Xiao decided to skip Figma and go direct-to-code. Design decisions happen in-browser during build.
> Timeline is flexible — quality over speed.

---

## Phase 1 — Research & Plan
**Status:** Complete
**Started:** 2025-03-10
**Completed:** 2026-03-18

### Deliverables
| Deliverable | Owner | Status |
|-------------|-------|--------|
| Portfolio reference research (8 sites) | Researcher | ✅ Complete — `Researcher/portfolio_analysis_report.md` |
| Robin Noguier technical reference | Researcher | ✅ Complete — `Researcher/robin_noguier_cursor_reference.md` |
| Tech stack decision | Xiao | ✅ Decided — Next.js + Tailwind CSS + GitHub Pages |
| Hosting decision | Xiao | ✅ Decided — GitHub Pages |
| Site map and IA | Planner | ✅ Complete — `Planner/site-map.md` |
| Page content requirements | Planner | ✅ Complete — `Planner/content-requirements.md` |
| Interaction/animation strategy | Planner | ✅ Complete — `Planner/interaction-strategy.md` |

### Exit Criteria
- [x] Researcher has delivered portfolio references and analysis
- [x] Tech stack and hosting decided (by Xiao directly)
- [x] Planner has delivered site map + content requirements + interaction strategy
- [x] Orchestrator has reviewed all deliverables
- [x] Decisions logged in `decisions.md`

---

## Phase 2 — Design & Build
**Status:** Active
**Started:** 2026-03-18
**Blocked on:** Nothing — ready to go

### Objective
Establish visual direction and build the site simultaneously. Design decisions happen in-browser via vibe coding in Cursor. Designer agent provides design tokens and direction; Front End + Back End build in parallel.

### Key Inputs
- Site map: `Planner/site-map.md`
- Content requirements: `Planner/content-requirements.md`
- Interaction strategy: `Planner/interaction-strategy.md`
- Researcher analysis: `Researcher/portfolio_analysis_report.md`
- Robin Noguier reference: `Researcher/robin_noguier_cursor_reference.md`

### Deliverables
| Deliverable | Owner | Status |
|-------------|-------|--------|
| Visual direction + design tokens (color, type, spacing) | Designer | ✅ Complete — `site/preview-typography.html` |
| Project scaffolding (Next.js + Tailwind) | Front End | 🔄 In Progress (partial — needs npm install) |
| Core layout components (nav, footer, page shells) | Front End | Pending |
| Homepage implementation | Front End | Pending |
| Case study template | Front End | Pending |
| Work index page | Front End | Pending |
| About page | Front End | Pending |
| Contact page | Front End | Pending |
| Resume page | Front End | ✅ On `/resume` in site type and color |
| Page transition animations | Front End | Pending |
| Scroll-driven animations | Front End | Pending |
| Hover/cursor micro-interactions | Front End | Pending |
| Reduced motion support | Front End | Pending |
| Content schema (MDX for case studies) | Back End | Pending |
| Deployment pipeline (Vercel preferred; GitHub Pages workflow still in repo) | Host + Back End | 🔄 In Progress — Host agent added; live URL blocked on Vercel login + GitHub |
| SEO configuration | Back End | Pending |

### Content Being Written in Parallel
| Case Study | Status |
|------------|--------|
| Marketing Message Liquidity | 🔄 Opening rewrite from Xiao talk-through; budget/reporting detail next |
| Driver Tipping at Walmart | ⏸ Paused — outline voice; dates vs old site unresolved |
| Search & Browse at Walmart | ⏸ Draft exists; waiting on Xiao voice + craft bar |

### Exit Criteria
- [x] Visual direction decided (color palette, typography, light mode only)
- [ ] All 6 pages implemented with placeholder content (Craft Lab removed from v1)
- [ ] P0 interactions working (page transitions, scroll reveals, hover states, mobile nav)
- [ ] Responsive across mobile, tablet, desktop
- [ ] `prefers-reduced-motion` respected globally
- [ ] Deployment pipeline working (push to deploy)
- [ ] SEO fundamentals configured
- [ ] Lighthouse 90+ on all pages

---

## Phase 3 — Content & Polish
**Status:** Waiting
**Blocked on:** Phase 2 page templates + case study content from Xiao

### Objective
Populate real content, add P1 interactions, polish details, and optimize performance.

### Deliverables
| Deliverable | Owner | Status |
|-------------|-------|--------|
| Case study content populated (2 projects) | Xiao + Back End | Pending |
| Real hero images + project images | Xiao | Pending |
| About page real content | Xiao | Pending |
| Resume PDF drop-in | Front End | ✅ `site/public/xiao-song-resume.pdf` |
| Social links added | Xiao | Pending |
| P1 interactions (custom cursor, magnetic nav, scroll progress) | Front End | Pending |
| Performance optimization pass | Front End + Back End | Pending |
| Cross-browser testing | Front End | Pending |

### Exit Criteria
- [ ] All real content populated (2 case studies, about, contact)
- [ ] Lighthouse 95+ confirmed
- [ ] Works on Chrome, Firefox, Safari (desktop + mobile)
- [ ] P1 interactions polished

---

## Phase 4 — Launch
**Status:** Waiting
**Blocked on:** Phase 3 completion

### Objective
Go live with custom domain, analytics, and final QA.

### Deliverables
| Deliverable | Owner | Status |
|-------------|-------|--------|
| Custom domain configuration | Back End | Pending |
| Analytics setup | Back End | Pending |
| Final QA pass | All | Pending |
| Launch checklist sign-off | Orchestrator | Pending |

### Exit Criteria
- [ ] Custom domain live
- [ ] Analytics tracking confirmed
- [ ] All content reviewed by Xiao
- [ ] Orchestrator sign-off
