import { motion } from "framer-motion";
import {
  skillGroups,
  skillLevelMeta,
  type SkillItem,
  type SkillLevel,
} from "../data/skills";
import { getSkillGroupIcon, TechIcon } from "./ui/TechIcon";
import { SectionLabel } from "./ui/SectionLabel";

const tierOrder: SkillLevel[] = ["core", "strong", "solid", "working"];

const tierStyles: Record<SkillLevel, string> = {
  core: "border-accent-cyan/25 bg-accent-cyan/[0.08] text-text-primary",
  strong: "border-white/10 bg-white/[0.04] text-text-primary",
  solid: "border-white/[0.06] bg-transparent text-text-muted",
  working: "border-white/[0.04] bg-transparent text-text-muted/70",
};

function SkillChip({ name, level, icon }: SkillItem) {
  const meta = skillLevelMeta[level];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition ${tierStyles[level]}`}
      title={`${meta.label}: ${meta.hint}`}
    >
      {icon && <TechIcon name={name} slug={icon} size={14} />}
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
  const Icon = getSkillGroupIcon(icon);
  const sorted = [...skills].sort(
    (a, b) => tierOrder.indexOf(a.level) - tierOrder.indexOf(b.level)
  );

  return (
    <motion.article
      className="rounded-2xl border border-white/[0.06] bg-bg-card p-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.04 }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
          <Icon className="h-4.5 w-4.5 text-accent-cyan" strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="font-semibold text-text-primary">{title}</h3>
          <p className="mt-0.5 text-sm text-text-muted">{description}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {sorted.map((skill) => (
          <SkillChip key={skill.name} {...skill} />
        ))}
      </div>
    </motion.article>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <SectionLabel label="skills" />
        <h2 className="section-heading mt-4">Tech stack</h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Grouped by domain: LLMs, ML, backend, cloud, and the tools I reach
          for when shipping production AI systems.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {tierOrder.map((tier) => {
            const meta = skillLevelMeta[tier];
            return (
              <div
                key={tier}
                className="flex items-center gap-2 text-xs text-text-muted"
              >
                <span className={`h-2 w-2 rounded-full ${meta.dotClass}`} />
                {meta.label}
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.title} {...group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
