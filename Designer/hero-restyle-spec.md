# Hero Section Restyle — Editorial Typographic Composition

## Reference
Full Xircle event management site — centered editorial composition with thin-line framing elements, structured typography within bordered boxes, and a company logo strip.

---

## 1. ASCII Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                         ┌─ thin frame (partial) ─┐                          │
│                         │  PRODUCT DESIGNER       │   ← mono label, top-right
│                         │                         │      of frame            │
│  ┌──────────────────────┤                         │                          │
│  │                      │                         │                          │
│  │     xiao song.       │                         │   ← display text, large  │
│  │                      │                         │      centered in frame   │
│  │                      └─────────────────────────┘                          │
│  │  Crafting Moments That Last                    │   ← italicized tagline   │
│  └────────────────────────────────────────────────┘     below bottom frame   │
│                                                                             │
│           "I design with people, not in a vacuum.                           │
│            Lately that means teammates, stakeholders,                       │
│            and a growing roster of AI collaborators..."                     │
│                                                                             │
│         [ View My Work ]      Explore Case Studies                          │
│                                                                             │
│              ✦ 6+ years designing enterprise products                       │
│                                                                             │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│                          Previously at:                                      │
│    RISD    Awake    Walmart    LiveControl    Meta    DoorDash               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Detailed Spatial Map (z-index annotated)

```
┌─ viewport ────────────────────────────────────────────────────┐
│                                                                │
│              ┌─────────────────────────┐ z:5                   │
│              │ [mono label]         ┐  │  ← top frame w/ label │
│         ┌────┤                      │  │  ← left frame extends │
│    z:5  │    │   "xiao song."  z:20 │  │    past top frame     │
│         │    │                      │  │                        │
│         │    └──────────────────────┘  │                        │
│         │  [tagline]  z:10             │                        │
│         └──────────────────────────────┘                        │
│                                                                │
│           [description paragraph]  z:10                        │
│           [CTA buttons]            z:10                        │
│           [stat line]              z:10                        │
│                                                                │
│    ─────────── border-top ─────────────  z:1                   │
│           [logo strip]             z:10                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘

Frame break: Left border segment extends 20px below the bottom frame line (asymmetric)
Grid break: Frame composition offset 40px right of true center (creates tension)
```

---

## 2. Storyboard — Load Choreography

```
Phase 1 (0ms):    Outer frame lines draw in — top line animates L→R (400ms, ease-out)
Phase 2 (200ms):  Left frame line draws T→B (350ms, ease-out)
Phase 3 (300ms):  Bottom frame segment draws L→R (300ms, ease-out)
Phase 4 (400ms):  "PRODUCT DESIGNER" label fades in at top-right of frame (opacity 0→1, y:-8→0, 300ms)
Phase 5 (500ms):  "xiao" reveals — clip-path from bottom (mask slides up over 600ms, editorial spring)
Phase 6 (700ms):  "song." reveals — same clip-path, 200ms stagger after "xiao"
Phase 7 (900ms):  The "." accent color appears (color transition 0→accent over 200ms)
Phase 8 (1000ms): Tagline fades in below frame (opacity, y:10→0, 400ms, smooth spring)
Phase 9 (1200ms): Description paragraph fades in (opacity, y:12→0, 500ms)
Phase 10 (1400ms): CTA buttons appear (opacity, y:8→0, stagger 100ms between them)
Phase 11 (1600ms): Stat line fades in (opacity 0→1, 400ms)
Phase 12 (1800ms): Logo strip fades in (opacity, individual logos stagger 80ms each L→R)

Scroll [0.0–0.2]: Frame lines begin to fade (opacity 1→0.3)
Scroll [0.1–0.3]: Name text drifts up slightly (translateY at 0.05x parallax)
Scroll [0.2–0.4]: Logo strip stays pinned slightly longer, then scrolls normally
Scroll [0.3–0.5]: Entire hero compresses as next section enters
```

### Timing Table

