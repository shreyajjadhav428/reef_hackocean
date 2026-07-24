import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Loader = ({ onComplete }) => {
  const location = useLocation();

  // Check if loader should run: ONLY on Home page ("/") AND ONLY once per session
  const [shouldRun] = useState(() => {
    const isHomePage = location.pathname === "/";
    const alreadyLoaded = sessionStorage.getItem("has_loaded_once") === "true";
    return isHomePage && !alreadyLoaded;
  });

  const [progress, setProgress] = useState(0);
  const [showLight, setShowLight] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showSubheading, setShowSubheading] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [isVisible, setIsVisible] = useState(shouldRun);

  useEffect(() => {
    if (!shouldRun) return;

    // 1. Center Bright Light expands in darkness (0.4s)
    const timerLight = setTimeout(() => {
      setShowLight(true);
    }, 400);

    // 2. Heading "REEF" emerges from center light (1.8s)
    const timerHeading = setTimeout(() => {
      setShowHeading(true);
    }, 1800);

    // 3. Subheading "FOUNDATION" reveals (2.7s)
    const timerSub = setTimeout(() => {
      setShowSubheading(true);
    }, 2700);

    // 4. Progress bar reveals & starts filling (3.4s)
    const timerBar = setTimeout(() => {
      setShowProgressBar(true);
    }, 3400);

    return () => {
      clearTimeout(timerLight);
      clearTimeout(timerHeading);
      clearTimeout(timerSub);
      clearTimeout(timerBar);
    };
  }, [shouldRun]);

  // Smooth 2.4s progress bar filling
  useEffect(() => {
    if (!shouldRun || !showProgressBar) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 22); // 100% in ~2.2s after progress bar appears

    return () => clearInterval(interval);
  }, [shouldRun, showProgressBar]);

  // Complete and fade out after 100% progress
  useEffect(() => {
    if (!shouldRun) return;

    if (progress === 100) {
      sessionStorage.setItem("has_loaded_once", "true");
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete, shouldRun]);

  if (!shouldRun || !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="reef-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#040810] text-white overflow-hidden select-none"
        >
          {/* STEP 1: BRIGHT CENTER LIGHT BEAM & GLOW AURA */}
          {showLight && (
            <>
              {/* Outer Cyan Light Burst */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.4, 1.1], opacity: [0, 1, 0.75] }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="absolute w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] bg-cyan-400/40 rounded-full blur-[110px] pointer-events-none shadow-[0_0_120px_#22d3ee]"
              />
              {/* Inner Bright White Core Light */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.25, 1], opacity: [0, 0.95, 0.65] }}
                transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
                className="absolute w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] bg-white/60 rounded-full blur-[65px] pointer-events-none"
              />
            </>
          )}

          {/* MAIN LOADER CONTENT CONTAINER */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            
            {/* STEP 2: HEADING "REEF" */}
            <div className="min-h-[90px] sm:min-h-[140px] flex items-center justify-center">
              <AnimatePresence>
                {showHeading && (
                  <motion.h1
                    initial={{ opacity: 0, y: 30, scale: 0.88, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-teal-100 via-cyan-100 to-white drop-shadow-[0_0_45px_rgba(34,213,238,0.85)] ml-[0.25em]"
                  >
                    REEF
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>

            {/* STEP 3: SUBHEADING "FOUNDATION" */}
            <div className="min-h-[28px] flex items-center justify-center">
              <AnimatePresence>
                {showSubheading && (
                  <motion.p
                    initial={{ opacity: 0, y: 15, letterSpacing: "0.2em" }}
                    animate={{ opacity: 1, y: 0, letterSpacing: "0.55em" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-xs sm:text-base font-semibold uppercase text-cyan-200/90 tracking-[0.55em] mt-2 sm:mt-3 drop-shadow-md ml-[0.55em]"
                  >
                    FOUNDATION
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* STEP 4: PROGRESS BAR LOADER */}
            <div className="h-16 flex flex-col items-center justify-center mt-8 sm:mt-12">
              <AnimatePresence>
                {showProgressBar && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-2"
                  >
                    {/* Progress Bar Container (+30px width) */}
                    <div className="w-[254px] sm:w-[318px] lg:w-[350px] h-1.5 sm:h-2 bg-slate-900/90 border border-teal-500/40 rounded-full overflow-hidden p-0.5 shadow-[0_0_20px_rgba(45,212,191,0.3)]">
                      <motion.div
                        className="h-full bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 rounded-full shadow-[0_0_14px_#22d3ee]"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: "easeOut" }}
                      />
                    </div>

                    {/* Percentage Progress Indicator */}
                    <span className="text-[11px] sm:text-xs font-mono font-semibold text-cyan-300/90 tracking-widest mt-1">
                      {progress}%
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

