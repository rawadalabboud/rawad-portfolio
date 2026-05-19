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
  coverId: string;
  links: { caseStudy?: string; code?: string; demo?: string };
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

export const projects: Project[] = [
  {
    id: "c2c-tracking",
    title: "Click-to-Call Tracking & Voice Qualification System",
    category: "Voice AI",
    filterTags: ["Voice AI", "GenAI", "Data Engineering"],
    description:
      "Built and improved a Click-to-Call system that connects landing pages to AI-powered phone qualification workflows. The system dynamically attributes calls to marketing context, routes leads by vertical, and improves tracking compared with static phone-number flows.",
    bullets: [
      "Dynamic phone number allocation",
      "UTM and landing-page attribution",
      "Vertical-specific routing",
      "Retell AI voice agents",
      "Redis / Upstash deduplication",
      "Real-time lead injection",
      "Call-center transfer workflows",
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
      "Improved attribution, lead reliability, and operational visibility for phone-based acquisition funnels.",
    coverId: "phone",
    links: { caseStudy: "#", code: "#", demo: "#" },
  },
  {
    id: "retell-voice-agents",
    title: "Retell AI Voice Agents for Lead Qualification",
    category: "Voice AI",
    filterTags: ["Voice AI", "GenAI"],
    description:
      "Designed and integrated AI voice agents for qualification across multiple verticals such as fiber, energy, senior health insurance, and pet insurance. The agents collect structured information naturally while following strict business rules and conversational constraints.",
    bullets: [
      "Prompt engineering for phone agents",
      "Structured transcript extraction",
      "Dynamic variables",
      "Vertical-specific qualification flows",
      "Conversational validation rules",
      "Lead completion workflows",
    ],
    stack: [
      "Retell AI",
      "OpenAI API",
      "Structured Outputs",
      "TypeScript",
      "Webhooks",
      "Redis",
      "Prompt Engineering",
    ],
    impact:
      "Helped automate lead qualification while keeping conversations natural, measurable, and business-aligned.",
    coverId: "microphone",
    links: { caseStudy: "#", code: "#", demo: "#" },
  },
  {
    id: "webflow-rag",
    title: "Webflow RAG Assistant for Groupe Hueber",
    category: "RAG",
    filterTags: ["RAG", "GenAI"],
    description:
      "Built a production RAG assistant for a Webflow website, allowing users to ask questions over Webflow pages and CMS content through an embedded chat widget.",
    bullets: [
      "Webflow page and CMS ingestion",
      "Chunking pipeline",
      "OpenAI embeddings",
      "Hybrid BM25 + cosine retrieval",
      "LLM reranking",
      "Redis / Upstash persistence",
      "SSE streaming",
      "Embedded chat widget",
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
      "Delivered a practical AI assistant connected to real website content and deployed as a user-facing product.",
    coverId: "chat",
    links: { caseStudy: "#", code: "#", demo: "#" },
  },
  {
    id: "offer-hub",
    title: "Hipto Offer Hub — MCP / Skybridge Tool-Calling App",
    category: "GenAI",
    filterTags: ["GenAI"],
    description:
      "Developed an MCP / Skybridge app that connects LLM clients to real fiber and box offer APIs through tool-calling workflows.",
    bullets: [
      "Address search",
      "Eligibility checks",
      "Offer retrieval",
      "Mobile coverage lookup",
      "Tool-calling architecture",
      "LLM-to-real-API integration",
    ],
    stack: [
      "MCP",
      "Skybridge",
      "OpenAI",
      "TypeScript",
      "APIs",
      "Tool Calling",
      "Node.js",
    ],
    impact:
      "Enabled LLMs to interact with real business tools and structured offer APIs instead of only generating text.",
    coverId: "api",
    links: { caseStudy: "#", code: "#", demo: "#" },
  },
  {
    id: "lead-routing-ml",
    title: "Lead Routing ML Conversion Scoring",
    category: "Machine Learning",
    filterTags: ["Machine Learning", "Data Engineering"],
    description:
      "Built an ML conversion-scoring module to support smarter lead routing. The idea is to estimate the probability of sale for each lead and route it to the call center most likely to convert.",
    bullets: [
      "Predictive conversion modeling",
      "CatBoost model",
      "Calibration",
      "Temporal backtesting",
      "Business-oriented evaluation",
      "FastAPI serving foundation",
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
      "Created the foundation for data-driven routing decisions and potential conversion lift by matching leads to the right call-center partner.",
    coverId: "routing",
    links: { caseStudy: "#", code: "#", demo: "#" },
  },
  {
    id: "eeg-research",
    title: "EEG & Clinical Data Engineering for rTMS Research",
    category: "Research",
    filterTags: ["Research", "Machine Learning", "Data Engineering"],
    description:
      "Built automated Python pipelines for ingesting, cleaning, and transforming EEG, clinical, and speech data into datasets for predictive modeling in psychiatric and neuromodulation research.",
    bullets: [
      "EEG preprocessing workflows",
      "Clinical data cleaning",
      "Speech-derived features",
      "Predictive modeling datasets",
      "Research dashboards",
      "Collaboration with clinicians and researchers",
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
      "Supported research on psychiatric care, neuromodulation, rTMS acceptability, and personalized mental health approaches.",
    coverId: "eeg",
    links: { caseStudy: "#", code: "#", demo: "#" },
  },
];
