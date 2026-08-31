# Robin Noguier Portfolio — Cursor Reference Document

> **How to use this file with Cursor:** Open this file in your project, then in any Cursor chat window type `@robin_noguier_cursor_reference.md` to attach it as context. You can then say things like *"Build the homepage scroll navigation inspired by this reference"* and Cursor will use the full technical spec below.

---

## 1. What This Site Is

Robin Noguier's portfolio (robin-noguier.com) won Awwwards Site of the Day on October 27, 2020, scoring **7.93/10** overall and **8.00/10 for Animations & Transitions** from the dev jury. It was built by developer **Lorenzo Cadamuro** and is the canonical example of a WebGL-enhanced, scroll-snap portfolio that feels like an interactive digital magazine.

The key insight: WebGL is used **to enhance HTML, not replace it**. The canvas sits as a layer behind or in front of DOM elements. The HTML structure is conventional; the magic is the shader-driven image effects and the physics-based scroll that connects them.

---

## 2. Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | **Next.js** (React) | Static generation + client-side routing without hard reloads |
| 3D / WebGL | **Three.js** via **React Three Fiber (R3F)** | Integrates Three.js as React components — each WebGL element is a prop-driven component |
| Animation | **React-Spring** | Spring physics for all transitions; `useTransition` for page changes |
| Easing fallback | **Bezier-Easing** + Easing.co | For cases where duration-based (not spring) easing is needed |
| Scroll detection | **Lethargy** | Distinguishes intentional wheel input from inertia — critical for the snap-scroll |
| Scroll engine | **Custom** (no library) | Full control over delta values and element movement |
| Performance | **Web Workers** (×2) | Worker 1: project 3D image positions to 2D screen coords for clip-path masking. Worker 2: observe wheel input and compute snap target |
| CMS | **Prismic** | Custom modules for grid columns, parallax on/off, borders, background colors |
| Shaders | **GLSL** | Custom vertex/fragment shaders for the hover light effect and image distortion |

---

## 3. Color Palette

Sourced directly from the Awwwards color analysis of the site.

| Role | Hex | Use |
|---|---|---|
| Background / Text | `#000000` | Dark canvas, primary text |
| Accent Blue | `#2779A7` | Interactive highlights, links |
| Accent Teal | `#49C5B6` | Secondary accent, hover states |

**Design philosophy:** The background dims to near-black during project transitions so that the colorful project thumbnails never clash with each other. As Robin described it: *"I decided to dim down the background to black so it won't flash too many colors (the disco era is behind us)."*

---

## 4. Typography

The site uses a **bold, condensed display sans-serif** for project titles — large enough to bleed off the screen edges. Body copy is a clean, readable sans-serif. The typographic hierarchy is established entirely through scale contrast: massive display type vs. small, spaced-out label text.

**Typographic rules to replicate:**
- Project titles: `font-size: clamp(4rem, 10vw, 9rem)`, `font-weight: 900`, `letter-spacing: -0.02em`, `line-height: 0.9`
- Navigation labels: `font-size: 0.7rem`, `letter-spacing: 0.15em`, `text-transform: uppercase`
- Body / descriptions: `font-size: 1rem`, `line-height: 1.6`, `font-weight: 400`
- Title text is **masked by clip-path** during scroll transitions — the title appears to be "wiped" away as the next project slides in

---

## 5. Layout & Structure

### Homepage

The homepage is a **full-viewport, wheel-snap gallery**. There is no traditional scroll — the user's wheel input snaps between full-screen project cards. Each card occupies 100vw × 100vh.

```
┌─────────────────────────────────────────────────────────┐
│  ROBIN NOGUIER                              ABOUT        │  ← Fixed nav, top-left + top-right
├─────────────────────────────────────────────────────────┤
│                                                          │
│  [PROJECT IMAGE — WebGL canvas, full bleed]              │  ← Three.js plane, fills ~60% of viewport
│                                                          │
│  Project Title (massive, bottom-left)                    │  ← Clipped by Web Worker clip-path
│  Short description                                       │
│  OPEN CASE STUDY →                                       │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  ● ○ ○ ○ ○                                              │  ← Dot navigation, right edge, vertical
└─────────────────────────────────────────────────────────┘
```

