/* Accelerator cohort data for the map slide. Facts are condensed from the
   2025 demo-day materials, 2026 sprint/product cards, and official org sites. */
window.A2L_ORGS = [
  {
    id: "digital-green", name: "Digital Green", short: "Digital Green", chip: "DG", cohort: 2025,
    color: "#2a78d6", segmentRank: 1,
    product: "FarmerChat",
    desc: "A multilingual AI agronomy advisor for smallholder farmers, using text, voice, and images to deliver localized recommendations.",
    aiCountries: ["India", "Kenya", "Nigeria", "Ethiopia", "Brazil"],
    orgCountries: ["India", "Kenya", "Nigeria", "Ethiopia", "Brazil"],
    levels: {
      L1: { fact: "Model stack is live across 16 languages, with text, voice, image evals and over 100% improvement over the base model." },
      L2: { fact: "1M+ users have generated 8M+ queries; 30% are monthly active and average 8.7 queries per month." },
      L3: { fact: "About 70% of active users report applying FarmerChat advice; 80% share advice with peers." },
      L4: { fact: "Kenya assessment finds adoption of cost-saving practices; income and climate-resilience outcomes are in ongoing RCTs.", planned: true }
    }
  },
  {
    id: "jacaranda-health", name: "Jacaranda Health", short: "Jacaranda", chip: "JH", cohort: 2025,
    color: "#e34948", segmentRank: 7,
    product: "PROMPTS on Voice",
    desc: "Voice-enabled AI triage and Q&A for PROMPTS, extending maternal-health support to mothers with low literacy or limited text access.",
    aiCountries: ["Kenya", "Ghana"],
    orgCountries: ["Kenya", "Ghana", "eSwatini"],
    levels: {
      L1: { fact: "Voice triage is live, with over 90% nurse-triage agreement and strong Swahili/English clinical review scores." },
      L2: { fact: "PROMPTS serves 4M+ mothers, with 600K+ monthly active users and 95% CSAT on the AI-supported channel." },
      L3: { fact: "Users were 3.5x more likely to seek care for postpartum danger signs and report higher preparation." },
      L4: { fact: "Ongoing 2025 evidence shows higher ANC completion, care-seeking, and family-planning uptake among PROMPTS users." }
    }
  },
  {
    id: "precision-development", name: "Precision Development (PxD)", short: "PxD", chip: "PxD", cohort: 2025,
    color: "#eda100", segmentRank: 12,
    product: "PaddyAI",
    desc: "GenAI local-language audio advisories for farmers, with agronomist review before recommendations are broadcast.",
    aiCountries: ["India"],
    orgCountries: ["India", "Ethiopia", "Kenya", "Nigeria", "Pakistan", "Uganda"],
    levels: {
      L1: { fact: "PaddyAI is live with over 99% translation/TTS accuracy, under 1% hallucination, and agronomist review before broadcast." },
      L2: { fact: "AI-generated audio advisories have a 2.2% higher listening rate than human-generated advisories." },
      L3: { fact: "Recall, retention, and comprehension surveys are underway with farmers receiving AI advisories.", planned: true },
      L4: { fact: "PxD advisories report +9% yield, $12-$19 return per $1, and 21% lower severe crop loss in predecessor services." }
    }
  },
  {
    id: "reach-digital-health", name: "Reach Digital Health", short: "Reach DH", chip: "RDH", cohort: 2025,
    color: "#0ea5e9", segmentRank: 4,
    product: "MomConnect AI",
    desc: "AI-supported onboarding, chatbot triage, and personalized surveys for South Africa's national maternal-health messaging platform.",
    aiCountries: ["South Africa"],
    orgCountries: ["South Africa", "Mozambique"],
    levels: {
      L1: { fact: "MomConnect uses automated chatbot/helpdesk triage and AI-supported onboarding for maternal-health questions." },
      L2: { fact: "Nearly 5M mothers registered through more than 95% of South African public health facilities." },
      L3: { fact: "Conversational onboarding raised inbound messages from mothers by up to 42% in pilot operations." },
      L4: { fact: "MomConnect studies show positive maternal-health behaviours; AI-specific outcome evidence is still being built.", planned: true }
    }
  },
  {
    id: "noora-health", name: "Noora Health", short: "Noora", chip: "NH", cohort: 2025,
    color: "#9333ea", segmentRank: 10,
    product: "Remote Engagement Service + AI co-pilot",
    desc: "RAG triage, voice registration, and content personalization for caregiver support, with humans retaining control of high-risk replies.",
    aiCountries: ["India", "Bangladesh", "Indonesia", "Nepal"],
    orgCountries: ["India", "Bangladesh", "Indonesia", "Nepal"],
    levels: {
      L1: { fact: "RAG triage and voice-enabled registration are live RES components, alongside content personalization." },
      L2: { fact: "RES has engaged 1M+ patients and caregivers in 8 languages; IVR registration is running in 3 languages." },
      L3: { fact: "RAG triage cut inbound query volume by 50%, freeing staff for cases that need human attention." },
      L4: { fact: "Five caregiver-journey metrics and Evidential A/B tests are tracking health behavior and outcome effects.", planned: true }
    }
  },
  {
    id: "rocket-learning", name: "Rocket Learning", short: "Rocket", chip: "RL", cohort: 2025,
    color: "#e87ba4", segmentRank: 15,
    product: "Shiksha Saathi",
    desc: "A WhatsApp AI assistant for Anganwadi workers and parents, answering early-childhood learning questions in local language mixes.",
    aiCountries: ["India"],
    orgCountries: ["India"],
    levels: {
      L1: { fact: "Shiksha Saathi gives instant multilingual support to Anganwadi workers in Hindi, English, and Hinglish." },
      L2: { fact: "The assistant saw 93% opt-in across 3 pilots and sits on a platform reaching 400K Anganwadi workers." },
      L3: { fact: "The product is designed to reduce supervisor dependence and speed access to training and admin guidance." },
      L4: { fact: "Evidential A/B tests are planned to validate engagement and learning impact before broader scale.", planned: true }
    }
  },
  {
    id: "youth-impact", name: "Youth Impact", short: "Youth Impact", chip: "YI", cohort: 2025,
    color: "#b45309", segmentRank: 6,
    product: "Ganitha Ganaka",
    desc: "Phone-based AI numeracy assessment and tutoring for primary students, designed for child speech and caregiver-mediated practice.",
    aiCountries: ["India"],
    orgCountries: ["Botswana", "India"],
    levels: {
      L1: { fact: "AI voice assessment is under manual review for Kannada child speech; automated evals are not live yet.", planned: true },
      L2: { fact: "Initial AI pilot reached roughly 500 caregivers, with 68% successful calls and 26% engagement." },
      L3: { fact: "Phone tutoring evidence shows +81 pp active caregiver engagement and higher perceived math value." },
      L4: { fact: "Large RCTs across 5 countries show +0.35 SD learning gains from phone-based tutoring; AI causal effect is under evaluation.", planned: true }
    }
  },
  {
    id: "udhyam", name: "Udhyam Learning Foundation", short: "Udhyam", chip: "UD", cohort: 2025,
    color: "#4f46e5", segmentRank: 13,
    product: "Udhyam Saathi",
    desc: "A WhatsApp/web AI mentor that helps students practise entrepreneurial mindsets through idea generation, reflection, and multimodal feedback.",
    aiCountries: ["India"],
    orgCountries: ["India"],
    levels: {
      L1: { fact: "Udhyam Saathi uses rubrics and multimodal models; video evaluation cost fell 96% to about Rs.0.27." },
      L2: { fact: "The WhatsApp/web mentor logs 60% more ideas, 5x engagement, and 80% CSAT in the Shiksha journey." },
      L3: { fact: "Student ideas show +163% novelty and +126% stronger articulation, with confidence gains reported." },
      L4: { fact: "A 10-year longitudinal study tracks entrepreneurial mindsets and life outcomes from age 14 to 24.", planned: true }
    }
  },
  {
    id: "adalat-ai", name: "Adalat AI", short: "Adalat", chip: "AD", cohort: 2026,
    color: "#0d9488", segmentRank: 2,
    product: "AI courtroom transcription",
    desc: "Speech recognition and case-flow tools that transcribe courtroom proceedings in Indian languages and digitize legal records.",
    aiCountries: ["India"],
    orgCountries: ["India"],
    levels: {
      L1: { fact: "ASR runs in 7 languages with WER 2-15%, RTF 0.1, and human verification before records are signed." },
      L2: { fact: "5,500+ courts across 11+ states have generated 4M+ minutes and 0.5M+ documents." },
      L3: { fact: "68% of users expect 30+ minutes saved daily; typical users log 500+ minutes per month." },
      L4: { fact: "J-PAL South Asia RCT is in preparation, with case resolution, throughput, and quality outcomes planned.", planned: true }
    }
  },
  {
    id: "ami", name: "African Management Institute", short: "AMI", chip: "AMI", cohort: 2026,
    color: "#8b5cf6", segmentRank: 11,
    product: "AMI Coachbot",
    desc: "A WhatsApp coaching assistant that handles reminders, nudges, and tool recommendations for entrepreneur cohorts.",
    aiCountries: ["Kenya"],
    orgCountries: ["Côte d'Ivoire", "Ghana", "Kenya", "Nigeria", "Rwanda", "Senegal", "South Africa", "Uganda", "Mauritius"],
    levels: {
      L1: { fact: "Coachbot is live on WhatsApp with 1.13s message latency and 1.48% error rate in early H1 data." },
      L2: { fact: "Cohort 2 launched June 2026; early programme logs show 73% platform logins and 70% labs attended." },
      L3: { fact: "Early users report tool/practice adoption and 5.1/7 confidence in growth leadership." },
      L4: { fact: "Impact survey tracks revenue, profit, and jobs; early reads are directional rather than final results.", planned: true }
    }
  },
  {
    id: "intelehealth", name: "Intelehealth", short: "Intelehealth", chip: "IH", cohort: 2026,
    color: "#eb6834", segmentRank: 8,
    product: "Ayu 2.0",
    desc: "AI clinical decision support that turns frontline patient histories into ranked diagnoses for telemedicine doctors to confirm.",
    aiCountries: ["India"],
    orgCountries: ["India", "Kyrgyzstan"],
    levels: {
      L1: { fact: "Ayu 2.0 returns the correct diagnosis in the top-5 list for 95% of test cases; unsafe-output target is 3% or lower." },
      L2: { fact: "Doctors used the AI-suggested diagnosis in 91% of cases in the live clinical workflow." },
      L3: { fact: "Diagnosis was 47% faster, with diagnostic accuracy improving by about 15 points in current evidence." },
      L4: { fact: "RCT outcomes track diagnostic accuracy, treatment appropriateness, referrals, and medication adherence.", planned: true }
    }
  },
  {
    id: "kabakoo", name: "Kabakoo Academies", short: "Kabakoo", chip: "KB", cohort: 2026,
    color: "#4a3aa7", segmentRank: 14,
    product: "Kabakoo AI Mentor",
    desc: "A 24/7 AI mentor that coaches West African youth through project-based upskilling, with local-language support such as Bambara.",
    aiCountries: ["Mali", "Togo"],
    orgCountries: ["Mali", "Togo"],
    levels: {
      L1: { fact: "The AI mentor gives 24/7 personalized guidance in the app, with local-language support such as Bambara." },
      L2: { fact: "Kabakoo reports 39K+ learners and 5K+ youth directly upskilled since 2019." },
      L3: { fact: "The mentor supports project-based upskilling with personalized progress guidance and peer learning." },
      L4: { fact: "Current outcome evidence reports 42% of participants securing skills-related work within 6 months." }
    }
  },
  {
    id: "living-goods", name: "Living Goods", short: "Living Goods", chip: "LG", cohort: 2026,
    color: "#008300", segmentRank: 3,
    product: "Next Generation Supervisor App",
    desc: "An AI-supported supervision app that turns community health data into targeted tasks for frontline health supervisors.",
    aiCountries: ["Kenya"],
    orgCountries: ["Kenya", "Uganda", "Burkina Faso"],
    levels: {
      L1: { fact: "NGSA task engine is live with 97% OTP delivery, 98.6% uptime, and 96% task-generation accuracy." },
      L2: { fact: "99% of CHAs onboarded, 88% activated within 7 days, and 93% retained at 6 months." },
      L3: { fact: "86% knowledge-check score and 93% of CHAs identify CHPs needing weekly follow-up." },
      L4: { fact: "RCT will measure maternal and child morbidity and mortality outcomes from targeted supervision.", planned: true }
    }
  },
  {
    id: "maisha-meds", name: "Maisha Meds", short: "Maisha Meds", chip: "MM", cohort: 2026,
    color: "#be185d", segmentRank: 9,
    product: "AI point-of-care messaging",
    desc: "AI-drafted pharmaceutical care messages based on point-of-sale data, reviewed by attendants and delivered to patients.",
    aiCountries: ["Kenya", "Uganda", "Tanzania", "Nigeria"],
    orgCountries: ["Kenya", "Uganda", "Tanzania", "Nigeria", "Zambia"],
    levels: {
      L1: { fact: "Symptom classification and LLM-draft approval/rejection evaluation are under development with pharmacist review.", planned: true },
      L2: { fact: "Pilot runs on a 5,000+ site network; notes usage is 1.5% and medication-guidance read rate is 33%." },
      L3: { fact: "User metrics track edited/sent medication guidance, customer CSAT, confidence, and understanding of use.", planned: true },
      L4: { fact: "Healthcare quality, completed care, and recovery-time outcomes are planned for impact validation.", planned: true }
    }
  },
  {
    id: "one-acre-fund", name: "One Acre Fund", short: "One Acre Fund", chip: "OAF", cohort: 2026,
    color: "#65a30d", segmentRank: 5,
    product: "Virtual Agronomist",
    desc: "A WhatsApp agronomy assistant, co-designed with iSDA, that gives hyper-localized fertilizer and planting advice through field teams.",
    aiCountries: ["Rwanda"],
    orgCountries: ["Kenya", "Nigeria", "Rwanda", "Burundi", "Tanzania", "Malawi", "Zambia", "Uganda", "Ethiopia", "Dem. Rep. Congo"],
    levels: {
      L1: { fact: "VA measures recommendation quality, translation accuracy, latency, uptime, and cost per farmer.", planned: true },
      L2: { fact: "Pilot routes advice through 3,500+ field staff, tracking farmers receiving at least one recommendation." },
      L3: { fact: "Behavior metrics track farmers purchasing recommended products and field officers wanting to keep using VA.", planned: true },
      L4: { fact: "Yield-impact estimates are planned for January 2027, with an RCT planned by 2030.", planned: true }
    }
  },
  {
    id: "raising-the-village", name: "Raising The Village", short: "RTV", chip: "RTV", cohort: 2026,
    color: "#1baf7a", segmentRank: 16,
    product: "SBCC AI Coach",
    desc: "AI-personalized behavior-change coaching that field agents review and deliver to last-mile households.",
    aiCountries: ["Uganda", "Rwanda", "Dem. Rep. Congo"],
    orgCountries: ["Uganda", "Rwanda", "Dem. Rep. Congo"],
    levels: {
      L1: { fact: "SBCC Coach scores 4.75/5 from humans, 4.31/5 from LLM judge, with 97.1% human/LLM agreement." },
      L2: { fact: "Pilot generated 2,208 messages across 333 check-ins; 98.3% were rated helpful by field agents." },
      L3: { fact: "Practice adoption, coaching coverage, and FA knowledge assessments are planned from the rollout.", planned: true },
      L4: { fact: "Cluster-randomized personalization trial is planned for 2026B-2027 against household outcomes.", planned: true }
    }
  }
];
