# Scroll Choreography Patterns

Reference library for the 10x Designer skill. Each pattern includes a description, when to use it, a Framer Motion implementation sketch, performance notes, and `prefers-reduced-motion` fallback.

All patterns assume the project's existing spring presets (`snappy`, `smooth`, `gentle`, `editorial`) and the dark editorial aesthetic.

---

## 1. Staggered Reveal Sequence

**What:** Content elements appear one by one as a section enters the viewport. Each element animates from a shared direction with increasing delay — creating a "cascade" effect that reads like items being placed on a table.

**When to use:** Section entrances with 3+ sibling elements — case study metadata fields, skill tags, project cards in a grid, navigation items on page load.

**Choreography:**
```
Scroll enters viewport trigger (threshold: 0.15)
  t+0ms:    Element 1 — opacity 0→1, y: 30→0, spring: smooth
  t+60ms:   Element 2 — same
  t+120ms:  Element 3 — same
  t+180ms:  Element 4 — same
```

**Framer Motion sketch:**
```tsx
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 200, damping: 25 }
  }
};

<motion.div
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
>
  {items.map(item => (
    <motion.div key={item.id} variants={item} />
  ))}
</motion.div>
```

**Variations:**
- **Directional stagger** — items enter from alternating sides (left, right, left, right) for an asymmetric feel. Use `x: -30` for even indices, `x: 30` for odd.
- **Dramatic stagger** — increase delay to 150ms for hero-level sequences where each element deserves its own moment.
- **Scale stagger** — add `scale: 0.95→1` alongside the y-shift for a "materializing" feel.

**Performance:** Lightweight. Transform + opacity only — composited on GPU. Safe for unlimited items.

**Reduced motion:** Show all elements immediately, no stagger. `transition: { duration: 0 }`.

**Mobile:** Keep the stagger but reduce y-offset to 16px (less dramatic vertical shift on small screens).

---

## 2. Parallax Depth Layers

**What:** Multiple elements move at different scroll rates, creating an illusion of z-depth. Background elements drift slowly, content moves normally, foreground elements move faster — the viewport becomes a diorama.

**When to use:** Hero sections, case study header areas, any composition with geometric shapes + content + imagery that benefits from perceived depth.

**Choreography:**
```
Layer 0 — Background shapes:   scroll rate 0.1x  (barely moves)
Layer 1 — Index numbers:        scroll rate 0.15x (slow drift)
Layer 2 — Content (text, cards): scroll rate 1.0x  (normal)
Layer 3 — Foreground shapes:    scroll rate 0.3x  (moderate drift)
Layer 4 — Accent rectangles:    scroll rate 0.5x  (noticeable movement)
```

The key: layers closer to the viewer (higher z-index) move *less* than the content, creating the feeling that they're floating in front. Background layers also move less, as if far away.

**Framer Motion sketch:**
```tsx
function ParallaxLayer({ rate, children, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [rate * -100, rate * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// Usage in a hero composition:
<div className="relative">
  <ParallaxLayer rate={0.1} className="absolute z-shapes">
    <Circle size="lg" color="geometric-light" />
  </ParallaxLayer>

  <div className="relative z-content">
    <h1>xiao song.</h1>
  </div>

  <ParallaxLayer rate={0.3} className="absolute z-overlay">
    <AccentRect />
  </ParallaxLayer>
</div>
```

**Depth illusion formula:**
- Negative rates (e.g., -0.1) make elements scroll *faster* than content — feels like they're behind the screen
- Rates between 0 and 1 make elements scroll slower — feels like they're floating in front
- Never exceed 0.5x for non-content layers — higher rates feel jarring and break the illusion

**Performance:** Each parallax layer is a separate composited element. Cap at 5 layers per viewport. Avoid parallax on elements with complex children (text blocks, images with filters).

**Reduced motion:** All layers move at 1.0x (no parallax). Elements remain in their default positions.

**Mobile:** Reduce to 2 layers max (content + one background shape). Remove foreground parallax entirely — small screens can't afford the visual complexity.

---

## 3. Scroll-Triggered State Changes

**What:** A section transforms its visual properties as it crosses a scroll threshold — background color shifts, layout reflows, elements swap positions. The section itself is the animation.

**When to use:** Transitioning between major content areas (homepage → case studies), signaling a mood shift, creating a "chapter break" in the scroll narrative.

