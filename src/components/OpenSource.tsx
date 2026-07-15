import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { openSourceRepos } from "../data/openSource";
import { SectionLabel } from "./ui/SectionLabel";
import { GlowCard } from "./ui/GlowCard";
import { Tag } from "./ui/Tag";
import { GitHubIcon } from "./ui/SocialIcons";

export function OpenSource() {
  return (
    <section id="open-source" className="section-band py-24">
      <div className="section-container">
        <SectionLabel label="open source" />
        <h2 className="section-heading mt-4">On GitHub</h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Public repositories behind my research and side projects. Production
          work at Hipto is summarized in{" "}
          <a href="#projects" className="text-accent-cyan hover:underline">
            Featured work
          </a>
          ; these are the repos you can clone.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {openSourceRepos.map((repo, i) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <GlowCard className="flex h-full flex-col !p-5">
                <p className="font-mono text-xs text-accent-cyan">{repo.language}</p>
                <h3 className="mt-2 font-serif text-lg leading-snug text-text-primary">
                  {repo.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-text-muted">
                  {repo.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {repo.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={repo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent-cyan hover:underline"
                  >
                    <GitHubIcon size={14} />
                    Repository
                  </a>
                  {repo.demo && (
                    <a
                      href={repo.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text-muted transition hover:text-accent-cyan"
                    >
                      <ExternalLink size={14} />
                      Live demo
                    </a>
                  )}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center">
          <a
            href="https://github.com/rawadalabboud"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <GitHubIcon size={16} />
            View all on GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
