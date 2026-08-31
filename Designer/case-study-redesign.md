# Case Study Page Redesign Spec

> Designer deliverable — choreographed interaction spec for the case study template. Addresses three Xiao-reported issues: narrow layout, messy type hierarchy, sparse visuals. Follows the 10x Designer mandatory format: storyboard, spatial map, timing notation, fallback behavior.

---

## Diagnosis

| Problem | Root cause | Fix |
|---------|-----------|-----|
| **Too narrow** | Everything sits inside `max-width: 720px`. No element ever breaks wider. The page reads like a Medium article. | Introduce 4 width tiers that alternate rhythm. Prose stays at 720px for readability; everything else gets wider. |
| **Messy type hierarchy** | 8+ distinct font-size values competing: 4.5rem title, 3rem index, 2.25rem section title, 1.125rem H3, 1.125rem overview lead-in, 1.25rem pullquote, 1rem body, 0.8125rem metric label. Too many "medium" sizes in the 1–1.5rem range. | Collapse to 6 clear levels with strict separation. Kill the inline style overrides. Every element maps to exactly one token. |
| **Sparse visuals** | Only 4 image placeholders + 1 hero image across 6 sections. Long unbroken text runs of 3-4 paragraphs. | Add 12 visual moments total. Every section gets at least 2 visuals. Vary the type: diagrams, screenshots, comparisons, data viz, flow illustrations. |

---

## 1. Layout Width Strategy

### Four Width Tiers

```
┌─────────────────── viewport (100vw) ─────────────────────┐
│                                                           │
│  ┌──────────── wide (1200px max) ──────────────────────┐ │
│  │                                                      │ │
│  │  ┌──────── medium (960px max) ────────────────────┐ │ │
│  │  │                                                 │ │ │
│  │  │  ┌──── prose (680px max) ───────────────────┐  │ │ │
│  │  │  │                                          │  │ │ │
│  │  │  │  Body text, lists, pullquotes            │  │ │ │
│  │  │  │                                          │  │ │ │
│  │  │  └──────────────────────────────────────────┘  │ │ │
│  │  │                                                 │ │ │
│  │  │  Section headers, metrics grid, inline images   │ │ │
│  │  └─────────────────────────────────────────────────┘ │ │
│  │                                                      │ │
│  │  Asymmetric splits (7/5, 5/7), image+text pairs      │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                           │
│  Full-bleed hero image, dramatic breakout visuals         │
└───────────────────────────────────────────────────────────┘
```

### CSS Width Tokens (add to `:root`)

```css
:root {
  --cs-prose-width:   680px;   /* body text — narrower than before for tighter measure */
  --cs-medium-width:  960px;   /* section headers, metrics, inline images */
  --cs-wide-width:    1200px;  /* hero area, asymmetric image+text splits */
  /* Full-bleed: uses the breakout-from-container pattern */
}
```

### Width Assignment by Element

| Element | Width tier | CSS | Rationale |
|---------|-----------|-----|-----------|
| Body text `<p>` | Prose (680px) | `max-width: var(--cs-prose-width)` | Optimal line length for reading (~65-75 chars at 1rem) |
| Lists `<ul>` | Prose (680px) | Same | Consistent with body text |
| Pullquotes | Prose (680px) | Same, with left offset | Inset from the same column |
| H3 subsections | Prose (680px) | Same | Anchors to the prose column |
| Section headers (index + title) | Medium (960px) | `max-width: var(--cs-medium-width)` | Header gets more room, feels commanding |
| Metric callout grid | Medium (960px) | Same | Metrics spread into 4 columns at this width |
| Inline images (contained) | Medium (960px) | Same | Wider than prose creates visual breathing room |
| Case study hero area | Wide (1200px) | `max-width: var(--cs-wide-width)` | Title as architecture — fills the viewport more |
| Asymmetric image+text splits | Wide (1200px) | Same with `grid-template-columns: 7fr 5fr` | Two-column editorial layouts |
| Hero image | Full-bleed | `width: 100vw; left: 50%; transform: translateX(-50%)` | Maximum impact, breakout pattern |
| Breakout feature images | Full-bleed | Same breakout pattern | Punctuate the page at 2-3 key moments |

### How Width Shifts Create Rhythm

