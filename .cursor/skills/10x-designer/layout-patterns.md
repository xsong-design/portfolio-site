# Layout Patterns

Reference library for the 10x Designer skill. Each pattern includes a description, when to use it, an ASCII wireframe, CSS implementation approach, responsive behavior, and guidance on when it's appropriate vs. gimmicky.

All patterns build on the project's existing 12-column grid with named asymmetric splits (`7/5`, `5/7`, `8/4`, etc.) and dark editorial aesthetic.

---

## 1. Breakout Compositions

**What:** An element — usually an image or accent shape — escapes its grid container to span full-bleed or beyond, then subsequent content snaps back into the grid. The breakout creates a visual "breath" that punctuates the rhythm of contained content.

**When to use:** Case study hero images that need full impact, transition moments between sections, a single showcase image that deserves more space than the content grid allows.

**Wireframe:**
```
├── page-padding ──────────────────── page-padding ──┤
│                                                     │
│  ┌─ content grid (max-w-page) ──────────────────┐  │
│  │  Case study title and metadata               │  │
│  │  Body text within content-max-width           │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
├─ BREAKOUT: image spans full viewport width ─────────┤
│  ┌──────────────────────────────────────────────────┐
│  │                                                  │
│  │            Full-bleed hero image                 │
│  │                                                  │
│  └──────────────────────────────────────────────────┘
│                                                     │
│  ┌─ content grid resumes ───────────────────────┐  │
│  │  Analysis text, back to content-max-width     │  │
│  └──────────────────────────────────────────────┘  │
```

**CSS approach:**
```css
.breakout {
  width: 100vw;
  margin-left: calc(-1 * var(--page-padding));
  margin-right: calc(-1 * var(--page-padding));
}

/* If inside a max-width container: */
.breakout-from-container {
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
```

**Responsive:**
- Desktop: Full-bleed creates dramatic contrast with the narrow content column
- Tablet: Same full-bleed — the contrast is even more noticeable
- Mobile: Already near full-width, so the breakout effect is subtle. Consider adding a slight negative margin (-8px each side) to push past the mobile page padding for emphasis

**Appropriate vs. gimmicky:** Use for a maximum of 2–3 breakout images per page. If every image breaks out, nothing feels contained, and the rhythm collapses. The breakout earns its impact by being rare.

---

## 2. Overlapping Card Stack

**What:** Case study cards overlap each other vertically, like a hand of cards fanned out on a table. Each card peeks out from beneath the next, with the active/hovered card lifting to full visibility.

**When to use:** Homepage case study showcase where you want to imply depth and collection. Works when you have 3–5 case studies and want them to feel like a curated stack rather than a flat list.

**Wireframe:**
```
┌─────────────────────────────────────────┐
│                                         │
│  ┌─── Card 1 (top of stack) ─────────┐ │
│  │  01  Project Title                 │ │
│  │      Brief description             │ │  ← full visibility
│  │                          [image]   │ │
│  └──────────────────────────────┐     │ │
│     ┌─── Card 2 ───────────────┤─────┘ │
│     │  02  Project Title       │        │  ← top 60px visible
│     │                          │        │
│     └──────────────────┐       │        │
│        ┌─── Card 3 ───┤───────┘        │
│        │  03  Project  │                │  ← top 60px visible
│        └───────────────┘                │
│                                         │
│  On hover Card 2: Card 2 slides up     │
│  to full height, Card 1 compresses     │
└─────────────────────────────────────────┘
```

**CSS approach:**
```css
.card-stack {
  display: flex;
  flex-direction: column;
}

.card-stack-item {
  position: sticky;
  top: var(--nav-height, 80px);
  margin-top: -60px; /* overlap amount */
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-stack-item:first-child {
  margin-top: 0;
}
```

Alternatively, use Framer Motion `layout` animations to smoothly reorder when a card is selected.

**Scroll integration:** As the user scrolls, each card sticks to the top and the next card slides up to overlap it. The stack "deals" itself as the user scrolls. Use `position: sticky` with incrementing `top` values: card 1 at `80px`, card 2 at `140px`, card 3 at `200px`.

