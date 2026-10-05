# How to publish on eudaemon.uk

*Written for the you that has forgotten everything between Sundays. No software needed; everything happens at github.com in the browser, from any machine including your phone.*

---

## ⚠ The one rule that matters more than all the others

**This repository is public and its history is permanent.** Never upload, paste or commit: datasets or exports from the lakes, analysis outputs containing personal data, prompts or transcripts that mention other people, credentials or API keys, or unpublished personal notes. Blog posts and site files only. If something sensitive ever lands here by mistake, deleting the file does NOT remove it from history; treat it as published and ask a Claude session to help rotate/contain immediately.

---

## Publish a new entry (the weekly job, ~2 minutes of mechanics)

1. Go to **github.com → this repository → `src/posts`**
2. Click **Add file → Create new file**
3. Name it like the others: `04-what-the-number-said.md` (number first; it becomes the web address `/log/04-what-the-number-said/`)
4. Open `TEMPLATE-POST.md` (repo root) in another tab, copy it, paste it in, fill it in. The bits that matter:
   - `title:` the entry title, no number (the number comes from `series:`)
   - `date:` today, as `2026-08-01`
   - `series:` the entry number as a plain number (4, not 04)
   - `summary:` one or two sentences for the homepage and RSS
5. Click **Commit changes** (green button, twice)
6. Glance at the homepage "Now:" line; if it's gone stale, update `now` and `nowUpdated` in `src/_data/site.json` in the same visit (a stale status line reads as an abandoned project)

That's it. The site rebuilds itself; the entry is live at eudaemon.uk in about a minute. If it isn't after five, look at the repository's **Actions** tab; a red cross means the build failed, and the usual cause is broken front matter (a missing `---` or a stray colon in the title; put the title in quotes if it contains one).

## Edit anything already published

Open the file on github.com, click the **pencil icon**, change it, **Commit changes**. Same for the About page: `src/about.md`.

## Entries with figures

1. Upload the figures first: **`src/assets` → Add file → Upload files**, drag in the entry's SVGs (named `entryNN-something.svg`), **Commit changes**.
2. Then the entry itself: **`src/posts` → Add file → Upload files**, drag in the `.md`, **Commit changes**. Uploading a prepared file beats pasting: the header, the links and any equations arrive exactly as checked.
3. In the entry, a figure is a line of its own: `![What the figure shows, in words](/assets/entryNN-something.svg)`.
4. **A caption is one wholly italic line straight under its figure:** `*One sentence saying what to look at.*` It renders small and grey. Any other paragraph under a figure stays normal text.

## Interactive entries

An entry can carry its own HTML, styles and script inside the `.md` (entry 05's equation does): the site's markdown lets HTML through untouched, and nothing goes in `src/assets`. Keep the HTML block free of blank lines (a blank line hands the rest back to markdown); keep the definitions once, in a `<dl>`, so readers without JavaScript and the RSS feed still get them; look at it on a phone-sized screen before uploading.

## Two traps in GitHub's editor

- **The search bar's replace box holds one line.** Anything with a line break (a header line under another, a revised box) pasted there lands on one line and breaks: a header error, or a box shown as raw text with `:::`. Paste multi-line text into the file itself, or upload the whole corrected file (the same name replaces it).
- **Enter at the end of a list item starts a new item by itself** (`- `). Paste a list line without its own `- `.

## Check it worked

The **Actions** tab shows a green tick per commit. Then open the page with `?v=` and anything new on the end (`eudaemon.uk/log/05-what-is-the-cost-of-beta/?v=2`): pages are cached for a few minutes, and the ending skips the cache.

## Change your mind in public (the whole point of the site)

When a new entry overturns something an older entry said:

1. Edit the OLD entry. Where the outdated claim sits, add:

   ```
   ::: revised 12.08.2026
   I no longer think this; the test in [entry 05](/log/05-the-result/) showed otherwise.
   :::
   ```

2. In the old entry's front matter, change `revisions: none yet` to a count or note, e.g. `revisions: 1 (12.08.2026)`

The `::: revised` block renders as the gold-edged box; the original text stays put. Never silently rewrite history; that's the one rule. The one exception: a name brought in line with later entries, where no claim changes, is edited in place.

## Update the "Now:" line on the homepage

It lives in `src/_data/site.json`, fields `now` and `nowUpdated`. Edit, commit.

## Things you never need to touch

`.eleventy.js`, `.github/`, `package.json`, `package-lock.json`, `src/_includes/`, and `src/assets/` apart from uploading an entry's figures. They're the machinery. If something breaks and the Actions tab is red, paste the error into a Claude session; the whole site is plain files and any competent session can fix it.

## The one-time setup

Already done by the time you read this (see `LAUNCH CHECKLIST` in the blog folder). For the record: the site is built by Eleventy, rebuilt automatically by GitHub Actions on every commit, served by GitHub Pages at eudaemon.uk with HTTPS, DNS at GoDaddy, fonts self-hosted, no analytics, no cookies, no JavaScript needed to read.
