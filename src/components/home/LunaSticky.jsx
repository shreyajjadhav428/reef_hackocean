import { useState, useEffect, useRef } from "react";
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
  const [isPinned, setIsPinned] = useState(false);
  const [isThreatActivityComplete, setIsThreatActivityComplete] = useState(false);
  
  const completedSectionsRef = useRef(new Set());
  const lastScrollTime = useRef(Date.now());
  const touchStartY = useRef(0);
  const accumulatedScrollY = useRef(0);

  // Listen for Threat Activity Completion
  useEffect(() => {
    const handleThreatComplete = () => {
      setIsThreatActivityComplete(true);
    };
    window.addEventListener("threat-activity-complete", handleThreatComplete);
    return () => window.removeEventListener("threat-activity-complete", handleThreatComplete);
  }, []);
  const currentSectionRef = useRef(currentSection);
  useEffect(() => {
     currentSectionRef.current = currentSection;
  }, [currentSection]);

  // Section Tracking & Visibility
  useEffect(() => {
    const handleScroll = () => {
      // Always update visibility based on position, regardless of pinning
      const diveEl = document.getElementById("chapter-dive");
      if (diveEl) {
        const diveTop = diveEl.offsetTop - 250;
        setIsVisible(window.scrollY >= diveTop);
      }

      if (isPinned) return; // Only skip section detection if pinned

      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      const coralEl = document.getElementById("chapter-coral");
      const threatEl = document.getElementById("chapter-threat");
      const hopeEl = document.getElementById("chapter-hope");
      const actionEl = document.getElementById("chapter-action");

      let detectedSection = "hero";
      if (actionEl && scrollPos >= actionEl.offsetTop) {
        detectedSection = "action";
      } else if (hopeEl && scrollPos >= hopeEl.offsetTop) {
        detectedSection = "hope";
      } else if (threatEl && scrollPos >= threatEl.offsetTop) {
        detectedSection = "threat";
      } else if (coralEl && scrollPos >= coralEl.offsetTop) {
        detectedSection = "coral";
      } else if (diveEl && scrollPos >= diveEl.offsetTop) {
        detectedSection = "dive";
      }

      if (detectedSection !== currentSectionRef.current) {
        setCurrentSection(detectedSection);
        
        // Exclude 'hero' and 'action' (footer) from being pinned
        if (detectedSection !== "hero" && detectedSection !== "action" && !completedSectionsRef.current.has(detectedSection)) {
          setDialogueIndex(0);
          setIsPinned(true);
          
          const sectionEl = document.getElementById(`chapter-${detectedSection}`);
          if (sectionEl) {
            setTimeout(() => {
              window.scrollTo({ top: sectionEl.offsetTop, behavior: "smooth" });
            }, 10);
          }
        } else if (detectedSection !== "hero") {
          const maxIndex = (sectionDialogues[detectedSection]?.length || 1) - 1;
          setDialogueIndex(maxIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPinned]);

  const handleDialogueNext = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const dialogues = sectionDialogues[currentSection] || [];
    
    if (dialogueIndex < dialogues.length - 1) {
      setDialogueIndex((prev) => prev + 1);
    }
  };

  // Reactive unlock mechanism
  useEffect(() => {
    const dialogues = sectionDialogues[currentSection] || [];
    const isLast = dialogueIndex >= dialogues.length - 1;
    
    if (isLast && isPinned) {
      if (currentSection === "threat" && !isThreatActivityComplete) {
        // Do not unpin. Keep the user here until they finish the interaction.
        return;
      }
      
      // Finished dialogue for this section -> Unpin and mark as completed
      setIsPinned(false);
      completedSectionsRef.current.add(currentSection);
    }
  }, [currentSection, dialogueIndex, isThreatActivityComplete, isPinned]);

  // Wheel and Touch interception for Scroll-Based Storytelling
  useEffect(() => {
    if (!isPinned) {
      document.body.style.overflow = '';
      return;
    }
    
    // Lock native body scroll
    document.body.style.overflow = 'hidden';

    const handleWheel = (e) => {
      // If scrolling UP, immediately unpin and allow natural scrolling
      if (e.deltaY < -10) {
        setIsPinned(false);
        return;
      }

      // If scrolling DOWN while pinned, strictly block it. 
      // User MUST use the Next button.
      if (e.deltaY > 0) {
        e.preventDefault();
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      accumulatedScrollY.current = 0;
    };

    const handleTouchMove = (e) => {
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;
      
      // If swiping UP (scrolling page UP), unpin
      if (deltaY < -20) {
         setIsPinned(false);
         return;
      }
      
      // If swiping DOWN while pinned, strictly block it.
      if (deltaY > 0) {
         e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = '';
    };
  }, [isPinned, dialogueIndex, currentSection, isThreatActivityComplete]);

  if (!isVisible) return null;

  const activeDialogues = sectionDialogues[currentSection] || [];
  const currentText = activeDialogues[dialogueIndex] || "";
  const isLastLine = dialogueIndex >= activeDialogues.length - 1;

  // Additional prompt text if stuck in Threat Zone
  const showThreatHint = isLastLine && currentSection === "threat" && !isThreatActivityComplete;
  const displayedText = showThreatHint 
    ? "Please help clean the reef before we move on..." 
    : currentText;

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
          className={`absolute bottom-full left-0 mb-4 w-[22rem] sm:w-[28rem] p-5 sm:p-6 rounded-3xl bg-white/95 border ${showThreatHint ? 'border-rose-400' : 'border-cyan-200/80'} backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.5)] text-slate-900 pointer-events-auto transition-colors`}
        >
          <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-lg">🐢</span>
              <span className="font-bold text-teal-800 text-sm sm:text-base">Luna</span>
            </div>
            <span className="text-xs font-semibold text-teal-900 bg-teal-100/90 px-3 py-1 rounded-full border border-teal-300/60">
              {sceneBadges[currentSection]}
            </span>
          </div>

          <p className={`text-slate-900 text-base sm:text-lg font-serif leading-relaxed min-h-[64px] flex items-center font-medium ${showThreatHint ? 'text-rose-900' : ''}`}>
            "{displayedText}"
          </p>

          {/* Advance Indicator Hint / Next Button */}
          <div className="mt-4 pt-3 flex flex-col gap-3 border-t border-slate-100/50">
            <div className="flex items-center justify-between text-xs text-slate-500 font-sans">
              <span className="font-medium">{dialogueIndex + 1} of {activeDialogues.length}</span>
              
              {!isLastLine ? (
                <button
                  onClick={handleDialogueNext}
                  className="px-4 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold shadow-sm transition-colors text-sm flex items-center gap-1 animate-pulse"
                >
                  Read Next <span>→</span>
                </button>
              ) : (
                <span className={`font-semibold transition-colors ${showThreatHint ? 'text-rose-600 animate-pulse' : 'text-teal-700'}`}>
                  {showThreatHint ? "Complete the activity ↑" : "Section completed ✓"}
                </span>
              )}
            </div>
            
            {/* Return to Surface Button (Only at very end of story) */}
            {currentSection === "action" && isLastLine && (
              <button 
                onClick={(e) => {
                   e.stopPropagation();
                   window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full py-2 bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-800 text-sm font-semibold rounded-xl shadow-sm transition-colors text-center"
              >
                ↑ Return to Surface
              </button>
            )}
          </div>

          {/* White Speech Bubble Pointer Arrow */}
          <div className={`absolute top-full left-10 sm:left-14 -mt-[1px] w-0 h-0 border-x-8 border-x-transparent border-t-[12px] border-t-white/95`} />
        </motion.div>

        {/* Main Luna Container */}
        <div className="relative flex items-center justify-center p-2 rounded-full">
          {/* Ambient water glow behind Luna */}
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl transition-all duration-300" />

          {/* Luna SVG Image */}
          <motion.img
            key={currentSection === "threat" ? "anxious-luna" : "normal-luna"}
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={currentSection === "threat" ? lunaAnxiousSvg : lunaSvg}
            alt="Luna the Sea Turtle"
            className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.75)]"
          />

          {/* Companion Badge */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-400/40 text-cyan-300 text-sm sm:text-base font-semibold shadow-lg backdrop-blur-sm whitespace-nowrap">
            Luna 🐢
          </div>
        </div>
      </motion.div>

      {/* Global Scroll Down Indicator Overlay */}
      <AnimatePresence>
        {isLastLine && !showThreatHint && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-40 pointer-events-none"
          >
            <span className="text-black text-sm sm:text-base font-black uppercase tracking-[0.2em] bg-white/60 px-4 py-1 rounded-full backdrop-blur-md shadow-sm mb-1 drop-shadow-md">
              Scroll
            </span>
            <span className="text-black text-2xl leading-[0.5] drop-shadow-md">▼</span>
            <span className="text-black text-2xl leading-[0.5] drop-shadow-md">▼</span>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};

export default LunaSticky;
