# The Agency & AI Lab (A²L): Introduction Deck

A 27-slide HTML presentation introducing the Agency & AI Lab (A²L), a decentralized,
virtual, and open research and learning lab incubated at The Agency Fund. The deck pitches
the lab's two jobs to funders, practitioners, and researchers: design AI that strengthens
human agency in the social sector, and measure how agency evolves as people use AI. After
framing the two gaps, it showcases the lab's work in three bodies: learning projects
(repeatable motions), research on designing AI for agency, and research on measuring agency.

**Live deck:** <https://agency-fund.github.io/A2L-intro/>
(deployed from `main` by `.github/workflows/deploy-pages.yml`)

Contact: Zezhen (Michael) Wu, <zezhen@agency.fund>

## Contents

| Path | What |
|------|------|
| `index.html` + `slides/` | The 27-slide HTML deck (TAF web design system). Double-click `index.html`; arrow keys to present; works offline. |
| `a2l-intro-deck.pdf` | Vector PDF export of the deck (backup / sharing). |
| `slides/shared/` | Shared tokens, animation framework, and the self-hosted Montserrat font. |
| `shoot.mjs` | Screenshots every slide at 1920x1080 and flags overflow and console errors (`npm run shoot`). |
| `export_deck_pdf.mjs` | Renders the deck to a vector, text-selectable PDF (`npm run pdf`). |

## Deck outline

1. Cover
2. The interactive accelerator map (AI for Global Development Accelerator context)
3. The two gaps: design and measurement
4. Two conversations: a simulated mother-AI chat contrast (information delivery vs. agency development)
5. The agency flywheel (The Agency Fund's worldview; AI sits at every station)
6. Research evidence on how AI can expand or hamper agency
7. Part 2 divider: learning projects, repeatable motions
8. Three bodies of work, mapped to the two gaps
9. NotebookLM assistants: a research library that answers back
10. Evaluating AI Across Cultures (PNAS Nexus): cultural defaults in AI evaluation
11. Behavioral-science Claude Skills co-developed with Irrational Labs
12. Part 3 divider: research on designing AI for agency
13. The Noora Health copilot study (with the Stanford Center for Health Education)
14. The open opportunity: wise interventions, learning sciences, behavioral science, social psychology (anchored by Zhao 2026, Nature Reviews Psychology)
15. Part 4 divider: measuring agency
16. The 2x2 framework for agency measurement
17. The four-level GenAI evaluation framework (agency sits at Level 3)
18. Three steps: define locally, measure well, validate iteratively
19. The Nairobi workshop: the method field-tested in a room
20. Part 5 divider: the flagship study
21. The Penn partnership: an LLM judge for human agency
22. The measurement pipeline: from raw transcripts to trusted scores
23. The six-NGO cohort
24. Partners in detail: Digital Green, Jacaranda Health, Kabakoo Academies
25. Partners in detail: Nova Escola, The Apprentice Project, Udhyam Learning Foundation
26. Join the lab: funders, researchers, practitioners
27. Close

Slides 5, 6, 16, 17, and 18 reuse content from the
[Nairobi agency measurement workshop deck](https://github.com/agency-fund/taf-nairobi-agency-measurement-slides)
(content verbatim; header styling follows this deck's system).

## Rebuilding locally

```
npm install
npx playwright install chromium   # once
npm run shoot                     # screenshots + overflow/error scan into _verify/
npm run pdf                       # vector PDF export
```
