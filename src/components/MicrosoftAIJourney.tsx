import { motion } from "framer-motion";
import { ExternalLink, FlaskConical } from "lucide-react";
import { microsoftJourney } from "../data/microsoft";
import { SectionLabel } from "./ui/SectionLabel";
import { TechIcon } from "./ui/TechIcon";

export function MicrosoftAIJourney() {
  return (
    <section id="microsoft-ai" className="section-band py-24">
      <div className="section-container">
        <SectionLabel label="azure ai" />
        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="section-heading">{microsoftJourney.title}</h2>
            <p className="mt-2 font-mono text-sm text-accent-cyan">
              {microsoftJourney.subtitle}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-violet/25 bg-accent-violet/8 px-3.5 py-1.5 text-xs text-accent-violet">
            <FlaskConical size={13} />
            Hands-on labs · AI-103
          </span>
        </div>

        <p className="mt-6 max-w-3xl text-text-muted leading-relaxed">
          {microsoftJourney.intro}
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {microsoftJourney.labs.map((lab, i) => (
            <motion.article
              key={lab.title}
              className="rounded-2xl border border-white/[0.06] bg-bg-card p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <h3 className="text-lg font-semibold text-text-primary">
                {lab.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {lab.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {lab.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-text-muted"
                  >
                    <TechIcon name={tech} size={14} />
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-2xl border border-white/[0.06] bg-bg-card p-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-text-muted">
                Certification target
              </p>
              <h3 className="mt-1 font-semibold text-text-primary">
                {microsoftJourney.certification.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-accent-cyan">
                Exam {microsoftJourney.certification.examCode} ·{" "}
                {microsoftJourney.certification.status}
              </p>
            </div>
            <a
              href={microsoftJourney.certification.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-4 !py-2 text-xs"
            >
              View certification
              <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
