import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { SectionLabel } from "./ui/SectionLabel";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <SectionLabel label="// experience" />
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Where I&apos;ve worked</h2>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-violet/30 to-transparent sm:left-6" />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={item.period + item.title}
                className="relative pl-12 sm:pl-16"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-accent-cyan bg-bg-base sm:left-4.5" />
                <p className="font-mono text-sm text-accent-cyan">{item.period}</p>
                <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                <p className="text-text-muted">
                  {item.company} · {item.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((b) => (
                    <li
                      key={b.slice(0, 40)}
                      className="flex gap-2 text-sm text-text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-violet" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <h3 className="mt-16 text-2xl font-semibold">Education</h3>
        <div className="mt-8 space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="glass rounded-xl border border-white/5 p-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <p className="font-mono text-sm text-accent-cyan">{edu.period}</p>
              <p className="mt-1 font-semibold">{edu.degree}</p>
              <p className="text-sm text-text-muted">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
