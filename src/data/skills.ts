export type SkillLevel = "core" | "strong" | "solid" | "working";

export type SkillItem = {
  name: string;
  level: SkillLevel;
  icon?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: "llm" | "ml" | "backend" | "cloud" | "devops" | "database" | "language";
  skills: SkillItem[];
};

export const skillLevelMeta: Record<
  SkillLevel,
  { label: string; hint: string; dotClass: string }
> = {
  core: {
    label: "Core",
    hint: "Daily drivers in production",
    dotClass: "bg-accent-cyan",
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
    title: "LLMs & GenAI",
    description: "Production LLM applications, agents, RAG, and voice AI.",
    icon: "llm",
    skills: [
      { name: "OpenAI API", level: "core", icon: "openai" },
      { name: "Azure OpenAI", level: "strong", icon: "azure" },
      { name: "Azure AI Foundry", level: "strong", icon: "azure" },
      { name: "Azure AI Search", level: "strong", icon: "azure" },
      { name: "Prompt Flow", level: "strong", icon: "azure" },
      { name: "RAG", level: "core" },
      { name: "AI Agents", level: "core" },
      { name: "MCP", level: "strong" },
      { name: "Tool Calling", level: "strong" },
      { name: "Retell AI", level: "core" },
      { name: "Embeddings", level: "strong" },
      { name: "BM25", level: "strong" },
      { name: "Reranking", level: "strong" },
      { name: "Structured Outputs", level: "strong" },
      { name: "Skybridge", level: "strong" },
      { name: "ChatGPT Apps SDK", level: "strong" },
    ],
  },
  {
    title: "Machine Learning",
    description: "Models, calibration, and evaluation that hold up in production.",
    icon: "ml",
    skills: [
      { name: "Python", level: "core", icon: "python" },
      { name: "CatBoost", level: "strong" },
      { name: "scikit-learn", level: "strong" },
      { name: "PyTorch", level: "strong" },
      { name: "pandas", level: "core" },
      { name: "Feature Engineering", level: "strong" },
      { name: "Calibration", level: "strong" },
      { name: "Temporal Backtesting", level: "strong" },
      { name: "Classification", level: "strong" },
      { name: "Model Serving", level: "strong" },
      { name: "Signal Processing", level: "strong" },
    ],
  },
  {
    title: "Backend & Frameworks",
    description: "APIs and services that connect AI models to business logic.",
    icon: "backend",
    skills: [
      { name: "TypeScript", level: "core", icon: "typescript" },
      { name: "NestJS", level: "core", icon: "nestjs" },
      { name: "Node.js", level: "strong", icon: "nodedotjs" },
      { name: "FastAPI", level: "strong", icon: "fastapi" },
      { name: "REST APIs", level: "core" },
      { name: "React", level: "core", icon: "react" },
      { name: "Next.js", level: "strong", icon: "nextdotjs" },
      { name: "SSE Streaming", level: "strong" },
      { name: "Streamlit", level: "strong" },
    ],
  },
  {
    title: "Cloud & Platforms",
    description: "Deployment targets and managed services for AI workloads.",
    icon: "cloud",
    skills: [
      { name: "Google App Engine", level: "solid", icon: "googlecloud" },
      { name: "Azure", level: "strong", icon: "azure" },
      { name: "BigQuery", level: "solid", icon: "googlecloud" },
      { name: "Upstash Redis", level: "strong", icon: "redis" },
    ],
  },
  {
    title: "Databases",
    description: "Data stores behind AI pipelines and serving layers.",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: "strong", icon: "postgresql" },
      { name: "Redis", level: "strong", icon: "redis" },
      { name: "BigQuery", level: "solid", icon: "googlecloud" },
    ],
  },
  {
    title: "DevOps",
    description: "Containers, CI/CD, and deployment automation.",
    icon: "devops",
    skills: [
      { name: "Docker", level: "solid", icon: "docker" },
      { name: "GitHub Actions", level: "strong", icon: "githubactions" },
      { name: "Git / GitHub", level: "core", icon: "github" },
    ],
  },
  {
    title: "Languages",
    description: "Spoken languages for international teams.",
    icon: "language",
    skills: [
      { name: "French (Fluent)", level: "core" },
      { name: "English (Fluent)", level: "core" },
      { name: "Spanish (Beginner)", level: "working" },
    ],
  },
];
