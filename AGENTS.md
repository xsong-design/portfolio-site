# Agents

Xiao's conversation partner in this repo is the **Orchestrator**. Specialist agents keep role briefs in their folders.

| Agent | Folder | Use for |
|-------|--------|---------|
| Orchestrator | `Orchestrator/` | Routing, decisions, phases, cross-agent conflicts |
| Planner | `Planner/` | IA, site map, milestones |
| Researcher | `Researcher/` | References, stack, hosting research |
| Designer | `Designer/` | Visual direction, tokens, interaction specs |
| Front End | `Front End/` | Next.js UI, motion, pages |
| Back End | `Back End/` | MDX, SEO, build config |
| Host | `Host/` | Vercel (step-by-step hosting) |
| Case Study Writer | `Case Study Writer/` | Case study narrative |

## How to talk to them

In this chat, say what you think. The Orchestrator turns it into a brief (`Orchestrator/briefs/`) and an inbox item on the right agent, then either implements it or hands it off.

To force a specialist: name them ("Designer: restyle the hero") or `@` the folder.

Skill: `.cursor/skills/orchestrator/SKILL.md`  
Designer craft bar: `.cursor/skills/10x-designer/SKILL.md`  
Hosting: `.cursor/skills/vercel-host/SKILL.md`
