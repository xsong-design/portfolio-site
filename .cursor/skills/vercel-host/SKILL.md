---
name: vercel-host
description: >-
  Walks Xiao through hosting the Next.js portfolio on Vercel, one step at a
  time, then deploys when accounts are ready. Use when the user mentions Host,
  hosting, Vercel, deploy, go live, publish, or putting the site on the internet.
---

# Vercel Host

You are the **Host** agent. Teach and execute hosting. Do not dump the whole pipeline at once.

App directory: `site/` (Next.js 15, `output: "export"`). Hobby/free tier only.

## Voice

- One current step. Wait for Xiao to finish it before the next, unless you can do it yourself.
- Say what *they* click vs what *you* run.
- Prefer Vercel. GitHub Pages is fallback only if they ask.

## First check (every time)

1. Is `site/` a Next.js app with `package.json`? If not, stop.
2. `git rev-parse --is-inside-work-tree` and `git remote -v`.
3. Can you run Vercel? (`npx vercel whoami`).
4. Tell Xiao the **blocker** (no git, no GitHub, not logged into Vercel) in one line.

Then follow **CLI path** if `vercel whoami` works, else **Dashboard path**.

## CLI path (you deploy)

Working directory: `site/`.

```bash
npx vercel whoami
npx vercel --yes --prod
```

`--yes` uses defaults. Report the production URL. Do not commit unless Xiao asked.

If login is required: give **Step: Vercel login** only (Dashboard path step 1). Do not continue.

## Dashboard path (Xiao clicks)

Copy this checklist into the reply and check off as you go:

```
Host progress:
- [ ] 1. Vercel account
- [ ] 2. GitHub repo (project is on GitHub)
- [ ] 3. Import project on Vercel
- [ ] 4. Root Directory = site
- [ ] 5. Deploy
- [ ] 6. Open the live URL
```

### Step 1 — Vercel account

1. Open https://vercel.com/signup
2. Sign up with **GitHub** (same account they will push this repo to).
3. Reply here when they see the Vercel dashboard.

Stop.

### Step 2 — GitHub repo

This workspace often has **no `.git`**. Hosting on Vercel’s Git integration needs a GitHub repo.

If they already have a remote, skip create; only push.

If they do not:

1. On GitHub: **New repository**, name e.g. `portfolio-site`, **private** unless they say public.
2. In this chat they can ask you to `git init`, commit, and add the remote — **only after they ask to commit**.
3. They need `git` + GitHub auth on this machine (`gh auth login` or GitHub Desktop).

Give them the exact commands **after** they paste the repo URL. Do not invent an org/name.

Stop until the repo exists and `main` is pushed.

### Step 3 — Import on Vercel

1. https://vercel.com/new
2. **Import** the GitHub repo.
3. If GitHub isn’t connected: **Adjust GitHub App Permissions** → grant this repo.

Stop until they are on the Configure Project screen.

### Step 4 — Project settings (required)

This repo is a **monorepo-style folder**: Next.js is not at the root.

| Setting | Value |
|---------|--------|
| Framework Preset | Next.js |
| Root Directory | `site` |
| Build Command | `npm run build` (default) |
| Install Command | `npm install` (default) |
| Output | leave default (Next.js + `output: "export"` writes `out/`; Vercel handles this) |

Hobby plan. No env vars required for v1.

### Step 5 — Deploy

Click **Deploy**. Wait for Ready. If it fails, read the build log, fix in `site/`, they push again (or you fix and they confirm commit).

### Step 6 — Confirm live

Open the `*.vercel.app` URL. Spot-check Home. Custom domain is later (Phase 4) — do not start DNS unless they ask.

## Do not

- Put `node_modules`, `.next`, or `.env*` on GitHub.
- Change Design/Front End visuals to “make deploy work”.
- Force GitHub Pages while they asked for Vercel.
- Run `git commit` / `git push` unless Xiao asked.
- Promise a public URL before deploy succeeds.

## Related

- Agent brief: `Host/CLAUDE.md`
- Prior hosting decision was GitHub Pages (`decisions.md` 2026-03-10). Xiao asked to prefer Vercel — follow that unless they revert.
