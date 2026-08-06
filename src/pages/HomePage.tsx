import { useState, useCallback, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { BootScreen } from "../components/BootScreen";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { CareerTimeline } from "../components/CareerTimeline";
import { Skills } from "../components/Skills";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { MicrosoftAIJourney } from "../components/MicrosoftAIJourney";
import { ResearchWork } from "../components/ResearchWork";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { SeoHead } from "../components/SeoHead";
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

  useLayoutEffect(() => {
    if (booting) return;

    const hashId = location.hash.replace("#", "");
    const state = location.state as HomeLocationState | null;
    const targetId = hashId || state?.scrollTo;

    if (!targetId) return;

    scrollToSection(targetId, "auto");
  }, [booting, location.hash, location.state]);

  return (
    <>
      <SeoHead />
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
            <CareerTimeline />
            <Skills />
            <ExperienceTimeline />
            <MicrosoftAIJourney />
            <ResearchWork />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