**Responsive:**
- Desktop: Cards overlap by 60px, full asymmetric layout per card
- Tablet: Overlap reduced to 40px, content simplifies to title + image
- Mobile: No overlap — stack becomes a standard vertical list with full separation. The overlap effect doesn't work when cards are already narrow.

**Appropriate vs. gimmicky:** Works beautifully for 3–5 items. More than 5 creates an unmanageable stack. The overlap amount should reveal just enough of the next card to create curiosity (the index number + title), not so much that the composition looks cluttered.

---

## 3. Asymmetric Masonry

**What:** A multi-column layout where columns have deliberately uneven heights, creating a ragged edge. Unlike Pinterest-style masonry (which tries to balance columns), this is intentionally lopsided — the left column might extend 200px past the right, pulling the eye downward.

**When to use:** Project grids where items have varying content density, skill/tool showcases, image galleries within case studies.

**Wireframe:**
```
┌─── col 1 (7fr) ──────┬─── col 2 (5fr) ───┐
│                       │                     │
│  ┌─────────────────┐  │  ┌───────────────┐  │
│  │                 │  │  │               │  │
│  │  Tall card      │  │  │  Short card   │  │
│  │  (aspect 3:4)   │  │  │  (aspect 1:1) │  │
│  │                 │  │  │               │  │
│  │                 │  │  └───────────────┘  │
│  └─────────────────┘  │                     │
│                       │  ┌───────────────┐  │
│  ┌─────────────────┐  │  │               │  │
│  │  Medium card    │  │  │  Tall card    │  │
│  │  (aspect 4:3)   │  │  │  (aspect 2:3) │  │
│  └─────────────────┘  │  │               │  │
│                       │  │               │  │
│  ← left col ends     │  │               │  │
│    200px above right  │  └───────────────┘  │
│                       │                     │
│                       │  ← ragged edge      │
└───────────────────────┴─────────────────────┘
```

**CSS approach:**
```css
.masonry-grid {
  display: grid;
  grid-template-columns: var(--grid-split-7-5);
  gap: var(--grid-gutter);
  align-items: start; /* critical — prevents stretching to equal heights */
}

.masonry-col {
  display: flex;
  flex-direction: column;
  gap: var(--grid-gutter);
}

/* Offset the second column downward for visual asymmetry */
.masonry-col:nth-child(2) {
  margin-top: var(--overlap-md); /* 48-80px downward offset */
}
```

**The offset is the key move.** Without the `margin-top` on the second column, this is just a regular 2-column grid. The deliberate vertical offset between columns creates the editorial asymmetry — it implies the layout was hand-composed, not auto-generated.

**Responsive:**
- Desktop: 2 columns, 7/5 split, second column offset by `--overlap-md`
- Tablet: 2 columns, 6/6 split, offset reduced to `--overlap-sm`
- Mobile: Single column, no offset. Items stack naturally.

**Appropriate vs. gimmicky:** The ragged edge should look intentional. If the height difference between columns is too small (<80px), it looks like a layout bug. If too large (>300px), it wastes space. Aim for 100–200px difference.

---

## 4. Viewport-Anchored Floating Elements

**What:** Elements positioned relative to the browser viewport (using `position: fixed` or `position: sticky`) rather than the document flow. They float in place as content scrolls behind them, creating persistent visual anchors.

**When to use:** Page labels ("WORK", "ABOUT"), vertical text metadata along edges, the site title in a corner, scroll progress indicators, persistent navigation markers.

**Wireframe:**
```
┌─ viewport ──────────────────────────────────┐
│                                              │
│  W                                    [nav]  │
│  O                                           │
│  R   ┌─ scrolling content ────────────┐      │
│  K   │                                │      │
│      │  Case study cards flow         │   ↕  │  ← scroll progress
│  ↑   │  through the center of         │   █  │     bar, fixed right
│  │   │  the viewport while the        │   █  │
│  │   │  "WORK" label stays fixed      │      │
│  │   │  on the left edge              │      │
│  │   └────────────────────────────────┘      │
│  fixed                              fixed    │
│  left edge                          right    │
└──────────────────────────────────────────────┘
```

