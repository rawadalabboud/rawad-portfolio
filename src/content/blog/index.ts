import type { ComponentType } from "react";
import { VoiceAiLeadsContent } from "./voice-ai-leads";
import { CplSalesContent } from "./cpl-sales";
import { RagProductionContent } from "./rag-production";
import { LeadRoutingContent } from "./lead-routing";
import { McpAgentsContent } from "./mcp-agents";
import { BilingualAiContent } from "./bilingual-ai";

export const blogContent: Record<string, ComponentType> = {
  "mcp-agents": McpAgentsContent,
  "bilingual-ai": BilingualAiContent,
  "voice-ai-leads": VoiceAiLeadsContent,
  "cpl-sales": CplSalesContent,
  "rag-production": RagProductionContent,
  "lead-routing": LeadRoutingContent,
};