```
┌─ viewport ─────────────────────────────────────────────────────────────┐
│                                                                         │
│ HERO ──── wide (1200px) ────────────────────────────────────────────── │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │  ← back                                                       │    │
│  │                                                                │    │
│  │  Marketing Message                        ROLE  Product Des.  │    │
│  │  Liquidity                                TEAM  5 designers   │    │
│  │                                           TIME  2023–H1 2024  │    │
│  │  Tagline text sits here...                PLAT  Ads Manager   │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                         │
│ HERO IMAGE ──── full-bleed ─────────────────────────────────────────── │
│ ┌──────────────────────────────────────────────────────────────────────┐│
│ │                                                                      ││
│ │                    [hero visual placeholder]                         ││
│ │                                                                      ││
│ └──────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│ OVERVIEW ──── prose (680px) ─────────────────────────                   │
│        ┌──────────────────────────────────────────┐                    │
│        │  The short version: ...                  │                    │
│        └──────────────────────────────────────────┘                    │
│                                                                         │
│ SECTION HEADER ──── medium (960px) ─────────────────────               │
│     ┌────────────────────────────────────────────────────┐             │
│     │  01   Context & Challenge                          │             │
│     └────────────────────────────────────────────────────┘             │
│                                                                         │
│ BODY TEXT ──── prose (680px) ─────────────                              │
│        ┌──────────────────────────────────────────┐                    │
│        │  Paragraph text...                       │                    │
│        │  Paragraph text...                       │                    │
│        └──────────────────────────────────────────┘                    │
│                                                                         │
│ INLINE IMAGE ──── medium (960px) ──────────────────                    │
│     ┌────────────────────────────────────────────────────┐             │
│     │                                                    │             │
│     │              [diagram placeholder]                 │             │
│     │                                                    │             │
│     └────────────────────────────────────────────────────┘             │
│                                                                         │
│ BODY TEXT ──── prose (680px) ─────────────                              │
│        ┌──────────────────────────────────────────┐                    │
│        │  Paragraph text continues...             │                    │
│        └──────────────────────────────────────────┘                    │
│                                                                         │
│ IMAGE+TEXT SPLIT ──── wide (1200px) ────────────────────────────────── │
│  ┌───────────────── 7fr ──────────┬────── 5fr ─────────────────┐      │
│  │                                │                             │      │
│  │  [screenshot placeholder]      │  Caption text explaining    │      │
│  │                                │  what the screenshot shows  │      │
│  │                                │  in more detail.            │      │
│  └────────────────────────────────┴─────────────────────────────┘      │
│                                                                         │
│ BREAKOUT IMAGE ──── full-bleed ─────────────────────────────────────── │
│ ┌──────────────────────────────────────────────────────────────────────┐│
│ │                                                                      ││
│ │                 [full-width comparison visual]                       ││
│ │                                                                      ││
│ └──────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│ METRICS ──── medium (960px) ──────────────────────                      │
│     ┌────────────────────────────────────────────────────┐             │
│     │  +20%    │    +13%    │    -23%    │    -18%       │             │
│     │  ROAS    │  Purchases │  Cost/cart │  Cost/sale    │             │
│     └────────────────────────────────────────────────────┘             │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Container CSS Pattern

The content wrapper changes from a single `.cs-content` to a system of width-scoped containers. All containers use `margin: 0 auto` and `padding: 0 var(--page-padding)`.

```css
.cs-prose {
  max-width: var(--cs-prose-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
}

.cs-medium {
  max-width: var(--cs-medium-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
}

.cs-wide {
  max-width: var(--cs-wide-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
}

.cs-bleed {
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 0;  /* no horizontal padding — true full-bleed */
}
```

### Asymmetric Split Module

For image+text pairs that appear at wide width:

```css
.cs-split {
  max-width: var(--cs-wide-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
  display: grid;
  gap: var(--grid-gutter);
  align-items: center;
}

.cs-split--7-5 {
  grid-template-columns: 7fr 5fr;
}

.cs-split--5-7 {
  grid-template-columns: 5fr 7fr;
}

@media (max-width: 768px) {
  .cs-split--7-5,
  .cs-split--5-7 {
    grid-template-columns: 1fr;
  }
}
```

---

## 2. Typography Hierarchy

### The Problem: Current Hierarchy Has No Clear Tiers

Current state — too many sizes in the 1–1.5rem "middle" zone:

```
4.5rem ─── cs-title (display)
3rem ───── cs-section-index
2.25rem ── cs-section-title
1.25rem ── cs-pullquote           ← too close
1.125rem ─ cs-h3, overview lead   ← too close
1rem ────── cs-p body              ← too close
0.875rem ── cs-meta-value
0.8125rem ─ cs-metric-label        ← too close
0.6875rem ─ labels/meta
0.625rem ── image captions
```

The 1rem → 1.125rem → 1.25rem range creates visual mud. Three sizes in a 0.25rem range means no clear hierarchy — everything looks "about the same."

### Redesigned Hierarchy: 6 Clear Levels

Each level is at least 30% larger than the next, creating visible separation.

```
Level 1 ─── DISPLAY ─────── clamp(3rem, 6vw, 5rem) ─── Case study title
            ↓ ~2x jump
Level 2 ─── SECTION ─────── clamp(1.5rem, 2.5vw, 2rem) ── Section headers
            ↓ ~1.5x jump
Level 3 ─── SUBSECTION ──── 1.25rem ─────────────────── H3 headings
            ↓ ~1.2x jump
Level 4 ─── BODY ────────── 1.0625rem ──────────────── Prose paragraphs
            (pullquotes use display font at this size)
Level 5 ─── SMALL ────────── 0.875rem ──────────────── Captions, meta values
Level 6 ─── LABEL ────────── 0.6875rem ─────────────── Uppercase mono labels
```

### Token Spec Per Level

#### Level 1: Display — Case Study Title

```css
.cs-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: var(--color-text);
}
```

Usage: Case study title only. One per page. The hero's dominant structural element. At 5rem on desktop, it's large enough to anchor the layout but not so large it competes with the homepage display type (which is 10rem).

#### Level 2: Section — Section Headers

```css
.cs-section-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.015em;
  color: var(--color-text);
}
```

Usage: Section titles ("Context & Challenge", "Discovery & Strategy"). Paired with the index number. The 2rem desktop size vs 5rem title gives a clear subordinate relationship.

#### Level 2b: Section Index Number

```css
.cs-section-index {
  font-family: var(--font-mono);
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--color-accent);
  opacity: 0.15;
}
```

Usage: "01", "02", etc. Positioned as a large background-scale element that sits behind/beside the section title. At 4.5rem and 15% opacity, it's decorative architecture — felt but not read. It breaks the grid by overlapping the section title's left edge.

#### Level 3: Subsection — H3 Headings

```css
.cs-h3 {
  font-family: var(--font-sans);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--color-text);
  margin-top: 3rem;
  margin-bottom: 1rem;
}
```

Usage: Sub-section headings within a section ("The Business Problem", "What Made This Hard"). DM Sans bold provides clear separation from the serif section titles — you see a style change, not just a size change. The 3rem top margin creates generous breathing room between subsections.

#### Level 4: Body — Prose Text

```css
.cs-p {
  font-family: var(--font-sans);
  font-size: 1.0625rem;   /* 17px — slightly above browser default for comfortable reading */
  line-height: 1.75;
  letter-spacing: 0;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.cs-p strong {
  color: var(--color-text);
  font-weight: 600;
}
```

Usage: All body paragraphs. 17px at 1.75 line-height is the editorial sweet spot — comfortable for long-form reading with generous leading. `color-text-secondary` (#4A4A4A) keeps prose subordinate to headlines while maintaining WCAG AA contrast.

#### Level 4 (variant): Pullquote

```css
.cs-pullquote {
  border-left: 3px solid var(--color-accent);
  padding: 2rem 0 2rem 2.5rem;
  margin: 3rem 0;
}

.cs-pullquote p {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.375rem;
  line-height: 1.55;
  letter-spacing: -0.01em;
  color: var(--color-text);
  font-weight: 400;
}
```

Usage: User research quotes, key insights. Playfair Display italic at 1.375rem creates clear differentiation from DM Sans body text through *style contrast* rather than size alone. The shift from sans to serif italic immediately signals "this is a quote." Increased margin (3rem) gives pullquotes generous breathing room.

#### Level 4 (variant): Overview Lead Paragraph

```css
.cs-overview {
  font-family: var(--font-sans);
  font-size: 1.1875rem;   /* 19px */
  line-height: 1.65;
  color: var(--color-text);
  font-weight: 400;
}
```

Usage: The "short version" summary paragraph at the top. Only one per page. Slightly larger than body text, and `color-text` (not secondary) to signal it's a primary reading element.

#### Level 4 (variant): Lists

```css
.cs-list li {
  font-family: var(--font-sans);
  font-size: 1.0625rem;  /* matches body */
  line-height: 1.75;
  color: var(--color-text-secondary);
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.75rem;
}

.cs-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 6px;
  height: 6px;
  background: var(--color-accent);
  opacity: 0.4;
}
```

#### Level 5: Small — Captions and Meta Values

```css
.cs-caption {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-text-muted);
}

