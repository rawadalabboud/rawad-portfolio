export type SkillLevel = "core" | "strong" | "solid" | "working";

export type SkillItem = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: "brain" | "sparkles" | "server" | "layout";
  skills: SkillItem[];
};

export const skillLevelMeta: Record<
  SkillLevel,
  { label: string; hint: string; dotClass: string }
> = {
  core: {
    label: "Core",
    hint: "Daily drivers in production",
    dotClass: "bg-accent-cyan shadow-[0_0_8px_rgba(224,122,106,0.5)]",
  },
  strong: {
    label: "Strong",
    hint: "Shipped repeatedly, comfortable owning",
    dotClass: "bg-text-primary",
  },
  solid: {
    label: "Solid",
    hint: "Regular use across projects",
    dotClass: "bg-accent-violet",
  },
  working: {
    label: "Working",
    hint: "Familiar; ramp quickly",
    dotClass: "bg-text-muted/60",
  },
};

export const skillGroups: SkillGroup[] = [
  {
    title: "ML & data science",
    description: "Models, signals, and evaluation that hold up in production.",
    icon: "brain",
    skills: [
      { name: "Python", level: "core" },
      { name: "pandas", level: "core" },
      { name: "scikit-learn", level: "strong" },
      { name: "PyTorch", level: "strong" },
      { name: "CatBoost", level: "strong" },
      { name: "Gradient Boosting", level: "strong" },
      { name: "Calibration", level: "strong" },
      { name: "Temporal Backtesting", level: "strong" },
      { name: "Feature Engineering", level: "strong" },
      { name: "Classification", level: "strong" },
      { name: "Model Serving", level: "strong" },
      { name: "Signal Processing", level: "strong" },
      { name: "EEG Data", level: "strong" },
    ],
  },
  {
    title: "GenAI & LLMs",
    description: "RAG, agents, voice pipelines, and tool-calling in real products.",
    icon: "sparkles",
    skills: [
      { name: "OpenAI API", level: "core" },
      { name: "GPT-4o-mini", level: "strong" },
      { name: "NLP", level: "strong" },
      { name: "RAG", level: "core" },
      { name: "Embeddings", level: "strong" },
      { name: "BM25", level: "strong" },
      { name: "Reranking", level: "strong" },
      { name: "Tool Calling", level: "strong" },
      { name: "Structured Outputs", level: "strong" },
      { name: "Prompt Engineering", level: "core" },
      { name: "A/B Testing", level: "strong" },
      { name: "Retell AI", level: "core" },
      { name: "MCP", level: "strong" },
      { name: "Skybridge", level: "strong" },
      { name: "ChatGPT Apps SDK", level: "strong" },
    ],
  },
  {
    title: "Backend & infra",
    description: "APIs, data stores, and deployment paths I rely on to ship.",
    icon: "server",
    skills: [
      { name: "TypeScript", level: "core" },
      { name: "SQL", level: "strong" },
      { name: "Node.js", level: "strong" },
      { name: "NestJS", level: "strong" },
      { name: "REST APIs", level: "core" },
      { name: "FastAPI", level: "strong" },
      { name: "Prisma", level: "solid" },
      { name: "PostgreSQL", level: "strong" },
      { name: "Redis / Upstash", level: "strong" },
      { name: "BigQuery", level: "solid" },
      { name: "Google App Engine", level: "solid" },
      { name: "Docker", level: "solid" },
      { name: "GitHub Actions", level: "strong" },
      { name: "Git / GitHub", level: "core" },
    ],
  },
  {
    title: "Frontend & apps",
    description: "Interfaces, maps, streaming UIs, and dashboards people actually use.",
    icon: "layout",
    skills: [
      { name: "Next.js", level: "strong" },
      { name: "React", level: "core" },
      { name: "Vite", level: "strong" },
      { name: "Tailwind CSS", level: "core" },
      { name: "Zustand", level: "solid" },
      { name: "Framer Motion", level: "strong" },
      { name: "Leaflet", level: "solid" },
      { name: "Turf.js", level: "solid" },
      { name: "OpenStreetMap", level: "solid" },
      { name: "Streamlit", level: "strong" },
      { name: "SSE Streaming", level: "strong" },
    ],
  },
];
