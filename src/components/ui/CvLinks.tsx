import { Download, Eye } from "lucide-react";
import { profile } from "../../data/profile";
import { publicUrl } from "../../lib/publicUrl";

const cvUrl = publicUrl(profile.cvPath);

type CvLinksProps = {
  variant?: "buttons" | "icons";
};

export function CvLinks({ variant = "buttons" }: CvLinksProps) {
  if (variant === "icons") {
    return (
      <>
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="glass rounded-xl p-3 text-text-muted transition hover:text-accent-cyan"
          aria-label="View Resume"
        >
          <Eye size={20} />
        </a>
        <a
          href={cvUrl}
          download={profile.cvDownloadName}
          className="glass rounded-xl p-3 text-text-muted transition hover:text-accent-cyan"
          aria-label="Download Resume"
        >
          <Download size={20} />
        </a>
      </>
    );
  }

  return (
    <>
      <a
        href={cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-text-primary transition hover:border-accent-cyan/30 hover:text-accent-cyan"
      >
        <Eye size={16} />
        View Resume
      </a>
      <a
        href={cvUrl}
        download={profile.cvDownloadName}
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-text-primary transition hover:border-accent-cyan/30 hover:text-accent-cyan"
      >
        <Download size={16} />
        Download Resume
      </a>
    </>
  );
}
