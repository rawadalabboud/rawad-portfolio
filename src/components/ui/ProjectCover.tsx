import { motion } from "framer-motion";
import {
  Phone,
  Mic,
  MessageSquare,
  Plug,
  GitBranch,
  Activity,
} from "lucide-react";

const coverMap: Record<
  string,
  { icon: typeof Phone; gradient: string; label: string }
> = {
  phone: {
    icon: Phone,
    gradient: "from-cyan-500/30 via-blue-600/20 to-violet-600/30",
    label: "C2C · Voice",
  },
  microphone: {
    icon: Mic,
    gradient: "from-violet-500/30 via-purple-600/20 to-cyan-500/30",
    label: "Voice AI",
  },
  chat: {
    icon: MessageSquare,
    gradient: "from-teal-500/30 via-cyan-600/20 to-blue-600/30",
    label: "RAG · Chat",
  },
  api: {
    icon: Plug,
    gradient: "from-blue-500/30 via-indigo-600/20 to-violet-500/30",
    label: "MCP · APIs",
  },
  routing: {
    icon: GitBranch,
    gradient: "from-emerald-500/30 via-teal-600/20 to-cyan-500/30",
    label: "ML · Routing",
  },
  eeg: {
    icon: Activity,
    gradient: "from-pink-500/20 via-violet-600/20 to-cyan-500/30",
    label: "Research · EEG",
  },
};

type ProjectCoverProps = {
  coverId: string;
};

export function ProjectCover({ coverId }: ProjectCoverProps) {
  const config = coverMap[coverId] ?? coverMap.phone;
  const Icon = config.icon;

  return (
    <div
      className={`relative flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${config.gradient}`}
    >
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, rgba(34,211,238,0.4), transparent 50%), radial-gradient(circle at 70% 60%, rgba(139,92,246,0.3), transparent 50%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <Icon className="relative z-10 h-14 w-14 text-white/80" strokeWidth={1.25} />
      <span className="absolute bottom-3 left-3 font-mono text-xs text-white/60">
        {config.label}
      </span>
    </div>
  );
}
