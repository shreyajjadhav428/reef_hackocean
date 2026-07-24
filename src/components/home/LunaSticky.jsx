import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lunaSvg from "../../assets/svg/luna.svg";
import lunaAnxiousSvg from "../../assets/svg/luna anxious.svg";

const sectionDialogues = {
  dive: [
    "Hello... I'm Luna.",
    "Would you like to see the place I call home?",
    "Stay close... there's so much beneath the surface.",
  ],
  coral: [
    "Welcome to my world.",
    "Every coral here is alive... growing patiently for years.",
    "This reef isn't just beautiful... it's home to thousands of lives.",
    "I always hoped it would stay this way forever.",
  ],
  threat: [
    "But... something changed.",
    "The colors began to fade.",
    "The water became quieter than I had ever known.",
    "Plastic... broken corals... disappearing life...",
    "Sometimes I wonder if my home can recover.",
  ],
  hope: [
    "Wait... what's happening?",
    "You restored a piece of the reef.",
    "Life is returning... one coral at a time.",
    "Hope begins with someone willing to care.",
  ],
  action: [
    "My home still needs protectors.",
    "One small action today can protect countless lives tomorrow.",
    "Will you help write the next chapter of this reef?",
    "Thank you for listening to my story.",
    "Thank you... for helping protect the place I call home.",
  ],
};

const sceneBadges = {
  dive: "Dive In 🤿",
  coral: "Coral Reef 🪸",
  threat: "Threat Zone ⚠️",
  hope: "Restoration 🌱",
  action: "Take Action 💙",
};

const LunaSticky = () => {
  const [currentSection, setCurrentSection] = useState("dive");
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Section Tracking & Visibility (Appears from Dive In section onwards)
  useEffect(() => {
    const handleScroll = () => {
      const diveEl = document.getElementById("chapter-dive");
      if (diveEl) {
        const diveTop = diveEl.offsetTop - 250;
        if (window.scrollY >= diveTop) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      const coralEl = document.getElementById("chapter-coral");
      const threatEl = document.getElementById("chapter-threat");
      const hopeEl = document.getElementById("chapter-hope");
      const actionEl = document.getElementById("chapter-action");

      let detectedSection = "dive";
      if (actionEl && scrollPos >= actionEl.offsetTop) {
        detectedSection = "action";
      } else if (hopeEl && scrollPos >= hopeEl.offsetTop) {
        detectedSection = "hope";
      } else if (threatEl && scrollPos >= threatEl.offsetTop) {
        detectedSection = "threat";
      } else if (coralEl && scrollPos >= coralEl.offsetTop) {
        detectedSection = "coral";
      } else {
        detectedSection = "dive";
      }

      setCurrentSection((prev) => {
        if (prev !== detectedSection) {
          setDialogueIndex(0); // Reset line index when changing sections
        }
        return detectedSection;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatic Natural Dialogue Rhythm (2.2s per line)
  useEffect(() => {
    if (!isVisible) return;
    const dialogues = sectionDialogues[currentSection] || [];
    if (dialogueIndex < dialogues.length - 1) {
      const timer = setTimeout(() => {
        setDialogueIndex((prev) => prev + 1);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [currentSection, dialogueIndex, isVisible]);

  // Click on Speech Cloud to manually advance line
  const handleDialogueNext = (e) => {
    e.stopPropagation();
    const dialogues = sectionDialogues[currentSection] || [];
    if (dialogueIndex < dialogues.length - 1) {
      setDialogueIndex((prev) => prev + 1);
    }
  };

  if (!isVisible) return null;

  const activeDialogues = sectionDialogues[currentSection] || [];
  const currentText = activeDialogues[dialogueIndex] || "";
  const isLastLine = dialogueIndex >= activeDialogues.length - 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-6 sm:left-14 lg:left-20 bottom-8 sm:bottom-14 lg:bottom-16 z-50 flex items-end gap-3 select-none pointer-events-auto"
      >
        {/* White Cloud Dialogue Bubble */}
        <motion.div
          key={`${currentSection}-${dialogueIndex}`}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={handleDialogueNext}
          className="absolute bottom-full left-0 mb-4 w-68 sm:w-80 p-4 rounded-3xl bg-white/95 border border-cyan-200/80 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.5)] text-slate-900 cursor-pointer pointer-events-auto group/cloud hover:border-cyan-400 transition-colors"
        >
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-base">🐢</span>
              <span className="font-bold text-teal-800 text-xs sm:text-sm">Luna</span>
            </div>
            <span className="text-[11px] font-semibold text-teal-900 bg-teal-100/90 px-2.5 py-0.5 rounded-full border border-teal-300/60">
              {sceneBadges[currentSection]}
            </span>
          </div>

          <p className="text-slate-900 text-sm sm:text-base font-serif leading-relaxed min-h-[48px] flex items-center font-medium">
            "{currentText}"
          </p>

          {/* Advance Indicator Hint */}
          <div className="mt-2 pt-1 flex items-center justify-between text-[11px] text-slate-500 font-sans">
            <span className="font-medium">{dialogueIndex + 1} of {activeDialogues.length}</span>
            <span className="group-hover/cloud:text-teal-700 font-semibold transition-colors">
              {!isLastLine ? "Click to continue →" : "Scroll to explore →"}
            </span>
          </div>

          {/* White Speech Bubble Pointer Arrow */}
          <div className="absolute top-full left-10 sm:left-14 -mt-[1px] w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white/95" />
        </motion.div>

        {/* Main Luna Container - Static position, progresses with user */}
        <div className="relative flex items-center justify-center p-2 rounded-full">
          {/* Ambient water glow behind Luna */}
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl transition-all duration-300" />

          {/* Luna SVG Image (Anxious version on Threat page) */}
          <motion.img
            key={currentSection === "threat" ? "anxious-luna" : "normal-luna"}
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={currentSection === "threat" ? lunaAnxiousSvg : lunaSvg}
            alt="Luna the Sea Turtle"
            className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.75)]"
          />

          {/* Companion Badge */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-sm whitespace-nowrap">
            Luna 🐢
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LunaSticky;
