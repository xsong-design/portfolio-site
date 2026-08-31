# Decisions Log

Running log of project decisions. Updated by the Orchestrator agent.

## Format
Each entry follows this structure:
- **Date:** YYYY-MM-DD
- **Decision:** What was decided
- **Context:** Why this came up
- **Options considered:** What alternatives were evaluated
- **Rationale:** Why this option was chosen
- **Owner:** Who made the decision

---

## Decisions

### 2026-08-31 — Host on Vercel (preferred)
- **Decision:** Prefer **Vercel** (Hobby / free) for the live site. Add a Host agent that walks Xiao through deploy one step at a time.
- **Context:** Xiao asked to host the site and noted a lot of people use Vercel. The Next.js app is in `site/`. This machine had no git repo and no Vercel login.
- **Options considered:** Vercel (preferred), GitHub Pages (2026-03-10 decision, still in `site/.github/workflows/deploy.yml`)
- **Rationale:** Vercel is the native host for Next.js; free tier fits the $0 constraint. Root Directory on Vercel must be `site`.
- **Owner:** Xiao

### 2025-03-10 — Project Kickoff
- **Decision:** Established agent team structure with 6 agents (Orchestrator, Planner, Researcher, Designer, Front End, Back End)
- **Context:** Need a structured approach to building an interactive/experimental portfolio site
- **Rationale:** Separating concerns allows parallel work and clear ownership
- **Owner:** Xiao

### 2025-03-10 — Design Direction
- **Decision:** Interactive/experimental style with animations, micro-interactions, and unconventional layouts
- **Context:** Portfolio should stand out from standard template portfolios and demonstrate design craft
- **Rationale:** Xiao's role as a product designer benefits from a portfolio that shows both visual and interaction design skill
- **Owner:** Xiao

### 2025-03-10 — Tech Stack Approach
- **Decision:** Tech stack to be recommended by Researcher agent, decided by Orchestrator
- **Context:** Multiple valid frameworks and tools exist; need evidence-based recommendation
- **Rationale:** Let agents evaluate options against project constraints before committing
- **Owner:** Xiao

### 2026-03-10 — Tech Stack Decided
- **Decision:** Next.js + Tailwind CSS + GitHub Pages
- **Context:** Need a stack that Cursor AI handles well for vibe coding, free hosting, and easy content updates
- **Options considered:** Astro, plain HTML/CSS, Webflow, Squarespace
- **Rationale:** Next.js has best Cursor AI support; Tailwind maps to CSS properties intuitively for designers; GitHub Pages is free and auto-deploys
- **Owner:** Xiao

### 2026-03-10 — Skip Figma, Go Direct-to-Code
- **Decision:** Skip formal Figma design phase, go straight to building in Cursor
- **Context:** 5-week timeline (launch Apr 15) with 3-4h/week doesn't leave room for a separate design phase
- **Rationale:** Xiao is a designer and can make visual decisions in-browser. Vibe coding in Cursor is faster than Figma → handoff → code for a solo project.
- **Owner:** Xiao

### 2026-03-10 — Launch Scope: 2 Case Studies
- **Decision:** Launch with exactly 2 case studies; add more post-launch
- **Context:** Each case study takes 4-6h (content writing + build). Budget can't support more than 2 pre-launch.
- **Rationale:** A portfolio with 2 strong case studies is better than 4 rushed ones
- **Owner:** Xiao

### 2026-03-18 — Flexible Timeline, Quality Over Speed
- **Decision:** Remove the Apr 15 hard deadline; take the time needed to build the best possible site
- **Context:** 5-week timeline with 3-4h/week was creating pressure to cut corners
- **Rationale:** A portfolio is a long-term asset. Rushing it defeats the purpose of standing out. Quality of craft > speed to launch.
- **Owner:** Xiao

### 2026-03-18 — Launch Case Studies Selected
- **Decision:** Launch with 2 case studies: "Marketing Message Liquidity" and "Driver Tipping at Walmart"
- **Context:** Need to decide which 2 projects to feature at launch
- **Rationale:** Mix of Meta (enterprise messaging) and non-Meta work shows range
- **Status:** Case study content being written in a separate agent session
- **Owner:** Xiao

### 2026-03-18 — Craft Lab: Coming Soon Placeholder at Launch
- **Decision:** Launch Craft Lab as a "coming soon" placeholder, build real experiments post-launch
- **Context:** Craft Lab is the differentiator but not critical path for v1
- **Rationale:** Avoids scope creep. Can add experiments iteratively.
- **Owner:** Xiao

### 2026-03-18 — Resume: PDF Drop-in Later
- **Decision:** Build resume page template with placeholder. Xiao will provide a PDF to drop in later.
- **Owner:** Xiao

