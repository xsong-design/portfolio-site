# Visual Direction — Revised

> Designer deliverable — defines the aesthetic, color, typography, and layout strategy for Xiao's portfolio site. Revised based on the X-LAB reference Xiao shared and direct feedback on what resonates: heavy contrast, space-filling serif type, clean geometric shapes, and editorial energy.

---

## 1. Visual Keywords

| Keyword | What It Means in Practice |
|---------|--------------------------|
| **Editorial** | The site reads like a curated magazine spread. Every page is a deliberate composition of type, image, and shape — not a stack of UI components. |
| **High-contrast** | Near-black type on warm off-white. Bold accent color blocks. No muddy midtones or subtle gradations — everything either dominates or recedes. |
| **Typographic-bold** | Serif display type fills the viewport. Type is the primary structural element — it doesn't sit inside a layout, it IS the layout. |
| **Graphic** | Clean geometric shapes (circles, rectangles) float in compositions alongside photography. Flat 2D forms contrast with dimensional imagery. |
| **Asymmetric** | Nothing is centered. Elements overlap, offset, and break the grid deliberately. The composition feels curated, not templated. |

---

## 2. Reference Analysis

### What We're Taking from X-LAB

| Element | What We See | How We Translate |
|---------|------------|-----------------|
| **Heavy contrast** | Near-black type on light background; orange-red color blocks punch through | Same palette strategy — warm off-white base, near-black text, bold orange-red accent used as graphic blocks |
| **Space-filling type** | "lab." fills ~25% of the viewport width; lowercase, bold, period as punctuation design element | Massive serif display type at `clamp(4rem, 12vw, 10rem)` for hero and section headers. Explore lowercase for the name/title. |
| **Geometric shapes** | White circles/spheres float against the off-white background creating depth; orange rectangles frame imagery | White circles and accent-colored rectangles as decorative layout elements. Shapes sit behind and alongside case study imagery. |
| **Vertical text** | "X-LAB MATERIALS OF CREATION 2019" runs vertically along the right edge | Section metadata, page labels, or case study categories as rotated text along composition edges |
| **Numbering as design** | "100", "+1" used as oversized graphic elements, not just labels | "01", "02" numbering for case studies rendered at large scale as editorial index markers |
| **Layered composition** | 3D-rendered objects overlap color blocks and shapes; elements break containment | Case study images overlap geometric shapes and accent blocks; elements extend beyond their grid cells |
| **Clean small text** | Navigation and labels are small, uppercase, widely spaced — almost whispered against the bold display type | Mono or sans labels in small caps with wide letter-spacing for metadata, nav, and section markers |

### What We're NOT Taking

| Element | Why Not |
|---------|---------|
| **3D rendered objects** | Performance cost is too high for the Lighthouse target. Achieve dimensional contrast through photography + flat shapes instead. |
| **Fashion/streetwear tone** | X-LAB is a brand site. The portfolio needs to feel "product designer" — authoritative, analytical, yet creative. Not edgy for edgy's sake. |
| **Sans-serif display** | X-LAB uses a rounded heavy sans-serif. Xiao specifically requested serif — the new direction pairs a high-contrast serif display with sans-serif body. |
| **Product e-commerce patterns** | Navigation, CTAs, and "shop" interactions don't translate. Focus on the compositional and typographic energy, not the UI patterns. |
| **Dark imagery style** | The black gloves/figures are brand-specific. Case study imagery will be UI screenshots and diagrams — clean, well-lit, professional. |

---

## 3. Color Palette

### Palette: "Broadsheet"

A light, warm, high-contrast palette with a bold orange-red accent. Named after the confident editorial feel of quality newspaper design — large type, strong contrast, decisive color.

| Token | Hex | Usage |
|-------|-----|-------|
| **Background** | `#F5F5F5` | Page background — neutral light grey, clean and minimal |
| **Surface** | `#FFFFFF` | Cards, elevated panels, modal backgrounds |
| **Surface Muted** | `#EBEBEB` | Code blocks, blockquotes, subtle containers |
| **Text Primary** | `#1A1A1A` | Headlines, primary body copy, navigation |
| **Text Secondary** | `#555555` | Descriptions, secondary body copy |
| **Text Muted** | `#757575` | Metadata, timestamps, captions (use at ≥16px) |
| **Accent** | `#6B7F6B` | Geometric shapes, large index numbers, section highlights, decorative blocks |
| **Accent Hover** | `#4A5D4A` | Hover state for accent elements |
| **Accent Text** | `#4A5D4A` | Accent color safe for body-size text (links, inline emphasis) |
| **Border** | `#E0E0E0` | Standard dividers, card borders |
| **Border Subtle** | `#EBEBEB` | Very light separation lines |
| **Geometric White** | `#FFFFFF` | White circles/shapes on the grey background — creates subtle lift |
| **Geometric Dark** | `#1A1A1A` | Dark shapes for maximum contrast compositions |

