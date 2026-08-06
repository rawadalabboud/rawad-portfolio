import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Cloud,
  Code2,
  Container,
  Database,
  Globe,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  llm: Sparkles,
  ml: Brain,
  backend: Code2,
  cloud: Cloud,
  devops: Container,
  database: Database,
  language: Globe,
};

export function getSkillGroupIcon(key: string): LucideIcon {
  return iconMap[key] ?? Sparkles;
}

const simpleIconSlugs: Record<string, string> = {
  openai: "openai",
  openaiapi: "openai",
  azure: "microsoftazure",
  azureopenai: "microsoftazure",
  azureaifoundry: "microsoftazure",
  azureaisearch: "microsoftazure",
  promptflow: "microsoftazure",
  python: "python",
  typescript: "typescript",
  nestjs: "nestjs",
  nodedotjs: "nodedotjs",
  nodejs: "nodedotjs",
  fastapi: "fastapi",
  react: "react",
  nextdotjs: "nextdotjs",
  nextjs: "nextdotjs",
  googlecloud: "googlecloud",
  googleappengine: "googlecloud",
  bigquery: "googlecloud",
  redis: "redis",
  upstashredis: "redis",
  postgresql: "postgresql",
  docker: "docker",
  githubactions: "githubactions",
  github: "github",
  catboost: "catboost",
};

type TechIconProps = {
  name: string;
  slug?: string;
  size?: number;
  className?: string;
};

function resolveSlug(name: string, slug?: string): string | undefined {
  if (slug) return slug;
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return simpleIconSlugs[normalized];
}

export function TechIcon({ name, slug, size = 16, className = "" }: TechIconProps) {
  const iconSlug = resolveSlug(name, slug);

  if (!iconSlug) {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-md bg-white/[0.06] font-mono text-[10px] font-medium text-text-muted ${className}`}
        style={{ width: size + 4, height: size + 4 }}
        aria-hidden="true"
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${iconSlug}.svg`}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 opacity-70 invert ${className}`}
      loading="lazy"
      decoding="async"
      aria-hidden="true"
    />
  );
}

export { simpleIconSlugs };
