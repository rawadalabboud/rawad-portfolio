import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "../data/certifications";
import { education } from "../data/education";
import { experience, type ExperienceCaseStudy } from "../data/experience";
import { profile } from "../data/profile";
import { SectionLabel } from "./ui/SectionLabel";
import { Tag } from "./ui/Tag";
import { TechIcon } from "./ui/TechIcon";

function ExperienceOrganizations({
  organizations,
  orgSeparator = " · ",
  location,
}: {
  organizations: ExperienceCaseStudy["organizations"];
  orgSeparator?: string;
  location: string;
}) {
  return (
    <p className="text-sm text-text-muted">
      {organizations.map((org, index) => (
        <span key={org.name}>
          {index > 0 && <span>{orgSeparator}</span>}
          {org.href ? (
            <a
              href={org.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-accent-cyan hover:underline"
            >
              {org.name}
            </a>
          ) : (
            org.name
          )}
        </span>
      ))}
      <span> · {location}</span>
    </p>
  );
}

function ExperienceCaseStudyCard({
  item,
  index,
}: {
  item: ExperienceCaseStudy;
  index: number;
}) {
  return (
    <motion.article
      className="rounded-2xl border border-white/[0.06] bg-bg-card p-6 sm:p-7"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06 }}
    >
      <p className="font-mono text-xs text-accent-cyan">{item.period}</p>
      <h3 className="mt-1 text-xl font-semibold text-text-primary">
        {item.title}
      </h3>
      <ExperienceOrganizations
        organizations={item.organizations}
        orgSeparator={item.orgSeparator}
        location={item.location}
      />

      <div className="mt-6 space-y-5">
        <div>
          <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-text-muted">
            Problem
          </p>
          <p className="text-sm leading-relaxed text-text-muted">
            {item.problem}
          </p>
        </div>
        <div>
          <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-text-muted">
            Solution
          </p>
          <p className="text-sm leading-relaxed text-text-muted">
            {item.solution}
          </p>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-text-muted">
            Impact
          </p>
          <ul className="space-y-1.5">
            {item.impact.map((point) => (
              <li
                key={point.slice(0, 48)}
                className="flex gap-2 text-sm text-text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-text-muted">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-text-muted"
              >
                <TechIcon name={tech} size={13} />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="section-band py-24">
      <div className="section-container">
        <SectionLabel label="experience" />
        <h2 className="section-heading mt-4">Engineering case studies</h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Each role reframed as a production problem: what needed solving,
          how I built it, and what changed.
        </p>

        <div className="mt-10 space-y-6">
          {experience.map((item, i) => (
            <ExperienceCaseStudyCard key={item.period} item={item} index={i} />
          ))}
        </div>

        <h3 className="mt-16 font-serif text-2xl text-text-primary">
          Education
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="rounded-xl border border-white/[0.06] bg-bg-card p-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <p className="font-mono text-xs text-accent-cyan">{edu.period}</p>
              <p className="mt-1 text-sm font-semibold text-text-primary">
                {edu.degree}
              </p>
              {edu.schools.map((school) => (
                <p key={school.name} className="mt-0.5 text-xs text-text-muted">
                  {school.href ? (
                    <a
                      href={school.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-cyan hover:underline"
                    >
                      {school.name}
                    </a>
                  ) : (
                    school.name
                  )}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <h3 className="mt-16 font-serif text-2xl text-text-primary">
          Certifications
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {certifications.slice(0, 3).map((cert, i) => {
            const inProgress = cert.status === "in_progress";
            const credentialUrl =
              cert.credentialUrl ??
              `${profile.links.linkedin}details/certifications/`;

            return (
              <motion.article
                key={cert.title}
                className="rounded-xl border border-white/[0.06] bg-bg-card p-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-xs text-accent-cyan">
                    {cert.issuer}
                  </p>
                  <p className="font-mono text-xs text-text-muted">
                    {cert.issued}
                  </p>
                </div>
                <h4 className="mt-2 text-sm font-semibold leading-snug">
                  {cert.title}
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
                <a
                  href={credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-accent-cyan hover:underline"
                >
                  {inProgress ? "Details" : "Credential"}
                  <ExternalLink size={12} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
