export type TimelinePhase = {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

export const careerTimeline: TimelinePhase[] = [
  {
    id: "education",
    period: "2017 – 2022",
    title: "Engineering foundation",
    subtitle: "Lebanese University · CentraleSupélec · Paris-Saclay",
    description:
      "Telecom & computer science in Lebanon, then signal & image processing at CentraleSupélec and Université Paris-Saclay. That math and DSP background later shaped my ML work.",
    tags: ["Signal Processing", "Engineering", "Paris-Saclay"],
  },
  {
    id: "research",
    period: "2022 – 2025",
    title: "Research & biomedical ML",
    subtitle: "MINDig · Clariane · Paris Brain Institute",
    description:
      "EEG classification for Parkinson's detection, then research engineering on multimodal psychiatric data, building pipelines clinicians could actually use.",
    tags: ["EEG", "Clinical ML", "Data Pipelines"],
  },
  {
    id: "production-ai",
    period: "2025 – Present",
    title: "Production AI systems",
    subtitle: "Hipto · GenAI Engineer",
    description:
      "Voice agents qualifying 4,400+ calls, a RAG assistant for 150k+ insurance clients, MCP apps with 57 offers, and ML conversion scoring. End-to-end AI products in production.",
    tags: ["Voice AI", "RAG", "MCP", "CatBoost"],
  },
  {
    id: "current",
    period: "Now",
    title: "GenAI Engineer",
    subtitle: "Hipto · Paris",
    description:
      "Building and operating production LLM applications, voice-agent platforms, and ML systems that connect AI models to real business workflows.",
    tags: ["LLMs", "Agents", "Production"],
  },
];
