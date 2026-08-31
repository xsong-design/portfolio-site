# Homepage Case Study Section — Design Options

Three distinct approaches for stacked, parallax-driven case study presentation. All replace the current asymmetric 7/5 grid with vertical layouts that scale to 4+ projects.

---

## Option A: "Sticky Theater"

### Concept
Each project occupies a full-viewport "act." The project image pins to the viewport while a compact info card slides up from the bottom and docks beneath it. As the user scrolls past, the current project compresses and fades while the next project's image scales up from behind — like pulling back a curtain to reveal the next scene.

### ASCII Wireframe

```
┌─ viewport ────────────────────────────────────────────────┐
│                                                           │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                                                     │  │
│  │                                                     │  │
│  │              PROJECT IMAGE (pinned)                  │  │
│  │              aspect-ratio: 16/9                      │  │
│  │              max-width: 1060px, centered             │  │
│  │                                                     │  │
│  │                                                     │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  ┌──────────────────────────────────┐                     │
│  │ 01  Marketing Message Liquidity  │  ← info card       │
│  │     Redesigning message delivery │    slides up,       │
│  │     META · 2025                  │    docks here       │
│  └──────────────────────────────────┘                     │
│                                                           │
└───────────────────────────────────────────────────────────┘

Scroll deeper → current image scales(0.92), opacity(0.4), translateY(-40px)
             → next image is already positioned behind at scale(1.05)
             → next image settles to scale(1.0) as it takes focus

┌─ transition state ────────────────────────────────────────┐
│                                                           │
│  ┌─ outgoing image ────────────────┐  opacity: 0.4       │
│  │  (compressing, fading)          │  scale: 0.92        │
│  └─────────────────────────────────┘  z-index: 10        │
│                                                           │
│  ┌─ incoming image ────────────────────────────────────┐  │
│  │                                                     │  │
│  │         NEXT PROJECT IMAGE (taking over)            │  │
│  │         scale: 1.05 → 1.0                          │  │
│  │                                                     │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  02  Driver Tipping at Walmart     ← new info fades in    │
│      Designing tipping for drivers                        │
│      WALMART · 2024                                       │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

### Scroll Choreography

Each project occupies `100vh` of scroll distance (the section total height = `projectCount * 100vh + 100vh` for the exit).

**Project enters (scroll progress 0.0–0.2 of its segment):**
```
Image:      clipPath inset(8% 8% 8% 8%) → inset(0% 0% 0% 0%)
            scale: 1.05 → 1.0
            spring: editorial (stiffness:100, damping:18, mass:1.2)

Info card:  opacity 0 → 1, y: 40px → 0px
            stagger: index at t+0ms, title at t+80ms, desc at t+160ms, tag at t+240ms
            spring: smooth (stiffness:200, damping:25)
```

**Project in-view (scroll progress 0.2–0.7):**
```
Image:      pinned (position: sticky, top: 15vh)
            subtle parallax drift at 0.05x rate (barely perceptible)

Info card:  static, fully visible

