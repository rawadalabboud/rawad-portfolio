import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { CvLinks } from "./ui/CvLinks";
import { SectionLabel } from "./ui/SectionLabel";
import { GitHubIcon, LinkedInIcon } from "./ui/SocialIcons";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(form.message);
    const baseSubject = form.subject.trim() || "Portfolio contact";
    const subject = encodeURIComponent(`${baseSubject} - ${form.name}`);
    window.location.href = `mailto:${profile.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <SectionLabel label="contact" />
        <h2 className="section-heading mt-4">Get in touch</h2>
        <p className="mt-4 max-w-2xl text-text-muted">
          I&apos;m looking for roles in AI, data science, and GenAI, especially
          work involving LLMs, voice agents, RAG, or predictive modeling. Use
          the form; it opens a pre-addressed email to me.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-text-muted">
              <MapPin className="h-5 w-5 shrink-0 text-accent-cyan" />
              {profile.location}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-3 text-text-muted transition hover:text-accent-cyan"
                aria-label="GitHub"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-3 text-text-muted transition hover:text-accent-cyan"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
              <CvLinks variant="icons" />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <CvLinks />
            </div>

            <p className="pt-2 text-xs text-text-muted/80">
              No backend, no tracking. Your email app opens with the message
              ready. Just review and send.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass glow-border space-y-4 rounded-2xl p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-text-muted">
                Your name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-bg-base/60 px-4 py-2.5 text-sm outline-none transition focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/15"
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1 block text-sm text-text-muted">
                Subject
              </label>
              <input
                id="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-bg-base/60 px-4 py-2.5 text-sm outline-none transition focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/15"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Include how to reach you if you'd like a reply."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-white/10 bg-bg-base/60 px-4 py-2.5 text-sm outline-none transition placeholder:text-text-muted/50 focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/15"
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full justify-center py-3"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
