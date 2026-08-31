# Brief: Hero — single-line name + company leaders + sage accents

- **Date:** 2026-08-31
- **From:** Xiao (via Orchestrator)
- **To:** Front End
- **Priority:** P0
- **Related files:** `site/src/components/HeroSection.tsx`, `site/src/app/page.tsx`, `Designer/hero-type-anatomy-spec.md`

## Verbatim
> i still see things that are off from previous designs. The period after song should be removed. My name should horizontally span across and not go to a second line, you dont have to call out cap height, descender and such, replace that with Meta, doordash, walmart. and bring back some of the green acents into the landing page

## Intent
Hero is one horizontal line: "xiao song" (no period). Dashed lines call out Meta, DoorDash, Walmart only — no type-metric captions. Sage green accents return on the landing page.

## Scope
- In: HeroSection, homepage accents
- Out: Other pages unless tokens already cover them

## Ask
Ship the above; update the anatomy spec to match.

## Done when
- [x] No period after song
- [x] Name on one line
- [x] Labels are Meta / DoorDash / Walmart only
- [x] Visible sage accents on landing
