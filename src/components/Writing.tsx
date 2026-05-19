import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blog";
import { SectionLabel } from "./ui/SectionLabel";
import { GlowCard } from "./ui/GlowCard";
import { Tag } from "./ui/Tag";

export function Writing() {
  return (
    <section id="writing" className="py-20">
      <div className="section-container">
        <SectionLabel label="// writing" />
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Notes from the field
        </h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Short technical essays I plan to publish about GenAI, voice agents, ML
          systems, and data products.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post, i) => (
            <GlowCard key={post.id} className="!p-0 overflow-hidden">
              <motion.a
                href={post.href}
                className="block p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <h3 className="mb-2 text-lg font-semibold leading-snug group-hover:text-accent-cyan">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm text-text-muted">{post.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-accent-cyan">
                  {post.status === "coming-soon" ? "Coming soon" : "Read article"}
                  <ArrowRight size={14} />
                </span>
              </motion.a>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
