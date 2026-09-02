---
title: The blueprint
date: 2026-08-02
series: 1
status: entry
revisions: 1 (31.08.2026)
summary: No code yet, on purpose. The idea was broken into parts, attacked by 8 independent AI reviewers and rebuilt into a blueprint worth testing.
---

To recap last week's blog post; 00: everything you do leaves a record, from bank statements to sleep, and I'm in the process of claiming mine, about 70 sources so far. The system I'm building is called Eudaemon: how good a decision is correlates with the volume of data brought to bear when it's made, and Eudaemon asks what happens if an entire lifetime's records are brought to bear on every decision; would life be more fulfilled? I also promised to break the idea into testable pieces before building any of it.

This week was that promise. You wouldn't build a bridge without first testing the materials and checking the load on every beam; software deserves the same discipline. A couple of hours of reading confirmed the instinct is exactly how the serious end of engineering works; it's the method NASA uses to design missions. Break the system into parts. Write down what each part assumes to be true. Attack the assumptions that could kill the project before you build anything.

![The working method: the idea is broken apart, its assumptions listed, attacked by reviewers, the blueprint fixed, then tested](/assets/entry01-loop.svg)

*The whole method is one loop. The gold dot is where this entry stands.*

What actually happened, in order:

- I broke Eudaemon into its parts: 8 big blocks (the lakes, the deep twin, Telos and the machinery around them), and roughly 100 parts in total across them.
- For every part, what it assumes to be true was written down as a plain sentence that can be proved wrong. 138 sentences.
- Together, the blocks, the parts and their assumptions make up [the blueprint](/blueprint/): the full written plan for the system, one document, versioned like software (v0.3, 02.08.2026).
- The blueprint went to 8 independent AI systems from different companies, each told to attack it: find what's missing, and for every fault describe exactly how it would fail in real life. None saw another's answers. About 230 findings came back.
- The blueprint was fixed: 28 missing parts added, most of them the dull machinery of backups, monitoring and repair that real systems die without; the weakest ideas rewritten; and a short list drawn up of what must be designed on paper before any code.

The most important thing the reviewers found: a system that watches you and advises you also changes you, the way weighing yourself every morning changes what you eat. Eudaemon will be advising me using data about a person its own advice is reshaping. Get that wrong and the failure is quiet: 6 of the 8 reviewers, working separately, described the same slow ending, a machine that carries on politely, every dial reading normal, while it describes a person I stopped being years ago. So that's now designed in. The system treats itself as part of my life rather than a camera outside it, measures its own influence, and has to earn the right to sound confident rather than assume it.

Where that leaves the idea. Entry 00 promised 19 testable pieces; after this week there are 39. The extra 20 aren't new ambitions, they're places the reviewers showed my thinking was too coarse. That's the point of doing this before building: every one of those weaknesses was going to be found eventually, and finding one in a review costs a morning, where finding it in a finished product costs a rebuild.

So the week's output is the blueprint, version 3, where every part can be traced back to the review that shaped it, and an honest list of what still has to be proved. The 39 testable pieces get [their own page](/blueprint/), because a promise you can't read is a promise that can't fail.

::: revised 31.08.2026
39 became 52 after a second review round, and 62 once the consolidated design turned every remaining assumption into a ranked test. The blueprint still shows the 52 of v0.5 until it is rewritten.
:::

Coming next. Entry 02: the tests. Each one gets its pass mark and its fail mark written down before it runs, so I can't move the goalposts afterwards.

---

**This week's files.** Blueprint v0.3 · 8 review sets, kept word for word · the 39 testable pieces · the 138 engineering assumptions.

**Changed my mind.** Eudaemon isn't a camera pointed at my life; it's part of the life it measures, and has to be designed that way.

**Next.** Entry 02: the tests, pass and fail marks first.