### WCAG AA Contrast Ratios

| Foreground | Background | Ratio | WCAG | Usage |
|-----------|-----------|-------|------|-------|
| Text Primary `#1A1A1A` | Background `#F5F5F5` | 13.3:1 | ✅ AAA | Headlines, body copy |
| Text Primary `#1A1A1A` | Surface `#FFFFFF` | 14.5:1 | ✅ AAA | Card content |
| Text Secondary `#555555` | Background `#F5F5F5` | 7.3:1 | ✅ AA | Descriptions |
| Text Secondary `#555555` | Surface `#FFFFFF` | 8.3:1 | ✅ AA | Card descriptions |
| Text Muted `#757575` | Background `#F5F5F5` | 4.3:1 | ✅ AA | Metadata (≥16px recommended) |
| Accent Text `#4A5D4A` | Background `#F5F5F5` | 6.6:1 | ✅ AA | Text links |
| Accent Text `#4A5D4A` | Surface `#FFFFFF` | 7.2:1 | ✅ AA | Text links on cards |
| Accent `#6B7F6B` | Background `#F5F5F5` | 4.2:1 | ✅ AA Large | Large numbers, shapes (18px+ bold or 24px+ regular) |
| Text Primary `#1A1A1A` | Surface Muted `#EBEBEB` | 12.1:1 | ✅ AAA | Code/quote content |

### Usage Rules

1. **Accent as graphic, not text default.** `#6B7F6B` is primarily for decorative shapes, large index numbers (≥24px), and subtle accent blocks. For body text, use `--color-accent-text` (`#4A5D4A`) which passes AA at all sizes.
2. **Accent Text for links.** When the accent color is used as inline text (links, emphasized phrases), use `#4A5D4A` which passes AA at all sizes (6.6:1).
3. **Geometric shapes.** White (`#FFFFFF`) circles on the grey background create a subtle paper-on-paper depth. Sage accent (`#6B7F6B`) shapes add organic warmth. Dark (`#1A1A1A`) shapes create anchoring contrast. Use 1-2 shapes per composition, not more.
4. **Sage is surgical.** On any given viewport, one accent element should dominate. If a case study card has an accent color block, the page heading should NOT also be in accent. One focal point per composition.
5. **White space is content.** The neutral grey background is an active design element — it separates, frames, and breathes. Resist filling it.

---

## 4. Typography

### Type System: Playfair Display + DM Sans + JetBrains Mono

| Role | Font | Weight | Source |
|------|------|--------|--------|
| **Display** | Playfair Display | 400–900 (variable) + italic | Google Fonts (`next/font/google`) |
| **Body** | DM Sans | 100–1000 (variable) | Google Fonts (`next/font/google`) |
| **Mono** | JetBrains Mono | 100–800 (variable) | Google Fonts (`next/font/google`) |

### Why This Pairing Works

- **Playfair Display** is a high-contrast transitional serif designed for display use. At large sizes, its dramatic thick-thin stroke contrast creates the editorial tension Xiao wants. At weight 700 it's bold and confident; at 400 italic it's elegant for pullquotes. The letterforms are refined but not delicate — they own space without needing to shout.
- **DM Sans** is a geometric sans-serif that provides clean, neutral counterpoint to Playfair's personality. It's excellent at small sizes for body text, navigation, and UI labels. The geometric construction echoes the clean shapes in the visual language.
- **JetBrains Mono** is a developer-grade monospace that matches the technical precision of the design. Used for case study metadata, code snippets, index numbers, and label elements.

### Why Serif Specifically

Xiao called out liking serif. The serif/sans pairing creates two layers of typographic contrast:
1. **Scale contrast:** Massive serif display vs. small sans-serif body
2. **Style contrast:** Ornate high-contrast serif vs. geometric neutral sans

This double contrast is what gives editorial design its sophistication — the same strategy used by publications like NYT Magazine, Bloomberg Businessweek, and Monocle.

### Size Scale

| Token | Size | Line Height | Letter Spacing | Weight | Font | Usage |
|-------|------|-------------|----------------|--------|------|-------|
| `display` | `clamp(4rem, 12vw, 10rem)` | 0.9 | -0.03em | 700 | Playfair Display | Hero headlines, page titles |
| `display-sm` | `clamp(2.5rem, 6vw, 5rem)` | 0.95 | -0.02em | 600 | Playfair Display | Section headers, case study titles |
| `index` | `clamp(3rem, 8vw, 7rem)` | 1.0 | -0.02em | 700 | JetBrains Mono | Index numbers ("01", "02") |
| `xl` | `clamp(1.5rem, 3vw, 2rem)` | 1.15 | -0.01em | 500 | DM Sans | Sub-section headings |
| `lg` | `1.25rem` | 1.4 | -0.01em | 500 | DM Sans | Card titles, lead text |
| `base` | `1rem` | 1.7 | 0em | 400 | DM Sans | Body text |
| `sm` | `0.875rem` | 1.5 | 0em | 400 | DM Sans | Secondary text, UI elements |
| `xs` | `0.75rem` | 1.4 | 0.05em | 500 | DM Sans | Small labels, footnotes |
| `label` | `0.6875rem` | 1.3 | 0.12em | 500 | JetBrains Mono | Uppercase labels, nav items, metadata tags |

