import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/nav";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../lib/scroll";
import { Logo } from "./ui/Logo";

function isHomePath(pathname: string) {
  return pathname === "/" || pathname === "";
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const sectionActive = useActiveSection();
  const onHome = isHomePath(location.pathname);

  const isLinkActive = (href: string, kind: "section" | "route") => {
    if (kind === "route") {
      return location.pathname === href;
    }
    const sectionId = href.replace("#", "");
    if (sectionId === "blogs" && location.pathname.startsWith("/blog/")) {
      return true;
    }
    if (!onHome) return false;
    return sectionActive === sectionId;
  };

  const handleSectionNav = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    if (onHome) {
      scrollToSection(id);
      return;
    }
    navigate({ pathname: "/", hash: id });
  };

  const navLinkClass = (active: boolean) =>
    `rounded-full px-3.5 py-2 text-sm transition-all ${
      active
        ? "bg-accent-cyan/12 text-accent-cyan shadow-[0_0_20px_rgba(224,122,106,0.12)]"
        : "text-text-muted hover:text-text-primary"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2 sm:px-5">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-mono text-sm tracking-tight text-text-primary"
        >
          <Logo size={28} />
          <span className="hidden sm:inline">
            rawad<span className="text-accent-cyan">.</span>ai
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href, link.kind);
            if (link.kind === "route") {
              return (
                <li key={link.href}>
                  <Link to={link.href} className={navLinkClass(active)}>
                    {link.label}
                  </Link>
                </li>
              );
            }
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionNav(link.href);
                  }}
                  className={navLinkClass(active)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="rounded-full p-2 text-text-muted hover:bg-white/[0.05] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden"
          >
            <ul className="flex flex-col gap-0.5">
              {navLinks.map((link) => {
                if (link.kind === "route") {
                  return (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-3 py-2.5 text-sm text-text-muted hover:bg-white/[0.04] hover:text-text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSectionNav(link.href);
                      }}
                      className="block rounded-xl px-3 py-2.5 text-sm text-text-muted hover:bg-white/[0.04] hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
