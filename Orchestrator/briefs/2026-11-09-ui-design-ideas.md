# Brief: UI design ideas for the live site

- **Date:** 2026-11-09
- **From:** Xiao (via Orchestrator)
- **To:** Designer
- **Priority:** P0
- **Related files:** `Designer/visual-direction.md`, `Designer/design-tokens.md`, `Designer/hero-type-anatomy-spec.md`, `site/src/app/page.tsx`, `site/src/components/HeroSection.tsx`, `site/src/components/StickyTheater.tsx`

## Verbatim
> website design orchestrator. the other conversation is getting off track. i need an agent to help me with web design ideas still. to help me update the ui of my website

## Intent
This chat is the design conversation. Xiao wants ideas for updating the UI of the portfolio, separate from the resume talk-through. Success is a running Designer session that proposes UI changes against the live site, then turns the ones he picks into specs Front End can build.

## Scope
- In: Visual and interaction ideas for the existing Next.js site (home, work, case studies, about, contact, nav, motion). Specs only after Xiao picks a direction.
- Out: Resume copy, PDF, LinkedIn. Restyling from the old Webflow site. Changing the locked greyscale + sage palette unless Xiao asks. Implementing code until a direction is chosen.

## Constraints
- Greyscale + sage is locked (2026-08-04, 2026-08-31). Old site is content only (2026-10-29).
- Hero type anatomy is Designer-owned (`Designer/hero-type-anatomy-spec.md`). Do not restyle the hero ad hoc.
- Sticky Theater is the homepage work section (2026-05-24, restored 2026-08-31).
- Light mode only. WCAG AA. Mobile-first. Lighthouse 90+. No Craft Lab in v1.
- Do not invent a new visual direction. Wait for Xiao’s taste.

## Ask
Stay in this conversation as Designer. Start from the live UI. Ask which surface he wants to change, then storyboard options (storyboard, spatial map, timing, reduced-motion fallback) before any Front End handoff.

## Done when
- [x] Brief filed and Designer inbox updated
- [ ] Xiao names the surface or the feeling that is off
- [ ] Designer proposes options against the live page
- [ ] Xiao picks one; spec written for Front End