.cs-meta-value {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
}
```

Usage: Image captions below visuals, metadata values in the hero area. One size for all "small but readable" text.

#### Level 6: Label — Mono Uppercase

```css
.cs-label {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}
```

Usage: "ROLE", "TEAM", "TIMELINE" labels, image placeholder badges, section category markers. The smallest text on the page. Mono + uppercase + wide tracking makes it legible at small size and visually distinct from all other text.

### Metric Callout Typography

```css
.cs-metric-value {
  font-family: var(--font-mono);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--color-accent);
}

.cs-metric-label {
  font-family: var(--font-sans);
  font-size: 0.875rem;     /* Level 5 */
  line-height: 1.5;
  color: var(--color-text-secondary);
  margin-top: 0.5rem;
}

.cs-metric-note {
  font-family: var(--font-mono);
  font-size: 0.6875rem;    /* Level 6 */
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  text-transform: uppercase;
  margin-top: 0.25rem;
}
```

Metric values get their own scale (3.5rem) because they're graphic elements, not reading text. They function like index numbers — decorative data that draws the eye.

---

## 3. Visual Placeholder Strategy

### Current State: 5 Visuals Across 6 Sections

```
Hero image ─────────────── 1 visual
01 Context ─────────────── 1 visual  (org tension diagram)
02 Discovery ───────────── 1 visual  (research synthesis)
03 Ideation ────────────── 1 visual  (before/after budget)
04 Solution ────────────── 1 visual  (campaigns table)
05 Impact ──────────────── 1 visual  (results summary)
06 Reflections ─────────── 0 visuals
                           ─────────
                           5 total
```

Long text runs without visual breaks in every section. The worst offender is Section 04 (Solution & Craft) — 4 subsections and ~5 paragraphs before one image.

### Redesigned: 15 Visual Moments

Each visual has: a **type** (diagram, screenshot, comparison, etc.), a **width tier**, a **descriptive label** for the placeholder, and a **position** in the content flow.

#### Hero Image — Full-bleed

```
Position: After hero metadata, before overview
Width:    Full-bleed (100vw)
Aspect:   16:7
Type:     Hero screenshot / product shot
Label:    "Hero — the integrated campaign experience showing budget
           optimization across ads and WhatsApp marketing messages"
```

#### Overview — Process Diagram

```
Position: Below the overview lead paragraph
Width:    Medium (960px)
Aspect:   16:5 (wide and short — a horizontal flow)
Type:     Process/timeline diagram
Label:    "Project timeline — from 5-designer sprint through alpha
           launch, showing key milestones and my focus areas
           (onboarding + budget handling)"
```

#### 01 Context — Org Tension Diagram

```
Position: After "What Made This Hard" paragraphs
Width:    Wide (1200px), asymmetric split: image 7fr / annotation 5fr
Aspect:   4:3 (image side)
Type:     Diagram with annotation sidebar
Label:    "Three-org tension framework — Business Messaging, Ads Experience,
           and WhatsApp with competing priorities. Onboarding + budget
           handling sit at the center intersection."
Side:     Annotation text: "My surfaces sat at the intersection of three
           organizations with competing priorities around revenue,
           workflow complexity, and consumer protection."
```

#### 01 Context — Before State

```
Position: At the end of section 01 (replaces current image)
Width:    Medium (960px)
Aspect:   16:9
Type:     Screenshot / product state
Label:    "Before state — the Beta experience with separate workflows
           for ads and marketing messages. Two campaigns, two budgets,
           no cross-channel optimization."
```

#### 02 Discovery — Research Data Visualization

```
Position: After the 3-bullet research findings list
Width:    Medium (960px)
Aspect:   3:2
Type:     Data visualization / research summary
Label:    "Usability testing results — 10/10 participants raised concerns
           about optimized delivery. 9/10 expected all subscribers to
           receive messages. Mental model mapped to email, not ads."
```

#### 02 Discovery — Pullquote + Mental Model Diagram (paired)

```
Position: After the pullquote (which already exists)
Width:    Wide (1200px), asymmetric split: diagram 5fr / text 7fr (reversed)
Aspect:   1:1 (diagram side)
Type:     Mental model diagram
Label:    "Mental model conflict — how email marketing, Ads Manager,
           and WhatsApp subscriber expectations diverge around budget
           allocation and delivery guarantees."
