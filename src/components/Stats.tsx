import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../data/stats";
import { useCountUp } from "../hooks/useCountUp";

function StatItem({
  value,
  suffix = "",
  label,
  enabled,
}: {
  value: number;
  suffix?: string;
  label: string;
  enabled: boolean;
}) {
  const count = useCountUp(value, enabled);

  return (
    <motion.div
      className="glow-border rounded-2xl p-6 text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <p className="font-serif text-4xl sm:text-5xl">
        <span className="accent-number">
          {count}
          {suffix}
        </span>
      </p>
      <p className="mt-2 text-sm text-text-muted">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-band py-14">
      <div className="section-container">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={"suffix" in stat ? stat.suffix : ""}
              label={stat.label}
              enabled={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
