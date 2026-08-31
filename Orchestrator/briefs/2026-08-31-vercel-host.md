# Brief: Host the portfolio on Vercel

- **Date:** 2026-08-31
- **From:** Xiao (via Orchestrator)
- **To:** Host
- **Priority:** P0
- **Related files:** `site/`, `Host/CLAUDE.md`, `.cursor/skills/vercel-host/SKILL.md`

## Verbatim
> Create an agent for me that will help me step by step on how to host this website somewhere, preferabley vercel as a lot of people have been using that
> Host the website i am creating

## Intent
Xiao gets a Host specialist that walks Vercel one step at a time, and a real public URL for the Next.js app in `site/` once GitHub + Vercel login exist.

## Scope
- In: Host agent + skill, Vercel Hobby deploy, Root Directory `site`
- Out: Custom domain, analytics, design changes, unsolicited git commit

## Constraints
- $0 hosting
- Next.js app is `site/`, not repo root
- Do not commit unless Xiao asked
- 2026-03-10 logged GitHub Pages; Xiao now prefers Vercel

## Ask
1. Add Host to the roster and a Vercel walkthrough skill.
2. Start the first live deploy; stop at the first blocker Xiao must do (account / git).

## Done when
- [x] `Host/CLAUDE.md` and vercel-host skill exist
- [ ] Production URL is live
