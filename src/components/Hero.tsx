import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { profile } from "../data/profile";
import { publicUrl } from "../lib/publicUrl";
import { scrollToSection } from "../lib/scroll";
import { CvLinks } from "./ui/CvLinks";
import { GradientText } from "./ui/GradientText";
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
      className="relative min-h-screen grid-bg pt-28 pb-16"
    >
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 font-mono text-text-muted">
              {profile.heroGreeting}
            </p>
            <GradientText
              as="h1"
              className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </GradientText>
            <p className="mb-4 text-lg text-text-muted sm:text-xl">
              {profile.heroSubtitle}
            </p>
            <p className="mb-8 max-w-xl text-text-muted leading-relaxed">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={(e) => handleSectionNav(e, "projects")}
                className="inline-flex items-center gap-2 rounded-xl bg-accent-cyan/15 px-5 py-2.5 text-sm font-medium text-accent-cyan ring-1 ring-accent-cyan/30 transition hover:bg-accent-cyan/25"
              >
                View Projects
                <ArrowDown size={16} />
              </a>
              <CvLinks />
              <a
                href="#contact"
                onClick={(e) => handleSectionNav(e, "contact")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-text-primary transition hover:border-accent-violet/40"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-text-muted transition hover:text-accent-cyan"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-text-muted transition hover:text-accent-cyan"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
            </div>
          </motion.div>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="glow-border glass w-full max-w-sm rounded-2xl p-6"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full ring-2 ring-accent-cyan/40 ring-offset-2 ring-offset-bg-elev">
                <img
                  src={publicUrl(profile.profileImage)}
                  alt={profile.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <h2 className="text-center text-xl font-semibold">{profile.name}</h2>
              <p className="mt-1 text-center font-mono text-sm text-text-muted">
                {profile.handle} · AI Engineer
              </p>
              <p className="mt-1 text-center text-sm text-text-muted">
                Paris · France
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {profile.profileTags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="mt-5 flex justify-center">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
                  {profile.statusBadge}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
