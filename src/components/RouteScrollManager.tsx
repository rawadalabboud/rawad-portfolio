import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  isHomePath,
  resetScrollInstant,
  scrollToSection,
  shouldPreserveHomeScroll,
} from "../lib/scroll";

export function RouteScrollManager() {
  const location = useLocation();
  const lastNavigationKeyRef = useRef(location.key);

  if (lastNavigationKeyRef.current !== location.key) {
    lastNavigationKeyRef.current = location.key;

    if (!shouldPreserveHomeScroll(location.pathname, location.hash)) {
      resetScrollInstant();
    }
  }

  useLayoutEffect(() => {
    if (shouldPreserveHomeScroll(location.pathname, location.hash)) {
      const sectionId = location.hash.replace("#", "");
      scrollToSection(sectionId, "auto");
      return;
    }

    if (!isHomePath(location.pathname)) {
      resetScrollInstant();
    }
  }, [location.hash, location.key, location.pathname]);

  return null;
}
