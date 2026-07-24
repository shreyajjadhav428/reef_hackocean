import { useState } from "react";
import { motion } from "framer-motion";
import clickAudio from "../../assets/audio/click.mp3";

const CoralZone = () => {
  const [ripples, setRipples] = useState([]);

  const handleSectionClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = {
      id: Date.now() + Math.random(),
      x,
      y,
    };
    setRipples((prev) => [...prev.slice(-15), newRipple]);

    // Play click audio for ripple effect
    try {
      const audio = new Audio(clickAudio);
      audio.volume = 0.4;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } catch (err) {}
  };

  return (
    <section 
      id="chapter-coral" 
      onClick={handleSectionClick}
      className="relative w-full min-h-screen bg-[#040810] text-white overflow-hidden select-none cursor-crosshair flex items-start sm:items-center justify-end snap-start snap-always"
    >
      {/* WATER RIPPLE EFFECT LAYER */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {ripples.map((r) => (
          <div
            key={r.id}
            style={{ left: r.x, top: r.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            {/* Primary Inner Ring */}
            <motion.div
              initial={{ width: 0, height: 0, opacity: 0.9 }}
              animate={{ width: 140, height: 140, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-full border-2 border-cyan-400/90 shadow-[0_0_20px_#22d3ee] absolute -translate-x-1/2 -translate-y-1/2"
            />
            {/* Secondary Mid Ring */}
            <motion.div
              initial={{ width: 0, height: 0, opacity: 0.7 }}
              animate={{ width: 240, height: 240, opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.08 }}
              className="rounded-full border border-teal-300/70 shadow-[0_0_25px_#2dd4bf] absolute -translate-x-1/2 -translate-y-1/2"
            />
            {/* Outer Expansion Wave */}
            <motion.div
              initial={{ width: 0, height: 0, opacity: 0.4 }}
              animate={{ width: 340, height: 340, opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.16 }}
              className="rounded-full border border-cyan-200/50 absolute -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>

      {/* CORAL REEF BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-65">
        <img loading="lazy"
          src="/images/coral_reef_bg.webp"
          alt="Coral Reef Underwater"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/70 via-[#040810]/30 to-[#040810]/70" />
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#040810] to-transparent z-10" />
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#040810] to-transparent z-10" />
      </div>

      {/* AMBIENT LIGHTING GLOWS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Right Side Section Headline & Text Description */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 max-w-md lg:max-w-xl ml-auto mr-0 sm:mr-24 lg:mr-36 text-left pt-24 pb-44 sm:py-12 px-6 sm:px-0"
      >
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
          Living Wonders. <br />
          <span className="text-teal-300 font-normal">A sanctuary built over centuries.</span>
        </h2>
        <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed font-light">
          Coral reefs host 25% of all ocean species despite covering less than 1% of the seabed. Every vibrant coral cluster provides shelter, nourishment, and life to thousands of marine creatures.
        </p>
      </motion.div>
    </section>
  );
};

export default CoralZone;