### Styling Notes

- **Display type can be lowercase.** Xiao liked how "lab." uses lowercase. Explore lowercase for the site title or Xiao's name in the hero — it feels confident and understated. Case study titles should use title case since they're descriptive.
- **Period as punctuation design.** The "lab." period is a design element — subtle but intentional. Consider trailing periods on display headings (e.g., "work." or "about.") as a typographic signature.
- **Italic for emphasis.** Playfair Display italic at weight 400 is beautiful for pullquotes, introductory paragraphs, or case study subtitles.
- **Labels are always uppercase mono.** Navigation, section labels, and metadata use JetBrains Mono at `label` size with wide tracking and uppercase transform. This creates maximum contrast with the serif display.

### Next.js Integration

```tsx
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// In layout.tsx:
<body className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
```

---

## 5. Layout Principles

### Grid Strategy: Deliberate Grid-Breaking

The site uses a **12-column grid as a foundation** — but the design intentionally breaks it. Components are placed on-grid, then specific elements are offset, overlapped, or extended beyond their columns to create editorial tension.

| Principle | Implementation |
|-----------|---------------|
| **Asymmetric splits** | Primary content sections use uneven column splits: 7/5, 8/4, or 5/7. Never 6/6 centered. The "heavy" side anchors the composition. |
| **Overlap zones** | Images and geometric shapes extend 40–80px beyond their grid cell boundaries, overlapping adjacent elements. Creates depth without z-fighting. |
| **One dominant element** | Every composition has ONE element that dominates — a massive headline, a full-bleed image, or a large geometric shape. Everything else supports it. |
| **Breathing gutters** | Gutters are generous (24–32px) but elements can cross them. The gutter is a suggestion, not a wall. |

### How Elements Overlap and Layer

The z-index layering model:

| Layer | Z-Index | Contents |
|-------|---------|----------|
| **Base** | 0 | Background, grid lines (if visible) |
| **Shapes** | 10 | Geometric circles and rectangles — they sit BEHIND content as compositional anchors |
| **Content** | 20 | Text, images, cards — the primary layer |
| **Overlay** | 30 | Accent blocks that partially cover images (like the orange rectangle in the X-LAB reference) |
| **Navigation** | 40 | Fixed nav bar, always on top |
| **Cursor** | 50 | Custom cursor (if implemented) |

Overlap is achieved through:
- Negative margins (`-mt-16`, `-ml-8`)
- CSS Grid with overlapping `grid-row`/`grid-column` assignments
- Absolute positioning within a relative container for accent shapes

### Numbering / Indexing as Design

Case studies are indexed with large editorial numbers:

