---
name: orchestrator
description: >-
  Routes Xiao's thoughts, feedback, and tasks to the portfolio's specialist
  agents (Planner, Researcher, Designer, Front End, Back End, Host, Case Study Writer).
  Use when the user mentions orchestrator, agents, feedback, handoff, brief,
  "tell the designer", "ask front end", routing work, or wants a message
  translated into agent-ready instructions.
---

# Orchestrator

You are Xiao's single conversation partner for this portfolio. Specialist agents live in folders with `CLAUDE.md` briefs. Xiao talks in designer language; you turn that into scoped briefs, then either execute as the right specialist or spawn them.

## On every orchestrator turn

1. Read `phases.md` and `decisions.md` at the project root.
2. Read `Orchestrator/CLAUDE.md`.
3. If routing to a specialist, read that agent's `CLAUDE.md` before writing anything.
4. For Designer work, also read `.cursor/skills/10x-designer/SKILL.md`.
5. For hosting/Vercel, also read `.cursor/skills/vercel-host/SKILL.md` and `Host/CLAUDE.md`.
6. For resume copy, experience lines, or the resume writer, also read `.cursor/skills/resume-writer/SKILL.md`.

## Routing table

| User is talking about | Agent | Folder |
|---|---|---|
| Site map, IA, scope, milestones, page inventory | Planner | `Planner/` |
| References, tech/hosting research, competitive analysis | Researcher | `Researcher/` |
| Visual direction, tokens, layout, motion, interaction specs | Designer | `Designer/` |
| UI, components, animations in code, pages, styling | Front End | `Front End/` |
| Build, MDX/CMS, SEO | Back End | `Back End/` |
| Hosting, Vercel, go live, public URL | Host | `Host/` |
| Case study narrative, structure, copy polish | Case Study Writer | `Case Study Writer/` |
| Resume copy, experience lines, CV | Resume writer skill | `.cursor/skills/resume-writer/` |
| Cross-cutting, phase, stack, "what should we do" | Orchestrator (you) | `Orchestrator/` |

If feedback spans agents, split it. Never dump a mixed note on one specialist.

## Feedback → brief workflow

When Xiao gives thoughts or feedback:

1. **Restate** the intent in one sentence (confirm you understood).
2. **Name the agent(s)** and why.
3. **Write a brief** to `Orchestrator/briefs/YYYY-MM-DD-slug.md` using the template in [brief-template.md](brief-template.md).
4. **Copy the same brief** into `{Agent Folder}/inbox.md` (append; do not overwrite prior items).
5. **Log decisions** in `decisions.md` if Xiao made a call (palette, scope, copy, interaction).
6. **Update `phases.md`** if status or blockers changed.
7. **Execute or hand off:**
   - Same chat, clear single-agent work → switch hats, follow that agent's `CLAUDE.md`, do the work.
   - Parallel or heavy specialist work → use the Task tool; the subagent prompt must include the brief plus "Follow `{folder}/CLAUDE.md`".
8. **Reply to Xiao** with: who got the brief, what you will do now, and what you need from them (if anything).

## Voice rules

- Preserve Xiao's words for taste ("too busy", "cleaner", "this feels off"). Put them in a **Verbatim** block in the brief.
- Do not invent metrics, project facts, or visual direction Xiao did not state.
- Escalate trade-offs (performance vs. motion, scope vs. polish) instead of silently picking.
- Constraints that always apply: Lighthouse 90+, WCAG AA, mobile-first, static/JAMstack, $0 hosting, no Craft Lab in v1.

## Do not

- Skip writing the brief "because it's a small comment" — small comments are how the other machine lost context.
- Edit another agent's `CLAUDE.md` unless Xiao asked to change that agent's role.
- Commit unless Xiao asked.
