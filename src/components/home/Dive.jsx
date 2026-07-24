import { useState } from "react";

const Dive = () => {
  const [activeChapter, setActiveChapter] = useState("surface");

  const chapters = [
    { id: "surface", label: "Surface", sectionId: "chapter-surface" },
    { id: "diving", label: "Diving", sectionId: "chapter-dive" },
    { id: "deep", label: "Deep", sectionId: "chapter-deep" },
    { id: "abyss", label: "Abyss", sectionId: "chapter-abyss" },
  ];

  const scrollToSection = (id, sectionId) => {
    setActiveChapter(id);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="chapter-dive" className="relative w-full bg-[#040810] text-white">
      <div className="w-full bg-[#050c18] border-b border-slate-800/80 shadow-2xl overflow-hidden relative min-h-[460px] sm:min-h-[520px] flex items-center justify-between p-8 sm:p-16 lg:p-24">

        
        {/* Background Image: Deep Ocean Diver */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/images/deep ocean.jpg"
            alt="Deep Ocean Diver"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050c18] via-[#050c18]/80 to-[#050c18]/90" />
        </div>

        {/* Left Side Headline */}
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Dive deeper. <br />
            <span className="text-slate-200">Discover the unseen.</span>
          </h2>
        </div>

        {/* Right Side: Chapter Navigator */}
        <div className="relative z-10 flex items-center gap-6">
          {/* Vertical Timeline Line */}
          <div className="relative flex flex-col items-center">
            <div className="w-[2px] h-48 bg-slate-800 absolute top-2 bottom-2 left-1/2 -translate-x-1/2 z-0" />
            
            <div className="flex flex-col gap-9 relative z-10 py-2">
              {chapters.map((ch) => {
                const isActive = activeChapter === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => scrollToSection(ch.id, ch.sectionId)}
                    className="flex items-center gap-4 group cursor-pointer text-left"
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-400 shadow-[0_0_12px_#22d3ee] scale-125"
                          : "bg-slate-700 group-hover:bg-slate-400"
                      }`}
                    />
                    <span
                      className={`text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 ${
                        isActive
                          ? "text-cyan-300 font-bold translate-x-1"
                          : "text-slate-400 group-hover:text-white"
                      }`}
                    >
                      {ch.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Dive;
