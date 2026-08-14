# The Agency & AI Lab (A²L): Introduction Deck

A 24-slide HTML presentation introducing the Agency & AI Lab (A²L), a decentralized,
virtual, and open research and learning lab incubated at The Agency Fund. The deck pitches
the lab's two jobs to funders, practitioners, and researchers: design AI that strengthens
human agency in the social sector, and measure how agency evolves as people use AI.

**Live deck:** <https://agency-fund.github.io/A2L-intro/>
(deployed from `main` by `.github/workflows/deploy-pages.yml`)

Contact: Zezhen (Michael) Wu, <zezhen@agency.fund>

## Contents

| Path | What |
|------|------|
| `index.html` + `slides/` | The 24-slide HTML deck (TAF web design system). Double-click `index.html`; arrow keys to present; works offline. |
| `a2l-intro-deck.pdf` | Vector PDF export of the deck (backup / sharing). |
| `slides/shared/` | Shared tokens, animation framework, and the self-hosted Montserrat font. |
| `shoot.mjs` | Screenshots every slide at 1920x1080 and flags overflow and console errors (`npm run shoot`). |
| `export_deck_pdf.mjs` | Renders the deck to a vector, text-selectable PDF (`npm run pdf`). |

## Deck outline

1. Cover
2. AI at the frontline (the AI for Global Development Accelerator context)
3. The agency flywheel (The Agency Fund's worldview; AI sits at every station)
4. AI can expand or hamper agency (three studies, 2025 to 2026)
5. The two gaps: design and measurement
6. Part 2 divider: the lab
7. What A²L is: one lab with two jobs
8. How the lab runs: tri-sector teams, time-boxed studies, reusable artifacts
9. Learning projects
10. Research agenda: four guiding questions
11. Part 3 divider: measuring agency
12. The 2x2 framework for agency measurement
13. The four-level GenAI evaluation framework (agency sits at Level 3)
14. Three steps: define locally, measure well, validate iteratively
15. The Nairobi workshop: the method field-tested in a room
16. Part 4 divider: the flagship study
17. The Penn partnership: an LLM judge for human agency
18. The measurement pipeline: from raw transcripts to trusted scores
19. The six-NGO cohort
20. Partners in detail: Digital Green, Jacaranda Health, Kabakoo Academies
21. Partners in detail: Nova Escola, The Apprentice Project, Udhyam Learning Foundation
22. Ethics and data stewardship
23. Join the lab: funders, researchers, practitioners
24. Close

Slides 3, 4, 12, 13, and 14 are reused from the
[Nairobi agency measurement workshop deck](https://github.com/agency-fund/taf-nairobi-agency-measurement-slides).

## Rebuilding locally

```
npm install
npx playwright install chromium   # once
npm run shoot                     # screenshots + overflow/error scan into _verify/
npm run pdf                       # vector PDF export
```
