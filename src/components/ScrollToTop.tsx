import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../lib/scroll";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (hash) return;
    scrollToTop("auto");
  }, [pathname, hash]);

  return null;
}
