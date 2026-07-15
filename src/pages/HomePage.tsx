import { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { BootScreen } from "../components/BootScreen";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { ResearchWork } from "../components/ResearchWork";
import { Blogs } from "../components/Blogs";
import { OpenSource } from "../components/OpenSource";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { scrollToSection } from "../lib/scroll";

const BOOT_KEY = "portfolio-booted";

type HomeLocationState = {
  scrollTo?: string;
};

export function HomePage() {
  const location = useLocation();
  const [booting, setBooting] = useState(
    () => sessionStorage.getItem(BOOT_KEY) !== "1"
  );

  const handleBootComplete = useCallback(() => {
    sessionStorage.setItem(BOOT_KEY, "1");
    setBooting(false);
  }, []);

  useEffect(() => {
    if (booting) return;

    const hashId = location.hash.replace("#", "");
    const state = location.state as HomeLocationState | null;
    const targetId = hashId || state?.scrollTo;

    if (!targetId) return;

    const timer = window.setTimeout(() => {
      scrollToSection(targetId);
    }, 50);

    return () => window.clearTimeout(timer);
  }, [booting, location.hash, location.state]);

  return (
    <>
      <AnimatePresence mode="wait">
        {booting && <BootScreen key="boot" onComplete={handleBootComplete} />}
      </AnimatePresence>

      {!booting && (
        <div className="min-h-screen bg-bg-base">
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <Projects />
            <About />
            <Skills />
            <ResearchWork />
            <ExperienceTimeline />
            <Blogs />
            <OpenSource />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