| Element | Trigger | Duration | Delay | Easing/Spring |
|---------|---------|----------|-------|---------------|
| Top frame line | Load | 400ms | 0ms | ease-out (CSS) |
| Left frame line | Load | 350ms | 200ms | ease-out (CSS) |
| Bottom frame line | Load | 300ms | 300ms | ease-out (CSS) |
| "PRODUCT DESIGNER" label | Load | 300ms | 400ms | smooth spring |
| "xiao" text | Load | 600ms | 500ms | editorial spring |
| "song." text | Load | 600ms | 700ms | editorial spring |
| Accent dot color | Load | 200ms | 900ms | linear |
| Tagline | Load | 400ms | 1000ms | smooth spring |
| Description | Load | 500ms | 1200ms | ease-out |
| CTA buttons | Load | 400ms | 1400ms (stagger 100ms) | smooth spring |
| Stat line | Load | 400ms | 1600ms | ease-out |
| Logo strip | Load | 400ms | 1800ms (stagger 80ms/logo) | ease-out |

---

## 3. What to Remove from Current Hero

| Element | Reason |
|---------|--------|
| Accent rectangle (parallax) | Replaced by editorial frame lines — more refined |
| Vertical text on right edge | Replaced by mono label inside frame — serves same purpose with more structure |
| Geometric shapes (circle) | Not in current code but referenced in project brief — do not add |
| Left-aligned layout | Moving to centered composition per reference |
| Current description text | Replacing with new copy provided |
| `justify-end` positioning | Moving to `justify-center` centered composition |

---

## 4. Full HTML Structure

```html
<section class="hero" data-hero>
  <!-- Editorial Frame Composition -->
  <div class="hero__frame-container">
    <!-- Frame lines (animated via CSS/JS) -->
    <div class="hero__frame">
      <span class="hero__frame-line hero__frame-line--top"></span>
      <span class="hero__frame-line hero__frame-line--left"></span>
      <span class="hero__frame-line hero__frame-line--bottom"></span>
      <span class="hero__frame-line hero__frame-line--right"></span>
    </div>

    <!-- Mono label positioned at top-right of frame -->
    <span class="hero__label">Product Designer</span>

    <!-- Main display text inside frame -->
    <h1 class="hero__title">
      <span class="hero__title-word" data-word="xiao">xiao</span>
      <span class="hero__title-word" data-word="song">song</span><span class="hero__title-dot">.</span>
    </h1>

    <!-- Tagline below bottom frame line -->
    <p class="hero__tagline">Designing what comes next</p>
  </div>

  <!-- Description -->
  <p class="hero__description">
    I design with people, not in a vacuum. Lately that means teammates,
    stakeholders, and a growing roster of AI collaborators — all in service
    of making complex things feel obvious.
  </p>

  <!-- CTA Area -->
  <div class="hero__cta">
    <a href="/work" class="hero__cta-primary">View My Work</a>
    <a href="/about" class="hero__cta-secondary">Explore Case Studies</a>
  </div>

  <!-- Stat Line -->
  <p class="hero__stat">
    <span class="hero__stat-icon">✦</span>
    6+ years designing enterprise products
  </p>

  <!-- Company Logos Strip -->
  <div class="hero__logos">
    <span class="hero__logos-label">Previously at:</span>
    <div class="hero__logos-row">
      <span class="hero__logo" data-company="risd">RISD</span>
      <span class="hero__logo" data-company="awake">Awake</span>
      <span class="hero__logo" data-company="walmart">Walmart</span>
      <span class="hero__logo" data-company="livecontrol">LiveControl</span>
      <span class="hero__logo" data-company="meta">Meta</span>
      <span class="hero__logo" data-company="doordash">DoorDash</span>
    </div>
  </div>
</section>
```

---

## 5. Full CSS

