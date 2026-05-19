import { motion } from "framer-motion";
import { Brain, LineChart, Database } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import { GlowCard } from "./ui/GlowCard";

const focusCards = [
  {
    icon: Brain,
    title: "Production GenAI",
    description:
      "RAG assistants, tool-calling apps, voice agents, and streaming interfaces connected to real APIs.",
  },
  {
    icon: LineChart,
    title: "Predictive Modeling",
    description:
      "Conversion scoring, calibration, temporal backtesting, and business-oriented ML evaluation.",
  },
  {
    icon: Database,
    title: "Data & Research Engineering",
    description:
      "Pipelines for EEG, clinical, and operational data — from ingestion to dashboards and research outputs.",
  },
];

const bio = `I'm Rawad Al Abboud, an ML/AI Engineer, Data Scientist, and GenAI Developer based in Paris. My background combines telecommunications engineering, signal and image processing, clinical research, and production AI systems.

I started from signal processing and EEG-based machine learning, then moved toward applied AI engineering: building data pipelines, predictive models, RAG systems, voice AI agents, and full-stack GenAI products connected to real business workflows.

Today, I work at the intersection of LLMs, structured data, APIs, and product impact — designing systems that do more than demo well: they retrieve, reason, call tools, qualify leads, stream responses, and support measurable decisions.`;

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <SectionLabel label="// about" />
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          The engineer behind the systems
        </h2>

        <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Open to AI / Data / GenAI opportunities
        </span>

        <motion.p
          className="mt-8 max-w-3xl whitespace-pre-line text-text-muted leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {bio}
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {focusCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <GlowCard key={card.title} className="!p-5">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Icon className="mb-3 h-8 w-8 text-accent-cyan" />
                  <h3 className="mb-2 font-semibold">{card.title}</h3>
                  <p className="text-sm text-text-muted">{card.description}</p>
                </motion.div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
