import type { LucideIcon } from "lucide-react";
import {
  AudioLines,
  Brain,
  MapPinned,
  MessageSquareText,
  PhoneCall,
  Route,
} from "lucide-react";

type CoverConfig = {
  icon: LucideIcon;
  label: string;
  accent: "gold" | "coral" | "green";
};

const accentStyles = {
  gold: {
    icon: "text-accent-cyan",
    ring: "border-accent-cyan/25",
    glow: "bg-accent-cyan/12",
    dot: "bg-accent-cyan/40",
    label: "text-accent-cyan/80",
  },
  coral: {
    icon: "text-accent-violet",
    ring: "border-accent-violet/25",
    glow: "bg-accent-violet/12",
    dot: "bg-accent-violet/40",
    label: "text-accent-violet/80",
  },
  green: {
    icon: "text-status",
    ring: "border-status/25",
    glow: "bg-status/12",
    dot: "bg-status/40",
    label: "text-status/80",
  },
} as const;

const covers: Record<string, CoverConfig> = {
  "c2c-tracking": {
    icon: PhoneCall,
    label: "C2C · voice · attribution",
    accent: "gold",
  },
  "retell-voice-agents": {
    icon: AudioLines,
    label: "Retell · pipelines · webhooks",
    accent: "coral",
  },
  "webflow-rag": {
    icon: MessageSquareText,
    label: "RAG · Webflow · retrieval",
    accent: "gold",
  },
  "offer-hub": {
    icon: MapPinned,
    label: "MCP · Skybridge · widgets",
    accent: "coral",
  },
  "lead-routing-ml": {
    icon: Route,
    label: "ML · CatBoost · routing",
    accent: "green",
  },
  "eeg-research": {
    icon: Brain,
    label: "EEG · MNE · clinical data",
    accent: "coral",
  },
};

type ProjectCoverArtProps = {
  projectId: string;
};

export function ProjectCoverArt({ projectId }: ProjectCoverArtProps) {
  const cover = covers[projectId] ?? covers["c2c-tracking"];
  const styles = accentStyles[cover.accent];
  const Icon = cover.icon;

  return (
    <div className="relative h-full w-full overflow-hidden bg-bg-elev">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 38%, rgba(224, 122, 106, 0.08), transparent 58%),
            linear-gradient(rgba(244, 242, 237, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244, 242, 237, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 28px 28px, 28px 28px",
        }}
      />

      <div
        className={`pointer-events-none absolute left-1/2 top-[42%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl ${styles.glow}`}
      />

      <div className="absolute inset-0 flex items-center justify-center pb-5">
        <div
          className={`relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border ${styles.ring} bg-bg-card/80 shadow-[0_0_0_1px_rgba(244,242,237,0.04)] backdrop-blur-sm`}
        >
          <Icon className={`h-8 w-8 ${styles.icon}`} strokeWidth={1.75} />
        </div>
      </div>

      <p
        className={`absolute bottom-4 left-5 font-mono text-[11px] tracking-wide ${styles.label}`}
      >
        {cover.label}
      </p>
    </div>
  );
}