Side:     The existing "How I Built Alignment" text flows beside it.
```

#### 02 Discovery — Research Presentation

```
Position: End of section 02 (replaces current image)
Width:    Full-bleed (breakout moment #2)
Aspect:   16:8
Type:     Presentation slide / research deck screenshot
Label:    "Research synthesis presentation — the conceptual gap finding
           presented to Monetization Design Leads, framing the issue
           as requiring both in-product and out-of-product mitigation."
```

#### 03 Ideation — Design Exploration Grid

```
Position: After "Design Explorations" text
Width:    Wide (1200px)
Aspect:   4:3
Type:     Multi-option comparison grid
Label:    "Exploration grid — 16 options explored across the full
           experience. Highlighted: the 4 key budget handling variations
           ranging from full manual control to fully automated."
```

#### 03 Ideation — Before/After Comparison

```
Position: After "The Trade-off I Navigated" text (replaces current image)
Width:    Wide (1200px), side-by-side: 6fr 6fr (equal split for comparison)
Aspect:   4:3 each side
Type:     Before/after comparison
Label L:  "Before — manual budget split control. Advertisers set
           percentage allocation between ads and messages."
Label R:  "After — transparency without control. Estimated delivery
           results show how budget will be allocated without
           giving an override lever."
```

CSS for the comparison:

```css
.cs-comparison {
  max-width: var(--cs-wide-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .cs-comparison {
    grid-template-columns: 1fr;
  }
}
```

#### 04 Solution — Onboarding Flow

```
Position: After "Onboarding" paragraph
Width:    Full-bleed (breakout moment #3 — the biggest solution visual)
Aspect:   16:7 (wide panoramic flow)
Type:     Multi-step flow illustration
Label:    "Onboarding flow — entry point discovery → account-level
           activation → reply handling setup → subscriber upload →
           verification (high-volume senders). Multiple entry points
           from within Ads Manager."
```

#### 04 Solution — Budget Card Detail

```
Position: After "Budget Handling" paragraph
Width:    Wide (1200px), asymmetric split: image 7fr / annotation 5fr
Aspect:   3:4 (portrait orientation — mobile-like card view)
Type:     UI detail screenshot
Label:    "Estimated daily results card — extended with 'Messages
           Delivered' estimate alongside existing reach and impression
           projections. The key transparency surface."
Side:     Annotation callouts:
          "① Messages Delivered estimate — new line item
           ② Existing reach projection — unchanged
           ③ Budget allocation preview — shows expected split"
```

#### 04 Solution — Reporting Table

```
Position: After "Post-Creation Reporting" paragraph
Width:    Medium (960px)
Aspect:   16:9 (landscape — table view)
Type:     Screenshot of reporting UI
Label:    "Integrated campaigns table — marketing messages surfaced
           as a line item alongside ad placements in the breakdowns
           experience. 'Delivered Messages' as a new metric."
```

#### 04 Solution — Systems Diagram

```
Position: After "Systems Thinking" paragraph (end of section 04)
Width:    Medium (960px)
Aspect:   16:7 (wide diagram)
Type:     Systems/pattern diagram
Label:    "Reusable pattern — account-level opt-in → readiness gates →
           creation integration. Designed as a framework for future
           non-ad capabilities in Ads Manager."
```

#### 05 Impact — Results Summary

```
Position: After the additional proof points list (replaces current image)
Width:    Wide (1200px), asymmetric split: image 5fr / text 7fr
Aspect:   4:3
Type:     Data summary / results slide
Label:    "Alpha results across three businesses — Bombay Shaving
           Company (A/B tested), XYXX, and OZiva. The BSC data became
           the anchor case study for sales enablement."
Side:     The "These results validated..." paragraph wraps beside it.
```

#### 06 Reflections — Project Journey

```
Position: At the end of section 06 (currently has no visual)
Width:    Medium (960px)
Aspect:   16:5 (wide, short — timeline format)
Type:     Timeline / journey diagram
Label:    "Project journey — key decisions and inflection points
           from design sprint → research insights → cross-org
           alignment → alpha launch → results validation."
```

### Visual Placeholder HTML Pattern

```html
<!-- Standard contained image -->
<figure class="cs-figure cs-medium">
  <div class="cs-image">
    <span class="cs-image-text">[descriptive label]</span>
    <span class="cs-image-badge">DIAGRAM</span>
  </div>
  <figcaption class="cs-caption">Caption text here</figcaption>
</figure>

<!-- Full-bleed breakout image -->
<figure class="cs-figure cs-bleed">
  <div class="cs-image">
    <span class="cs-image-text">[descriptive label]</span>
    <span class="cs-image-badge">SCREENSHOT</span>
  </div>
</figure>

<!-- Asymmetric image + text split -->
<div class="cs-split cs-split--7-5">
  <figure class="cs-figure">
    <div class="cs-image">
      <span class="cs-image-text">[descriptive label]</span>
      <span class="cs-image-badge">DIAGRAM</span>
    </div>
  </figure>
  <div class="cs-split-text">
    <p class="cs-caption">[annotation text]</p>
  </div>
</div>
```

### Image Placeholder Styling (updated)

```css
.cs-figure {
  margin: 2.5rem 0;
}

.cs-image {
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}

.cs-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.02) 50%, transparent 52%),
    linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.02) 50%, transparent 52%);
  background-size: 40px 40px;
}

.cs-image-text {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  line-height: 1.6;
  max-width: 480px;
  padding: 3rem 2rem;
  position: relative;
  z-index: 1;
}

.cs-image-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-family: var(--font-mono);
  font-size: 0.5625rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  z-index: 1;
}

.cs-caption {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-text-muted);
  margin-top: 0.75rem;
}
```

### Aspect Ratio Classes

```css
.cs-image--hero     { aspect-ratio: 16 / 7; }
.cs-image--wide     { aspect-ratio: 16 / 8; }
.cs-image--standard { aspect-ratio: 16 / 9; }
.cs-image--diagram  { aspect-ratio: 16 / 5; }
.cs-image--square   { aspect-ratio: 1 / 1; }
.cs-image--portrait { aspect-ratio: 3 / 4; }
.cs-image--4-3      { aspect-ratio: 4 / 3; }
.cs-image--3-2      { aspect-ratio: 3 / 2; }
```

---

## 4. Full Page Storyboard

### Scene 1: Hero Load Sequence

```
Phase 1 (0ms):    Page background renders at var(--color-bg). Nav fades in
                   at opacity 0→1 over 300ms, ease-out.

Phase 2 (200ms):  "← Back to work" link slides in from left.
                   translateX(-16px) → 0, opacity 0→1, spring: smooth.

Phase 3 (350ms):  Case study title reveals word-by-word from bottom.
                   Each word: translateY(32px) → 0, opacity 0→1.
                   Stagger: 80ms per word, spring: editorial.
                   "Marketing" (350ms) → "Message" (430ms) → "Liquidity" (510ms).

Phase 4 (600ms):  Tagline paragraph fades in from below.
                   translateY(20px) → 0, opacity 0→1, spring: smooth.

Phase 5 (750ms):  Metadata items stagger in from the right column.
                   Each item: translateX(16px) → 0, opacity 0→1.
                   Stagger: 60ms per item, spring: smooth.

Phase 6 (1000ms): Accent line (2px, accent color) draws from left to right
                   below the metadata block. scaleX(0) → scaleX(1), 
                   transform-origin: left, duration: 600ms, ease: editorial.
```

### Scene 2: Hero Image Entry

```
Scroll [0.0–0.1]: Hero area scrolls up normally.

Scroll [0.05–0.2]: Hero image enters viewport from below.
                    Full-bleed image container clips in via
                    clip-path: inset(100% 0 0 0) → inset(0 0 0 0).
                    Duration: mapped to scroll progress, not time.
                    Result: image "wipes" in from bottom as user scrolls.

Scroll [0.1–0.5]: Hero image has subtle parallax —
                    moves at 0.85x scroll rate (slower than content).
                    Creates depth: content scrolls past the image slightly.
```

### Scene 3: Overview Section

```
Scroll entry:     Overview paragraph fades in from below when 20% visible.
                   translateY(24px) → 0, opacity 0→1, spring: smooth.

Scroll [entry + 200ms]: Process timeline diagram (new visual) fades in.
                          translateY(24px) → 0, opacity 0→1, spring: smooth.
                          Stagger: 200ms after the paragraph.
```

### Scene 4: Section Headers (repeats for each section)

```
Scroll entry:     Index number ("01") scales in from 80% scale.
                   scale(0.8) → scale(1), opacity 0→1, spring: editorial.
                   The number is positioned absolutely and oversized — it
                   "blooms" into place behind the section title.

Scroll [entry + 100ms]: Section title slides in from left.
                          translateX(-24px) → 0, opacity 0→1, spring: smooth.

Scroll [entry + 200ms]: Accent rule (1px line) draws from left below the
                          section title. scaleX(0) → scaleX(1), 400ms, ease-out.

