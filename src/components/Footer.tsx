import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./ui/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-sm text-text-muted sm:text-left">
          © Rawad Al Abboud. Built with code, data, and too much coffee.
        </p>
        <div className="flex gap-4">
          <a
            href={profile.links.github}
            className="text-text-muted transition hover:text-accent-cyan"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            className="text-text-muted transition hover:text-accent-cyan"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-text-muted transition hover:text-accent-cyan"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
