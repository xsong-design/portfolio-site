# Brief: Two greens in the name, detail on every pointed letter

- **Date:** 2026-11-10
- **From:** Xiao (via Orchestrator)
- **To:** Designer, then Front End
- **Priority:** P0
- **Related files:** `site/src/components/HeroSection.tsx`, `Designer/hero-type-anatomy-spec.md`

## Verbatim
> I like where this is headed. I want to keep on pushing on this. I think the black and the green contrast is a little bit weird. Do you think we should use the darker green for my name to replace the black and then use a lighter green as the contrast color that's filled in the letters? That's one thing. And then the second thing is, I like how you're separating, you're giving some of these details to different letters. I'm starting to think if we should give a little bit of that to the S and the N as well, because Walmart and Live Control are also pointing to those as well. So, for every single letter that is being pointed to by a specific company, we could play around with detailing.

## Intent
The name and the highlights are one green family at two values. Every letter a company line points at carries a lighter-green detail. Letters with no line stay plain.

## Scope
- In: Hero name color. Lighter fill on the existing i, o, and g details. New details on s (Walmart, from below) and n (Livecontrol, from above).
- Out: Callout copy, stem geometry, project section, site-wide text color, the a, the second o.

## Constraints
Greyscale page stays. Darker green is the existing accent text `#4A5D4A` (6.5:1 on the page). The fill is a lighter mix of the sage, strong enough to read inside the letter and on the page. No anatomy labels. No invented companies.

## Ask
Ship the two-green name in the hero and tune the s and n details in the browser.

## Done when
- [ ] The name is the darker green, not black.
- [ ] i dot, o counter, g loop, s, and n each show the lighter green.
- [ ] a, x, and the o in song stay plain.
- [ ] The o counter is still a clean oval inside the stroke.