Index "01": color transitions from text-muted (#6B6B73) to accent (#E54D2E)
            at progress 0.3, duration 300ms
```

**Project exits (scroll progress 0.7–1.0):**
```
Image:      scale 1.0 → 0.92
            opacity 1.0 → 0.3
            translateY: 0 → -40px
            spring: gentle (stiffness:120, damping:20)

Info card:  opacity 1 → 0, y: 0 → -20px
            duration: 200ms, ease-out

Accent rect: slides out to the right, translateX: 0 → 120%
             duration: 400ms, cubic-bezier(0.22, 1, 0.36, 1)
```

### Description Area Spec

```
┌─ info card ──────────────────────────────────────────┐
│                                                      │
│  01    Marketing Message Liquidity                   │
│  ↑     ↑ Playfair Display, 22px, weight 600         │
│  │     │ letter-spacing: -0.01em                     │
│  │                                                   │
│  │     Redesigning how businesses manage and         │
│  │     optimize message delivery at scale            │
│  │     ↑ DM Sans, 15px, color: text-secondary       │
│  │                                                   │
│  │     META · 2025                                   │
│  │     ↑ JetBrains Mono, 11px, uppercase,           │
│  │       letter-spacing: 0.12em, color: text-muted  │
│  │                                                   │
│  JetBrains Mono, 48px, weight 700                    │
│  color: accent at 30% opacity                        │
│  line-height: 1                                      │
└──────────────────────────────────────────────────────┘

Layout: flex row, gap 32px
Index number on the left, text content block on the right
Positioned below image with margin-top: 32px
Max-width: 600px, aligned to left edge of the image
```

### How It Scales

- **2 projects:** Section height = `300vh`. Feels like a focused portfolio with two "acts."
- **4 projects:** Section height = `500vh`. Each project gets its dedicated moment — no crowding.
- **6 projects:** Section height = `700vh`. Still works but consider adding a mini progress indicator (dots on the right edge) showing which project is active.

The pattern is inherently scalable — each project is an identical module. Adding a project = adding one more `100vh` segment.

### Key CSS Approach

```css
.case-study-theater {
  position: relative;
  /* height = (projectCount * 100vh) + 100vh for exit space */
}

.case-study-stage {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 64px;
  overflow: hidden;
}

.case-study-image {
  width: 100%;
  max-width: 1060px;
  aspect-ratio: 16 / 9;
  will-change: transform, opacity;
}

.case-study-info {
  position: absolute;
  bottom: 12vh;
  left: 64px;
  max-width: 600px;
  display: flex;
  gap: 32px;
  align-items: flex-start;
}
```

Framer Motion drives `scrollYProgress` per-segment, mapping to transform/opacity values on each project layer.

### Mobile Behavior (< 768px)

- Sticky pinning removed — projects stack normally in document flow
- Each project: full-width image (aspect-ratio 3/2) + info below
- Info card: index removed (saves space), title + desc + tag stacked
- Entry animation simplified: fade-in + translateY(16px), spring: smooth
- No clip-path reveal (performance)
- Spacing between projects: 64px

### Fallbacks

- **`prefers-reduced-motion`:** No scale/clip animations. Projects appear in a static vertical stack. Info cards visible immediately.
- **Performance budget:** 1 `will-change: transform` layer per visible project (max 2 during transitions). clip-path only on the entering image.

---

## Option B: "Split Scroll"

### Concept
The viewport splits into two columns. The left column (40%) holds the project info (index, title, description, tag) and stays pinned. The right column (60%) contains full-bleed project images that scroll naturally. As each image aligns with the center of the viewport, the left-column info crossfades to match. An accent rectangle slides between projects on the left side, acting as a visual "bookmark."

### ASCII Wireframe

```
┌─ viewport ────────────────────────────────────────────────┐
│                                                           │
│  ┌── LEFT (pinned) ──────┐  ┌── RIGHT (scrolls) ──────┐  │
│  │                        │  │                          │  │
│  │  01                    │  │  ┌────────────────────┐  │  │
│  │                        │  │  │                    │  │  │
│  │  Marketing             │  │  │                    │  │  │
│  │  Message               │  │  │   PROJECT 1 IMG    │  │  │
│  │  Liquidity             │  │  │   aspect: 4/3      │  │  │
│  │                        │  │  │                    │  │  │
│  │  Redesigning how       │  │  │                    │  │  │
│  │  businesses manage...  │  │  └────────────────────┘  │  │
│  │                        │  │                          │  │
│  │  META · 2025           │  │         ↕ 120px gap      │  │
│  │                        │  │                          │  │
│  │  ████ accent rect      │  │  ┌────────────────────┐  │  │
│  │  (tracks active)       │  │  │                    │  │  │
│  │                        │  │  │   PROJECT 2 IMG    │  │  │
│  └────────────────────────┘  │  │   (approaching)    │  │  │
│                              │  │                    │  │  │
│                              │  └────────────────────┘  │  │
│                              │                          │  │
└──────────────────────────────┴──────────────────────────┘

As Project 2 image scrolls to viewport center:
  - Left info crossfades: "01" → "02", title/desc/tag update
  - Accent rect slides down 80px to new position
  - Project 1 image: opacity 1.0 → 0.5, scale 1.0 → 0.97
```

### Scroll Choreography

Section total height: `projectCount * 80vh + 50vh` (padding for first/last alignment).

**Image approaching center (scroll progress per-image: 0.0–0.4):**
```
Image:      opacity 0.4 → 1.0
            scale: 0.95 → 1.0
            filter: none (no blur — performance)
            spring: smooth (stiffness:200, damping:25)

Left info:  Current text fades out — opacity 1→0, y: 0→-12px, duration 150ms
            New text fades in — opacity 0→1, y: 12px→0, duration 300ms
            stagger: index(0ms), title(60ms), desc(120ms), tag(180ms)
            spring: smooth
```

**Image at center (scroll progress 0.4–0.6):**
```
Image:      full opacity, scale 1.0 — resting state
            subtle translateY parallax at 0.08x rate

Left info:  fully visible, static

Accent rect: at its "docked" position for this project
             width: 80px, height: 4px
             background: accent (#E54D2E)
             positioned left-aligned below the tag
```

**Image leaving center (scroll progress 0.6–1.0):**
```
Image:      opacity 1.0 → 0.5
            scale 1.0 → 0.97
            translateY: continues at 0.08x parallax (scrolls away naturally)

Left info:  holds until next image reaches 0.4 progress
            then crossfade triggers
```

**Accent rect movement (between project switches):**
```
Rect translateY: animates to new vertical position over 400ms
Spring: snappy (stiffness:300, damping:30, mass:0.5)
The rect "jumps" to the next project's position, slight overshoot visible
```

### Description Area Spec

```
LEFT COLUMN — Pinned (position: sticky; top: 50%; transform: translateY(-50%))
Width: 40% of viewport (minus page margin)
Padding-right: 64px

┌─────────────────────────────────┐
│                                 │
│  01                             │  JetBrains Mono, 64px, weight 700
│                                 │  color: accent at 25% opacity
│                                 │  margin-bottom: 24px
│                                 │
│  Marketing                      │  Playfair Display, 32px, weight 600
│  Message                        │  letter-spacing: -0.02em
│  Liquidity                      │  line-height: 1.1
│                                 │  margin-bottom: 16px
│                                 │
│  Redesigning how businesses     │  DM Sans, 15px, weight 400
│  manage and optimize message    │  line-height: 1.7
│  delivery at scale              │  color: text-secondary (#4A4A4A)
│                                 │  margin-bottom: 16px
│                                 │  max-width: 320px
│                                 │
│  META · 2025                    │  JetBrains Mono, 11px, weight 500
│                                 │  letter-spacing: 0.12em, uppercase
│                                 │  color: text-muted (#6B6B73)
│                                 │  margin-bottom: 24px
│                                 │
│  ████████████                   │  80px × 4px, background: accent
│  (accent marker)                │  transition: translateY, spring: snappy
│                                 │
└─────────────────────────────────┘
```

### How It Scales

- **2 projects:** The left-side content switches once. Short section but the split layout still reads well — the pinned info prevents the section from feeling sparse.
- **4 projects:** Ideal. Each image gets breathing room in the scroll. The left info acts as a persistent "now reading" indicator.
- **6 projects:** Add a vertical dot-nav on the far left edge (6 dots, active one = accent color) so users can orient themselves. Images can reduce gap from 120px to 80px to avoid excessive scroll length.

Adding a project = adding one image to the right column + one data entry. The left column auto-updates via scroll detection.

### Key CSS Approach

```css
.split-scroll-section {
  position: relative;
  /* height calculated dynamically: projectCount * 80vh + 50vh */
}

.split-scroll-left {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 64px;
  padding-right: 64px;
}

.split-scroll-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  padding: 50vh 64px;
  display: flex;
  flex-direction: column;
  gap: 120px;
}

.split-scroll-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  will-change: transform, opacity;
}
```

Detection logic: `IntersectionObserver` on each image with `threshold: 0.5` and `rootMargin: "-25% 0px"` — fires when an image crosses the viewport center.

### Mobile Behavior (< 768px)

- Split layout collapses to single column
- Each project becomes: image (full-width, aspect-ratio 3/2) with info stacked below
- Info: title (Playfair, 20px) + desc (14px) + tag — all left-aligned
- Index number hidden on mobile (saves vertical space)
- Projects separated by 48px gap
- Entry: stagger reveal (image first, then info at +100ms), spring: smooth
- No sticky behavior, no crossfade — just a clean vertical stack

### Fallbacks

- **`prefers-reduced-motion`:** Sticky positioning remains (it's layout, not animation). Crossfade replaced with instant swap. No scale/opacity transitions on images. Accent rect jumps without spring.
- **Performance budget:** Left column is a single sticky layer. Right column images use `will-change: transform` only when within 200px of viewport (added/removed via IntersectionObserver). Max 2 composited layers at any time.

---

## Option C: "Parallax Stack"

### Concept
Projects stack vertically like cards on a table, each one slightly overlapping the previous. As the user scrolls, each card has its own parallax rate — the image moves at 0.85x while the info area moves at 1.0x (normal), creating a subtle depth separation within each card. A large index number (oversized, at 20% opacity) drifts at 0.6x behind the card, acting as a background depth layer. Between cards, an accent line grows horizontally to signal the transition.

### ASCII Wireframe

```
┌─ viewport (scrolling down) ───────────────────────────────┐
│                                                           │
│                              0 1    ← index, 120px,      │
│                                       parallax 0.6x,     │
│  ┌─────────────────────────────────────────┐  z-index: 0 │
│  │                                         │              │
│  │                                         │              │
│  │         PROJECT 1 IMAGE                 │  ← parallax  │
│  │         aspect: 16/10                   │    rate 0.85x│
│  │         max-width: 900px                │              │
│  │                                         │              │
│  │                                         │              │
│  └─────────────────────────────────────────┘              │
│                                                           │
│  Marketing Message Liquidity         META · 2025          │
│  Redesigning how businesses          ↑ tag, right-aligned │
│  manage message delivery...                               │
│  ↑ info, moves at 1.0x (normal scroll)                    │
│                                                           │
│  ─────────────────────── (accent line grows on scroll)    │
│                                                           │
│                              0 2    ← next index drifting │
│  ┌─────────────────────────────────────────┐              │
│  │                                         │              │
│  │         PROJECT 2 IMAGE                 │              │
│  │         (partially visible,             │              │
│  │          entering from below)           │              │
│  │                                         │              │
│  └─────────────────────────────────────────┘              │
│                                                           │
│  Driver Tipping at Walmart           WALMART · 2024       │
│  Designing tipping for drivers                            │
│                                                           │
│  ─────────────────────────                                │
│                                                           │
│                              0 3                          │
│  ┌─────────────────────────────────────────┐              │
│  │         PROJECT 3 IMAGE                 │              │
│  └─────────────────────────────────────────┘              │
│  ...                                                      │
│                                                           │
└───────────────────────────────────────────────────────────┘

Detail — overlap zone between projects:

│  └─── Project 1 image ───┘                                │
│                            ← 24px margin-bottom           │
│  title + desc              ← info at 1.0x                 │
│                            ← 48px margin-bottom           │
│  ════════════════════════  ← accent line, grows L→R       │
│                            ← 48px margin-top              │
│           0 2              ← bg index, already drifting   │
│  ┌─── Project 2 image ───┐  (overlaps by ~60px w/ index) │
```

### Scroll Choreography

No pinning — all elements are in normal document flow but with per-element parallax rates creating depth.

**Per-project entry (IntersectionObserver, threshold 0.15):**
```
Background index:  already in position (parallax handles movement)
                   opacity: 0 → 0.2 over 600ms, ease: editorial
                   translateY driven by parallax at 0.6x

Image:             clipPath: inset(0 0 100% 0) → inset(0 0 0% 0)
                   (curtain rise from bottom)
                   duration: 700ms, ease: cubic-bezier(0.22, 1, 0.36, 1)
                   once complete, parallax takes over at 0.85x

Info (title):      opacity 0→1, y: 24→0, delay: 300ms after image starts
                   spring: smooth (stiffness:200, damping:25)

Info (desc):       opacity 0→1, y: 24→0, delay: 400ms
                   spring: smooth

Info (tag):        opacity 0→1, y: 16→0, delay: 500ms
                   spring: smooth

Accent line:       scaleX: 0→1, transform-origin: left
                   delay: 600ms, duration: 500ms
                   ease: cubic-bezier(0.22, 1, 0.36, 1)
```

**In-view behavior (continuous scroll-linked):**
```
Background index:  translateY at 0.6x parallax rate
                   creates "lagging behind" depth — number seems far away

Image:             translateY at 0.85x parallax rate
                   moves slightly slower than normal scroll
                   creates subtle "weighted" feeling, like the image has mass

Info text:         translateY at 1.0x (normal flow, no parallax)
                   moves with the page — creates separation from image

Net effect:        As user scrolls, info "slides over" the image slightly
                   Index falls behind both — 3-layer depth: bg / image / text
```

**Exit (as project scrolls well above viewport):**
```
No explicit exit animation — parallax naturally separates layers
The background index drifts away slowest (0.6x)
Image drifts away at 0.85x
Info scrolls normally (1.0x)
This creates a "peeling apart" effect as items leave the viewport
```

### Description Area Spec

```
┌─ info row ──────────────────────────────────────────────────┐
│                                                             │
│  Marketing Message Liquidity              META · 2025       │
│  ↑                                        ↑                 │
│  Playfair Display, 24px, weight 600       JetBrains Mono    │
│  letter-spacing: -0.01em                  11px, weight 500  │
│  color: text (#1A1A1A)                    uppercase          │
│                                           letter-spacing:    │
│  Redesigning how businesses manage        0.12em            │
│  and optimize message delivery            color: text-muted │
│  ↑                                                          │
│  DM Sans, 15px, weight 400                                  │
│  line-height: 1.6                                           │
│  color: text-secondary (#4A4A4A)                            │
│  max-width: 480px                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Layout: flexbox, justify-content: space-between, align-items: flex-start
Full width of the image container (max-width: 900px)
margin-top: 24px below the image

Background index positioning:
  - position: absolute (relative to the project container)
  - top: -60px, right: 0
  - JetBrains Mono, 120px, weight 700
  - color: text (#1A1A1A) at 8% opacity
  - z-index: 0 (behind image at z-index: 1)
```

### How It Scales

- **2 projects:** Minimal. The parallax depth still works but the section feels short. Consider increasing spacing between cards to 96px.
- **4 projects:** Sweet spot. The repeating rhythm of image → info → accent line → index creates a predictable-but-satisfying cadence. The varying parallax rates keep it from feeling monotonous.
- **6 projects:** Add a subtle "scroll progress" element — a vertical line on the right margin that fills as the user moves through the case study section. Beyond 6, consider grouping into categories or hiding less-important projects behind a "View all" threshold (show first 4, link to rest).

Adding a project = duplicating the card module. Each card is self-contained and order-independent.

### Key CSS Approach

```css
.parallax-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0; /* spacing handled per-card */
  padding: 0 64px;
}

.parallax-card {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin-bottom: 96px;
}

.parallax-card__index {
  position: absolute;
  top: -60px;
  right: 0;
  font-family: var(--font-mono);
  font-size: 120px;
  font-weight: 700;
  color: rgba(26, 26, 26, 0.08);
  line-height: 1;
  z-index: 0;
  will-change: transform;
  /* parallax applied via useTransform, rate: 0.6x */
}

.parallax-card__image {
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  will-change: transform;
  /* parallax applied via useTransform, rate: 0.85x */
}

.parallax-card__info {
  position: relative;
  z-index: 2;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* moves at normal scroll rate (1.0x) — no transform needed */
}

.parallax-card__divider {
  width: 100%;
  height: 1px;
  background: var(--color-accent);
  margin-top: 48px;
  transform: scaleX(0);
  transform-origin: left;
  /* animated via IntersectionObserver trigger */
}
```

Parallax implementation: each `__index` and `__image` uses Framer Motion's `useScroll` + `useTransform` targeting their parent card container with offset `["start end", "end start"]`.

### Mobile Behavior (< 768px)

- Parallax rates reduced: image at 0.95x (barely perceptible), index hidden entirely
- Image aspect-ratio changes to 3/2 (taller, better for portrait phones)
- Max-width: 100% (full bleed to page margins at 20px)
- Info layout: stacked (no flex-row), tag moves below description
- Title: Playfair 20px
- Accent line: still grows on scroll entry but width caps at 60px (decorative dash rather than full-width rule)
- Spacing between projects: 64px
- Clip-path reveal simplified to opacity fade (no inset animation)

### Fallbacks

- **`prefers-reduced-motion`:** All parallax disabled (elements move at 1.0x). Clip-path reveal replaced with immediate visibility. Accent line appears instantly. Stagger delays removed.
- **Performance budget:** 3 parallax layers per card × max 2 cards visible = 6 composited layers. This is within budget. `will-change` only applied when card is within 300px of viewport (toggled via IntersectionObserver). Clip-path animation limited to one card at a time (subsequent cards wait until the previous reveal completes, naturally gated by scroll position).

---

## Comparison Matrix

| Criterion | A: Sticky Theater | B: Split Scroll | C: Parallax Stack |
|-----------|-------------------|-----------------|-------------------|
| **Wow factor** | High — cinematic transitions | Medium-high — elegant split | Medium — subtle depth |
| **Complexity** | High (scroll-linked transforms, layered z-management) | Medium (IntersectionObserver + crossfade) | Low-medium (per-element parallax) |
| **Performance** | Moderate (clip-path + scale per project) | Light (sticky + opacity) | Light (transform-only parallax) |
| **Mobile graceful degradation** | Falls back to simple stack | Falls back to simple stack | Stays close to desktop feel (just reduced parallax) |
| **Scroll length** | Long (100vh per project) | Medium (80vh per project) | Short (natural content height + spacing) |
| **Scales to 6+** | Needs progress indicator | Needs dot-nav | Works naturally |
| **Best for** | Portfolio with 3-4 hero projects | Portfolios that want editorial control | Portfolios that want fast, scannable flow |
| **Grid break** | Image bleeds via clip-path overshoot | Index number overlaps the split boundary | Background index overlaps image top edge |

---

## Recommendation

**Option C (Parallax Stack)** is the safest bet for scaling to 4+ projects while remaining performant and feeling premium without overwhelming the viewer. It's the closest to "fancy parallax scroll" without scroll-jacking, and it degrades gracefully on every device.

**Option A (Sticky Theater)** delivers the most cinematic experience if Xiao wants each project to feel like a dedicated moment. Best for 3-4 projects where each one deserves a "full-screen takeover."

**Option B (Split Scroll)** is the most editorial — it separates content from visuals and creates a reading-like experience. Best if Xiao plans to add more descriptive text per project in the future.

All three can coexist with the current hero and footer sections without modification.
