import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "loading projects...",
  "warming up the models...",
  "checking the pipelines...",
  "almost there...",
  "ready.",
];

type BootScreenProps = {
  onComplete: () => void;
};

export function BootScreen({ onComplete }: BootScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 2;
      });
    }, 45);

    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, 400 + i * 350);
    });

    const doneTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-base font-mono"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-md px-8">
          <p className="mb-4 text-accent-cyan">
            <span className="text-text-muted">&gt; </span>
            booting portfolio
          </p>

          <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <p className="mb-4 text-right text-sm text-text-muted">{progress}%</p>

          <div className="space-y-1 text-sm text-text-muted">
            {visibleLines.map((line) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="text-accent-cyan/60">→ </span>
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
