Justina Ruszczak Portfolio, dark editorial redesign

Pages: Home, About, Contact, and three case studies (dealership-lead-flow, search-term-review, performance-report), each with an interactive local demo.

Deploy on Vercel:
1. Replace the previous site files in your Vercel-connected repository with the contents of this folder (vercel.json at the root, pages inside dist/).
2. Framework Preset: Other. No build command. Output Directory: dist.
3. Deploy. vercel.json sets clean URLs and the output directory.

Fonts load from Google Fonts (Manrope, IBM Plex Mono). Everything else is self-contained: no build step, no dependencies.

The demos use illustrative local data. They do not connect to Google Ads, submit leads, or send email. The report claim checker is a limited rule-based prototype.
