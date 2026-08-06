export type ProjectCategory =
  | "GenAI"
  | "Voice AI"
  | "RAG"
  | "Machine Learning"
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
  "Voice AI",
  "RAG",
  "GenAI",
  "Machine Learning",
  "Research",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

import { resolveProjectId } from "./projectCaseStudies";

export function getProject(id: string): Project | undefined {
  const resolved = resolveProjectId(id);
  return projects.find((project) => project.id === resolved);
}

export const projects: Project[] = [
  {
    id: "voice-ai-platform",
    title: "Voice AI Platform",
    category: "Voice AI",
    filterTags: ["Voice AI", "GenAI"],
    description:
      "Production Click-to-Call platform on NestJS + Retell AI: 7 agent pipelines, 4,400+ AI-qualified calls across 5 verticals and 13 experiment profiles.",
    bullets: [
      "7 Retell agent pipelines in production",
      "13 experiment profiles across 5 verticals",
      "OpenAI structured transcript extraction",
      "Upstash Redis deduplication",
      "Dynamic routing by vertical and operator",
      "Call-center transfer workflows",
    ],
    stack: [
      "Retell AI",
      "OpenAI",
      "NestJS",
      "TypeScript",
      "Redis",
      "Webhooks",
      "BigQuery",
    ],
    impact:
      "4,400+ AI-qualified calls across 5 verticals and 13 experiment profiles.",
    coverImage: "/projects/c2c-voice.svg",
    links: {
      details: "/project/voice-ai-platform",
      caseStudy: "/blog/voice-ai-leads",
    },
  },
  {
    id: "insurance-rag-assistant",
    title: "Insurance RAG Assistant",
    category: "RAG",
    filterTags: ["RAG", "GenAI"],
    description:
      "Production RAG assistant for Groupe Hueber Assurances (150k+ clients): hybrid BM25 + cosine retrieval, LLM reranking, SSE streaming, 40-question evaluation dataset.",
    bullets: [
      "Hybrid BM25 + cosine retrieval",
      "LLM reranking",
      "OpenAI embeddings",
      "Webflow document ingestion",
      "SSE streaming chat widget",
      "40-question golden evaluation set",
    ],
    stack: [
      "OpenAI",
      "Embeddings",
      "BM25",
      "Reranking",
      "Redis",
      "SSE",
      "Webflow",
      "Next.js",
    ],
    impact:
      "Deployed for 150k+ insured clients across 6 product lines.",
    coverImage: "/projects/webflow-rag.svg",
    links: {
      details: "/project/insurance-rag-assistant",
      caseStudy: "/blog/rag-production",
    },
  },
  {
    id: "offer-hub",
    title: "Offer Hub · MCP App",
    category: "GenAI",
    filterTags: ["GenAI"],
    description:
      "MCP application in ChatGPT and Claude: 57 offers, 10+ AI tools, eligibility checks, and lead capture via React widgets on Google App Engine.",
    bullets: [
      "MCP tool calling in ChatGPT & Claude",
      "10+ AI tools with eligibility controls",
      "57-offer catalog",
      "Leaflet eligibility map widget",
      "6-step lead-capture funnel",
      "Google App Engine deployment",
    ],
    stack: [
      "MCP",
      "Skybridge",
      "ChatGPT Apps SDK",
      "OpenAI",
      "TypeScript",
      "React",
      "Leaflet",
      "Google App Engine",
    ],
    impact:
      "57 offers automated with eligibility checks and lead capture inside LLM chat interfaces.",
    coverImage: "/projects/offer-hub.svg",
    links: {
      details: "/project/offer-hub",
      caseStudy: "/blog/mcp-agents",
    },
  },
  {
    id: "ml-conversion-scoring",
    title: "ML Conversion Scoring",
    category: "Machine Learning",
    filterTags: ["Machine Learning"],
    description:
      "CatBoost conversion-scoring prototype: calibration, temporal backtests, FastAPI serving, and Streamlit monitoring dashboard.",
    bullets: [
      "CatBoost gradient boosting",
      "Probability calibration",
      "Temporal backtesting",
      "Feature engineering from lead history",
      "FastAPI model serving",
      "Streamlit diagnostics dashboard",
    ],
    stack: [
      "Python",
      "CatBoost",
      "scikit-learn",
      "pandas",
      "BigQuery",
      "FastAPI",
      "Streamlit",
    ],
    impact:
      "Data-backed lead routing with calibrated conversion probabilities and temporal validation.",
    coverImage: "/projects/lead-routing.svg",
    links: {
      details: "/project/ml-conversion-scoring",
      caseStudy: "/blog/lead-routing",
    },
  },
  {
    id: "eeg-research",
    title: "EEG & Clinical Data Pipelines",
    category: "Research",
    filterTags: ["Research", "Machine Learning"],
    description:
      "Python pipelines for EEG, clinical, and speech data at Clariane and the Paris Brain Institute, from raw ingestion to modeling-ready datasets.",
    bullets: [
      "EEG preprocessing workflows",
      "Clinical data cleaning",
      "Speech-derived features",
      "Research dashboards",
      "Collaboration with clinicians",
    ],
    stack: [
      "Python",
      "pandas",
      "MNE-Python",
      "Signal Processing",
      "EEG",
      "Machine Learning",
    ],
    impact:
      "Enabled rTMS acceptability research and personalized psychiatric care studies.",
    coverImage: "/projects/eeg-research.svg",
    links: {
      github: "https://github.com/rawadalabboud/partema-eeg-analysis",
    },
  },
];
