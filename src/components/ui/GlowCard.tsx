import type { ReactNode } from "react";
import { motion } from "framer-motion";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlowCard({ children, className = "", hover = true }: GlowCardProps) {
  return (
    <motion.div
      className={`glow-border rounded-2xl p-6 ${className}`}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow:
                "0 32px 64px rgba(0, 0, 0, 0.45), 0 0 48px rgba(224, 122, 106, 0.08)",
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
