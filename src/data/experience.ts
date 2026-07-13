export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Oct 2025 to Jun 2026",
    title: "GenAI Developer, Work-study",
    company: "Hipto, Lead Generation",
    location: "Paris",
    bullets: [
      "Shipped Hipto's production Click-to-Call (C2C) voice-qualification platform on NestJS + Retell AI: 5 verticals, 5 telco operators (Orange, Sosh, SFR, Free, Bouygues), 13 experiment profiles across 6 call-center partners, handling 4,400+ AI-qualified calls on 2,655 qualified leads in H1 2026.",
      "Architected 7 dedicated Retell pipelines (events, transfer, reach, relance, receptionist, flux-froid, transcript) across 15 modules and 60+ HTTP endpoints, with OpenAI structured transcript extraction and Upstash Redis deduplication.",
      "Engineered a production Webflow RAG assistant for Groupe Hueber Assurances (150k+ insured clients, 6 product lines): Webflow ingestion, OpenAI embeddings, hybrid BM25 + cosine retrieval with LLM reranking, Upstash Redis, SSE streaming, embedded chat widget; quality-gated by a 40-question golden dataset.",
      "Designed Hipto Offer Hub, a Skybridge / MCP app embedded in ChatGPT and Claude with 5 endpoints, 10+ tool calls, and 2 React widgets (Leaflet eligibility map + 6-step lead-capture funnel) over a 57-offer catalog; deployed on Google App Engine.",
      "Prototyped an ML conversion-scoring module for routing support (Python, CatBoost, calibration, temporal backtests, FastAPI, Streamlit); foundation for Hipto's Hopti integration.",
    ],
  },
  {
    period: "2023 to 2025",
    title: "Research Engineer, Data Engineering & ML",
    company: "Clariane & Paris Brain Institute",
    location: "Paris",
    bullets: [
      "Built Python pipelines for EEG, clinical, and speech data.",
      "Applied ML to psychiatric care, neuromodulation, and speech-derived biomarkers.",
      "Co-authored research on rTMS acceptability and personalized psychiatric care.",
      "Built dashboards and worked closely with clinicians to turn raw data into something useful.",
    ],
  },
  {
    period: "Apr 2022 to Sep 2022",
    title: "Data Science Intern, Parkinson's EEG Classification",
    company: "MINDig",
    location: "Rennes",
    bullets: [
      "Master's internship on detecting Parkinson's disease from resting-state HD-EEG, thesis supervised by Mahmoud Hassan and Aya Kabbara.",
      "Worked on a cohort of 108 subjects (77 PD patients, 31 healthy controls) from the University of Basel.",
      "Built a feature pipeline: source reconstruction on 210 brain regions, functional connectivity (phase locking value), and relative band power across five EEG bands.",
      "Trained and compared five classifiers (logistic regression, SVM, decision tree, random forest, extra trees) with grid search and nested 5×2 cross-validation.",
      "Best model (Extra Trees with connectivity, spectral, and demographic features) reached 96% ROC-AUC and ~89% accuracy.",
    ],
  },
];
