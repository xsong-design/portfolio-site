# Brief: Plain-voice Liquidity pass + draft Search & Browse

- **Date:** 2026-11-02
- **From:** Xiao (via Orchestrator)
- **To:** Case Study Writer
- **Priority:** P0
- **Related files:** `site/content/work/marketing-message-liquidity.mdx`, `site/content/work/search-browse-walmart.mdx`, `site/src/lib/projects.ts`

## Verbatim
> i like how the case study is structured more now. but i ask that you look through my old website and re confirm some of the details, and use less fancy language. make sure it reads like i wrote it. Also, can you start generating the search and browse case study while you're at it, from my old website. so i can review everything

## Intent
Keep Liquidity’s current structure. Recheck facts against songxiao.webflow.io Meta pages. Write like Xiao, not like a portfolio template. Draft Search & Browse for review in the same voice. Do not restyle.

## Scope
- In: Liquidity MDX rewrite; new Search & Browse MDX + projects.ts; old-site fact check
- Out: Visual restyle; Driver Tipping rewrite; importing Webflow screens unless Xiao asks

## Constraints
Old site is content-only (`decisions.md` 2026-10-29). Do not invent metrics. Search & Browse is **not** on the live Webflow homepage (only Budget, Reporting, Driver Tipping). Use Keynote draft `Case Study Writer/walmart-search-browse.md` as the source Xiao called “old website,” and do not use the draft’s “70% actions-to-cart” line (20→14 is not 70%). Keep Bombay / OZiva / XYXX because Xiao already asked to keep them even though the old Meta pages say no MVP results.

## Ask
1. Reconfirm Liquidity details from old Meta PNGs (timeline Q4 2022–Q3 2024, two-week sprints, rail + inline + two reappearances, reporting NUX gated on mixed campaign, Messages Delivered not auto-populated, twice-weekly ads reporting sessions).
2. Strip fancy phrasing.
3. Publish a Search & Browse case on the live site for Xiao to review.

## Done when
- [x] Liquidity MDX uses old-site facts + Xiao’s e2e / UT / two-block through-line, in plainer language
- [x] Search & Browse live at `/work/search-browse-walmart`
- [x] `projects.ts` matches frontmatter
