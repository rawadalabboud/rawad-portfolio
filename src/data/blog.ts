export type BlogPost = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  readTime: string;
  status: "coming-soon" | "read";
};

export const blogPosts: BlogPost[] = [
  {
    id: "voice-ai-leads",
    title: "Voice agents that actually qualify leads",
    description:
      "What I learned building Retell AI workflows for real lead-gen funnels, not toy demos.",
    tags: ["Voice AI", "Retell", "Lead Gen"],
    date: "2026-06-12",
    readTime: "8 min",
    status: "read",
  },
  {
    id: "cpl-sales",
    title: "CPL isn't the full picture",
    description:
      "Why measuring acquisition quality means looking at what happens after the lead comes in.",
    tags: ["Analytics", "Lead Gen", "ML"],
    date: "2026-05-28",
    readTime: "6 min",
    status: "read",
  },
  {
    id: "rag-production",
    title: "RAG past the demo stage",
    description:
      "Ingestion, reranking, streaming, persistence. The unglamorous parts that make assistants reliable.",
    tags: ["RAG", "GenAI", "Production"],
    date: "2026-04-15",
    readTime: "9 min",
    status: "read",
  },
  {
    id: "lead-routing",
    title: "Routing leads with ML",
    description:
      "Using conversion probability and backtesting to send each lead to the right call center.",
    tags: ["ML", "Routing", "CatBoost"],
    date: "2026-03-20",
    readTime: "7 min",
    status: "read",
  },
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}
