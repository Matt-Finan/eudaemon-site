---
title: Watch or try
date: 2026-08-30
series: 2
status: entry
revisions: 1 (05.10.2026)
summary: Why Eudaemon needs causes rather than patterns, and the one number, measured before anything is built, that decides whether it becomes a reader of one's records or an engine for small experiments.
---

To recap. Eudaemon turns a person's records into evidence strong enough to act on, and turns the goals that person brings into questions that evidence can answer. [Entry 00](/log/00-the-premise/) described this premise and the 70+ data streams I'd obtained from my life; [entry 01](/log/01-the-blueprint/) turned the design into a list of assumptions that could be tested before anything gets built. Those assumptions are now tests, ranked by how far each result could change what I do. This entry concerns the first such test.

## What a record can show

Every question I want this system to answer has the same shape: if I change X, what happens to Y? Would skipping the afternoon coffee lead to better sleep? Does a late Thursday meeting kill the whole evening? Take the coffee question, and take an invented fortnight of records to ask it of: is it the coffee or the overtime that ruins sleep?

![Twelve example days: coffee cups on exactly the overtime days, and shorter hours-asleep bars on those days](/assets/entry02-record.svg)

Late coffee and poor sleep arrive together, on exactly the days of overtime. That co-arrival is a correlation. It's useful: given this afternoon's coffee, the record predicts a poor night, and it will often be right. What it can't say is whether dropping the coffee would change anything. A pattern licenses a prediction; only a cause licenses a change.

## Two worlds write that record

![World A, where coffee causes poor sleep, and World B, where overtime drives both](/assets/entry02-two-worlds.svg)

In World A the coffee delays sleep. In World B the overtime drives both the late coffee and the poor sleep, and the coffee does nothing. It was only ever along for the ride. Both worlds produce exactly that fortnight. The advice they license is opposite. In World A, dropping the coffee buys back sleep; in World B dropping the coffee buys back nothing (though it does save on washing up). 5 more years of the same record would sharpen the pattern without ever saying which world wrote it.

## So how do we decide?

Randomised variation. The reasons for drinking the coffee must be entirely independent of every other reason for sleeping badly; otherwise no comparison of coffee days against the rest can prove whether the coffee is the culprit.

![Four lives: clockwork, entangled, scrambled, and the coin](/assets/entry02-four-lives.svg)

*One question in each life: what would comparing coffee days against the rest establish?*

In the clockwork life the coffee never varies, so there's nothing to compare. No record, however long, learns the effect of a thing that never changes. In the entangled life the coffee arrives only with the overtime, so every comparison is loaded, and more years measure the same loaded comparison more precisely. In the scrambled life the coffee varies for dozens of unconnected reasons: shift patterns, time zones, meals grabbed where they land. The reasons for the coffee come apart from the reasons for the poor sleep, and each context knocks out a different rival explanation. A link that survives night shifts, holidays and ordinary weeks alike starts to earn the word cause. A life like that runs experiments on itself by accident. The coin doesn't copy the chaos; it manufactures the one ingredient that matters. Toss it each afternoon and the chance of coffee is the same on good days and bad; the coffee is forced to vary independently of everything else. Compare the coffee days against the rest. Whatever difference survives, beyond chance, is the coffee.

## The number that decides the design

The first test measures which of those lives each channel of a record (sleep, spending, heart rate) is living. The measure is ρ (spoken "rho"), the day-to-day correlation, running from 0 to 1: at 0 the days vary freely (the scrambled life), at 1 each day repeats the one before (the clockwork or the entangled life). The more freely the days vary, the more comparisons life supplies on its own, and the more Eudaemon can learn by watching. The more the days repeat, the more time has to pass before causation can be assessed by watching. Repetition starves the arithmetic. Bayley and Hammersley's 1946 formula, the standard effective sample size result for an autocorrelated series, converts ρ into the number of independent days a run of correlated ones is worth: n(1 - ρ)/(1 + ρ). At 0.8 it says a year of one channel carries about as much information as 41 independent days.

So the test computes ρ across every source in the archive: one number per channel, not one per life, because a sleep pattern and a spending pattern have no reason to repeat at the same rate.

![The rho scale, and the fork it sets between a watch engine and a test engine](/assets/entry02-rho-fork.svg)

There's no pass mark, and this test can't fail. Whatever comes back sets the centre of gravity of what gets built first. Low, and Eudaemon leans watch engine, a careful reader of the records already held, with experiments kept for confirmation. High, and reading harder is a dead end; the effort goes into the machinery that makes tomorrow deliberately unlike today, and Eudaemon leans test engine.

::: revised 05.10.2026
ρ doesn't set this on its own. It prices watching; a trial has a price of its own, and how far Eudaemon leans on trials turns on what a cause costs in days against what it's worth to the user. [Entry 05](/log/05-what-is-the-cost-of-beta/) sets out that price as one equation; separate tests will measure the worth.
:::

---

**This week's files.** The ranked test register · the 4 figures in this entry, in light and dark · the QA run record.

**Next.** The next test on the list.
