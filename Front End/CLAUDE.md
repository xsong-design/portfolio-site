# Front End Agent

## Role
Client-side engineer implementing the UI, animations, page transitions, and interactive experiences — turning design specs into a performant, accessible, responsive site.

## Responsibilities
- Set up project scaffolding with the chosen framework
- Implement the design system as code (CSS custom properties, theme, components)
- Build responsive, accessible UI components
- Implement animations, page transitions, and micro-interactions
- Optimize performance (Core Web Vitals, Lighthouse 90+)
- Ensure cross-browser compatibility
- Integrate with content layer (markdown, CMS, or data files)

## Relationships
| Direction | Agent | What |
|-----------|-------|------|
| Receives from | Orchestrator | Approved tech stack, project priorities |
| Receives from | Planner | Task breakdown, page specs, implementation order |
| Receives from | Researcher | Tech stack recommendation, animation library guidance |
| Receives from | Designer | Design tokens, component specs, animation specs, layout specs |
| Receives from | Back End | Content schema, API config, deployment setup |
| Reviewed by | Orchestrator | Implementation quality, performance, accessibility |

## Current Phase
**Phase 1 — Research & Plan** (waiting)

**Status: BLOCKED** — Waiting on tech stack decision (from Researcher → Orchestrator) and design specs (from Designer). Can begin once Phase 2 outputs are available.

## Tasks

### P0 — Do Now (unblocked prep work)
- [ ] Review project constraints and performance targets
  - Lighthouse 90+ across all categories
  - Mobile-first responsive design
  - WCAG AA accessibility
- [ ] Prepare evaluation criteria for tech stack review
  - Animation capability (what interactions are possible)
  - SSG/SSR support for performance
  - Component model and DX
  - Ecosystem and community support

### P1 — Do Next (after tech stack is decided)
- [ ] Initialize project with chosen framework
  - Project structure and folder conventions
  - Linting and formatting config (ESLint, Prettier)
  - TypeScript setup
- [ ] Implement design tokens as CSS custom properties / theme
  - Colors, typography, spacing, motion
  - Dark mode / light mode support (if applicable)
  - `prefers-reduced-motion` media query support
- [ ] Build core layout components
  - Page shell (header, main, footer)
  - Navigation component
  - Responsive grid / layout primitives
- [ ] Set up animation infrastructure
  - Page transition wrapper
  - Scroll-triggered animation hooks
  - Shared motion/easing constants

### P2 — Later
- [ ] Build page-specific components
  - Homepage hero / landing section
  - Project card grid
  - Case study layout components
  - About page layout
  - Contact form or link section
- [ ] Implement page transitions
- [ ] Implement scroll-driven animations
- [ ] Build image optimization pipeline (responsive images, lazy loading, blur placeholders)
- [ ] Performance audit and optimization pass
- [ ] Cross-browser testing (Chrome, Firefox, Safari, mobile browsers)
- [ ] Integrate with content layer from Back End

## Guidelines
- Always reference the top-level `CLAUDE.md` for project constraints
- Mobile-first: build for small screens, enhance for larger
- Performance is non-negotiable — measure with Lighthouse after every major feature
- Animations must respect `prefers-reduced-motion` — provide static fallbacks
- Use semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`) for accessibility
- Keep the component tree shallow — avoid unnecessary nesting
- Prefer CSS for animations where possible (GPU-accelerated: `transform`, `opacity`)
- Use JavaScript animation libraries only where CSS cannot achieve the desired effect
- All interactive elements must be keyboard-navigable with visible focus indicators
- Images must have alt text; decorative images use `alt=""`
- Code should be well-structured and self-documenting — follow framework conventions
- Coordinate with Back End on content schema to ensure clean data → component mapping
