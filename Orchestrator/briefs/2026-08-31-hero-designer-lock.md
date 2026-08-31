# Brief: Hero correction — Designer first, then Front End

- **Date:** 2026-08-31
- **From:** Xiao (via Orchestrator)
- **To:** Designer → Front End
- **Priority:** P0
- **Related files:** `Designer/hero-type-anatomy-spec.md`, `site/src/components/HeroSection.tsx`

## Verbatim
> why is it getting worse ... part of the g is missing. the dotted lines should not stop where my name starts, they should extend through the word. Remove the dotted lines on the left side. Fix the spacing between everythng so theres breathing room. The jobs stand out way too much, they can be slightly more muted, not all caps. Consult the design agent before making changes. I dont want to keep coming back to this with more and different mistakes

## Intent
Stop thrashing. Designer locks a complete, bug-diagnosed hero spec. Front End implements that spec only — no improvisation.

## Root causes (Designer diagnosis)
1. **Clipped "g"** — `leading-[0.85]` + section `overflow-hidden` + clip-path reveal crop the descender.
2. **Lines stop at name** — `bg-bg` on the name paints an opaque mask; that was wrong for "through the word."
3. **Left stubs** — flex row put dashed segments on both sides of the label.
4. **Too loud / tight** — uppercase + accent-text + cramped metric offsets inside one line-box.

## Ask
Designer: rewrite `hero-type-anatomy-spec.md` to production-ready. Front End: implement exactly.
