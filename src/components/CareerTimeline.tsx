import { motion } from "framer-motion";
import { careerTimeline } from "../data/timeline";
import { SectionLabel } from "./ui/SectionLabel";
import { Tag } from "./ui/Tag";

export function CareerTimeline() {
  return (
    <section id="timeline" className="py-24">
      <div className="section-container">
        <SectionLabel label="journey" />
        <h2 className="section-heading mt-4">Career timeline</h2>
        <p className="mt-3 max-w-2xl text-text-muted">
          From engineering in Lebanon to signal processing at Paris-Saclay,
          through biomedical research, to shipping production AI systems.
        </p>

        <div className="relative mt-12">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 sm:left-1/2 sm:-ml-px"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {careerTimeline.map((phase, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={phase.id}
                  className={`relative flex flex-col sm:flex-row ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="hidden flex-1 sm:block" />

                  <div
                    className="absolute left-0 top-1.5 z-10 h-3.5 w-3.5 rounded-full border-2 border-accent-cyan bg-bg-base sm:left-1/2 sm:-ml-[7px]"
                    aria-hidden="true"
                  />

                  <div
                    className={`flex-1 pl-8 sm:pl-0 ${
                      isEven ? "sm:pr-10 sm:text-right" : "sm:pl-10"
                    }`}
                  >
                    <div className="rounded-2xl border border-white/[0.06] bg-bg-card p-5 sm:p-6">
                      <p className="font-mono text-xs text-accent-cyan">
                        {phase.period}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-text-primary">
                        {phase.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-text-muted">
                        {phase.subtitle}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-text-muted">
                        {phase.description}
                      </p>
                      <div
                        className={`mt-4 flex flex-wrap gap-1.5 ${
                          isEven ? "sm:justify-end" : ""
                        }`}
                      >
                        {phase.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