**Choreography:**
```
Scroll progress 0.0–0.3:  Section bg = #0A0A0A (default dark)
Scroll progress 0.3–0.5:  Section bg transitions to #DC2626 (accent red)
                           Text color inverts to #0A0A0A
                           Geometric shapes fade out (opacity 1→0)
Scroll progress 0.5–0.7:  Red section holds — hero moment for a key stat or quote
Scroll progress 0.7–1.0:  Bg transitions back to #0A0A0A
                           Next section's content begins revealing
```

**Framer Motion sketch:**
```tsx
function ColorShiftSection({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    ["#0A0A0A", "#0A0A0A", "#DC2626", "#DC2626", "#0A0A0A"]
  );
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    ["#EBEBEB", "#EBEBEB", "#0A0A0A", "#0A0A0A", "#EBEBEB"]
  );

  return (
    <motion.section
      ref={ref}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </motion.section>
  );
}
```

**Design note:** Use sparingly — one color-shift section per page maximum. The red takeover should feel like a deliberate climax, not a recurring gimmick.

**Performance:** Color transitions are cheap (composited). Avoid transitioning complex properties (border-radius, box-shadow, filter) — stick to color, opacity, and transform.

**Reduced motion:** Snap to final state at the scroll threshold — no animated transition between colors. The state change still occurs, just instantly.

**Mobile:** Same behavior, but consider reducing the "hold" zone (0.5–0.7) to avoid locking the user in a red screen for too long on short-scroll mobile viewports.

---

## 4. Horizontal Scroll Section

**What:** A horizontally-scrolling strip embedded within the vertical page flow. The user scrolls vertically, but the section translates its content horizontally. Creates a gallery or timeline feel without breaking the vertical scroll contract.

**When to use:** Case study preview strip on the homepage, project timeline, skill/tool showcase, image gallery within a case study.

**Choreography:**
```
Section enters viewport → container pins to viewport top
Vertical scroll maps to horizontal translation:
  Scroll 0%:    First panel visible, panels 2-4 off-screen right
  Scroll 33%:   Panel 2 centered
  Scroll 66%:   Panel 3 centered
  Scroll 100%:  Panel 4 centered, section unpins, vertical scroll resumes

Each panel has its own entrance choreography:
  Panel enters center → title fades up, image scales from 0.95 to 1.0
  Panel exits center → slight opacity reduction (1.0 → 0.7)
```

**Framer Motion sketch:**
```tsx
function HorizontalScroll({ children, panelCount }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(panelCount - 1) * 100}%`]
  );

  return (
    <section
      ref={containerRef}
      style={{ height: `${panelCount * 100}vh` }} // scroll height
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full">
          {children}
        </motion.div>
      </div>
    </section>
  );
}
```

**Design note:** Each panel should be a full viewport width. Don't try to show partial panels — the effect works because each "page" gets a dedicated moment. Use `snap` behavior or progress-based opacity to guide the eye to the centered panel.

**Performance:** Heavy — the pinned container and horizontal translation create a large composite layer. Limit to 4–6 panels. Avoid complex animations *within* each panel during the horizontal scroll (save per-panel choreography for when the panel is centered).

**Reduced motion:** Replace with a standard vertical stack of cards. No horizontal translation, no pinning. Each panel becomes a full-width section in the normal document flow.

**Mobile:** Convert to a swipeable carousel (CSS `scroll-snap-type: x mandatory`) instead of scroll-jacking the vertical scroll. Vertical-to-horizontal scroll mapping feels disorienting on touch devices.

---

## 5. Pinned Scroll Narrative

**What:** A visual element (image, illustration, geometric composition) stays pinned in place while text content scrolls past it. As each new text block aligns with the pinned area, the visual updates — creating a slideshow driven by scroll position.

**When to use:** Case study process sections (pin a UI screenshot, scroll through design decisions that reference it), about page (pin a portrait, scroll through bio sections), any "show and tell" narrative.

**Choreography:**
```
┌──────────────────────────────────────────┐
│  [Pinned visual area]  │  Text block 1   │  ← visual shows state A
│  stays in viewport     │  scrolls up     │
│                        │                 │
│                        │  Text block 2   │  ← visual crossfades to state B
│                        │  scrolls up     │
│                        │                 │
│                        │  Text block 3   │  ← visual crossfades to state C
└──────────────────────────────────────────┘

