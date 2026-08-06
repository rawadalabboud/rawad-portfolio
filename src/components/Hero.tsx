import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { publicUrl } from "../lib/publicUrl";
import { scrollToSection } from "../lib/scroll";
import { CvLinks } from "./ui/CvLinks";
import { GitHubIcon, LinkedInIcon } from "./ui/SocialIcons";
import { Tag } from "./ui/Tag";

export function Hero() {
  const handleSectionNav = (
    e: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <section id="home" className="relative pt-28 pb-20 sm:pb-24">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
              AI Engineer · ML Engineer · GenAI Engineer
            </p>

            <h1 className="font-serif text-[2.5rem] leading-[1.05] tracking-tight text-text-primary sm:text-5xl lg:text-[3.75rem]">
              {profile.heroHeadline}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted sm:text-xl">
              {profile.tagline}
            </p>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-text-muted/80">
              Voice agents, RAG pipelines, MCP apps, and ML models, built
              end-to-end and deployed in production at{" "}
              <span className="text-text-primary">Hipto</span>.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {profile.profileTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => handleSectionNav(e, "projects")}
                className="btn-primary"
              >
                View production work
                <ArrowRight size={16} />
              </a>
              <CvLinks />
              <a
                href="#contact"
                onClick={(e) => handleSectionNav(e, "contact")}
                className="btn-secondary"
              >
                <Mail size={16} />
                Contact
              </a>
            </div>

            <div className="mt-6 flex gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-3"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-3"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-white/[0.08] bg-bg-card">
              <div className="p-6 pt-8">
                <div className="relative mx-auto mb-5 h-32 w-32">
                  <div className="absolute inset-0 overflow-hidden rounded-full ring-1 ring-white/10">
                    <img
                      src={publicUrl(profile.profileImage)}
                      alt={profile.name}
                      width={128}
                      height={128}
                      className="h-full w-full scale-[1.12] object-cover object-[center_18%]"
                    />
                  </div>
                </div>

                <h2 className="text-center text-xl font-semibold text-text-primary">
                  {profile.name}
                </h2>
                <p className="mt-1 text-center font-mono text-xs text-text-muted">
                  {profile.handle} · Paris
                </p>

                <div className="mt-5 flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-status/20 bg-status/8 px-3.5 py-1.5 font-mono text-xs text-status">
                    <span className="h-1.5 w-1.5 rounded-full bg-status" />
                    {profile.statusBadge}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
