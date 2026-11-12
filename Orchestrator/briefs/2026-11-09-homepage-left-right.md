# Brief: Homepage projects, left to right

- **Date:** 2026-11-09
- **From:** Xiao (via Orchestrator)
- **To:** Designer → Front End
- **Priority:** P0
- **Related files:** `site/src/components/StickyTheater.tsx`, `site/src/app/page.tsx`, `Designer/homepage-ltr-spec.md`

## Verbatim
> So on the home page, I remember we have parallax scrolling for my projects. Can we try a left-to-right format? Meaning either you can make an executive decision, but either the image on the left and then the words on the right or vice versa. I think in the top-down approach for many screen sizes, it's very easy for the home page to not be full, for the web page to not be full size. So things get cut off. I don't want it to get cut off. So I wanted to try to see if we could go more left-to-right, or it could also overlap.

## Intent
The homepage project stage should read across the screen, not down it. Title and image both stay fully visible. Overlap is welcome. Scroll still moves from project to project.

## Scope
- In: Homepage selected-work stage (`StickyTheater`). Composition, scroll motion, short-screen fallback.
- Out: Hero type anatomy. Work index page. Case study pages. Palette. Resume.

## Constraints
- Greyscale + sage stays (2026-08-04).
- Sticky Theater scroll-through stays; only the frame inside it changes (2026-05-24, restored 2026-08-31).
- WCAG AA. `prefers-reduced-motion` is a static list. Mobile must not clip title or image.
- No new project facts.

## Ask
Designer chooses the side. Front End builds it on the homepage so Xiao can judge it in the browser.

## Done when
- [ ] Spec written
- [ ] Homepage stage is left-to-right with overlap
- [ ] Title and image fit the viewport on a laptop; short and narrow screens grow the page instead of clipping
- [ ] Xiao has seen it and says whether to keep it
