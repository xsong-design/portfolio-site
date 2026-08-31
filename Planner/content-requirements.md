# Page Content Requirements

> Planner deliverable — defines what each page needs in terms of content, structure, SEO, and responsive behavior. Flags content that Xiao must provide.

---

## Content Legend

| Icon | Meaning |
|------|---------|
| 🔴 | **Xiao must provide** — cannot be placeholder'd indefinitely |
| 🟡 | **Can launch with placeholder** — real content needed eventually |
| 🟢 | **Can be generated/built** — no content dependency |

---

## 1. Homepage (`/`)

### Purpose
First impression. Communicate who Xiao is, what they do, and showcase selected work — all within 5 seconds of landing. Set the interactive/experimental tone immediately.

### Content Sections (in scroll order)

| # | Section | Description | Content Source |
|---|---------|-------------|----------------|
| 1 | **Hero** | Name, title, one-line value proposition. Could be typographic with scroll-driven animation. | 🔴 Xiao: headline + subline |
| 2 | **Selected Work** | 2 featured case study cards with project title, brief description, hero image/thumbnail, and category tag | 🔴 Xiao: project titles, 1-line descriptions, hero images |
| 3 | **Craft Preview** | 1-2 live interactive mini-experiments pulled from the Craft Lab. Teaser to draw visitors to `/craft`. | 🟢 Built by Front End |
| 4 | **About Teaser** | 2-3 sentences about Xiao + a "Learn more →" link to `/about`. Optionally a portrait photo. | 🔴 Xiao: short bio (2-3 sentences) + optional photo |
| 5 | **Footer** | Social links, email, resume download, copyright | 🟡 Xiao: social URLs, email |

### Required Content from Xiao

| Content | Format | Notes |
|---------|--------|-------|
| Headline | Text (5-10 words) | e.g., "Product Designer crafting enterprise experiences" |
| Subline | Text (1-2 sentences) | What Xiao does and where |
| 2 project titles | Text | For the featured case study cards |
| 2 project descriptions | Text (1-2 sentences each) | Brief teaser for each project |
| 2 project hero images | Image (16:9 or similar, min 1200px wide) | Key visual for each case study |
| Short bio | Text (2-3 sentences) | For the About teaser |
| Portrait photo | Image (square, min 400px) | Optional |
| Social links | URLs | LinkedIn, Twitter/X, GitHub, Dribbble — whichever are active |
| Email | Text | Contact email address |

### Placeholder Strategy
- Hero: Use name + "Product Designer" as placeholder. Typographic treatment carries the section even without final copy.
- Selected Work: Use gray placeholder images with project titles. Cards can be fully styled before real images arrive.
- About Teaser: Use 2-3 sentences of Lorem Ipsum.
- Footer: Use `#` links for socials.

### SEO

| Field | Value |
|-------|-------|
| Title | `Xiao Song — Product Designer` |
| Meta description | `Product designer at Meta specializing in enterprise messaging, complex workflows, and interaction design. View selected work and experiments.` |
| OG Image | Custom — hero image or branded card (1200×630) |
| H1 | Xiao's name or headline |

### Responsive Behavior
- Hero text scales down but remains legible. Animation simplifies on mobile.
- Selected Work: 2-column grid on desktop → single column stack on mobile.
- Craft Preview: May hide or simplify interactive experiments on mobile (touch vs. hover).
- Nav: Collapses to hamburger below 768px.

---

## 2. Case Study Template (`/work/[slug]`)

### Purpose
Deep-dive into a specific project. Tell the story of the design problem, process, and outcome. Demonstrate design thinking, not just visual output.

### Content Sections (in scroll order)

