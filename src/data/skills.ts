export type SkillItem = {
  name: string;
  level: number;
};

export type SkillGroup = {
  title: string;
  skills: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "ML & data science",
    skills: [
      { name: "Python", level: 90 },
      { name: "pandas", level: 88 },
      { name: "scikit-learn", level: 85 },
      { name: "PyTorch", level: 78 },
      { name: "CatBoost", level: 82 },
      { name: "Gradient Boosting", level: 82 },
      { name: "Calibration", level: 80 },
      { name: "Temporal Backtesting", level: 82 },
      { name: "Feature Engineering", level: 85 },
      { name: "Classification", level: 85 },
      { name: "Model Serving", level: 80 },
      { name: "Signal Processing", level: 82 },
      { name: "EEG Data", level: 80 },
    ],
  },
  {
    title: "GenAI & LLMs",
    skills: [
      { name: "OpenAI API", level: 88 },
      { name: "GPT-4o-mini", level: 85 },
      { name: "NLP", level: 85 },
      { name: "RAG", level: 88 },
      { name: "Embeddings", level: 86 },
      { name: "BM25", level: 82 },
      { name: "Reranking", level: 80 },
      { name: "Tool Calling", level: 85 },
      { name: "Structured Outputs", level: 86 },
      { name: "Prompt Engineering", level: 88 },
      { name: "A/B Testing", level: 80 },
      { name: "Retell AI", level: 88 },
      { name: "MCP", level: 82 },
      { name: "Skybridge", level: 80 },
      { name: "ChatGPT Apps SDK", level: 80 },
    ],
  },
  {
    title: "Backend & infra",
    skills: [
      { name: "TypeScript", level: 85 },
      { name: "SQL", level: 82 },
      { name: "Node.js", level: 84 },
      { name: "NestJS", level: 82 },
      { name: "REST APIs", level: 88 },
      { name: "FastAPI", level: 80 },
      { name: "Prisma", level: 78 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis / Upstash", level: 82 },
      { name: "BigQuery", level: 78 },
      { name: "Google App Engine", level: 78 },
      { name: "Docker", level: 78 },
      { name: "GitHub Actions", level: 82 },
      { name: "Git / GitHub", level: 88 },
    ],
  },
  {
    title: "Frontend & apps",
    skills: [
      { name: "Next.js", level: 85 },
      { name: "React", level: 88 },
      { name: "Vite", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Zustand", level: 75 },
      { name: "Framer Motion", level: 82 },
      { name: "Leaflet", level: 78 },
      { name: "Turf.js", level: 75 },
      { name: "OpenStreetMap", level: 75 },
      { name: "Streamlit", level: 80 },
      { name: "SSE Streaming", level: 82 },
    ],
  },
];