### 2026-03-18 — Contact: Email Only for Now
- **Decision:** Contact page launches with email (songxiao16@gmail.com). Socials added later.
- **Owner:** Xiao

### 2026-03-18 — Light/Dark Mode: Defer to Design Phase
- **Decision:** Defer light/dark mode decision until design exploration with the Designer agent
- **Context:** Xiao wants to look for inspiration before committing to a color mode strategy
- **Owner:** Xiao

### 2026-03-18 — Visual Direction: Light Editorial
- **Decision:** Light mode, editorial/magazine aesthetic with warm off-white background, bold orange-red accent, massive serif display type
- **Context:** Xiao shared reference images from "lab./X-LAB" site showing heavy contrast, space-filling typography, geometric shapes layered with dimensional imagery
- **Key specs:**
  - Background: `#F0EFEB` / Text: `#1A1A1A` / Accent: `#E54D2E`
  - Display font: Playfair Display (serif) / Body: DM Sans / Mono: JetBrains Mono
  - Asymmetric grid, overlapping elements, editorial numbering, sharp edges
  - Lowercase hero text with trailing period ("xiao song.")
  - Single accent color site-wide (no per-case-study colors)
  - Conservative geometric shapes (2-3 per viewport)
- **Owner:** Xiao + Designer agent

### 2026-03-18 — Visual Direction Locked: Animated Preview
- **Decision:** Locked the animated editorial direction as the build target
- **Context:** Designer explored 3 additional options (refined, bold, maximal) but Xiao preferred the original animated preview
- **Key interaction specs confirmed:**
  - Hero: word-by-word staggered reveal with blur-to-sharp
  - Custom cursor (accent dot + ring with spring lag)
  - Scroll progress bar (thin accent line at top)
  - Scroll-triggered section reveals (fade up)
  - Parallax on geometric shapes
  - 3D tilt on project card hover
  - Animated nav underlines + arrow shifts on links
  - All animations respect prefers-reduced-motion
- **Reference file:** `site/preview-animated.html`
- **Owner:** Xiao

### 2026-03-18 — Craft Section Removed from Launch
- **Decision:** Remove Craft Lab section entirely from v1 launch. Can be added back later.
- **Context:** Xiao doesn't have a clear idea of what to put in Craft Lab yet. Shipping without it is cleaner than a "coming soon" placeholder.
- **Rationale:** Focus on what's ready. Craft Lab can be re-added when there's real content for it.
- **Owner:** Xiao

### 2026-03-18 — Hero Cleanup: No Watermarks, No Hairlines
- **Decision:** Simplified the hero section — removed background watermark text, hairline borders (top/bottom), left vertical text, and italic subtext styling. Kept: accent rectangle, right vertical text, clean label/title/description.
- **Context:** The 10x design pass added too much visual noise. Xiao preferred the cleaner original layout.
- **Rationale:** Clean > busy. Let typography and the accent rectangle do the work.
- **Owner:** Xiao

### 2026-03-18 — Design Direction Finalized for Build
- **Decision:** Design direction is locked. Ready to build the real Next.js site matching `site/preview-typography.html`.
- **Context:** Multiple iterations of the preview have been refined through user feedback. The current file represents the final visual target.
- **Key specs:**
  - Light editorial style: `#F0EFEB` bg, `#1A1A1A` text, `#E54D2E` accent
  - Playfair Display / DM Sans / JetBrains Mono
  - Accent rectangles (no circles) in hero, project cards, and section backgrounds
  - Bottom-aligned hero with word-by-word animated reveal
  - Custom cursor, scroll progress, parallax, 3D card tilt
  - Grain texture overlay, section dividers, scroll reveals
  - No watermarks, no hairlines, no italic subtext
  - 5 pages at launch: Home, Work (index + 2 case studies), About, Contact, Resume
  - No Craft Lab at launch
- **Reference file:** `site/preview-typography.html`
- **Owner:** Xiao + Orchestrator

### 2026-05-24 — Homepage Case Study Section: Sticky Theater
- **Decision:** Use "Sticky Theater" (Option A) for the homepage case study section
- **Context:** The current asymmetric 7/5 grid didn't scale well to 4+ projects. Xiao wanted a stacked, parallax-driven approach with small description areas.
- **Options considered:**
  - **A: Sticky Theater** — Full-viewport cinematic transitions. Each project pins to viewport, compresses/fades as next project scales in.
  - **B: Split Scroll** — Left column pinned with project info, right column scrolls images with crossfade on left.
  - **C: Parallax Stack** — Vertical card stack with multi-layer parallax depth (index/image/text at different rates).
