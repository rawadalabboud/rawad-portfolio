import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { CvLinks } from "./ui/CvLinks";
import { SectionLabel } from "./ui/SectionLabel";
import { GitHubIcon, LinkedInIcon } from "./ui/SocialIcons";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <SectionLabel label="contact" />
        <h2 className="section-heading mt-4">Get in touch</h2>
        <p className="mt-4 max-w-xl text-text-muted">
          Open to AI engineering, ML engineering, and GenAI roles. Reach out
          via LinkedIn, email, or download my CV.
        </p>

        <motion.div
          className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-text-muted">
              <MapPin className="h-4 w-4 shrink-0 text-accent-cyan" />
              {profile.location}
            </p>
            <a
              href={`mailto:${profile.contactEmail}`}
              className="flex items-center gap-3 text-text-muted transition hover:text-accent-cyan"
            >
              <Mail className="h-4 w-4 shrink-0 text-accent-cyan" />
              {profile.contactEmail}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            <CvLinks />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
