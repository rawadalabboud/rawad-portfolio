export type NavLink = {
  label: string;
  href: string;
  kind: "section" | "route";
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", kind: "section" },
  { label: "Projects", href: "#projects", kind: "section" },
  { label: "About", href: "#about", kind: "section" },
  { label: "Research", href: "#research", kind: "section" },
  { label: "Experience", href: "#experience", kind: "section" },
  { label: "Blogs", href: "#blogs", kind: "section" },
  { label: "Open source", href: "#open-source", kind: "section" },
  { label: "Contact", href: "#contact", kind: "section" },
];