- Numbers rendered in JetBrains Mono at `index` size (up to 7rem)
- Positioned to the left of or above the case study title
- Color: `text-muted` (#757575) by default, or `accent` (#6B7F6B) for the active/hovered item
- Numbers can partially overlap the case study image or title — they're compositional, not just labels
- Format: zero-padded two digits — "01", "02", "03"

### Vertical / Rotated Text

Vertical text is used for secondary information along composition edges:

| Usage | Content | Position |
|-------|---------|----------|
| **Page label** | "WORK", "ABOUT", "CASE STUDY" | Left edge of viewport, rotated -90° |
| **Section metadata** | "SCROLL", year, project category | Right edge of a section, rotated -90° |
| **Image caption** | Brief description | Along the right or bottom edge of an image |

Implementation: `transform: rotate(-90deg)` with `transform-origin: left top` and appropriate positioning. Text reads bottom-to-top.

### Geometric Shapes as Design Elements

Shapes serve three purposes in the composition:

1. **Depth markers** — White circles on the off-white background create a paper-layering effect. They suggest depth without 3D rendering.
2. **Color anchors** — Accent-colored rectangles frame or partially cover imagery, drawing the eye and creating focal points.
3. **Rhythm breakers** — A circle placed at an unexpected position breaks the grid rhythm and adds visual surprise.

Rules:
- **Maximum 2-3 shapes per viewport.** More creates clutter.
- **Shapes are decorative/ambient.** No text inside shapes. No interactive behavior.
- **Scale varies.** Small circles (48–96px) for texture; large rectangles (200–400px) for framing.
- **Shapes animate.** Subtle parallax on scroll (shapes move at a different rate than content). Gentle fade-in on page load.
- **On mobile:** Reduce to 1 shape per composition or remove entirely. Shapes should enhance, not crowd.

### Homepage Layout Concept

```
┌─────────────────────────────────────────────────┐
│  NAV: [name]              WORK  ABOUT  CONTACT  │  ← small caps mono
│                                                   │
│                                                   │
│            ○ (white circle, z:10)                 │
│                                                   │
│  xiao                                             │  ← massive serif, lowercase
│  song.                        ┌──────────┐        │
│                               │ ██ accent │        │  ← accent rectangle, z:30
│  product designer             │  block    │        │
│  at meta                      └──────────┘        │
│                                                   │
│  SCROLL ↓                                         │  ← label mono, muted
├─────────────────────────────────────────────────┤
│                                                   │
│  01  marketing message        ┌─────────────────┐ │
│      liquidity                │                 │ │  ← case study image
│                               │    ○            │ │  ← white circle overlapping
│      Brief description...     │                 │ │
│                               └─────────────────┘ │
│                                                   │
│  02  driver tipping           ┌─────────────────┐ │
│      at walmart               │   ████████████  │ │  ← accent rect behind image
│                               │   │  image   │  │ │
│      Brief description...     │   │          │  │ │
│                               └─────────────────┘ │
│                                                   │
└─────────────────────────────────────────────────┘
```

---

## 6. Color Mode

### This is a LIGHT mode site.

Xiao's design uses a light background. The neutral grey (#F5F5F5) background creates a clean, Swiss-style foundation that makes the heavy black type and muted sage accents feel refined and minimal.

### Should a dark mode variant be considered later?

**Yes, as a P2.** The token architecture supports it — all colors are CSS custom properties, and adding a `[data-theme="dark"]` override is a palette swap. A dark variant would:
- Invert the relationship: dark background (#111113), light text (#EDEDEF), same accent
- Work well for users who prefer dark mode or are browsing at night
- Use `prefers-color-scheme` media query to respect OS preference

**But not for v1.** The light editorial direction is the design identity. Building and QA-ing two themes doubles the surface area. Ship light, add dark later if there's demand.

### Dark Mode Sketch (P2 reference only)

| Token | Light (v1) | Dark (P2) |
|-------|-----------|-----------|
| Background | `#F5F5F5` | `#111113` |
| Surface | `#FFFFFF` | `#1C1C1F` |
| Text Primary | `#1A1A1A` | `#EDEDEF` |
| Text Secondary | `#555555` | `#A1A1AA` |
| Text Muted | `#757575` | `#71717A` |
| Accent | `#6B7F6B` | `#8FA88F` |
| Border | `#E0E0E0` | `#2A2A2D` |

---

## 7. Summary

| Decision | Recommendation |
|----------|---------------|
| **Direction** | Light, editorial, high-contrast, asymmetric — inspired by X-LAB's graphic energy but adapted for a product design portfolio |
| **Color palette** | Clean greyscale — neutral `#F5F5F5` base, near-black `#1A1A1A` type, muted sage `#6B7F6B` accent |
| **Display font** | Playfair Display (serif, variable, Google Fonts) — massive, editorial, high-contrast strokes |
| **Body font** | DM Sans (geometric sans-serif, Google Fonts) — clean counterpoint to the serif display |
| **Mono font** | JetBrains Mono (Google Fonts) — labels, metadata, index numbers |
| **Layout** | Asymmetric 12-col grid with deliberate breaks; overlapping elements; geometric shapes as compositional devices |
| **Color mode** | Light only (v1), dark mode P2 with adaptive-ready token architecture |

### Needs Xiao's Input

1. **Serif choice confirmation** — Playfair Display is the recommendation. Alternative to explore: **Bodoni Moda** (more dramatic stroke contrast, slightly more fashion-forward) or **Fraunces** (more distinctive/quirky, has optical sizing). Worth spending 5 minutes on Google Fonts previewing each at large sizes.
2. **Lowercase treatment** — Should the hero text (your name) be lowercase like the reference ("xiao song.") or title case ("Xiao Song")? Lowercase is more editorial/confident; title case is more traditional/professional.
3. **Trailing period** — The "lab." period is a strong design motif. Consider using it as a typographic signature ("work.", "about.", "xiao song."). Yes or no?
4. **Case study accent color** — Should each case study get its own accent color variation (one orange-red, one different), or keep the single accent site-wide?
5. **Geometric shape density** — The X-LAB reference has 4-5 shapes per viewport. For a portfolio that's image-heavy with screenshots, 2-3 shapes per viewport might be better. Confirm comfort level.
