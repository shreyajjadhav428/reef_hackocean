import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const chapters = [
  { id: "surface", label: "Surface", lines: ["Surface"], sectionId: "chapter-hero" },
  { id: "coral", label: "Coral Reef", lines: ["Coral", "Reef"], sectionId: "chapter-coral" },
  { id: "threat", label: "Threat Zone", lines: ["Threat", "Zone"], sectionId: "chapter-threat" },
  { id: "hope", label: "Hope", lines: ["Hope"], sectionId: "chapter-hope" },
];

const ChapterScroller = () => {
  const [activeChapter, setActiveChapter] = useState("surface");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear starting from the Dive In section (#chapter-dive) and hide on Home/Hero top section
      const diveEl = document.getElementById("chapter-dive");
      if (diveEl) {
        const diveTop = diveEl.offsetTop - 250;
        if (window.scrollY >= diveTop) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      // Track active chapter as user scrolls down
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      const coralEl = document.getElementById("chapter-coral");
      const threatEl = document.getElementById("chapter-threat");
      const hopeEl = document.getElementById("chapter-hope");

      if (hopeEl && scrollPos >= hopeEl.offsetTop) {
        setActiveChapter("hope");
      } else if (threatEl && scrollPos >= threatEl.offsetTop) {
        setActiveChapter("threat");
      } else if (coralEl && scrollPos >= coralEl.offsetTop) {
        setActiveChapter("coral");
      } else {
        setActiveChapter("surface");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed right-0 top-0 bottom-0 h-screen z-40 select-none pointer-events-auto hidden sm:flex items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-start h-full py-12 sm:py-20 px-3 sm:px-4 lg:px-5 rounded-l-2xl backdrop-blur-md bg-slate-950/70 border-l border-amber-400/25 shadow-[0_0_30px_rgba(0,0,0,0.85)] w-[150px] sm:w-[170px] min-w-[150px] sm:min-w-[170px]"
          >
            {/* Full Screen Height Vertical Connecting Line */}
            <div className="w-[2px] bg-gradient-to-b from-amber-400/20 via-amber-400/70 to-amber-400/20 absolute top-10 bottom-10 left-[22px] sm:left-[26px] lg:left-[30px] -translate-x-1/2 z-0" />

            <div className="flex-1 flex flex-col justify-evenly relative z-10 w-full">
              {chapters.map((ch) => {
                const isActive = activeChapter === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => scrollToSection(ch.sectionId)}
                    className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer text-left focus:outline-none transition-all duration-300 py-1"
                  >
                    {/* Circle Dot Indicator */}
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      {isActive ? (
                        <motion.div
                          layoutId="activeDotScroller"
                          className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.95)] ring-2 ring-amber-400/50 scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-3 h-3 rounded-full border-2 border-slate-400/70 bg-slate-900/80 group-hover:border-amber-300 transition-colors" />
                      )}
                    </div>

                    {/* Text Label - One word per line */}
                    <div
                      className={`flex flex-col leading-tight font-serif transition-all duration-300 ${
                        isActive
                          ? "text-sm sm:text-base lg:text-lg font-extrabold text-amber-300 tracking-wide scale-105 origin-left drop-shadow-[0_0_12px_rgba(251,191,36,0.85)]"
                          : "text-xs sm:text-sm lg:text-base font-medium text-slate-300/75 group-hover:text-slate-100"
                      }`}
                    >
                      {ch.lines.map((line, idx) => (
                        <span key={idx} className="block">
                          {line}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ChapterScroller;