**CSS approach:**
```css
.viewport-label {
  position: fixed;
  left: var(--vertical-text-offset);
  top: 50%;
  transform: rotate(-90deg) translateX(-50%);
  transform-origin: left center;
  font-family: var(--font-mono);
  font-size: var(--text-label);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  z-index: var(--z-overlay);
  pointer-events: none;
}

.scroll-progress {
  position: fixed;
  right: var(--page-padding);
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 120px;
  background: var(--color-border);
}

.scroll-progress-fill {
  width: 100%;
  background: var(--color-accent);
  transform-origin: top;
  /* scaleY driven by scrollYProgress via Framer Motion */
}
```

**Scroll integration:** The fixed label can change text based on which section is in view. Use `IntersectionObserver` to detect the active section and swap the label text with a crossfade animation.

**Responsive:**
- Desktop: Full implementation — fixed labels on both edges, scroll progress bar
- Tablet: Remove fixed labels (viewport too narrow for edge elements). Keep scroll progress bar if desired.
- Mobile: Remove all fixed elements. The viewport is precious — no pixel should be spent on ambient decoration.

**Appropriate vs. gimmicky:** Fixed elements must be small and unobtrusive. A label in `text-label` size (11px) at 30% opacity is ambient. A full sentence fixed to the viewport is distracting. The test: if you can't read the main content without noticing the fixed element, it's too prominent.

---

## 5. Split-Screen Transitions

**What:** The page splits into two halves that slide apart (left goes left, right goes right) to reveal the next section behind them. Or: two halves slide *in* from opposite edges to assemble a new section. Creates a theatrical "curtain" moment.

**When to use:** Major section transitions — homepage hero to case studies, transitioning between case studies in a detail view, a dramatic entrance for the about page.

**Wireframe:**
```
State 1: Section A visible
┌──────────────────────────────────────┐
│                                      │
│         Section A content            │
│                                      │
└──────────────────────────────────────┘

Scroll triggers split at progress 0.5:
┌──────────┐                ┌──────────┐
│          │                │          │
│  Left    │ ←  gap grows → │  Right   │
│  half    │                │  half    │
│  slides  │                │  slides  │
│  left    │                │  right   │
└──────────┘                └──────────┘
        ┌──────────────────────┐
        │                      │
        │   Section B revealed │
        │   behind the split   │
        │                      │
        └──────────────────────┘

State 2: Section B fully visible
┌──────────────────────────────────────┐
│                                      │
│         Section B content            │
│                                      │
└──────────────────────────────────────┘
```

**CSS approach:**
```css
.split-container {
  position: relative;
  overflow: hidden;
}

.split-left, .split-right {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  /* translateX driven by scroll progress via Framer Motion */
}

.split-left {
  left: 0;
  /* transform: translateX(calc(scrollProgress * -100%)) */
}

.split-right {
  right: 0;
  /* transform: translateX(calc(scrollProgress * 100%)) */
}

.split-reveal {
  position: absolute;
  inset: 0;
  z-index: -1; /* sits behind the splitting halves */
}
```

**Framer Motion sketch:**
```tsx
function SplitTransition({ frontContent, revealContent }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const leftX = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Reveal layer */}
        <div className="absolute inset-0 z-0">{revealContent}</div>

        {/* Splitting halves */}
        <motion.div className="absolute left-0 top-0 w-1/2 h-full z-10"
                    style={{ x: leftX }}>
          {/* Left half of frontContent */}
        </motion.div>
        <motion.div className="absolute right-0 top-0 w-1/2 h-full z-10"
                    style={{ x: rightX }}>
          {/* Right half of frontContent */}
        </motion.div>
      </div>
    </section>
  );
}
```

**Responsive:**
- Desktop: Full split effect — both halves slide apart dramatically
- Tablet: Same effect, slightly faster scroll range (less scroll height needed)
- Mobile: Replace with a simple vertical crossfade. The split-screen effect requires width to feel spatial — on narrow screens it just looks like two thin strips sliding away.

