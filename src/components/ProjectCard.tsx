import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code2 } from "lucide-react";
import type { Project } from "../data/projects";
import { resetScrollInstant } from "../lib/scroll";
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
  if (!href) return null;

  if (href.startsWith("http://") || href.startsWith("https://")) {
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
    <Link to={href} className={className} onClick={resetScrollInstant}>
      {children}
    </Link>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { github, details } = project.links;

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-bg-card transition hover:border-white/[0.12]"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <ProjectCover projectId={project.id} title={project.title} />
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-1 font-mono text-xs text-accent-cyan">
          {project.category}
        </span>
        <h3 className="mb-2 font-serif text-lg leading-snug text-text-primary">
          {project.title}
        </h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <p className="mt-3 text-xs font-medium text-accent-cyan">
          {project.impact}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-white/[0.04] pt-4">
          {details && (
            <ProjectLink
              href={details}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan transition hover:underline"
            >
              <BookOpen size={14} />
              Case study
              <ArrowRight
                size={14}
                className="transition group-hover:translate-x-0.5"
              />
            </ProjectLink>
          )}
          {github && (
            <ProjectLink
              href={github}
              className="inline-flex items-center gap-1.5 text-sm text-text-muted transition hover:text-text-primary"
            >
              <Code2 size={14} />
              GitHub
            </ProjectLink>
          )}
        </div>
      </div>
    </motion.article>
  );
}