Visual transitions: crossfade (opacity) between states over 300ms
Text block detection: IntersectionObserver at 50% threshold
Active text block: full opacity + slight scale(1.02)
Inactive text blocks: opacity 0.3
```

**Framer Motion sketch:**
```tsx
function PinnedNarrative({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-split-5-7 min-h-[300vh]">
      {/* Pinned visual */}
      <div className="sticky top-0 h-screen flex items-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[activeIndex].image}
            src={slides[activeIndex].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      </div>

      {/* Scrolling text */}
      <div className="py-[50vh]">
        {slides.map((slide, i) => (
          <TextBlock
            key={i}
            onEnterViewport={() => setActiveIndex(i)}
            isActive={i === activeIndex}
          >
            {slide.text}
          </TextBlock>
        ))}
      </div>
    </div>
  );
}
```

**Design note:** The pinned visual should occupy roughly 40–50% of the viewport width. The text column gets the remaining space. The `py-[50vh]` padding on the text container ensures the first and last text blocks can reach the center of the viewport.

**Performance:** Moderate. The `sticky` positioning is CSS-only (no JS cost). The image crossfade is a single opacity transition. Preload all slide images to prevent flash on transition.

**Reduced motion:** Pin still works (it's a layout pattern, not animation). Replace crossfade with instant swap. Active/inactive text opacity change is instant.

**Mobile:** Stack vertically — pinned visual becomes a static image above each text block. The narrative becomes a standard alternating image/text layout. `sticky` behavior is removed.

---

## 6. Progress-Linked Transforms

**What:** An element's visual properties (scale, opacity, position, rotation, clip-path, letter-spacing) are continuously mapped to scroll progress. Not triggered on enter — *driven* by scroll position. The element is always responding to where the user is.

**When to use:** Hero text that compresses on scroll, images that scale up as they approach center, progress bars, elements that rotate or shift as the page moves.

**Choreography:**
```
Hero text "xiao song.":
  Scroll 0.0: letter-spacing -0.03em, opacity 1.0, y: 0
  Scroll 0.3: letter-spacing -0.06em (compression), opacity 0.6, y: -40px
  Scroll 0.5: letter-spacing -0.08em, opacity 0.0, y: -80px (gone)

Case study image approaching center:
  Scroll -0.2 (before entering): scale 0.9, opacity 0.5, filter: blur(2px)
  Scroll 0.0 (at center):        scale 1.0, opacity 1.0, filter: blur(0)
  Scroll +0.2 (after center):    scale 0.95, opacity 0.7

Index number "01":
  Scroll 0.0:  color: #636363 (muted)
  Scroll 0.3:  color: #DC2626 (accent red) — the number "activates"
  Scroll 0.7:  color: #636363 (back to muted) — section is passing
```

**Framer Motion sketch:**
```tsx
function ProgressText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const letterSpacing = useTransform(
    scrollYProgress, [0, 0.3, 0.5], ["-0.03em", "-0.06em", "-0.08em"]
  );
  const opacity = useTransform(
    scrollYProgress, [0, 0.3, 0.5], [1, 0.6, 0]
  );
  const y = useTransform(
    scrollYProgress, [0, 0.5], [0, -80]
  );

  return (
    <motion.h1
      ref={ref}
      style={{ letterSpacing, opacity, y }}
      className="font-display text-display"
    >
      xiao song.
    </motion.h1>
  );
}
```

**Design note:** Progress-linked transforms should feel *inevitable* — the element is obeying physics, not performing a trick. Avoid non-linear jumps or sudden property changes. The scroll-to-property mapping should be smooth and continuous.

**Performance:** Moderate to heavy depending on the property. `transform` and `opacity` are GPU-composited (cheap). `letter-spacing`, `filter: blur()`, and `clip-path` trigger layout or paint (expensive). Limit paint-triggering properties to one element per viewport.

**Reduced motion:** Replace continuous mapping with a single threshold: element is in default state when above the threshold, final state when below. No interpolation.

**Mobile:** Reduce the scroll range (tighter start/end offsets) since mobile viewports cover less content. Remove `filter: blur()` entirely — mobile GPUs struggle with it.

---

## 7. Scroll Velocity Effects

**What:** Interactions that respond to *how fast* the user scrolls, not just how far. Fast scrolling creates a sense of rushing through space (blur, stretch, skew). Slow scrolling rewards attention with crisp details.

**When to use:** Background elements that react to scroll speed, content that "streaks" during fast navigation, elements that settle when the user pauses. Best as a subtle ambient effect, not a primary interaction.

**Choreography:**
```
Scroll velocity = 0 (stopped):
  Elements at rest. Full sharpness. Geometric shapes at default position.