Scroll [entry + 300ms]: First paragraph begins fade-in-up sequence.
```

### Scene 5: Inline Images (medium-width contained)

```
Scroll entry:     Image container fades in from below.
                   translateY(32px) → 0, opacity 0→1, spring: smooth.

Scroll [entry + 100ms]: Image badge ("DIAGRAM") fades in.
                          opacity 0→1, 200ms, ease-out.

Scroll [entry + 200ms]: Caption text fades in below the image.
                          opacity 0→1, translateY(8px) → 0, 300ms.
```

### Scene 6: Asymmetric Splits (image + text at wide width)

```
Scroll entry:     Image side slides in from the outside edge.
                   For 7/5 split: image slides from left,
                   translateX(-40px) → 0, opacity 0→1, spring: editorial.
                   For 5/7 split: image slides from right,
                   translateX(40px) → 0, spring: editorial.

Scroll [entry + 150ms]: Text/annotation side fades in.
                          opacity 0→1, translateY(16px) → 0, spring: smooth.
```

### Scene 7: Full-Bleed Breakout Images

```
Scroll entry:     The breakout image creates a "breath" moment.
                   Image container expands from center:
                   width: 80% → 100vw, opacity 0→1.
                   Duration: mapped to scroll progress over 0.15 range.

                   Simultaneously, a thin accent line (2px) appears at the
                   top edge of the image, drawing from left to right.
                   scaleX(0) → scaleX(1), duration: 800ms, ease: editorial.
```

### Scene 8: Metric Callouts

```
Scroll entry:     Metric cards stagger in from bottom.
                   Each card: translateY(24px) → 0, opacity 0→1.
                   Stagger: 100ms per card (4 cards = 0ms, 100ms, 200ms, 300ms).
                   Spring: smooth.

Scroll [entry + 50ms per card]: Metric VALUE number counts up from 0.
                                  "+20%" counts from "+0%" to "+20%" over 800ms.
                                  Uses a counter animation (JS, not CSS).
                                  Easing: ease-out-expo for the counting speed.
                                  Numbers use tabular-nums for stable width.
```

### Scene 9: Pullquotes

```
Scroll entry:     Accent border-left draws from top to bottom.
                   scaleY(0) → scaleY(1), transform-origin: top.
                   Duration: 500ms, ease: editorial.

Scroll [entry + 200ms]: Quote text fades in.
                          opacity 0→1, translateX(8px) → 0, spring: smooth.
                          The slight rightward slide mirrors the leftward
                          border animation — they move toward each other.
```

### Scene 10: Section Transitions

```
Between each section:

Scroll [section exit]:    Current section content stays in place (no exit animation).
                           A 1px horizontal divider draws from left to right
                           across the medium width (960px).
                           scaleX(0) → scaleX(1), transform-origin: left.
                           Duration: 600ms, ease: editorial.

Scroll [next section entry]: Begins the Scene 4 sequence for the next section header.
```

### Scene 11: Case Study Navigation (bottom)

```
Scroll entry:     "Next project" label fades in.
                   opacity 0→1, 300ms, ease-out.

Scroll [entry + 100ms]: Project title slides in from right.
                          translateX(24px) → 0, opacity 0→1, spring: smooth.

Hover:             The entire nav link area: background shifts to
                    var(--color-surface-muted), translateX(4px) rightward.
                    Arrow character animates: translateX(0) → translateX(8px).
                    Spring: snappy.
```

---

## 5. Spatial Map

### Hero Area — Type as Architecture

```
┌─ viewport ────────────────────────────────────────────────────────────┐
│                                                                        │
│  ┌─ cs-wide (1200px max) ──────────────────────────────────────────┐  │
│  │                                                                  │  │
│  │  ← BACK TO WORK                              [mono, label size] │  │
│  │                                                                  │  │
│  │  ┌─ grid: 8fr ──────────────────────┐ ┌─ grid: 4fr ──────────┐ │  │
│  │  │                                   │ │                       │ │  │
│  │  │  Marketing Message               │ │  ROLE                 │ │  │
│  │  │  Liquidity                        │ │  Product Designer     │ │  │
│  │  │  ═══════════════════ [accent,2px] │ │                       │ │  │
│  │  │                                   │ │  TEAM                 │ │  │
│  │  │  Tagline text sits here in       │ │  5 designers + PM     │ │  │
│  │  │  italic, slightly smaller...      │ │                       │ │  │
│  │  │                                   │ │  TIMELINE             │ │  │
│  │  │                                   │ │  2023 – H1 2024      │ │  │
│  │  │                                   │ │                       │ │  │
│  │  │                                   │ │  PLATFORM             │ │  │
│  │  │                                   │ │  Ads Manager (Web)    │ │  │
│  │  │                                   │ │                       │ │  │
│  │  └───────────────────────────────────┘ └───────────────────────┘ │  │
│  │                                                                  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                        │
├─ FULL BLEED ───────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────────────────────────────────┐│
│ │                                                                      ││
│ │                      [HERO IMAGE — 16:7]                            ││
│ │                                                                      ││
│ └──────────────────────────────────────────────────────────────────────┘│
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

Grid break: Title area uses 8/4 asymmetric split.
            Metadata column right-aligns to the title's baseline.
            align-self: start on metadata to top-align with title.
```

Hero CSS:

```css
.cs-hero {
  max-width: var(--cs-wide-width);
  margin: 0 auto;
  padding: 8rem var(--page-padding) clamp(3rem, 6vw, 5rem);
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-template-rows: auto auto;
  gap: var(--grid-gutter);
}

.cs-hero-content {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.cs-hero-meta {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: start;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-left: 1px solid var(--color-border);
  padding-left: var(--grid-gutter);
}

@media (max-width: 768px) {
  .cs-hero {
    grid-template-columns: 1fr;
    padding-top: 6rem;
  }
  .cs-hero-meta {
    grid-column: 1;
    grid-row: auto;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem 2rem;
    border-left: none;
    padding-left: 0;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
  }
}
```

### Section Header — Index Number as Architecture

```
┌─ cs-medium (960px max) ────────────────────────────────────────────┐
│                                                                     │
│     01                                                              │
│     ┌───────────────────────────────────────────────────┐          │
│     │  Context & Challenge                               │          │
│     └───────────────────────────────────────────────────┘          │
│     ════════════════════════════════════════ [accent rule, 2px]    │
│                                                                     │
│  ↑ "01" is positioned absolutely, top: -0.6em, left: 0.           │
│    It sits BEHIND the title text (z-index: -1).                    │
│    At 4.5rem and opacity 0.15, it's architectural — not readable. │
│    The title overlaps the bottom half of the number.                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Z-stacking:
  "01" ── z: -1 (behind), opacity 0.15, 4.5rem
  Title ─ z:  0 (normal flow), 2rem
```

Section header CSS:

```css
.cs-section-header {
  max-width: var(--cs-medium-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
  position: relative;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  padding-top: clamp(4rem, 8vw, 6rem);
}

.cs-section-index {
  position: absolute;
  top: clamp(1.5rem, 4vw, 2.5rem);
  left: var(--page-padding);
  font-family: var(--font-mono);
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--color-accent);
  opacity: 0.15;
  z-index: -1;
  user-select: none;
}

.cs-section-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.015em;
  color: var(--color-text);
  position: relative;
}

