import type { ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2, FileText } from "lucide-react";
import type { Project } from "../data/projects";
import { ProjectCover } from "./ui/ProjectCover";
import { Tag } from "./ui/Tag";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectLink({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: ReactNode;
}) {
  if (!href || href === "#") {
    return (
      <span
        className={`${className} cursor-not-allowed opacity-40`}
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.article
      className="isolate h-[420px] perspective-[1200px] sm:h-[440px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="glow-border relative h-full w-full overflow-hidden rounded-2xl">
        <motion.div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Front */}
          <div
            className="flip-face absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-bg-card"
            style={{ transform: "rotateY(0deg) translateZ(1px)" }}
          >
            <ProjectCover coverId={project.coverId} />
            <div className="flex flex-1 flex-col p-5">
              <span className="mb-1 font-mono text-xs text-accent-cyan">
                {project.category}
              </span>
              <h3 className="mb-2 text-lg font-semibold leading-snug">
                {project.title}
              </h3>
              <p className="line-clamp-3 flex-1 text-sm text-text-muted">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>

          {/* Back */}
          <div
            className="flip-face absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-bg-card p-5"
            style={{ transform: "rotateY(180deg) translateZ(1px)" }}
          >
            <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
            <p className="mb-3 text-xs font-medium text-accent-violet">Impact</p>
            <p className="mb-4 flex-1 text-sm text-text-muted">{project.impact}</p>
            <ul className="mb-4 max-h-28 space-y-1 overflow-y-auto text-xs text-text-muted">
              {project.bullets.slice(0, 5).map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-accent-cyan">▸</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              <ProjectLink
                href={project.links.caseStudy}
                className="inline-flex items-center gap-1 rounded-lg bg-accent-cyan/10 px-3 py-1.5 text-xs text-accent-cyan ring-1 ring-accent-cyan/20 hover:bg-accent-cyan/20"
              >
                <FileText size={14} />
                Case Study
              </ProjectLink>
              <ProjectLink
                href={project.links.code}
                className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-text-muted hover:text-text-primary"
              >
                <Code2 size={14} />
                Code
              </ProjectLink>
              <ProjectLink
                href={project.links.demo}
                className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-text-muted hover:text-text-primary"
              >
                <ExternalLink size={14} />
                Demo
              </ProjectLink>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
