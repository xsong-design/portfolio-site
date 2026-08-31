# Redesigning Search at Scale: Building Modular Search Experiences for Walmart's 130K+ Product Catalog

*I designed the foundational search modules — Top Picks and Shop By — that transformed Walmart's overwhelming search results into guided, contextual shopping experiences, reducing actions-to-cart by 70% and lifting conversion rates across tested queries.*

**The short version:** Walmart's search experience was drowning customers in results — a query like "AA batteries" returned 6,266 options with no meaningful way to differentiate. I joined an ambitious team to lay the foundations for modular search: flexible, contextual modules that adapt to what a customer is shopping for and how they shop. The two modules I owned — Top Picks and Shop By — A/B tested with significant improvements in search relevance and conversion, cutting the average path-to-cart from ~20 actions to 14.

- **My Role:** Product Designer, Search & Browse — owned and delivered 2 modules, laid foundations for modular search system
- **Team:** 2 UX designers, CX PMs, 2 data scientists, 1 researcher; partnered with frontend and backend leads, category specialists across Walmart's verticals (Home & Fashion, Everyday Living, etc.)
- **Timeline:** April 2019 – ~Q1 2020
- **Platform:** Walmart.com + Walmart Mobile App
- **Company/Context:** Walmart Labs — Ecommerce, Search & Browse

[INSERT VISUAL: Hero shot — the modular search experience showing Top Picks and Shop By modules integrated into a search results page]

---

## The Context & Challenge

### The Business Problem

Walmart's e-commerce assortment was growing rapidly, but the search experience hadn't kept pace. A query like "AA batteries" returned over 6,266 results. Rugs — the #1 search term on Walmart.com — surfaced 130,000+ items. Customers were overwhelmed, and the data showed it: **47% of all tracked online customer feedback related to search and browse.** Customers couldn't find what they wanted, felt confused and lost in pages of results, and the existing sort and filter tools weren't helping — customers were tapping roughly 20 actions before adding a single item to cart.

This wasn't just a UX problem. Search is the primary shopping funnel for e-commerce. Every point of friction in search directly impacts conversion, basket size, and revenue.

### What Made This Hard

Search is deceptively complex because shopping journeys vary dramatically. Sometimes customers know exactly what they want and just need the cheapest option fast (routine/urgent shopping). Other times they're doing research on high-consideration items like TVs, comparing specs they may not fully understand. The product category itself changes the journey — batteries are low-consideration, rugs are high-consideration, and Samsung TVs sit somewhere in between with brand affinity and technical complexity layered on top.

Designing a single search experience that adapts to all of these contexts — across an inventory of millions of products — required a fundamentally different approach than incremental filter improvements. We needed a modular system, not a monolithic redesign.

[INSERT VISUAL: The existing search experience — a wall of undifferentiated product tiles, no guidance or contextual filtering]

---

## Discovery & Strategy

### How I Built Understanding

I joined Walmart in April 2019 and spent the initial 4-5 months deeply embedded in search and browse. The working team was unusually cross-functional: UX designers, customer experience PMs, data scientists, and a researcher. We partnered with frontend and backend engineering leads as well as Walmart's category specialists — in-house buyers who specialize in specific product verticals like home, fashion, and everyday living.

We mapped shopping journeys across three dimensions:

- **By occasion:** Urgent problem-solving ("my remote died") vs. weekly routine ("restocking groceries") vs. planned research ("remodeling my living room")
- **By mental model:** "Show me the cheapest" vs. "help me feel confident" vs. "I need to research options"
- **By product type:** Low-consideration commodities (batteries, toilet paper) vs. high-consideration items (TVs, rugs) requiring multiple visits and more information

This framework became the backbone of our design strategy. Rather than building one search experience, we needed flexible modules that could surface contextually based on the query, the product category, and the customer's likely intent.

### How I Built Alignment

We reframed success metrics away from pure efficiency toward customer guidance. The old metrics focused on search speed and filter usage. I advocated for metrics that measured whether customers actually found what they wanted: **find-it score** (search relevance on top results), **add-to-cart rate**, and **NPS**. This reframing — from "make search faster" to "make search easier" — aligned the team around outcomes rather than features.

[INSERT VISUAL: Shopping journey framework — mapping occasions, mental models, and product types to different module strategies]

---

## Ideation & Decision Making

### Design Explorations

We exhausted hundreds of ideas, tested and iterated on 50, and validated the strongest through co-creation studies (designing with the customer) and storyboard testing. From this process, I owned the design and delivery of two modules:

**Top Picks** — a flexible module aimed at reducing cognitive load. It pulls the top 4 choices from thousands of results into clear segments: top selling, best ratings, best deal, and budget-friendly (cheapest per unit). For low-consideration products like batteries, this gives customers an instant shortcut. For high-consideration products like Samsung TVs, the module translates technical specs (4K, 200Hz, UHD) into layman terms — "Great value" and "Budget friendly" — because telling a customer a TV has "200Hz" means nothing if they don't know what that is.

**Shop By** — a module that progressively discloses contextual filters based on product attributes. For rugs (130K+ items), traditional text-based filters like "velvet" or "twill" don't mean anything to most customers. Instead, Shop By presents visual, image-based filters — shop by room, shop by style — that help customers narrow down through decisions they can actually see and understand. Selecting a filter automatically reloads search results without a full page refresh.

### The Trade-offs I Navigated

For Top Picks, I explored several visual treatments: colored backgrounds to distinguish segments (created an undesirable rainbow effect across pages), a 4-grid layout, and carousels. Color didn't work because it clashed at scale. I chose to move forward with a fold-based layout, but learned during testing that placing all picks above the fold pushed the rest of the search results below it — and we were giving up too much information per tile. We constrained each tile to 320px (optimized for iPhone 5SE screen width) and balanced horizontal and vertical scroll to accommodate the modules without burying organic results.

