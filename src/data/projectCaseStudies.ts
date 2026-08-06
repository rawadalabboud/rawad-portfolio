export type ProjectCaseStudySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ProjectCaseStudy = {
  problem: string;
  solution: string;
  impact: string[];
  architecture: string;
  lessonsLearned: string[];
  sections: ProjectCaseStudySection[];
};

export const projectCaseStudies: Record<string, ProjectCaseStudy> = {
  "voice-ai-platform": {
    problem:
      "Lead-generation campaigns across fiber, energy, health insurance, and pet insurance needed automated phone qualification at scale, with correct routing to call centers, deduplication, transfer logic, and structured lead extraction from every conversation.",
    solution:
      "Built Hipto's production Click-to-Call voice platform on NestJS and Retell AI. Architected 7 dedicated agent pipelines (events, transfer, reach, relance, receptionist, flux-froid, transcript) within the production voice module. Each pipeline handles a distinct stage of the call lifecycle, from initial qualification through transfer, follow-up, and structured transcript extraction via OpenAI.",
    impact: [
      "4,400+ AI-qualified calls across 5 verticals and 13 experiment profiles",
      "7 voice-agent pipelines in production with transfer and relance workflows",
      "5 production verticals with operator and partner routing",
      "OpenAI structured transcript extraction with Upstash Redis deduplication",
    ],
    architecture:
      "Landing page → dynamic number allocation → Retell AI voice agent → NestJS webhook handlers → pipeline routing (transfer / reach / relance) → OpenAI transcript extraction → Redis dedup → call-center CRM injection",
    lessonsLearned: [
      "Voice agents need strict business-rule validation in prompts. Conversational flexibility without rule-breaking requires layered guardrails.",
      "Deduplication at the webhook layer prevents duplicate lead injection when Retell retries events.",
      "Separating pipelines by call stage (transfer vs relance vs transcript) keeps each module testable and deployable independently.",
    ],
    sections: [
      {
        title: "Retell AI integration",
        paragraphs: [
          "Each vertical gets a dedicated Retell agent with dynamic variables injected per call: campaign context, operator, vertical, and experiment profile. Prompts enforce qualification criteria while keeping conversations natural enough that callers don't hang up.",
        ],
        bullets: [
          "Dynamic variables per call (vertical, operator, campaign)",
          "Conversational validation rules per product line",
          "Webhook-driven event handling on NestJS",
        ],
      },
      {
        title: "Transfer & routing logic",
        paragraphs: [
          "When a lead qualifies, the transfer pipeline routes to the correct call-center partner based on vertical, operator, and experiment profile. Reach and relance pipelines handle follow-up calls for leads that didn't convert on first contact.",
        ],
      },
      {
        title: "Production deployment",
        paragraphs: [
          "The platform runs in production handling real inbound calls across Orange, Sosh, SFR, Free, and Bouygues telco operators. BigQuery tracks attribution from landing page to qualified call.",
        ],
      },
    ],
  },
  "insurance-rag-assistant": {
    problem:
      "Groupe Hueber Assurances serves 150k+ insured clients across 6 product lines. Visitors on their Webflow site needed instant, accurate answers from live documentation, not a static FAQ page that goes stale.",
    solution:
      "Engineered a production RAG assistant embedded on the insurance group's Webflow site. Built a document ingestion pipeline from Webflow pages and CMS content, hybrid retrieval combining BM25 keyword search with cosine similarity on OpenAI embeddings, LLM reranking for precision, and SSE streaming for real-time responses.",
    impact: [
      "Deployed for 150k+ insured clients across 6 product lines",
      "Quality-gated by a 40-question golden evaluation dataset",
      "Hybrid BM25 + cosine retrieval with LLM reranking",
      "SSE streaming embedded chat widget on live Webflow site",
    ],
    architecture:
      "Webflow CMS/pages → chunking pipeline → OpenAI embeddings → hybrid index (BM25 + vector) → query → BM25 + cosine retrieval → LLM rerank → SSE stream → embedded chat widget",
    lessonsLearned: [
      "Hybrid retrieval beats pure vector search for insurance terminology where exact keyword matches matter.",
      "A golden evaluation set of 40 questions is the minimum bar before shipping RAG to production.",
      "Streaming responses (SSE) dramatically improve perceived latency even when total generation time is similar.",
    ],
    sections: [
      {
        title: "Hybrid retrieval",
        paragraphs: [
          "Insurance documentation mixes precise terminology (product names, coverage types) with natural-language questions. Pure embedding search misses exact keyword matches; pure BM25 misses semantic similarity. Combining both with LLM reranking gives the best of both approaches.",
        ],
        bullets: [
          "BM25 for keyword-precision on product names and coverage terms",
          "Cosine similarity on OpenAI embeddings for semantic matching",
          "LLM reranking to select the most relevant chunks before generation",
        ],
      },
      {
        title: "Evaluation dataset",
        paragraphs: [
          "Before deployment, every retrieval and generation path was tested against a curated set of 40 questions covering all 6 product lines. This golden dataset gates quality. No answer ships without passing evaluation.",
        ],
      },
      {
        title: "Streaming architecture",
        paragraphs: [
          "Responses stream via Server-Sent Events directly into the embedded chat widget. Upstash Redis handles session persistence and rate limiting.",
        ],
      },
    ],
  },
  "offer-hub": {
    problem:
      "Hipto manages a catalog of 57 offers across telecom, energy, and insurance verticals. Users inside ChatGPT and Claude needed to check eligibility, browse offers, and capture leads, not just get text descriptions of products.",
    solution:
      "Built Hipto Offer Hub as a Skybridge/MCP application embedded in ChatGPT and Claude. Exposed 10+ AI tools for address lookup, eligibility checks, offer retrieval, and mobile coverage validation. Shipped 2 React widgets (a Leaflet eligibility map and a 6-step lead-capture funnel), deployed on Google App Engine.",
    impact: [
      "57 offers accessible via MCP tool calling in ChatGPT and Claude",
      "10+ AI tools with eligibility controls and lead capture",
      "5 MCP endpoints with structured tool-calling interfaces",
      "Deployed on Google App Engine with React widgets",
    ],
    architecture:
      "ChatGPT/Claude → MCP protocol → Offer Hub server → tool routing (eligibility / offers / lead capture) → React widgets (Leaflet map + funnel) → lead storage",
    lessonsLearned: [
      "MCP tool schemas must be precise. Ambiguous parameter descriptions cause LLMs to call the wrong tool.",
      "Eligibility checks need server-side validation; never trust the LLM to enforce business rules.",
      "Embedding interactive widgets (maps, forms) inside LLM chat interfaces requires careful state management across tool calls.",
    ],
    sections: [
      {
        title: "MCP & tool calling",
        paragraphs: [
          "The app exposes structured tools that LLMs invoke to perform real actions: check address eligibility, retrieve offers by vertical, validate mobile coverage, and capture leads through a multi-step funnel.",
        ],
        bullets: [
          "10+ tool definitions with strict parameter schemas",
          "Eligibility checks with server-side validation",
          "57-offer catalog with vertical and operator filtering",
        ],
      },
      {
        title: "ChatGPT & Claude embedding",
        paragraphs: [
          "Via Skybridge and the ChatGPT Apps SDK, users interact with offers naturally in conversation. The LLM decides which tools to call based on user intent: checking fiber availability, comparing energy plans, or starting a lead capture flow.",
        ],
      },
    ],
  },
  "ml-conversion-scoring": {
    problem:
      "Hipto's lead routing relied on round-robin assignment. Leads went to call centers without considering conversion probability. The business needed a data-backed way to match high-intent leads with the partners most likely to close them.",
    solution:
      "Prototyped an ML conversion-scoring module using CatBoost gradient boosting with probability calibration and temporal backtests. Built feature engineering pipelines from historical lead data, served predictions via FastAPI, and shipped a Streamlit dashboard for model diagnostics and monitoring.",
    impact: [
      "Conversion probability model with calibrated outputs for routing decisions",
      "Temporal backtesting to validate model stability over time",
      "FastAPI serving layer ready for Hipti integration",
      "Streamlit dashboard for feature importance and drift monitoring",
    ],
    architecture:
      "BigQuery lead history → feature engineering → CatBoost training → probability calibration → temporal backtest → FastAPI serving → Streamlit monitoring dashboard",
    lessonsLearned: [
      "Calibration matters more than raw AUC when scores drive business routing decisions.",
      "Temporal backtesting catches models that look good in random splits but fail on future data.",
      "A Streamlit dashboard for ops teams is as important as model accuracy. If nobody trusts the scores, they won't use them.",
    ],
    sections: [
      {
        title: "CatBoost & calibration",
        paragraphs: [
          "CatBoost handles mixed categorical and numerical features natively, which is critical for lead data with operator, vertical, and campaign attributes. Platt scaling calibrates raw scores into reliable probabilities.",
        ],
      },
      {
        title: "Backtesting & monitoring",
        paragraphs: [
          "Temporal backtests train on past periods and evaluate on future windows, the only honest way to assess a routing model. The Streamlit dashboard tracks feature drift and score distributions over time.",
        ],
        bullets: [
          "Temporal train/test splits mirroring production deployment",
          "Business-focused evaluation (conversion rate lift, not just AUC)",
          "Streamlit diagnostics for feature importance and score calibration curves",
        ],
      },
    ],
  },
};

export const projectIdAliases: Record<string, string> = {
  "c2c-tracking": "voice-ai-platform",
  "retell-voice-agents": "voice-ai-platform",
  "webflow-rag": "insurance-rag-assistant",
  "lead-routing-ml": "ml-conversion-scoring",
};

export function resolveProjectId(id: string): string {
  return projectIdAliases[id] ?? id;
}

export function getProjectCaseStudy(id: string): ProjectCaseStudy | undefined {
  return projectCaseStudies[resolveProjectId(id)];
}
