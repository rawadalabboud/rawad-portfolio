import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./ui/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-bg-muted py-14">
      <div className="section-container flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-serif text-xl text-text-primary">Rawad Al Abboud</p>
          <p className="mt-1 text-sm text-text-muted">
            ML/AI engineer · {profile.location}
          </p>
        </div>
        <div className="flex gap-2">
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
          <a href="#contact" className="btn-ghost !px-4 text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
