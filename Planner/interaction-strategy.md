# Interaction & Animation Strategy

> Planner deliverable — defines the specific interactions, animations, and motion design that make this portfolio "interactive/experimental." Every recommendation is grounded in the Researcher's findings.

---

## Design Principle: Engineered Elegance

> Fast, smooth, meticulously detailed. Micro-interactions speak louder than 3D renders.
> — Researcher's recommended vibe

Every interaction in this portfolio should feel **intentional, tactile, and responsive.** The goal is not to overwhelm with effects but to demonstrate craft through precision. Every motion has a purpose — either it communicates state, guides attention, or creates delight.

**Performance constraint:** All animations target 60fps. No WebGL. No heavy libraries. Use Web Animations API, CSS transitions, and Framer Motion's spring physics. Target: Lighthouse 100, like Paco Coursey's site.

**Accessibility constraint:** Every animated interaction must respect `prefers-reduced-motion`. The site must be fully functional and beautiful with all motion disabled.

---

## 1. Page Transitions

**Reference:** Robin Noguier's spatial transitions, Paco Coursey's AnimatePresence patterns

### Specification

| Property | Value |
|----------|-------|
| Library | Framer Motion (`AnimatePresence` + `motion` components) |
| Duration | 300-400ms (never longer) |
| Easing | Spring physics (`spring: { stiffness: 300, damping: 30 }`) — not CSS easing curves |
| Interruptible | Yes — clicking another link mid-transition immediately starts the new transition |

### Transition Types

| Navigation | Exit Animation | Enter Animation |
|------------|---------------|-----------------|
| Any page → Any page (default) | Current page content fades out + shifts down 8px | New page content fades in + shifts up from 8px below |
| Homepage → Case Study | Case study card expands to fill the viewport (shared layout animation) | Case study hero morphs from the card into full-width hero |
| Case Study → Case Study ("Next project") | Current study exits left | New study enters from right |
| Any → Craft Lab | Content dissolves (opacity only, no movement) | Experiments stagger in one by one |

### Reduced Motion Fallback
- All transitions become instant cuts (no animation, no delay).
- Content appears immediately.

### Mobile Adaptation
- Same transitions but with shortened duration (200-300ms) to feel snappier on mobile.
- Shared layout animation (card → hero) may simplify to a basic crossfade on mobile for performance.

**Priority: P0** — core to the portfolio's identity.

---

## 2. Scroll-Driven Animations

**Reference:** Robin Noguier's scroll-linked masking and typography, Researcher's Intersection Observer + CSS clip-path recommendation

### Homepage

| Section | Animation | Trigger | Implementation |
|---------|-----------|---------|----------------|
| Hero headline | Text reveals character by character (or word by word) as user scrolls into the section | Scroll position (0-30% of viewport) | CSS `clip-path` animated via Intersection Observer |
| Selected Work cards | Cards fade in + shift up with stagger (card 1, then card 2) | Intersection Observer — when cards enter viewport | Framer Motion `whileInView` |
| Craft Preview | Interactive element "wakes up" — starts animating when scrolled into view | Intersection Observer | Component-level scroll trigger |
| About Teaser | Subtle parallax on the photo (if present), text fades in | Intersection Observer | CSS transform + opacity |

### Case Study Pages

| Section | Animation | Trigger | Implementation |
|---------|-----------|---------|----------------|
| Hero image | Slow parallax — image moves at 80% of scroll speed, creating depth | Scroll position | CSS `transform: translateY()` driven by scroll |
| Section headings | Each section heading fades in + slides from left when scrolled into view | Intersection Observer | Framer Motion `whileInView` |
| Process images | Images fade in with stagger as their row enters the viewport | Intersection Observer | Framer Motion `whileInView` + `staggerChildren` |
| Outcome metrics | Numbers count up from 0 to final value when scrolled into view | Intersection Observer | JS counter animation (requestAnimationFrame) |
| Pull quotes / callouts | Scale up slightly (1.0 → 1.02) and gain full opacity on scroll | Intersection Observer | CSS transition |

### Reduced Motion Fallback
- All scroll-driven animations are disabled.
- All content is visible from initial render at full opacity.
- No parallax effects.

### Mobile Adaptation
- Parallax effects disabled on mobile (performance and touch-scroll jank).
- `whileInView` animations remain but with simpler motion (opacity only, no translation).
- Number counter animations remain (low-cost, high-impact).

**Priority: P0** (homepage hero + case study sections), **P1** (parallax, stagger effects)

---

## 3. Hover & Cursor Interactions

**Reference:** Rauno Freiberg's magnetic elements, Elliott Mangham's physics-based interactions, Marga Navarro's custom cursor

