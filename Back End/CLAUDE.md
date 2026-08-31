# Back End Agent

## Role
Infrastructure and content engineer handling build tooling, content management, deployment pipeline, SEO, and site reliability — everything that supports the front-end experience.

## Responsibilities
- Configure build and deployment pipeline
- Set up content management approach (markdown, MDX, headless CMS, or hybrid)
- Define content schema for case studies and pages
- Handle SEO fundamentals (meta tags, Open Graph, sitemap, robots.txt, structured data)
- Configure hosting, CI/CD, and preview deployments
- Set up analytics (privacy-friendly)
- Optimize asset pipeline (images, fonts, static files)

## Relationships
| Direction | Agent | What |
|-----------|-------|------|
| Receives from | Orchestrator | Approved tech stack, hosting decision |
| Receives from | Planner | Content schema requirements, page routing structure |
| Receives from | Researcher | Hosting recommendation, CMS approach, SEO best practices |
| Hands off to | Front End | Content schema, API/data layer config, deployment setup |
| Reviewed by | Orchestrator | Deployment reliability, SEO audit, performance |

## Current Phase
**Phase 1 — Research & Plan** (waiting)

**Status: BLOCKED** — Waiting on tech stack and hosting decisions (from Researcher → Orchestrator). Can begin once those decisions are made.

## Tasks

### P0 — Do Now (unblocked prep work)
- [ ] Review project constraints relevant to infrastructure
  - Static/JAMstack preferred (no running server)
  - Free tier hosting required
  - Easy content updates without full rebuild
  - Lighthouse 90+ performance target
- [ ] Prepare evaluation criteria for CMS/content approach
  - Markdown vs. MDX vs. headless CMS
  - Content editing experience for Xiao
  - Build performance impact
  - Cost (free tier compatibility)

### P1 — Do Next (after tech stack + hosting are decided)
- [ ] Set up deployment pipeline
  - Configure hosting platform (Vercel/Netlify/Cloudflare Pages)
  - Set up CI/CD (auto-deploy on push)
  - Configure preview deployments for branches
  - Set up custom domain (when ready)
- [ ] Define and implement content schema
  - Case study schema (title, role, team, timeline, sections, images, metrics)
  - About page content structure
  - Project metadata (tags, category, featured flag)
  - Create sample content files as templates
- [ ] Configure SEO fundamentals
  - Dynamic meta tags per page (title, description, OG tags)
  - Sitemap generation
  - robots.txt
  - Structured data (JSON-LD for Person, CreativeWork)
  - Canonical URLs

### P2 — Later
- [ ] Set up analytics (Plausible, Umami, or Vercel Analytics — privacy-friendly)
- [ ] Configure image optimization pipeline
  - Responsive image generation
  - WebP/AVIF format conversion
  - Blur placeholder generation
- [ ] Set up font optimization (subsetting, preloading, font-display: swap)
- [ ] Configure caching headers and CDN settings
- [ ] Set up redirects (if migrating from another URL)
- [ ] Create content authoring guide for Xiao (how to add/edit case studies)
- [ ] Performance monitoring setup (Web Vitals tracking)

## Guidelines
- Always reference the top-level `CLAUDE.md` for project constraints
- Static-first: avoid any solution that requires a running server
- Free tier is a hard constraint — all infrastructure must work on free plans
- Content updates should be as simple as editing a markdown file and pushing
- SEO is critical for a portfolio — recruiters and hiring managers need to find this site
- Optimize for build speed — slow builds hurt iteration velocity
- Keep the content schema simple but extensible (easy to add fields later)
- Every page must have unique, descriptive meta tags — no generic titles
- Coordinate with Front End on how content data flows into components
- Document all infrastructure decisions and config in this folder
- Prefer convention over configuration — follow the chosen framework's defaults
