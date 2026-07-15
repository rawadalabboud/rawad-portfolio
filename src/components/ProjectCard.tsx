import type { ReactNode } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Code2, FileText } from "lucide-react";
import type { Project } from "../data/projects";
import { ProjectCover } from "./ui/ProjectCover";
import { Tag } from "./ui/Tag";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function ProjectLink({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: ReactNode;
}) {
  if (!href) return null;

  if (isExternalUrl(href)) {
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

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [flipped, setFlipped] = useState(false);
  const { github, details, caseStudy } = project.links;

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
            <ProjectCover projectId={project.id} title={project.title} />
            <div className="flex flex-1 flex-col p-5">
              <span className="mb-1 font-mono text-xs text-accent-cyan">
                {project.category}
              </span>
              <h3 className="mb-2 font-serif text-lg leading-snug text-text-primary">
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
            <h3 className="mb-2 font-serif text-lg text-text-primary">{project.title}</h3>
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
              {details && (
                <ProjectLink
                  href={details}
                  className="btn-primary !px-3 !py-1.5 text-xs"
                >
                  <BookOpen size={14} />
                  Details
                </ProjectLink>
              )}
              {github && (
                <ProjectLink
                  href={github}
                  className="btn-primary !px-3 !py-1.5 text-xs"
                >
                  <Code2 size={14} />
                  GitHub
                </ProjectLink>
              )}
              {caseStudy && (
                <ProjectLink
                  href={caseStudy}
                  className="btn-secondary !px-3 !py-1.5 text-xs"
                >
                  <FileText size={14} />
                  Case Study
                </ProjectLink>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