**Navigation dots:** Vertical stack on the right edge. The active dot is filled. Clicking a dot snaps to that project. The dots are the only persistent navigation element besides the top bar.

### Case Study Pages

Case study pages use **conventional vertical scroll** with rich content blocks. The scroll is custom-built (not a library) and moves only the blocks entering the viewport, sharing scroll progress via React Context.

```
┌─────────────────────────────────────────────────────────┐
│  ← BACK                                     NEXT →      │  ← Fixed prev/next navigation
├─────────────────────────────────────────────────────────┤
│  [HERO IMAGE — full bleed, WebGL distortion on hover]    │
│                                                          │
│  Project Title                                           │
│  Role · Year · Client                                    │
├─────────────────────────────────────────────────────────┤
│  [Content blocks: text, images, video, grids]            │
│  Parallax effects on images (configurable via CMS)       │
│  Variable grid columns (configurable via CMS)            │
└─────────────────────────────────────────────────────────┘
```

---

## 6. Interaction Patterns — Detailed Specs

### 6.1 Wheel-Snap Homepage Navigation

This is the signature interaction. It is the hardest to get right.

**The problem:** Trackpad wheel events fire continuously with inertia. Without filtering, the user's single intentional swipe would trigger 5–10 snap events as the inertia decays.

**The solution — Lethargy:**

```js
import Lethargy from 'lethargy';
const lethargy = new Lethargy();

window.addEventListener('wheel', (e) => {
  // lethargy.check() returns -1, 1, or false
  // false = inertia (ignore), -1/1 = intentional scroll
  const intentional = lethargy.check(e);
  if (intentional !== false) {
    snapToNext(intentional > 0 ? -1 : 1); // -1 = prev, 1 = next
  }
}, { passive: true });
```

**The snap transition:**

```js
// Pseudocode for the snap animation
function snapToProject(index) {
  const current = activeIndex;
  const next = clamp(index, 0, projects.length - 1);
  if (current === next) return;

  // 1. Trigger curtain: hide all WebGL planes except current
  dispatch({ type: 'START_TRANSITION', from: current, to: next });

  // 2. Animate the WebGL plane position (React-Spring)
  springApi.start({
    yOffset: next * -100, // percentage of viewport height
    config: { tension: 280, friction: 60 }
  });

  // 3. Clip-path wipe on title text (via Web Worker → main thread)
  // Worker computes the 3D→2D projected position of the image edge
  // Main thread applies: element.style.clipPath = `inset(0 0 ${progress}% 0)`

  setActiveIndex(next);
}
```

### 6.2 WebGL Image Hover Light Effect

Each project image on the homepage is a Three.js `PlaneGeometry` with a custom GLSL shader. The shader binds the mouse position to a radial light effect.

**Conceptual GLSL fragment shader:**

```glsl
uniform sampler2D uTexture;
uniform vec2 uMouse;      // normalized mouse position [0,1]
uniform float uTime;

varying vec2 vUv;

void main() {
  vec4 color = texture2D(uTexture, vUv);

  // Distance from mouse to current fragment
  float dist = distance(vUv, uMouse);

  // Radial light falloff
  float light = smoothstep(0.4, 0.0, dist);

  // Brighten pixels near the mouse
  color.rgb += light * 0.3;

  gl_FragColor = color;
}
```

**Mouse tracking (React Three Fiber):**

```jsx
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

function ProjectImage({ texture }) {
  const meshRef = useRef();
  const { mouse } = useThree(); // normalized [-1, 1]

  useFrame(() => {
    if (meshRef.current) {
      // Convert Three.js mouse [-1,1] to UV [0,1]
      meshRef.current.material.uniforms.uMouse.value.set(
        (mouse.x + 1) / 2,
        (mouse.y + 1) / 2
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[viewport.width * 0.6, viewport.height * 0.7]} />
      <shaderMaterial
        uniforms={{
          uTexture: { value: texture },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}
```

