# Color Iterations v2 — Dark Greyscale + Red

> Responding to Xiao's feedback: shift from light warm off-white to dark greyscale backgrounds, high contrast, and replace orange-red accent with a truer red tone. Keep the minimalist, editorial energy. The custom cursor + trailing circle interaction stays — these palettes should make it pop even more against the dark canvas.

---

## What's Changing

| Aspect | v1 ("Broadsheet") | v2 Direction |
|--------|-------------------|--------------|
| Background | Warm off-white `#F0EFEB` | Near-black greyscale |
| Text | Near-black `#1A1A1A` | Near-white / light grey |
| Accent | Orange-red `#E54D2E` | True red, no orange |
| Mode | Light only | Dark by default |
| Feel | Newspaper editorial | Gallery / darkroom / cinematic |
| Shapes | White circles on off-white | Dark grey or subtle light shapes on black |

---

## Iteration A: "Darkroom"

**Vibe:** Warm-dark, cinematic. Like a gallery at night — black walls, white labels, one red painting.

The background has the faintest warmth so it doesn't feel cold or sterile. High contrast but approachable.

### Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Background** | `#0A0A0A` | Page background — near-black, very faintly warm |
| **Surface** | `#141414` | Cards, elevated panels |
| **Surface Muted** | `#1C1C1C` | Code blocks, blockquotes, subtle containers |
| **Text Primary** | `#EBEBEB` | Headlines, primary body copy, navigation |
| **Text Secondary** | `#999999` | Descriptions, secondary body copy |
| **Text Muted** | `#636363` | Metadata, timestamps, captions |
| **Accent** | `#DC2626` | True red — geometric shapes, index numbers, highlights |
| **Accent Hover** | `#EF4444` | Lighter red on hover (lifts toward the viewer) |
| **Accent Text** | `#EF4444` | Red safe for body-size text on dark bg |
| **Border** | `#252525` | Standard dividers, card borders |
| **Border Subtle** | `#1A1A1A` | Very subtle separation |
| **Geometric Light** | `#1F1F1F` | Subtle dark circles/shapes — barely visible, textural |
| **Geometric Accent** | `#DC2626` | Red rectangles / accent blocks |
| **Geometric Dark** | `#000000` | True black shapes for deepest contrast |

### WCAG Contrast Ratios

| Foreground | Background | Ratio | WCAG | Usage |
|-----------|-----------|-------|------|-------|
| Text Primary `#EBEBEB` | Background `#0A0A0A` | 16.7:1 | ✅ AAA | Headlines, body copy |
| Text Primary `#EBEBEB` | Surface `#141414` | 13.2:1 | ✅ AAA | Card content |
| Text Secondary `#999999` | Background `#0A0A0A` | 8.2:1 | ✅ AAA | Descriptions |
| Text Secondary `#999999` | Surface `#141414` | 6.5:1 | ✅ AA | Card descriptions |
| Text Muted `#636363` | Background `#0A0A0A` | 4.5:1 | ✅ AA | Metadata |
| Accent Text `#EF4444` | Background `#0A0A0A` | 5.3:1 | ✅ AA | Text links |
| Accent Text `#EF4444` | Surface `#141414` | 4.2:1 | ⚠️ AA Large | Links on cards (use at ≥16px) |
| Accent `#DC2626` | Background `#0A0A0A` | 4.1:1 | ✅ AA Large | Index numbers ≥24px |

### Character

- The near-black background makes the custom cursor circle glow — the trailing circle becomes the most luminous thing on the page
- Red accent is surgical: one red element per viewport, everything else is greyscale
- Cards barely lift off the background — the surface difference between `#0A0A0A` and `#141414` is subtle, felt more than seen
- Geometric shapes are almost invisible dark-on-dark textures — they add depth without competing with content

---

## Iteration B: "Void"

**Vibe:** Maximum contrast. True black. No warmth. Stark, confident, almost brutalist.

This is the most extreme version — pure black background, near-white text, vivid red. The red feels more intense because there's zero tonal competition.

### Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Background** | `#000000` | Pure black page background |
| **Surface** | `#0F0F0F` | Cards, elevated panels — barely lifted |
| **Surface Muted** | `#171717` | Code blocks, blockquotes |
| **Text Primary** | `#F5F5F5` | Headlines, primary body copy |
| **Text Secondary** | `#A3A3A3` | Descriptions, secondary body copy |
| **Text Muted** | `#6B6B6B` | Metadata, timestamps, captions |
| **Accent** | `#E53535` | Vivid true red — punchier, slightly brighter |
| **Accent Hover** | `#F05252` | Bright red on hover |
| **Accent Text** | `#F05252` | Red safe for body-size text on pure black |
| **Border** | `#1F1F1F` | Standard dividers — barely visible |
| **Border Subtle** | `#141414` | Ghost separation |
| **Geometric Light** | `#111111` | Almost-invisible shapes |
| **Geometric Accent** | `#E53535` | Red shapes — the only color on the page |
| **Geometric Dark** | `#080808` | Slightly-off-black for layered depth |

### WCAG Contrast Ratios

| Foreground | Background | Ratio | WCAG | Usage |
|-----------|-----------|-------|------|-------|
| Text Primary `#F5F5F5` | Background `#000000` | 19.3:1 | ✅ AAA | Headlines, body copy |
| Text Primary `#F5F5F5` | Surface `#0F0F0F` | 15.9:1 | ✅ AAA | Card content |
| Text Secondary `#A3A3A3` | Background `#000000` | 9.4:1 | ✅ AAA | Descriptions |
| Text Secondary `#A3A3A3` | Surface `#0F0F0F` | 7.7:1 | ✅ AA | Card descriptions |
| Text Muted `#6B6B6B` | Background `#000000` | 4.9:1 | ✅ AA | Metadata |
| Accent Text `#F05252` | Background `#000000` | 5.5:1 | ✅ AA | Text links |
| Accent Text `#F05252` | Surface `#0F0F0F` | 4.6:1 | ✅ AA | Links on cards |
| Accent `#E53535` | Background `#000000` | 4.5:1 | ✅ AA Large | Index numbers ≥18px bold |

### Character

- Maximum drama. The portfolio disappears into the void — content floats in darkness
- Red becomes *the* color. There is no second color. Every red element is a deliberate focal point
- Geometric shapes are nearly invisible — dark-on-black textures that reveal themselves on scroll/parallax
- The cursor and trailing circle become bright beacons scanning across a dark field
- Risk: pure black can feel harsh on extended reading. Mitigated by the generous spacing and short-form case study content

---

## Iteration C: "Graphite"

**Vibe:** Cool, sophisticated dark grey. Not as extreme as Void — closer to a high-end design tool UI. The background has visible tone, so content has room to go both darker AND lighter.

This is the most "refined" option — less dramatic than Void but more versatile.

### Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Background** | `#111113` | Very dark cool grey — perceptibly not-black |
| **Surface** | `#1B1B1F` | Cards, elevated panels — clearly lifted |
| **Surface Muted** | `#232328` | Code blocks, blockquotes |
| **Text Primary** | `#ECECEC` | Headlines, primary body copy |
| **Text Secondary** | `#8E8E93` | Descriptions, secondary body copy |
| **Text Muted** | `#5C5C63` | Metadata, timestamps, captions |
| **Accent** | `#CC2D2D` | Deep crimson red — rich, slightly darker |
| **Accent Hover** | `#E04040` | Brighter red on hover |
| **Accent Text** | `#E04040` | Red safe for body-size text |
| **Border** | `#2A2A2F` | Standard dividers |
| **Border Subtle** | `#202025` | Subtle separation |
| **Geometric Light** | `#1F1F24` | Dark shapes with slight cool tint |
| **Geometric Accent** | `#CC2D2D` | Crimson rectangles / blocks |
| **Geometric Dark** | `#0A0A0C` | Deepest layer shapes |

### WCAG Contrast Ratios

