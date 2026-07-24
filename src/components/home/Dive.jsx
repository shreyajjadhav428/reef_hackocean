import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const chapters = [
  { id: "surface", label: "Surface", sectionId: "chapter-hero" },
  { id: "coral", label: "Coral Reef", sectionId: "chapter-coral" },
  { id: "threat", label: "Threat Zone", sectionId: "chapter-threat" },
  { id: "hope", label: "Hope", sectionId: "chapter-hope" },
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
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1 }}
        className="w-full bg-[#040810] relative min-h-[300px] sm:min-h-[360px] flex items-center justify-between py-10 sm:py-14 px-6 sm:px-12 lg:px-16 overflow-hidden"
      >
        {/* Background Video Element */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/a_to_sec_clip_of_water_lik.mp4" type="video/mp4" />
          </video>
          {/* Smooth overlay gradients for text readability & seamless section blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/60 via-transparent to-[#040810]/60 z-10" />
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#040810]/80 to-transparent z-10" />
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#040810]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-[#040810]/15 z-10" />
        </div>

        {/* Subtle Ambient Background Elements matching Volunteer page */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-950/30 rounded-full mix-blend-screen filter blur-[140px] opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#050c18] rounded-full mix-blend-screen filter blur-[150px] opacity-40"></div>
        </div>

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

        {/* Right Side: Chapter Navigator */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-20 flex items-center lg:absolute lg:left-[calc(50%+50px)] lg:top-1/2 lg:-translate-y-1/2"
        >
          <div className="relative flex flex-col items-center">
            {/* Vertical Timeline Line */}
            <div className="w-[2px] h-72 sm:h-80 bg-amber-400/30 absolute top-3 bottom-3 left-2.5 -translate-x-1/2 z-0" />

            <div className="flex flex-col gap-10 sm:gap-12 relative z-10 py-1">
              {chapters.map((ch) => {
                const isActive = activeChapter === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => scrollToSection(ch.id, ch.sectionId)}
                    className="flex items-center gap-5 group cursor-pointer text-left focus:outline-none transition-all duration-300"
                  >
                    {/* Circle Indicator */}
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      {isActive ? (
                        <div className="w-4.5 h-4.5 rounded-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.9)] ring-4 ring-amber-400/40 scale-125 transition-transform duration-300" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-500/80 bg-transparent group-hover:border-amber-300 transition-colors" />
                      )}
                    </div>

                    {/* Chapter Label */}
                    <span
                      className={`transition-all duration-300 font-serif ${
                        isActive
                          ? "text-2xl sm:text-3xl font-extrabold text-amber-300 tracking-wider scale-110 origin-left drop-shadow-[0_0_20px_rgba(251,191,36,0.7)]"
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