**Appropriate vs. gimmicky:** Use ONCE per site, maximum. This is a showstopper transition — the homepage-to-content divider, or the entrance to the first case study. Using it repeatedly cheapens the impact. The reveal content must be worth the buildup.

---

## 6. Negative Space as Interaction Zone

**What:** Large intentionally empty areas of the page that aren't static — they respond to cursor movement with subtle visual effects. A gradient that follows the cursor, a slight depth shift in background elements, or particles that drift toward/away from the pointer.

**When to use:** Hero sections with minimal content (just the name and title), about page with lots of breathing room, any "pause" section that benefits from ambient interactivity.

**Wireframe:**
```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│                                         │
│                    ·                    │  ← subtle radial gradient
│              · · ·   · · ·             │     follows cursor position
│           ·                 ·          │     (very low opacity, ~0.03)
│              · · ·   · · ·             │
│                    ·                    │
│                                         │
│     xiao song.                          │  ← content sits within
│     product designer                    │     the reactive space
│                                         │
│                                         │
└─────────────────────────────────────────┘
```

**CSS approach (gradient follow):**
```css
.interactive-space {
  position: relative;
  background: var(--color-bg);
}

.cursor-gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    600px circle at var(--cursor-x, 50%) var(--cursor-y, 50%),
    rgba(220, 38, 38, 0.03),
    transparent 70%
  );
}
```

The `--cursor-x` and `--cursor-y` custom properties are updated via JavaScript `mousemove` event, throttled to `requestAnimationFrame`.

**Framer Motion sketch:**
```tsx
function InteractiveSpace({ children }) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <motion.div onMouseMove={handleMouseMove} className="relative">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${smoothX.get() * 100}% ${smoothY.get() * 100}%, rgba(220,38,38,0.03), transparent 70%)`
        }}
      />
      {children}
    </motion.div>
  );
}
```

**Design note:** The opacity of the cursor-following effect must be extremely low (0.02–0.05). The user should feel something subtle happening without being able to pinpoint exactly what. On the dark background, even 0.03 opacity of the red accent creates a perceptible warmth that follows the cursor.

**Responsive:**
- Desktop: Full cursor-tracking gradient
- Tablet: Reduced to touch-start position only (no continuous tracking)
- Mobile: Disabled. No cursor on touch devices. The space reverts to static.

**Appropriate vs. gimmicky:** The effect must be invisible at first glance. If someone screenshots the page, the gradient should not be visible. It's felt during interaction, not seen in stills. If the effect is visible enough to see in a screenshot, reduce the opacity.

---

## 7. Type as Architecture

**What:** Headlines that aren't just text *in* a layout — they ARE the layout. Massive display type that spans multiple grid rows and columns, with body text and images flowing around the letterforms. The headline becomes a structural element, like a wall in a floor plan.

**When to use:** Homepage hero (the name "xiao song." as a space-defining element), section entrances where the heading dominates, case study titles that set the scale of the page.

**Wireframe:**
```
┌─────────────────────────────────────────────────┐
│                                                   │
│  ┌─ grid-col 1-8 ──────────────────────┐         │
│  │                                      │         │
│  │  x i a o                             │         │
│  │                                      │         │
│  │  s o n g .                           │  meta   │  ← metadata in
│  │                                      │  data   │     col 9-12
│  └──────────────────────────────────────┘  sits   │     vertically
│                                            beside │     aligned to
│  ┌─ grid-col 1-5 ─┐ ┌─ grid-col 6-12 ─────────┐ │     the type
│  │ Product         │ │                           │ │
│  │ designer        │ │  [hero image or           │ │
│  │ at Meta         │ │   geometric composition]  │ │
│  │                 │ │                           │ │
│  └─────────────────┘ └───────────────────────────┘ │
│                                                   │
│  The type "xiao song." is 10rem+ tall.            │
│  It defines the spatial rhythm of everything      │
│  below it. Body text aligns to the baseline       │
│  of "song." — creating a visual anchor.           │
└───────────────────────────────────────────────────┘
```

**CSS approach:**
```css
.type-hero {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  gap: var(--grid-gutter);
}