Scroll velocity = low (reading pace):
  Shapes drift gently (amplified parallax). Very subtle y-skew on images (0.5deg).

Scroll velocity = high (fast scroll):
  Geometric shapes blur slightly (filter: blur(1px))
  Images get a subtle vertical stretch (scaleY: 1.02)
  Background shapes spread apart (increased parallax amplitude)
  Motion trails on accent elements (pseudo-element with delayed transform)

Velocity → 0 (user stops):
  All effects settle back to rest over 400ms using spring: gentle
```

**Framer Motion sketch:**
```tsx
function VelocityReactive({ children }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 100, damping: 30
  });
  const skewY = useTransform(smoothVelocity, [-1000, 0, 1000], [-1, 0, 1]);
  const blur = useTransform(
    smoothVelocity,
    [-2000, -500, 0, 500, 2000],
    [2, 0, 0, 0, 2]
  );

  return (
    <motion.div style={{ skewY, filter: `blur(${blur}px)` }}>
      {children}
    </motion.div>
  );
}
```

**Design note:** This is a *seasoning*, not a main dish. The velocity effect should be barely perceptible during normal browsing and only noticeable when the user deliberately scrolls fast. If a visitor notices the effect on first viewing, it's too strong. Values should stay in the 0.5–2px range for blur and 0.5–1.5deg for skew.

**Performance:** The `useVelocity` hook runs on every scroll frame. `filter: blur()` is expensive — apply only to 1–2 small elements, never to text or large images. `skewY` via transform is cheap.

**Reduced motion:** Disabled entirely. No velocity tracking.

**Mobile:** Disabled entirely. Touch scroll velocity is unpredictable (inertia, rubber-banding) and the effects look wrong.

---

## 8. Clip-Path Reveal

**What:** A section or image reveals itself through an animated CSS `clip-path` — a geometric shape that expands to reveal the content beneath. The content is always there; the mask is what moves.

**When to use:** Case study hero images, section transitions, dramatic reveal moments. Works beautifully with the portfolio's geometric shape language — circles and rectangles become reveal masks.

**Choreography:**
```
Image initially clipped to invisible (clip-path: circle(0% at 50% 50%))

On scroll enter (threshold 0.2):
  Phase 1 (0–400ms): Circle expands from 0% to 60% — content peeks through
  Phase 2 (400–800ms): Circle expands from 60% to 100% — full reveal
  Easing: cubic-bezier(0.22, 1, 0.36, 1) — fast start, slow finish

Alternative — rectangle wipe:
  clip-path: inset(100% 0 0 0) → inset(0% 0 0 0)
  A curtain rising from the bottom
```

**Framer Motion sketch:**
```tsx
const clipReveal = {
  hidden: {
    clipPath: "circle(0% at 50% 50%)"
  },
  visible: {
    clipPath: "circle(100% at 50% 50%)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Rectangle variant (curtain rise):
const curtainReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

<motion.div
  variants={clipReveal}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <img src={caseStudyHero} alt="..." />
</motion.div>
```

**Variations:**
- **Circle from cursor** — the reveal circle expands from the user's cursor position when they click/hover a case study card. Requires passing cursor coords to `clip-path: circle(0% at ${x}px ${y}px)`.
- **Diagonal wipe** — `clip-path: polygon(0 100%, 0 100%, 0 100%, 0 100%)` expanding to `polygon(0 0, 100% 0, 100% 100%, 0 100%)`. Creates a sharp diagonal reveal.
- **Scroll-linked** — instead of triggered once, the clip-path expansion maps to scroll progress. The user "peels back" the image by scrolling.

**Performance:** `clip-path` animation triggers paint on every frame. Acceptable for one element per viewport. Do NOT animate clip-path on multiple elements simultaneously. Hardware-accelerate the container with `will-change: clip-path` (add before animation starts, remove after).

**Reduced motion:** Image appears at full size immediately. No clip-path animation. `clip-path: none`.

**Mobile:** Use simpler clip shapes (rectangle wipe instead of circle) — circle expansion can feel slow on small viewports. Reduce duration to 500ms.
