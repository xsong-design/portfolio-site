# Design System — Xiao Song

A portable design system for the portfolio site, resume, presentations, and any branded materials. All values are production-ready.

---

## Brand Identity

**Name treatment:** `xiao song.` — lowercase, trailing period, Playfair Display 700
**Title:** Product Designer
**Tone:** Editorial, precise, confident but not flashy

---

## Color Palette

### Primary

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Background** | `#F5F5F5` | 245, 245, 245 | Page background, slide backgrounds |
| **Surface** | `#FFFFFF` | 255, 255, 255 | Cards, content areas, resume sections |
| **Text** | `#1A1A1A` | 26, 26, 26 | Headlines, primary body copy |
| **Text Secondary** | `#555555` | 85, 85, 85 | Body paragraphs, descriptions |
| **Text Muted** | `#757575` | 117, 117, 117 | Metadata, labels, captions |

### Accent — Sage/Olive

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Accent** | `#6B7F6B` | 107, 127, 107 | Buttons, decorative shapes, emphasis |
| **Accent Hover** | `#4A5D4A` | 74, 93, 74 | Interactive hover states |
| **Accent Text** | `#4A5D4A` | 74, 93, 74 | Inline text links (passes AA at any size) |
| **Accent Muted** | `rgba(107,127,107,0.12)` | — | Text selection highlight, subtle backgrounds |

### Structure

| Name | Hex | Usage |
|------|-----|-------|
| **Border** | `#E0E0E0` | Dividers, card borders, section separators |
| **Surface Muted** | `#EBEBEB` | Subtle background differentiation |

### Contrast Ratios (WCAG AA verified)

| Combination | Ratio | Status |
|-------------|-------|--------|
| Text on Background | 13.3:1 | AAA |
| Text Secondary on Background | 7.3:1 | AA |
| Text Muted on Background | 4.3:1 | AA (16px+) |
| Accent Text on Background | 6.6:1 | AA |
| Accent Text on Surface | 7.2:1 | AA |

---

## Typography

### Font Stack

| Role | Font | Weight(s) | Fallback |
|------|------|-----------|----------|
| **Display** | Playfair Display | 400, 500, 600, 700 | Georgia, serif |
| **Body** | DM Sans | 400, 500, 600, 700 | system-ui, sans-serif |
| **Mono** | JetBrains Mono | 400, 500, 700 | monospace |