```css
/* ═══════════════════════════════════════════════
   HERO SECTION — Editorial Typographic Composition
   ═══════════════════════════════════════════════ */

.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(6rem, 12vw, 10rem) var(--page-pad) clamp(3rem, 6vw, 5rem);
  text-align: center;
  overflow: hidden;
}

/* ─── Frame Container ─── */
.hero__frame-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

/* ─── Editorial Frame ─── */
.hero__frame {
  position: absolute;
  inset: -20px -40px;
  pointer-events: none;
}

.hero__frame-line {
  position: absolute;
  background-color: var(--color-border);
}

.hero__frame-line--top {
  top: 0;
  right: 0;
  height: 1px;
  width: 0;
  animation: frame-draw-horizontal 400ms ease-out forwards;
}

.hero__frame-line--right {
  top: 0;
  right: 0;
  width: 1px;
  height: 0;
  animation: frame-draw-vertical 350ms ease-out 200ms forwards;
}

.hero__frame-line--bottom {
  bottom: 0;
  right: 0;
  height: 1px;
  width: 0;
  animation: frame-draw-horizontal 300ms ease-out 300ms forwards;
}

.hero__frame-line--left {
  bottom: 0;
  left: 0;
  width: 1px;
  height: 0;
  animation: frame-draw-vertical 350ms ease-out 400ms forwards;
  /* Left line only draws 70% height — asymmetric for editorial tension */
  --frame-draw-height: 70%;
}

@keyframes frame-draw-horizontal {
  from { width: 0; }
  to { width: 60%; }
}

@keyframes frame-draw-vertical {
  from { height: 0; }
  to { height: var(--frame-draw-height, 100%); }
}

/* ─── Mono Label ─── */
.hero__label {
  position: absolute;
  top: -20px;
  right: -40px;
  transform: translateY(-100%);
  padding: 4px 12px;
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  /* Animation */
  opacity: 0;
  animation: fade-in-up 300ms ease-out 400ms forwards;
}

/* ─── Title ─── */
.hero__title {
  font-family: var(--font-display);
  font-size: clamp(4.5rem, 14vw, 11rem);
  font-weight: 800;
  line-height: 0.88;
  letter-spacing: -0.04em;
  color: var(--color-text);
  margin: 0;
  padding: clamp(1rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 4rem);
}

.hero__title-word {
  display: inline-block;
  overflow: hidden;
  clip-path: inset(100% 0 0 0);
  animation: clip-reveal 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hero__title-word[data-word="xiao"] {
  animation-delay: 500ms;
  margin-right: 0.25em;
}

.hero__title-word[data-word="song"] {
  animation-delay: 700ms;
}

.hero__title-dot {
  display: inline-block;
  color: var(--color-accent);
  opacity: 0;
  animation: fade-in 200ms linear 900ms forwards;
}

@keyframes clip-reveal {
  from { clip-path: inset(100% 0 0 0); }
  to { clip-path: inset(0 0 0 0); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ─── Tagline ─── */
.hero__tagline {
  font-family: var(--font-display);
  font-size: clamp(0.8125rem, 1.5vw, 1rem);
  font-style: italic;
  font-weight: 400;
  color: var(--color-text-muted);
  letter-spacing: 0.02em;
  margin-top: clamp(0.75rem, 1.5vw, 1.25rem);
  opacity: 0;
  animation: fade-in-up 400ms ease-out 1000ms forwards;
}

/* ─── Description ─── */
.hero__description {
  max-width: 480px;
  font-family: var(--font-sans);
  font-size: clamp(0.9375rem, 1.2vw, 1.0625rem);
  line-height: 1.75;
  color: var(--color-text-secondary);
  text-align: center;
  margin: 0 auto;
  opacity: 0;
  animation: fade-in-up 500ms ease-out 1200ms forwards;
}

/* ─── CTA Area ─── */
.hero__cta {
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 2vw, 1.5rem);
  margin-top: clamp(1.5rem, 3vw, 2.5rem);
  opacity: 0;
  animation: fade-in-up 400ms ease-out 1400ms forwards;
}

.hero__cta-primary {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.75rem;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-surface);
  background-color: var(--color-text);
  border-radius: 100px;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.hero__cta-primary:hover {
  background-color: var(--color-accent-hover);
  transform: translateY(-1px);
}

.hero__cta-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.75rem;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
  background-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: 100px;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.hero__cta-secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent-text);
  transform: translateY(-1px);
}

/* ─── Stat Line ─── */
.hero__stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: clamp(1rem, 2vw, 1.5rem);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: var(--color-text-muted);
  opacity: 0;
  animation: fade-in-up 400ms ease-out 1600ms forwards;
}

.hero__stat-icon {
  font-size: 0.625rem;
  color: var(--color-accent);
}

/* ─── Company Logos Strip ─── */
.hero__logos {
  position: relative;
  width: 100%;
  max-width: 700px;
  margin-top: clamp(3rem, 6vw, 5rem);
  padding-top: clamp(1.5rem, 3vw, 2.5rem);
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.75rem, 1.5vw, 1.25rem);
  opacity: 0;
  animation: fade-in-up 400ms ease-out 1800ms forwards;
}

.hero__logos-label {
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.hero__logos-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1.5rem, 4vw, 3rem);
  flex-wrap: wrap;
}

.hero__logo {
  font-family: var(--font-sans);
  font-size: clamp(0.8125rem, 1.2vw, 0.9375rem);
  font-weight: 600;
  color: var(--color-text-muted);
  letter-spacing: -0.01em;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  user-select: none;
}

.hero__logo:hover {
  opacity: 1;
}

/* Individual logo typographic treatments */
.hero__logo[data-company="risd"] {
  font-family: var(--font-mono);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: clamp(0.6875rem, 1vw, 0.8125rem);
}

.hero__logo[data-company="awake"] {
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero__logo[data-company="walmart"] {
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.hero__logo[data-company="livecontrol"] {
  font-family: var(--font-sans);
  font-weight: 600;
  letter-spacing: -0.01em;
}

.hero__logo[data-company="meta"] {
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: 0.02em;
}

.hero__logo[data-company="doordash"] {
  font-family: var(--font-sans);
  font-weight: 700;
  letter-spacing: -0.01em;
}

/* ─── Reduced Motion ─── */
@media (prefers-reduced-motion: reduce) {
  .hero__frame-line,
  .hero__label,
  .hero__title-word,
  .hero__title-dot,
  .hero__tagline,
  .hero__description,
  .hero__cta,
  .hero__stat,
  .hero__logos {
    animation: none;
    opacity: 1;
    clip-path: none;
    transform: none;
  }
}

/* ─── Mobile (< 640px) ─── */
@media (max-width: 639px) {
  .hero {
    padding-top: 8rem;
    padding-bottom: 3rem;
  }

  .hero__frame {
    inset: -12px -20px;
  }

  .hero__label {
    position: relative;
    top: auto;
    right: auto;
    transform: none;
    margin-bottom: 1rem;
  }

  .hero__title {
    padding: 0.75rem 1rem;
  }

  .hero__cta {
    flex-direction: column;
    width: 100%;
  }

  .hero__cta-primary,
  .hero__cta-secondary {
    width: 100%;
    justify-content: center;
  }

  .hero__logos-row {
    gap: 1.25rem;
  }

  /* Simplify frame on mobile — only top and right lines */
  .hero__frame-line--bottom,
  .hero__frame-line--left {
    display: none;
  }
}

/* ─── Tablet (640px–1023px) ─── */
@media (min-width: 640px) and (max-width: 1023px) {
  .hero__frame {
    inset: -16px -30px;
  }

  .hero__title {
    padding: 1.25rem 2rem;
  }
}
```

