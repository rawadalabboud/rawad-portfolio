const NAV_OFFSET_PX = 88;

export function resetScrollInstant() {
  if (typeof window === "undefined") return;

  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function scrollToTop(behavior: ScrollBehavior = "auto") {
  if (behavior === "auto") {
    resetScrollInstant();
    return;
  }

  window.scrollTo({ top: 0, left: 0, behavior });
}

export function scrollToSection(id: string, behavior: ScrollBehavior = "auto") {
  const el = document.getElementById(id);
  if (!el) return false;

  const top =
    window.scrollY + el.getBoundingClientRect().top - NAV_OFFSET_PX;

  if (behavior === "auto") {
    window.scrollTo(0, Math.max(0, top));
    document.documentElement.scrollTop = Math.max(0, top);
    document.body.scrollTop = Math.max(0, top);
    return true;
  }

  window.scrollTo({
    top: Math.max(0, top),
    left: 0,
    behavior,
  });
  return true;
}

export function isHomePath(pathname: string) {
  return pathname === "/" || pathname === "";
}

export function shouldPreserveHomeScroll(pathname: string, hash: string) {
  return isHomePath(pathname) && hash.length > 0;
}
