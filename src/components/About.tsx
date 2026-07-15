import { motion } from "framer-motion";
import { Brain, LineChart, Database } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";
import { GlowCard } from "./ui/GlowCard";

const focusCards = [
  {
    icon: Brain,
    title: "GenAI in production",
    description:
      "RAG assistants, tool-calling apps, voice agents, and streaming UIs hooked up to real APIs.",
  },
  {
    icon: LineChart,
    title: "Predictive modeling",
    description:
      "Conversion scoring, calibration, backtesting. ML evaluated on business metrics, not just accuracy.",
  },
  {
    icon: Database,
    title: "Data & research engineering",
    description:
      "Pipelines for EEG, clinical, and ops data, from raw ingestion to dashboards people actually use.",
  },
];

const bio = `I'm Rawad, an ML/AI engineer and data scientist in Paris. My path started in telecom engineering and signal processing, moved through EEG-based research, and landed in applied AI: pipelines, predictive models, RAG systems, voice agents, and full-stack GenAI products.

These days I work where LLMs meet structured data and real APIs. I like building things that retrieve, call tools, qualify leads, and stream answers, not just demo well in a slide deck.`;

export function About() {
  return (
    <section id="about" className="section-band py-24">
      <div className="section-container">
        <SectionLabel label="about" />
        <h2 className="section-heading mt-4">
          A bit about me
        </h2>

        <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-status/30 bg-status/10 px-4 py-1.5 text-sm text-status">
          <span className="h-2 w-2 animate-pulse rounded-full bg-status" />
          Open to new roles in AI, data, and GenAI
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
