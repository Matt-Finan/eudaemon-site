---
title: 004 — the entry in full, draft 2
type: entry
status: draft
project: eudaemon
supersedes: ["[[AI/Projects/eudaemon/05 site/entries/004/004 ENTRY - How fast can a trial reach an answer, draft 1 25.09.2026]]"]
depends_on: ["[[AI/Projects/eudaemon/05 site/entries/004/004 UNDERSTANDING - the round, in Matt's words 15.09.2026]]"]
source_of: []
used_in: []
sensitivity: public
described: 2026-09-25
---
# 004 · How fast can a trial reach an answer? · draft 2 · 25.09.2026

*Draft 2 is your rewording of draft 1, pasted in the chat on 25.09 (understanding notes, round 13). It stands as you wrote it except where it was wrong; each change is listed at the foot with its reason. The paste lost the headings, the figures and the footnote's italics, so they're back where draft 1 had them. Both figure keys now say heads is a walk and tails a rest.*

**Site front matter**, for the publish file `04-how-fast-can-a-trial-reach-an-answer.md`:

```yaml
title: How fast can a trial reach an answer?
date: 2026-09-25
series: 4
status: entry
summary: How many clean comparisons can one day hold? That number, f, depends on how long an intervention's effect takes to fade, and the more comparisons a day holds, the sooner a trial reaches an answer.
```

<!-- the entry, exactly as it would publish, from here to the second rule -->

To recap. Eudaemon turns a person's records into evidence strong enough to act on, and turns the goals a person brings into questions that evidence can answer. [Entry 02](/log/02-watch-or-try/) showed that correlations unearthed by analysis of one's data only warrant predictions: advice needs causation, which is established by trials (interventions made or withheld on the toss of a coin). [Entry 03](/log/03-the-moving-target/) introduced β, the size of the effect an intervention has on a variable, and showed that β doesn't hold forever. So there is a race: how fast can a trial establish causative direction between variables, and their β, while β still holds? How fast can a trial reach an answer?

## f: clean comparisons a day

A trial needs at least a given number of clean comparisons to be trustworthy, so the days it takes to run depend on the number of clean comparisons a day can hold. That number is f. At 3 clean comparisons a day an answer arrives 3 times sooner than at 1.

In a trial, the toss of a coin decides whether an intervention is made; for example, heads, the user has an afternoon coffee; tails, they don't. Therefore, whatever separates the nights after heads from those after tails, beyond chance, is the coffee's effect. Each toss and the reading that follows it make one comparison.

A comparison is clean when the effect of one toss has faded before the coin is tossed again. To continue the example, coffee's effect on sleep can only be compared once per sleep/wake cycle; as such, f = 1. An intervention whose effect fades faster, such as a walk's effect on alertness over the following hour or so, can be compared several times a day, so f is higher and the trial reaches its required number of clean comparisons sooner.

## The settle time

![One walk: a coin at 09:00 comes up heads, a walk (tails would have been a rest); the lift in alertness rises within minutes, fades, and is back at the ground state by 10:30; a reading 20 minutes after the walk catches the lift near its height; a bracket under the time axis marks the settle time, from the walk to the lift's return to the ground state; timings illustrative](/assets/entry04-one-walk.svg)

Alertness here is read by a reaction time test.

The coin can only test effects that fade. The "settle time" is how long an effect takes to fade back to the ground state. Coins tossed optimally will be tossed a "settle time" apart, each reading only seeing the effect of its own toss. A reading taken before the effects of the previous coin toss have settled carries the effects left over from the last toss; the comparison isn't so clean. Further apart, the comparison is clean, but time is wasted, time where another toss could have been slipped in: f is lower than it needs to be.

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

<!-- end of the entry -->

---

## Changed because it was wrong

- **Links:** the pasted links pointed at claude.ai (the app's preview resolved them there); they're site-relative again, `/log/02-watch-or-try/` and `/log/03-the-moving-target/`.
- **Link 1:** "the number clean comparisons" became "the number of clean comparisons": a word was missing.
- **Link 2:** "beyond chance" is back. Without it, any difference between the nights after heads and after tails would be the coffee's effect, and 2 nights would settle the question; chance is why link 1 needs a given number of comparisons. It also takes out the comma between the subject and "is".
- **Link 3:** "the effect of own toss" became "the effect of its own toss": a word was missing.
- **Link 3:** "For a reading taken before the of effects of the previous coin toss have settled, they carry the effects leftover from last toss" became "A reading taken before the effects of the previous coin toss have settled carries the effects left over from the last toss": the word order had slipped, "a reading" is singular, and "left over" is the verb.
- **Link 4:** "The order of 2 tosses (...) are random" became "is random": "order" is singular.

## Punctuation (silent, listed)

- "once per sleep/wake cycle, as such f = 1" became "cycle; as such, f = 1": 2 sentences had been joined by a comma.
- "If they add up, (in this example the alertness ...) every toss" became "If they add up (in this example, the alertness ...), every toss".
- "is guessed erring on the side of caution (longer), then measured" became "is guessed, erring on the side of caution (longer), then measured".
- "raised. * E.g. The walk's" became "raised.* E.g. the walk's".
- "etc…" became "etc.": the source stays ASCII, and "etc." already says "and so on".
- Curly quotes are straight in the source; the site curls them when it builds.

## Left as written, flagged

- "Coins tossed optimally will be tossed a settle time apart." Link 4 then shows that tossing closer does better when effects add up, so a statistician may read the two as disagreeing. It stands: a settle time apart is the best gap when nothing is known about stacking, and link 4 is the refinement. If you want it airtight, "optimally" could become "safely".

## Figures

- Both keys now read: the coin · heads: walk · tails: rest · the lift · the reading. The figures' alt text and descriptions say the same. One walk stays, since your note on the diagrams covered both. Rendered light, dark and 390 px and looked at.

## Open

- **The summary line** in the front matter (it wasn't in your paste).
- **Title, slug and date:** as in draft 1; the date is a placeholder until the publish day.
