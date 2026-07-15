import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import { scrollToTop } from "../lib/scroll";
import { Tag } from "./ui/Tag";

type ProjectDetailArticleProps = {
  project: Project;
};

export function ProjectDetailArticle({ project }: ProjectDetailArticleProps) {
  const { caseStudy, github } = project.links;

  useEffect(() => {
    scrollToTop("auto");
  }, [project.id]);

  return (
    <article className="bg-bg-base">
      <header className="border-b border-white/5 px-4 py-6 pt-28 sm:px-6">
        <div className="section-container">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition hover:text-accent-cyan"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>
      </header>

      <div className="section-container py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-wide text-accent-cyan">
            {project.category}
          </p>

          <h1 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-text-muted">{project.description}</p>

          <div className="prose-blog mt-10">
            <h2>What I built</h2>
            <ul>
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <h2>Stack</h2>
            <div className="not-prose mb-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>

            <h2>Impact</h2>
            <p>{project.impact}</p>

            {project.id !== "eeg-research" && (
              <p className="text-sm text-text-muted">
                Source code lives in a private company repository. This page
                summarizes the production system for portfolio readers.
              </p>
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {caseStudy && (
              <Link
                to={caseStudy}
                className="btn-secondary"
              >
                Read case study
                <ExternalLink size={14} />
              </Link>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View on GitHub
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
