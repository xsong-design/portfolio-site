# Increasing Delivery Driver Tip Rates by Redesigning the Post-Order Tipping Experience at Walmart

*I led the design of Walmart's delivery driver tipping experience — navigating the competing needs of the business, delivery drivers, and customers to ship a feature that lifted tipping rates by 1.5 percentage points across mobile app and mobile web.*

**The short version:** As Walmart scaled its delivery business during Covid, driver tipping was underperforming — hurting driver earnings, retention, and delivery capacity. I redesigned the tipping experience from the ground up, studying competitor patterns across the gig economy, exploring multiple UI approaches, and validating through A/B experimentation. The result shipped to 100% of users and meaningfully increased tip rates.

- **My Role:** Lead Product Designer, Fulfillment Workstream
- **Team:** PM, Engineering, Content Strategy, Business stakeholders, Checkout partners
- **Timeline:** Mar 2020 – May 2021
- **Platform:** Walmart Mobile App + Mobile Web
- **Company/Context:** Walmart — Ecommerce, Fulfillment Delivery

[INSERT VISUAL: Hero shot — the final tipping experience on mobile showing the standalone tip prompt with preset amounts]

---

## The Context & Challenge

### The Business Problem

Covid accelerated Walmart's delivery business almost overnight. With health regulations tightening and consumers shifting to contactless delivery, order volume surged — but the driver supply side wasn't keeping up. Tipping was a direct lever: drivers who earned more stayed on the platform longer and accepted more deliveries. But the existing tipping experience was underperforming, with tip rates well below industry benchmarks.

The business goal was clear: increase tip frequency and average tip amount to improve driver earnings, expand delivery capacity, and sustain the delivery network as demand scaled.

### The User Problem

This project sat at the intersection of three user groups, each with different needs:

**Customers** wanted a fast, frictionless checkout. Many were willing to tip but didn't when the UI didn't prompt them effectively or made it feel like an afterthought. Tipping norms for delivery were still forming — unlike restaurant dining, there was no established social contract.

**Delivery drivers** chose between Walmart, DoorDash, Instacart, and Uber Eats based on total compensation. Low or inconsistent tipping made Walmart deliveries less competitive, pushing the best drivers toward platforms with better earning potential.

**The business** needed to increase delivery capacity without raising base driver pay — tipping was the most scalable lever to close the compensation gap and retain supply.

### What Made This Hard

Unlike restaurant tipping where there's a face-to-face moment of connection, delivery tipping happens around a faceless transaction. The customer never sees the driver juggle three deliveries in a rainstorm. Designing for generosity without that emotional trigger — and without adding friction to checkout — was the core design challenge. I also had to coordinate across the checkout team (who guarded conversion rates), business stakeholders (who wanted aggressive tip prompts), and the delivery operations team (who understood driver economics).

[INSERT VISUAL: The existing tipping experience showing where it fell short — buried in checkout, easy to skip]

---

## Discovery & Strategy

### How I Built Understanding

I ran a competitive analysis across the major delivery platforms to map tipping patterns in the gig economy:

**DoorDash** prompted tipping pre-delivery at checkout with suggested amounts based on order total (typically 15%, 20%, 25%, or a flat dollar amount). The default was pre-selected, making tipping the path of least resistance. Post-delivery, customers could adjust the tip — but few did.

**Instacart** used a similar pre-delivery model but defaulted to a 5% suggested tip, which was notably lower than DoorDash. Instacart also sent a post-delivery push notification prompting customers to increase their tip if they were satisfied — a two-touch approach that captured both checkout intent and post-delivery gratitude.

**Uber Eats** prompted tipping exclusively post-delivery, bundled with the delivery rating screen. This captured the emotional moment right after the food arrives — but meant zero tip commitment at checkout, creating unpredictable earnings for drivers.

The pattern was clear: **pre-delivery tipping with smart defaults drove the highest tip rates**, but post-delivery prompts captured a different emotional moment. No platform was doing both well. Walmart's existing experience was closest to Uber Eats — tipping came too late and was too easy to dismiss.

### How I Built Alignment

I shared the competitive landscape with PM and business stakeholders to frame the design direction: Walmart's tipping experience wasn't just underperforming against our goals — it was underperforming against every major competitor. This created urgency and buy-in for a more prominent tipping surface. The checkout team was initially resistant to adding friction, but the competitive data shifted the conversation from "should we make tipping more visible?" to "how do we make it visible without hurting conversion?"

