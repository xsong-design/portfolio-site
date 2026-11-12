# Brief: Resume PDF is two columns, not squeezed

- **Date:** 2026-11-11
- **From:** Xiao (via Orchestrator)
- **To:** Front End
- **Priority:** P0
- **Related files:** `site/src/components/ResumeSheet.tsx`, `site/src/app/globals.css`, `site/public/xiao-song-resume.pdf`

## Verbatim
> The downloadable PDF from my resume seems very messy. First of all, it should be a two-column approach. The top sentences or the top section should not span across both columns. That was the beauty of my resume from before. Also, the spacing for everything looks a little bit off. Still looks a bit messy because you are trying to fit the text on one page. For example, the body content for the "The experiences" are way smaller than the body content for the skills and the education. They should all be the same size. And the spacings should be a little bit more evenly matched. Some stuff feels very tight together and some stuff feels way too spaced out. I don't want you to cut down on content or cut down on spacing just to fit everything in. I want to restructure this so it's cleaner. We could take a pass at this, and then I'll continue to provide you feedback.

## Intent
Two columns from the top. The intro stays in the left column. Experience, education, and skills share one body size. Spacing is even. Content is not cut to force one page.

## Done when
- [x] Intro does not span both columns
- [x] Body type matches across columns
- [x] PDF reprinted without shrinking to fit