.type-headline {
  grid-column: 1 / 9;
  grid-row: 1;
  font-family: var(--font-display);
  font-size: var(--text-display); /* clamp(4rem, 12vw, 10rem) */
  line-height: 0.9;
  letter-spacing: -0.03em;
}

.type-meta {
  grid-column: 9 / 13;
  grid-row: 1;
  align-self: end; /* bottom-align metadata to the headline baseline */
  font-family: var(--font-mono);
  font-size: var(--text-label);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.type-subtitle {
  grid-column: 1 / 6;
  grid-row: 2;
}

.type-visual {
  grid-column: 6 / 13;
  grid-row: 2;
}
```

**The alignment trick:** The metadata column (`grid-column: 9/13`) uses `align-self: end` to bottom-align with the massive headline. This creates a visual connection — the small mono text "hangs" from the same baseline as the serif display type. The scale contrast (10rem vs 0.6875rem) is what makes it editorial.

**Responsive:**
- Desktop: Full 8/4 split, type at max scale (10rem), metadata beside it
- Tablet: Type spans full width, metadata moves below the headline, still right-aligned
- Mobile: Type at minimum clamp (4rem), stacked vertically. The "architecture" effect diminishes at small sizes — compensate by increasing spacing above/below the headline to preserve its dominance.

**Appropriate vs. gimmicky:** Type-as-architecture only works at large scale. If the display type is smaller than 3rem, it's just a heading, not a structural element. The technique requires confidence — the type must be so large that it feels like a deliberate design move, not an accident. Below 3rem, switch to conventional layout.

---

## 8. Diagonal / Angled Sections

**What:** Sections with non-rectangular boundaries — created with `clip-path`, `transform: skewY()`, or angled SVG dividers. The diagonal line breaks the horizontal monotony of stacked rectangular sections, creating visual velocity and forward momentum.

**When to use:** Transitions between major page sections (hero → content, content → footer), to imply movement or progress, to connect two sections that have different background colors.

**Wireframe:**
```
┌──────────────────────────────────────┐
│                                      │
│         Section A (dark bg)          │
│                                      │
│                                 ╱────┤
│                            ╱────     │
│                       ╱────          │  ← diagonal divider
│                  ╱────               │     (3-5deg angle)
├─────────────╱────                    │
│                                      │
│         Section B (accent bg)        │
│                                      │
└──────────────────────────────────────┘
```

**CSS approach:**
```css
/* Option A: clip-path on the section itself */
.angled-section {
  clip-path: polygon(0 0, 100% 4%, 100% 100%, 0 96%);
  padding-top: 8rem; /* extra padding to compensate for clipped corners */
  padding-bottom: 8rem;
  margin-top: -4rem; /* overlap to prevent gap */
}

/* Option B: pseudo-element divider (more flexible) */
.section-with-angle::after {
  content: '';
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  height: 80px;
  background: inherit;
  transform: skewY(-3deg);
  transform-origin: left;
  z-index: 1;
}
```

**Design note:** Keep angles subtle — 2 to 5 degrees maximum. Steep angles look like error states. The diagonal should suggest movement, not create a jarring geometric clash. The angle direction (top-left to bottom-right vs. top-right to bottom-left) implies reading direction — match the cultural reading direction (left-to-right, top-to-bottom in English) for a "moving forward" feel.

**Scroll integration:** The angle can be scroll-driven — starting at 0deg and increasing to 3deg as the section enters view. This makes the diagonal feel like it's *forming* as the user scrolls, adding dynamism.

**Responsive:**
- Desktop: Full diagonal at 3–5deg, with generous overlap padding
- Tablet: Reduce angle to 2–3deg — less dramatic but still present
- Mobile: Reduce to 1–2deg or replace with a straight horizontal line. On narrow screens, sharp diagonals create awkward triangular whitespace at the edges.

**Appropriate vs. gimmicky:** Angled sections became a design trend in 2016–2018 and were overused. To avoid looking dated: use a maximum of ONE angled transition per page, keep the angle extremely subtle, and only use it where the section backgrounds differ (the angle needs a color change to be visible). Never angle a section boundary between two same-colored sections — it adds visual noise with no payoff.