### Custom Cursor (Desktop Only)

| State | Appearance | Behavior |
|-------|------------|----------|
| Default | Small circle (8px), solid accent color | Follows mouse with slight spring lag (feels physical, not robotic) |
| Hovering a link | Circle expands to 40px, becomes outline only, label text appears ("View", "Open", etc.) | Spring expansion |
| Hovering an image | Circle becomes a "View" indicator | Indicates zoomable images |
| Dragging (Craft Lab) | Circle becomes a grab hand icon | For interactive experiments |
| Text content | Hides — reverts to system cursor | Don't interfere with text selection |

**Implementation:** A `<div>` positioned via `requestAnimationFrame`, tracking `mousemove` events. Spring interpolation for position (small lag). No `cursor: none` on the `<body>` — only apply it to specific interactive areas so text selection remains natural.

### Magnetic Elements

| Element | Behavior |
|---------|----------|
| Navigation links | Pull toward cursor when within 60px radius. Spring back on mouse leave. |
| Case study cards | Slight 3D tilt toward cursor direction (CSS perspective + rotateX/Y). Lifts subtly (translateZ). |
| Buttons | Scale up 1.05x on hover + shadow deepens. Spring physics, not CSS `transition`. |
| Social links (footer) | Icon bounces up on hover (spring, not ease). Color transitions to brand color. |

### Reduced Motion Fallback
- Custom cursor: Disabled. System cursor only.
- Magnetic effects: Disabled. Standard hover states (opacity change or underline).
- Card tilt: Disabled. Simple shadow/opacity change on hover.
- Button scale: Retains subtle scale (1.02x) with `transition: transform 0.15s` — this is non-distracting enough to keep.

### Mobile Adaptation
- **Custom cursor:** Does not exist on mobile (no mouse). No fallback needed.
- **Magnetic/tilt effects:** Do not exist on mobile. Cards get a pressed/active state on tap instead.
- **Buttons:** Tap state (scale down to 0.97x, then spring back) instead of hover.
- **Social links:** Standard tap state.

**Priority: P1** (custom cursor), **P0** (hover states for cards and buttons — these are expected UX)

---

## 4. Loading Experience

**Reference:** Paco Coursey's instant-load approach

### Strategy: No Loader

| Decision | Rationale |
|----------|-----------|
| No loading screen, no spinner, no preloader | The site is static (Next.js SSG). Pages should load in <1s on broadband. A loader adds perceived latency. |
| Content appears immediately | HTML is server-rendered. No layout shift. |
| Images lazy-load with blur-up | Next.js `<Image>` with `placeholder="blur"` — a tiny blurred version shows instantly, full image fades in. |
| Fonts: `font-display: swap` | Text renders immediately in fallback font, then swaps to the custom font. No FOIT (Flash of Invisible Text). |

### First-Visit Experience (what the user sees)

1. **0ms:** White/dark background renders (depends on color mode)
2. **~50ms:** Navigation + hero text appear (server-rendered HTML)
3. **~100ms:** Hero animation begins (scroll-linked text reveal or fade-in)
4. **~200ms:** Custom font swaps in (minimal reflow if fallback font metrics are matched)
5. **~500ms:** Images start loading (blur-up placeholders visible immediately)
6. **~1000ms:** Page fully interactive

### Reduced Motion Fallback
- Same instant-load behavior. Hero animation simply doesn't animate — text is visible from render.

**Priority: P0** — performance is non-negotiable.

---

## 5. Micro-Interactions

**Reference:** Rauno Freiberg's obsessive micro-interaction polish, Paco Coursey's subtle feedback loops

### Catalog of Micro-Interactions

| Element | Interaction | Animation | Priority |
|---------|-------------|-----------|----------|
| **Navigation links** | Hover | Underline slides in from left (CSS `scaleX` on a pseudo-element). Spring easing. | P0 |
| **Navigation (mobile)** | Menu open/close | Full-screen overlay with staggered link reveals (each link fades in 50ms apart). Menu icon morphs to X. | P0 |
| **Case study cards** | Hover | Card lifts (translateY -4px), shadow deepens, image zooms slightly (scale 1.03). Spring physics. | P0 |
| **Case study cards** | Click | Card presses down briefly (translateY +2px) before page transition starts. Tactile feel. | P1 |
| **Buttons (CTA)** | Hover | Background color shifts. Slight scale-up (1.03x). Spring. | P0 |
| **Buttons (CTA)** | Click | Press-down (scale 0.97x) → spring back. | P0 |
| **External links** | Hover | Arrow icon (↗) shifts up-right 2px. | P1 |
| **Image thumbnails** | Hover | Slight zoom (1.05x) with overflow hidden. Smooth spring. | P1 |
| **Form inputs** (if any) | Focus | Border color transitions. Label shifts up (floating label pattern). | P2 |
| **Copy-to-email** | Click | "Copied!" tooltip appears with spring scale-in, fades after 2s. | P1 |
| **Theme toggle** (if added) | Click | Icon rotates 180° and morphs (sun ↔ moon). Spring. | P2 |
| **Scroll-to-top** | Appears on scroll | Fades in when user scrolls past first fold. Smooth scroll on click. | P1 |
| **Page progress bar** | Scroll | Thin bar at top of page fills from left as user scrolls. CSS `scaleX`. | P1 |
| **"Next project" link** | Hover | Project title + thumbnail preview slides in. Entices the click. | P1 |

