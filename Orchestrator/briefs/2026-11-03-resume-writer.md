# Brief: Resume writer in this chat

- **Date:** 2026-11-03
- **From:** Xiao (via Orchestrator)
- **To:** This chat (resume copy) → Front End (site page + downloadable file)
- **Priority:** P1
- **Related files:** `Resume/Resume 2025.pdf` (source, placed 2026-11-03), `Desktop - Xiao’s MacBook Air/Design/Resume.indd`, `site/src/app/resume/page.tsx`, `site/preview-resume.html`, `Designer/design-system.md` (For Resume PDF)

## Verbatim
> Can you use this one? This chat agent right here is a resume writer. I have an old resume that's in PDF format and was edited in Adobe InDesign, and I want to make updates to it. I want to also update it to my website and have created a downloadable copy as well.

## Intent
This conversation is the resume writer. Update Xiao’s resume from the InDesign source, put the approved copy on `/resume`, and ship a downloadable file that matches the site. Do not invent roles, dates, or metrics.

## Scope
- In:
  - Read the InDesign resume as the old source (`Resume.indd`, last saved 2025-03-05).
  - Rewrite only after Xiao states the updates.
  - Replace the placeholder on `site/src/app/resume/page.tsx`.
  - Add a real download (PDF) linked from that page.
- Out:
  - Editing the `.indd` file in InDesign.
  - Restyling the site from the old resume layout.
  - Publishing metrics or dates Xiao has not confirmed.

## Constraints
- 2026-03-18: resume page was a placeholder; PDF drop-in later.
- 2026-08-04: greyscale + sage. Resume PDF specs in `Designer/design-system.md`.
- Do not invent project facts. About says Meta 2022–Present and DoorDash with no dates. The HTML preview says DoorDash Apr 2025–Aug 2025 and Meta Oct 2022–Sep 2024. The InDesign file’s latest story is Meta (Teksystems), LiveControl, Walmart, Awake — no DoorDash. Hold until Xiao picks.

## Ask
1. Source PDF is in: `Resume/Resume 2025.pdf`. Read 2026-11-03. One page. US Letter. Garamond Premier Pro + Helvetica Neue. Brush through the name. Experience left; education, skills, contact right.
2. Format example (same words, not a content rewrite): `site/public/resume-example/index.html`. Local: `http://localhost:3000/resume-example/index.html`.
3. This chat asks what to change before rewriting. DoorDash, Awake, and later Meta work are not on this PDF.
4. After Xiao confirms facts: write the copy here, then Front End puts it on `/resume` and adds the download.

## Done when
- [ ] Xiao confirms the updated facts
- [ ] `/resume` shows that copy
- [ ] Download link serves a real file
- [ ] No unconfirmed metrics or dates
