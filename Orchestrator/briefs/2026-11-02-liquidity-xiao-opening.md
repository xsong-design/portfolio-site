# Brief: Liquidity opening from Xiao’s talk-through

- **Date:** 2026-11-02
- **From:** Xiao (via Orchestrator)
- **To:** Case Study Writer
- **Priority:** P0
- **Related files:** `site/content/work/marketing-message-liquidity.mdx`, `Case Study Writer/craft-bar.md`

## Verbatim
> So, at the start of Liquidity, Liquidity has always been a big idea that Meta wanted to tackle, especially from my team, which is the Marketing Messages team. What Liquidity meant for us is integrating into Ads creation for Marketing Messages. Marketing Messages and Ads are very different. Ads are supposed to target new people, while Marketing Messages are supposed to retain those new people. So, there are two different strategies that require two different budgets at the beginning. Ads being within Ads Manager having its own creation, and then Marketing Messages previously basically mimicked what Ads creation looked like, however, was housed in a different part of Ads Manager. Liquidity wanted to bring them together because we wanted one Meta's optimizations that we spent so much money on. We wanted optimizations to be able to use one single budget to help businesses optimize across Ads and Marketing Messages. That way, once they reach new people, they could retain these new people with Marketing Messages moving forward. Having them live in two different locations was also against the user mental model because most people didn't want to manage two different budgets. So they didn't want to tackle both, they didn't want to veer away from what they were familiar with, which was Ads. To try something new, such as Marketing Messages, because they couldn't directly see the benefit and didn't want to spend more time and money investing in this new strategy. And at the initial onset, I was one of the designers, senior designers brought on to help with a Design Lead on ideating the end to end experience on what this could look like. This took a few sprints where I worked on the entire funnel from onboarding all the way to reporting. And in between, we kind of did some user testing and also took this to both Ads and Marketing Message leadership multiple times. Originally, we wanted to give budget flexibility. However, through user testing and also just decision making, we decided that Meta's ultimate goal is to optimize for the user rather than give them full control. So we decided to go with a budget that users could not change or choose which strategy they wanted to go with. If they wanted both strategies in their campaign, they would have to rely on our optimizations. Actually, we felt that our optimizations would know best for the business how to allocate based on what step of the journey they're in with the customer. And after some of those, after the testing came two projects that I kind of led. One was the Budget comprehension. Budget comprehension came out of initial user testing where businesses weren't really understanding how one budget was going to work with optimizations. They thought that because they brought on a subscriber list, every single subscriber would receive a message. However, that wasn't the case. We had to let them know that this budget would be allocated based on how Meta's optimizations would best drive results. That could sometimes mean more Ads, and that could sometimes mean more Marketing Messages, and that nothing would be guaranteed. And then the second part was Reporting. Reporting was another major part where, because of my communication skills, I was giving Reporting because there were multiple teams that had a say in Reporting the Ads Manager, Reporting Services team, as well as the Metrics teams. So, my lead and also my director wanted me to take the onus of working with these partners in order to highlight how Marketing Message metrics would surface within the Ads reporting surface when the campaign is Liquidity and has both. So that's how things started. I could get into more details, but I want to start with that because that's already a lot. Let's start with that.

## Intent
Rewrite the live Liquidity case as this opening only. Xiao’s wording and facts. Do not graft rail/NUX/alpha until he talks those through. Craft bar: story, not outline.

## Scope
- In: MDX + `projects.ts` metadata
- Out: Search & Browse, Driver Tipping, new UI detail Xiao did not say today

## Constraints
MM lived in a different part of Ads Manager (not a sidecar outside Ads). Originally wanted budget flexibility; killed it. Xiao: senior designer with a Design Lead on e2e, then led budget comprehension and reporting.

## Ask
Write the start. Stop where Xiao stopped. Invite the next talk-through (budget, then reporting).

## Done when
- [x] Live MDX matches this dump
- [x] No invented 10-market UT, rail specs, or impact block in this pass
