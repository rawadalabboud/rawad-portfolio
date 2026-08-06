import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../data/stats";
import { useCountUp } from "../hooks/useCountUp";

function formatCount(value: number, prefix = "", suffix = ""): string {
  if (suffix.startsWith("k")) {
    return `${prefix}${value}${suffix}`;
  }
  return `${prefix}${value.toLocaleString("en-US")}${suffix}`;
}

function StatItem({
  value,
  suffix = "",
  prefix = "",
  label,
  detail,
  enabled,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail?: string;
  enabled: boolean;
}) {
  const count = useCountUp(value, enabled);

  return (
    <motion.div
      className="rounded-2xl border border-white/[0.06] bg-bg-card p-5 sm:p-6"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      <p className="font-serif text-3xl tracking-tight text-text-primary sm:text-4xl">
        {formatCount(count, prefix, suffix)}
      </p>
      <p className="mt-1.5 text-sm font-medium text-text-primary">{label}</p>
      {detail && (
        <p className="mt-0.5 text-xs text-text-muted">{detail}</p>
      )}
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="border-y border-white/[0.04] bg-bg-muted py-12 sm:py-14">
      <div className="section-container">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              detail={stat.detail}
              enabled={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
