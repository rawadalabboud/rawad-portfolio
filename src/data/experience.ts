export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "Oct 2025 — Jun 2026",
    title: "GenAI Developer — Work-study",
    company: "Hipto, Lead Generation",
    location: "Paris",
    bullets: [
      "Built production GenAI workflows for lead generation across fiber, energy, health insurance, and pets.",
      "Integrated Retell AI voice agents for phone qualification, structured transcript extraction, and real-time lead workflows.",
      "Built a production Webflow RAG assistant with embeddings, hybrid retrieval, reranking, Redis persistence, SSE streaming, and embedded chat UI.",
      "Developed Hipto Offer Hub, an MCP / Skybridge app connecting LLM clients to real offer APIs through tool-calling flows.",
      "Built an ML conversion-scoring module using Python, CatBoost, calibration, temporal backtests, FastAPI, and Streamlit.",
      "Delivered full-stack AI interfaces using Next.js, React, Leaflet maps, feature flags, diagnostics, and API debugging workflows.",
    ],
  },
  {
    period: "2023 — 2025",
    title: "Research Engineer — Data Engineering & ML",
    company: "Clariane & Paris Brain Institute",
    location: "Paris",
    bullets: [
      "Built automated Python pipelines for EEG, clinical, and speech data.",
      "Applied ML and data analysis to psychiatric care, neuromodulation, EEG, and speech-derived features.",
      "Co-authored research outputs on rTMS acceptability and personalized psychiatric care.",
      "Built dashboards and collaborated with clinicians and researchers to translate biomedical data into actionable insights.",
    ],
  },
  {
    period: "Apr 2022 — Sep 2022",
    title: "Data Science Intern",
    company: "MINDig",
    location: "Rennes",
    bullets: [
      "Preprocessed EEG data and structured signal / clinical datasets for classification models.",
      "Worked on machine-learning workflows involving biomedical and signal-processing data.",
    ],
  },
];
