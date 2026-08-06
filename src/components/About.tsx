import { motion } from "framer-motion";
import { Bot, Layers, Microscope } from "lucide-react";
import { SectionLabel } from "./ui/SectionLabel";

const focusCards = [
  {
    icon: Bot,
    title: "Why production AI",
    description:
      "I care about systems that handle real traffic: calls that qualify, assistants that retrieve the right document, models that route leads correctly. The gap between a demo and production is where the engineering actually happens.",
  },
  {
    icon: Layers,
    title: "Full-stack AI engineering",
    description:
      "From NestJS backends and Retell voice pipelines to hybrid RAG retrieval and CatBoost scoring, I build the full path from model to deployed API to user-facing interface.",
  },
  {
    icon: Microscope,
    title: "Research foundation",
    description:
      "Two years engineering biomedical data pipelines at Clariane and the Paris Brain Institute taught me rigorous evaluation, the same discipline I apply to golden datasets and temporal backtests in production AI.",
  },
];

const bioParagraphs = [
  "I'm a Lebanese engineer who studied telecommunications in Beirut, then moved to Paris for a master's in signal and image processing at CentraleSupélec and Université Paris-Saclay. Signal processing turned into machine learning, machine learning turned into research engineering on EEG and clinical data, and that path led me to building production AI systems.",
  "Today I'm a GenAI Engineer at Hipto in Paris, shipping voice agents that qualify thousands of calls, RAG assistants serving 150k+ insurance clients, MCP apps embedded in ChatGPT and Claude, and ML models for lead conversion scoring. Before Hipto, I spent two years at Clariane and the Paris Brain Institute building data pipelines for psychiatric research.",
  "What draws me to AI engineering is the combination of hard technical problems and immediate business impact. A voice agent that qualifies a lead in 90 seconds, a RAG system that answers an insurance question from live docs, a scoring model that routes the right lead to the right partner. These are systems where engineering decisions matter.",
];

export function About() {
  return (
    <section id="about" className="section-band py-24">
      <div className="section-container">
        <SectionLabel label="about" />
        <h2 className="section-heading mt-4">
          Engineer from Beirut, building AI in Paris
        </h2>

        <div className="mt-8 max-w-3xl space-y-5">
          {bioParagraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              className="text-base leading-relaxed text-text-muted"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {focusCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                className="rounded-2xl border border-white/[0.06] bg-bg-card p-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Icon className="mb-3 h-5 w-5 text-accent-cyan" strokeWidth={1.75} />
                <h3 className="mb-2 text-sm font-semibold text-text-primary">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