### 6.3 Page Transition — The Curtain

When the user clicks "Open Case Study" or navigates between pages, a curtain animation plays. This is the most architecturally complex part.

**Architecture:**

```
Global React Context
  └── transitionProgress (React-Spring interpolation object)
        ├── WebGL layer: moves planes, fades non-active images
        ├── HTML layer: fades out nav, title text
        └── New page: fades in with staggered content reveals
```

**Key insight from Lorenzo Cadamuro:** He avoided using a Redux/Zustand store for the animation progress because stores are not designed for continuous updates (60fps). Instead, he dispatches the **React-Spring interpolation object itself** through context, so each component subscribes and derives its own animated value from the same source.

```jsx
// TransitionContext.jsx
const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  const [springs, api] = useSpring(() => ({
    progress: 0,
    config: { tension: 200, friction: 40 }
  }));

  const startTransition = useCallback(() => {
    api.start({ progress: 1 });
  }, [api]);

  return (
    <TransitionContext.Provider value={{ springs, startTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

// Any component can subscribe:
function NavBar() {
  const { springs } = useContext(TransitionContext);
  return (
    <animated.nav style={{ opacity: springs.progress.to(p => 1 - p) }}>
      ...
    </animated.nav>
  );
}
```

### 6.4 Title Clip-Path Masking via Web Workers

The title text is masked so it appears to be "wiped" by the edge of the WebGL image as it moves. This requires projecting the 3D image boundary to 2D screen coordinates — an expensive calculation done in a Web Worker.

**Web Worker 1 (position projection):**

```js
// worker-clip.js
self.onmessage = function({ data }) {
  const { imageWorldPosition, projectionMatrix, viewMatrix, viewport } = data;

  // Project 3D world position → NDC → screen pixels
  const ndc = projectToNDC(imageWorldPosition, projectionMatrix, viewMatrix);
  const screenX = (ndc.x + 1) / 2 * viewport.width;

  // Send back the clip-path value
  self.postMessage({ clipRight: viewport.width - screenX });
};

// Main thread applies:
// titleEl.style.clipPath = `inset(0 ${clipRight}px 0 0)`;
```

### 6.5 Custom Smooth Scroll (Case Study Pages)

```js
// Simplified custom scroll implementation
class SmoothScroll {
  constructor() {
    this.current = 0;   // current scroll position
    this.target = 0;    // target scroll position
    this.ease = 0.08;   // lerp factor (lower = smoother)
    this.raf = null;
  }

  init() {
    window.addEventListener('wheel', (e) => {
      this.target += e.deltaY;
      this.target = Math.max(0, Math.min(this.target, this.maxScroll));
    });
    this.animate();
  }

  animate() {
    // Lerp toward target
    this.current = lerp(this.current, this.target, this.ease);

    // Only move elements entering the viewport
    this.visibleElements.forEach(el => {
      if (this.isInViewport(el)) {
        el.style.transform = `translateY(${-this.current}px)`;
      }
    });

    // Share progress via React Context
    this.onProgress(this.current / this.maxScroll);

    this.raf = requestAnimationFrame(() => this.animate());
  }
}
```

---

## 7. Animation Timing & Spring Configs

| Animation | Type | Config |
|---|---|---|
| Snap scroll between projects | Spring | `tension: 280, friction: 60` |
| Page transition curtain | Spring | `tension: 200, friction: 40` |
| Content reveal on page enter | Spring (staggered) | `tension: 180, friction: 35`, delay: `index * 80ms` |
| Image hover light effect | GLSL uniform lerp | `lerp(current, target, 0.05)` per frame |
| Dot navigation active state | Spring | `tension: 300, friction: 50` |
| Case study smooth scroll | Lerp | `ease: 0.08` (8% per frame) |

---

## 8. Component Architecture (React / R3F)

