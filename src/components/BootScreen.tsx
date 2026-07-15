import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./ui/Logo";

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
          <div className="mb-8 flex flex-col items-center gap-4">
            <Logo size={56} />
            <p className="text-sm tracking-tight text-text-muted">rawad.ai</p>
          </div>

          <div className="mb-4 h-px w-full overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="h-full bg-accent-cyan"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <p className="mb-6 text-right text-xs text-text-muted">{progress}%</p>

          <div className="space-y-1.5 text-sm text-text-muted">
            {visibleLines.map((line) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="text-accent-cyan/70">→ </span>
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
