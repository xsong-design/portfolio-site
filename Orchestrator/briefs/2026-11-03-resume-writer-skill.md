# Brief: Resume writer skill

- **Date:** 2026-11-03
- **From:** Xiao (via Orchestrator)
- **To:** Resume writer skill (this chat)
- **Priority:** P1
- **Related files:** `.cursor/skills/resume-writer/SKILL.md`, `.cursor/skills/resume-writer/craft-bar.md`, `Case Study Writer/craft-bar.md`

## Verbatim
> And then I need you to actually. Can you create a skill for me that's adjacent to the case study writer that uses the same tone and voice? However, it's for the resume writer. I wanted to go learn what a good resume looks like and how to write a good resume. And then I want the resume writer to help me update the content in my experiences.

## Intent
A project skill that writes resume experience lines in the case-study voice, grounded in how a resume is actually scanned, and used when Xiao updates a role.

## Scope
- In: skill + craft bar, orchestrator routing.
- Out: rewriting experience copy before Xiao talks a role through.

## Ask
Skill is in `.cursor/skills/resume-writer/`. Next pass waits for which role to update.

## Done when
- [x] Skill and craft bar written
- [x] Orchestrator routes resume copy to it
- [ ] Xiao picks a role and talks it through
