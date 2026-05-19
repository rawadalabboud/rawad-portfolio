import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { BootScreen } from "./components/BootScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Writing } from "./components/Writing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [booting, setBooting] = useState(true);

  const handleBootComplete = useCallback(() => {
    setBooting(false);
  }, []);

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
            <ExperienceTimeline />
            <Writing />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
