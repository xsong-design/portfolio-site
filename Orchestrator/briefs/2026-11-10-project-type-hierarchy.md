# Brief: Project type, under the section

- **Date:** 2026-11-10
- **From:** Xiao (via Orchestrator)
- **To:** Designer → Front End
- **Priority:** P0
- **Related files:** `site/src/components/StickyTheater.tsx`, `site/src/app/page.tsx`

## Verbatim
> i like it but two things i dont like how is how the section hierarchy is the same for "01 selected work" as well as the 01 02 for each project. They shouldnt have the same hierarchy. and the second thing is can you clean up the type usage for each project. i like the amount of information however it looks very messy right now. The alignment, space and type doesnt flow well together.

## Intent
"01 selected work" stays the section. Project numbers step down so they read as items inside that section. The same facts stay, set on one edge so the type has a clear order.

## Scope
- In: Homepage project text column. Hierarchy against the selected-work heading.
- Out: Removing company, role, description, dates, or metric. Hero. About section heading. New metrics.

## Constraints
- Section index stays the large display numeral. Project index becomes a small label.
- One left edge. No field-label grid.
- Title and facts stay clear of the image.

## Ask
Restyle the project column and ship it on the local site.

## Done when
- [ ] Project 01 / 02 / 03 are visibly smaller than "01 selected work"
- [ ] Facts share one alignment and a clear size order
- [ ] All five facts still show
- [ ] Xiao can review at localhost:3000
