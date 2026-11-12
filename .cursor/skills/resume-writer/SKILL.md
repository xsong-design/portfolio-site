---
name: resume-writer
description: >-
  Writes and revises Xiao Song’s resume in the same professional voice as the
  Case Study Writer. Uses a hiring-scan craft bar (scope, outcome, honest
  metrics) to update experience lines. Use when the user mentions resume,
  resume writer, CV, experience bullets, job history, or asks to update what a
  role says.
---

# Resume writer

Sibling of the Case Study Writer. Same voice. Shorter artifact. The case study earns the interview conversation. The resume earns the click.

Read [craft-bar.md](craft-bar.md) before any draft. Voice rules that overlap live in `Case Study Writer/craft-bar.md` — follow those, then the resume-specific rules here.

## What this skill owns

- Experience lines, the short summary if one exists, and skill lines when they claim work.
- Flagging missing scope or metrics. Never filling them in.

## What it does not own

- Page layout, type, or color. That stays with the site (Playfair, DM Sans, JetBrains Mono, greyscale and sage).
- Inventing roles, dates, team size, or numbers.
- Publishing the old portfolio password.

## How a pass works

One role at a time. Do not rewrite the whole resume in one shot.

1. Read `Resume/talk-through.md` first. That is the draft Xiao edits, including blank answers. Then the live sheet in `site/src/components/ResumeSheet.tsx`, and `Resume/Resume 2025.pdf` if needed. A blank answer is not a confirmed fact.
2. Ask which role Xiao wants to talk through, unless he already started.
3. Intake his words. Do not draft until you can name, in his facts: the surface he owned, the constraint, and what changed — or the honest gap.
4. Write the lead sentence first, then the longer cuts in [Three lengths](#three-lengths). One sentence each.
5. Mark every missing number `[GAP]` and ask one question per gap. Do not guess.
6. Stop for Xiao’s yes. Only then change `ResumeSheet.tsx`, reprint `site/public/xiao-song-resume.pdf`, or hand him LinkedIn text.

## Three lengths

Same facts. Three cuts. A missing number stays missing in all three. Do not invent a metric so the short cut sounds bigger.

| Cut | Where it lives | How long |
|-----|----------------|----------|
| Website | `/resume` | Lead sentence, plus more lines where the work was impactful. |
| Recruiter PDF | `site/public/xiao-song-resume.pdf` | One page. Cut sentences before cutting a role. Every role keeps its lead. A second sentence goes to high-impact work, including an older role, and to the newest role. |
| LinkedIn | Paste-ready text. Not a page on the site. | The website sentences, first person with “I”. |

Space follows impact, not age. A recent role with no confirmed result stays at one sentence, unless the judgment in the work is specific enough to carry a second sentence. An older role with a confirmed result can keep two. Do not delete a role that explains a year of work. Awake stays as one sentence.

When nothing has released, Y is the surface, who it is for, and the constraint. The verb stays “would.” Do not write “unreleased” on the public line, and do not invent a metric to replace the missing result. The model is the business-agent sentence in `Resume/talk-through.md`.

The lead sentence is the one-sentence deal: the surface, a confirmed result or honest scope, and work specific enough that it could not sit on a teammate’s resume. It is the first line of every cut.

## Line shape

Accomplished **X**, as measured by **Y**, by doing **Z**.

- **X** is what changed because of Xiao. Not the activity.
- **Y** is a number he confirmed, or honest scope (surface, who, constraint) when he has no number. Scope beats a fake lift.
- **Z** is the specific work. Concrete enough that it could not sit on a teammate’s resume.

Use **I** only if the line is first person. The live resume is implied first person without “I.” Keep that. Name the other function (ads design, ads reporting). Use **we** only for a team result.

## Voice

Same bar as the cases: a senior designer stating a decision, not a Slack note and not a template.

- Mix sentence length across the role. Do not make three identical punches.
- Concrete nouns: Ads Manager, marketing messages, driver tipping, Traceable Tender.
- No textbook UX: empathy, double diamond, ideation, “leveraged,” “spearheaded,” “passionate.”
- No bolding a keyword in every line.
- Read it aloud. If the name could be swapped and it would still sound like a model, rewrite it.

## Done when

- [ ] Each new line has X, Y, and Z, or a `[GAP]` where Y is unknown
- [ ] No number appears that Xiao did not say
- [ ] Recent role is shorter than the case study of the same work
- [ ] Xiao has said yes before the page or PDF changes