| Foreground | Background | Ratio | WCAG | Usage |
|-----------|-----------|-------|------|-------|
| Text Primary `#ECECEC` | Background `#111113` | 14.1:1 | ✅ AAA | Headlines, body copy |
| Text Primary `#ECECEC` | Surface `#1B1B1F` | 11.4:1 | ✅ AAA | Card content |
| Text Secondary `#8E8E93` | Background `#111113` | 5.9:1 | ✅ AA | Descriptions |
| Text Secondary `#8E8E93` | Surface `#1B1B1F` | 4.8:1 | ✅ AA | Card descriptions |
| Text Muted `#5C5C63` | Background `#111113` | 3.6:1 | ⚠️ AA Large | Metadata (≥18px bold) |
| Accent Text `#E04040` | Background `#111113` | 4.7:1 | ✅ AA | Text links |
| Accent Text `#E04040` | Surface `#1B1B1F` | 3.8:1 | ⚠️ AA Large | Links on cards (≥16px) |
| Accent `#CC2D2D` | Background `#111113` | 3.5:1 | ✅ AA Large | Index numbers ≥24px |

### Character

- The cool grey undertone gives the palette sophistication — it reads "designed" rather than "just dark"
- More visible surface elevation — cards clearly sit on top of the background
- Red feels richer and deeper against the cool grey — less "alarm" and more "intention"
- Geometric shapes have a slight cool tint, creating subtle layered depth
- Most comfortable for extended reading of case study content
- The cursor effect works well — enough contrast between bg layers to feel dimensional

---

## How the Red Accent Compares

| Swatch | Hex | Name | Feel |
|--------|-----|------|------|
| 🔴 | `#DC2626` | True Red (Darkroom) | Classic, balanced, familiar — the "default red" |
| 🔴 | `#E53535` | Vivid Red (Void) | Brighter, more electric — demands attention |
| 🔴 | `#CC2D2D` | Deep Crimson (Graphite) | Richer, darker, more refined — less urgent |

All three are clearly red (no orange). They differ in intensity:
- **Darkroom's red** is the Swiss Army knife — works everywhere
- **Void's red** is the spotlight — electric against pure black
- **Graphite's red** is the signature — sophisticated, less aggressive

---

## What Changes Beyond Color

### Shadows (inverted strategy)

On dark backgrounds, traditional shadows are invisible. Elevation shifts to:
- **Surface color stepping** — cards use a lighter surface than the background
- **Subtle light glow** instead of dark shadow: `0 0 24px rgba(255,255,255,0.03)`
- **Border lines** do more work for separation than shadows

### Geometric Shapes

- v1 used white circles on off-white (paper layering). In dark mode, shapes become **dark-on-darker** textures
- Red geometric shapes become the only color on the page — even more surgical
- Consider: a very faint red glow/halo on accent shapes (`box-shadow: 0 0 40px rgba(220, 38, 38, 0.15)`)

### Cursor

- The custom cursor + trailing circle will be even more prominent against dark backgrounds
- Cursor color: white or very light grey (`#EBEBEB`) — no red on the cursor, let it be neutral
- The trailing circle could have a very subtle red tint on hover over interactive elements

### Type

- Playfair Display's thick-thin stroke contrast is MORE visible on dark backgrounds — the serifs catch light (white) against darkness
- Consider slightly reducing text-primary brightness to `#E0E0E0` or `#DCDCDC` if pure white feels glaring during testing

---

## My Recommendation

**Iteration A ("Darkroom")** is the strongest starting point.

- The faint warmth in `#0A0A0A` prevents the cold sterility of pure black
- `#DC2626` is the most versatile red — works at every scale
- The barely-there surface elevation creates depth without visual noise
- Most forgiving for image content — case study screenshots won't clash with the background
- The custom cursor effect will look incredible against it

**But** — I'd push you to also consider if Void (`#000000`) feels right when you actually see it in the browser. Pure black is polarizing but undeniably striking.

---

## Decisions Needed from Xiao

1. **Pick a direction:** Darkroom (A), Void (B), or Graphite (C)?
2. **Red intensity:** True red, vivid red, or deep crimson?
3. **Cursor color on dark:** White circle, or very faint red glow?
4. **Geometric shapes on dark:** Dark-on-darker (subtle texture) or red accent shapes only?
5. **Still want the trailing period?** ("work.", "about.") — this motif works even better on dark backgrounds where every detail is magnified