.cs-section-rule {
  width: 100%;
  height: 2px;
  background: var(--color-accent);
  margin-top: 1rem;
  opacity: 0.2;
  transform-origin: left;
}
```

### Asymmetric Split — Image + Text

```
┌─ cs-wide (1200px max) ───────────────────────────────────────────────┐
│                                                                       │
│  ┌───── 7fr ───────────────────────────┐ ┌───── 5fr ──────────────┐ │
│  │                                      │ │                        │ │
│  │  ┌──────────────────────────────┐   │ │  ┏━━━━━━━━━━━━━━━━━┓  │ │
│  │  │                              │   │ │  ┃  Annotation      ┃  │ │
│  │  │     [IMAGE PLACEHOLDER]      │   │ │  ┃  text that       ┃  │ │
│  │  │     4:3 aspect ratio         │   │ │  ┃  explains the    ┃  │ │
│  │  │                              │   │ │  ┃  image in more   ┃  │ │
│  │  │                              │   │ │  ┃  detail.         ┃  │ │
│  │  └──────────────────────────────┘   │ │  ┃                  ┃  │ │
│  │                                      │ │  ┃  ① Callout one  ┃  │ │
│  │                                      │ │  ┃  ② Callout two  ┃  │ │
│  │                                      │ │  ┗━━━━━━━━━━━━━━━━━┛  │ │
│  └──────────────────────────────────────┘ └────────────────────────┘ │
│                                                                       │
│  Grid break: Image bleeds 16px past its column edge via              │
│  negative margin-left. Creates a subtle asymmetry.                    │
│                                                                       │
└───────────────────────────────────────────────────────────────────────┘
```

### Before/After Comparison

```
┌─ cs-wide (1200px max) ───────────────────────────────────────────────┐
│                                                                       │
│  BEFORE                               AFTER                          │
│  ┌─────────────────────────────┐     ┌──────────────────────────────┐│
│  │                             │     │                              ││
│  │   [manual budget split      │     │   [transparency without     ││
│  │    control UI]              │     │    control — estimated      ││
│  │                             │     │    delivery results]        ││
│  │                             │     │                              ││
│  └─────────────────────────────┘     └──────────────────────────────┘│
│  Manual allocation                    System-optimized with         │
│  between ads & messages               visibility into the split     │
│                                                                       │
│  ↑ "BEFORE" / "AFTER" labels in mono, label size, text-muted.       │
│    Equal column split (1fr 1fr) for direct comparison.               │
│    1.5rem gap between columns. No accent — neutral presentation.     │
│                                                                       │
└───────────────────────────────────────────────────────────────────────┘
```

### Metrics Grid at Medium Width

```
┌─ cs-medium (960px max) ──────────────────────────────────────────────┐
│                                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌───────────┐│
│  │              │  │              │  │              │  │           ││
│  │  +20%        │  │  +13%        │  │  -23%        │  │  -18%     ││
│  │              │  │              │  │              │  │           ││
│  │  ROAS vs.    │  │  More        │  │  Cost per    │  │  Lower    ││
│  │  BAU (ads    │  │  purchases   │  │  add to cart │  │  cost of  ││
│  │  only)       │  │              │  │              │  │  sales    ││
│  │              │  │              │  │  95%+        │  │  84%      ││
│  │              │  │              │  │  CONFIDENCE  │  │  CONFID.  ││
│  └──────────────┘  └──────────────┘  └──────────────┘  └───────────┘│
│                                                                       │
│  Grid: repeat(4, 1fr). Cards have no border-radius (sharp edges).    │
│  Accent top-border (2px) on each card for color touch.               │
│  On tablet: 2x2 grid. On mobile: 1 column stack.                    │
│                                                                       │
└───────────────────────────────────────────────────────────────────────┘
```

Metric card CSS (updated):

```css
.cs-metrics {
  max-width: var(--cs-medium-width);
  margin: 0 auto;
  padding: 0 var(--page-padding);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.cs-metric {
  padding: 1.75rem 1.5rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-top: 2px solid var(--color-accent);
}

@media (max-width: 768px) {
  .cs-metrics {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cs-metrics {
    grid-template-columns: 1fr;
  }
}
```

---

## 6. Scroll Choreography — Full Page Sequence

This maps every section's entry animation in order, with scroll trigger points.

| Scroll position | Section | Entry choreography | Elements |
|---|---|---|---|
| **0%** | Hero | Load sequence (Scene 1) — not scroll-triggered | Title, tagline, metadata |
| **~5%** | Hero image | Clip-path wipe from bottom (Scene 2) | Full-bleed hero image |
| **~10%** | Overview | Fade-in-up, prose width | Lead paragraph + process timeline visual |
| **~15%** | Section 01 header | Index number scale-in + title slide-left (Scene 4) | "01" + "Context & Challenge" |
| **~17%** | 01 body | Fade-in-up, staggered paragraphs | H3s, paragraphs, lists |
| **~22%** | 01 visual: org tension | Slide-in-left for image, fade for annotation (Scene 6) | 7/5 asymmetric split |
| **~25%** | 01 visual: before state | Fade-in-up, medium width | Beta screenshot |
| **~28%** | Section 02 header | Index + title choreography (Scene 4) | "02" + "Discovery & Strategy" |
| **~30%** | 02 body | Staggered fade-in-up | Paragraphs, research list |
| **~34%** | 02 visual: data viz | Fade-in-up, medium width (Scene 5) | Research results visualization |
| **~37%** | 02 pullquote | Border-draw + quote fade (Scene 9) | User quote |
| **~40%** | 02 visual: mental model | Slide-in-right for diagram, fade for text (Scene 6, reversed) | 5/7 asymmetric split |
| **~43%** | 02 visual: research pres. | Breakout expansion (Scene 7) — full-bleed | Presentation screenshot |
| **~46%** | Section 03 header | Index + title choreography (Scene 4) | "03" + "Ideation & Decisions" |
| **~48%** | 03 body | Staggered fade-in-up | Design exploration text |
| **~51%** | 03 visual: exploration grid | Fade-in-up, wide width | 16-option exploration grid |
| **~55%** | 03 visual: before/after | Both sides slide in from their edges simultaneously | Comparison pair |
| **~58%** | Section 04 header | Index + title choreography (Scene 4) | "04" + "Solution & Craft" |
| **~60%** | 04 body: onboarding | Fade-in-up paragraphs | Onboarding text |
| **~63%** | 04 visual: onboarding flow | Breakout expansion (Scene 7) — full-bleed | Multi-step flow panoramic |
| **~66%** | 04 body: budget | Fade-in-up | Budget handling text |
| **~68%** | 04 visual: budget card | Slide-in-left for card, fade for annotations (Scene 6) | 7/5 split, portrait image |
| **~71%** | 04 body: reporting | Fade-in-up | Reporting text |
| **~73%** | 04 visual: reporting table | Fade-in-up, medium width (Scene 5) | Table screenshot |
| **~75%** | 04 visual: systems diagram | Fade-in-up, medium width | Reusable pattern diagram |
| **~78%** | Section 05 header | Index + title choreography (Scene 4) | "05" + "Impact & Outcomes" |
| **~80%** | 05 metrics | Stagger-in with count-up (Scene 8) | 4 metric cards |
| **~83%** | 05 visual: results | Slide-in-right for image, fade for text (Scene 6, reversed) | 5/7 split, results summary |
| **~86%** | Section 06 header | Index + title choreography (Scene 4) | "06" + "Reflections" |
| **~88%** | 06 body | Staggered fade-in-up | Reflections paragraphs |
| **~92%** | 06 visual: journey | Fade-in-up, medium width | Timeline diagram |
| **~95%** | Case study nav | Label fade + title slide (Scene 11) | Next project link |
| **~98%** | Footer | Simple fade-in, 400ms | Footer content |

### Scroll Progress Indicator

The thin accent line at the top of the page (already implemented as `.scroll-progress`) stays. Redesign it slightly:

```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  z-index: 100;
  background: var(--color-accent);
  width: 0%;
  opacity: 0.6;  /* slightly transparent so it doesn't overpower the nav */
}
```

### Viewport-Anchored Section Label (Desktop Only)

Add a fixed label on the left edge that shows the current section name:

```
┌─ viewport ──────────────────────────────────────────────┐
│                                                          │
│  C                                                       │
│  O   (scrolling content)                                │
│  N                                                       │
│  T                                                       │
│  E                                                       │
│  X                                                       │
│  T   ← rotated -90°, fixed position, left edge          │
│                                                          │
│       Changes text as sections enter/exit viewport.     │
│       Crossfade animation: opacity 0→1, 200ms.          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

```css
.cs-viewport-label {
  position: fixed;
  left: 1.5rem;
  top: 50%;
  transform: rotate(-90deg) translateX(-50%);
  transform-origin: left center;
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  opacity: 0.4;
  z-index: 30;
  pointer-events: none;
  transition: opacity 0.2s ease-out;
}

@media (max-width: 1279px) {
  .cs-viewport-label {
    display: none;
  }
}
```

JavaScript: Use IntersectionObserver on each `.cs-section` to update the label text when sections enter the viewport center.

---

## 7. Timing Notation

### Spring Presets (reference from design-tokens.md)

| Preset | Stiffness | Damping | Mass | Used for |
|--------|-----------|---------|------|----------|
| `snappy` | 300 | 30 | 0.5 | Hover states, nav link underlines, button press |
| `smooth` | 200 | 25 | 1 | Scroll reveals, card entrances, paragraph fade-in-up |
| `gentle` | 120 | 20 | 1 | Large image entrances, split layouts |
| `editorial` | 100 | 18 | 1.2 | Hero title reveal, index numbers, accent line draws, breakout images |

### Element-by-Element Timing Table

| Element | Trigger | Spring / Duration | Delay | Direction |
|---------|---------|-------------------|-------|-----------|
| Nav | Page load | `smooth` | 0ms | opacity 0→1 |
| Back link | Page load | `smooth` | 200ms | translateX(-16px→0), opacity |
| Title word 1 | Page load | `editorial` | 350ms | translateY(32px→0), opacity |
| Title word 2 | Page load | `editorial` | 430ms | translateY(32px→0), opacity |
| Title word 3 | Page load | `editorial` | 510ms | translateY(32px→0), opacity |
| Tagline | Page load | `smooth` | 600ms | translateY(20px→0), opacity |
| Meta item (each) | Page load | `smooth` | 750ms + i×60ms | translateX(16px→0), opacity |
| Accent rule | Page load | 600ms ease-editorial | 1000ms | scaleX(0→1), origin: left |
| Hero image | Scroll (5%) | Scroll-linked | — | clip-path: inset(100% 0 0 0 → 0) |
| Hero image parallax | Scroll | `useTransform` | — | linear map, rate 0.85x |
| Section index | Scroll entry | `editorial` | 0ms | scale(0.8→1), opacity 0→0.15 |
| Section title | Scroll entry | `smooth` | 100ms | translateX(-24px→0), opacity |
| Section accent rule | Scroll entry | 400ms ease-out | 200ms | scaleX(0→1), origin: left |
| Body paragraph | Scroll entry | `smooth` | 300ms + i×80ms | translateY(24px→0), opacity |
| H3 heading | Scroll entry | `smooth` | 0ms (resets per subsection) | translateY(16px→0), opacity |
| List items | Scroll entry | `smooth` | i×40ms stagger | translateY(16px→0), opacity |
| Pullquote border | Scroll entry | 500ms ease-editorial | 0ms | scaleY(0→1), origin: top |
| Pullquote text | Scroll entry | `smooth` | 200ms | translateX(8px→0), opacity |
| Inline image | Scroll entry | `smooth` | 0ms | translateY(32px→0), opacity |
| Image badge | Scroll entry | 200ms ease-out | 100ms after image | opacity 0→1 |
| Image caption | Scroll entry | 300ms ease-out | 200ms after image | translateY(8px→0), opacity |
| Split: image side | Scroll entry | `editorial` | 0ms | translateX(±40px→0), opacity |
| Split: text side | Scroll entry | `smooth` | 150ms | translateY(16px→0), opacity |
| Breakout image | Scroll-linked | Scroll range 0.15 | — | width 80%→100vw, opacity |
| Metric card | Scroll entry | `smooth` | i×100ms stagger | translateY(24px→0), opacity |
| Metric value count-up | Scroll entry | 800ms ease-out-expo | 50ms after card | Counter: 0→target |
| CS nav label | Scroll entry | 300ms ease-out | 0ms | opacity 0→1 |
| CS nav title | Scroll entry | `smooth` | 100ms | translateX(24px→0), opacity |
| Viewport label | Section change | 200ms ease-out | — | opacity crossfade |

---

## 8. Fallback Behavior

### `prefers-reduced-motion`

| Element | Normal behavior | Reduced motion replacement |
|---------|----------------|---------------------------|
| Hero title word stagger | translateY + opacity + spring | Instant display (opacity: 1, transform: none) |
| Scroll-linked hero image clip | clip-path animation | Static — image fully visible |
| Hero image parallax | 0.85x scroll rate | No parallax — normal scroll |
| Section index scale-in | scale(0.8→1) + opacity | Instant display at full scale |
| All fade-in-up elements | translateY + opacity | Instant display |
| Pullquote border draw | scaleY animation | Static — border visible immediately |
| Breakout image expansion | Width animation | Full width immediately |
| Metric count-up | Number counting | Final value shown immediately |
| Accent rule draw | scaleX animation | Static — rule visible immediately |
| Viewport label crossfade | Opacity transition | Instant text swap |
| Cursor dot/ring | Spring-based following | Hidden (system cursor) |

CSS:

```css
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }

  .cs-section-rule,
  .cs-pullquote {
    transform: none !important;
  }

  .scroll-progress {
    display: none;
  }

  .cs-viewport-label {
    display: none;
  }
}
```

### Mobile Simplification (< 768px)

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero layout | 8/4 grid split | Single column, stacked |
| Metadata | Right column with border-left | Horizontal wrap below title, border-top |
| Section index numbers | 4.5rem, absolute positioned behind title | 2.5rem, inline before title (no overlap) |
| Asymmetric splits | 7/5 or 5/7 grid | Single column, image above text |
| Before/after comparison | Side-by-side 1fr 1fr | Stacked vertically |
| Metrics grid | 4 columns | 1 column |
| Full-bleed breakouts | 100vw | 100vw (still works on mobile — no padding) |
| Viewport label | Fixed left edge | Hidden |
| Pullquote | border-left, 2.5rem padding-left | border-left, 1.5rem padding-left |
| Scroll reveal distance | translateY(32px) | translateY(20px) — shorter travel on small screens |
| Hero image parallax | 0.85x rate | Disabled — normal scroll |
| Accent rule animations | Draw from left | Instant display |

### Performance Budget

| Effect | GPU cost | Mitigation |
|--------|---------|------------|
| Hero clip-path animation | Medium | Only 1 element, scroll-linked (not continuous) |
| Parallax on hero image | Low | Single transform, will-change: transform |
| Index number scale animation | Low | opacity + transform only |
| Metric count-up | Low (JS) | requestAnimationFrame, throttled |
| Viewport label text swap | Negligible | opacity transition only |
| Full-bleed breakout expansion | Medium | Scroll-linked, not continuous. Limit to 2 per page. |
| Staggered reveals | Low per element | IntersectionObserver unobserves after trigger |

Total GPU-heavy effects: 3 (clip-path, parallax, breakout expansion). All are scroll-linked and non-continuous. No `filter: blur()`, no continuous animations, no clip-path on multiple simultaneous elements.

---

## 9. Implementation Checklist for Front End Agent

### CSS Changes

1. **Add new width tokens** to `:root`: `--cs-prose-width`, `--cs-medium-width`, `--cs-wide-width`
2. **Replace `.cs-content`** single wrapper with `.cs-prose`, `.cs-medium`, `.cs-wide`, `.cs-bleed` width classes
3. **Update `.cs-hero`** to use 8/4 grid split with metadata in right column
4. **Update `.cs-section-header`** to use relative positioning with absolute index number
5. **Add `.cs-split`** grid module with 7/5 and 5/7 variants
6. **Add `.cs-comparison`** equal-column module
7. **Update `.cs-metrics`** to use `repeat(4, 1fr)` at medium width with accent top-border
8. **Update all typography** to match the 6-level hierarchy spec
9. **Add `.cs-figure`**, `.cs-image-badge`, `.cs-caption` classes
10. **Add aspect ratio utility classes**
11. **Add `.cs-viewport-label`** fixed label (desktop only)
12. **Add `.cs-section-rule`** accent line below section headers

### HTML Changes

1. **Restructure hero** into grid with separate content and meta columns
2. **Wrap body text** sections in `.cs-prose` containers
3. **Wrap section headers** in `.cs-medium` containers
4. **Add 10 new image placeholders** (see Section 3 for exact positions and labels)
5. **Convert inline image+text pairs** to `.cs-split` grid layouts
6. **Add `.cs-image-badge`** labels to all image placeholders
7. **Add `<figcaption>` elements** to image placeholders
8. **Add the viewport section label** element

### JavaScript Changes

1. **Update IntersectionObserver** to handle new reveal elements
2. **Add section-tracking observer** for the viewport label text swaps
3. **Add metric count-up animation** triggered by IntersectionObserver
4. *(Optional)* Add scroll-linked hero image clip-path via `scroll` event + `requestAnimationFrame`

### Sections That Alternate Width (the rhythm)

```
HERO ────────────── wide (1200px)
HERO IMAGE ──────── full-bleed
OVERVIEW ────────── prose (680px)
  + timeline ────── medium (960px)
SEC 01 HEADER ───── medium (960px)
  body text ─────── prose (680px)
  org tension ───── wide (1200px) — split
  before state ──── medium (960px)
SEC 02 HEADER ───── medium (960px)
  body text ─────── prose (680px)
  data viz ──────── medium (960px)
  pullquote ─────── prose (680px)
  mental model ──── wide (1200px) — split (reversed)
  research pres ─── full-bleed
SEC 03 HEADER ───── medium (960px)
  body text ─────── prose (680px)
  exploration ───── wide (1200px)
  before/after ──── wide (1200px) — comparison
SEC 04 HEADER ───── medium (960px)
  body text ─────── prose (680px)
  onboarding ────── full-bleed
  body text ─────── prose (680px)
  budget card ───── wide (1200px) — split
  body text ─────── prose (680px)
  reporting ─────── medium (960px)
  systems ───────── medium (960px)
SEC 05 HEADER ───── medium (960px)
  body text ─────── prose (680px)
  metrics ───────── medium (960px)
  results ───────── wide (1200px) — split (reversed)
SEC 06 HEADER ───── medium (960px)
  body text ─────── prose (680px)
  journey ───────── medium (960px)
CS NAV ──────────── prose (680px)
FOOTER ──────────── wide (1200px)
```

The width alternation creates a visual "breathing" rhythm: narrow prose → medium visual → narrow prose → wide split → narrow prose. The page inhales (narrows for reading) and exhales (widens for visuals). Three full-bleed moments punctuate the page as dramatic pauses.
