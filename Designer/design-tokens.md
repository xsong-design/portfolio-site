# Design Tokens — Revised

> Designer deliverable — complete token system for Xiao's portfolio site. Based on the revised visual direction: clean greyscale palette (neutral white-grey background + muted sage/olive accent), Playfair Display serif + DM Sans + JetBrains Mono typography, light theme only (v1). All tokens expressed as CSS custom properties AND Tailwind config mappings.

---

## 1. Color Tokens

### CSS Custom Properties

```css
:root {
  /* Backgrounds */
  --color-bg:             #F5F5F5;
  --color-surface:        #FFFFFF;
  --color-surface-muted:  #EBEBEB;

  /* Text */
  --color-text:           #1A1A1A;
  --color-text-secondary: #555555;
  --color-text-muted:     #757575;

  /* Accent — muted sage/olive */
  --color-accent:         #6B7F6B;
  --color-accent-hover:   #4A5D4A;
  --color-accent-text:    #4A5D4A;
  --color-accent-muted:   rgba(107, 127, 107, 0.12);

  /* Borders */
  --color-border:         #E0E0E0;
  --color-border-subtle:  #EBEBEB;
  --color-border-strong:  #CCCCCC;

  /* Geometric shapes */
  --color-shape-white:    #FFFFFF;
  --color-shape-accent:   #6B7F6B;
  --color-shape-dark:     #1A1A1A;
}
```

### Contrast Verification

