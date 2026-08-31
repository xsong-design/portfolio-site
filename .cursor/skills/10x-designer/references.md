# References

Curated award-winning sites for the 10x Designer skill. Each entry identifies a specific technique to study — not "look at the whole site" but "look at *this section* and notice *this pattern*."

Organized by category. When designing a section, scan the relevant category for inspiration before producing specs.

---

## Scroll-Driven Storytelling

### 1. Locomotive (locomotive.ca)
- **Study:** The full-page scrolling experience. Each project occupies a full viewport with a pinned image that crossfades as scroll progresses.
- **Technique:** Pinned scroll narrative + progress-linked opacity transitions
- **Translate to portfolio:** Case study showcase on homepage — pin a large preview image, scroll through project metadata beside it. As each project's text block enters center, the pinned image crossfades to that project's hero.
- **Key detail:** The transitions are *slow* — 600ms+ crossfade. The slowness conveys confidence and quality.

### 2. Aristide Benoist (aristidebenoist.com)
- **Study:** The project list with staggered text reveals and image previews that follow the cursor.
- **Technique:** Staggered reveal sequence + cursor-following image preview
- **Translate to portfolio:** Case study list where hovering a title spawns a floating image preview near the cursor. The image follows with a springy delay (gentle spring). Combined with staggered text entrance on scroll.
- **Key detail:** The image preview doesn't snap to the cursor — it trails behind with visible spring physics. The lag is what makes it feel physical.

### 3. Dennis Snellenberg (dennissnellenberg.com)
- **Study:** Scroll-driven number counters and text that animates word-by-word.
- **Technique:** Progress-linked transforms + word-level stagger
- **Translate to portfolio:** Hero text reveals word-by-word as the page loads. Stats or impact numbers in case studies count up as they scroll into view, driven by scroll progress (not a timer).
- **Key detail:** Each word has a slightly different spring tension — earlier words are snappier, later words are more relaxed. The stagger isn't uniform; it *breathes*.

### 4. Lusion (lusion.co)
- **Study:** The project cards with depth-driven parallax and scroll velocity reactions.
- **Technique:** Parallax depth layers + scroll velocity effects
- **Translate to portfolio:** Case study cards where the image, title, and index number each exist on a different parallax layer. On fast scroll, elements subtly stretch/compress. On pause, they settle.
- **Key detail:** The parallax rates are very subtle (0.05x–0.2x). The effect is felt more than seen. If you can clearly see things moving at different speeds, the rates are too high.

---

## Unconventional Layout

### 5. Playground (playground.com)
- **Study:** The alternating asymmetric project grid — each project card uses a different column split.
- **Technique:** Asymmetric masonry + alternating grid splits
- **Translate to portfolio:** Case study cards alternate between 7/5 and 5/7 splits, with the image and text switching sides. Each card feels deliberately placed rather than repeated from a template.
- **Key detail:** The vertical offset between cards is intentional — card 2 doesn't start where card 1 ends. There's a 60–100px gap that varies, creating an organic rhythm.

### 6. Obys Agency (obys.agency)
- **Study:** The massive display type that dominates the hero and defines spatial structure.
- **Technique:** Type as architecture + grid-breaking headlines
- **Translate to portfolio:** "xiao song." rendered at viewport-filling scale with metadata tucked into the negative space between letterforms. The type isn't in the layout — the type IS the layout.
- **Key detail:** Small functional text (navigation, dates, labels) is positioned *relative to the large type* — anchored to baselines and edges of the display letters. This creates a typographic coordinate system.

### 7. Rino & Pelle (rinoandpelle.com)
- **Study:** Full-bleed images that break out of the content container, alternating with tightly gridded text sections.
- **Technique:** Breakout compositions + content rhythm contrast
- **Translate to portfolio:** Case study pages that alternate between contained analytical text (narrow `max-w-content` column) and full-bleed showcase images. The rhythm between tight and expansive creates breathing.
- **Key detail:** The breakout images don't just go full-width — they extend *past* the viewport edges (using negative margins) so the image appears to extend infinitely. Even 20px of overflow creates the illusion.

### 8. Studio Freight (studiofreight.com)
- **Study:** The horizontal scroll project showcase and custom cursor interactions.
- **Technique:** Horizontal scroll section + viewport-anchored elements
- **Translate to portfolio:** A horizontal-scrolling case study preview strip where each project occupies a full viewport panel. The custom cursor changes shape/label as it enters different project panels.
- **Key detail:** The horizontal scroll is mapped to vertical scroll input — the user never has to scroll sideways. The container pins at the top of the viewport while vertical scroll drives horizontal translation.

