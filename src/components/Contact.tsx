import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/profile";
import { CvLinks } from "./ui/CvLinks";
import { SectionLabel } from "./ui/SectionLabel";
import { GitHubIcon, LinkedInIcon } from "./ui/SocialIcons";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `From: ${form.name} (${form.email})\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || "Portfolio contact");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <SectionLabel label="// contact" />
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-2xl text-text-muted">
          I&apos;m looking for roles in AI, data science, and GenAI, especially
          work involving LLMs, voice agents, RAG, or predictive modeling. Drop
          me a line.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-text-muted transition hover:text-accent-cyan"
            >
              <Mail className="h-5 w-5 shrink-0 text-accent-cyan" />
              {profile.email}
            </a>
            <p className="flex items-center gap-3 text-text-muted">
              <Phone className="h-5 w-5 shrink-0 text-accent-cyan" />
              {profile.phone}
            </p>
            <p className="flex items-center gap-3 text-text-muted">
              <MapPin className="h-5 w-5 shrink-0 text-accent-cyan" />
              {profile.location}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={profile.links.github}
                className="glass rounded-xl p-3 text-text-muted transition hover:text-accent-cyan"
                aria-label="GitHub"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href={profile.links.linkedin}
                className="glass rounded-xl p-3 text-text-muted transition hover:text-accent-cyan"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="glass rounded-xl p-3 text-text-muted transition hover:text-accent-cyan"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <CvLinks variant="icons" />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <CvLinks />
            </div>

            <p className="pt-2 text-xs text-text-muted/80">
              This form opens your email client. No backend, no tracking.
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
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-bg-base/50 px-4 py-2.5 text-sm outline-none focus:border-accent-cyan/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-bg-base/50 px-4 py-2.5 text-sm outline-none focus:border-accent-cyan/50"
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
                className="w-full rounded-lg border border-white/10 bg-bg-base/50 px-4 py-2.5 text-sm outline-none focus:border-accent-cyan/50"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-white/10 bg-bg-base/50 px-4 py-2.5 text-sm outline-none focus:border-accent-cyan/50"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-accent-cyan/15 py-3 text-sm font-medium text-accent-cyan ring-1 ring-accent-cyan/30 transition hover:bg-accent-cyan/25"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
