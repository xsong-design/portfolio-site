# Portfolio Site — Project Brief

## Owner
- **Name:** Xiao
- **Title:** Product Designer at Meta
- **Team:** Business Messaging → Engagement
- **Scope at Meta:** 1P Buying (Audience Send), 3P Subscriber efforts
- **Design focus:** Enterprise SaaS, messaging platforms, complex workflows

## Project Goal
Build an interactive/experimental personal portfolio site that showcases Xiao's product design work with distinctive animations, micro-interactions, and unconventional layouts — standing out from standard template portfolios.

## Design Direction
- **Style:** Interactive, experimental, motion-forward
- **Tone:** Professional but creatively bold — shows craft and technical range
- **Key differentiators:** Page transitions, scroll-driven animations, unique navigation patterns, thoughtful micro-interactions
- **Accessibility:** WCAG AA minimum — interactive does not mean inaccessible

## Tech Stack & Hosting
- Next.js + Tailwind in `site/`. Hosting: **Vercel** (preferred; Host agent). Older log listed GitHub Pages.
- Priorities: performance, animation capability, developer experience, easy content updates

## Content Scope
- Homepage / landing experience
- Case studies (3-5 deep dives into design work)
- About page (background, philosophy, skills)
- Contact / connect page
- Resume / CV (downloadable or inline)

## Constraints
- Must be performant (target 90+ Lighthouse score)
- Must be responsive (mobile-first)
- Content should be easy to update without rebuilding (markdown or CMS)
- No backend server required — static or JAMstack preferred
- Budget: $0 hosting preferred (free tier platforms)

## Talking to agents
In Cursor, talk to the **Orchestrator** in this chat. It turns feedback into briefs (`Orchestrator/briefs/`) and inbox items on the right specialist. Skill: `.cursor/skills/orchestrator/SKILL.md`. Roster: `AGENTS.md`.

## Agent Team
| Agent | Folder | Role |
|-------|--------|------|
| Orchestrator | `Orchestrator/` | Central coordinator, decision-maker |
| Planner | `Planner/` | Site structure, IA, milestones |
| Researcher | `Researcher/` | Best practices, tech recommendations, references |
| Designer | `Designer/` | Visual direction, design system, interaction specs |
| Front End | `Front End/` | UI implementation, animations, components |
| Back End | `Back End/` | Build tooling, CMS, SEO |
| Host | `Host/` | Vercel hosting, first live URL |
| Case Study Writer | `Case Study Writer/` | Case study storytelling, content cleanup, polished markdown |

## Shared Files
| File | Purpose |
|------|---------|
| `decisions.md` | Running log of project decisions |
| `phases.md` | Project phase tracker with status |

## Project Phases
1. **Phase 1 — Research & Plan** (current): Researcher + Planner work in parallel
2. **Phase 2 — Design:** Designer begins once site map + references are ready
3. **Phase 3 — Build:** Front End + Back End begin once tech stack is decided and design specs exist
4. **Phase 4 — Integrate & Launch:** Polish, test, deploy
