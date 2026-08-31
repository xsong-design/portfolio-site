# Brief: Hero = type anatomy leader lines

- **Date:** 2026-08-31
- **From:** Xiao (via Orchestrator)
- **To:** Designer, Front End
- **Priority:** P0
- **Related files:** `Designer/hero-type-anatomy-spec.md`, `site/src/components/HeroSection.tsx`

## Verbatim
> this is getting closer to what i had before. we removed the boarder around xiao song. removed the green dot. removed a lot of the buttons and text underneath. Instead i remember we added dotted lines horizontally coming from the cap heights and other type details of my name to call out the brands and companies I worked at. we removed the buttons and paragrpahs as well

## Intent
The hero is a type specimen of Xiao's name: dashed lines on real type metrics (cap height, x-height, baseline, descender) run out of the letterforms to name companies. Nothing else — no frame, no green period, no buttons, no paragraphs.

## Scope
- In: `HeroSection.tsx` rebuild, spec file, removing leftover accent-rectangle code
- Out: Rest of homepage sections, case study pages

## Constraints
- This layout was **not** in the packed-up repo — reconstructed from Xiao's description, so it needs his eyes to confirm.
- Greyscale + sage (2026-08-04). Sage no longer appears in the hero at all.
- WCAG AA, `prefers-reduced-motion`, mobile fallback required.

## Ask
Rebuild the hero per the spec; log it so it survives the next machine switch.

## Done when
- [x] No frame border, no green period, no CTAs, no paragraph, no "Previously at" strip
- [x] Six dashed leader lines land on type metrics and label companies
- [x] Reduced-motion and mobile fallbacks
- [ ] Xiao confirms this matches what he remembers