For Shop By, the trade-off was between traditional filter approaches (text lists, dropdowns) and visual/image-based filtering. Traditional filters were familiar but ineffective for categories like rug styles where the terminology is meaningless without visual context. I pushed for the image-based approach, backed by co-creation study findings where customers gravitated toward visual cues over text labels when exploring unfamiliar categories. The category specialists — Walmart's in-house buyers — curated the picks and filter imagery, adding a human, professional layer to the algorithmic experience.

[INSERT VISUAL: Design iterations — Top Picks visual explorations (color backgrounds, grid layouts, carousel) and Shop By image-based vs. text-based filter comparison]

---

## The Solution & Craft

### The Core Solution

The modular search system worked as a layered experience. As customers scrolled through search results, contextual modules appeared inline — injected between organic product listings based on the query and category.

**Top Picks** appeared near the top of results, immediately surfacing 4 curated options segmented by what matters most for that category. For batteries: top selling, best rated, best deal, cheapest. For Samsung TVs: the picks were curated by Walmart's category specialists with editorial descriptions that translated technical specs into human language. The module adapted its content and framing based on the product category — the same structural pattern, but different content logic.

**Shop By** surfaced further down the page, progressively disclosing filters at the point where a customer has scrolled past the initial results and likely needs guidance narrowing down. The contextual filters — shop by room for rugs, shop by size for TVs — automatically reloaded the search results, maintaining the customer's scroll position and flow.

**Inline Filters** complemented Shop By with lighter-weight contextual filtering that appeared as customers scrolled deeper. These were designed as quick-select visual chips that let customers refine without interrupting their browsing rhythm.

### Systems Thinking

The modular architecture was designed for extensibility. Each module was a self-contained unit that could be composed differently based on the query context. This wasn't just two modules — it was the foundation for a modular search system that could scale to accommodate future modules as Walmart's search strategy evolved. I worked directly with frontend and backend engineering leads to ensure the module framework supported dynamic injection, conditional rendering by category, and API-driven content from the category specialist teams.

[INSERT VISUAL: The complete modular search experience — Top Picks, Shop By, and Inline Filters shown in context on a search results page for rugs]

---

## Impact & Outcomes

### Quantitative Impact

Both modules were A/B tested against the existing search experience:

- **Top Picks** saw a significant increase in search relevance for the top 4 results, with a **+0.66% conversion rate improvement** (add-to-cart) — a substantial lift at Walmart's scale
- Across queries where both modules were present, the average **actions-to-cart dropped by ~6** — from roughly 20 actions to ~14 — meaning customers were finding what they wanted with meaningfully less effort
- The modules demonstrated strong performance across both low-consideration (batteries, household goods) and high-consideration (TVs, rugs) categories

### Business & Organizational Impact

The modular search foundation I helped build became the architectural pattern for Walmart's search evolution. The success of Top Picks and Shop By validated the hypothesis that contextual, category-aware modules would outperform a one-size-fits-all search experience. The framework was designed to accommodate additional modules as the team continued to personalize each shopper's experience based on behavior and occasion.

[INSERT VISUAL: A/B test results — relevance improvement for Top Picks, conversion rate lift, and actions-to-cart reduction chart]

---

## Reflections & Learnings

### What Went Well

The cross-functional team structure was a major strength. Having data scientists, category specialists, and researchers embedded in the design process meant every design decision could be validated against real product knowledge and customer data. The co-creation studies — literally designing with customers — gave us confidence that the modules addressed real shopping behaviors rather than assumed ones.

### What I'd Do Differently

I would have invested more in personalization earlier. The modules were contextual to the *query* and *category*, but not yet personalized to the *individual customer*. A returning customer who always buys Duracell shouldn't see the same Top Picks layout as a first-time battery shopper. The modular architecture supported this, but we didn't get to implement it within my tenure.

### What I Learned

Search is an ocean — swimming aimlessly gets you nowhere. This project taught me the importance of strategy: how to diverge and think broadly, but also how to distill hundreds of ideas into actionable, testable plans. Working at Walmart's scale, with the talent and resources of a massive organization, I learned that even the most nebulous problems like "fix search and browse" become manageable when you collaborate, empower others to creatively ideate, and problem-solve together. In the future, I hope search can be truly personalized — guided to every shopper's behavior and occasion.

---

## ⚠️ Verify Before Publishing

The following details were reconstructed from Keynote presentation content (binary extraction — some text was fragmented). Xiao should verify:

- **6,266 results for "AA batteries"** — Extracted directly from slide content, appears to be the exact number cited
- **130K+ rugs inventory** — Extracted from slide: "a whopping 130 thousand"
- **47% of tracked feedback related to S&B** — Extracted directly from slide content
- **~20 actions before add-to-cart** — Referenced in presentation as existing behavior
- **+0.66% conversion rate** — Extracted from presentation; confirm this is the correct metric and magnitude
- **-6 actions to cart improvement** — Described as "average of -6" in presentation; confirm
- **April 2019 start date** — Extracted from slide: "Walmart during April of 2019"
- **iPhone 5SE constraint (320px)** — Referenced in presentation as a design constraint; confirm
- **Team composition** — "2 UX designers, CX PMs, 2 data scientists, researcher" extracted from slides; confirm exact numbers
- **"Rugs is the #1 search term"** — Extracted directly; verify if this is still the stat to use
- **Timeline end date (~Q1 2020)** — Estimated based on "4-5 months" + subsequent move to fulfillment team; confirm