---

## Type and Editorial Energy

### 9. Bloomberg Businessweek (bloombergbusinessweek.com)
- **Study:** The editorial layout system — massive serif headlines with geometric color blocks and small sans-serif body text.
- **Technique:** Type scale contrast + geometric shapes as layout devices
- **Translate to portfolio:** The contrast between Playfair Display at 10rem and DM Sans at 1rem mirrors Bloomberg's editorial hierarchy. Red accent rectangles serve the same role as Bloomberg's color blocks — they frame and punctuate.
- **Key detail:** Color blocks always have a purpose — they contain a pullquote, frame an image, or mark a section start. They're never purely decorative.

### 10. Vogue (vogue.com)
- **Study:** How serif type interacts with high-fashion photography — the confident use of italic and the restraint of body text.
- **Technique:** Serif display/italic interplay + image-type compositions
- **Translate to portfolio:** Use Playfair Display italic for case study subtitles and pullquotes. The italic creates a conversational, human tone against the bold upright display headlines.
- **Key detail:** Italic is never used for emphasis in body text (that's what weight is for). Italic is reserved for a specific voice — the editorial "aside."

### 11. Pentagram (pentagram.com)
- **Study:** The project grid with massive white space and minimal metadata.
- **Technique:** Negative space as design element + surgical information hierarchy
- **Translate to portfolio:** Generous spacing between case study cards — the empty space isn't wasted; it creates gravity around each project. Metadata is minimal: project name + one descriptor. No dates, no role labels, no tags cluttering the composition.
- **Key detail:** Each project image occupies significantly more area than its text. The image-to-text ratio is roughly 8:1. The portfolio trusts the visual work to speak.

---

## Dark Theme + Accent Color

### 12. Niccolo Miranda (niccolomiranda.com)
- **Study:** The dark-background portfolio with a single accent color and cinematic scroll transitions.
- **Technique:** Dark editorial aesthetic + scroll-triggered reveals + single accent color discipline
- **Translate to portfolio:** One accent color (red) used surgically — a single red element per viewport. Everything else is greyscale. The red creates instant focal points. Combined with slow, spring-based scroll reveals.
- **Key detail:** On dark backgrounds, shadows are invisible. Elevation is achieved through surface color stepping (slightly lighter cards on dark background) and subtle border lines. Not box-shadow.

### 13. Monopo (monopo.london)
- **Study:** The minimal dark portfolio with smooth page transitions and large-scale typography.
- **Technique:** Page transitions + type-driven layouts on dark backgrounds
- **Translate to portfolio:** Page transitions that feel like turning pages — the current page slides out while the new page slides in from the opposite edge. The dark background makes the transition feel like content floating in void.
- **Key detail:** The page transition duration is ~500ms — fast enough to feel responsive, slow enough to be perceived as a deliberate motion. Below 300ms feels like a glitch; above 700ms feels sluggish.

### 14. Rauno Freiberg (rauno.me)
- **Study:** The personal portfolio with meticulous micro-interactions — hover states, focus rings, cursor effects, and spring physics on every interactive element.
- **Technique:** Micro-interaction density + spring physics consistency
- **Translate to portfolio:** Every interactive element (links, cards, buttons, nav items) has a considered hover state with spring physics — not CSS ease-in-out. The springs create a consistent "material" feel, as if the UI has physical weight.
- **Key detail:** The spring parameters are consistent across the entire site. All hover lifts use the same spring. All color transitions use the same duration. Consistency creates the feeling of a unified physical material.

### 15. Lynn Fisher (lynnandtonic.com)
- **Study:** The viewport-responsive illustration — the entire page illustration transforms as the browser window resizes.
- **Technique:** Viewport-aware composition + responsive as interaction
- **Translate to portfolio:** Not literally (no illustration), but the principle: responsive behavior is not just "reflow for mobile" — it's an opportunity for delight. Consider: the geometric shapes repositioning with spring animations when the breakpoint changes, rather than just snapping to new positions.
- **Key detail:** Resize IS an interaction. Most users won't resize, but developers and designers will — and they're the audience for this portfolio. Rewarding the resize with animation says "I thought about every interaction surface."
