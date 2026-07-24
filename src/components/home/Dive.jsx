import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const chapters = [
  { id: "surface", label: "Surface", sectionId: "chapter-hero" },
  { id: "coral", label: "Coral Reef", sectionId: "chapter-coral" },
  { id: "threat", label: "Threat Zone", sectionId: "chapter-threat" },
  { id: "hope", label: "Hope", sectionId: "chapter-hope" },
];

// Swimming Fish SVG Component
const SwimmingFish = ({ delay = 0, duration = 12, startY = 120, endY = 240 }) => (
  <motion.svg
    width="36"
    height="18"
    viewBox="0 0 36 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ x: "-10vw", y: startY, opacity: 0 }}
    animate={{
      x: "110vw",
      y: [startY, endY, startY + 40],
      opacity: [0, 0.6, 0.7, 0],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute z-10 pointer-events-none text-cyan-300/40"
  >
    <path
      d="M2 9C7 3 20 2 28 9L34 3V15L28 9C20 16 7 15 2 9Z"
      fill="currentColor"
    />
    <circle cx="23" cy="7" r="1" fill="#ffffff" />
  </motion.svg>
);

// Animated Rising Ocean Bubbles
const bubblesData = [
  { id: 1, size: 8, left: "15%", duration: 6, delay: 0 },
  { id: 2, size: 14, left: "28%", duration: 8, delay: 1.5 },
  { id: 3, size: 10, left: "45%", duration: 7, delay: 0.8 },
  { id: 4, size: 18, left: "62%", duration: 9, delay: 2.2 },
  { id: 5, size: 6, left: "75%", duration: 5, delay: 0.3 },
  { id: 6, size: 12, left: "88%", duration: 7.5, delay: 1.8 },
  { id: 7, size: 16, left: "38%", duration: 8.5, delay: 3.1 },
  { id: 8, size: 9, left: "52%", duration: 6.5, delay: 2.7 },
];

const Dive = () => {
  const [activeChapter, setActiveChapter] = useState("surface");

  // Track active chapter on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id, sectionId) => {
    setActiveChapter(id);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="chapter-dive"
      className="relative w-full bg-[#040810] text-white overflow-hidden select-none"
    >
      {/* Main Underwater Darkening Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1 }}
        className="w-full bg-gradient-to-b from-[#051124] via-[#030915] to-[#060e1b] relative min-h-[480px] sm:min-h-[560px] flex items-center justify-between p-8 sm:p-16 lg:p-24 overflow-hidden"
      >
        {/* Seamless Blend Overlay to Coral Section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#060e1b]/60 to-[#060e1b] pointer-events-none z-10" />

        {/* Effect 1: Fading Light Rays from Ocean Surface */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-[320px] bg-gradient-to-b from-cyan-400/20 via-cyan-500/5 to-transparent blur-3xl transform -rotate-12" />
          <div className="absolute top-0 right-1/3 w-80 h-[280px] bg-gradient-to-b from-cyan-300/15 via-blue-500/5 to-transparent blur-2xl transform rotate-6" />
        </div>

        {/* Effect 2: Ocean Diver Silhouette & Deep Ocean Backdrop */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <img
            src="/images/deep ocean.jpg"
            alt="Deep Ocean Diver Submerged"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030915]/95 via-[#030915]/75 to-[#02050b]/95" />
        </div>

        {/* Effect 3: Increasing Animated Rising Bubbles */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {bubblesData.map((b) => (
            <motion.div
              key={b.id}
              initial={{ y: "100%", opacity: 0, x: 0 }}
              animate={{
                y: "-20%",
                opacity: [0, 0.7, 0.8, 0],
                x: [0, 10, -10, 0],
              }}
              transition={{
                duration: b.duration,
                delay: b.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
              }}
              className="absolute rounded-full border border-cyan-200/50 bg-cyan-300/20 backdrop-blur-[1px] shadow-[0_0_8px_rgba(34,211,238,0.4)]"
            />
          ))}
        </div>

        {/* Effect 4: Fish Swimming Deeper */}
        <SwimmingFish delay={0} duration={14} startY={80} endY={180} />
        <SwimmingFish delay={4} duration={16} startY={160} endY={260} />
        <SwimmingFish delay={8} duration={12} startY={40} endY={140} />

        {/* Left Side Headline: "Dive deeper. Discover the unseen." */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 max-w-md lg:max-w-lg"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            Dive deeper. <br />
            <span className="text-slate-300 font-normal">Discover the unseen.</span>
          </h2>
        </motion.div>

        {/* Right Side: Chapter Navigator (Positioned 50px right from horizontal center) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-20 flex items-center lg:absolute lg:left-[calc(50%+50px)] lg:top-1/2 lg:-translate-y-1/2"
        >
          <div className="relative flex flex-col items-center">
            {/* Vertical Timeline Line */}
            <div className="w-[2px] h-72 sm:h-80 bg-cyan-900/60 absolute top-3 bottom-3 left-2.5 -translate-x-1/2 z-0" />

            <div className="flex flex-col gap-10 sm:gap-12 relative z-10 py-1">
              {chapters.map((ch) => {
                const isActive = activeChapter === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => scrollToSection(ch.id, ch.sectionId)}
                    className="flex items-center gap-5 group cursor-pointer text-left focus:outline-none transition-all duration-300"
                  >
                    {/* Circle Indicator (Larger filled ● when active, Outline ○ when inactive) */}
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      {isActive ? (
                        <div className="w-4.5 h-4.5 rounded-full bg-cyan-400 shadow-[0_0_16px_#22d3ee] ring-4 ring-cyan-400/40 scale-125 transition-transform duration-300" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-500/80 bg-transparent group-hover:border-cyan-300 transition-colors" />
                      )}
                    </div>

                    {/* Chapter Label (Active item appears significantly bigger than others) */}
                    <span
                      className={`transition-all duration-300 font-serif ${
                        isActive
                          ? "text-2xl sm:text-3xl font-extrabold text-cyan-300 tracking-wider scale-110 origin-left drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                          : "text-lg sm:text-xl font-medium text-slate-400/80 group-hover:text-slate-100"
                      }`}
                    >
                      {ch.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};


export default Dive;


