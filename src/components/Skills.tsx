import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { SectionLabel } from "./ui/SectionLabel";
import { Tag } from "./ui/Tag";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-text-primary">{name}</span>
        <span className="font-mono text-xs text-text-muted">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section className="py-20">
      <div className="section-container">
        <SectionLabel label="// skills" />
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Technical stack</h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          Tools and frameworks I use to build production AI, data, and full-stack
          systems.
        </p>

        <div className="mt-12 space-y-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.05 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-accent-cyan">
                {group.title}
              </h3>
              <div className="mb-4 flex flex-wrap gap-2">
                {group.skills.map((s, si) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.02 }}
                  >
                    <Tag>{s.name}</Tag>
                  </motion.div>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.skills.slice(0, 6).map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
