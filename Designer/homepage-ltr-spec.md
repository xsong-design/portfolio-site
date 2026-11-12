# Homepage projects — left to right

Designer call, 2026-11-09. Xiao asked to try a horizontal project frame because the stacked image-over-caption gets cut off. Overlap is allowed. Side was left to the Designer.

## Decision

**Words on the left. Image on the right. The image overlaps the text column and runs to the right edge.**

The hero is type-first, so the title stays where reading starts. The image is the larger mass. It covers the index number, not the title or the description.

Scroll still advances one project at a time. The motion moves sideways instead of shrinking upward.

On a short or narrow screen the pin is dropped. Each project is a full row in the page, so the browser scrolls to the rest of it instead of clipping it.

## 1. Storyboard

```
Phase 1 (project becomes active):
  Title and index settle from 24px left, spring editorial
  Image settles from 72px right, spring smooth
  Sage block is already parked under the image's bottom-left corner

Scroll through the active project [0.0–1.0]:
  Image drifts left 40px total (starts +20px, ends -20px)
  Title drifts right 16px total, so the overlap tightens as you scroll
  Opacity stays 1

Exit (next project takes over):
  Current image continues left and fades to 0.35
  Current title fades out
  Next image enters from the right, next title from the left
```

Stillness is wrong here. The sideways drift is the parallax, and it keeps both parts on screen.

## 2. Spatial map

```
┌─ viewport (100svh, below nav) ──────────────────────────────┐
│  pad                                                         │
│  01 z:0 ─────────────┐                                       │
│  Title z:20          │████ image z:10 ──────────────────────│
│  description         │████ overlaps ~64px, bleeds to edge   │
│  company · year      │████                                   │
│                      └████                                   │
│              ▢ sage z:0 peeks below-left of the image        │
└──────────────────────────────────────────────────────────────┘
Grid break: the image crosses the column split by 40px and the index sits under that overlap.
Title and description stop before the overlap. They are never under the image.
```

## 3. Timing notation

| Element | Trigger | Spring/Duration | Delay | Easing |
|---------|---------|-----------------|-------|--------|
| Title + index | Project becomes active | `editorial` (stiffness 100, damping 18, mass 1.2) | — | — |
| Image | Project becomes active | `smooth` (stiffness 200, damping 25, mass 1) | — | — |
| Image drift | Scroll within the project | linear map, 40px across the segment | — | linear |
| Title counter-drift | Scroll within the project | linear map, 16px opposite the image | — | linear |
| Exit fade | Next project index | opacity 0.6s, same smooth curve | — | cubic-bezier(0.16, 1, 0.3, 1) |

## 4. Fallback behavior

- **`prefers-reduced-motion`:** No pin, no drift. Every project is a left-right row in normal document flow. Image does not scale on hover.
- **Below 768px, or viewport shorter than 640px:** Same flowing rows. Image stacks above the words only under 640px, at a capped height (`clamp(8.5rem, 30svh, 16rem)`), and the page grows. The sticky frame is what was clipping, so it is off in these cases.
- **Performance:** Transform and opacity only. No blur, no clip-path animation. One layer moves per project.