```
<App>
  <TransitionProvider>           ← Global spring progress context
    <Canvas>                     ← R3F canvas, always mounted, shared across pages
      <WebGLScene>
        {projects.map(p => (
          <ProjectPlane          ← Three.js PlaneGeometry + ShaderMaterial
            key={p.id}
            texture={p.texture}
            isCurrent={p.id === activeId}   ← Prop controls curtain exclusion
            position={[0, p.index * -vh, 0]}
          />
        ))}
      </WebGLScene>
    </Canvas>

    <HTMLLayer>                  ← DOM elements positioned over/under canvas
      <Nav />
      <ProjectList>
        {projects.map(p => (
          <ProjectCard           ← Title, description, CTA — clipped by Web Worker
            key={p.id}
            active={p.id === activeId}
          />
        ))}
      </ProjectList>
      <DotNavigation />
    </HTMLLayer>
  </TransitionProvider>
</App>
```

---

## 9. Cursor Prompt Library

Copy and paste these prompts directly into Cursor. Attach this file as context first with `@robin_noguier_cursor_reference.md`.

---

### Prompt A — Build the Wheel-Snap Homepage

```
Using the Robin Noguier reference (@robin_noguier_cursor_reference.md), build a full-viewport wheel-snap homepage in React + TypeScript.

Requirements:
- Each project occupies 100vw × 100vh
- Use the Lethargy library to filter inertia from intentional wheel events
- Snap between projects with a React-Spring spring (tension: 280, friction: 60)
- Show vertical dot navigation on the right edge
- Project title should be large (clamp(4rem, 10vw, 9rem)), bold, bottom-left
- Background is dark (#000 or very dark gray)
- No WebGL needed for now — use regular <img> tags with object-fit: cover
- Add keyboard arrow support (ArrowUp/ArrowDown)
- Add touch swipe support for mobile

Projects data: [{ id, title, description, imageUrl, color }]
```

---

### Prompt B — Add the WebGL Image Hover Light Effect

```
Using the Robin Noguier reference (@robin_noguier_cursor_reference.md), add a WebGL hover light effect to the project images on the homepage.

Requirements:
- Use React Three Fiber (R3F) with a shared <Canvas> that persists across route changes
- Replace the <img> tags with Three.js PlaneGeometry meshes
- Write a GLSL fragment shader that:
  1. Samples the image texture
  2. Takes a uMouse uniform (normalized UV coordinates)
  3. Adds a radial light brightening effect centered on the mouse position
  4. Uses smoothstep for a soft falloff radius of ~0.35
- Track mouse position with useThree().mouse and update the uniform in useFrame()
- The canvas should be position: fixed, z-index: 0, pointer-events: none
- HTML elements sit on top at z-index: 1
```

---

### Prompt C — Build the Page Transition Curtain

```
Using the Robin Noguier reference (@robin_noguier_cursor_reference.md), implement the page transition system.

Requirements:
- Create a TransitionContext that holds a React-Spring useSpring({ progress: 0 })
- The spring interpolation object is dispatched through context (NOT the raw value)
- All components subscribe to the same spring object and derive their own animated values
- On navigation: progress animates from 0 → 1 (transition out), then resets to 0 (transition in)
- Nav bar: opacity = 1 - progress
- Page title: translateY = progress * -40px, opacity = 1 - progress
- New page content: staggered fade-up, each element delayed by index * 80ms
- Use Next.js router events (routeChangeStart / routeChangeComplete) to trigger transitions
- Spring config: tension: 200, friction: 40
```

---

### Prompt D — Build the Clip-Path Title Masking

```
Using the Robin Noguier reference (@robin_noguier_cursor_reference.md), implement the title clip-path masking effect.

Requirements:
- The project title text should be masked so it appears to be hidden behind the project image
- As the snap scroll animates, the image moves and the clip-path updates to reveal/hide the title
- Use a Web Worker to compute the screen-space X position of the image's right edge
- The worker receives: { imageWorldX, projectionMatrix, viewMatrix, viewportWidth }
- The worker returns: { clipRight } — the number of pixels to clip from the right
- Main thread applies: titleEl.style.clipPath = `inset(0 ${clipRight}px 0 0)`
- Update the worker every animation frame during the snap transition
- Fall back to a simple opacity transition if Web Workers are not supported
```

