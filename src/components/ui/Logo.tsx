import { useId } from "react";

type LogoProps = {
  size?: number;
  className?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
};

export function Logo({
  size = 32,
  className = "",
  showWordmark = false,
  wordmarkClassName = "h-8",
}: LogoProps) {
  const id = useId().replace(/:/g, "");
  const emberId = `ra-ember-${id}`;
  const pulseId = `ra-pulse-${id}`;

  if (showWordmark) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}brand/logo-wordmark.svg`}
        alt="rawad.ai"
        className={`w-auto ${wordmarkClassName} ${className}`}
        width={210}
        height={48}
      />
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={emberId} x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4A99C" />
          <stop offset="1" stopColor="#E07A6A" />
        </linearGradient>
        <linearGradient id={pulseId} x1="8" y1="8" x2="28" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EDE9FE" />
          <stop offset="0.5" stopColor="#A78BFA" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
        <filter id={`${id}-ember-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Signal pulse: voice, EEG, streaming output */}
      <path
        d="M8.5 18 L12.5 10.5 L16.5 18 L20.5 10.5 L24.5 18"
        stroke={`url(#${pulseId})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g filter={`url(#${id}-ember-glow)`}>
        <path
          d="M12.5 37V14.5"
          stroke={`url(#${emberId})`}
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <path
          d="M12.5 14.5C12.5 10.5 16 9 19.5 11.5C24 14.5 28.5 19 28.5 24.5C28.5 32 22.5 36.5 16 34"
          stroke={`url(#${emberId})`}
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M12.5 24 29.5 37"
          stroke={`url(#${emberId})`}
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <circle cx="12.5" cy="24" r="2.85" fill="#E07A6A" />
      </g>
    </svg>
  );
}