All fonts are available free via [Google Fonts](https://fonts.google.com).

### Type Scale

| Level | Font | Size | Weight | Spacing | Usage |
|-------|------|------|--------|---------|-------|
| **Display** | Playfair | 64–160px (fluid) | 700 | -0.03em | Hero name, page titles |
| **Display Small** | Playfair | 40–80px (fluid) | 600 | -0.02em | Section headers ("selected work.") |
| **Heading** | Playfair | 28–40px (fluid) | 600 | -0.02em | Case study section titles |
| **Subheading** | Playfair | 20–22px | 600 | -0.01em | Company names, card titles |
| **Body** | DM Sans | 17px | 400 | 0 | Paragraphs, descriptions |
| **Body Small** | DM Sans | 15px | 400 | 0 | Secondary descriptions |
| **Label** | JetBrains Mono | 11px | 500 | 0.12em | Nav items, metadata, section labels |
| **Caption** | JetBrains Mono | 10px | 500 | 0.1em | Image tags, footnotes |

### Type Rules

- **Headlines**: Always Playfair Display. Always negative letter-spacing.
- **Body**: Always DM Sans. Line-height 1.7–1.8 for readability.
- **Labels**: Always JetBrains Mono. Always uppercase. Always letter-spaced (0.1–0.12em).
- **Bold in body text**: Use weight 600, color `#1A1A1A` (vs. secondary `#555555` for regular body).
- **Pullquotes**: Playfair Display, italic, 20–24px.

---

## Spacing

### Base Unit: 4px

All spacing is a multiple of 4px.

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Icon gaps |
| sm | 8px | Tight element gaps |
| md | 16px | Standard element spacing |
| lg | 24px | Between related components |
| xl | 32px | Component gaps |
| 2xl | 48px | Section internal padding |
| 3xl | 64px | Section gaps (mobile) |
| 4xl | 96px | Section gaps (desktop) |

### Page Margins

| Viewport | Horizontal Padding |
|----------|-------------------|
| Mobile (<640px) | 20px |
| Tablet (640–1024px) | 40px |
| Desktop (>1024px) | 64px |

### Content Widths

| Width | Value | Usage |
|-------|-------|-------|
| Prose | 1060px | Body text, lists, pullquotes |
| Wide | 1200px | Breakout images, metrics grids |
| Hero | 1200px | Hero area |
| Full-bleed | 100vw | Hero images, accent bands |

---

## Components

### Navigation
- Fixed top, semi-transparent background with backdrop blur
- Logo: `xiao song.` in Playfair Display 700, 20px
- Links: JetBrains Mono, 11px, uppercase, letter-spacing 0.12em
- Hover: accent underline animates from left
- Active: persistent accent underline

### Section Headers
- Section index: JetBrains Mono, small, accent color at 60% opacity
- Section title: Playfair Display, 28–40px, weight 600

### Cards
- Sharp edges (no border radius)
- Background: `#FFFFFF` or `#1A1A1A` for image placeholders
- Hover: lift 4px via translateY, shadow increases
- Accent rectangle offset behind card (-24px bottom-right)

### Metric Callouts
- Value: JetBrains Mono, 32–48px, weight 700, accent color
- Label: DM Sans, 14px, secondary color
- Grid with 1px gap borders (border color as background, white cells)

### Pullquotes
- Left border: 3px accent
- Text: Playfair Display, italic, 20–24px
- Source: JetBrains Mono, 11px, uppercase, muted color

### Buttons
- Primary: accent background, white text, JetBrains Mono 11px uppercase
- Hover: darker accent (`#4A5D4A`)
- No border radius (sharp edges)

### Image Placeholders
- Background: linear-gradient(135deg, #1a1a1a, #2a2a2a)
- Label: JetBrains Mono, 11px, white at 30% opacity
- Tag (top-left): JetBrains Mono, 9px, white at 20% opacity, subtle bg pill

### Skills/Tags
- Background: `#FFFFFF`, border: 1px `#E0E0E0`
- Text: DM Sans, 13px, secondary color
- No border radius (sharp edges)

---

## Motion

### Spring Presets

| Name | Feel | Use |
|------|------|-----|
| **Snappy** | Quick, precise | Button press, nav underlines |
| **Smooth** | Fluid, slight overshoot | Card hover, scroll reveals |
| **Gentle** | Soft, relaxed | Cursor following, large entrances |
| **Editorial** | Slow, deliberate | Hero text reveal, parallax |

### Easing

| Name | Value | Use |
|------|-------|-----|
| Ease Out | `cubic-bezier(0.16, 1, 0.3, 1)` | General UI transitions |
| Editorial | `cubic-bezier(0.22, 1, 0.36, 1)` | Dramatic, deliberate motion |

### Durations

| Speed | Duration | Use |
|-------|----------|-----|
| Fast | 150ms | Color changes, opacity |
| Normal | 300ms | General transitions |
| Slow | 500ms | Layout shifts |
| Editorial | 800ms | Hero reveals, shape entrances |

### Reduced Motion
All animations respect `prefers-reduced-motion: reduce`. Elements appear instantly with no motion.

---

## For Presentations & Decks

### Slide Backgrounds
- Primary: `#F5F5F5` (neutral light grey)
- Accent: `#6B7F6B` (for title slides or emphasis)
- Dark: `#1A1A1A` (for image-heavy slides)

### Slide Typography
- Slide title: Playfair Display, 48–64pt, weight 700, color `#1A1A1A`
- Slide body: DM Sans, 18–24pt, weight 400, color `#555555`
- Labels/tags: JetBrains Mono, 12pt, uppercase, color `#757575`
- Key metrics: JetBrains Mono, 48–72pt, weight 700, color `#6B7F6B`

### Decorative Elements
- Accent rectangles (no radius): `#6B7F6B`
- White circles with subtle shadow for depth
- Use asymmetric placement — never center decorative elements

---

## For Resume PDF

### Page Setup
- Background: `#F5F5F5` or white
- Margins: 0.75" all sides
- Single column or two-column (narrow left for dates)

### Resume Typography
- Name: Playfair Display, 36pt, weight 700
- Section labels: JetBrains Mono, 9pt, uppercase, letter-spacing 0.1em, accent color
- Company: Playfair Display, 18pt, weight 600
- Role: DM Sans, 13pt, color `#555555`
- Bullets: DM Sans, 12pt, color `#555555`, line-height 1.6
- Skills tags: DM Sans, 11pt, with subtle border boxes

### Resume Accents
- Section label color: `#6B7F6B` at 60% opacity
- Bullet dots: 4px circles, `#6B7F6B` at 40% opacity
- Divider lines: 1px `#E0E0E0`
- Bold text in bullets: weight 600, color `#1A1A1A`

---

## Quick Reference

```
Background:     #F5F5F5
Surface:        #FFFFFF
Text:           #1A1A1A
Text Secondary: #555555
Text Muted:     #757575
Accent:         #6B7F6B (sage/olive)
Border:         #E0E0E0

Display font:   Playfair Display
Body font:      DM Sans
Mono font:      JetBrains Mono

Sharp edges. Asymmetric layouts. Editorial numbering.
Greyscale palette with muted sage accent. Never centered decorative elements.
```
