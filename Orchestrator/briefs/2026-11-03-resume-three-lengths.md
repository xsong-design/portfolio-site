# Brief: Three resume lengths, one lead sentence each

- **Date:** 2026-11-03
- **From:** Xiao (via Orchestrator)
- **To:** Resume writer
- **Priority:** P0
- **Related files:** `.cursor/skills/resume-writer/SKILL.md`, `site/src/components/ResumeSheet.tsx`

## Verbatim
> Also, the new resume writer skill. I don't know if you've gotten that done yet. Let me know exactly what I should say or if you could pull any numbers for me. I think what would be the most impactful thing for me to say on my resume for each experience if it's like a one sentence deal? And then how can we say, come up with three versions or we could get to that later? I want one version where On the website, we could talk a little bit more. But however, the resumes that I send to recruiters that are one pagers, maybe condense it a bit. And then finally, for LinkedIn, where content for LinkedIn, where I could use similar content and be able to update my LinkedIn, if that makes sense. Let me know what the content design skill or the resume writer skill recommends me, and then I could talk through it if needed.

## Intent
The skill already exists. Tell Xiao what it recommends: one lead sentence per role, a longer cut on the website, a shorter one-page PDF for recruiters, and LinkedIn text in the same facts with “I”. Pull only numbers he already confirmed. Do not change the live page until he says the lead sentences are right.

## Scope
- In: skill rule for the three cuts. Recommendation in the reply. Gaps named.
- Out: rewriting `ResumeSheet.tsx` or reprinting the PDF on this pass. Inventing metrics. Publishing the portfolio password.

## Constraints
Confirmed numbers stay the ones from his DoorDash-era resume and his talk-through. Case-study drafts are not new resume metrics until he claims them.

## Ask
Recommend the lead sentence per role and the questions that would fill a real gap.

## Done when
- [x] Skill states website, recruiter PDF, and LinkedIn as three cuts of the same facts
- [ ] Xiao confirms or corrects the lead sentences
- [ ] Only then does the page or PDF change
