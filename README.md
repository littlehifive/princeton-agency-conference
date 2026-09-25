# Applications of "agency": lessons from The Agency Fund

A 22-slide HTML presentation for the Applications session of "Agency in Institutional and Human
Capital Development", the Princeton–African School of Economics Research Hub conference at
Princeton University (September 25-26, 2026). It draws lessons from The Agency Fund and its AI for
Global Development Accelerator, with a focus on the Agency & AI Collaborative (A²C): a decentralized,
virtual, and open research and learning collaborative incubated at The Agency Fund with two jobs:
design AI that strengthens human agency in the social sector, and measure how agency evolves as
people use AI. After an interactive opening question, the research evidence, and the two gaps, it
showcases the collaborative's work in three bodies: learning projects (repeatable motions), research
on designing AI for agency (told through two animated case diagrams), and research on measuring agency.

**Live deck:** <https://littlehifive.github.io/princeton-agency-conference/>
(deployed from `main` by `.github/workflows/deploy-pages.yml`)

Contact: Zezhen (Michael) Wu, <zezhen@agency.fund>

## Contents

| Path | What |
|------|------|
| `index.html` + `slides/` | The 22-slide HTML deck (TAF web design system). Double-click `index.html`; arrow keys to present; works offline. |
| `a2l-intro-deck.pdf` | Vector PDF export of the deck (backup / sharing). |
| `slides/shared/` | Shared tokens, animation framework, and the self-hosted Montserrat font. |
| `slides/assets/` | Screenshots embedded in the deck (NotebookLM, PNAS paper, Claude Skills, behavioural-skills site, TAF x Jigsaw blog) and the slide-3 clipping collage (`agency-collage/`, including the CNN "Word of the Week" and ANA "Word of the Year" clips). |
| `shoot.mjs` | Screenshots every slide at 1920x1080 and flags overflow and console errors (`npm run shoot`). |
| `export_deck_pdf.mjs` | Renders the deck to a vector, text-selectable PDF (`npm run pdf`). |

## Deck outline

1. Cover: Applications of "agency", lessons from The Agency Fund and its AI for Global Development Accelerator (Princeton, September 26, 2026)
2. Interactive question: if you speak a second language, is there a good translation of "agency"?
3. Research evidence: AI can expand agency, and it can hamper it (clipping collage; the buzzword claim is sourced to CNN's March 2026 "Word of the Week" on "agentic" and the ANA's 2025 Marketing Word of the Year, "agentic AI")
4. The interactive accelerator map (AI for Global Development Accelerator context)
5. The two gaps: design and measurement
6. Part 2 divider: learning projects, repeatable motions
7. NotebookLM assistants: a research library that answers back (product screenshot)
8. NotebookLM measurement library: a research library of agency measurement tools (product screenshot)
9. Evaluating AI Across Cultures (PNAS Nexus): cultural defaults in AI evaluation (paper screenshot)
10. Behavioral-science and agency-measurement Claude Skills built with Irrational Labs (site and demo screenshots)
11. Part 3 divider: research on designing AI for agency
12. The Noora Health copilot study: an animated diagram of a mother at home, a nurse (Medical Support Executive) on WhatsApp, and the GenAI copilot behind the nurse; the agency question is how the nurse uses the copilot to support the mother (with the Stanford Center for Health Education)
13. The Raising The Village SBCC Coach study: an animated diagram of the behavioral-science-infused AI coach, the graduation coach's tablet, the field visit, and the household topics; the agency question is how to align AI-generated messages with what the coach can flexibly deliver on the ground
14. Four papers, one call: psychology inside AI design and evaluation, plus the wise-interventions opportunity
15. Part 4 divider: measuring agency
16. Measuring Agency in a Digital Context: the practitioner's guide co-published with Google Jigsaw
17. The 2x2 framework for agency measurement
18. The four-level GenAI evaluation framework (agency sits at Level 3)
19. Three steps: define locally, measure well, validate iteratively
20. Workshops for identifying agency signals in human-AI conversations: two simulated WhatsApp conversations (information delivery vs. goal setting and navigation), revealed click by click
21. The flagship study and six NGO partners: measuring agency in naturalistic data with live products
22. Close

Slides 3, 17, 18, and 19, plus the title of slide 20, reuse or adapt content from the
[Nairobi agency measurement workshop deck](https://github.com/agency-fund/taf-nairobi-agency-measurement-slides)
(content verbatim; header styling follows this deck's system).

## Rebuilding locally

```
npm install
npx playwright install chromium   # once
npm run shoot                     # screenshots + overflow/error scan into _verify/
npm run pdf                       # vector PDF export
```
