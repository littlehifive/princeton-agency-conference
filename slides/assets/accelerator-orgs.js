/* Accelerator cohort data for the map slide. Facts sourced from accelerator
   application docs, Nairobi sprint product cards, and partners' public sites.
   Colors: validated categorical set (dataviz palette check, Aug 2026). */
window.A2L_ORGS = [
  {
    id: "digital-green", name: "Digital Green", chip: "DG", cohort: 2025,
    color: "#2a78d6",
    product: "FarmerChat",
    desc: "An AI advisor that gives smallholder farmers tailored agronomy advice in their own language, built on Digital Green's video-extension library.",
    countries: ["Kenya", "Ethiopia", "India"],
    impact: [
      { fact: "1.3 million farmers on the platform, aiming for 4 million downloads by end of 2026", level: "L2" },
      { fact: "70% of active users report adopting a recommended farming practice", level: "L3" }
    ]
  },
  {
    id: "jacaranda-health", name: "Jacaranda Health", chip: "JH", cohort: 2025,
    color: "#e34948",
    product: "PROMPTS",
    desc: "Two-way SMS guidance for new and expecting mothers: answers, AI risk triage, and referrals into care.",
    countries: ["Kenya"],
    impact: [
      { fact: "More than 3.8 million mothers reached, with 22 Kenyan county governments", level: "L2" },
      { fact: "New voice AI cut Swahili and Sheng speech-recognition error rates from 89% to 15%", level: "L1" },
      { fact: "A 40-facility cluster randomized trial found PROMPTS improved maternal knowledge, care-seeking, and newborn care at about $0.74 per woman", level: "L4" }
    ]
  },
  {
    id: "precision-development", name: "Precision Development (PxD)", chip: "PxD", cohort: 2025,
    color: "#eda100",
    product: "PaddyAI",
    desc: "An AI assistant that generates customized, local-language voice advisories for smallholder farmers, starting with coffee growers in Karnataka, India.",
    countries: ["India"],
    impact: [
      { fact: "Live prototype delivering AI-generated voice advisories in local languages", level: "L2" },
      { fact: "A/B tests underway comparing AI advisories with expert-written broadcasts on engagement and comprehension", level: "L3" },
      { fact: "Builds on a delivery platform that reached over 17 million farmers in a year", level: "L2" }
    ]
  },
  {
    id: "reach-digital-health", name: "Reach Digital Health", chip: "RDH", cohort: 2025,
    color: "#0ea5e9",
    product: "MomConnect AI",
    desc: "Conversational AI onboarding, personalized surveys, and real-time answers for MomConnect, South Africa's national maternal-health messaging platform.",
    countries: ["South Africa"],
    impact: [
      { fact: "Conversational AI onboarding raised inbound messages from mothers by up to 42%", level: "L2" },
      { fact: "MomConnect, run with the National Department of Health, has registered nearly 5 million mothers", level: "L2" }
    ]
  },
  {
    id: "noora-health", name: "Noora Health", chip: "NH", cohort: 2025,
    color: "#9333ea",
    product: "Remote Engagement Service + AI co-pilot",
    desc: "Trains family caregivers and answers their questions over WhatsApp; since late 2025 an AI co-pilot helps staff respond while humans keep control of every reply.",
    countries: ["India", "Bangladesh", "Nepal"],
    impact: [
      { fact: "2 million users in 11 languages, with about 10,000 incoming messages a day", level: "L2" },
      { fact: "About 70,000 preventive health nudges delivered daily", level: "L2" }
    ]
  },
  {
    id: "rocket-learning", name: "Rocket Learning", chip: "RL", cohort: 2025,
    color: "#e87ba4",
    product: "Shiksha Saathi",
    desc: "A WhatsApp AI assistant that coaches Anganwadi (government daycare) workers and parents on early childhood learning for children under six.",
    countries: ["India"],
    impact: [
      { fact: "Reaching 400,000+ Anganwadi workers with OpenAI and the Maharashtra government", level: "L2" },
      { fact: "Launched statewide in Maharashtra in February 2026, the first state-scale AI assistant for Anganwadi educators", level: "L2" }
    ]
  },
  {
    id: "youth-impact", name: "Youth Impact", chip: "YI", cohort: 2025,
    color: "#b45309",
    product: "ConnectEd AI",
    desc: "Voice-based AI tutoring, assessments, and automated scheduling inside ConnectEd, a basic-phone tutoring program for primary school children.",
    countries: ["India", "Botswana"],
    impact: [
      { fact: "AI-enabled tutoring reached 75,000+ learners in Karnataka, India", level: "L2" },
      { fact: "Voice-to-voice tutoring and automated phone assessments targeting 700,000 children", level: "L2" }
    ]
  },
  {
    id: "adalat-ai", name: "Adalat AI", chip: "AD", cohort: 2026,
    color: "#0d9488",
    product: "AI courtroom transcription",
    desc: "Speech recognition and case-flow tools that transcribe courtroom proceedings in Indian languages and digitize filing, so courts spend their time hearing cases.",
    countries: ["India"],
    impact: [
      { fact: "5,500+ courts onboarded across 11+ Indian states; 4M+ court minutes transcribed", level: "L2" },
      { fact: "68% of court users expect to save 30+ minutes daily; typical users log 500+ minutes a month", level: "L3" },
      { fact: "J-PAL South Asia randomized evaluation of case-resolution outcomes in preparation", level: "L4" }
    ]
  },
  {
    id: "ami", name: "African Management Institute", chip: "AMI", cohort: 2026,
    color: "#8b5cf6",
    product: "AMI Coachbot",
    desc: "A WhatsApp coaching assistant that handles reminders, nudges, and tool recommendations for entrepreneur cohorts, freeing human coaches for the hard conversations.",
    countries: ["Kenya"],
    impact: [
      { fact: "Live on WhatsApp since June 2026 on the Grow Your Business programme, in English, Swahili, and French", level: "L2" },
      { fact: "AMI supported 28,273 businesses across 39 African countries in 2024", level: "L2" }
    ]
  },
  {
    id: "intelehealth", name: "Intelehealth", chip: "IH", cohort: 2026,
    color: "#eb6834",
    product: "Ayu 2.0",
    desc: "AI clinical decision support that turns patient histories from frontline health workers into ranked diagnoses for telemedicine doctors, who confirm or override every recommendation.",
    countries: ["India"],
    impact: [
      { fact: "In a 20-doctor, 1,000-case study, diagnostic accuracy rose 12 points and time-to-diagnosis fell 47%", level: "L3" },
      { fact: "Rides on a telemedicine platform that has served 9.1 million patients in India", level: "L2" },
      { fact: "SAKSHAMA cluster randomized trial underway across 30 rural primary health centers", level: "L4" }
    ]
  },
  {
    id: "kabakoo", name: "Kabakoo Academies", chip: "KB", cohort: 2026,
    color: "#4a3aa7",
    product: "Kabakoo AI Mentor",
    desc: "A 24/7 AI mentor on WhatsApp that coaches West African youth through project-based upskilling, in French and Bambara, built for low-cost phones.",
    countries: ["Mali", "Togo"],
    impact: [
      { fact: "34,000+ registered learners on the upskilling platform", level: "L2" },
      { fact: "42% of participants secured work related to their new skills within 6 months", level: "L4" }
    ]
  },
  {
    id: "living-goods", name: "Living Goods", chip: "LG", cohort: 2026,
    color: "#008300",
    product: "Next Generation Supervisor App",
    desc: "Turns community health field data into targeted, auto-generated supervision tasks so supervisors catch gaps in health workers' performance early.",
    countries: ["Kenya"],
    impact: [
      { fact: "Pilot live in Busia and Kisumu counties, covering 1,600 community health promoters", level: "L2" },
      { fact: "Randomized evaluation planned on child and maternal health outcomes", level: "L4" }
    ]
  },
  {
    id: "maisha-meds", name: "Maisha Meds", chip: "MM", cohort: 2026,
    color: "#be185d",
    product: "AI point-of-care messaging",
    desc: "Drafts medication guidance from pharmacy sale data for attendants to review and send, then follows up with patients over WhatsApp.",
    countries: ["Kenya", "Uganda", "Tanzania", "Nigeria"],
    impact: [
      { fact: "Piloting on a network of 5,000+ pharmacies and clinics with 26M+ patient encounters a year", level: "L2" },
      { fact: "Every AI-drafted message is reviewed by a pharmacy attendant before sending", level: "L2" }
    ]
  },
  {
    id: "one-acre-fund", name: "One Acre Fund", chip: "OAF", cohort: 2026,
    color: "#65a30d",
    product: "Virtual Agronomist",
    desc: "A WhatsApp assistant, co-designed with iSDA, that gives farmers hyper-localized fertilizer and planting advice from geotagged soil data, delivered through trusted field officers.",
    countries: ["Rwanda"],
    impact: [
      { fact: "Piloting in Rwanda through 3,500+ frontline field staff; One Acre Fund serves 5.9 million farmers a year", level: "L2" },
      { fact: "First yield-impact estimates from the pilot expected in January 2027", level: "L4" }
    ]
  },
  {
    id: "raising-the-village", name: "Raising The Village", chip: "RTV", cohort: 2026,
    color: "#1baf7a",
    product: "SBCC AI Coach",
    desc: "Generates tailored behavior-change coaching that field agents review and deliver to last-mile households, across agriculture, WASH, livestock, and savings.",
    countries: ["Uganda", "Rwanda", "Dem. Rep. Congo"],
    impact: [
      { fact: "Pilot: 2,208 coaching messages across 333 household check-ins; 98.3% rated helpful by field agents", level: "L2" },
      { fact: "Cluster randomized trial of AI personalization planned for 2026 to 2027", level: "L4" }
    ]
  }
];
