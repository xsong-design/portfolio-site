# Resume craft bar

Required before rewriting experience lines. Same voice as `Case Study Writer/craft-bar.md`. Different length.

Sources: Laszlo Bock, “How to write a résumé that gets you hired at Google” (the X / Y / Z formula, from reviewing resumes at Google); Design Shaped, “The XYZ formula” (if there is no metric, put scope in Y — never invent a percentage); Leslie Yang, hiring-manager signals for senior product designers (initiative, product thinking, scope, complexity); the case-study craft bar already in this repo (the site gets the conversation, it does not replace the interview). Recruiter first-pass scans are short — on the order of several seconds — so the first line of a role has to carry the scope.

---

## What the resume is for

A recruiter is deciding whether to open the portfolio. A hiring manager is deciding whether the scope matches the seat. Neither is reading a case study.

| Reader | What they need from the resume |
|--------|--------------------------------|
| Recruiter | Title, company, dates, one line that says the surface and the result |
| Hiring manager | Ownership, a constraint, a consequence they can ask about |
| Interview | The case study. Do not paste it here. |

If a line does not name a **surface**, a **decision**, or a **consequence**, cut it.

The portfolio holds the story. The resume holds the proof that the story is worth opening. Do not retell Marketing Message Liquidity in paragraph form.

---

## What a strong product-design resume shows

Bock’s shape, used on every line:

**Accomplished X, as measured by Y, by doing Z.**

For a designer, the signals inside that shape are:

| Signal | On the line |
|--------|-------------|
| Scope | The surface he owned, not the size of the company logo |
| Product thinking | The problem he framed, or the option he did not ship |
| Consequence | A confirmed number, or honest scope when there is no number |
| Partners | The other function, named |
| Recency | The last role carries the most lines |

Senior work is scope and judgment. Listing tools, or “collaborated to create experiences,” reads junior.

Leslie Yang’s seniority tells (initiative, product thinking, scope, complexity) belong in the line as facts, not as words like “strategic” or “cross-functional.”

---

## Shape of the page

- Newest role first.
- Recent role: 3–4 lines. Older roles: 1–2. Early work can be one line.
- One sentence per line. No stacked clauses that hide the subject.
- Header stays name, title, email, phone, one portfolio link. No street address. No portfolio password.
- Education stays short. Skills stay tools and languages he actually uses, not a self-rating.

The live page is allowed to look like the site. Do not restyle it from this skill. Change the words.

---

## Language

Xiao’s talk-through is the source. The published line is professional and plain.

### Do

- Lead with what changed, then how he knows, then what he did.
- Keep nouns from the work: budget allocation, marketing messages, Ads Manager, driver tipping, in-store receipts.
- Leave a `[GAP]` when a metric might exist and he has not confirmed it.

### Do not

- Duties: “Responsible for,” “Worked on,” “Helped with,” “Collaborated to create experiences.”
- Invented lifts, revenue, team size, or “users loved it.”
- Template verbs: leveraged, spearheaded, passionate, results-driven.
- A case-study paragraph squeezed into the resume.
- The machine rhythm: three lines with the same shape and the same length.

### Same facts, two lines

Weak: “Collaborated with ads designers to create guidance and experiences that clarify budget allocation between ads and marketing messages, enhancing user understanding and campaign efficiency.”

Strong: “Showed advertisers how budget splits between ads and marketing messages in Ads Manager, working with ads design, so the split was visible before they committed spend. [GAP: no confirmed metric.]”

The strong line still has no number. That is correct. A made-up percent would fail the bar.

---

## How to take a role from Xiao

1. Let him talk. Write down surface, constraint, partners, and any number he actually says.
2. One sentence argument: “Open the portfolio because on [role] he [judgment].”
3. Draft the lines. Put `[GAP]` on anything you were tempted to invent.
4. Read aloud. Cut any line that could belong to another designer on the same team.
5. Wait for a yes before touching `site/src/components/ResumeSheet.tsx` or the PDF.