### Reduced Motion Fallback
- All spring animations → instant state changes (no motion, but state still changes).
- Hover states remain visible (opacity/color changes are fine, movement is not).
- Mobile menu: Links appear all at once (no stagger).

**Priority:** See table above. All P0 items must ship at launch.

---

## 6. Case Study Storytelling

**Reference:** Robin Noguier's narrative scrolling, Researcher's recommendation for modular/scannable layouts

### Approach: Progressive Scroll Narrative

Case studies unfold as the user scrolls. Each section is a distinct narrative beat. The layout alternates between text-heavy and image-heavy sections to maintain visual rhythm.

### Section Choreography

| Section | Layout | Animation on Enter |
|---------|--------|-------------------|
| **Hero** | Full-bleed image + overlaid title | Image parallax. Title fades in over the image. |
| **Overview** | Centered text, narrow column (max 640px) | Fade in from below |
| **Context & Problem** | Text left, supporting visual right (or full-width) | Text fades in. Image slides in from right. |
| **Process** | Alternating: text-left/image-right, then image-left/text-right | Each block fades in with `whileInView`. Staggered within each block. |
| **Solution** | Full-width image gallery / large screenshots + explanatory text | Images scale up slightly from 0.95 → 1.0 on enter. High-impact visual section. |
| **Outcome** | Metrics in large type + text explanation | Numbers count up. Text fades in. |
| **Reflection** | Centered text, styled as a pull quote or callout | Subtle scale-up on enter. |
| **Next Project** | Full-width card with next project's hero image + title | Parallax on the image. Hover: card lifts. |

### Image Presentation

| Feature | Behavior |
|---------|----------|
| Inline images | Click/tap to open lightbox with zoom capability |
| Image captions | Fade in after the image (50ms delay) |
| Image sequences | Can be presented as a horizontal scroll carousel on mobile |
| Before/after comparisons | Interactive slider (drag to reveal) — Craft Lab-style interactivity embedded in case studies |
| Video/prototype embeds | Autoplay on scroll (muted), with play/pause control |

