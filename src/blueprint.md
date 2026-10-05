---
title: The blueprint
layout: page.njk
permalink: /blueprint/
started: 02.08.2026
updated: 05.10.2026
summary: The full written plan for Eudaemon, versioned like software; what it's made of, what it assumes, and what still has to be proved.
---

*Version 0.6.1 · 05.10.2026 · First drawn 02.08.2026 (the story of how is [entry 01](/log/01-the-blueprint/)) and rebuilt to the v3 architecture after 4 adversarial review rounds. Everything on this page is proposed, not proven. It changes as the design changes, and every change of mind is dated in the log.*

Eudaemon turns a person's records into evidence strong enough to act on, and turns the goals that person brings into questions that evidence can answer. Drawn, the whole thing is one loop:

![Eudaemon: one loop, the user in the middle. Records land in the lakes and teach the deep twin; the user brings a goal to Telos, which asks the twin the questions the plan depends on; where the record can't answer, the experiment engine designs a trial that joins the plan as a step; the user commits or sets the goal aside and runs the plan day by day, handing chosen tasks to Jarvis; what the user actually did returns to the lakes as new records. The key at the foot decodes the marks.](/assets/loop-map-v3.svg)

*The gold numbers on the map turn up again in brackets through the text on this page; read the 2 side by side.*

## The lakes (1)

Eudaemon claims every record its user can lawfully obtain and holds it as one encrypted archive. Everything arrives as a raw record and stays one. Nothing is edited in place, and each record is sealed under its own key such that, should the need arise, it can later be isolated and erased. Raw records are the only ground truth; everything else the system holds is derived from them and labelled as such. The record keeps 2 clocks, when a thing happened and when the system learnt of it, so hindsight can never masquerade as foresight.

## The deep twin (2)

Over the lakes sits the deep twin. Each record is labelled so it can be found; the labels are the system's hypotheses about what may be present in a record, and a hypothesis is not evidence until it has been corroborated. Patterns earn the status of claims slowly, by corroboration and under a careful discipline for what the records are allowed to prove. Thus the twin gradually builds a body of evidence about what the user actually does, when and under what conditions. "Why" is earned via trials, as explained in [entry 02](/log/02-watch-or-try/), run by the experiment engine. Results land in the lakes and the twin holds the cause as a claim at its highest grade.

The twin doesn't impersonate the user. Every claim it holds carries a grade, from read straight off a record at the bottom to tested cause at the top, and is accompanied by error bars and confidence intervals. Watching alone never promotes a correlation to a cause. What the twin hasn't observed sits in an open register of unknowns. Models that predict or draft sit beside the twin, and what they produce is a guess, never evidence. Telos and the twin meet at one narrow point; Telos never reads a raw record.

The grades, from the bottom up:

| grade | what it means | how a claim earns it |
|---|---|---|
| fact | read straight off a record | the record says so, and it can be checked against the bytes |
| pattern | something that has held repeatedly in the record | corroboration, across records and over time |
| projection | a forecast made from patterns | scored when the future arrives |
| inference | a like-for-like comparison drawn from days that happened anyway, adjusted for the obvious differences | its known weaknesses travel with it, and it is never called a cause |
| tested cause | doing X changes Y, for this user | a randomised trial, run by the experiment engine |

## Telos (3, 4)

When the user brings a goal (3), the goal layer (Telos) questions them until the goal is something measurable. It then researches how such goals are actually reached and takes each candidate method apart until it understands it: the steps, why each one matters, what each requires of the person attempting it and what those demands rest on in turn. That understanding is what makes the comparison with the twin worth having. Telos compares the candidate methods with the twin, generating the questions the twin can answer, and works out what the user would have to change for a route to work. A route can be ruled out on evidence, or returned (4) with the changes the user would have to make for it to work on them, with the system's confidence stated on every claim.

## The experiment engine

The experiment engine is not a separate destination the user visits. It is what Telos reaches for when the record alone cannot carry the plan. Telos decomposes a goal into questions; each question goes to the twin; the twin answers at whatever grade the record supports. When a question the plan depends on comes back at a grade too low to act on, and the stakes of the step require a cause, the answer carries with it the trial that would settle the question, along with how long it would take and what it would ask of the user. That trial then appears in the plan as a step, beside the habits and tasks, and the user chooses whether to run it. Its result lands in the lakes as records, and the twin's claim rises to a tested cause. Telos then revises the plan on the stronger evidence.

One ruling is open. The twin may one day propose a trial of its own, where it finds a gap worth closing and no goal is on the table; that is the system steering a life unasked, and it hasn't been decided. Nor has the larger question, how far the whole design leans on watching and how far on trials. It turns on what a cause costs in days, set against what it's worth to the user. [Entry 05](/log/05-what-is-the-cost-of-beta/) sets out that cost as one equation, built on [entry 02](/log/02-watch-or-try/), [entry 03](/log/03-the-moving-target/) and [entry 04](/log/04-how-fast-can-a-trial-reach-an-answer/); entry 03 also sets the clock it has to beat, and separate tests will measure the worth.

## The plan (5, 6), and Jarvis (7)

The user then decides (5): commit to the plan, which carries its own checkpoints, or set the goal aside. A plan is a hypothesis about the user, written down before it runs. Telos expects the method to work, and it says in advance what evidence by when would add to or subtract from its confidence.

The user runs the plan (6). What happened is checked against those checkpoints, and the plan is revised. How a plan is presented, and what running one looks like day to day, is not yet decided.

Jarvis is the agent layer for the tasks the user chooses to hand over (7); a plan can be run end to end without it. It sits on the loop because even the diary that dispenses the day's tasks is Jarvis in embryo, and it is drawn dashed because it is the last thing to be built: the design treats it as the largest internal risk and the part most likely to be absorbed by platforms. Delegation is a choice, task by task. Every action Jarvis takes runs under narrow permissions, one action at a time, with a ladder from propose to confirm to act, and its work is marked as its own so the twin can tell what an agent did from what the user did.

2 rules hold everywhere: the system never tells the user what to want, and it never sounds more certain than its evidence allows; confidence has to be earned, starting from an honest "I don't know you yet."

## Back to the lakes (8), and the boundary

Whatever the user actually did returns to the lakes as new records (8), and the system learns. A system that watches and advises a person changes that person, so Eudaemon is drawn as a loop that includes the user, not a camera pointed at them. It labels everything it caused as its own doing at the moment it's recorded, measures its own footprint on the user's time and attention and watches for the quiet failure where it ends up describing someone the user has stopped being.

The boundary is the set of rules everything inside obeys. Nothing leaves the user's control without passing an egress policy, and a ledger records anything that ever does. Anything the system reads is treated as data, never as instructions; words in an email can't become commands. One shared language of confidence and unknowns, and everything auditable years later. Any record can be erased forever by destroying its key. Deletion reaches every derived store, every index and every model that trained on it, and it says what had already left: a sent message can't be unsent, and the system won't imply a right it can't enforce.

## What it refuses to answer

Some questions no amount of data or budget reaches, and the design names the refusal instead of guessing. Why a single past decision went the way it did, when nothing was randomised. What the user felt, beyond what they reported. Whether a change came from the system's advice or from the user's own trajectory. Anything about a span with no raw bytes. Anything about another person's mind at a high grade. Other refusals are commitments: it never diagnoses, monitors, treats or prevents anything, and it never advises on specific financial products. It helps decide, shows what a route would take and says how it might be wrong.

## The 62 ranked tests

Eudaemon is a system for a person, and I'm the first, because mine is the record I can lawfully obtain. Everything above rests on assumptions, and every one of them is now a test whose result could change what I do, ranked by how far. The count has moved as the design has: 19 at the first pass, 39 after the first review round, 41 and then 52 after the second, 62 once every assumption in the consolidated design became a ranked test. The full register stays in the project files. The 3 it ranks highest are all questions about time. How strongly does each channel of a record predict its own next day, and so how many independent days is a year of it worth? Do the relationships worth learning about a person stay true for longer than they take to learn? Can a trial, a coin deciding each time, supply several clean comparisons a day, so that a question settles in weeks where watching alone would take years? [Entry 02](/log/02-watch-or-try/) sets out the first, [entry 03](/log/03-the-moving-target/) the second and [entry 04](/log/04-how-fast-can-a-trial-reach-an-answer/) the third; [entry 05](/log/05-what-is-the-cost-of-beta/) puts them in one equation.

## Design commitments

A method and what it would take, never a verdict; the decision stays with the user. Requirements in performable terms, never personality terms. Raw records the only ground truth; a model's guess never becomes evidence. Confidence earned, never assumed, and every answer saying how it might be wrong. The distinction between no evidence and negative evidence enforced everywhere. Causal language earned only by a randomised trial. Trials rationed by stakes against cost. One ledger for the user's attention. Agents' work never mistaken for the user's; delegation a choice, never a default. Anything the system reads treated as data, never as instructions. Everything the system itself causes labelled as its own at the moment of recording. 2 clocks on every fact: when it happened, when it was learnt. Any record erasable forever, and honest about what deletion can't reach. Automated routes priced for their whole lives, never their builds alone. The system itself judged as a method, retirement test included. Nothing from the records, source or derived, on this site.

## What's not published, and why

The engineering detail (the full parts list, the security design, the specifics of agent containment, the machinery inside the twin, the point where Telos and the twin meet) stays private until the relevant parts are built; publishing a threat model before the defences exist would be poor security practice, and saying so plainly seems better than pretending the document doesn't exist. The test register is published as a count and its top 3; the list itself stays in the project files. The review transcripts stay in the project files, kept word for word. Everything that changes on this page is dated, and the log records why.

## Version history

- **v0.1 · 01.08.2026:** first full drawing; 8 blocks, ~100 parts, 103 assumptions, 19 testable pieces.
- **v0.2 · 01.08.2026:** corrections from first reading; the archive/analysis split, method research as its own step, the plan as the decision artefact.
- **v0.3 · 02.08.2026:** rebuilt after the 8-review attack; 28 parts added, the loop redrawn to include me, the trust schedule added, testable pieces 19 → 39, assumptions 103 → 138.
- **v0.4 · 09.08.2026:** the goal layer rethought; Telos studies candidate methods from the inside before comparing them with the twin, the output reframed from a price to a method fitted to the person, automation weighed inside Telos as rival versions of a method, the twin asked to reach why as well as what, testable pieces 39 → 41.
- **v0.5 · 09.08.2026:** the register audit; 9 independent reviews attacked the full list of beliefs for what it was missing. Testable pieces 41 → 52, the knowledge claim split 5 ways; the private assumption register grew to 164 entries with 8 retired as duplicates. 3 build-first commitments added: data never instructions, the system's own doings labelled at the moment of capture, 2 clocks on every fact. Automation repriced over its whole lifetime, and never compulsory. The loop map moved onto this page.
- **v0.6 · 02.09.2026:** rebuilt to the v3 architecture after 2 further review rounds (a blind clean room round and a round with resources assumed unlimited). The page turned to face the user, with the author as the first of them. The deep twin restated as a body of evidence, where v0.5 had it as a working model of me, with a grade on every claim and why earned only by trial; the grades tabled. The experiment engine drawn where it is invoked, from a question the record can't answer, and its trials made steps in the plan. Commit and trial collapsed into one decision, because every plan carries its own checkpoints. The plan's day to day left open. The forget path and the refusals written down. The Plant folded into what's not published. The 52 pieces replaced by the 62 ranked tests, published as a count and its top 3. The loop map redrawn to match, with a key.
- - **v0.6.1 · 05.10.2026:** the log pointers brought up to entry 05; how far the design leans on watching or on trials restated as the cost of a cause against its worth, where v0.6 had one number deciding it, with a link to the equation in entry 05; the third test put in entry 04's terms.
