import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  projects,
  projectFilters,
  type ProjectFilter,
} from "../data/projects";
import { SectionLabel } from "./ui/SectionLabel";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(
      (p) =>
        p.category === filter ||
        p.filterTags.includes(filter as (typeof p.filterTags)[number])
    );
  }, [filter]);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionLabel label="projects" />
        <motion.h2
          className="section-heading mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured work
        </motion.h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          A few things I&apos;ve built or contributed to: voice AI, RAG,
          predictive ML, and the data plumbing behind them.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === f
                  ? "bg-accent-cyan text-bg-base"
                  : "border border-white/10 text-text-muted hover:border-accent-cyan/30 hover:text-text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
