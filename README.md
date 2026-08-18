# The Agency & AI Lab (A²L): Introduction Deck

A 23-slide HTML presentation introducing the Agency & AI Lab (A²L), a decentralized,
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
| `index.html` + `slides/` | The 23-slide HTML deck (TAF web design system). Double-click `index.html`; arrow keys to present; works offline. |
| `a2l-intro-deck.pdf` | Vector PDF export of the deck (backup / sharing). |
| `slides/shared/` | Shared tokens, animation framework, and the self-hosted Montserrat font. |
| `slides/assets/` | Screenshots embedded in the deck (NotebookLM, PNAS paper, intervention mapping, Claude Skills, behavioural-skills site, TAF x Jigsaw blog). |
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
9. NotebookLM measurement library: a research library of agency measurement tools (product screenshot)
10. Evaluating AI Across Cultures (PNAS Nexus): cultural defaults in AI evaluation (paper screenshot)
11. Intervention Mapping: a reusable framework for structuring digital messaging interventions
12. Behavioral-science and agency-measurement Claude Skills built with Irrational Labs (site and demo screenshots)
13. Part 3 divider: research on designing AI for agency
14. The Noora Health copilot study: aligning copilot design with MSEs' agency (with the Stanford Center for Health Education)
15. The Raising The Village SBCC Coach study: AI-personalized coaching through field-agent judgment
16. Four papers, one call: psychology inside AI design and evaluation, plus the wise-interventions opportunity
17. Part 4 divider: measuring agency
18. Measuring Agency in a Digital Context: the practitioner's guide co-published with Google Jigsaw
19. The 2x2 framework for agency measurement
20. The four-level GenAI evaluation framework (agency sits at Level 3)
21. Three steps: define locally, measure well, validate iteratively
22. The flagship study and six NGO partners: measuring agency in naturalistic data with live products
23. Close

Slides 2, 6, 19, 20, and 21 reuse content from the
[Nairobi agency measurement workshop deck](https://github.com/agency-fund/taf-nairobi-agency-measurement-slides)
(content verbatim; header styling follows this deck's system).

## Rebuilding locally

```
npm install
npx playwright install chromium   # once
npm run shoot                     # screenshots + overflow/error scan into _verify/
npm run pdf                       # vector PDF export
```
