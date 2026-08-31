# Site Map & Information Architecture

> Planner deliverable — defines page hierarchy, navigation structure, URL routing, and extensibility plan.

---

## Site Map (Visual Tree)

```
xiaosong.design (root)
│
├── / ─────────────────── Homepage (landing experience)
│
├── /work ─────────────── Work Index (all projects)
│   ├── /work/[slug] ──── Case Study 1
│   └── /work/[slug] ──── Case Study 2
│   └── (future) ──────── Case Study 3, 4, 5…
│
├── /craft ────────────── Craft Lab (interactive experiments)
│
├── /about ────────────── About (background, philosophy, skills)
│
├── /contact ──────────── Contact / Connect
│
└── /resume ───────────── Resume (inline + downloadable PDF)
```

**Total pages at launch:** 7 (Homepage, Work Index, 2 Case Studies, Craft, About, Contact/Resume combined or separate)

---

## Page Hierarchy & Relationships

| Page | Type | Parent | Purpose |
|------|------|--------|---------|
| `/` | Landing | — | First impression. Communicate who Xiao is, show selected work, set the interactive tone |
| `/work` | Index | `/` | Gallery of all case studies. Entry point for deep dives |
| `/work/[slug]` | Detail | `/work` | Individual case study narrative |
| `/craft` | Showcase | `/` | Live interactive experiments — the differentiator |
| `/about` | Informational | `/` | Background, design philosophy, skills, experience |
| `/contact` | Action | `/` | Ways to connect — email, LinkedIn, social |
| `/resume` | Reference | `/about` | Inline resume with PDF download option |

### Key Relationship Decisions

- **Homepage → Work:** Homepage features 2 selected case studies as prominent cards. Clicking goes to `/work/[slug]` directly. A "View all work" link goes to `/work`.
- **Work Index → Case Studies:** `/work` lists all projects as a grid/list. Each links to its `/work/[slug]` page.
- **About → Resume:** Resume is a sibling page to About, not nested under it. Both are in primary nav.
- **Craft Lab is top-level:** Not buried under "About" or "Work." It's a first-class section because it's the portfolio's key differentiator (per Researcher recommendation).

---

## Navigation Structure

### Primary Navigation (persistent header)

```
[Logo/Name]     Work     Craft     About     Contact     [Resume ↓]
```

| Item | Destination | Notes |
|------|-------------|-------|
| Logo/Name | `/` | Always returns to homepage. Could be an animated wordmark. |
| Work | `/work` | Shows all case studies |
| Craft | `/craft` | Interactive experiments showcase |
| About | `/about` | Background and philosophy |
| Contact | `/contact` | Ways to connect |
| Resume | `/resume` or PDF download | Could be a button-style link or direct PDF download — TBD |

