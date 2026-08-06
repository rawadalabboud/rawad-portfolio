export type NavLink = {
  label: string;
  href: string;
  kind: "section" | "route";
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#projects", kind: "section" },
  { label: "About", href: "#about", kind: "section" },
  { label: "Skills", href: "#skills", kind: "section" },
  { label: "Experience", href: "#experience", kind: "section" },
  { label: "Azure AI", href: "#microsoft-ai", kind: "section" },
  { label: "Research", href: "#research", kind: "section" },
  { label: "Contact", href: "#contact", kind: "section" },
];
