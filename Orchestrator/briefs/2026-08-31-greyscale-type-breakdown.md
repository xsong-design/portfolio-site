# Brief: Align live site to greyscale + type-breakdown

- **Date:** 2026-08-31
- **From:** Xiao (via Orchestrator)
- **To:** Designer, Front End
- **Priority:** P0
- **Related files:** `Designer/design-tokens.md`, `Designer/hero-restyle-spec.md`, `site/src/app/globals.css`, `site/src/app/page.tsx`

## Verbatim
> this iteration looks like an older version of the design. The new design is more black and white focused, with a greyish green highlight. The new design is also cleaner and has more of a typography breakdown style

## Intent
The Next.js site should match the locked v2 direction: neutral greyscale canvas, muted sage accent only, cleaner composition, editorial type-breakdown hero (framed label + display type) — not the warm off-white + orange-red block layout.

## Scope
- In: CSS tokens, cursor hardcoded orange, homepage hero, selected-work section noise (giant index, accent rectangles)
- Out: Sticky theater rewrite, new case study content, Craft Lab

## Constraints
- `decisions.md` 2026-08-04 greyscale + sage (`#F5F5F5` / `#6B7F6B`)
- `Designer/hero-restyle-spec.md` — remove accent rect + vertical edge text
- WCAG AA, `prefers-reduced-motion`, no hardcoded orange

## Ask
1. Swap `@theme` colors to design-tokens greyscale + sage
2. Implement framed centered hero from hero-restyle-spec
3. Quiet project cards and section titles (hairlines + type, not color blocks)

## Done when
- [x] No `#E54D2E` / `#F0EFEB` in `site/src`
- [x] Hero is centered type-breakdown with sage period only
- [x] Accent rectangles gone from hero and cards
