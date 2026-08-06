export type StatItem = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail?: string;
};

export const stats: StatItem[] = [
  {
    value: 4400,
    suffix: "+",
    label: "AI-qualified calls",
    detail: "Voice agents in production",
  },
  {
    value: 150,
    suffix: "k+",
    label: "Insured clients",
    detail: "Production RAG assistant",
  },
  {
    value: 57,
    label: "Offers automated",
    detail: "MCP app in ChatGPT & Claude",
  },
  {
    value: 7,
    label: "Voice-agent pipelines",
    detail: "Retell AI · NestJS",
  },
  {
    value: 40,
    label: "Eval questions",
    detail: "RAG golden dataset",
  },
];
