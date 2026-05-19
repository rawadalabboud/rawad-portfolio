import { useEffect, useState } from "react";

export function useCountUp(
  target: number,
  enabled: boolean,
  duration = 1500
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, enabled, duration]);

  return count;
}
