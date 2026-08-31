# Designing Budget Handling and Reporting for Meta's Integrated Marketing Messages Experience

*I designed the onboarding, budget handling, and post-creation reporting for integrating WhatsApp marketing messages into Ads Manager — helping advertisers understand and trust a new cross-channel optimization model that drove +20% ROAS in early tests.*

**The short version:** Meta needed to integrate WhatsApp marketing messages directly into Ads Manager campaigns so the system could optimize spend across ads and messages under a single budget. I owned the onboarding experience and budget handling — the two surfaces where advertisers' expectations clashed hardest with the product model. The alpha shipped to three businesses and showed +20% ROAS, +13% purchases, and -23% cost per add to cart vs. ads-only campaigns.

- **My Role:** Product Designer — Onboarding, Budget Handling, Post-Creation Reporting
- **Team:** 5 designers in initial sprint + e2e lead; later split into working teams with PM and engineering partners for build-ready specs
- **Timeline:** 2023–H1 2024
- **Platform:** Ads Manager (Web) + WhatsApp Business Platform
- **Company/Context:** Meta — Business Messaging, Engagement team

[INSERT VISUAL: Hero shot — the integrated campaign experience showing budget optimization across ads and WhatsApp marketing messages]

---

## The Context & Challenge

### The Business Problem

WhatsApp marketing messages let businesses re-engage opted-in subscribers with targeted campaigns — a fundamentally different channel from ads. But Meta's Beta kept ads and marketing messages in completely separate workflows, forcing advertisers to run two campaigns with two budgets. This killed campaign performance and blocked adoption.

Integrating the two into a single campaign with optimized delivery could unlock **$3.5B in incremental revenue by 2030**. The target users were performance marketers at large advertisers with $20K+ monthly Ads Manager spend.

### What Made This Hard

The project sat at the intersection of three organizations with competing priorities. Business Messaging wanted to maximize marketing message adoption and revenue. Ads Experience wanted to protect Ads Manager's streamlined workflow and avoid revenue regression. WhatsApp wanted to protect the consumer experience with higher friction guardrails.

My surfaces — onboarding and budget — were where these tensions collided hardest. Budget handling was the most politically charged design problem in the project: Business Messaging wanted optimized delivery on by default, Ads wanted minimal disruption to existing budget controls, and advertisers expected something entirely different from both.

[INSERT VISUAL: Framework showing the three-org tension and how onboarding + budget handling sat at the center of competing priorities]

---

## Discovery & Strategy

### How I Built Understanding

I was part of a 5-designer sprint that explored the end-to-end integrated experience. My focus areas were onboarding (how do advertisers activate and set up marketing messages?) and budget handling (how do advertisers understand and trust optimized delivery across ads and messages?).

We ran prototype usability testing with 10 performance marketers across priority markets (Brazil, India, Mexico, Indonesia, US, UK). The findings on my surfaces were the most alarming:

- **All 10 participants** raised significant concerns about optimized delivery to their subscribers
- **9 out of 10** expected all subscribers to receive the campaign, spending budget on messages first — the exact opposite of how optimized delivery works
- Advertisers mapped marketing messages to **email campaigns** (guaranteed delivery, explicit control) not ads (algorithmic optimization)

One participant captured it perfectly: *"With subscribers, they are my loyal customers so I expect significantly higher conversion and expect bulk of my budget (60-70%) to be assigned to WhatsApp. I will not be OK with the reverse because only I can determine the potential with WhatsApp for my business."*

This wasn't a UI problem — it was a conceptual gap. Advertisers fundamentally didn't expect a paid messaging product to provide optimized delivery. This insight reshaped how I approached both the onboarding flow and the budget controls.

### How I Built Alignment

I presented research findings to Monetization Design Leads alongside the broader team, framing the budget comprehension failure not as "the design didn't work" but as "we've uncovered a conceptual gap that needs both in-product and out-of-product mitigation." This opened the conversation to GTM education and sales enablement alongside product changes — rather than just "redesign the budget card."

[INSERT VISUAL: Research synthesis — the mental model diagram showing how email marketing, Ads Manager, and WhatsApp expectations conflicted around budget and delivery]

---

## Ideation & Decision Making

### Design Explorations

The team explored **16 total options** across the full experience. For my surfaces, the key explorations centered on two questions:

1. **Onboarding:** How much context do advertisers need before they create their first integrated campaign? And who is doing the setup — the same person creating campaigns, or someone else?
2. **Budget:** How do we communicate that delivery will be optimized across ads and messages when advertisers expect to control budget allocation explicitly?

The research had shown that the person creating a campaign is often not the same person who manages account settings. This meant the creation flow couldn't assume the advertiser had seen the onboarding context. Every campaign needed to independently communicate that marketing messages were included and how budget would work.

### The Trade-off I Navigated

