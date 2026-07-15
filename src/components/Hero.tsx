import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { publicUrl } from "../lib/publicUrl";
import { scrollToSection } from "../lib/scroll";
import { CvLinks } from "./ui/CvLinks";
import { Logo } from "./ui/Logo";
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
    <section
      id="home"
      className="ambient-bg relative min-h-screen pt-28 pb-24"
    >
      <div
        className="mesh-blob -right-32 top-20 h-96 w-96 bg-accent-cyan/10 animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="mesh-blob -left-24 bottom-32 h-72 w-72 bg-accent-violet/8"
        aria-hidden="true"
      />

      <div className="section-container">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-12 flex items-center gap-4">
              <Logo size={56} className="shrink-0 drop-shadow-[0_0_20px_rgba(224,122,106,0.25)]" />
              <div className="h-9 w-px bg-gradient-to-b from-accent-cyan/40 to-transparent" aria-hidden="true" />
              <div>
                <p className="font-mono text-base tracking-tight text-text-primary">
                  rawad<span className="text-accent-cyan">.</span>ai
                </p>
                <p className="mt-0.5 text-sm text-text-muted">ML/AI · GenAI · Paris</p>
              </div>
            </div>

            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
              {profile.heroGreeting}
            </p>

            <h1 className="font-serif text-[2.85rem] leading-[0.98] tracking-tight text-text-primary sm:text-6xl lg:text-[4.5rem]">
              {profile.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic text-accent-cyan">
                {profile.name.split(" ").slice(-1)}
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-text-muted sm:text-xl">
              {profile.heroSubtitle}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted/85">
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => handleSectionNav(e, "projects")}
                className="btn-primary"
              >
                View work
                <ArrowRight size={16} />
              </a>
              <CvLinks />
              <a
                href="#contact"
                onClick={(e) => handleSectionNav(e, "contact")}
                className="btn-secondary"
              >
                <Mail size={16} />
                Get in touch
              </a>
            </div>

            <div className="mt-8 flex gap-2">
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
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="glow-border w-full max-w-sm overflow-hidden rounded-2xl animate-float">
              <div className="relative p-6 pt-8">
                <div className="relative mx-auto mb-6 h-36 w-36">
                  <div
                    className="absolute inset-[-6px] rounded-full border border-accent-violet/25"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 overflow-hidden rounded-full ring-1 ring-accent-cyan/25 ring-offset-4 ring-offset-bg-card">
                    <img
                      src={publicUrl(profile.profileImage)}
                      alt={profile.name}
                      className="h-full w-full scale-[1.12] object-cover object-[center_18%]"
                    />
                  </div>
                  <div
                    className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(224,122,106,0.6)]"
                    aria-hidden="true"
                  />
                </div>

                <h2 className="text-center font-serif text-2xl text-text-primary">
                  {profile.name}
                </h2>
                <p className="mt-1 text-center font-mono text-xs text-text-muted">
                  {profile.handle}
                </p>
                <p className="mt-1 text-center text-sm text-text-muted">
                  Paris, France
                </p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {profile.profileTags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-status/20 bg-status/8 px-4 py-1.5 font-mono text-xs text-status">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-status" />
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