| # | Section | Description | Content Source |
|---|---------|-------------|----------------|
| 1 | **Hero** | Project title, subtitle/tagline, hero image, role/team/timeline metadata | 🔴 Xiao |
| 2 | **Overview** | 3-5 sentence project summary. The "if they read nothing else" section. | 🔴 Xiao |
| 3 | **Context & Problem** | Business context, user problem, constraints. Why this project mattered. | 🔴 Xiao |
| 4 | **Process** | Design approach — research, ideation, iteration. Include sketches, wireframes, explorations. | 🔴 Xiao: narrative + images |
| 5 | **Solution** | The final design. Key screens, interactions, flows. This is the portfolio's visual centerpiece. | 🔴 Xiao: final design images/videos |
| 6 | **Outcome & Impact** | Results, metrics, learnings. Quantitative if possible. | 🔴 Xiao |
| 7 | **Reflection** | What worked, what didn't, what Xiao would do differently. Shows growth mindset. | 🟡 Xiao (optional but valuable) |
| 8 | **Next Project** | Link to the next case study. Keeps the visitor in the browsing loop. | 🟢 Auto-generated |

### Required Content from Xiao (per case study)

| Content | Format | Notes |
|---------|--------|-------|
| Project title | Text | |
| Subtitle/tagline | Text (1 sentence) | e.g., "Redesigning audience targeting for WhatsApp marketers" |
| Role | Text | e.g., "Product Designer" |
| Team | Text | e.g., "Design, PM, Eng — 8 people" |
| Timeline | Text | e.g., "Q3-Q4 2025 (6 months)" |
| Company | Text | e.g., "Meta" |
| Hero image | Image (16:9, min 1440px wide) | The defining visual of the project |
| Overview text | Text (3-5 sentences) | |
| Context & Problem | Text (2-4 paragraphs) | |
| Process narrative | Text (3-6 paragraphs) + 4-8 images | Sketches, wireframes, prototypes |
| Solution narrative | Text (2-4 paragraphs) + 3-6 images/videos | Final designs, key interactions |
| Outcome & Impact | Text (1-3 paragraphs) | Metrics, quotes, results |
| Reflection | Text (1-2 paragraphs) | Optional |

### Placeholder Strategy
- Build the full template with all sections using dummy content.
- Use structured placeholder images (gray boxes with section labels like "Hero Image", "Wireframe 1").
- Lorem Ipsum for all text sections.
- The template is fully buildable before any real content exists.

### SEO (per case study)

| Field | Value |
|-------|-------|
| Title | `[Project Title] — Xiao Song` |
| Meta description | First 160 characters of the Overview section |
| OG Image | The hero image for that case study |
| Structured data | Consider Article or CreativeWork schema |

### Responsive Behavior
- Hero image: Full-bleed on all viewports.
- Content width: Max ~720px for text readability, images can break out to wider widths.
- Process/Solution images: Multi-column layout on desktop → single column on mobile.
- Sticky metadata sidebar (role, team, timeline) on desktop → inline block on mobile.
- Image lightbox/zoom on tap for mobile users.

---

## 3. Work Index (`/work`)

### Purpose
Gallery of all case studies. Primary discovery point as the portfolio grows. At launch with 2 projects, it's a simple page; scales gracefully to 5-10+.

### Content Sections

| # | Section | Description | Content Source |
|---|---------|-------------|----------------|
| 1 | **Page Header** | "Work" or "Selected Projects" + optional filter/sort (future) | 🟢 Static |
| 2 | **Project Grid** | Cards for each case study: thumbnail, title, description, category | 🟢 Auto-generated from case study MDX frontmatter |
| 3 | **Footer** | Standard footer | 🟢 Shared component |

### Required Content from Xiao
None beyond what's already created for individual case studies — this page auto-populates.

### Placeholder Strategy
- Works with 0 case studies (empty state: "Projects coming soon").
- Looks good with 2 and scales to 10+.

### SEO

| Field | Value |
|-------|-------|
| Title | `Work — Xiao Song` |
| Meta description | `Selected product design case studies by Xiao Song, including enterprise SaaS, messaging platforms, and complex workflows.` |

### Responsive Behavior
- Desktop: 2-column grid with staggered card heights (masonry-style or uniform).
- Tablet: 2-column grid, smaller cards.
- Mobile: Single column stack.

---

## 4. Craft Lab (`/craft`)

### Purpose
Live interactive experiments that demonstrate Xiao's technical range and interaction design craft. This is the portfolio's key differentiator — "show, don't tell" taken literally. References Paco Coursey's `/craft` approach.