For budget handling, I faced a direct conflict: the product model optimized delivery automatically (the system decides how to split spend for best ROI), but advertisers expected manual control (I decide how much goes to messages vs. ads). Giving full manual control would undermine the optimization that made integrated campaigns valuable. But hiding the allocation entirely would erode trust.

I designed for **transparency without control** — showing advertisers how budget was being allocated and what results it was producing, without giving them a lever to override the optimization. The estimated daily results card was extended to include "Messages Delivered" estimates, giving advertisers a preview of the split before they hit publish. This addressed the core anxiety ("how much of my budget will go to messages?") without fragmenting the optimization.

After the sprint, the team split into working groups aligned to PM and engineering partners for build-ready specs. I took budget handling and post-creation reporting through to final specs — designing the campaigns table integration that would close the feedback loop after send.

[INSERT VISUAL: Before/after of the budget and estimated results experience — showing how the design communicated delivery split without giving override control]

---

## The Solution & Craft

### The Core Solution

**Onboarding:** I designed a proactive activation flow available from multiple entry points in Ads Manager. Only businesses that explicitly activated marketing messages at the account level would see any changes in their creation flow. After activation, setting up reply handling and uploading subscribers were required gates before a campaign could send messages. For high-volume senders, I designed subscriber guardrails — rate limits on initial campaigns with a formal verification path for businesses that needed to send at scale.

**Budget Handling:** The estimated daily results card was extended with a "Messages Delivered" estimate alongside existing reach and impression projections. This gave advertisers a concrete expectation of how many subscribers would receive messages — directly addressing the research finding that 9 out of 10 expected all subscribers to be messaged. By showing the estimate upfront, advertisers could calibrate expectations before publishing.

**Post-Creation Reporting:** I designed the integrated campaigns table to surface marketing messages as a line item alongside ad placements in the existing breakdowns experience. Advertisers could compare ROI across ads and messages within the same view. "Delivered Messages" was introduced as a new metric in performance presets — not auto-populated initially (to avoid null states for the majority of campaigns without messages), but surfaced through lightweight onboarding after an advertiser's first integrated campaign.

The final creation flow shipped as a **hybrid** — both the Audience card and Placements card included marketing message controls, giving advertisers two touchpoints to understand and manage whether their campaign included messages.

### Systems Thinking

The reporting patterns I designed — integrating a non-ad delivery channel as a comparable line item in the campaigns table — established a framework for how future messaging products could surface alongside ads in performance reporting. The activation flow pattern (account-level opt-in → readiness gates → creation integration) was designed to be reusable for future non-ad capabilities in Ads Manager.

[INSERT VISUAL: The integrated campaigns table showing marketing messages as a breakdown line item alongside ad placements, with the new Delivered Messages metric]

---

## Impact & Outcomes

### Quantitative Impact

The alpha launched to three onboarded businesses, producing externally sharable results:

**Bombay Shaving Company** (India, DTC) — the strongest proof point from an A/B test:
- **+20% ROAS** vs. BAU (ads-only)
- **+13% more purchases**
- **-23% cost per add to cart** (95%+ confidence, statistically significant)
- **-18% lower cost of sales** (84% confidence, directional)

**XYXX** (India, mid-market retailer) — first external case study:
- **8% improvement in cost per result** in a sales campaign

**OZiva** (India, Accelerate Program):
- **11% better CPA** for Liquidity (Ads+MM) vs. BAU

These results validated the core hypothesis: optimized delivery across ads and messages drives better campaign performance than running them separately.

### Business & Organizational Impact

The results gave the GTM team concrete proof points to drive broader adoption. The Bombay Shaving Company data — with statistically significant cost per add to cart improvements — became the anchor case study for sales enablement across priority markets.

[INSERT VISUAL: Alpha results summary — the three case studies with key metrics, or the Bombay Shaving Company A/B test data]

---

## Reflections & Learnings

### What Went Well

The design sprint format — 5 designers exploring the full experience end-to-end before splitting into focused working teams — was the right call for a project of this scope. It gave everyone shared context on the integrated experience before we went deep on individual surfaces. I built relationships with designers across Ads Experience that carried through the entire project.

### What I'd Do Differently

I would have pushed to involve the GTM and sales team earlier in the budget handling design. Much of the comprehension gap around optimized delivery couldn't be fully solved in-product — advertisers needed education from their Meta reps to recalibrate expectations from email-style guaranteed delivery to algorithmic optimization. Having that education strategy in place earlier would have let me make bolder design choices in the creation flow.

### What I Learned

Working this broadly — across Business Messaging, Ads, and WhatsApp — and then later partnering closely with Ads counterparts on build-ready specs was one of the best professional experiences I've had. The scale of the collaboration (designers, PMs, engineers, researchers, content strategists across multiple orgs) taught me that the hardest design problems aren't about pixels. They're about aligning competing organizational incentives around what's actually best for the user. The budget handling design only worked because I understood what all three orgs needed, not just my own.