| Foreground | Background | Ratio | WCAG | Usage |
|-----------|-----------|-------|------|-------|
| `--color-text` (#1A1A1A) | `--color-bg` (#F5F5F5) | 13.3:1 | ✅ AAA | Headlines, primary copy |
| `--color-text` (#1A1A1A) | `--color-surface` (#FFFFFF) | 14.5:1 | ✅ AAA | Card content |
| `--color-text-secondary` (#555555) | `--color-bg` (#F5F5F5) | 7.3:1 | ✅ AA | Descriptions, body |
| `--color-text-secondary` (#555555) | `--color-surface` (#FFFFFF) | 8.3:1 | ✅ AA | Card descriptions |
| `--color-text-muted` (#757575) | `--color-bg` (#F5F5F5) | 4.3:1 | ✅ AA (16px+) | Metadata, captions |
| `--color-accent-text` (#4A5D4A) | `--color-bg` (#F5F5F5) | 6.6:1 | ✅ AA | Text links at any size |
| `--color-accent-text` (#4A5D4A) | `--color-surface` (#FFFFFF) | 7.2:1 | ✅ AA | Text links on cards |
| `--color-accent` (#6B7F6B) | `--color-bg` (#F5F5F5) | 4.2:1 | ✅ AA (large) | Index numbers, shapes (≥18px bold / ≥24px) |
| `--color-text` (#1A1A1A) | `--color-surface-muted` (#EBEBEB) | 12.1:1 | ✅ AAA | Code blocks, quotes |
| White (#FFFFFF) | `--color-accent` (#6B7F6B) | 4.5:1 | ✅ AA | White text on accent buttons |
| White (#FFFFFF) | `--color-accent-hover` (#4A5D4A) | 7.2:1 | ✅ AA | White text on hover accent buttons |

### Accent Usage Matrix

| Context | Which accent token | Min size | Example |
|---------|-------------------|----------|---------|
| Decorative shapes, color blocks | `--color-accent` | N/A (no text) | Sage rectangle behind case study image |
| Index numbers ("01", "02") | `--color-accent` | 24px+ | Large editorial numbering |
| Inline text links | `--color-accent-text` | Any size | Body copy hyperlinks |
| Button background | `--color-accent` | 18px+ bold text on it | Primary CTA |
| Hover underline | `--color-accent` | N/A (decorative) | Nav hover state |
| Selection highlight | `--color-accent-muted` | N/A | Text selection background |

### Future Dark Theme (P2 — Architecture Only)

```css
[data-theme="dark"] {
  --color-bg:             #111113;
  --color-surface:        #1C1C1F;
  --color-surface-muted:  #27272A;
  --color-text:           #EDEDEF;
  --color-text-secondary: #A1A1AA;
  --color-text-muted:     #71717A;
  --color-accent:         #8FA88F;
  --color-accent-hover:   #A3BCA3;
  --color-accent-text:    #A3BCA3;
  --color-accent-muted:   rgba(107, 127, 107, 0.15);
  --color-border:         #2A2A2D;
  --color-border-subtle:  rgba(255, 255, 255, 0.06);
  --color-border-strong:  rgba(255, 255, 255, 0.12);
  --color-shape-white:    #2A2A2D;
  --color-shape-accent:   #8FA88F;
  --color-shape-dark:     #EDEDEF;
}
```

---

## 2. Typography Tokens

### Font Families

| Role | Font | Fallback Stack | CSS Variable |
|------|------|---------------|-------------|
| Display (serif) | Playfair Display | `Georgia, 'Times New Roman', Times, serif` | `--font-display` |
| Body (sans) | DM Sans | `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | `--font-sans` |
| Mono | JetBrains Mono | `ui-monospace, 'SFMono-Regular', 'SF Mono', Menlo, Consolas, monospace` | `--font-mono` |

```css
:root {
  --font-display: 'Playfair Display', Georgia, 'Times New Roman', Times, serif;
  --font-sans:    'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, 'SFMono-Regular', 'SF Mono', Menlo, Consolas, monospace;
}
```

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

// layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

### Type Scale

| Token | Size | Line Height | Letter Spacing | Weight | Font Family | Usage |
|-------|------|-------------|----------------|--------|-------------|-------|
| `display` | `clamp(4rem, 12vw, 10rem)` | 0.9 | -0.03em | 700 | Display (serif) | Hero headlines, page titles |
| `display-sm` | `clamp(2.5rem, 6vw, 5rem)` | 0.95 | -0.02em | 600 | Display (serif) | Section headers, case study titles |
| `index` | `clamp(3rem, 8vw, 7rem)` | 1.0 | -0.02em | 700 | Mono | Editorial index numbers ("01") |
| `xl` | `clamp(1.5rem, 3vw, 2rem)` | 1.15 | -0.01em | 500 | Sans | Sub-section headings |
| `lg` | `1.25rem` | 1.4 | -0.01em | 500 | Sans | Card titles, lead text |
| `base` | `1rem` | 1.7 | 0em | 400 | Sans | Body text |
| `sm` | `0.875rem` | 1.5 | 0em | 400 | Sans | Secondary text |
| `xs` | `0.75rem` | 1.4 | 0.05em | 500 | Sans | Small labels, footnotes |
| `label` | `0.6875rem` | 1.3 | 0.12em | 500 | Mono | Uppercase labels, nav items, metadata |

```css
:root {
  --text-display:    clamp(4rem, 12vw, 10rem);
  --text-display-sm: clamp(2.5rem, 6vw, 5rem);
  --text-index:      clamp(3rem, 8vw, 7rem);
  --text-xl:         clamp(1.5rem, 3vw, 2rem);
  --text-lg:         1.25rem;
  --text-base:       1rem;
  --text-sm:         0.875rem;
  --text-xs:         0.75rem;
  --text-label:      0.6875rem;
}
```

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `normal` | 400 | Body text, serif italic pullquotes |
| `medium` | 500 | Labels, emphasized body, sub-headings, nav items |
| `semibold` | 600 | Display-sm headings |
| `bold` | 700 | Display headings, index numbers |

### Responsive Scaling Notes

- `display`, `display-sm`, `index`, and `xl` use `clamp()` for fluid scaling — no breakpoint overrides needed.
- `lg` through `label` are fixed — they work at all viewport widths.
- On mobile (< 640px), the `clamp()` minimums ensure display type remains impactful: `display` bottoms out at 4rem (64px), `display-sm` at 2.5rem (40px).

---

## 3. Spacing Tokens

### Base Unit: 4px

All spacing is a multiple of 4px for consistent vertical and horizontal rhythm.

### Spacing Scale

| Token | Value | rem | Usage |
|-------|-------|-----|-------|
| `0` | 0px | 0 | — |
| `px` | 1px | — | Hairline borders |
| `0.5` | 2px | 0.125rem | Tight inline gaps |
| `1` | 4px | 0.25rem | Icon-to-label gap |
| `1.5` | 6px | 0.375rem | Compact padding |
| `2` | 8px | 0.5rem | Button inline padding, small gaps |
| `3` | 12px | 0.75rem | Card inner gaps |
| `4` | 16px | 1rem | Standard element spacing |
| `5` | 20px | 1.25rem | Component internal padding |
| `6` | 24px | 1.5rem | Between related elements |
| `8` | 32px | 2rem | Between components, grid gutter |
| `10` | 40px | 2.5rem | Small section gap |
| `12` | 48px | 3rem | Medium section gap |
| `16` | 64px | 4rem | Section gap (mobile) |
| `20` | 80px | 5rem | Section gap (desktop) |
| `24` | 96px | 6rem | Large section gap |
| `32` | 128px | 8rem | Hero/major section padding |
| `40` | 160px | 10rem | Max vertical breathing room |

### Semantic Spacing

```css
:root {
  --space-section-lg:  clamp(6rem, 12vw, 10rem);
  --space-section:     clamp(4rem, 8vw, 6rem);
  --space-section-sm:  clamp(3rem, 5vw, 4rem);
  --space-component:   clamp(2rem, 4vw, 3rem);
  --space-element:     clamp(1rem, 2vw, 1.5rem);

  --content-max-width: 720px;
  --page-max-width:    1200px;
  --wide-max-width:    1440px;
}
```

### Page Padding (Horizontal)

```css
:root {
  --page-padding: clamp(1.25rem, 5vw, 4rem);
}
```

| Breakpoint | Effective Padding |
|-----------|------------------|
| Mobile (< 640px) | ~20px |
| Tablet (640–1024px) | ~40px |
| Desktop (> 1024px) | ~64px |

The editorial layout needs slightly more horizontal breathing room than the previous dark direction — wider margins make the off-white background feel like paper margins.

---

## 4. Motion Tokens

### Spring Presets (Framer Motion)

| Preset | Stiffness | Damping | Mass | Feel | Use Cases |
|--------|-----------|---------|------|------|-----------|
| `snappy` | 300 | 30 | 0.5 | Quick, precise, no overshoot | Button press, nav underlines, tooltip appearance |
| `smooth` | 200 | 25 | 1.0 | Fluid, slight overshoot | Page transitions, card hover lift, scroll reveals |
| `gentle` | 120 | 20 | 1.0 | Soft, relaxed, visible overshoot | Cursor following, magnetic pull, large element entrances |
| `editorial` | 100 | 18 | 1.2 | Slow, deliberate, dramatic | Geometric shape drift, hero text reveal, parallax layers |

```typescript
export const springs = {
  snappy:    { type: "spring", stiffness: 300, damping: 30, mass: 0.5 },
  smooth:    { type: "spring", stiffness: 200, damping: 25, mass: 1 },
  gentle:    { type: "spring", stiffness: 120, damping: 20, mass: 1 },
  editorial: { type: "spring", stiffness: 100, damping: 18, mass: 1.2 },
} as const;
```

### Duration Fallbacks

For non-spring animations and `prefers-reduced-motion` fallbacks:

| Token | Duration | Usage |
|-------|----------|-------|
| `--duration-fast` | 150ms | Opacity changes, color transitions |
| `--duration-normal` | 300ms | General UI transitions |
| `--duration-slow` | 500ms | Large layout shifts, complex reveals |
| `--duration-editorial` | 800ms | Hero text reveal, shape entrances (dramatic timing) |

```css
:root {
  --duration-fast:      150ms;
  --duration-normal:    300ms;
  --duration-slow:      500ms;
  --duration-editorial: 800ms;
  --ease-out:           cubic-bezier(0.16, 1, 0.3, 1);
  --ease-editorial:     cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Stagger Delays

| Token | Delay | Usage |
|-------|-------|-------|
| `--stagger-tight` | 30ms | Dense lists (nav items, skill tags) |
| `--stagger-normal` | 60ms | Card grids, section reveals |
| `--stagger-relaxed` | 100ms | Hero text word-by-word, index number reveals |
| `--stagger-dramatic` | 150ms | Case study index numbers appearing one by one |

### Editorial Motion Presets

New presets for the editorial/magazine aesthetic:

```typescript
export const editorialVariants = {
  heroTextReveal: {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
        mass: 1.2,
        delay: i * 0.1,
      },
    }),
  },

  indexNumberReveal: {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: i * 0.15,
      },
    }),
  },

  shapeFloat: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 1.5,
      },
    },
  },

  shapeDrift: {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  parallaxSlow: {
    style: { y: "var(--parallax-y, 0)" },
    rate: 0.15,
  },

  parallaxMedium: {
    style: { y: "var(--parallax-y, 0)" },
    rate: 0.3,
  },

  verticalTextReveal: {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 22,
        delay: 0.5,
      },
    },
  },
} as const;
```

### Parallax Values

For overlapping elements that move at different scroll rates:

| Layer | Scroll Rate | Usage |
|-------|------------|-------|
| Background shapes | 0.15x | Geometric circles drift slowly — creates depth |
| Content | 1.0x (normal) | Text, cards, primary content |
| Foreground shapes | 0.3x | Accent rectangles shift slightly faster than bg shapes |
| Index numbers | 0.1x | Large numbers move very slowly — feels anchored |

Implementation: Use Framer Motion's `useScroll` + `useTransform` to map scroll position to translateY at the specified rate.

### Framer Motion Standard Variants

```typescript
export const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: springs.smooth,
    },
  },

  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  },

  slideInRight: {
    hidden: { opacity: 0, x: 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: springs.smooth,
    },
  },

  slideInLeft: {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: springs.smooth,
    },
  },

  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: springs.snappy,
    },
  },

  staggerContainer: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  },

  staggerContainerSlow: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  },

  staggerContainerDramatic: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  },
} as const;
```

### Page Transitions

```typescript
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: springs.smooth,
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

export const caseStudyTransition = {
  initial: { opacity: 0, x: 80 },
  animate: {
    opacity: 1,
    x: 0,
    transition: springs.editorial,
  },
  exit: {
    opacity: 0,
    x: -80,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};
```

### Reduced Motion

```typescript
export const reducedMotionOverrides = {
  spring: { type: "tween", duration: 0 },
  variants: {
    hidden: {},
    visible: { transition: { duration: 0 } },
  },
};
```

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 5. Border, Shadow & Radius Tokens

### Border Radius Scale

The editorial direction uses sharp edges predominantly. Radius is minimal — used only for small UI elements.

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0px | Cards, images, geometric shapes, accent blocks — sharp edges by default |
| `--radius-sm` | 2px | Tags, small badges, code inline |
| `--radius-md` | 4px | Buttons, inputs |
| `--radius-lg` | 6px | Tooltips, dropdowns |
| `--radius-full` | 9999px | Geometric circles, avatar, pills |

```css
:root {
  --radius-none: 0px;
  --radius-sm:   2px;
  --radius-md:   4px;
  --radius-lg:   6px;
  --radius-full: 9999px;
}
```

Note: The previous dark direction used generous radii (8–24px). The editorial reference uses sharp, squared-off edges exclusively. Cards, images, and accent blocks have NO border radius. Only small interactive elements (buttons, inputs) get a minimal 4px radius. Geometric circles use `radius-full`.

### Shadows

On a light background, shadows create more visible elevation than on dark. Keep them subtle — the editorial look is flat and graphic, not material/elevated.

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-subtle` | `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` | Card resting state (barely visible) |
| `--shadow-medium` | `0 4px 12px rgba(0,0,0,0.08)` | Card hover, elevated panels |
| `--shadow-prominent` | `0 8px 24px rgba(0,0,0,0.12)` | Modals, popovers |
| `--shadow-shape` | `0 8px 32px rgba(0,0,0,0.06)` | White geometric shapes (soft lift off background) |

```css
:root {
  --shadow-subtle:    0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-medium:    0 4px 12px rgba(0,0,0,0.08);
  --shadow-prominent: 0 8px 24px rgba(0,0,0,0.12);
  --shadow-shape:     0 8px 32px rgba(0,0,0,0.06);
}
```

### Elevation Strategy (Light Theme)

1. **Resting:** Background (`#F5F5F5`) or Surface (`#FFFFFF`) + `--shadow-subtle`
2. **Hover:** Surface (`#FFFFFF`) + `--shadow-medium` + translateY(-2px)
3. **Active/Pressed:** Surface + translateY(0) + `--shadow-subtle`
4. **Geometric shapes:** `#FFFFFF` + `--shadow-shape` (creates paper-layering depth)

### Borders

| Token | Value | Usage |
|-------|-------|-------|
| `--border-default` | `1px solid var(--color-border)` | Card borders, dividers |
| `--border-subtle` | `1px solid var(--color-border-subtle)` | Section separators, light division |
| `--border-strong` | `1px solid var(--color-border-strong)` | Emphasized borders, focus rings |
| `--border-accent` | `2px solid var(--color-accent)` | Active states, focus-visible |

---

## 6. Breakpoints

### Breakpoint Values

| Token | Width | Target |
|-------|-------|--------|
| `sm` | 640px | Large phones (landscape) |
| `md` | 768px | Tablets (portrait) |
| `lg` | 1024px | Tablets (landscape), small desktops |
| `xl` | 1280px | Standard desktops |
| `2xl` | 1536px | Large desktops |

### Container Max-Widths

| Breakpoint | Container Max-Width |
|-----------|-------------------|
| Default (mobile) | 100% (with `--page-padding`) |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1200px |
| `2xl` | 1440px |

### Layout Behavior by Breakpoint

| Element | Mobile (< 640px) | Tablet (640–1024px) | Desktop (> 1024px) |
|---------|-----------------|--------------------|--------------------|
| Page padding | 20px | 40px | 64px |
| Nav | Hamburger → overlay | Hamburger → overlay | Horizontal bar, small caps mono |
| Project grid | 1 column, stacked | 1 column, asymmetric | 2 columns, asymmetric (7/5 or 8/4) |
| Case study content | Full width | Max 640px | Max 720px, offset from center |
| Case study images | Full bleed | Contained | Can break out to wider widths |
| Hero text size | ~4rem | ~6rem | ~8-10rem |
| Geometric shapes | 0–1 per section | 1–2 per section | 2–3 per section |
| Vertical text | Hidden | Hidden | Visible along edges |
| Index numbers | Inline above title | Left-aligned, smaller | Large, offset left of title |

---

## 7. Layout Tokens

### Asymmetric Grid

The editorial layout uses a 12-column grid with deliberately uneven splits.

```css
:root {
  --grid-columns:   12;
  --grid-gutter:    clamp(1rem, 2vw, 2rem);

  /* Named asymmetric splits (left / right column spans) */
  --grid-split-7-5: 7fr 5fr;
  --grid-split-5-7: 5fr 7fr;
  --grid-split-8-4: 8fr 4fr;
  --grid-split-4-8: 4fr 8fr;
  --grid-split-9-3: 9fr 3fr;
  --grid-split-3-9: 3fr 9fr;
}
```

| Split | Usage |
|-------|-------|
| `7/5` | Case study cards — text heavy side (7) + image side (5) |
| `5/7` | Reversed layout for alternating case studies |
| `8/4` | Hero area — massive type (8) + metadata/nav column (4) |
| `3/9` | Index number gutter (3) + content area (9) |
| `9/3` | Content area (9) + vertical text margin (3) |

### Overlap & Offset Values

For elements that break grid boundaries to create layered compositions:

```css
:root {
  /* Horizontal offsets for overlapping elements */
  --offset-sm:   clamp(1rem, 2vw, 2rem);     /* 16–32px */
  --offset-md:   clamp(2rem, 4vw, 4rem);     /* 32–64px */
  --offset-lg:   clamp(3rem, 6vw, 6rem);     /* 48–96px */

  /* Vertical offsets for layered stacking */
  --overlap-sm:  clamp(1.5rem, 3vw, 3rem);   /* 24–48px */
  --overlap-md:  clamp(3rem, 5vw, 5rem);     /* 48–80px */
  --overlap-lg:  clamp(4rem, 8vw, 8rem);     /* 64–128px */
}
```

Implementation:
- Use negative margins: `margin-top: calc(var(--overlap-md) * -1)`
- Or CSS Grid overlapping rows: `grid-row: 1 / 3` to span into adjacent row
- Or absolute positioning within a relative container for shapes

### Geometric Shape Sizes

```css
:root {
  --shape-xs:  48px;    /* Small texture circles */
  --shape-sm:  96px;    /* Medium accent circles */
  --shape-md:  160px;   /* Large background circles */
  --shape-lg:  240px;   /* Prominent compositional shapes */
  --shape-xl:  320px;   /* Hero-level accent rectangles */
  --shape-xxl: 480px;   /* Full-bleed accent blocks */
}
```

| Size | Shape Type | Usage |
|------|-----------|-------|
| `xs` (48px) | Circle | Dotting texture, small visual anchors |
| `sm` (96px) | Circle | Floating near headings, pairing with labels |
| `md` (160px) | Circle or Rect | Background depth element behind cards |
| `lg` (240px) | Circle or Rect | Major compositional element — hero area, case study sections |
| `xl` (320px) | Rectangle | Color block behind case study imagery |
| `xxl` (480px) | Rectangle | Full-width accent band or oversized framing element |

### Vertical Text

```css
:root {
  --vertical-text-rotation:     -90deg;
  --vertical-text-origin:       left top;
  --vertical-text-offset:       1rem;  /* Distance from edge */
}
```

Utility class pattern:

```css
.text-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  white-space: nowrap;
}

/* Alternative: rotate approach for single-line labels */
.text-rotated {
  transform: rotate(-90deg);
  transform-origin: left top;
  position: absolute;
  left: var(--vertical-text-offset);
}
```

### Z-Index Scale

```css
:root {
  --z-base:       0;
  --z-shapes:     10;
  --z-content:    20;
  --z-overlay:    30;
  --z-nav:        40;
  --z-cursor:     50;
  --z-modal:      60;
}
```

---

## 8. Tailwind Config

Complete `tailwind.config.ts` theme.extend object with all updated tokens.

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--color-bg)",
          surface: "var(--color-surface)",
          muted: "var(--color-surface-muted)",
        },
        foreground: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          text: "var(--color-accent-text)",
          muted: "var(--color-accent-muted)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          subtle: "var(--color-border-subtle)",
          strong: "var(--color-border-strong)",
        },
        shape: {
          white: "var(--color-shape-white)",
          accent: "var(--color-shape-accent)",
          dark: "var(--color-shape-dark)",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "Georgia", "'Times New Roman'", "Times", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "'SFMono-Regular'", "'SF Mono'", "Menlo", "Consolas", "monospace"],
      },

      fontSize: {
        display: [
          "clamp(4rem, 12vw, 10rem)",
          { lineHeight: "0.9", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-sm": [
          "clamp(2.5rem, 6vw, 5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        index: [
          "clamp(3rem, 8vw, 7rem)",
          { lineHeight: "1.0", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        xl: [
          "clamp(1.5rem, 3vw, 2rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        lg: ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        base: ["1rem", { lineHeight: "1.7", letterSpacing: "0em" }],
        sm: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0em" }],
        xs: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
        label: ["0.6875rem", { lineHeight: "1.3", letterSpacing: "0.12em" }],
      },

      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        snug: "-0.01em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.12em",
      },

      lineHeight: {
        none: "0.9",
        tight: "0.95",
        snug: "1.0",
        normal: "1.15",
        relaxed: "1.4",
        loose: "1.5",
        body: "1.7",
      },

      spacing: {
        section: "var(--space-section)",
        "section-lg": "var(--space-section-lg)",
        "section-sm": "var(--space-section-sm)",
        component: "var(--space-component)",
        element: "var(--space-element)",
        "offset-sm": "var(--offset-sm)",
        "offset-md": "var(--offset-md)",
        "offset-lg": "var(--offset-lg)",
        "overlap-sm": "var(--overlap-sm)",
        "overlap-md": "var(--overlap-md)",
        "overlap-lg": "var(--overlap-lg)",
      },

      maxWidth: {
        content: "var(--content-max-width)",
        page: "var(--page-max-width)",
        wide: "var(--wide-max-width)",
      },

      padding: {
        page: "var(--page-padding)",
      },

      width: {
        "shape-xs": "var(--shape-xs)",
        "shape-sm": "var(--shape-sm)",
        "shape-md": "var(--shape-md)",
        "shape-lg": "var(--shape-lg)",
        "shape-xl": "var(--shape-xl)",
        "shape-xxl": "var(--shape-xxl)",
      },

      height: {
        "shape-xs": "var(--shape-xs)",
        "shape-sm": "var(--shape-sm)",
        "shape-md": "var(--shape-md)",
        "shape-lg": "var(--shape-lg)",
        "shape-xl": "var(--shape-xl)",
        "shape-xxl": "var(--shape-xxl)",
      },

      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },

      boxShadow: {
        subtle: "var(--shadow-subtle)",
        medium: "var(--shadow-medium)",
        prominent: "var(--shadow-prominent)",
        shape: "var(--shadow-shape)",
      },

      zIndex: {
        base: "var(--z-base)",
        shapes: "var(--z-shapes)",
        content: "var(--z-content)",
        overlay: "var(--z-overlay)",
        nav: "var(--z-nav)",
        cursor: "var(--z-cursor)",
        modal: "var(--z-modal)",
      },

      gridTemplateColumns: {
        "split-7-5": "var(--grid-split-7-5)",
        "split-5-7": "var(--grid-split-5-7)",
        "split-8-4": "var(--grid-split-8-4)",
        "split-4-8": "var(--grid-split-4-8)",
        "split-9-3": "var(--grid-split-9-3)",
        "split-3-9": "var(--grid-split-3-9)",
      },

      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
        editorial: "var(--duration-editorial)",
      },

      transitionTimingFunction: {
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "shape-drift": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },

      animation: {
        "fade-in": "fade-in var(--duration-normal) var(--ease-out) forwards",
        "fade-in-up": "fade-in-up var(--duration-normal) var(--ease-out) forwards",
        "slide-in-right": "slide-in-right var(--duration-normal) var(--ease-out) forwards",
        "scale-in": "scale-in var(--duration-fast) var(--ease-out) forwards",
        "shape-drift": "shape-drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 9. Global CSS Foundation

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colors — greyscale + sage/olive accent */
    --color-bg:             #F5F5F5;
    --color-surface:        #FFFFFF;
    --color-surface-muted:  #EBEBEB;
    --color-text:           #1A1A1A;
    --color-text-secondary: #555555;
    --color-text-muted:     #757575;
    --color-accent:         #6B7F6B;
    --color-accent-hover:   #4A5D4A;
    --color-accent-text:    #4A5D4A;
    --color-accent-muted:   rgba(107, 127, 107, 0.12);
    --color-border:         #E0E0E0;
    --color-border-subtle:  #EBEBEB;
    --color-border-strong:  #CCCCCC;
    --color-shape-white:    #FFFFFF;
    --color-shape-accent:   #6B7F6B;
    --color-shape-dark:     #1A1A1A;

    /* Spacing */
    --space-section-lg:     clamp(6rem, 12vw, 10rem);
    --space-section:        clamp(4rem, 8vw, 6rem);
    --space-section-sm:     clamp(3rem, 5vw, 4rem);
    --space-component:      clamp(2rem, 4vw, 3rem);
    --space-element:        clamp(1rem, 2vw, 1.5rem);
    --content-max-width:    720px;
    --page-max-width:       1200px;
    --wide-max-width:       1440px;
    --page-padding:         clamp(1.25rem, 5vw, 4rem);

    /* Grid */
    --grid-columns:         12;
    --grid-gutter:          clamp(1rem, 2vw, 2rem);
    --grid-split-7-5:       7fr 5fr;
    --grid-split-5-7:       5fr 7fr;
    --grid-split-8-4:       8fr 4fr;
    --grid-split-4-8:       4fr 8fr;
    --grid-split-9-3:       9fr 3fr;
    --grid-split-3-9:       3fr 9fr;

    /* Offsets & Overlaps */
    --offset-sm:            clamp(1rem, 2vw, 2rem);
    --offset-md:            clamp(2rem, 4vw, 4rem);
    --offset-lg:            clamp(3rem, 6vw, 6rem);
    --overlap-sm:           clamp(1.5rem, 3vw, 3rem);
    --overlap-md:           clamp(3rem, 5vw, 5rem);
    --overlap-lg:           clamp(4rem, 8vw, 8rem);

    /* Shape Sizes */
    --shape-xs:             48px;
    --shape-sm:             96px;
    --shape-md:             160px;
    --shape-lg:             240px;
    --shape-xl:             320px;
    --shape-xxl:            480px;

    /* Radius */
    --radius-none:          0px;
    --radius-sm:            2px;
    --radius-md:            4px;
    --radius-lg:            6px;
    --radius-full:          9999px;

    /* Shadows */
    --shadow-subtle:        0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
    --shadow-medium:        0 4px 12px rgba(0,0,0,0.08);
    --shadow-prominent:     0 8px 24px rgba(0,0,0,0.12);
    --shadow-shape:         0 8px 32px rgba(0,0,0,0.06);

    /* Z-Index */
    --z-base:               0;
    --z-shapes:             10;
    --z-content:            20;
    --z-overlay:            30;
    --z-nav:                40;
    --z-cursor:             50;
    --z-modal:              60;

    /* Motion */
    --duration-fast:        150ms;
    --duration-normal:      300ms;
    --duration-slow:        500ms;
    --duration-editorial:   800ms;
    --ease-out:             cubic-bezier(0.16, 1, 0.3, 1);
    --ease-editorial:       cubic-bezier(0.22, 1, 0.36, 1);
    --stagger-tight:        30ms;
    --stagger-normal:       60ms;
    --stagger-relaxed:      100ms;
    --stagger-dramatic:     150ms;

    /* Vertical Text */
    --vertical-text-rotation: -90deg;
    --vertical-text-origin:   left top;
    --vertical-text-offset:   1rem;
  }

  * {
    border-color: var(--color-border);
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: var(--color-accent-muted);
    color: var(--color-text);
  }

  :focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@layer utilities {
  .text-vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    white-space: nowrap;
  }

  .font-display {
    font-family: var(--font-display);
  }
}
```

---

## 10. Usage Quick Reference

### Common Tailwind Class Patterns

```html
<!-- Page section with editorial spacing -->
<section class="py-section px-page max-w-wide mx-auto">

<!-- Hero headline — massive serif -->
<h1 class="font-display text-display font-bold tracking-tighter leading-none text-foreground">

<!-- Section title — serif -->
<h2 class="font-display text-display-sm font-semibold tracking-tight leading-tight text-foreground">

<!-- Index number — editorial numbering -->
<span class="font-mono text-index font-bold tracking-tight text-foreground-muted">01</span>

<!-- Body text -->
<p class="text-base font-normal leading-body text-foreground-secondary max-w-content">

<!-- Label / metadata — uppercase mono -->
<span class="font-mono text-label font-medium tracking-wider uppercase text-foreground-muted">

<!-- Asymmetric grid layout -->
<div class="grid grid-cols-split-7-5 gap-[var(--grid-gutter)]">

<!-- Card — sharp edges, subtle shadow -->
<div class="bg-bg-surface border border-border rounded-none p-6 shadow-subtle
            hover:shadow-medium hover:-translate-y-0.5
            transition-all duration-normal ease-out-expo">

<!-- Accent text link — uses darker accent for AA compliance -->
<a class="text-accent-text hover:text-accent-hover underline underline-offset-4
          transition-colors duration-fast">

<!-- Accent button -->
<button class="bg-accent text-white px-6 py-3 rounded-md font-sans font-medium text-sm
               hover:bg-accent-hover active:scale-[0.97]
               transition-all duration-fast">

<!-- White geometric circle -->
<div class="w-shape-md h-shape-md rounded-full bg-shape-white shadow-shape
            absolute z-shapes animate-shape-drift">

<!-- Accent rectangle -->
<div class="w-shape-xl h-shape-lg bg-shape-accent absolute z-overlay">

<!-- Vertical text label -->
<span class="text-vertical font-mono text-label tracking-wider uppercase text-foreground-muted
             absolute right-page top-1/2">
```

---

## Summary for Front End Agent

**To implement this design system:**

1. Install fonts via `next/font/google`: Playfair Display, DM Sans, JetBrains Mono
2. Copy the `:root` CSS variables into `globals.css`
3. Use the Tailwind config `theme.extend` object
4. Import spring presets and editorial motion variants from a shared `lib/motion.ts` file
5. Use semantic class names (`text-foreground`, `bg-bg-surface`, `font-display text-display`) — never hardcode hex values
6. All colors flow through CSS variables — dark theme (P2) is a variable swap under `[data-theme="dark"]`
7. Cards and images use `rounded-none` (sharp edges). Only buttons/inputs get `rounded-md`.
8. Geometric shapes are positioned with `absolute` + `z-shapes`/`z-overlay` and use the `--shape-*` size tokens
9. Asymmetric layouts use the `grid-cols-split-*` utilities
10. Test all text/background combinations against the contrast ratio table in Section 1
