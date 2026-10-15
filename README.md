# Justina Ruszczak — complete responsive portfolio

Fully rebuilt static multipage site, no npm install or build step.

## Pages
- `/` homepage
- `/about/` background and experience
- `/contact/` contact page
- `/work/dealership-lead-flow/` full case study and interactive form comparison
- `/work/search-term-review/` full case study and interactive AI review simulation
- `/work/performance-report/` full case study and interactive report gate simulation

## Preview
Run a local HTTP server from this folder: `python3 -m http.server 8000`, then open `http://localhost:8000/`. Direct file:// browsing may not resolve root-relative links and styles.

## Deploy
Import this folder as a new Vercel project with Framework Preset **Other** and no build command. Replace an existing project only after backing up its current source; this is a standalone replacement, not a merge with an unseen Next.js repo.

## Important
- The three interactive prototypes use sample data and do not connect to APIs, send emails, or submit forms.
- Unverified performance placeholders from the prior public portfolio were removed. Add validated outcomes before claiming performance lifts.
- The homepage mock visual cards represent conceptual UI, not authentic application screenshots.
- Review biographical details and case-study claims for accuracy before going live.