### Reduced Motion Fallback
- All sections visible from render — no scroll-triggered reveals.
- Parallax disabled.
- Number counters show final values immediately.
- Before/after sliders still work (they're user-initiated, not animated).

### Mobile Adaptation
- All sections stack vertically (no side-by-side text/image).
- Images are full-width.
- Horizontal image carousels replace multi-column image grids.
- Parallax disabled.
- Lightbox works via tap.

**Priority: P0** (basic section reveals + layout), **P1** (parallax, number counters, image carousels), **P2** (before/after slider, video embeds)

---

## 7. Reduced Motion — Complete Policy

`prefers-reduced-motion: reduce` triggers the following global behavior:

| Category | With Motion | Without Motion |
|----------|-------------|----------------|
| Page transitions | Spring-based slide/fade | Instant cut (no animation) |
| Scroll reveals | Elements animate in on scroll | All elements visible from render |
| Parallax | Subtle depth effect | Disabled — static positioning |
| Hover states | Spring-based scale/translate | Opacity or color change only |
| Custom cursor | Spring-lagged following cursor | System cursor |
| Loading/blur-up | Fade from blur to sharp | Sharp image immediately (no fade) |
| Number counters | Count up from 0 | Show final value immediately |
| Mobile menu | Staggered reveal | All items visible at once |
| Auto-playing video | Autoplay with motion | Paused, with play button |

**Implementation:** A single React context (`useReducedMotion()`) that reads `prefers-reduced-motion` via `matchMedia`. All animation components check this context and either:
- Return `{ duration: 0 }` for Framer Motion variants
- Skip `whileInView` triggers
- Disable `useSpring` hooks

---

## 8. Mobile Adaptations — Complete Policy

| Interaction | Desktop | Mobile |
|-------------|---------|--------|
| Custom cursor | Yes — spring-lagged circle | None — system default |
| Magnetic nav | Yes — 60px pull radius | None |
| Card tilt (3D) | Yes — perspective-based | None — tap active state instead |
| Hover effects | Full spring animations | Tap/press states (scale down then spring back) |
| Page transitions | Full 300-400ms transitions | Simplified, 200-300ms |
| Scroll animations | Full (parallax, staggers) | Simplified (opacity only, no parallax) |
| Horizontal carousels | Optional (grid preferred) | Primary image browsing method |
| Lightbox | Click to open | Tap to open, swipe to navigate |
| Command palette | ⌘K trigger | Hidden (not discoverable enough on mobile) |

---

## 9. Priority Ranking

### P0 — Must Have at Launch

These interactions define the portfolio's identity. Without them, the site feels like a standard template.

| Interaction | Pages |
|-------------|-------|
| Page transitions (AnimatePresence) | All |
| Scroll reveal animations (whileInView) | Homepage, Case Studies |
| Homepage hero text animation | Homepage |
| Case study card hover states (lift + shadow) | Homepage, Work Index |
| Button hover/click states (spring) | All |
| Nav link hover animation (underline slide) | All |
| Mobile nav overlay (staggered reveal) | All |
| Blur-up image loading | All |
| `prefers-reduced-motion` support | All |
| 60fps performance on all animations | All |

### P1 — Nice to Have at Launch

High-impact polish. Add these if time allows; they elevate the experience significantly.

| Interaction | Pages |
|-------------|-------|
| Custom cursor (desktop) | All |
| Magnetic nav elements | All |
| Case study card 3D tilt | Homepage, Work Index |
| Scroll progress bar | Case Studies |
| Number count-up for metrics | Case Studies |
| "Next project" hover preview | Case Studies |
| Copy-to-email with tooltip | Contact |
| Staggered grid reveals | Work Index, Craft Lab |
| External link arrow animation | All |

### P2 — Post-Launch

Ambitious features that would be impressive but aren't critical for v1.

| Interaction | Pages |
|-------------|-------|
| Command palette (⌘K) | All |
| Before/after image slider | Case Studies |
| Video/prototype embeds with autoplay | Case Studies |
| Theme toggle (light/dark) with icon morph | All |
| Scroll-to-top button | Long pages |
| Image sequence horizontal carousel | Case Studies |
| Craft Lab interactive experiments | Craft |
| Shared layout animation (card → hero morph) | Homepage → Case Study |

---

## Implementation Notes for Front End Agent

### Recommended Libraries

| Purpose | Library | Why |
|---------|---------|-----|
| Page transitions + layout animations | `framer-motion` | AnimatePresence, spring physics, whileInView, layout animations — does everything |
| No additional animation library needed | — | Framer Motion covers springs, scroll triggers, and layout. Don't add React-Spring or GSAP. |
| Scroll observation | Native `IntersectionObserver` | Use for triggering whileInView. Framer Motion wraps this automatically. |
| Custom cursor | Vanilla JS + `requestAnimationFrame` | Lightweight. Don't use a library for this. |

### Performance Budget

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| First Contentful Paint | <1.2s |
| Largest Contentful Paint | <2.5s |
| Total Blocking Time | <200ms |
| Cumulative Layout Shift | <0.1 |
| JS bundle (gzipped) | <100KB first load |
| Framer Motion tree-shaking | Import only what's used (`motion`, `AnimatePresence`, `useInView`) |

### Animation Performance Rules

1. Only animate `transform` and `opacity` — these are GPU-composited and don't trigger layout/paint.
2. Use `will-change: transform` sparingly (only on elements actively animating).
3. Springs over duration-based easing — springs feel more natural and don't need tuning for different distances.
4. Stagger delays: 30-80ms between items (not more — it feels sluggish).
5. All animations must be interruptible (Framer Motion handles this by default).

---

## Summary

This portfolio's interaction strategy is built on **three pillars:**

1. **Spring physics everywhere** — every motion uses springs, not CSS easing. Things feel physical, not programmatic.
2. **Scroll as narrative** — case studies unfold like stories, with each section animated into view. The homepage uses scroll to reveal content progressively.
3. **Obsessive micro-interaction polish** — every hover, click, and transition is considered. Nothing uses browser defaults. This is the Rauno Freiberg / Paco Coursey approach: extreme attention to detail at the interaction level.

The strategy avoids heavy WebGL, 3D renders, and complex particle systems. Instead, it achieves the "interactive/experimental" goal through **precision and craft** — exactly the message Xiao wants to send as a product designer.
