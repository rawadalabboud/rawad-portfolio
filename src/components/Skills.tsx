import { motion } from "framer-motion";
import {
  Brain,
  LayoutGrid,
  Server,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  skillGroups,
  skillLevelMeta,
  type SkillItem,
  type SkillLevel,
} from "../data/skills";
import { SectionLabel } from "./ui/SectionLabel";

const tierOrder: SkillLevel[] = ["core", "strong", "solid", "working"];

const groupIcons: Record<string, LucideIcon> = {
  brain: Brain,
  sparkles: Sparkles,
  server: Server,
  layout: LayoutGrid,
};

const tierStyles: Record<SkillLevel, string> = {
  core: "border-accent-cyan/30 bg-accent-cyan/[0.1] text-accent-cyan hover:border-accent-cyan/50 hover:bg-accent-cyan/[0.14]",
  strong:
    "border-white/12 bg-white/[0.05] text-text-primary hover:border-white/20 hover:bg-white/[0.07]",
  solid:
    "border-accent-violet/20 bg-accent-violet/[0.06] text-text-muted hover:border-accent-violet/35 hover:text-text-primary",
  working:
    "border-white/[0.06] bg-transparent text-text-muted/80 hover:border-white/12 hover:text-text-muted",
};

function sortByTier(skills: SkillItem[]) {
  return [...skills].sort(
    (a, b) => tierOrder.indexOf(a.level) - tierOrder.indexOf(b.level)
  );
}

function TierLegend() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {tierOrder.map((tier) => {
        const meta = skillLevelMeta[tier];
        return (
          <div
            key={tier}
            className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-bg-card/50 px-3 py-1.5"
          >
            <span className={`h-2 w-2 shrink-0 rounded-full ${meta.dotClass}`} />
            <span className="font-mono text-[11px] uppercase tracking-wide text-text-primary">
              {meta.label}
            </span>
            <span className="hidden text-xs text-text-muted sm:inline">
              {meta.hint}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function SkillChip({ name, level }: SkillItem) {
  const meta = skillLevelMeta[level];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition duration-200 hover:-translate-y-0.5 ${tierStyles[level]}`}
    >
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${meta.dotClass}`}
        aria-hidden="true"
      />
      {name}
    </span>
  );
}

function SkillGroupCard({
  title,
  description,
  icon,
  skills,
  index,
}: (typeof skillGroups)[number] & { index: number }) {
  const Icon = groupIcons[icon];
  const sorted = sortByTier(skills);

  return (
    <motion.article
      className="glow-border group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-7"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-cyan/5 blur-2xl transition group-hover:bg-accent-cyan/10"
        aria-hidden="true"
      />

      <div className="relative flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-cyan/20 bg-accent-cyan/[0.08]">
          <Icon className="h-5 w-5 text-accent-cyan" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="font-serif text-xl text-text-primary">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-text-muted">
            {description}
          </p>
        </div>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {sorted.map((skill, si) => {
          const prev = si > 0 ? sorted[si - 1].level : null;
          const tierBreak = prev && prev !== skill.level;

          return (
            <motion.div
              key={skill.name}
              className={tierBreak ? "basis-full" : undefined}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.015 }}
            >
              {tierBreak && (
                <div
                  className="mb-2 mt-1 h-px w-full bg-gradient-to-r from-white/10 to-transparent"
                  aria-hidden="true"
                />
              )}
              <SkillChip {...skill} />
            </motion.div>
          );
        })}
      </div>

      <p className="relative mt-auto pt-5 font-mono text-xs text-text-muted/70">
        {skills.length} tools
      </p>
    </motion.article>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-band py-24">
      <div className="section-container">
        <SectionLabel label="skills" />
        <h2 className="section-heading mt-4">What I work with</h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Grouped by domain and depth, not arbitrary percentages. Dot color
          shows how often I reach for each tool.
        </p>

        <TierLegend />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.title} {...group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
