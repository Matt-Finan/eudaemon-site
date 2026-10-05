---
title: What is the cost of β?
date: 2026-10-05
series: 5
status: entry
summary: Is it worth building an experiment engine to find causes? That comes down to cost against benefit. This entry brings the earlier entries' variables together in one equation for the cost, the days it takes to establish β.
---

To recap. Eudaemon turns a person's records into evidence strong enough to act on, and turns the goals a person brings into questions that evidence can answer. [Entry 02](/log/02-watch-or-try/) showed that correlations only warrant predictions, and that advice needs a directional cause (e.g. late coffee causes a later bedtime). These directional causes can be established by repeatedly trialling an intervention, with a coin deciding each time whether said intervention happens. [Entry 03](/log/03-the-moving-target/) introduced β, the size of the effect an intervention has (e.g. how many minutes does a late coffee delay bedtime?), and [entry 04](/log/04-how-fast-can-a-trial-reach-an-answer/) showed how frequently one could trial an intervention per day, and therefore how much sooner a trial can establish β. This entry looks to bring those variables together in an equation such that we can define the time taken to establish β in days. Put simply, this equation answers the question: what is the cost of β?

## Cost vs. benefit

[The blueprint](/blueprint/) for Eudaemon refers to an "experiment engine". Its function is to prompt the user to run [N-of-1 trials](https://en.wikipedia.org/wiki/N-of-1_trial) on themselves, letting a coin toss dictate a discrete action that day: hot shower or cold shower? normal coffee or decaf? to gym or not to gym? These trials are what is required to establish directional causes; however, they are a burden on the user, as a caffeine-free morning followed by the gym and a cold shower may not be all that palatable on a dark February morning. The user may be asking themselves: how much longer do I have to do this? Hence, before building the experiment engine, it would seem wise to do some cost-benefit analysis. The benefit, how much better the advice received from Eudaemon on a goal or decision becomes, will be the focus of future entries; the cost, in terms of time, is defined below. If the cost is low and/or the benefit is high, the experiment engine becomes central, and building it the priority.

## The equation for cost

Tap or click any of the terms below to find their definition.

<style>
/* Entry 05: the interactive equation. Uses the site's own tokens from site.css; adds 3 of its own. */
.eqx, .eq-sheet { --eq-card: #FBF8F2; --eq-shadow: rgba(19, 28, 46, .14); --eq-ease: cubic-bezier(.2, .8, .2, 1); --eq-spring: cubic-bezier(.32, .72, 0, 1); }
@media (prefers-color-scheme: dark) { .eqx, .eq-sheet { --eq-card: #1A2440; --eq-shadow: rgba(0, 0, 0, .45); } }
.eq-ready .wrap > *, .eq-ready main > *, .eq-ready article > *, .eq-ready header.site > * { transition: opacity .22s var(--eq-ease, ease), filter .22s var(--eq-ease, ease); }
.eq-dim .eq-path > :not(.eq-path):not(.eq-on):not(.eq-sheet):not(.eq-catch) { opacity: .2; filter: grayscale(1); }
.eqx { --eq-w: min(calc(100vw - 2.5rem), 54rem); width: var(--eq-w); margin: 2.2rem 0 1.9rem calc((100% - var(--eq-w)) / 2); position: relative; overflow-x: auto; }
.eqx.live { overflow: visible; }
.eqx.eq-on { z-index: 16; }
.eq { display: flex; align-items: center; justify-content: center; gap: .3em; width: max-content; margin: 0 auto; padding-block: .3em;
      font-size: clamp(16px, 5.4vw, 2.6rem); line-height: 1.2; white-space: nowrap; font-variant-numeric: lining-nums; }
.eq .g { transition: opacity .22s var(--eq-ease), filter .22s var(--eq-ease), transform .26s var(--eq-ease), color .2s var(--eq-ease); }
.eq-on .g:not(.hot) { opacity: .22; filter: grayscale(1); }
.eq .frac { display: inline-flex; flex-direction: column; align-items: center; }
.eq .num, .eq .den { display: flex; align-items: baseline; gap: .22em; padding-inline: .18em; }
.eq .bar { align-self: stretch; height: 0; border-top: max(1.5px, .055em) solid currentColor; margin-block: .12em .1em; }
.eq .op { color: var(--fg-soft); }
.eq sup { font-size: .6em; line-height: 0; position: relative; vertical-align: super; margin-left: .04em; }
.eq sub { font-size: .62em; line-height: 0; position: relative; vertical-align: sub; margin-left: .02em; }
.eq button.term { all: unset; position: relative; cursor: pointer; display: inline-block; border-radius: .22em; padding: 0 .06em; -webkit-tap-highlight-color: transparent; transform-origin: 50% 60%; }
.eq button.term::after { content: ""; position: absolute; inset: -6px -4px; }
.eq .num button.term::after { inset: -12px -4px -3px; }
.eq .den button.term::after { inset: -3px -4px -12px; }
.eq button.term:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }
.eq button.term.hot { transform: scale(1.14); }
.eq button.term.sel, .eq .bar.sel { color: var(--gold-text); }
.eq-key { margin: 1.2rem auto 0; max-width: 42rem; font-size: .9rem; }
.eq-key dt { font-weight: 600; margin-top: .6rem; }
.eq-key dd { margin: 0 0 0 1.2rem; color: var(--fg-soft); }
.eqx.live .eq-key { display: none; }
.eq-pop { position: absolute; z-index: 5; left: 0; top: 100%; width: min(24rem, 100%); background: var(--eq-card); color: var(--fg); border-radius: 14px;
          padding: 1rem 1.15rem 1.05rem; box-shadow: 0 1px 2px var(--eq-shadow), 0 12px 32px var(--eq-shadow); opacity: 0; transform: translateY(6px) scale(.985);
          transform-origin: var(--cx, 50%) 0; pointer-events: none; transition: opacity .18s var(--eq-ease), transform .22s var(--eq-ease); white-space: normal; }
.eq-pop.open { opacity: 1; transform: none; pointer-events: auto; }
.eq-pop::before { content: ""; position: absolute; top: -6px; left: calc(var(--cx, 50%) - 7px); width: 14px; height: 14px; background: var(--eq-card); transform: rotate(45deg); border-radius: 3px 0 0 0; }
.eq-kicker { font-family: 'Cinzel', 'Newsreader', serif; font-size: .62rem; letter-spacing: .22em; text-transform: uppercase; color: var(--meta); font-weight: 600; }
.eq-head { display: flex; align-items: baseline; gap: .6rem; margin: .25rem 0 .45rem; }
.eq-sym { font-size: 1.3rem; line-height: 1; font-weight: 500; color: var(--gold-text); min-width: 1.6rem; }
.eq-name { font-size: 1.02rem; font-weight: 600; line-height: 1.3; }
.eq-body { font-size: .9rem; line-height: 1.55; color: var(--fg-soft); margin: 0; }
.eq-link { display: inline-flex; gap: .3em; margin-top: .65rem; font-size: .85rem; color: var(--link); text-decoration: none; font-weight: 500; }
.eq-link:hover { text-decoration: underline; text-underline-offset: 3px; }
.eq-link[hidden] { display: none; }
.eq-sheet { position: fixed; z-index: 20; left: 0; right: 0; bottom: 0; max-width: 42rem; margin-inline: auto; background: var(--eq-card); color: var(--fg);
            border-radius: 16px 16px 0 0; box-shadow: 0 -10px 34px var(--eq-shadow); padding: .55rem 1.25rem calc(1.4rem + env(safe-area-inset-bottom, 0px));
            transform: translateY(105%); visibility: hidden; transition: transform .42s var(--eq-spring), visibility 0s linear .42s; touch-action: none; font-family: 'Newsreader', Georgia, serif; line-height: 1.62; }
.eq-sheet.open { transform: translateY(var(--drag, 0px)); visibility: visible; transition: transform .42s var(--eq-spring), visibility 0s; }
.eq-sheet.dragging { transition: none; }
.eq-sheet .grabber { width: 36px; height: 5px; border-radius: 3px; background: var(--rule); margin: 0 auto .8rem; }
.eq-sheet .eq-close { all: unset; position: absolute; top: .55rem; right: .7rem; width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; background: var(--card); color: var(--fg-soft); cursor: pointer; font-size: 15px; line-height: 1; }
.eq-sheet .eq-close:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
.eq-catch { position: fixed; inset: 0; z-index: 15; display: none; }
.eq-catch.on { display: block; }
.eq-live { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
@media (prefers-reduced-motion: reduce) { .eq .g, .eq-pop, .eq-sheet, .eq-ready article > * { transition: none !important; } .eq button.term.hot { transform: none; } }
</style>

<figure class="eqx" aria-label="The equation for the days to β">
<div class="eq" role="group" aria-label="T beta is at least 7.85 sigma squared over s times one minus s times beta squared, times one plus rho over one minus rho, times M over f">
<button class="term g" data-k="T">T<sub>β</sub></button>
<span class="op g">≥</span>
<span class="frac"><span class="num"><button class="term g" data-k="c">7.85</button><button class="term g" data-k="sigma">σ<sup>2</sup></button></span><span class="bar g"></span><span class="den"><button class="term g" data-k="s">s(1&#8201;−&#8201;s)</button><button class="term g" data-k="beta">β<sup>2</sup></button></span></span>
<span class="op g">×</span>
<span class="frac"><span class="num"><button class="term g" data-k="rho">1&#8201;+&#8201;ρ</button></span><span class="bar g" data-k="rho"></span><span class="den"><button class="term g" data-k="rho">1&#8201;−&#8201;ρ</button></span></span>
<span class="op g">×</span>
<span class="frac"><span class="num"><button class="term g" data-k="M">M</button></span><span class="bar g"></span><span class="den"><button class="term g" data-k="f">f</button></span></span>
</div>
<dl class="eq-key">
<dt data-k="T" data-kicker="This entry"><span class="sym">T<sub>β</sub></span>, <span class="nm">the days to β</span></dt>
<dd>The days a trial must run to establish which direction a cause runs and how big its effect is: does a late coffee cause a later bedtime and, if so, by how many minutes?</dd>
<dt data-k="beta" data-kicker="Entry 03"><span class="sym">β</span>, <span class="nm">the size of the effect</span></dt>
<dd>How much a change in one variable moves another. For example, the difference, in minutes, between the average bedtime after a true coffee and the average bedtime after a decaf. <a href="/log/03-the-moving-target/">Entry 03, The moving target</a></dd>
<dt data-k="sigma" data-kicker="Defined here"><span class="sym">σ</span>, <span class="nm">the standard deviation</span></dt>
<dd>How far one night&rsquo;s reading typically sits from its average, in minutes. The more an outcome varies by itself, the longer a given β takes to show. <a href="https://en.wikipedia.org/wiki/Standard_deviation">Standard deviation, explained</a></dd>
<dt data-k="s" data-kicker="Defined here"><span class="sym">s</span>, <span class="nm">the split</span></dt>
<dd>People may find the distribution of interventions dictated by a fair coin intolerable (e.g. too many cold showers or decaf coffees), and therefore want an unfair one. The price of that luxury is a longer T<sub>β</sub>, because the rarer average has to catch up. s is the share of occasions on which the coin chooses the more favourable intervention (i.e. its bias towards true coffees and warm showers); ½ for a fair coin.</dd>
<dt data-k="rho" data-kicker="Entry 02"><span class="sym">ρ</span>, <span class="nm">how much one day repeats the last</span></dt>
<dd>From 0, days varying freely, to 1, each day repeating the one before. The more the days repeat, the fewer independent comparisons a record holds. When a coin decides, this term becomes 1. <a href="/log/02-watch-or-try/">Entry 02, Watch or try</a></dd>
<dt data-k="f" data-kicker="Entry 04"><span class="sym">f</span>, <span class="nm">clean comparisons a day</span></dt>
<dd>How often the coin can be tossed in a day before one toss&rsquo;s effect spills into the next reading. At 3 a day an answer arrives 3 times sooner than at 1 a day. <a href="/log/04-how-fast-can-a-trial-reach-an-answer/">Entry 04, How fast can a trial reach an answer?</a></dd>
<dt data-k="c" data-kicker="Medical research"><span class="sym">7.85</span>, <span class="nm">the convention</span></dt>
<dd>The convention most medical trials follow. If the coffee did nothing, there&rsquo;d be only a 5% (1 in 20) chance of the trial wrongly finding an effect; if it really does move bedtime by the amount being looked for, there&rsquo;s an 80% chance the trial detects it. 7.85 is (1.96 + 0.84)², the two numbers that set those odds. Lehr turned it into a rule of thumb for sizing trials in 1992. <a href="https://pubmed.ncbi.nlm.nih.gov/1496197/">Lehr, Statistics in Medicine, 1992</a></dd>
<dt data-k="M" data-kicker="Entry 06"><span class="sym">M</span>, <span class="nm">the next entry</span></dt>
<dd>The subject of the next entry.</dd>
</dl>
</figure>

<script>
(() => {
  const root = document.documentElement, body = document.body;
  const hoverable = matchMedia('(hover: hover) and (pointer: fine)');
  const compact = () => !hoverable.matches || innerWidth <= 640;
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const make = (tag, cls, html) => { const n = document.createElement(tag); n.className = cls; if (html) n.innerHTML = html; return n; };
  const catcher = make('div', 'eq-catch'), sheet = make('div', 'eq-sheet', '<div class="grabber"></div><button class="eq-close" aria-label="Close definition">✕</button><div class="eq-card"></div>');
  const live = make('div', 'eq-live'); live.setAttribute('aria-live', 'polite');
  sheet.setAttribute('role', 'dialog'); sheet.setAttribute('aria-modal', 'false'); body.append(catcher, sheet, live);
  const sheetCard = sheet.querySelector('.eq-card');
  const defs = {};
  document.querySelectorAll('.eq-key dt').forEach(dt => {
    const dd = dt.nextElementSibling, a = dd.querySelector('a'), copy = dd.cloneNode(true);
    copy.querySelectorAll('a').forEach(x => x.remove());
    defs[dt.dataset.k] = { kicker: dt.dataset.kicker, sym: dt.querySelector('.sym').innerHTML, name: dt.querySelector('.nm').innerHTML,
      plain: dt.textContent, body: copy.innerHTML.trim(), href: a ? a.href : '', link: a ? a.textContent : '' };
  });
  const card = k => { const d = defs[k]; if (!d) return '';
    return '<div class="eq-kicker">' + d.kicker + '</div><div class="eq-head"><span class="eq-sym">' + d.sym + '</span><span class="eq-name">' +
      d.name.charAt(0).toUpperCase() + d.name.slice(1) + '</span></div><p class="eq-body">' + d.body + '</p><a class="eq-link" href="' + (d.href || '#') + '"' +
      (d.href ? '' : ' hidden') + (d.href.indexOf(location.host) < 0 ? ' target="_blank" rel="noopener"' : '') + '>' + d.link + ' <span aria-hidden="true">→</span></a>'; };
  let active = null, leaveT = 0;
  const figs = [...document.querySelectorAll('figure.eqx')];
  // Fit the equation to its figure on one line, as large as the width allows.
  const fit = () => figs.forEach(fig => { const eq = fig.querySelector('.eq'); eq.style.fontSize = '100px';
    const w = eq.scrollWidth, room = fig.clientWidth - 8, max = parseFloat(getComputedStyle(root).fontSize) * 3.4;
    eq.style.fontSize = Math.max(14, Math.min(max, 100 * room / w)) + 'px'; });
  figs.forEach(fig => {
    fig.classList.add('live');
    const pop = make('div', 'eq-pop'); pop.setAttribute('role', 'region'); fig.appendChild(pop); fig._pop = pop;
    const terms = [...fig.querySelectorAll('button.term')];
    terms.forEach((b, i) => {
      b.setAttribute('aria-expanded', 'false');
      b.setAttribute('aria-label', (defs[b.dataset.k] ? defs[b.dataset.k].plain : b.textContent) + ', show definition');
      b.addEventListener('mouseenter', () => { if (hoverable.matches && !active) { clearTimeout(leaveT); focusTerm(fig, b.dataset.k); } });
      b.addEventListener('mouseleave', () => { if (hoverable.matches && !active) { clearTimeout(leaveT); leaveT = setTimeout(clearFocus, 90); } });
      b.addEventListener('focus', () => { if (!active) focusTerm(fig, b.dataset.k); });
      b.addEventListener('blur', () => setTimeout(() => { if (!active && !fig.contains(document.activeElement)) clearFocus(); }, 0));
      b.addEventListener('click', e => { e.stopPropagation(); (active && active.fig === fig && active.k === b.dataset.k) ? close() : open(fig, b); });
      b.addEventListener('keydown', e => { if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return; e.preventDefault();
        const n = terms[(i + (e.key === 'ArrowRight' ? 1 : terms.length - 1)) % terms.length]; n.focus(); if (active) open(fig, n); });
    });
  });
  root.classList.add('eq-ready'); fit(); (document.fonts ? document.fonts.ready : Promise.resolve()).then(fit);
  function markPath(fig) { document.querySelectorAll('.eq-path').forEach(x => x.classList.remove('eq-path'));
    for (let n = fig.parentElement; n && n !== root; n = n.parentElement) n.classList.add('eq-path'); }
  function focusTerm(fig, k) { markPath(fig); root.classList.add('eq-dim'); figs.forEach(f => f.classList.toggle('eq-on', f === fig));
    fig.querySelectorAll('.g').forEach(g => g.classList.toggle('hot', g.dataset.k === k)); }
  function clearFocus() { root.classList.remove('eq-dim'); figs.forEach(f => { f.classList.remove('eq-on'); f.querySelectorAll('.hot,.sel').forEach(g => g.classList.remove('hot', 'sel')); }); }
  function open(fig, b) {
    const k = b.dataset.k; if (active && active.fig !== fig) active.fig._pop.classList.remove('open');
    focusTerm(fig, k); fig.querySelectorAll('.g').forEach(g => g.classList.toggle('sel', g.dataset.k === k));
    fig.querySelectorAll('button.term').forEach(t => t.setAttribute('aria-expanded', String(t.dataset.k === k)));
    active = { fig, k }; live.textContent = defs[k].plain + '. ' + defs[k].body.replace(/<[^>]+>/g, '');
    if (compact()) {
      fig._pop.classList.remove('open'); sheetCard.innerHTML = card(k);
      sheet.style.setProperty('--drag', '0px'); sheet.classList.add('open'); catcher.classList.add('on');
      requestAnimationFrame(() => { const sh = sheet.getBoundingClientRect().height || 280, r = fig.querySelector('.eq').getBoundingClientRect(), room = innerHeight - sh - 20;
        if (r.bottom > room || r.top < 16) scrollBy({ top: r.bottom - room, behavior: reduce() ? 'auto' : 'smooth' }); });
    } else {
      const pop = fig._pop; pop.innerHTML = card(k);
      const fr = fig.getBoundingClientRect(), br = b.getBoundingClientRect(), w = Math.min(pop.offsetWidth || 456, fr.width);
      const cx = br.left + br.width / 2 - fr.left, left = Math.max(0, Math.min(fr.width - w, cx - w / 2));
      pop.style.left = left + 'px'; pop.style.top = (fig.querySelector('.eq').getBoundingClientRect().bottom - fr.top + 10) + 'px';
      pop.style.setProperty('--cx', (cx - left) + 'px'); pop.classList.add('open');
      requestAnimationFrame(() => { const r = pop.getBoundingClientRect(); if (r.bottom > innerHeight - 16) scrollBy({ top: r.bottom - innerHeight + 24, behavior: reduce() ? 'auto' : 'smooth' }); });
    }
  }
  function close() { if (!active) return; active.fig._pop.classList.remove('open');
    active.fig.querySelectorAll('button.term').forEach(t => t.setAttribute('aria-expanded', 'false'));
    sheet.classList.remove('open'); catcher.classList.remove('on'); active = null; clearFocus(); }
  document.addEventListener('click', e => { if (active && !e.target.closest('.eq-pop') && !e.target.closest('.eq-sheet')) close(); });
  catcher.addEventListener('click', close); sheet.querySelector('.eq-close').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && active) { const f = active.fig, k = active.k; close(); const b = f.querySelector('button.term[data-k="' + k + '"]'); if (b) b.focus(); } });
  let rw = innerWidth; addEventListener('resize', () => { if (innerWidth !== rw) { rw = innerWidth; if (active) close(); fit(); } });
  let y0 = null, dy = 0;
  sheet.addEventListener('pointerdown', e => { if (e.target.closest('a,button')) return; y0 = e.clientY; dy = 0; sheet.classList.add('dragging'); sheet.setPointerCapture(e.pointerId); });
  sheet.addEventListener('pointermove', e => { if (y0 === null) return; dy = Math.max(0, e.clientY - y0); sheet.style.setProperty('--drag', dy + 'px'); });
  const end = () => { if (y0 === null) return; sheet.classList.remove('dragging'); y0 = null;
    if (dy > Math.min(120, sheet.offsetHeight * .3)) close(); else sheet.style.setProperty('--drag', '0px'); };
  sheet.addEventListener('pointerup', end); sheet.addEventListener('pointercancel', end);
})();
</script>

NB: M will be discussed in the next entry.

## How much is known

On any one person, very little. ρ has been measured in a small number of studies, with values as high as .87 depending on the person and what was measured, and most medical N-of-1 trials ignore it ([83.8% of 115 reviewed](https://www.nature.com/articles/s41398-023-02562-8)). β against σ has been measured for single interventions people actually trialled, but nobody has measured how it spreads across one person's many questions. f has never been measured: a single trial's protocol ([HeartSteps](https://academic.oup.com/abm/article/53/6/573/5091257)) set 5 a day, of which about 4 were usable; one's life may give higher numbers. M hasn't been measured either. s is a choice, not a measurement, and 7.85 is a convention. Nobody has put these together on one person and turned them into a number of days or a cost. Even typical values, measured on one person across many questions, would do that: they'd put a figure on the cost half of the cost-benefit analysis, and with the benefit, decide whether the experiment engine becomes Eudaemon's focus.

---

**This week's files.** The interactive equation · the QA run record.

**Next.** M.