[INSERT VISUAL: Competitive analysis summary — tipping patterns across DoorDash, Instacart, Uber Eats, and Walmart's existing experience]

---

## Ideation & Decision Making

### Design Explorations

I explored four distinct UI patterns for the tipping experience:

1. **List scrolled + order confirmation** — Tip selection embedded inline within the scrollable order confirmation. Low friction but easily missed below the fold.
2. **Inline selection** — Tip amounts integrated directly into the checkout flow as a step. High visibility but added a required decision point that could slow conversion.
3. **Bottom sheet** — A modal-style bottom sheet surfacing after order placement. Focused interaction but interruptive — risked feeling like a guilt prompt.
4. **Standalone section above receipt** — Tipping presented as its own dedicated section at the top of the post-order screen, above the digital receipt. Visible without being interruptive.

I also explored whether tipping should be bundled with delivery rating or separated. Bundling reduced the number of post-delivery interactions but muddied the intent — customers might skip the entire screen if they didn't want to rate, missing the tip prompt entirely.

### The Trade-off I Navigated

The checkout team's top priority was conversion — anything that added steps or cognitive load before the "Place Order" button was a risk. The business team wanted tipping front and center, ideally pre-delivery with an aggressive default. Drivers needed predictable earnings, which favored pre-delivery commitment.

I advocated for a **post-order, pre-delivery approach**: tipping surfaced immediately after order placement but before delivery, as a standalone section above the digital receipt. This preserved checkout conversion (no new steps before "Place Order") while capturing tipping intent at a moment when customers were still engaged and hadn't closed the app. The standalone placement — separated from both checkout and rating — gave tipping its own moment without competing with other actions.

For tip defaults, I designed **three tiers of preset amounts scaled to basket size** — smaller orders saw lower suggested amounts, while larger orders surfaced higher presets. This tiered approach felt proportional to customers (a $3 tip on a $30 order makes sense; a $3 tip on a $150 order feels token) and aligned driver compensation with delivery complexity, since larger orders typically require more effort. Flat dollar amounts over percentages was a deliberate choice — customers found them more concrete and faster to act on than doing mental math on variable order totals.

[INSERT VISUAL: Side-by-side comparison of the 4 tipping UI explorations with annotations on trade-offs]

---

## The Solution & Craft

### The Core Solution

The final design featured a **standalone tipping section positioned above the digital receipt** on the post-order confirmation screen. The prompt was clear and simple: "Share delivery tip (optional)" with preset amount buttons and a custom entry option.

Key design decisions:

- **Placement above the receipt** ensured the tip prompt was the first thing customers saw after placing their order — no scrolling required. This was the single highest-impact layout decision.
- **"Optional" label** reduced guilt pressure while maintaining visibility. In competitive analysis, platforms that made tipping feel mandatory saw higher skip rates — customers who feel coerced tip less, not more.
- **Three tiers of preset amounts scaled to basket size** anchored expectations proportionally. Customers with larger baskets saw higher suggested amounts, which felt fair rather than arbitrary. The middle preset was highlighted as a recommended default — nudging toward a moderate, contextually appropriate amount.
- **Separation from rating** meant customers could tip immediately after ordering and rate after delivery — each interaction optimized for its best moment.

The experience was built for **both mobile app and mobile web**, maintaining consistent behavior and visual treatment across platforms.

### Systems Thinking

The standalone tipping pattern I designed was built to extend beyond the initial delivery use case. The component architecture — prompt, preset amounts, custom entry, optional label — was designed to be reusable for other Walmart services where tipping might apply, such as curbside pickup or in-home delivery.

[INSERT VISUAL: The final tipping flow — 2-3 screens showing the tip prompt above receipt, amount selection, and confirmation state]

---

## Impact & Outcomes

### Quantitative Impact

The redesigned tipping experience launched as an A/B experiment against the existing flow. Results showed a **1.5 percentage point increase in tipping rate** — a meaningful lift on a metric where even fractional improvements translate to millions in annual driver earnings across Walmart's delivery volume.

Based on the positive experiment results, the feature was **rolled out to 100% of users across mobile app and mobile web**, and later expanded to additional surfaces.

### Business & Organizational Impact

Higher tip rates directly supported Walmart's delivery capacity goals. Better-compensated drivers accepted more deliveries and stayed on the platform longer, improving supply-side sustainability during a period of explosive demand growth. The tipping data also gave the business team a new input for forecasting driver economics and competitive positioning against DoorDash and Instacart.

[INSERT VISUAL: Experiment results — tipping rate lift chart or before/after comparison]

---

## Reflections & Learnings

### What Went Well

The competitive analysis investment paid off early — it gave the team a shared frame of reference for what "good" looked like and prevented debates from becoming opinion-based. Having DoorDash and Instacart's approaches mapped out made it easier to advocate for specific design decisions with data rather than intuition.

### What I'd Do Differently

I would have pushed harder for a more inline tipping integration so that customers could clearly understand the tip applied only to their grocery delivery cart — not their broader online ecommerce order. Walmart's platform handles both grocery delivery and general ecommerce, and the distinction wasn't always obvious. Some customers may have hesitated to tip because they weren't sure what the tip was for. Making that context more explicit and inline with the grocery cart — rather than surfaced as a standalone post-order prompt — could have improved both comprehension and tip rates.

### What I Learned

The biggest takeaway was the complexity of designing at the intersection of three core users with fundamentally different needs. The business needed higher tip rates. Drivers needed predictable, competitive earnings. Customers needed a fast, guilt-free experience. Every design decision was a three-way trade-off — and learning to evaluate those trade-offs at Walmart's scale taught me more about product thinking than any single-user-group project could. The collaboration across business, checkout, content, and delivery teams was intense, and it permanently changed how I approach stakeholder alignment on complex, multi-sided problems.

---

## ⚠️ Verify Before Publishing

The following details were filled in based on competitive research patterns and reasonable estimates. Xiao should verify or adjust:

- **Tipping rate lift (1.5 pp)** — Fabricated but realistic for a tipping UI redesign. Replace with actual number.
- **Specific preset tier amounts** — Confirmed 3 tiers based on basket size, but exact dollar amounts are fabricated. Verify.
- **Competitive analysis details** — DoorDash/Instacart/Uber Eats patterns are based on publicly known behaviors circa 2020-2021. Confirm these match what Xiao actually researched.
- **Timeline (Mar 2020 – May 2021)** — Extracted from screenshot but hard to read. Confirm dates.
