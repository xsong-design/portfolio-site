# Case study craft bar

Required reading before any draft or rewrite. Built 2026-11-02 after Xiao said the live cases still feel choppy and machine-written. **Do not rewrite MDX until Xiao signs this off.**

Sources (not vibes): Meta Design “5 ways to improve your design portfolio” (Garron Eng, 2019); hiring-panel 60-second scans; PhonePe design hiring; Audible UX portfolio review guidelines (2024); Interaction Design Foundation portfolio writing tips; Emily Backes, “UX Case Studies Are Broken” (2026); existing Manus FAANG prompt in this folder.

---

## What a reviewer is actually doing

They are not reading a design thesis. They are deciding, fast, whether Xiao is worth a conversation.

| Reader | Time | What they need |
|--------|------|----------------|
| Recruiter / first screen | 10–30s on the page, 60–90s on a case | What is this product, what did Xiao own, did anything happen |
| Hiring manager | 2–5 min if the first scan works | One real decision, one constraint, one outcome they can grill in interview |
| Panel / onsite | 30 min, usually a deck, 2 projects | Depth they can interrupt — not a wall of process |

Meta’s own portfolio advice: the **online** case exists to get someone to reach out. The **in-person** case is where you go deep. Our site is the online version. It should not try to be the 15-minute interview.

If a paragraph does not contain a **decision**, an **insight**, or a **consequence**, it does not belong.

---

## Structure (story, not a UX-process outline)

The Manus 7-section list is a **checklist of signals** (problem, research that changed direction, trade-offs, impact, reflection). It is **not** the page outline.

Meta Design, after hundreds of interviews: the #1 mistake is too much process. Almost every portfolio uses the same headings — Overview, Research, Ideation, Solution, Outcome — and reads like an outline, not a story. That template is also what language models default to. It is why our drafts feel machine-written even after we “made them plainer.”

**Use four story beats.** Name them internally. On the page, use headings that belong to *this* project.

1. **Ordinary world** — What was true before Xiao touched it. Product, users, the broken setup. Short.
2. **Call** — Why the company spent time on it, and what Xiao was asked to do (role, not the whole org).
3. **Ordeal** — The moment the plan broke or got expensive: research that contradicted the brief, a stakeholder no, a constraint. This *is* the case study.
4. **Return** — What shipped (the few controls that matter), what changed (or what we could not measure), what Xiao would not repeat.

A hiring panel’s 60-second questions map onto those beats:

1. What is this project?
2. Why was the problem worth solving?
3. What did *you* own?
4. Did research (or data) change anything?
5. Is there at least one real decision?
6. Can I trust the impact claim?

**Scannable top of page (before anyone scrolls):** problem in human language → why the business cared → Xiao’s slice of ownership → the interesting conflict → outcome or honest gap.

**Do not** use generic headings: Overview, Context & Challenge, Research & Discovery, Process, Ideation, The Solution, Impact & Outcomes. Those tell a reviewer “I filled in a form.” Prefer headings like “They thought it was email” or “One budget, no extra lever.”

**Length:** aim **600–900 words** of narrative for the online case, plus screens that earn their place. Manus’s 900–1,400 plus seven mandatory sections is too much for a first read and pushes outline-writing. If Xiao wants a longer interview deck later, that is a second artifact.

**Visuals:** screens are evidence for a sentence, not a gallery. One before, one decision, one after is enough until Xiao supplies more.

---

## Language that is actually impactful

Reviewers reward **judgment they can quote in a debrief**, not polish.

Xiao’s talk-throughs are **source material**, not the published voice. Take the facts, simplify, and rewrite as a professional case study. Do not paste casual talk (“that kind of thing,” “raised their hand,” “sit with”). Do not swing back to slogan stacks or template UX. Read the draft aloud: it should sound like a senior designer presenting work, not a Slack voice note.

### Do

- Open with the human/business mess, not the methodology.
- Mix sentence length. One long sentence that carries a thought, then a short one. Never three identical punches in a row.
- Use **I** for decisions Xiao made. Use **we** only for the team. Name the other function (ads reporting, GTM, category specialists).
- Put the insight next to the method: “Ten marketers. Nine thought WhatsApp would take budget first. That is why I would not add a split control.”
- Show the option you killed, in one sentence.
- Concrete nouns: budget field, Messages Delivered, 6,266 results, right-hand rail.
- One quote max, and only if a person in the room actually said it.
- Headings that preview the conflict.