### Content Sections

| # | Section | Description | Content Source |
|---|---------|-------------|----------------|
| 1 | **Page Header** | "Craft Lab" or "Experiments" + brief intro explaining what this page is | 🟡 Xiao: 1-2 sentence intro |
| 2 | **Experiments Grid** | Interactive components, each self-contained. Could include: spring animation demos, custom UI components, generative art, interaction pattern explorations. | 🟢 Built by Front End |
| 3 | **Footer** | Standard footer | 🟢 Shared component |

### Required Content from Xiao

| Content | Format | Notes |
|---------|--------|-------|
| Page intro | Text (1-2 sentences) | What the Craft Lab is and why it exists |
| Experiment ideas | List | What interactive demos to build (Xiao and Front End decide together) |

### Placeholder Strategy
- Launch with 2-3 simple but polished experiments. Suggestions:
  1. **Spring physics playground** — sliders that control spring tension/friction on a bouncing element
  2. **Typography specimen** — the site's typeface showcased with interactive controls (size, weight, spacing)
  3. **Color system explorer** — interactive palette with contrast ratio checker
- These can be built entirely by the Front End agent and demonstrate real craft.

### SEO

| Field | Value |
|-------|-------|
| Title | `Craft Lab — Xiao Song` |
| Meta description | `Interactive design experiments by Xiao Song. Live demos exploring animation, typography, and interaction design.` |

### Responsive Behavior
- Experiments that rely on hover/cursor: Show a simplified version on mobile or replace with tap interactions.
- Grid: 2-column on desktop → single column on mobile.
- Each experiment should have a mobile-friendly fallback.

---

## 5. About (`/about`)

### Purpose
Give context about Xiao as a designer — background, philosophy, skills, and what makes their perspective unique. Build trust and connection.

### Content Sections

| # | Section | Description | Content Source |
|---|---------|-------------|----------------|
| 1 | **Introduction** | Headline + 2-3 paragraph personal/professional intro. Who is Xiao? | 🔴 Xiao |
| 2 | **Design Philosophy** | What Xiao believes about design. 2-4 principles or values. | 🔴 Xiao |
| 3 | **Experience** | Timeline or list of roles — Meta, previous companies/positions. Not a full resume, just highlights. | 🔴 Xiao |
| 4 | **Skills & Tools** | Categorized list: Design (Figma, prototyping), Technical (front-end, frameworks), Soft skills. | 🟡 Xiao: list of skills |
| 5 | **Personal** | Optional: hobbies, interests, a humanizing detail. 1-2 sentences. | 🟡 Xiao |
| 6 | **Photo** | A portrait or candid photo. | 🟡 Xiao |
| 7 | **CTA** | "Want to work together? Get in touch →" link to `/contact` | 🟢 Static |

### Required Content from Xiao

| Content | Format | Notes |
|---------|--------|-------|
| Bio / intro | Text (2-3 paragraphs) | Professional background, current role context |
| Design philosophy | Text (2-4 short principles/values) | e.g., "I believe in designing for complexity without making things complicated" |
| Experience timeline | Text (list of 3-5 roles) | Company, title, years, 1-line description |
| Skills list | Text (categorized) | Design tools, technical skills, methodologies |
| Portrait photo | Image (square or 3:4, min 600px) | |
| Personal note | Text (1-2 sentences) | Optional |

### Placeholder Strategy
- Build full layout with placeholder text and a gray avatar.
- Experience section can use dummy company names.
- Skills can use a reasonable default list that Xiao edits.

### SEO

| Field | Value |
|-------|-------|
| Title | `About — Xiao Song` |
| Meta description | `Product designer at Meta focused on enterprise messaging and complex workflows. Learn about Xiao's design philosophy, experience, and approach.` |

### Responsive Behavior
- Photo + text side-by-side on desktop → photo on top, text below on mobile.
- Experience timeline: Horizontal on desktop → vertical on mobile.
- Skills: Multi-column grid → 2-column or single column on mobile.

---

## 6. Contact (`/contact`)

