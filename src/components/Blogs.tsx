import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blog";
import { SectionLabel } from "./ui/SectionLabel";
import { GlowCard } from "./ui/GlowCard";
import { Tag } from "./ui/Tag";

export function Blogs() {
  return (
    <section id="blogs" className="py-24">
      <div className="section-container">
        <SectionLabel label="blog" />
        <h2 className="section-heading mt-4">Writing</h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Notes on voice AI, lead gen, production RAG, and ML routing from
          systems I have shipped.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post, i) => {
            const formattedDate = new Date(post.date).toLocaleDateString(
              "en-US",
              { year: "numeric", month: "short", day: "numeric" }
            );

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <GlowCard className="h-full !p-0 overflow-hidden">
                  <Link to={`/blog/${post.id}`} className="flex h-full flex-col p-6">
                    <p className="font-mono text-xs text-accent-cyan">
                      {formattedDate} · {post.readTime}
                    </p>
                    <h3 className="mt-2 font-serif text-xl leading-snug text-text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-text-muted">
                      {post.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm text-accent-cyan">
                      {post.status === "coming-soon" ? "Coming soon" : "Read article"}
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
