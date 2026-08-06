export type MicrosoftLab = {
  title: string;
  description: string;
  technologies: string[];
};

export const microsoftJourney = {
  title: "Microsoft AI Journey",
  subtitle: "Hands-on engineering through Azure AI-103 labs",
  intro:
    "Structured lab work for the Azure AI Apps and Agents Developer Associate certification (AI-103). Not production deployments, but deliberate practice building agents, RAG pipelines, and multi-agent workflows on Azure.",
  labs: [
    {
      title: "Develop Generative AI Apps in Azure",
      description:
        "Built RAG pipelines with Azure AI Search and Foundry Knowledge, wired Azure OpenAI for retrieval-augmented generation, and evaluated response quality across indexed document collections.",
      technologies: [
        "Azure OpenAI",
        "Azure AI Search",
        "Azure AI Foundry",
        "Prompt Flow",
        "Embeddings",
      ],
    },
    {
      title: "Develop AI Agents on Azure",
      description:
        "Designed multi-agent workflows in Azure AI Foundry with custom tool integration, MCP servers, and Microsoft 365 connectors. Implemented agent evaluation loops and structured tool-calling patterns.",
      technologies: [
        "Azure AI Foundry",
        "Azure OpenAI",
        "MCP",
        "Prompt Flow",
        "Microsoft 365",
        "Multi-agent workflows",
      ],
    },
  ] satisfies MicrosoftLab[],
  certification: {
    title:
      "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    examCode: "AI-103",
    status: "In progress" as const,
    url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/",
  },
};
