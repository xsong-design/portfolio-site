# Decisions Log

Running log of project decisions. Updated by the Orchestrator agent.

## Format
Each entry follows this structure:
- **Date:** YYYY-MM-DD
- **Decision:** What was decided
- **Context:** Why this came up
- **Options considered:** What alternatives were evaluated
- **Rationale:** Why this option was chosen
- **Owner:** Who made the decision

---

## Decisions

### 2026-11-11 — Home work theater is “coming soon” until cases ship
- **Decision:** While `launch.hideWork` is true, the homepage sticky theater is one “Work coming soon” panel, then resume. Case slides and the Work nav item are hidden. Flip `hideWork` when cases are ready.
- **Owner:** Xiao

### 2026-11-11 — Early public site: WIP, hide About, resume first
- **Decision:** Launch on Vercel before cases are done. Hide About. Show a work-in-progress note. Recruiters can view and download the resume. Flip `site/src/lib/launch.ts` (`wip`, `hideAbout`) when the cases are ready.
- **Owner:** Xiao

### 2026-11-11 — Skills is Figma, then agents
- **Decision:** The tool lists are replaced by two lines. Figma is for the system and the states. Agents cover prototypes, HTML and CSS, specs, and the files that used to move through Framer, Zeplin, Adobe, Jira, and Confluence.
- **Context:** Xiao said he is replacing those tools with AI wherever he can, and asked to try this wording on the resume.
- **Owner:** Xiao

### 2026-11-11 — The bio is personal, not a second experience list
- **Decision:** The bio says he is drawn to complex problems, uses AI agents to simplify the work and reach a prototype faster, and skis, golfs, and plays basketball. It does not repeat the jobs.
- **Context:** Xiao said the old bio repeated the experience. He wanted the outdoors, agents in his workflow, and an interest in complex problems.
- **Owner:** Xiao

### 2026-11-11 — Walmart search is about 30% fewer clicks
- **Decision:** Top Picks and inline filters cut the path to cart by about 30%, from about 20 clicks to about 14. The +0.66% add-to-cart figure stays in the case study only.
- **Context:** Xiao agreed the count was hard to read, and said the 0.66% does not need to be on the resume. The percentage is the same 20-to-14 result.
- **Owner:** Xiao

### 2026-11-11 — Studio is named, Plume’s raise is not a result
- **Decision:** DoorDash stays one sentence, with no metric. Plume’s line says Awake helped lead the customer-site redesign after the Series B. The dollar amount stays off. Studio is software for remote control of PTZ cameras.
- **Context:** Xiao said he did not impact Plume’s raise. He described Studio as SaaS that lets remote operators follow people and cut between cameras at a venue.
- **Owner:** Xiao

### 2026-11-11 — Experience lines are full sentences
- **Decision:** The newest Meta role has four sentences, including Shopify and WooCommerce on their own line. Walmart is search, tipping, traceable tender, then fulfillment. No new numbers.
- **Context:** Xiao asked the experience section to read cohesively and use the extra space, down to the bottom of the page.
- **Owner:** Xiao

### 2026-11-11 — Sentence marks sit outside the text edge
- **Decision:** Each experience sentence gets a small sage dot in the gutter. The words stay flush with the company names. Design tools, AI tools, and Work tools use the same gap as the roles.
- **Context:** Xiao wanted a way to split sentences without indenting them, and more space between the skill groups.
- **Owner:** Xiao

### 2026-11-11 — Sage block in the resume’s bottom-right
- **Decision:** The second green mark is a small sage rectangle in the bottom-right of the PDF, the same shape as the offset block behind project images. The period after the name stays.
- **Context:** Xiao said the period was too subtle and suggested a square in the empty corner. A column rule or green section labels would have colored the type.
- **Owner:** Xiao, with the shape chosen to match the site

### 2026-11-11 — Resume kicker stays “Product designer”
- **Decision:** The line under the name stays “Product designer · 8+ years.” The name stays lowercase. Bio starts level with Experience.
- **Context:** Xiao considered “Senior product designer,” then decided to keep the kicker. The right column had been floating below the name.
- **Owner:** Xiao

### 2026-11-10 — The marketing phone looks like a chat message
- **Decision:** The marketing homepage phone shows a chat message in the WhatsApp pattern: a header, a bubble with a tail, and check marks. The coupon stays HOLIDAY / GIFT20. There is no logo.
- **Context:** Xiao asked to make the first phone screen look like a message from WhatsApp.
- **Owner:** Xiao

### 2026-11-10 — The driver and search phones show a message
- **Decision:** The driver phone shows a delivered message on a light screen. The search phone shows a product search on a light screen. Neither screen is black.
- **Context:** Xiao asked for something on the second and third screens. He suggested a delivered message for tipping and a product search for browse.
- **Owner:** Xiao

### 2026-11-10 — Illustrations share one middle density and fill the frame
- **Decision:** The three homepage pictures use the same amount of background. The driver scene is simpler than the house interior. The gift scene and the browse scene fill the frame instead of leaving empty paper.
- **Context:** Xiao said the first and third were too minimal and the second was too complex. He asked for a middle ground that uses the full picture.
- **Owner:** Xiao

### 2026-11-10 — Quieter ground and scenes with depth
- **Decision:** The homepage pictures use a paler, less yellow ground. Each figure is turned in a scene with depth. Marketing has stacked gifts. Driver tipping has a house and a car. Search has products arranged in space. The small faded sage square stays in the corner.
- **Context:** Xiao said the yellow was still too strong, and that a figure facing the camera in a flat field was not enough. He asked the backgrounds to tell the story.
- **Owner:** Xiao

### 2026-11-10 — Muted yellow backgrounds, matched figure height
- **Decision:** The homepage pictures go back to a muted yellow background, with more drawing in the field so it is not blank. The sage square returns to the small faded block in the bottom corner. The three figures share one height and one leg length.
- **Context:** Xiao said the expanded green square did not work. The earlier backgrounds felt flat. The characters looked similar but their heights and leg lengths did not match.
- **Owner:** Xiao

