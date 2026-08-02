---
title: The blueprint
layout: page.njk
permalink: /blueprint/
started: 02.08.2026
updated: 02.08.2026
summary: The full written plan for Eudaemon, versioned like software; what it's made of, what it assumes, and what still has to be proved.
---

Version 0.3 · 02.08.2026 · Rebuilt after an eight-review attack; the story of how is [entry 01](/log/01-the-blueprint/). This page changes as the design changes; every change of mind is dated in the log.

This is the plan for Eudaemon before any of it is built. It exists so the idea can fail in public: the parts are named, the assumptions each part depends on are written as sentences that can be proved wrong, and the tests will carry pass and fail marks set before they run. The opening sections are written for anyone; the lists further down get denser, and that's deliberate. What you won't find here is engineering detail that would weaken the system's security before it exists, or anything from the records themselves; a security consultant doesn't publish the design of the lock while fitting the door.

## The system in one paragraph

Eudaemon claims every record I can lawfully obtain about myself and holds it as one encrypted archive: the lakes. From the lakes it builds a working model of what I actually do, when, under what conditions: the deep twin. When I bring a goal, the goal layer, Telos, sharpens it, researches how such goals are reached, judges each route against the twin, breaks the best route into daily actions and returns the whole thing as a price, in time, money and required change, with its confidence stated or the word UNKNOWN. The decision is mine: commit, run a small trial first, or set the goal aside knowingly. Whatever happens next lands back in the record, and the system learns, including about its own accuracy. Some tasks it hands to Jarvis (Tony Stark's assistant; the delegated arm) rather than to me. Two rules hold everywhere: the system never tells me what to want, and it never sounds more certain than its evidence allows; confidence has to be earned through a staged schedule of proof, starting from an honest "I don't know you yet."

One more thing the design now treats as fundamental: a system that watches and advises a person changes that person. Eudaemon is therefore drawn as a loop that includes me, not a camera pointed at me; it tags which of my behaviour happened under its influence, measures its own footprint on my time and attention, and watches for the quiet failure where it ends up describing someone I've stopped being.

## The eight blocks

**The Plant.** The machinery that keeps everything else alive for a decade: keys, encrypted storage, backups that are actually restore-tested, monitoring where silence itself raises an alarm, and repair. Its upkeep is budgeted out of my time like any other work, behind a protected floor so maintenance can never be quietly starved by the plans it supports; and if the clever layers ever go down, a plain break-glass view of the essentials remains.

**The Lakes.** Every record I can lawfully claim, landed raw and never altered, then refined: parsed, put on one timeline, linked across sources, graded for quality. Each observation carries its context; which device, which version, what the gaps mean, because a missing week of data is itself information. The original records are kept forever; everything derived from them can be rebuilt.

**The Deep Twin.** The model of me: routines and real availability, four separate budgets (money, time, physical readiness, mental bandwidth), which habits stick and which decay, what has worked on me and what quietly rebounded, how I'm changing and whether that change is drift or a genuine change of mind. Every claim the twin makes is typed, evidenced and calibrated; correlation is not allowed to dress up as cause; what it hasn't observed sits in an open register of unknowns rather than being guessed.

**Telos.** The goal layer. It sharpens a vague goal into a measurable one, gathers candidate methods from the world's knowledge, then judges each against the twin, with a firm distinction between "the evidence says this fails on me" and "there's no evidence yet", because the second is a reason to trial, not to discard. It breaks the chosen route into monthly goals, weekly habits and daily tasks sized for my real days, and returns the bill: resources on one ledger, burden and required change on another, judged against thresholds I set. It checks I've understood the bill before it counts anything as a decision.

**The Experiment Engine.** Where the record can't answer, a small trial can: properly designed, with consent, sized to fit inside a working life, isolated from other trials, and analysed honestly. It also has a stranger duty: deliberately re-testing options the system previously set aside, because that is the only way to measure how often the filter is wrong. Verdicts expire; nothing is discarded forever on old evidence.

**Jarvis.** The delegated arm, and deliberately the last thing to be built, because the design treats it as the largest internal risk. Every action it takes runs under narrow, per-action permissions, with a ladder from propose to confirm to act, and its work is always marked as its own, so the twin never mistakes what my agents did for what I did.

**The Loop.** Daily running: dispense today's tasks against today's actual state, check what really happened, tell a bad day from a changed life, replan. It keeps one ledger of everything the system asks of me, because a design that budgets my attention in three places has already overspent it; and it keeps a gauge on its own vitality, including the plainest one, whether its plans still lead to decisions, so it can raise its hand and renegotiate itself before it becomes furniture.

**The Boundary.** The guarantees every block obeys. Nothing leaves my control without passing an egress policy, and a ledger records anything that ever does. One shared language of confidence and UNKNOWN. Everything auditable years later. Consent and forgetting honoured all the way down, other people's data in my record treated with more care than my own, and a plan for incapacity that doesn't undo the security. The staged trust schedule lives here too: what the system may sound confident about is a function of what it has proved.

## The thirty-nine testable pieces

Everything above stands on these. Each is written so it can be proved wrong; the tests, with pass and fail marks set in advance, are next. Pieces 1 to 19 are the originals from entry 00, sharpened; 20 to 39 were added or forced by the review.

1. My record can generate better questions about me than a skilled interviewer could ask without it.
2. The direction and speed at which I'm changing can be estimated from the record, and used in planning.
3. There are real, findable patterns in the things about me I can change, not only in fixed traits.
4. Each genuinely different kind of data adds analytical power, rather than the value running out after the first few sources.
5. What I value can be evidenced from the record well enough to shape plans.
6. Whether a goal is achievable for me specifically can be estimated with stated confidence, never as a bare yes or no.
7. What would have to change can be expressed as observable actions, not personality judgements.
8. Showing the reasoning chain from a small task to the goal changes whether I actually do the task.
9. An out-of-reach goal can be returned as a price rather than a refusal.
10. A long personal record narrows, though never closes, the gap between what I say I want and what I actually want.
11. A goal can be broken down, within a bounded set of methods, into actions executable tomorrow, without my judgement at every branch, and each action performable from the task text alone.
12. The probability that I sustain a given task is estimable from my record; directly for tasks like ones I've tried, more cautiously for novel ones.
13. That estimate can filter options without systematically discarding things I would in fact have done.
14. After filtering, enough viable plans remain; and where they don't, automating the unsustainable part legitimately reopens them.
15. Plans built this way are better calibrated than my own unaided forecasts, and the personalisation pays over a strong generic plan.
16. The system can tell which questions the record can answer and which need a real-world trial, triggered by what a wrong decision costs against what the trial costs.
17. Trials can be made small enough to run inside a working life, and their results compound.
18. Decomposition plus a deep model of me yields a tighter specification for an automation agent than could be written without it.
19. An agent's operating rules mostly follow from the decomposition, though they must still be authored and checked, never assumed free.
20. Being observed and advised changes me, and that change can be detected and corrected for.
21. Deliberately re-testing set-aside options can measure how often the filter is wrong.
22. What works for people in general can be translated to me specifically at a knowable rate.
23. The meaning of my data stays stable enough, across sources and across years, to analyse as one record.
24. Cause and effect can be identified in a single life, from natural variation plus designed trials, within practical time.
25. Splitting a method into daily pieces, or delegating parts of it, preserves the reason the method works.
26. Goals, trials and agents running at once interfere weakly enough that it's still possible to tell what caused what.
27. What I can do, what my agents can do, and what we can do together are separable in the record.
28. The system's demands and outputs stay within what I can actually absorb and act on, for years.
29. A genuine change in what I want is distinguishable from a bad month.
30. The system can be maintained out of my own time without consuming the plans it exists to serve.
31. Gaps in the record that are themselves meaningful can be recognised as such.
32. I can live with an honest model of myself without turning away from it.
33. My corrections make the record more accurate, not more flattering.
34. Personal-grade research and analysis can be done without personal data leaving my control.
35. Years of priced verdicts don't quietly reshape which goals I dare to bring; or if they do, the reshaping is detectable.
36. When a measure and the goal it stands for drift apart, the drift is visible before it costs me.
37. Accuracy proven on small, frequent goals transfers to large, rare ones.
38. Performing for the system, rather than living, is detectable.
39. What a method demands and what I can supply can be written in one shared vocabulary precise enough to match them.

## The hardest problems

Three of the thirty-nine carry the most weight, and anyone who enjoys hard problems is welcome to argue with me about them ([hello@eudaemon.uk](mailto:hello@eudaemon.uk)). Piece 13: published attempts to predict what people will stick to barely beat a coin toss, and the filter's mistakes are invisible unless deliberately hunted (21). Piece 20: the system changes the person it's learning, so yesterday's patterns describe someone slightly different from today's user; every longitudinal claim inherits this. Piece 28: the design can be right and still fail if it costs more attention than it returns; six of eight reviewers, working separately, described that exact quiet death.

## Design commitments

Prices, never verdicts; the decision stays with me. Requirements in performable terms, never personality terms. Confidence earned through the trust schedule, never assumed. The distinction between no evidence and negative evidence enforced everywhere. Trials rationed by stakes against cost. Set-aside options re-tested on schedule. One ledger for my attention. Agents' work never mistaken for mine. A vitality gauge on the whole mission. Nothing from the records, source or derived, on this site.

## What's not published, and why

The engineering-level detail (the full parts list, the security design, the agent-containment specifics) stays private until the relevant parts are built; publishing a threat model before the defences exist would be poor security practice, and saying so plainly seems better than pretending the document doesn't exist. The eight review transcripts stay in the project files, kept word for word. Everything that changes on this page is dated, and the log records why.

## Version history

- v0.1 · 01.08.2026: first full drawing: eight blocks, ~100 parts, 103 assumptions, 19 testable pieces.
- v0.2 · 01.08.2026: corrections from first reading: the archive/analysis split, method research as its own step, the price as the decision artefact.
- v0.3 · 02.08.2026: rebuilt after the eight-review attack: 28 parts added, the loop redrawn to include me, the trust schedule added, testable pieces 19 → 39, assumptions 103 → 138.
