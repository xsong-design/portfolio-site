# Brief: Resume matches the site, on /resume, with a PDF

- **Date:** 2026-11-03
- **From:** Xiao (via Orchestrator)
- **To:** Front End
- **Priority:** P0
- **Related files:** `site/src/app/resume/page.tsx`, `site/src/components/ResumeSheet.tsx`, `site/public/xiao-song-resume.pdf`, `Resume/Resume 2025.pdf`

## Verbatim
> Thank you for recreating what you saw. I want this to look more like my current website. So, can you change the colors and the typeface to match? And then, this resume should also live on my website. And ideally, this thing could live on my website on the resume page as well as be PDF downloadable.

## Intent
Keep the one-page two-column resume. Restyle it to the live site (greyscale, sage, Playfair, DM Sans, JetBrains Mono). Show it on `/resume`. Serve a real PDF from the download link.

## Scope
- In:
  - Same facts as `Resume/Resume 2025.pdf`, with “progressive” spelled correctly.
  - Site colors and type.
  - `/resume` page and a downloadable PDF.
- Out:
  - Editing the InDesign file.
  - Adding DoorDash, Awake, or other roles Xiao has not put on this resume.
  - Publishing the old portfolio password.

## Constraints
- 2026-08-04 greyscale + sage. Resume type specs in `Designer/design-system.md`.
- Do not invent roles, dates, or metrics.

## Ask
Replace the placeholder resume page with this sheet and link the download to a real PDF.

## Done when
- [ ] `/resume` uses site type and color and the PDF’s content
- [ ] Download link serves a PDF
- [ ] Old portfolio password is not on the page or the PDF
