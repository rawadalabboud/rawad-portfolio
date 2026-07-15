import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Brain,
  ExternalLink,
  FileText,
  GraduationCap,
} from "lucide-react";
import {
  phdResearch,
  researchOutputs,
  type ResearchItem,
  type ResearchKind,
} from "../data/research";
import { profile } from "../data/profile";
import { publicUrl } from "../lib/publicUrl";
import { GlowCard } from "./ui/GlowCard";
import { SectionLabel } from "./ui/SectionLabel";
import { Tag } from "./ui/Tag";

const kindMeta: Record<
  ResearchKind,
  { icon: typeof Brain; label: string; accent: string }
> = {
  thesis: { icon: GraduationCap, label: "Doctoral research", accent: "text-accent-cyan" },
  "book-chapter": { icon: BookOpen, label: "Book chapter", accent: "text-accent-violet" },
  paper: { icon: FileText, label: "Manuscript", accent: "text-status" },
  training: { icon: Award, label: "Training", accent: "text-accent-cyan" },
};

const statusStyles: Record<ResearchItem["status"], string> = {
  doctoral: "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan",
  published: "border-status/30 bg-status/10 text-status",
  submitted: "border-accent-violet/30 bg-accent-violet/10 text-accent-violet",
  completed: "border-accent-cyan/25 bg-accent-cyan/8 text-accent-cyan",
};

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-text-muted">
      {authors.map((author, index) => (
        <span key={author}>
          {index > 0 && <span className="text-text-muted/60"> · </span>}
          <span
            className={
              author === profile.name
                ? "font-medium text-accent-cyan"
                : "text-text-muted"
            }
          >
            {author}
          </span>
        </span>
      ))}
    </p>
  );
}

function ResearchLinks({ links }: { links: ResearchItem["links"] }) {
  if (links.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href.startsWith("http") ? link.href : publicUrl(link.href)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-text-muted transition hover:border-accent-cyan/30 hover:text-accent-cyan"
        >
          {link.label}
          <ExternalLink size={12} />
        </a>
      ))}
    </div>
  );
}

function FeaturedThesis({ item }: { item: ResearchItem }) {
  const Icon = kindMeta[item.kind].icon;

  return (
    <GlowCard className="relative overflow-hidden !p-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_0%,rgba(224,122,106,0.1),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_100%,rgba(110,143,170,0.08),transparent_60%)]" />

      <div className="relative grid gap-6 p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[item.status]}`}
            >
              <Icon size={13} />
              {item.statusLabel}
            </span>
            <span className="font-mono text-xs text-text-muted">{item.period}</span>
          </div>

          <h3 className="text-2xl font-bold leading-tight sm:text-3xl">{item.title}</h3>
          <p className="mt-2 text-sm text-accent-cyan">{item.venue}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted">
            {item.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div className="glass rounded-xl border border-white/5 p-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent-violet">
            Focus areas
          </p>
          <ul className="space-y-2.5">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2 text-sm text-text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6 overflow-hidden rounded-lg border border-white/5 bg-bg-base/60 p-4">
            <svg viewBox="0 0 320 72" className="h-16 w-full" aria-hidden="true">
              <path
                d="M0 36 C24 12, 48 60, 72 36 S120 12, 144 36 S192 60, 216 36 S264 12, 288 36 S312 60, 320 36"
                fill="none"
                stroke="rgba(224,122,106,0.5)"
                strokeWidth="2"
              />
              <path
                d="M0 48 C28 28, 56 58, 84 42 S140 24, 168 44 S224 58, 252 40 S280 26, 320 46"
                fill="none"
                stroke="rgba(167,139,250,0.5)"
                strokeWidth="1.5"
              />
            </svg>
            <p className="mt-2 text-center font-mono text-[11px] text-text-muted">
              EEG · clinical data · response biomarkers
            </p>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}

function ResearchOutputCard({ item, index }: { item: ResearchItem; index: number }) {
  const meta = kindMeta[item.kind];
  const Icon = meta.icon;

  return (
    <GlowCard className="!p-0 overflow-hidden">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: index * 0.08 }}
        className="flex h-full flex-col"
      >
        {item.coverImage ? (
          <div className="relative h-60 overflow-hidden border-b border-white/5 bg-bg-elev">
            <img
              src={publicUrl(item.coverImage)}
              alt={`${item.title}, ${meta.label.toLowerCase()} preview`}
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bg-base/55 via-transparent to-bg-card/35" />
            <div className="absolute top-3 left-4 right-4 flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-bg-base/80 px-2.5 py-1 text-[11px] text-text-primary backdrop-blur-sm">
                <Icon size={12} className={meta.accent} />
                {meta.label}
              </span>
              <span
                className={`rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm ${statusStyles[item.status]}`}
              >
                {item.statusLabel}
              </span>
            </div>
          </div>
        ) : (
          <div className="border-b border-white/5 px-5 pt-5">
            <div className="mb-4 flex items-center justify-between gap-2">
              <span className={`inline-flex items-center gap-1.5 text-xs ${meta.accent}`}>
                <Icon size={14} />
                {meta.label}
              </span>
              <span
                className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusStyles[item.status]}`}
              >
                {item.statusLabel}
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <p className="font-mono text-xs text-text-muted">{item.period}</p>
          <h3 className="mt-2 text-lg font-semibold leading-snug">{item.title}</h3>
          {item.subtitle && (
            <p className="mt-1 text-sm italic text-text-muted">{item.subtitle}</p>
          )}
          <p className="mt-1 text-sm text-accent-cyan">{item.venue}</p>
          {item.authors && <AuthorList authors={item.authors} />}
          <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
            {item.description}
          </p>

          <ul className="mt-4 space-y-1.5">
            {item.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex gap-2 text-xs text-text-muted">
                <span className="text-accent-cyan">▸</span>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <ResearchLinks links={item.links} />
        </div>
      </motion.article>
    </GlowCard>
  );
}

export function ResearchWork() {
  return (
    <section id="research" className="py-24">
      <div className="section-container">
        <SectionLabel label="research" />
        <h2 className="section-heading mt-4">Research work</h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Doctoral research on rTMS response biomarkers, a published psychiatry
          book chapter, a submitted cross-national acceptability study, and advanced
          TMS–EEG training at Aalto University.
        </p>

        <div className="mt-10">
          <FeaturedThesis item={phdResearch} />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {researchOutputs.map((item, index) => (
            <ResearchOutputCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
