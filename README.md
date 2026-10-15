# Justina Ruszczak — portfolio

Static site, no build step. Three case studies, each with a working demo.

## Structure

```
index.html                      Home: positioning + case-study ledger
about.html
work/dealership-lead-flow.html  Case study 1 (embeds tools/lead-form)
work/search-term-review.html    Case study 2 (embeds tools/search-term-review)
work/performance-report.html    Case study 3 (embeds tools/performance-report)
tools/*/index.html              Self-contained demos (vanilla JS, sample data)
styles.css                      Design tokens + layout
rail.js                         Active-section highlight for the decision rail
vercel.json                     Clean URLs (/work/x instead of /work/x.html)
```

## Deploy to Vercel

Option A, drag and drop: go to vercel.com/new, choose "Browse" and drop this folder. Framework preset: Other. Done.

Option B, CLI:
```
npm i -g vercel
vercel          # first deploy, accept defaults, "Other" framework
vercel --prod   # production
```

Option C, Git: push this folder to a GitHub repo and import it at vercel.com/new. Every push redeploys.

## Before you publish

1. Search every file for `class="todo"` and replace each yellow placeholder with a real, verified number or remove the sentence. Do not publish placeholder metrics; a reviewer who spots one will assume the rest is invented.
2. Contact details and About page are filled from LinkedIn; re-check them after any role change.
3. Add GA4: paste your gtag snippet into the `<head>` of each page, or load it from a shared `analytics.js`. Suggested events: `case_study_view` (page), `demo_open` (clicks on "Open full screen"), `contact_click`.
4. Optional: swap sample data in `tools/*/index.html` for anonymised exports from real accounts. The demos parse CSV with headers `search term, impressions, clicks, cost, conversions`.

## Editing

Everything is plain HTML and CSS. Tokens are at the top of `styles.css` (dark mode is automatic). Each case study follows the same section order: Context, Constraint, Decision, Trade-off, Outcome, Reflection; keep that order so the rail works.
