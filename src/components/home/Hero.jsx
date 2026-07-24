import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../layout/Navbar";

const headlineLines = [
  "Every minute,",
  "a truckload of plastic",
  "enters our oceans.",
];

const BubbleParticles = () => {
  const bubbles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 16 + 4,
    left: Math.random() * 100,
    delay: Math.random() * 0.4,
    duration: Math.random() * 1.2 + 0.8,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: "110vh", x: 0, opacity: 0 }}
          animate={{ 
            y: "-20vh", 
            x: Math.random() * 60 - 30, 
            opacity: [0, 0.8, 0.8, 0] 
          }}
          transition={{ 
            duration: b.duration, 
            delay: b.delay, 
            ease: "easeOut" 
          }}
          className="absolute rounded-full border border-cyan-100/50 bg-cyan-200/20 backdrop-blur-sm"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: "-10%",
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const isScrollingRef = useRef(false);
  const [isDiving, setIsDiving] = useState(false);

  const scrollToDive = () => {
    const el = document.getElementById("chapter-dive");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDiveClick = () => {
    if (isDiving) return;
    setIsDiving(true);
    
    // Lock scroll to prevent user interference during animation
    document.body.style.overflow = "hidden";
    
    setTimeout(() => {
      document.body.style.overflow = "";
      scrollToDive();
      
      // Cleanup transition state after scroll finishes
      setTimeout(() => setIsDiving(false), 1000); 
    }, 1500);
  };

  const handleWheel = (e) => {
    if (e.deltaY > 20 && window.scrollY < 120 && !isScrollingRef.current && !isDiving) {
      isScrollingRef.current = true;
      handleDiveClick(); // Trigger the cinematic dive instead of instantly scrolling
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 2000);
    }
  };

  return (
    <section
      id="scene-surface"
      onWheel={handleWheel}
      className="relative w-full min-h-screen bg-[#040810] text-white overflow-hidden select-none snap-start snap-always"
    >
      {/* 100% Width Outer Frame - Translates upward slightly during dive */}
      <motion.div 
        animate={{ y: isDiving ? "-35vh" : 0 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        className="w-full bg-[#060d19] relative min-h-screen flex flex-col justify-between"
      >
        {/* Cinematic Underwater Overlay */}
        <AnimatePresence>
          {isDiving && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 z-30 bg-gradient-to-b from-cyan-950/70 via-blue-950/90 to-[#040810] pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Bubble Particles */}
        <AnimatePresence>
          {isDiving && <BubbleParticles />}
        </AnimatePresence>

        {/* Navbar Entrance */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full z-50 relative"
        >
          <Navbar />
        </motion.div>

        {/* Hero Content & Background Container */}
        <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-hidden">
          
          {/* Beautiful Ocean Background with Scale Entrance */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img
              src="/hero1.png"
              alt="Beautiful Ocean Hero"
              initial={{ scale: 1.08, opacity: 0.9 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full object-cover object-center"
            />

            {/* Subtle gradient for text contrast while preserving image brightness */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d19]/80 via-transparent to-black/20" />
            
            {/* Fade out light rays / brighten background during dive */}
            <motion.div 
              animate={{ opacity: isDiving ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-[#040810]/40 z-10 pointer-events-none" 
            />
          </div>

          {/* Headline & Dive In Button */}
          <div className="relative z-20 max-w-2xl my-auto pt-10 sm:pt-16">
            
            {/* Line-by-Line Staggered Headline Motion */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight drop-shadow-lg flex flex-col gap-1 sm:gap-2">
              {headlineLines.map((line, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.75,
                    delay: 0.3 + index * 0.38,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            {/* Dive In Button Motion */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
              className="mt-6 sm:mt-8"
            >
              <button
                onClick={handleDiveClick}
                className="relative group inline-flex items-center gap-3 bg-[#9ce3ec] hover:bg-[#82d6df] text-slate-950 font-semibold px-8 py-3.5 rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(156,227,236,0.6)] transform hover:-translate-y-0.5 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Dive In
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                
                {/* Ripple Effect on Click */}
                <AnimatePresence>
                  {isDiving && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0.8 }}
                      animate={{ scale: 20, opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute inset-0 m-auto w-10 h-10 bg-white rounded-full z-0 pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </button>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Smooth Bottom Section Blend Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#040810] via-[#040810]/80 to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;