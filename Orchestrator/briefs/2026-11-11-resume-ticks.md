# Brief: Sentence marks and skill-group spacing

- **Date:** 2026-11-11
- **From:** Xiao (via Orchestrator)
- **To:** Front End
- **Priority:** P0
- **Related files:** `site/src/app/globals.css`, `site/src/components/ResumeSheet.tsx`, `site/public/xiao-song-resume.pdf`

## Verbatim
> I wonder if you should add little bullet points to every single sentence within the experiences. And then they don't have to be indented. I want the ragging on the left hand side to stay a solid, straight line down. However, maybe on the left hand side, add a little bit of a detail of an indent or add some kind of visual detail to indicate or help people split the information, kind of like bullet points. And then after that, I think this is starting to look better. I think the AI tools and work tools and also design tools, it should get the same spacing as the experiences on the left-hand side, where between Meta and DoorDash, there's more space than there is between AI tools and work tools.

## Intent
A small mark beside each experience sentence. The words stay on one flush left edge with the company names. Wrapped lines do not step in. Design tools, AI tools, and Work tools get the same gap as the roles.

## Done when
- [x] Each experience sentence has a sage dot in the gutter
- [x] Company names and sentence text share one left edge
- [x] Skill groups use the role gap
- [x] PDF is one page