**Nav behavior:**
- Desktop: Horizontal nav, right-aligned links. Minimal. Stays fixed on scroll with a subtle backdrop blur.
- Mobile: Hamburger → full-screen overlay menu with staggered reveal animation.
- Active state: Current page indicated via underline or weight change — not color (keeps the palette minimal per Researcher's "intentional constraint" recommendation).

### Secondary Navigation (footer)

```
[Social links: LinkedIn, Twitter/X, GitHub, Dribbble]
[Email: hello@xiaosong.design]
[Resume PDF download]
[© 2026 Xiao Song]
```

### Breadcrumbs / Back Navigation

- Case study pages: Back arrow + "All Work" link at the top (returns to `/work`)
- At end of each case study: "Next project →" link to the next case study (circular — last project links to first)
- This creates a browsing loop that keeps visitors in the work section

---

## URL Structure

| URL | Page | Dynamic? |
|-----|------|----------|
| `/` | Homepage | No |
| `/work` | Work Index | No |
| `/work/audience-send` | Case Study (example slug) | Yes — `[slug]` from markdown/MDX |
| `/work/subscriber-growth` | Case Study (example slug) | Yes — `[slug]` from markdown/MDX |
| `/craft` | Craft Lab | No |
| `/about` | About | No |
| `/contact` | Contact | No |
| `/resume` | Resume | No |

### Future URL Extensions

| URL | Purpose | When |
|-----|---------|------|
| `/work/[new-slug]` | Additional case studies | Post-launch (just add a new MDX file) |
| `/blog` | Writing / articles | Post-launch if desired |
| `/blog/[slug]` | Individual blog post | Post-launch |
| `/craft/[slug]` | Individual experiment deep-dive | Post-launch |

**Extensibility approach:** Case studies are MDX files in a `/content/work/` directory. Adding a new case study = adding a new `.mdx` file. The `/work` index auto-generates from available files. Same pattern extends to blog posts later.

---

## How Case Studies Are Accessed

Case studies are discoverable via **three paths:**

1. **Homepage (primary):** Two featured case studies displayed as prominent interactive cards in the "Selected Work" section. Clicking goes directly to `/work/[slug]`.
2. **Work Index (secondary):** `/work` page lists all case studies. Accessible from primary nav. This becomes more important as the portfolio grows beyond 2 projects.
3. **Sequential browsing (tertiary):** "Next project" link at the bottom of each case study creates a browsing loop.

**Rationale:** At launch with only 2 case studies, the homepage is the primary entry point. The `/work` index exists from day one to establish the pattern, but it becomes more valuable as more projects are added.

---

## Experimental Navigation Ideas

These are grounded in usability but add an interactive layer that fits the portfolio's direction:

### 1. Command Palette (⌘K / Ctrl+K)
- **What:** A spotlight-style search/navigation overlay. Type to jump to any page, case study, or section.
- **Why:** Borrowed from developer tools (VS Code, Linear, Raycast). Shows technical fluency. Practical for repeat visitors.
- **Usability:** Entirely optional — every page is accessible through standard nav. This is a power-user layer.
- **Priority:** P1 (nice to have at launch)

### 2. Magnetic Nav Items
- **What:** Nav links subtly pull toward the cursor as it approaches (spring physics). Click target expands smoothly.
- **Why:** Demonstrates micro-interaction craft without disrupting navigation flow. References Rauno Freiberg's magnetic elements.
- **Usability:** Visual enhancement only — doesn't change click behavior.
- **Priority:** P0 (part of the interaction layer)

### 3. Page Transition Choreography
- **What:** Navigating between pages triggers coordinated exit/enter animations. Content slides, fades, or morphs rather than hard-cutting.
- **Why:** Creates a sense of spatial continuity. References Robin Noguier's transitions.
- **Usability:** Keep transitions under 400ms. Always interruptible (clicking again immediately navigates).
- **Priority:** P0 (core to the "interactive" identity)

### 4. Scroll Progress Indicator
- **What:** A thin progress bar or typographic counter showing scroll position on long pages (case studies).
- **Why:** Helps users gauge content length in long-form case studies.
- **Priority:** P1

---

## Extensibility Plan

| Scenario | What to do | Effort |
|----------|------------|--------|
| Add a new case study | Create a new `.mdx` file in `/content/work/`. It auto-appears on `/work` and can be featured on homepage. | ~30 min (content) |
| Add a blog | Create `/content/blog/` directory + `/blog` and `/blog/[slug]` pages. Same MDX pattern as case studies. | ~2-3 hours (infrastructure) |
| Add more Craft experiments | Add components to the Craft page. Optionally create `/craft/[slug]` for deep-dives. | ~1 hour per experiment |
| Add new nav items | Add to the nav config array. Layout accommodates up to 6-7 items before needing redesign. | ~5 min |
| Custom domain | Point DNS to GitHub Pages. No code changes needed. | ~15 min |

---

## Open Questions for Xiao

1. **Resume page vs. PDF-only:** Should `/resume` be a styled inline page (with PDF download option), or just a direct PDF download link in the nav? Recommendation: inline page — it's another surface to show design craft.
2. **Contact page scope:** Simple links (email + socials) or a contact form? Recommendation: links only — no backend needed, lower friction, fits the static site constraint.
3. **Craft Lab at launch:** Should Craft Lab have real content at launch, or launch as a "coming soon" placeholder? Recommendation: Launch with 2-3 small experiments — even simple ones. An empty Craft page hurts more than helps.
