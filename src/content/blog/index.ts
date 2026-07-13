import type { ComponentType } from "react";
import { VoiceAiLeadsContent } from "./voice-ai-leads";
import { CplSalesContent } from "./cpl-sales";
import { RagProductionContent } from "./rag-production";
import { LeadRoutingContent } from "./lead-routing";

export const blogContent: Record<string, ComponentType> = {
  "voice-ai-leads": VoiceAiLeadsContent,
  "cpl-sales": CplSalesContent,
  "rag-production": RagProductionContent,
  "lead-routing": LeadRoutingContent,
};
