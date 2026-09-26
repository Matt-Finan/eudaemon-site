---
title: How fast can a trial reach an answer?
date: 2026-09-26
series: 4
status: entry
summary: How many clean comparisons can one day hold? That number, f, depends on how long an intervention's effect takes to fade, and the more comparisons a day holds, the sooner a trial reaches an answer.
---

To recap. Eudaemon turns a person's records into evidence strong enough to act on, and turns the goals a person brings into questions that evidence can answer. [Entry 02](/log/02-watch-or-try/) showed that correlations unearthed by analysis of one's data only warrant predictions: advice needs causation, which is established by trials (interventions made or withheld on the toss of a coin). [Entry 03](/log/03-the-moving-target/) introduced β, the size of the effect an intervention has on a variable, and showed that β doesn't hold forever. So there is a race: how fast can a trial establish causative direction between variables, and their β, while β still holds? How fast can a trial reach an answer?

## f: clean comparisons a day

A trial needs at least a given number of clean comparisons to be trustworthy, so the days it takes to run depend on the number of clean comparisons a day can hold. That number is f. At 3 clean comparisons a day an answer arrives 3 times sooner than at 1.

In a trial, the toss of a coin decides whether an intervention is made; for example, heads, the user has an afternoon coffee; tails, they don't. Therefore, whatever separates the nights after heads from those after tails, beyond chance, is the coffee's effect. Each toss and the reading that follows it make one comparison.

A comparison is clean when the effect of one toss has faded before the coin is tossed again. To continue the example, coffee's effect on sleep can only be compared once per sleep/wake cycle; as such, f = 1. An intervention whose effect fades faster, such as a walk's effect on alertness over the following hour or so, can be compared several times a day, so f is higher and the trial reaches its required number of clean comparisons sooner.

## The settle time

![One walk: a coin at 09:00 comes up heads, a walk (tails would have been a rest); the lift in alertness rises within minutes, fades, and is back at the ground state by 10:30; a reading 20 minutes after the walk catches the lift near its height; a bracket under the time axis marks the settle time, from the walk to the lift's return to the ground state; timings illustrative](/assets/entry04-one-walk.svg)

Alertness here is read by a reaction time test.

The coin can only test effects that fade. The "settle time" is how long an effect takes to fade back to the ground state. Coins tossed safely will be tossed a "settle time" apart, each reading only seeing the effect of its own toss. A reading taken before the effects of the previous coin toss have settled carries the effects left over from the last toss; the comparison isn't so clean. Further apart, the comparison is clean, but time is wasted, time where another toss could have been slipped in: f is lower than it needs to be.

## The gap between tosses

![Two tosses in a row, 45 minutes apart, half the settle time, in the 4 orders the coin deals, heads a walk and tails a rest, each with the reading 20 minutes after the second toss: rest then rest, nothing to fade, the ground state; walk then rest, what is left of the first walk, on its own; rest then walk, a fresh lift, on its own; walk then walk, the fresh lift on top of what is left; if walks add up, the fourth reads as the second and third together; timings illustrative](/assets/entry04-two-tosses.svg)

The same walk, with coin tosses half a settle time apart.

Tossing coins closer than the settle time, thus risking a less clean comparison, is not necessarily a waste. The order of 2 tosses (rest rest, walk rest, rest walk, walk walk) is random, as the diagram shows. Whenever the first toss is a rest, the reading after the second is clean whatever happens, and the other 2 orders show whether an intervention's effects stack. If they add up (in this example, the alertness gained by going for a walk before the increase in alertness gained from the last walk has settled), every toss counts as a clean comparison. If they don't, tossing faster buys nothing and costs the user more interventions, each one interrupting the day without contributing a clean comparison; no gain in terms of f.

The settle time for each intervention is guessed, erring on the side of caution (longer), then measured. How long an effect lasts in one person has barely been studied; the first guess draws on research where it exists, and otherwise on common sense. That guess may cost time: if it has erred on the side of caution, the user ought to be pleasantly surprised, as they're able to toss the coin at a greater frequency; f goes up, time to find causation goes down.

The trial plots the fade curve by either randomising the time between intervention and reading, or by collecting several passive readings after each toss (e.g. a watch's heart rate).

## Paced by the outcome

Most questions, I expect, are paced by their outcome, not by the coin. For example, an outcome read once a night, like sleep, allows at most 1 clean comparison a day and many causations being investigated will have outcomes like that. Only where the outcome settles within hours can f be raised.\* E.g. the walk's effect on alertness, breathing exercise effect on heart rate, an hour of silenced notifications on how often the phone is picked up etc.

## Importance to Eudaemon

"f" contributes to "T", the cost, in days, of establishing a cause's direction and β. This cost must be justified by how much benefit it provides the person (a separate set of tests will measure benefit). If causes turn out to be worth a great deal, trials are worth running even when they take years. If f is too low, it becomes likely that causes will be unfeasible to calculate, and Eudaemon needs to make them a niche requirement for extremely high-stakes questions.

*\*Since the research is thin, any settle time I measure on myself gives later users of Eudaemon a first guess with a measurement behind it.*

---

**This week's files.** The 2 figures in this entry, in light and dark · the QA run record.

**Next.** The next test on the list.
