export type BlogPost = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  status: "coming-soon" | "read";
};

export const blogPosts: BlogPost[] = [
  {
    id: "voice-ai-leads",
    title: "Building voice AI agents that actually qualify leads",
    description:
      "Lessons from designing Retell AI workflows for real lead-generation funnels.",
    tags: ["Voice AI", "Retell", "Lead Gen"],
    href: "#",
    status: "coming-soon",
  },
  {
    id: "cpl-sales",
    title: "Why CPL is not enough: connecting leads to sales outcomes",
    description:
      "A practical view on measuring acquisition quality with downstream conversion data.",
    tags: ["Analytics", "Lead Gen", "ML"],
    href: "#",
    status: "coming-soon",
  },
  {
    id: "rag-production",
    title: "RAG beyond the demo: ingestion, reranking, streaming, and persistence",
    description:
      "How to make retrieval-augmented assistants more reliable in production.",
    tags: ["RAG", "GenAI", "Production"],
    href: "#",
    status: "coming-soon",
  },
  {
    id: "lead-routing",
    title: "Lead routing with machine learning",
    description:
      "Using conversion probability, calibration, and temporal backtesting to support smarter routing.",
    tags: ["ML", "Routing", "CatBoost"],
    href: "#",
    status: "coming-soon",
  },
];