- **Rationale:** Sticky Theater had the most visual presence. Parallax Stack felt too bland. Split Scroll had alignment mismatches between visual and text that felt off.
- **Reference files:** `site/preview-option-a.html`
- **Owner:** Xiao

### 2026-08-04 — Greyscale Restyle with Sage Accent
- **Decision:** Restyle entire site from warm off-white + orange-red palette to clean greyscale + muted sage/olive accent
- **Context:** Xiao wanted to move away from the colorful editorial direction to a more black-and-white, minimal style
- **Key changes:**
  - Background: `#F0EFEB` → `#F5F5F5` (neutral light grey)
  - Accent: `#E54D2E` (orange-red) → `#6B7F6B` (muted sage)
  - All text greys shifted to neutral (removing warm undertones)
  - WCAG AA contrast ratios maintained across all combinations
- **Owner:** Xiao

### 2026-08-31 — Hero: counter fill, staggered altitudes, baseline label
- **Decision:** Meta’s **o** gets a sage **counter fill** (letter stays text color). Job callouts use unique stem lengths so they don’t share a vertical shelf. “Product designer” sits on the baseline dotted rail (shared em box with the name), matching how “Baseline” sits on the rail in Xiao’s reference.
- **Owner:** Designer → Front End

### 2026-08-31 — Hero: callouts with real targets
- **Decision:** Annotations point at glyphs. Meta → sage-filled **o** in *xiao* (most prominent, latest role). Product designer labels the baseline rail (“at a baseline, that is what I am”). Added LiveControl and Awake Design Studios. DoorDash→g, Walmart→s, LiveControl→a, Awake→i.
- **Owner:** Xiao → Designer → Front End

### 2026-08-31 — Hero: proportion pass from anatomy reference
- **Decision:** Treat Xiao’s typography diagram as a *proportion* reference, not a template. Name dominates; dotted rails are hairline sage (~20% opacity); job labels are Playfair italic at ~11px floating above/below with thin stems — same type family as the name. No anatomy vocabulary, no letter fills, no left bracket.
- **Owner:** Designer → Front End

### 2026-08-31 — Hero: Designer lock before further FE
- **Decision:** Stop ad-hoc hero edits. Designer owns `hero-type-anatomy-spec.md` as the source of truth; Front End implements the checklist only.
- **Fixes locked:** full descenders (no clip); dashed lines through the name, right side only; muted sentence-case labels; ~2rem row spacing; no name background plate.
- **Owner:** Xiao → Designer → Front End

### 2026-08-31 — Hero centered + Sticky Theater restored
- **Decision:** "xiao song" is center-aligned. Leader labels include product designer, Meta, DoorDash, Walmart. Homepage work section uses Sticky Theater again (one project per scroll viewport) per 2026-05-24.
- **Owner:** Xiao

### 2026-08-31 — Hero: single-line name + company leaders
- **Decision:** Hero is one line — "xiao song" (no period). Dashed lines label Meta, DoorDash, Walmart only — no type-metric captions. Sage accents return on the landing page (leader lines, labels, section indices, soft sage plane, accent rect on first project card).
- **Removed:** period after song, stacked two-line name, "cap height / x-height / baseline / descender" callouts, RISD/Awake/LiveControl on those lines.
- **Reference file:** `Designer/hero-type-anatomy-spec.md`
- **Owner:** Xiao

### 2026-08-31 — Hero: Type Anatomy Leader Lines (superseded same day)
- **Decision:** Initial reconstruction used two-line name + metric captions. Xiao corrected it the same day — see entry above.
- **Owner:** Xiao + Designer

### 2026-08-31 — Live site must match greyscale + type-breakdown (not old orange editorial)
- **Decision:** The Next.js app is the source of truth for what Xiao sees. It must use greyscale + sage and the framed typographic hero — not the packed-up older warm/orange layout.
- **Context:** After unpacking on a new laptop, Xiao flagged the running site as an older iteration: black-and-white focused, greyish-green highlight, cleaner, typography-breakdown.
- **Rationale:** Tokens in `Designer/design-tokens.md` and composition in `Designer/hero-restyle-spec.md` already locked this. The build had drifted back to `#F0EFEB` / `#E54D2E` and the left-aligned accent-rectangle hero.
- **Owner:** Xiao

### 2026-08-04 — Homepage Case Studies: 5 Projects
- **Decision:** Expand homepage theater to 5 case studies in chronological order (most recent first)
- **Projects:** Meta 1P Buying → DoorDash Parcel → Marketing Message Liquidity → Driver Tipping → Search & Browse
- **Context:** Two new projects (Meta 1P Buying, DoorDash Parcel) added as placeholders. "Integrated Campaign Creation" removed (overlapped with MML).
- **Owner:** Xiao

---

_Next decisions pending: none — build phase continuing_