---

## 6. JavaScript / Framer Motion Implementation

Since the project uses Next.js + Framer Motion, here's the React component equivalent:

```tsx
"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;
const EDITORIAL_SPRING = { stiffness: 100, damping: 18, mass: 1.2 };
const SMOOTH_SPRING = { stiffness: 200, damping: 25, mass: 1 };

const COMPANIES = [
  { name: "RISD", key: "risd" },
  { name: "Awake", key: "awake" },
  { name: "Walmart", key: "walmart" },
  { name: "LiveControl", key: "livecontrol" },
  { name: "Meta", key: "meta" },
  { name: "DoorDash", key: "doordash" },
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 500], [0, -25]);
  const frameOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const prefersReduced = useReducedMotion();
  const noMotion = !!prefersReduced;

  return (
    <section
      data-hero
      className="relative min-h-[100svh] flex flex-col items-center justify-center page-pad py-[clamp(6rem,12vw,10rem)] text-center overflow-hidden"
    >
      {/* ─── Frame Container ─── */}
      <div className="relative flex flex-col items-center mb-[clamp(2rem,4vw,3rem)]">
        {/* Editorial Frame */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            inset: "-20px -40px",
            opacity: noMotion ? 1 : frameOpacity,
          }}
        >
          {/* Top line */}
          <motion.span
            className="absolute top-0 right-0 h-px bg-border"
            initial={noMotion ? { width: "60%" } : { width: "0%" }}
            animate={{ width: "60%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          {/* Right line */}
          <motion.span
            className="absolute top-0 right-0 w-px bg-border"
            initial={noMotion ? { height: "100%" } : { height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
          />
          {/* Bottom line */}
          <motion.span
            className="absolute bottom-0 right-0 h-px bg-border"
            initial={noMotion ? { width: "60%" } : { width: "0%" }}
            animate={{ width: "60%" }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
          />
          {/* Left line (asymmetric — 70% height) */}
          <motion.span
            className="absolute bottom-0 left-0 w-px bg-border"
            initial={noMotion ? { height: "70%" } : { height: "0%" }}
            animate={{ height: "70%" }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.4 }}
          />
        </motion.div>

        {/* Mono Label — positioned top-right of frame */}
        <motion.span
          className="absolute -top-5 -right-10 -translate-y-full px-3 py-1 font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-text-muted border border-border bg-surface"
          initial={noMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
        >
          Product Designer
        </motion.span>

        {/* Title */}
        <motion.h1
          className="font-display text-[clamp(4.5rem,14vw,11rem)] font-extrabold leading-[0.88] tracking-[-0.04em] text-text p-[clamp(1rem,3vw,2.5rem)_clamp(1.5rem,4vw,4rem)]"
          style={noMotion ? undefined : { y: titleY }}
        >
          <motion.span
            className="inline-block mr-[0.25em]"
            initial={
              noMotion
                ? { clipPath: "inset(0 0 0 0)" }
                : { clipPath: "inset(100% 0 0 0)" }
            }
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
          >
            xiao
          </motion.span>
          <motion.span
            className="inline-block"
            initial={
              noMotion
                ? { clipPath: "inset(0 0 0 0)" }
                : { clipPath: "inset(100% 0 0 0)" }
            }
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
          >
            song
          </motion.span>
          <motion.span
            className="inline-block text-accent"
            initial={noMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.9 }}
          >
            .
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="font-display text-[clamp(0.8125rem,1.5vw,1rem)] italic font-normal text-text-muted tracking-[0.02em] mt-[clamp(0.75rem,1.5vw,1.25rem)]"
          initial={noMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", ...SMOOTH_SPRING, delay: 1.0 }}
        >
          Designing what comes next
        </motion.p>
      </div>

      {/* ─── Description ─── */}
      <motion.p
        className="max-w-[480px] font-sans text-[clamp(0.9375rem,1.2vw,1.0625rem)] leading-[1.75] text-text-secondary text-center mx-auto"
        initial={noMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
      >
        I design with people, not in a vacuum. Lately that means teammates,
        stakeholders, and a growing roster of AI collaborators — all in service
        of making complex things feel obvious.
      </motion.p>

      {/* ─── CTA Area ─── */}
      <motion.div
        className="flex items-center gap-[clamp(0.75rem,2vw,1.5rem)] mt-[clamp(1.5rem,3vw,2.5rem)]"
        initial={noMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 1.4 }}
      >
        <Link
          href="/work"
          className="inline-flex items-center px-7 py-3 font-sans text-sm font-medium text-surface bg-text rounded-full hover:bg-accent-hover transition-[background-color,transform] duration-200 hover:-translate-y-px"
          data-hover
        >
          View My Work
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center px-7 py-3 font-sans text-sm font-medium text-text bg-transparent border border-border rounded-full hover:border-accent hover:text-accent-text transition-[border-color,color,transform] duration-200 hover:-translate-y-px"
          data-hover
        >
          Explore Case Studies
        </Link>
      </motion.div>

      {/* ─── Stat Line ─── */}
      <motion.p
        className="flex items-center gap-2 mt-[clamp(1rem,2vw,1.5rem)] font-mono text-xs text-text-muted"
        initial={noMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 1.6 }}
      >
        <span className="text-[0.625rem] text-accent">✦</span>
        6+ years designing enterprise products
      </motion.p>

      {/* ─── Company Logos ─── */}
      <motion.div
        className="w-full max-w-[700px] mt-[clamp(3rem,6vw,5rem)] pt-[clamp(1.5rem,3vw,2.5rem)] border-t border-border flex flex-col items-center gap-[clamp(0.75rem,1.5vw,1.25rem)]"
        initial={noMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 1.8 }}
      >
        <span className="font-mono text-[0.625rem] font-medium tracking-[0.14em] uppercase text-text-muted">
          Previously at:
        </span>
        <div className="flex items-center justify-center gap-[clamp(1.5rem,4vw,3rem)] flex-wrap">
          {COMPANIES.map((company, i) => (
            <motion.span
              key={company.key}
              className="font-sans text-[clamp(0.8125rem,1.2vw,0.9375rem)] font-semibold text-text-muted opacity-60 hover:opacity-100 transition-opacity duration-200 select-none"
              initial={noMotion ? { opacity: 0.6 } : { opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: 1.8 + i * 0.08,
              }}
              data-company={company.key}
            >
              {company.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

---

## 7. Fallback Behavior

| Condition | Behavior |
|-----------|----------|
| `prefers-reduced-motion` | All animations disabled — elements appear immediately at final position. Frame lines are static. No parallax. |
| Mobile (< 640px) | Frame simplified to top + right lines only. Label repositioned above title (not absolute). CTAs stack vertically full-width. Logo row wraps to 2 rows. |
| Tablet (640–1023px) | Frame inset slightly reduced. Full animation sequence preserved. |
| Performance budget | No blur effects. No `clip-path` on more than 2 elements simultaneously. Parallax limited to single `translateY` on title only. Frame lines use simple width/height transitions (GPU-friendly, no repaints). |

---

## 8. Design Rationale

### Why this works better than the current hero:

1. **Centered composition** — The reference uses a centered layout that feels composed and intentional. The current left-aligned hero feels like a standard dev portfolio.

2. **Frame lines create editorial tension** — Thin 1px borders partially surrounding the title create the "typesetting" feeling from the reference without being heavy or decorative. The asymmetric left line (70% height) prevents the frame from feeling like a boring box.

3. **Less dead space** — The stacked elements (label → title → tagline → description → CTAs → stat → logos) fill the vertical center meaningfully. No giant empty areas.

4. **Company logos add credibility** — Just like the reference's partner strip, this grounds the hero with social proof without taking focus from the headline.

5. **Frame drawing animation** — The lines animating in (drawing themselves) creates a feeling of the page being *composed in real time* — like watching a designer lay out a grid.

### Grid-breaking element:
The left frame line only extends 70% of the height, creating asymmetry. The mono label is positioned outside the frame boundary (top-right, translated above), breaking the expected containment. This creates the editorial tension referenced in the 10x designer skill.

### Scroll behavior justification:
- Frame lines fade on scroll — they served their purpose (framing the hero moment) and gracefully recede
- Title drifts slightly upward — subtle parallax adds depth without being distracting
- Logo strip holds position slightly longer — gives the credibility markers a moment of prominence before they scroll away
