import { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

const CoralFragmentIcon = ({ color = "text-cyan-400" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={color}>
    <path d="M12 22V11" />
    <path d="M12 16C9 14 7 11 7 8" />
    <path d="M12 14C15 13 17 10 17 7" />
    <circle cx="7" cy="8" r="1.5" fill="currentColor" />
    <circle cx="17" cy="7" r="1.5" fill="currentColor" />
    <circle cx="12" cy="5" r="1.5" fill="currentColor" />
  </svg>
);

const RestorationZone = () => {
  const [fragmentsPlaced, setFragmentsPlaced] = useState(0);

  const placeFragment = () => {
    if (fragmentsPlaced < 3) {
      setFragmentsPlaced((prev) => prev + 1);
    }
  };

  const resetRestoration = () => {
    setFragmentsPlaced(0);
  };

  return (
    <section id="chapter-hope" className="relative w-full bg-[#040810] text-white">
      <div className="w-full bg-[#050d1a] border-b border-slate-800/80 shadow-2xl overflow-hidden relative p-8 sm:p-16 lg:p-24">

        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/corals.jpg"
            alt="Reef Restoration"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a] via-[#050d1a]/80 to-[#050d1a]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              You Can Help <br />
              <span className="text-[#9ce3ec]">Restore Our Oceans</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-md font-normal leading-relaxed">
              Drag & place coral fragments to bring the reef back to life.
            </p>

            {/* Interactive Coral Inventory */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Coral Fragments:
              </span>
              <div className="flex gap-3">
                {[1, 2, 3].map((num) => {
                  const isPlaced = num <= fragmentsPlaced;
                  return (
                    <button
                      key={num}
                      onClick={placeFragment}
                      disabled={isPlaced}
                      className={`p-3 rounded-xl border transition-all duration-300 ${
                        isPlaced
                          ? "bg-cyan-950/20 border-cyan-800/30 opacity-40 cursor-not-allowed"
                          : "bg-[#08172c] border-cyan-500/50 hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] cursor-pointer transform hover:scale-105"
                      }`}
                      title="Click or drag to place onto reef"
                    >
                      <CoralFragmentIcon color={isPlaced ? "text-slate-600" : "text-cyan-300"} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dotted Dropzone */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div
              onClick={placeFragment}
              className={`relative group w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-dashed transition-all duration-500 flex flex-col items-center justify-center p-6 text-center cursor-pointer ${
                fragmentsPlaced === 3
                  ? "border-emerald-400 bg-emerald-950/30 shadow-[0_0_40px_rgba(52,211,153,0.3)]"
                  : fragmentsPlaced > 0
                  ? "border-cyan-400 bg-cyan-950/30 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                  : "border-cyan-400/60 bg-[#071324]/80 hover:border-cyan-300 hover:bg-[#09182d]"
              }`}
            >
              {/* Coral Center Visual */}
              <div className="relative mb-3">
                <div
                  className={`transition-transform duration-500 ${
                    fragmentsPlaced > 0 ? "scale-125" : "group-hover:scale-110"
                  }`}
                >
                  <CoralFragmentIcon
                    color={
                      fragmentsPlaced === 3
                        ? "text-emerald-400"
                        : fragmentsPlaced > 0
                        ? "text-cyan-300"
                        : "text-slate-400"
                    }
                  />
                </div>
                {fragmentsPlaced === 3 && (
                  <Sparkles size={24} className="text-emerald-300 absolute -top-2 -right-2 animate-spin" />
                )}
              </div>

              {fragmentsPlaced === 3 ? (
                <div className="flex flex-col items-center">
                  <span className="flex items-center gap-1.5 text-emerald-300 font-bold text-base sm:text-lg">
                    <CheckCircle2 size={20} /> Reef Restored!
                  </span>
                  <span className="text-xs text-slate-300 mt-1">3 / 3 Fragments Thriving</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      resetRestoration();
                    }}
                    className="mt-3 text-xs text-cyan-400 underline hover:text-cyan-200"
                  >
                    Reset & Try Again
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-cyan-200 transition">
                    Drag coral fragment here
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    ({fragmentsPlaced} / 3 fragments placed)
                  </span>
                </>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RestorationZone;