### Do not (this is the machine voice)

- Parallel slogan stacks: “Two setups, two budgets, two places…” more than once per case.
- Bolding a keyword every paragraph so the page looks highlighted.
- Template transitions: “That was the brief.” “The rest of this case is those two blocks.” “The path we pushed was…”
- Magazine compression that hides the subject: “The story held until they hit spend.”
- Textbook UX: conducted research to gain empathy, double diamond, ideation, usability, mental model, cognitive load, “I advocated for metrics.”
- Fake drama: raid, sidecar, consolation prize, receipt, “kills the optimizer.”
- Uniform short sentences. That rhythm is a model default. It reads as choppy.
- Ending every section with a moral: “We made the actual product readable at the moment they commit spend.”

### Weak vs strong (same facts)

Weak: “I conducted prototype testing with ten performance marketers across priority markets. Insights revealed a conceptual gap around optimized delivery.”

Strong: “In testing, nine of ten people expected WhatsApp to get most of the budget, like email. Liquidity does not work that way. I stopped treating budget as copy next to a field and started treating it as the trust problem.”

Weak: “The modular architecture was designed for extensibility.”

Strong: “Top Picks and Shop By had to be separate units so search could inject them by query later. I sat with frontend and backend on that, because a one-off layout would have died in the next category.”

---

## Evaluation signals (keep from Manus; do not turn into H2s)

A senior/staff reader is hunting for:

| Signal | On the page |
|--------|-------------|
| Strategic thinking | Brief got reframed; you say what you did not build |
| Business acumen | Why Meta/Walmart spent the time; a real metric or an honest “we left before MVP” |
| Cross-functional | A named team, a sprint you sat in, a disagreement |
| Craft | A specific control and why that control, not “the final experience” |
| Research | Finding → change in direction |
| Ambiguity | Org or platform constraint |
| Growth | One specific regret |

Junior vs senior still holds: listing methods is junior; insight that changed the work is senior.

---

## Why the current live cases fail this bar

### Marketing Message Liquidity
Facts are mostly right. Structure is closer. Voice is still assembled.

- Opens well (two paths → Liquidity) then slips into slogan cadence and bold tokens.
- “What testing changed” / “How the two blocks hold together” are writer-structure leftover, not Xiao talking.
- Options are listed as a fork paragraph (split / no UI / GTM) — good signal, still sounds like a framework dump.
- Reporting principles as a four-bullet list is a deck, not a person.
- Impact still bolted on after “old write-up said I left.” Needs one breath: I left before MVP; here is the alpha GTM used anyway.

### Search & Browse
Same assembly problem, plus it was generated from a Keynote extract, not from Xiao talking.

- Stat pile in paragraph one (6,266 / 130k / 20 actions / 47%) without a human beat.
- “How we thought about the problem” is a process heading.
- Journey mapped three ways is a framework card.
- Two modules as two H2s repeats the Liquidity template instead of one story (catalog too big → modules → Top Picks vs Shop By as the hard calls).
- +0.66% and −6 actions are in the Keynote; they need Xiao’s confirmation, not confident writer voice.

### Driver Tipping
Still a junior outline: Overview, Context & Problem, Process, Research & Discovery, bullet methods with no insight. Dates/metrics still conflict with the old Webflow page. This is the most machine-looking of the three.

---

## How the writer works from now on

1. **Intake is Xiao’s words first.** Paste or transcribe. Do not outline until the ordeal is named in Xiao’s language.
2. **One sentence argument** for the case: “I should get this job because on [project] I [judgment].”
3. **Four beats**, project-specific headings, 600–900 words.
4. **Read aloud.** Cut parallel stacks, template transitions, and repeating sentence length.
5. **Flag gaps** instead of filling them. Never invent quotes, metrics, or team size.
6. **Xiao gut-check:** “If I swapped the name, would this still sound like me?” If yes, rewrite.

### Still needed from Xiao before the next Liquidity pass
Nothing structural — ordeal is clear (UT said they wanted email-style budget). Needed: blessing of this craft bar, and whether alpha numbers stay.

### Still needed before Search & Browse is real
A brain dump in Xiao’s voice (what was actually hard, what he would not ship, who he fought with). Keynote stats are not a story.

### Still needed for Driver Tipping
Reconcile Webflow (Nov 2020–Mar 2021, 51%→65% / 45% lift) vs current MDX (Q1–Q2 2024, 52%→68%). Do not blend.