### 2026-11-10 — Homepage pictures are full body, with the sage square over the drawing
- **Decision:** The three homepage pictures share one framing: a full-body standing figure. Scenic backgrounds come out for this try. The small sage square expands and covers part of each drawing, like a block on an industrial design drawing. Backgrounds can return if this does not hold.
- **Context:** Xiao said the phone portrait, the full body, and the half body felt like three perspectives. He is steering toward full body, and he asked to try the green square in place of the plain backgrounds.
- **Owner:** Xiao

### 2026-11-10 — Tipping face matches the other two
- **Decision:** The Driver Tipping picture uses the same simple cartoon face as the other two homepage pictures. The realistic portrait face is replaced.
- **Context:** Xiao said the second picture's face looks different, and he likes the other faces.
- **Owner:** Xiao

### 2026-11-10 — Homepage character is one guy, and the driver has two arms
- **Decision:** The three homepage pictures use the same person: an East Asian man in his 20s with short hair. The driver has exactly two arms. There is no waving arm in the doorway.
- **Context:** Xiao said the little girl is too cute and asked for something closer to his personality. He does not have a photo to send. He also pointed at an extra arm on the tipping picture.
- **Owner:** Xiao

### 2026-11-10 — Each homepage picture carries some sage
- **Decision:** The second set of homepage pictures keeps the character scenes and mixes the site sage (#6B7F6B) with cream, sand, and charcoal. Every picture has some green. None is only green, and none has no green.
- **Context:** Xiao liked the first iteration and asked for a second, with colors that play with each other and with the accent green.
- **Owner:** Xiao

### 2026-11-10 — Homepage characters get soft shade
- **Decision:** The three homepage pictures keep their scenes and gain the soft light and shadow Xiao pointed at, so the characters feel round. Liquidity is still a holiday coupon in a message. Driver tipping is still the grocery handoff. Search is still someone looking through products. The characters on the reference sheet are not reused.
- **Context:** Xiao sent a second sheet and said he likes the shades that give the characters a three-dimensional feel.
- **Owner:** Xiao

### 2026-11-10 — Homepage pictures are character posters
- **Decision:** The three homepage pictures use the poster language Xiao pointed at: thick black outline, flat color, one cute character, small doodles. Each picture has one ground color from a small set, sage, cream, and charcoal, so they can sit on the grey page. Liquidity is still a holiday coupon sent as a message. The characters, names, and lettering on the reference sheet are not reused.
- **Context:** Xiao sent a sheet of character posters and said he likes that style.
- **Owner:** Xiao

### 2026-11-10 — Homepage pictures are line drawings
- **Decision:** The three homepage project pictures stay in the sage palette and become simple line-and-box illustrations, not photographs. Marketing Message Liquidity shows a business sending a holiday coupon in a message. Driver Tipping stays a grocery delivery at the door. Search & Browse stays a person looking through results. No logos. Case studies stay the place for screens.
- **Context:** Xiao liked the colors, said the realistic photos felt out of place on a playful site, and said the bakery portrait did not explain Liquidity. Liquidity is a holiday deal and a coupon sent as a marketing message.
- **Owner:** Xiao

### 2026-11-10 — Homepage projects lead with a photograph
- **Decision:** The three featured projects on the homepage use a generated photograph of the situation, not a screen or a device mockup. Driver Tipping is a grocery delivery at the door. Search & Browse is a person looking through results on a phone. Marketing Message Liquidity is a shop owner sending one message that finds a customer and brings one back. Case studies stay the place for the actual screens. The About page waits.
- **Context:** Xiao said the homepage was in a good place, then asked for photographic heroes instead of static screens, and described the tipping and search scenes.
- **Owner:** Xiao

### 2026-11-10 — First Meta role is TEKsystems, Liquidity only
- **Decision:** October 2022 – September 2024 is Sr. Product Designer, TEKsystems. Two sentences: supported the end-to-end integration of WhatsApp marketing messages into ads creation in Ads Manager, with the $1.4B projection by 2026; joined a small design team for the opening sprint, then led budgeting and post-creation reporting with the vertical ads, marketing messages, and metrics teams. Click to Subscribe is off. DoorDash stays as it is.
- **Context:** Xiao named the contract agency, corrected “brought” to “supported the end-to-end integration,” and said Click to Subscribe was too small. The focus is Liquidity.
- **Owner:** Xiao

### 2026-11-10 — Tundra block is shorter, and the agent collaborates
- **Decision:** The three Tundra sentences are shorter. The agent line is: visualized how Meta’s business agent would collaborate with a business on strategy, build, and delivery, including a first try for a business new to the tools. It is not “guide,” and it is not a message and an ad. There are no portfolio screens for the agent. The 44-to-17 result and Shopify and WooCommerce stay.
- **Owner:** Xiao

### 2026-11-10 — Developer onboarding went from 44 steps to 17
- **Decision:** The Tundra developer clause is a confirmed result: developer onboarding to marketing messages through the API went from 44 steps across five surfaces to 17 steps on one. It stays in the same sentence as Shopify and WooCommerce. “DevX” is not on the line.
- **Owner:** Xiao

### 2026-11-10 — Billing line off, agent line is short
- **Decision:** The billing sentence is off the resume. A short line sits under WhatsApp Manager: visualized how Meta’s business agent would guide a business through a message and an ad: strategize, build, deliver, then synthesize the results into a recommendation. He did not lead that work. The Shopify, WooCommerce, and developers.facebook.com sentence stays.
- **Owner:** Xiao

### 2026-11-10 — Tundra second line is Shopify, WooCommerce, and developers.facebook.com
- **Decision:** The second Tundra sentence is: designed onboarding and creation for WhatsApp marketing messages on Shopify and WooCommerce, and simplified the developer experience on developers.facebook.com. “Trigger send” is off that line. The billing sentence is unchanged.
- **Context:** Xiao described enabling tools businesses use to scale, including the onboarding and creation flow on those two stores and a simpler developer experience on the developer site.
- **Owner:** Xiao

### 2026-11-10 — Tundra line says supported bringing
- **Decision:** The first Tundra sentence is: supported bringing WhatsApp marketing messages into WhatsApp Manager, Meta’s own tool in Meta Business Suite, so a small or medium business could create and send them there. “1P” is not on the line. “Meta’s own tool” carries that meaning.
- **Context:** Xiao offered this wording and asked if he could say it. He supported the design effort. He did not design WhatsApp Manager.
- **Owner:** Xiao

### 2026-11-10 — Marketing messages went into WhatsApp Manager
- **Decision:** Xiao did not design WhatsApp Manager. It already existed in Meta Business Suite. The first Tundra sentence is: brought WhatsApp marketing messages into WhatsApp Manager, the Meta-owned tool already in Meta Business Suite, so a small or medium business could create and send them there. This is the Business Suite counterpart to bringing marketing messages into Ads Manager.
- **Owner:** Xiao

### 2026-11-10 — Tundra first line is WhatsApp Manager
- **Decision:** The first Tundra sentence no longer says audience send or trigger send. It reads: designed WhatsApp Manager in Meta Business Suite, the first Meta-owned tool where a small or medium business could create marketing messages and send them on WhatsApp. “1P” stays off the line. The Shopify and billing sentences are unchanged until the next pass.
- **Context:** Xiao said those product names are internal and the line was hard to understand. He joined to bring marketing messages into Meta Business Suite, in WhatsApp Manager, because Ads Manager and the APIs were not a first-party tool for small and medium businesses.
- **Owner:** Xiao

### 2026-11-10 — The o in xiao is a piece, not a filled center
- **Decision:** The o in xiao no longer fills its center. The lighter green is the top of the letter, where Meta's line arrives. The middle stays open. The other letter details stay as they are.
- **Context:** Xiao liked the two-green name, and said the filled o was still too strong inside "xiao." He asked to try only a piece of it.
- **Owner:** Xiao

### 2026-11-10 — The name is the darker green, the details are a lighter green
- **Decision:** In the hero, the name is the darker green (`#4A5D4A`) instead of black. The letter details use a lighter sage. Every letter a company line points at gets a detail: i dot (Awake), o counter (Meta), n (Livecontrol), s (Walmart), g loop (DoorDash). The a, the x, and the o in song stay plain. Labels and stems stay the quiet sage.
- **Context:** Xiao said the black and the green contrast felt weird, and asked whether the darker green should be the name and a lighter green the fill. He also asked to extend the letter detailing to the s and the n, since those are pointed at too.
- **Rationale:** One hue at two values reads as a single letter with a highlight. The darker green is already the accessible text green, at 6.5:1 on the page. The lighter fill is what separates the detail from the stroke.
- **Owner:** Xiao

### 2026-11-10 — The o stays black, the counter is sage
- **Decision:** The o in xiao stays ink. Only the inside is a sage oval that follows the counter. The floating dot in the a comes off. The lower loop of the g is sage. The i dot stays sage.
- **Context:** Xiao said the filled o looked cut and not oval, and that the dot in the a should not float there. He asked to bring back the green on part of the g.
- **Owner:** Xiao

### 2026-11-10 — Hero name carries the sage
- **Decision:** The hero layout stays. Color moves into the name: the o in xiao is sage and filled, and the i dot and the a counter are sage. The other letters stay ink. Callouts and rails stay quiet. This replaces the earlier "no letter fills" rule.
- **Context:** Xiao said the hero was too muted and pointed at the typography diagram, where the o is filled and parts of letters are highlighted.
- **Owner:** Xiao

### 2026-11-10 — Homepage projects show the company only
- **Decision:** The homepage project line is the company alone. No "Designer", no "Senior designer", and no team name. Case studies keep the full role.
- **Context:** Xiao considered swapping the title for the team — Business Messaging at Meta, Search & Browse at Walmart, and another team after he moved — then decided the company was enough.
- **Owner:** Xiao

### 2026-11-10 — Homepage job titles get shorter
- **Decision:** On the homepage project stage, the role is "Senior designer" or "Designer", on the same line as the company. Case study pages keep the full title.
- **Context:** Xiao asked to pare the job title down after the dates came off.
- **Rationale:** "Product" is already the site. Seniority is the part that differs. One line keeps the space the date used to take.
- **Owner:** Xiao

### 2026-11-10 — Homepage projects drop the date line
- **Decision:** The homepage project stage no longer shows the timeline. Company, role, description, and metric stay. Dates remain on the case study pages and the resume.
- **Context:** Xiao asked if the dates were important and suggested removing them to save space.
- **Rationale:** On this stage, company and role already place the work. The date was the quietest line and opened a gap before the description.
- **Owner:** Xiao

### 2026-11-10 — Section numbers stay large, project numbers step down
- **Decision:** "01 selected work" remains the display-size section heading. The 01 / 02 / 03 on each project become a small mono label above the title. Project facts stay, on one left edge, in this order: title, company, role, dates, description, metric. Field labels (Company, Role, Dates, Metric) come off. No facts removed.
- **Context:** Xiao said the section index and the project indexes shared a hierarchy, and the project type felt messy even though the amount of information was right.
- **Owner:** Xiao

### 2026-11-09 — Homepage projects list facts, and only real metrics
- **Decision:** Each homepage project shows company, role, a one-line description, and dates. A metric shows only when a number already exists. Liquidity uses the $1.4B projection by 2026. Driver Tipping uses tip rates up by more than 20%. Search & Browse uses clicks to cart from about 20 to about 14. The +0.66% Top Picks figure stays off. No number is invented.
- **Context:** Xiao asked for those facts on the left-to-right project stage, and said a missing metric can wait.
- **Owner:** Xiao

### 2026-11-09 — Walmart is search, tipping, then fulfillment
- **Decision:** Walmart on the recruiter PDF is three sentences, in order: modular search from idea through launch, with clicks-to-cart from about 20 to about 14; the pre-checkout tipping line, tip rates up by more than 20%; fulfillment in the app across pickup, warehouse shipment, and store delivery, for groceries and online inventory. Traceable tender for 37M+ customers stays on the website and LinkedIn. The fulfillment line leads that work. It does not say he ran Walmart’s fulfillment organization. Live resume unchanged until he says the lines are good.
- **Context:** Xiao said Walmart is as important as the long Meta role. He started on modular search, kept tipping, then moved to fulfillment and the three ways an item arrives.
- **Owner:** Xiao

### 2026-11-09 — The two-year Meta role gets two lines
- **Decision:** October 2022 – September 2024 stays two sentences on the PDF and the website. First: WhatsApp marketing messages in Ads Manager, with the $1.4B projection by 2026. Second: owned the budget experience end to end and the reporting experience, leading the collaboration with the vertical ads teams on both surfaces. Click to Subscribe is off those two lines until Xiao asks for it back. DoorDash stays one sentence. The live resume is unchanged until he says the lines are good.
- **Context:** Xiao said this role and Walmart are the important ones. The first Meta stint was two years. DoorDash and the later Meta contract were shorter.
- **Owner:** Xiao

### 2026-11-09 — Shopify and WooCommerce are surfaces
- **Decision:** The Tundra scaling line says “onto other surfaces: WhatsApp Manager, Shopify, and WooCommerce.” The word is surfaces, not services.
- **Context:** Xiao corrected the previous wording. The live resume is still unchanged until he says the lines are good.
- **Owner:** Xiao

### 2026-11-09 — Tundra lead is scaling past Ads Manager
- **Decision:** The realistic Tundra line comes first: scaled WhatsApp marketing messages past Ads Manager into WhatsApp Manager, and into Shopify and WooCommerce. The agent strategy in Meta Business Suite is the second sentence, not the lead. Billing stays on the website and LinkedIn. Live resume unchanged until Xiao says the lines are good.
- **Context:** Xiao said the strategy sentence was one thing he did, and the more realistic work was pushing marketing messages past Ads Manager into WhatsApp Manager and Shopify.
- **Owner:** Xiao

### 2026-11-09 — Homepage projects read left to right
- **Decision:** The homepage work stage keeps scroll-through, one project at a time, but the frame is horizontal. Words sit on the left. The image sits on the right, overlaps the index number, and bleeds to the right edge. Title and description stay clear of the image. Image height follows the viewport. Below 768px wide, or under 640px tall, the pin turns off and each project is a full row so nothing is clipped.
- **Context:** Xiao said the top-down image-then-caption gets cut off on many screens. He asked to try left-to-right and allowed overlap. He left the side to the Designer.
- **Options considered:** Image left and words right. Words left and image right. Words left, image right, with overlap.
- **Rationale:** The hero is type-first, so the title stays the reading start. The image is the shape that breaks the column. Fitting both in one viewport height is what stops the clip.
- **Reference file:** `Designer/homepage-ltr-spec.md`
- **Owner:** Xiao asked for the trial; Designer chose the side

### 2026-11-09 — Tundra lead is the adoption strategy, not “designed how”
- **Decision:** The Tundra lead sentence is: set the strategy for adopting an agent in Meta Business Suite, from problem to solution, so the agent could draft a WhatsApp campaign, read the results, and recommend what to send next for a business with no one in that role. The holiday example is out. “Designed how” is out on this line. Live resume unchanged until Xiao says the sentence is good.
- **Context:** Xiao said the previous line did not feel like a sentence, and that the work was an end-to-end strategy for how AI would be adopted in Meta Business Suite, including covering roles a business does not have.
- **Owner:** Xiao

### 2026-11-09 — Tundra lines drop the internal product names
- **Decision:** Public Tundra lines do not say “audience send” or “trigger send.” They say a WhatsApp campaign, an order update, and a question after a purchase. The lead sentence is the agent in Meta Business Suite: draft a campaign for the moment a business is in, such as a holiday, then read the results and recommend what to send next. Budgeting stays on the 2022 Ads Manager role unless Xiao says this contract included it. Live resume unchanged until he says the lines are good.
- **Context:** Xiao said readers would not know those product names, and asked for a plainer line about businesses using Meta Business Suite with an agent.
- **Owner:** Xiao

### 2026-11-09 — A line with no result uses scope, not a guessed metric
- **Decision:** When work has not released, the resume line names the surface, who it is for, the judgment, and the constraint. The verb stays “would.” The word “unreleased” stays in `Resume/talk-through.md` and off the public resume. No invented metric. The model sentence is the Meta business agent line.
- **Context:** Xiao asked how to make an experience read well on a resume when no results have come out.
- **Owner:** Xiao

### 2026-11-03 — Tundra includes the business agent inside Meta Business Suite
- **Decision:** Audience send was not the whole Meta Business Suite job. Xiao also designed how Meta’s business agent would draft the next trigger send or audience send for the moment a business is in, such as a holiday, then read marketing-message results and recommend the next message and campaign. No metric. On the recruiter PDF this is the second Tundra sentence. Shopify and billing stay on the website and LinkedIn. Live resume unchanged until he says the lines are good.
- **Owner:** Xiao

### 2026-11-03 — Tundra is one umbrella, and it has no metric
- **Decision:** The Tundra contract is one scope: audience send in Meta Business Suite for small and medium businesses, onboarding and message creation on Shopify and WooCommerce through their APIs, and how service messages, marketing messages, and trigger send would be charged. No number, because a lot of it had not released. Trigger send means order confirmation and updates. The draft lines are in `Resume/talk-through.md`. The live resume still has the older wording until Xiao says the new lines are good.
- **Context:** Xiao described the stint while thinking, and said he could not name a metric.
- **Owner:** Xiao

### 2026-11-03 — One page by cutting lines, not roles
- **Decision:** The recruiter PDF stays one page by shortening entries. Every role stays, so the years stay explained. Extra sentences go to high-impact work: Meta Ads Manager and Walmart. Awake, LiveControl, and DoorDash stay at one sentence on the PDF even though DoorDash is recent. Xiao still confirms this in `Resume/talk-through.md` question 6 before the page changes.
- **Context:** Xiao asked whether to drop information or drop older roles, and said impactful work should get more space while older work stays light.
- **Owner:** Xiao

### 2026-11-03 — Resume talk-through lives in Resume/talk-through.md
- **Decision:** The three cuts, the draft lines, the LinkedIn blocks, and the open questions live in `Resume/talk-through.md`. Xiao edits that file, including from mobile. The website and PDF do not change until he answers and says the lines are good.
- **Owner:** Xiao

### 2026-11-03 — Resume has three cuts of the same facts
- **Decision:** One set of facts, three lengths. The website `/resume` can hold the lead sentence plus one or two more on recent roles. The recruiter PDF stays one page and keeps the lead sentence, with a second sentence only on the newest role if it still fits. LinkedIn uses the website sentences in first person. Lead sentences are a draft until Xiao confirms them. No new metrics.
- **Context:** Xiao asked what the resume writer skill recommends, and described a longer site version, a tighter one-pager for recruiters, and LinkedIn he can paste.
- **Owner:** Xiao

### 2026-11-03 — Tundra role is senior, with scope lines
- **Decision:** Newest Meta contract is Sr. Product Designer, Tundra Technical. The summary stays as employment-level. Under Experience, three lines: audience send and the first trigger-send launch in Meta Business Suite; audience-send campaigns on Shopify and WooCommerce beside existing trigger send; billing notices when service messages started charging. No metrics. The later Shopify and WooCommerce improvement stays off the resume because it was briefed, not designed.
- **Context:** Xiao liked the short top, then asked for detail under the Tundra job so it would not look bare, and said that role was senior too.
- **Owner:** Xiao

### 2026-11-03 — Recent Meta contract stays, the work does not
- **Decision:** The Tundra contract stays on the resume as employment only: Meta, Product Designer, November 2025 – September 2026, one line that he was on WhatsApp marketing messages. No 1P, 3P, Shopify, WooCommerce, or billing detail. 3P is not ready to show: the shipped surface depends on partner APIs and is not a strong experience. Later improvement work with Shopify and WooCommerce was briefed, not designed by Xiao.
- **Owner:** Xiao

### 2026-11-03 — Second Meta contract is Tundra, Nov 2025 – Sep 2026
- **Decision:** Newest resume role is Meta, Product Designer, contract through Tundra Technical, November 2025 – September 2026. Scope is audience send in Meta Business Suite, audience send on Shopify and WooCommerce, and billing notices when service messages started charging. Facts only from Xiao’s talk-through and the scaling-marketing-messages case. No new metrics. Older roles follow the DoorDash-era resume he supplied, rewritten shorter. Title on the page is Product designer, not User Experience Designer.
- **Owner:** Xiao

### 2026-11-03 — Resume writer skill, same voice as the cases
- **Decision:** Resume experience lines are written with `.cursor/skills/resume-writer/`. Same professional voice as the Case Study Writer. Shorter: one sentence a line, scope and a confirmed result, gaps marked instead of invented metrics. The Orchestrator reads that skill before changing resume copy.
- **Owner:** Xiao

### 2026-11-03 — Resume drops the brush name
- **Decision:** Remove the brush stroke and the tracked “XIAO SONG” lockup. Resume type follows the About page: Playfair for company and school names, DM Sans for roles and body, JetBrains Mono for labels and dates. Sentence case. The PDF keeps a plain “xiao song / Product designer” masthead so the file still has a name.
- **Owner:** Xiao

### 2026-11-03 — Resume matches the site and is downloadable
- **Decision:** The public resume keeps the two-column sheet from `Resume/Resume 2025.pdf`. Colors and type match the live site (greyscale, sage, Playfair Display, DM Sans, JetBrains Mono). It lives on `/resume` and as a PDF download. The old portfolio password is not published.
- **Context:** Xiao liked the recreation of the InDesign page and asked for the website’s colors and type, on the resume page and as a downloadable PDF.
- **Owner:** Xiao

### 2026-11-03 — This chat is the resume writer
- **Decision:** Resume updates happen in this conversation. Source is the InDesign file at `Desktop - Xiao’s MacBook Air/Design/Resume.indd` (saved 2025-03-05). Deliverables are updated copy, the `/resume` page, and a downloadable PDF. The `.indd` file is not edited in InDesign.
- **Context:** Xiao asked to use this chat as the resume writer, update the old resume, put it on the site, and make a downloadable copy.
- **Owner:** Xiao

### 2026-11-02 — About headline stays “I like to orchestrate experiences”
- **Decision:** Do not use “Orchestrating intuitive user experiences that connect people, purpose, and possibilities” on the site. Keep the short catchphrase as the About h1.
- **Owner:** Xiao

### 2026-11-02 — About skills: AI-forward, not replacement
- **Decision:** Skills section leads with AI as help on the design journey — fill gaps, take slow work, keep time for UX, complexity, and human interaction. Existing tools stay. No “AI replaces” copy. Intern metaphor was for the writer, not the page.
- **Owner:** Xiao

### 2026-11-02 — About: Meta, DoorDash, Walmart; map and build; craft in systems
- **Decision:** About intro lists Meta and DoorDash most recently, Walmart before that, plus e-commerce, big tech, agencies, startups, Series A. Keep the business-logic / clear-and-purposeful lines. Philosophy: map *and* build relationships; XFN heard; bridge for teammates as well as end users; craft means the right pattern, or a new one, not forcing the library.
- **Owner:** Xiao

### 2026-11-02 — Driver Tipping problem: checkout, grocery-only, Spark
- **Decision:** Live case: DoorDash-era tip was post-delivery and got lost; Xiao designed moving it to checkout. Copy: 100% to the driver, grocery orders only, because store and fulfillment carts were merging. Three parties: Spark fleet / slots, budget-sensitive customers, drivers who should not hop apps. No new metrics.
- **Owner:** Xiao

### 2026-11-02 — Driver Tipping origin is COVID, DoorDash, time slots, own fleet
- **Decision:** Live Driver Tipping opening uses Xiao’s talk-through only. Template copy (2024 dates, 52%→68%, buried-checkout problem, interview/NPS list) is removed until he confirms it. Tipping exists to help Walmart retain an owned fleet vs gig-app hopping. Year set to 2020–2021 to match COVID; exact months still unconfirmed.
- **Owner:** Xiao

### 2026-11-02 — Public heroes are Liquidity, Search & Browse, Driver Tipping
- **Decision:** Three homepage cases: Marketing Message Liquidity, Search & Browse, Driver Tipping. Scaling Marketing Messages stays `featured: false`. It is a private draft / interview note until Xiao asks Meta for files and gets a yes. No placeholder product screens.
- **Context:** Latest Meta assignment is short, unshipped or file-locked; Xiao does not expect visuals.
- **Owner:** Xiao

### 2026-11-02 — 1P, 3P, and service messages are one case
- **Decision:** Do not publish three Meta drafts. One hidden case, `scaling-marketing-messages`: strategy to scale marketing messages onto more surfaces. MBS audience send is the design-weight section; Shopify/WooCommerce and billing remonetization stay brief. Old slugs `1p-buying`, `3p-buying`, `service-messages` removed.
- **Context:** Xiao: 3P and service remonetization are not beautiful standalone cases; recruiters get more from a holistic scale story.
- **Owner:** Xiao

### 2026-11-02 — Third Meta draft is service-messages remonetization (billing comms)
- **Decision:** Hidden case `service-messages`: billing team in monetization; three WhatsApp paths (trigger, audience, service); service messages = post-purchase questions/requests, remonetized late September or early October; Xiao on communication strategy (email, in-app, other routes) with AI agents as a working method. Return-assignment through-line: scale marketing messages to more surfaces.
- **Owner:** Xiao

### 2026-11-02 — 3P Buying is audience send on Shopify and WooCommerce
- **Decision:** 3P draft is brief: partner platforms Shopify and WooCommerce; trigger send already exists via Shopify APIs (WhatsApp order tracking); 3P adds audience send / campaigns. Mention it because it is a large piece of Meta’s business, even if the surface is not the most refined. Still unfeatured.
- **Owner:** Xiao

### 2026-11-02 — 1P Buying is MBS, not Ads Manager; Xiao owned audience send
- **Decision:** Live 1P draft: Meta Business Suite for SMBs vs Ads Manager for larger advertisers; WhatsApp marketing messages in MBS; trigger send (order statuses) vs audience send (list campaigns). Xiao focused on audience send, helped trigger send, including later AI ideation. Still unfeatured.
- **Owner:** Xiao

### 2026-11-02 — 1P and 3P Buying drafts stay unfeatured until Xiao decides
- **Decision:** Two new Meta cases exist as drafts (`1p-buying`, `3p-buying`): after Liquidity, more marketing-message tools in the ecosystem; 1P on WhatsApp Manager; 3P on Shopify. `featured: false` so homepage and work listing hide them. Direct URLs stay for talk-through. Flip `featured` when Xiao wants them public. A third extra case is not started until Xiao names it.
- **Context:** Xiao asked to spin up two (maybe three) additional studies, many without visuals, and choose show vs hide later.
- **Owner:** Xiao

### 2026-11-02 — Spoken dumps are source; published voice is professional
- **Decision:** Xiao’s talk-throughs supply facts. The live case study is rewritten into professional prose, not casual speech. Craft bar updated.
- **Owner:** Xiao

### 2026-11-02 — Liquidity facts from Xiao’s talk-through
- **Decision:** Live Liquidity opening uses Xiao’s dump: MM in a different part of Ads Manager; ads = acquire, MM = retain; originally wanted budget flexibility, then one optimized budget with no strategy split; Xiao senior designer with a Design Lead on e2e, then led budget comprehension and reporting (Reporting Services + Metrics). Shipped UI and alpha numbers wait until he talks those through.
- **Owner:** Xiao

### 2026-11-02 — Pause case-study rewrites until craft bar is signed off
- **Decision:** Case Study Writer studies hiring-manager craft (story beats + spoken language) before another MDX pass. Live cases stay as-is until Xiao agrees the bar in `Case Study Writer/craft-bar.md`.
- **Context:** Xiao: take a step back; cases still feel choppy and machine-written.
- **Owner:** Xiao

### 2026-11-02 — Liquidity facts from old site; Search & Browse drafted from Keynote
- **Decision:** Liquidity live copy uses old Webflow Meta details (Q4 2022–Q3 2024, two-week sprints, rail + inline + two reappearances, reporting NUX gated on mixed campaigns) plus Xiao’s later through-line (e2e sprint, UT → owns budget and reporting). Keep Bombay / OZiva / XYXX. Search & Browse goes live as a third case for review even though it is not on songxiao.webflow.io (source: Keynote draft).
- **Context:** Xiao asked to reconfirm details from the old website, use less fancy language, and generate Search & Browse so they can review everything.
- **Owner:** Xiao

### 2026-10-29 — Reporting is part of Marketing Message Liquidity
- **Decision:** Campaign Reporting is a surface of Liquidity (onboarding + budget + post-creation reporting), not its own case study. Live MDX uses the Case Study Writer draft (Ads Manager integration, alpha metrics), not the generic delivery-dashboard story.
- **Context:** Old Webflow split budget and reporting into two pages. Xiao: reporting is part of liquidity.
- **Owner:** Xiao

### 2026-10-29 — Old site: content only, keep new visual language
- **Decision:** The old portfolio (Webflow / Adobe / songxiaoo) may be mined for **information** and **content images** (product shots, UI screenshots). It must **not** change type, color, layout, motion, or any other visual language on the new site.
- **Context:** Xiao asked to check the old site for missing pieces and possibly grab visuals, then immediately constrained: do not restyle the new site from the old one.
- **Rationale:** Greyscale + sage editorial is locked. Old-site craft is a content archive, not a design source.
- **Owner:** Xiao

### 2026-08-31 — Host on Vercel (preferred)
- **Decision:** Prefer **Vercel** (Hobby / free) for the live site. Add a Host agent that walks Xiao through deploy one step at a time.
- **Context:** Xiao asked to host the site and noted a lot of people use Vercel. The Next.js app is in `site/`. This machine had no git repo and no Vercel login.
- **Options considered:** Vercel (preferred), GitHub Pages (2026-03-10 decision, still in `site/.github/workflows/deploy.yml`)
- **Rationale:** Vercel is the native host for Next.js; free tier fits the $0 constraint. Root Directory on Vercel must be `site`.
- **Owner:** Xiao

### 2025-03-10 — Project Kickoff
- **Decision:** Established agent team structure with 6 agents (Orchestrator, Planner, Researcher, Designer, Front End, Back End)
- **Context:** Need a structured approach to building an interactive/experimental portfolio site
- **Rationale:** Separating concerns allows parallel work and clear ownership
- **Owner:** Xiao

### 2025-03-10 — Design Direction
- **Decision:** Interactive/experimental style with animations, micro-interactions, and unconventional layouts
- **Context:** Portfolio should stand out from standard template portfolios and demonstrate design craft
- **Rationale:** Xiao's role as a product designer benefits from a portfolio that shows both visual and interaction design skill
- **Owner:** Xiao

### 2025-03-10 — Tech Stack Approach
- **Decision:** Tech stack to be recommended by Researcher agent, decided by Orchestrator
- **Context:** Multiple valid frameworks and tools exist; need evidence-based recommendation
- **Rationale:** Let agents evaluate options against project constraints before committing
- **Owner:** Xiao

### 2026-03-10 — Tech Stack Decided
- **Decision:** Next.js + Tailwind CSS + GitHub Pages
- **Context:** Need a stack that Cursor AI handles well for vibe coding, free hosting, and easy content updates
- **Options considered:** Astro, plain HTML/CSS, Webflow, Squarespace
- **Rationale:** Next.js has best Cursor AI support; Tailwind maps to CSS properties intuitively for designers; GitHub Pages is free and auto-deploys
- **Owner:** Xiao

### 2026-03-10 — Skip Figma, Go Direct-to-Code
- **Decision:** Skip formal Figma design phase, go straight to building in Cursor
- **Context:** 5-week timeline (launch Apr 15) with 3-4h/week doesn't leave room for a separate design phase
- **Rationale:** Xiao is a designer and can make visual decisions in-browser. Vibe coding in Cursor is faster than Figma → handoff → code for a solo project.
- **Owner:** Xiao

### 2026-03-10 — Launch Scope: 2 Case Studies
- **Decision:** Launch with exactly 2 case studies; add more post-launch
- **Context:** Each case study takes 4-6h (content writing + build). Budget can't support more than 2 pre-launch.
- **Rationale:** A portfolio with 2 strong case studies is better than 4 rushed ones
- **Owner:** Xiao

### 2026-03-18 — Flexible Timeline, Quality Over Speed
- **Decision:** Remove the Apr 15 hard deadline; take the time needed to build the best possible site
- **Context:** 5-week timeline with 3-4h/week was creating pressure to cut corners
- **Rationale:** A portfolio is a long-term asset. Rushing it defeats the purpose of standing out. Quality of craft > speed to launch.
- **Owner:** Xiao

### 2026-03-18 — Launch Case Studies Selected
- **Decision:** Launch with 2 case studies: "Marketing Message Liquidity" and "Driver Tipping at Walmart"
- **Context:** Need to decide which 2 projects to feature at launch
- **Rationale:** Mix of Meta (enterprise messaging) and non-Meta work shows range
- **Status:** Case study content being written in a separate agent session
- **Owner:** Xiao

### 2026-03-18 — Craft Lab: Coming Soon Placeholder at Launch
- **Decision:** Launch Craft Lab as a "coming soon" placeholder, build real experiments post-launch
- **Context:** Craft Lab is the differentiator but not critical path for v1
- **Rationale:** Avoids scope creep. Can add experiments iteratively.
- **Owner:** Xiao

### 2026-03-18 — Resume: PDF Drop-in Later
- **Decision:** Build resume page template with placeholder. Xiao will provide a PDF to drop in later.
- **Owner:** Xiao

### 2026-03-18 — Contact: Email Only for Now
- **Decision:** Contact page launches with email (songxiao16@gmail.com). Socials added later.
- **Owner:** Xiao

### 2026-03-18 — Light/Dark Mode: Defer to Design Phase
- **Decision:** Defer light/dark mode decision until design exploration with the Designer agent
- **Context:** Xiao wants to look for inspiration before committing to a color mode strategy
- **Owner:** Xiao

### 2026-03-18 — Visual Direction: Light Editorial
- **Decision:** Light mode, editorial/magazine aesthetic with warm off-white background, bold orange-red accent, massive serif display type
- **Context:** Xiao shared reference images from "lab./X-LAB" site showing heavy contrast, space-filling typography, geometric shapes layered with dimensional imagery
- **Key specs:**
  - Background: `#F0EFEB` / Text: `#1A1A1A` / Accent: `#E54D2E`
  - Display font: Playfair Display (serif) / Body: DM Sans / Mono: JetBrains Mono
  - Asymmetric grid, overlapping elements, editorial numbering, sharp edges
  - Lowercase hero text with trailing period ("xiao song.")
  - Single accent color site-wide (no per-case-study colors)
  - Conservative geometric shapes (2-3 per viewport)
- **Owner:** Xiao + Designer agent

### 2026-03-18 — Visual Direction Locked: Animated Preview
- **Decision:** Locked the animated editorial direction as the build target
- **Context:** Designer explored 3 additional options (refined, bold, maximal) but Xiao preferred the original animated preview
- **Key interaction specs confirmed:**
  - Hero: word-by-word staggered reveal with blur-to-sharp
  - Custom cursor (accent dot + ring with spring lag)
  - Scroll progress bar (thin accent line at top)
  - Scroll-triggered section reveals (fade up)
  - Parallax on geometric shapes
  - 3D tilt on project card hover
  - Animated nav underlines + arrow shifts on links
  - All animations respect prefers-reduced-motion
- **Reference file:** `site/preview-animated.html`
- **Owner:** Xiao

### 2026-03-18 — Craft Section Removed from Launch
- **Decision:** Remove Craft Lab section entirely from v1 launch. Can be added back later.
- **Context:** Xiao doesn't have a clear idea of what to put in Craft Lab yet. Shipping without it is cleaner than a "coming soon" placeholder.
- **Rationale:** Focus on what's ready. Craft Lab can be re-added when there's real content for it.
- **Owner:** Xiao

### 2026-03-18 — Hero Cleanup: No Watermarks, No Hairlines
- **Decision:** Simplified the hero section — removed background watermark text, hairline borders (top/bottom), left vertical text, and italic subtext styling. Kept: accent rectangle, right vertical text, clean label/title/description.
- **Context:** The 10x design pass added too much visual noise. Xiao preferred the cleaner original layout.
- **Rationale:** Clean > busy. Let typography and the accent rectangle do the work.
- **Owner:** Xiao

### 2026-03-18 — Design Direction Finalized for Build
- **Decision:** Design direction is locked. Ready to build the real Next.js site matching `site/preview-typography.html`.
- **Context:** Multiple iterations of the preview have been refined through user feedback. The current file represents the final visual target.
- **Key specs:**
  - Light editorial style: `#F0EFEB` bg, `#1A1A1A` text, `#E54D2E` accent
  - Playfair Display / DM Sans / JetBrains Mono
  - Accent rectangles (no circles) in hero, project cards, and section backgrounds
  - Bottom-aligned hero with word-by-word animated reveal
  - Custom cursor, scroll progress, parallax, 3D card tilt
  - Grain texture overlay, section dividers, scroll reveals
  - No watermarks, no hairlines, no italic subtext
  - 5 pages at launch: Home, Work (index + 2 case studies), About, Contact, Resume
  - No Craft Lab at launch
- **Reference file:** `site/preview-typography.html`
- **Owner:** Xiao + Orchestrator

### 2026-05-24 — Homepage Case Study Section: Sticky Theater
- **Decision:** Use "Sticky Theater" (Option A) for the homepage case study section
- **Context:** The current asymmetric 7/5 grid didn't scale well to 4+ projects. Xiao wanted a stacked, parallax-driven approach with small description areas.
- **Options considered:**
  - **A: Sticky Theater** — Full-viewport cinematic transitions. Each project pins to viewport, compresses/fades as next project scales in.
  - **B: Split Scroll** — Left column pinned with project info, right column scrolls images with crossfade on left.
  - **C: Parallax Stack** — Vertical card stack with multi-layer parallax depth (index/image/text at different rates).
- **Rationale:** Sticky Theater had the most visual presence. Parallax Stack felt too bland. Split Scroll had alignment mismatches between visual and text that felt off.
- **Reference files:** `site/preview-option-a.html`
- **Owner:** Xiao

### 2026-08-04 — Greyscale Restyle with Sage Accent
- **Decision:** Restyle entire site from warm off-white + orange-red palette to clean greyscale + muted sage/olive accent
- **Context:** Xiao wanted to move away from the colorful editorial direction to a more black-and-white, minimal style
- **Key changes:**
  - Background: `#F0EFEB` → `#F5F5F5` (neutral light grey)
  - Accent: `#E54D2E` (orange-red) → `#6B7F6B` (muted sage)
  - All text greys shifted to neutral (removing warm undertones)
  - WCAG AA contrast ratios maintained across all combinations
- **Owner:** Xiao

### 2026-08-31 — Hero: counter fill, staggered altitudes, baseline label
- **Decision:** Meta’s **o** gets a sage **counter fill** (letter stays text color). Job callouts use unique stem lengths so they don’t share a vertical shelf. “Product designer” sits on the baseline dotted rail (shared em box with the name), matching how “Baseline” sits on the rail in Xiao’s reference.
- **Owner:** Designer → Front End

### 2026-08-31 — Hero: callouts with real targets
- **Decision:** Annotations point at glyphs. Meta → sage-filled **o** in *xiao* (most prominent, latest role). Product designer labels the baseline rail (“at a baseline, that is what I am”). Added LiveControl and Awake Design Studios. DoorDash→g, Walmart→s, LiveControl→a, Awake→i.
- **Owner:** Xiao → Designer → Front End

### 2026-08-31 — Hero: proportion pass from anatomy reference
- **Decision:** Treat Xiao’s typography diagram as a *proportion* reference, not a template. Name dominates; dotted rails are hairline sage (~20% opacity); job labels are Playfair italic at ~11px floating above/below with thin stems — same type family as the name. No anatomy vocabulary, no letter fills, no left bracket.
- **Owner:** Designer → Front End

### 2026-08-31 — Hero: Designer lock before further FE
- **Decision:** Stop ad-hoc hero edits. Designer owns `hero-type-anatomy-spec.md` as the source of truth; Front End implements the checklist only.
- **Fixes locked:** full descenders (no clip); dashed lines through the name, right side only; muted sentence-case labels; ~2rem row spacing; no name background plate.
- **Owner:** Xiao → Designer → Front End

### 2026-08-31 — Hero centered + Sticky Theater restored
- **Decision:** "xiao song" is center-aligned. Leader labels include product designer, Meta, DoorDash, Walmart. Homepage work section uses Sticky Theater again (one project per scroll viewport) per 2026-05-24.
- **Owner:** Xiao

### 2026-08-31 — Hero: single-line name + company leaders
- **Decision:** Hero is one line — "xiao song" (no period). Dashed lines label Meta, DoorDash, Walmart only — no type-metric captions. Sage accents return on the landing page (leader lines, labels, section indices, soft sage plane, accent rect on first project card).
- **Removed:** period after song, stacked two-line name, "cap height / x-height / baseline / descender" callouts, RISD/Awake/LiveControl on those lines.
- **Reference file:** `Designer/hero-type-anatomy-spec.md`
- **Owner:** Xiao

### 2026-08-31 — Hero: Type Anatomy Leader Lines (superseded same day)
- **Decision:** Initial reconstruction used two-line name + metric captions. Xiao corrected it the same day — see entry above.
- **Owner:** Xiao + Designer

### 2026-08-31 — Live site must match greyscale + type-breakdown (not old orange editorial)
- **Decision:** The Next.js app is the source of truth for what Xiao sees. It must use greyscale + sage and the framed typographic hero — not the packed-up older warm/orange layout.
- **Context:** After unpacking on a new laptop, Xiao flagged the running site as an older iteration: black-and-white focused, greyish-green highlight, cleaner, typography-breakdown.
- **Rationale:** Tokens in `Designer/design-tokens.md` and composition in `Designer/hero-restyle-spec.md` already locked this. The build had drifted back to `#F0EFEB` / `#E54D2E` and the left-aligned accent-rectangle hero.
- **Owner:** Xiao

### 2026-08-04 — Homepage Case Studies: 5 Projects
- **Decision:** Expand homepage theater to 5 case studies in chronological order (most recent first)
- **Projects:** Meta 1P Buying → DoorDash Parcel → Marketing Message Liquidity → Driver Tipping → Search & Browse
- **Context:** Two new projects (Meta 1P Buying, DoorDash Parcel) added as placeholders. "Integrated Campaign Creation" removed (overlapped with MML).
- **Owner:** Xiao

---

_Next decisions pending: none — build phase continuing_