---

### Prompt E — Build the Case Study Smooth Scroll

```
Using the Robin Noguier reference (@robin_noguier_cursor_reference.md), build the custom smooth scroll for case study pages.

Requirements:
- Custom scroll class (no Locomotive Scroll, no Lenis — build from scratch)
- Listen to wheel events, accumulate delta into a target value
- Lerp current toward target with ease factor 0.08 (8% per frame)
- Only apply transforms to elements currently in or near the viewport
- Share scroll progress (0–1) via React Context so any component can bind to it
- Use this progress to drive parallax on images: translateY = scrollProgress * -40px
- The body should be position: fixed, height: 100vh (prevents native scroll)
- A hidden div with the full content height acts as the scroll proxy
- Support reduced-motion: if prefers-reduced-motion, disable lerp and snap instantly
```

---

### Prompt F — Full Design System

```
Using the Robin Noguier reference (@robin_noguier_cursor_reference.md), set up the complete design system in CSS/Tailwind.

Color tokens:
- --color-bg: #000000
- --color-text: #ffffff
- --color-accent-blue: #2779A7
- --color-accent-teal: #49C5B6
- --color-muted: rgba(255,255,255,0.5)

Typography:
- Display: font-size clamp(4rem, 10vw, 9rem), weight 900, letter-spacing -0.02em, line-height 0.9
- Label: font-size 0.7rem, letter-spacing 0.15em, text-transform uppercase
- Body: font-size 1rem, line-height 1.6, weight 400

Layout:
- Nav: position fixed, top 0, left 0, right 0, height 56px, flex space-between, z-index 100
- Project cards: position absolute, width 100vw, height 100vh
- Dot nav: position fixed, right 24px, top 50%, transform translateY(-50%), flex-direction column, gap 8px
- Each dot: width 8px, height 8px, border-radius 50%, background rgba(255,255,255,0.3)
- Active dot: background #fff, transform scale(1.4)
```

---

## 10. Key Principles to Communicate to Cursor

When working with Cursor on this project, always remind it of these rules:

1. **The canvas is always mounted.** It never unmounts between pages. Route changes move WebGL elements, they do not destroy and recreate them.

2. **Spring objects, not values, go through context.** Pass the React-Spring interpolation object itself through context. Never pass a raw number that updates every frame — that causes re-renders.

3. **Web Workers for expensive per-frame calculations.** Any math that needs to run every animation frame AND touches the DOM should be in a worker. The main thread only applies the result.

4. **Lethargy before any scroll snap.** Without Lethargy, trackpad inertia will fire the snap 5–10 times per intentional swipe. Always filter first.

5. **isCurrent prop controls the curtain.** During a page transition, all WebGL planes except the one being transitioned away from should fade/hide. The `isCurrent` prop on each plane component controls this.

6. **Duration-based easing for specific cases.** React-Spring does not support duration. For animations that must complete in exactly N milliseconds (e.g., a loading bar), use `bezier-easing` + `requestAnimationFrame`.

---

## 11. Reference Links

| Resource | URL |
|---|---|
| Live site | https://robin-noguier.com |
| Awwwards SOTD page | https://www.awwwards.com/sites/robin-noguier-portfolio |
| Making-of article (Lorenzo Cadamuro) | https://lorenzocadamuro.medium.com/how-to-build-a-creative-portfolio-with-react-js-and-webgl-a697869f78c5 |
| Codrops reconstruction (Yuri Artiukh) | https://tympanus.net/codrops/2020/10/19/implementing-webgl-powered-scroll-animations/ |
| React Three Fiber docs | https://docs.pmnd.rs/react-three-fiber |
| React-Spring docs | https://www.react-spring.dev |
| Lethargy (scroll filter) | https://github.com/d4nyll/lethargy |
| Bezier-Easing | https://github.com/gre/bezier-easing |
| Prismic (CMS) | https://prismic.io |

---

*Document compiled March 2026. Attach to Cursor with `@robin_noguier_cursor_reference.md` before prompting.*
