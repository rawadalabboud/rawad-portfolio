export type ProjectCategory =
  | "GenAI"
  | "Voice AI"
  | "RAG"
  | "Machine Learning"
  | "Data Engineering"
  | "Research";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  filterTags: ProjectCategory[];
  description: string;
  bullets: string[];
  stack: string[];
  impact: string;
  coverImage: string;
  links: { github?: string; details?: string; caseStudy?: string };
};

export const projectFilters = [
  "All",
  "GenAI",
  "Voice AI",
  "RAG",
  "Machine Learning",
  "Data Engineering",
  "Research",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export const projects: Project[] = [
  {
    id: "c2c-tracking",
    title: "Click-to-Call Voice Qualification Platform",
    category: "Voice AI",
    filterTags: ["Voice AI", "GenAI", "Data Engineering"],
    description:
      "Hipto's production Click-to-Call (C2C) platform on NestJS + Retell AI: 5 verticals, 5 telco operators (Orange, Sosh, SFR, Free, Bouygues), 13 experiment profiles across 6 call-center partners. Each landing page call gets the right number, the right campaign context, and the right routing.",
    bullets: [
      "Dynamic phone number allocation",
      "UTM and landing-page attribution",
      "Routing by vertical and partner",
      "Retell AI voice qualification",
      "Upstash Redis deduplication",
      "Real-time lead injection",
      "Call-center transfer flows",
    ],
    stack: [
      "Retell AI",
      "OpenAI",
      "TypeScript",
      "NestJS",
      "Redis",
      "Upstash",
      "Webhooks",
      "REST APIs",
      "BigQuery",
    ],
    impact:
      "4,400+ AI-qualified calls on 2,655 qualified C2C leads in H1 2026. Marketing finally knew which campaigns drove calls, and ops had fewer duplicate or lost leads.",
    coverImage: "/projects/c2c-voice.svg",
    links: {
      details: "/project/c2c-tracking",
      caseStudy: "/blog/cpl-sales",
    },
  },
  {
    id: "retell-voice-agents",
    title: "Retell Voice-Agent Pipelines",
    category: "Voice AI",
    filterTags: ["Voice AI", "GenAI"],
    description:
      "7 dedicated Retell pipelines (events, transfer, reach, relance, receptionist, flux-froid, transcript) spanning 15 NestJS modules and 60+ HTTP endpoints. Phone agents that qualify leads across fiber, energy, health insurance, and pet insurance while following strict business rules.",
    bullets: [
      "7 pipelines: events, transfer, reach, relance, receptionist, flux-froid, transcript",
      "Prompt design across 5 verticals",
      "OpenAI structured transcript extraction",
      "Dynamic variables per call",
      "Upstash Redis deduplication",
      "Conversational validation rules",
      "Lead completion + transfer workflows",
    ],
    stack: [
      "Retell AI",
      "OpenAI API",
      "Structured Outputs",
      "NestJS",
      "TypeScript",
      "Webhooks",
      "Redis",
      "Prompt Engineering",
    ],
    impact:
      "Cut manual qualification time while keeping conversations natural enough that callers didn't hang up. Fifteen modules, 60+ endpoints in production.",
    coverImage: "/projects/retell-pipelines.svg",
    links: {
      details: "/project/retell-voice-agents",
      caseStudy: "/blog/voice-ai-leads",
    },
  },
  {
    id: "webflow-rag",
    title: "Webflow RAG Assistant, Groupe Hueber Assurances",
    category: "RAG",
    filterTags: ["RAG", "GenAI"],
    description:
      "A production chat assistant embedded on Groupe Hueber Assurances' Webflow site (150k+ insured clients, 6 product lines). Visitors ask questions, the assistant pulls answers from live pages and CMS content, quality-gated by a 40-question golden dataset.",
    bullets: [
      "Webflow page and CMS ingestion",
      "Chunking pipeline",
      "OpenAI embeddings",
      "Hybrid BM25 + cosine retrieval",
      "LLM reranking",
      "Upstash Redis persistence",
      "SSE streaming",
      "Embedded chat widget",
      "40-question golden evaluation set",
    ],
    stack: [
      "Next.js",
      "React",
      "OpenAI API",
      "Embeddings",
      "BM25",
      "Reranking",
      "Redis",
      "Upstash",
      "Webflow API",
      "SSE",
    ],
    impact:
      "A working assistant on real site content for 150k+ insured clients across 6 product lines, not a demo with three hard-coded FAQs.",
    coverImage: "/projects/webflow-rag.svg",
    links: {
      details: "/project/webflow-rag",
      caseStudy: "/blog/rag-production",
    },
  },
  {
    id: "offer-hub",
    title: "Hipto Offer Hub, Skybridge / MCP App",
    category: "GenAI",
    filterTags: ["GenAI"],
    description:
      "A Skybridge / MCP app embedded in ChatGPT and Claude with 5 endpoints, 10+ tool calls, and 2 React widgets (Leaflet eligibility map + 6-step lead-capture funnel) over a 57-offer catalog. Deployed on Google App Engine.",
    bullets: [
      "5 MCP endpoints",
      "10+ tool calls (address, eligibility, offers, mobile coverage)",
      "Leaflet eligibility map widget",
      "6-step lead-capture funnel widget",
      "57-offer catalog",
      "ChatGPT & Claude embedding",
      "Deployed on Google App Engine",
    ],
    stack: [
      "MCP",
      "Skybridge",
      "ChatGPT Apps SDK",
      "OpenAI",
      "TypeScript",
      "Node.js",
      "Next.js",
      "React",
      "Leaflet",
      "Turf.js",
      "Google App Engine",
    ],
    impact:
      "LLMs could actually do things: check eligibility, pull offers, capture leads, instead of just talking about them.",
    coverImage: "/projects/offer-hub.svg",
    links: {
      details: "/project/offer-hub",
    },
  },
  {
    id: "lead-routing-ml",
    title: "ML Conversion Scoring, Hopti Foundation",
    category: "Machine Learning",
    filterTags: ["Machine Learning", "Data Engineering"],
    description:
      "Prototype ML conversion-scoring module for routing support: estimates how likely a lead is to convert, then routes it to the call center most likely to close the sale. Foundation for Hipto's Hopti integration.",
    bullets: [
      "Conversion probability modeling",
      "CatBoost gradient boosting",
      "Probability calibration",
      "Temporal backtesting",
      "Business-focused evaluation",
      "FastAPI model serving",
      "Streamlit diagnostics",
    ],
    stack: [
      "Python",
      "CatBoost",
      "scikit-learn",
      "pandas",
      "BigQuery",
      "FastAPI",
      "Streamlit",
      "Calibration",
      "Feature Engineering",
    ],
    impact:
      "Gave the team a data-backed way to match leads with the right partner instead of round-robin routing. Foundation for the Hopti integration.",
    coverImage: "/projects/lead-routing.svg",
    links: {
      details: "/project/lead-routing-ml",
      caseStudy: "/blog/lead-routing",
    },
  },
  {
    id: "eeg-research",
    title: "EEG & Clinical Data Pipelines for rTMS Research",
    category: "Research",
    filterTags: ["Research", "Machine Learning", "Data Engineering"],
    description:
      "Python pipelines to ingest, clean, and reshape EEG, clinical, and speech data into datasets researchers could actually model on.",
    bullets: [
      "EEG preprocessing workflows",
      "Clinical data cleaning",
      "Speech-derived features",
      "Modeling-ready datasets",
      "Research dashboards",
      "Work with clinicians and researchers",
    ],
    stack: [
      "Python",
      "pandas",
      "MNE-Python",
      "Signal Processing",
      "EEG",
      "Machine Learning",
      "Data Visualization",
    ],
    impact:
      "Helped the team study rTMS acceptability and personalized care without spending weeks on data prep.",
    coverImage: "/projects/eeg-research.svg",
    links: {
      github: "https://github.com/rawadalabboud/partema-eeg-analysis",
    },
  },
];
