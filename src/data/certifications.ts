export type CertificationStatus = "earned" | "in_progress";

export type Certification = {
  title: string;
  issuer: string;
  issued: string;
  status?: CertificationStatus;
  examCode?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
};

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    issuer: "Microsoft",
    issued: "In progress",
    status: "in_progress",
    examCode: "AI-103",
    credentialUrl:
      "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/",
    skills: [
      "Azure AI",
      "Microsoft Foundry",
      "Generative AI",
      "Agentic solutions",
    ],
  },
  {
    title: "Academy Accreditation - Generative AI Fundamentals",
    issuer: "Databricks",
    issued: "Jul 2026",
    credentialId: "188449781",
    credentialUrl: "https://credentials.databricks.com/188449781",
    skills: ["Generative AI", "Artificial Intelligence (AI)"],
  },
  {
    title: "AI Skills badge 2025-26 (French)",
    issuer: "Microsoft",
    issued: "Jun 2026",
    skills: ["Artificial Intelligence (AI)", "Generative AI"],
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM",
    issued: "Oct 2025",
    credentialId: "FB352ESSANUU",
    credentialUrl:
      "https://www.credly.com/org/ibm/badge/introduction-to-artificial-intelligence-ai",
    skills: ["Artificial Intelligence (AI)"],
  },
  {
    title: "Generative AI: Introduction and Applications",
    issuer: "IBM",
    issued: "Oct 2025",
    credentialId: "GKNCBZM4SM0K",
    credentialUrl:
      "https://www.credly.com/org/ibm/badge/generative-ai-introduction-and-applications",
    skills: ["Generative AI", "Artificial Intelligence (AI)"],
  },
];