### Purpose
Make it easy for visitors to reach out. Prioritize clarity and low friction over a complex contact form.

### Content Sections

| # | Section | Description | Content Source |
|---|---------|-------------|----------------|
| 1 | **Headline** | "Let's connect" or similar | 🟢 Static |
| 2 | **Contact Methods** | Email (primary), LinkedIn, Twitter/X, other socials | 🔴 Xiao: email + social URLs |
| 3 | **Availability Note** | Optional: "Currently open to…" or "Not looking for full-time, but open to collaborations" | 🟡 Xiao |
| 4 | **Footer** | Standard footer | 🟢 Shared component |

### Required Content from Xiao

| Content | Format | Notes |
|---------|--------|-------|
| Email address | Text | Primary contact method |
| Social links | URLs | LinkedIn, Twitter/X, GitHub, Dribbble — whichever are active |
| Availability note | Text (1-2 sentences) | Optional |

### Placeholder Strategy
- Page can be fully built with `placeholder@email.com` and `#` social links.
- Minimal content dependency.

### SEO

| Field | Value |
|-------|-------|
| Title | `Contact — Xiao Song` |
| Meta description | `Get in touch with Xiao Song — product designer at Meta. Open to collaborations, speaking opportunities, and interesting conversations.` |

### Responsive Behavior
- Simple page — minimal responsive complexity.
- Contact links: Large tap targets on mobile (min 48px).

---

## 7. Resume (`/resume`)

### Purpose
Provide a scannable, designed inline resume and a downloadable PDF. Another surface to demonstrate design craft.

### Content Sections

| # | Section | Description | Content Source |
|---|---------|-------------|----------------|
| 1 | **Header** | Name, title, contact info, PDF download button | 🔴 Xiao |
| 2 | **Experience** | Roles with company, title, dates, accomplishments | 🔴 Xiao |
| 3 | **Education** | Degree(s), institution(s), years | 🔴 Xiao |
| 4 | **Skills** | Categorized skills list | 🔴 Xiao |
| 5 | **Download CTA** | Prominent "Download PDF" button | 🟢 Static (links to PDF asset) |

### Required Content from Xiao

| Content | Format | Notes |
|---------|--------|-------|
| Full resume content | Text (structured) | Experience, education, skills — all the standard resume sections |
| Resume PDF | PDF file | The downloadable version |

### Placeholder Strategy
- Build the template with placeholder resume content.
- PDF download button can link to `#` until real PDF exists.

### SEO

| Field | Value |
|-------|-------|
| Title | `Resume — Xiao Song` |
| Meta description | `Xiao Song's resume — product designer at Meta with experience in enterprise SaaS, messaging platforms, and interaction design.` |

### Responsive Behavior
- Single-column layout that reads well on all viewports.
- PDF download button: Sticky on mobile for easy access.

---

## Content Dependency Summary

### Critical Path (blocks launch)

| Content | Pages affected | Priority |
|---------|---------------|----------|
| 2 case study narratives (full write-ups + images) | Homepage, Work Index, Case Study pages | **Highest** |
| Hero headline + subline | Homepage | High |
| Short bio (2-3 sentences) | Homepage About teaser | High |
| Social links + email | Homepage footer, Contact, Resume | High |
| Project hero images (2) | Homepage, Work Index, Case Study pages | High |

### Important but Not Blocking

| Content | Pages affected | Notes |
|---------|---------------|-------|
| About page bio + philosophy | About | Can launch with placeholder, but should have real content ASAP |
| Portrait photo | About, Homepage | Can use avatar/initial placeholder |
| Resume content + PDF | Resume | Can launch with placeholder |
| Craft Lab intro text | Craft | 1-2 sentences — low effort |
| Skills list | About, Resume | Can use reasonable defaults |

### No Content Dependency

| Item | Notes |
|------|-------|
| All page templates and layouts | Can be fully built with placeholders |
| All animations and interactions | No content dependency |
| Navigation and routing | No content dependency |
| Responsive behavior | No content dependency |
| SEO infrastructure | Can be configured with placeholder meta content |
