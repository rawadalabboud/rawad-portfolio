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
      className={`glow-border glass rounded-2xl p-6 ${className}`}
      whileHover={
        hover
          ? {
              boxShadow: "0 0 40px rgba(34, 211, 238, 0.12)",
              y: -2,
            }
          : undefined
      }
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
