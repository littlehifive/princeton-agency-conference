# The Agency & AI Lab (A²L): Introduction Deck

A 21-slide HTML presentation introducing the Agency & AI Lab (A²L), a decentralized,
virtual, and open research and learning lab incubated at The Agency Fund. The deck pitches
the lab's two jobs to funders, practitioners, and researchers: design AI that strengthens
human agency in the social sector, and measure how agency evolves as people use AI. After
the research evidence and the two gaps, it showcases the lab's work in three bodies: learning
projects (repeatable motions), research on designing AI for agency, and research on
measuring agency.

**Live deck:** <https://agency-fund.github.io/A2L-intro/>
(deployed from `main` by `.github/workflows/deploy-pages.yml`)

Contact: Zezhen (Michael) Wu, <zezhen@agency.fund>

## Contents

| Path | What |
|------|------|
| `index.html` + `slides/` | The 21-slide HTML deck (TAF web design system). Double-click `index.html`; arrow keys to present; works offline. |
| `a2l-intro-deck.pdf` | Vector PDF export of the deck (backup / sharing). |
| `slides/shared/` | Shared tokens, animation framework, and the self-hosted Montserrat font. |
| `slides/assets/` | Screenshots embedded in the deck (NotebookLM, PNAS paper, behavioural-skills site, TAF x Jigsaw blog). |
| `shoot.mjs` | Screenshots every slide at 1920x1080 and flags overflow and console errors (`npm run shoot`). |
| `export_deck_pdf.mjs` | Renders the deck to a vector, text-selectable PDF (`npm run pdf`). |

## Deck outline

1. Cover
2. Research evidence: AI can expand agency, and it can hamper it (three flip-card studies)
3. The interactive accelerator map (AI for Global Development Accelerator context)
4. The two gaps: design and measurement
5. Two conversations: a simulated mother-AI chat contrast (information delivery vs. agency development)
6. The agency flywheel (The Agency Fund's worldview; AI sits at every station)
7. Part 2 divider: learning projects, repeatable motions
8. NotebookLM assistants: a research library that answers back (product screenshot)
9. Evaluating AI Across Cultures (PNAS Nexus): cultural defaults in AI evaluation (paper screenshot)
10. Behavioral-science Claude Skills co-developed with Irrational Labs (site screenshot)
11. Part 3 divider: research on designing AI for agency
12. The Noora Health copilot study: aligning copilot design with MSEs' agency (with the Stanford Center for Health Education)
13. Three papers, one call: psychology inside AI design and evaluation (Zhao 2026; Josifović & Noller 2026; Economides et al. 2026)
14. Part 4 divider: measuring agency
15. Measuring Agency in a Digital Context: the practitioner's guide co-published with Google Jigsaw
16. The 2x2 framework for agency measurement
17. The four-level GenAI evaluation framework (agency sits at Level 3)
18. Three steps: define locally, measure well, validate iteratively
19. The flagship study: measuring agency in naturalistic data (with Penn's LLM-judge method)
20. The six-NGO cohort: what we might learn with each partner
21. Close

Slides 2, 6, 16, 17, and 18 reuse content from the
[Nairobi agency measurement workshop deck](https://github.com/agency-fund/taf-nairobi-agency-measurement-slides)
(content verbatim; header styling follows this deck's system).

## Rebuilding locally

```
npm install
npx playwright install chromium   # once
npm run shoot                     # screenshots + overflow/error scan into _verify/
npm run pdf                       # vector PDF export
```
