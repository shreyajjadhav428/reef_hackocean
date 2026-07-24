import { useState } from "react";
import { ArrowRight, Waves, Users, Search, Leaf, Fish } from "lucide-react";
import Navbar from "../layout/Navbar";

// Custom SVG Icons for Coral Reefs & Plastic Pollution to match image exactly
const CoralIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V11" />
    <path d="M12 16C9 14 7 11 7 8" />
    <path d="M12 14C15 13 17 10 17 7" />
    <path d="M12 19C8 18 6 16 6 13" />
    <path d="M12 17C16 16 18 14 18 11" />
    <circle cx="7" cy="8" r="1" fill="currentColor" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
    <circle cx="6" cy="13" r="1" fill="currentColor" />
    <circle cx="18" cy="11" r="1" fill="currentColor" />
    <circle cx="12" cy="5" r="1" fill="currentColor" />
    <path d="M12 11V5" />
  </svg>
);

const PlasticBottleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="3" rx="1" />
    <path d="M10 5v2L7 9v11a2 2 0 002 2h6a2 2 0 002-2V9l-3-2V5" />
    <path d="M7 14h10" />
  </svg>
);

const LeafConservationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A9 9 0 0 1 3 12C3 5.5 8.5 3 16 3c.5 3.5 0 8.5-5 11" />
    <path d="M11 20c3.5-3 5-6.5 5-11" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
);

const exploreTiles = [
  { id: "coral", label: "Coral Reefs", icon: CoralIcon },
  { id: "marine", label: "Marine Life", icon: Fish },
  { id: "plastic", label: "Plastic Pollution", icon: PlasticBottleIcon },
  { id: "research", label: "Research", icon: Search },
  { id: "conservation", label: "Conservation", icon: LeafConservationIcon },
];

const Hero = () => {
  const [activeTile, setActiveTile] = useState("coral");


  return (
    <section className="w-full bg-[#040810] text-white p-3 sm:p-6 lg:p-8 font-sans">
      {/* Outer Rounded Container Card */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#060d19] border border-slate-800/80 shadow-2xl overflow-hidden relative">
        
        {/* Top Navbar integrated inside the frame */}
        <Navbar />

        {/* Hero Banner Section with Underwater Background */}
        <div className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-hidden">
          {/* Background Image & Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/underwater_hero.png"
              alt="Underwater Sea Turtle"
              className="w-full h-full object-cover object-center"
            />
            {/* Deep ocean left shadow gradient for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040810]/95 via-[#040810]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d19] via-transparent to-black/30" />
          </div>

          {/* Hero Main Content */}
          <div className="relative z-10 max-w-2xl my-auto pt-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight drop-shadow-md">
              Every minute, <br />
              a truckload of plastic <br />
              enters our oceans.
            </h1>

            {/* Dive In CTA Button */}
            <div className="mt-8">
              <a
                href="#explore"
                className="inline-flex items-center gap-2 bg-[#9ce3ec] hover:bg-[#82d6df] text-slate-950 font-semibold px-6 py-3 rounded-full text-base transition-all duration-200 hover:shadow-[0_0_20px_rgba(156,227,236,0.5)] transform hover:-translate-y-0.5 cursor-pointer"
              >
                Dive In
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>


        {/* Bottom Floating Stats & Explore Panel */}
        <div className="p-6 sm:p-8 bg-[#050c18]/95 backdrop-blur-xl border-t border-slate-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Dive Deeper Stats */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Dive Deeper
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Discover the ocean's impact
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6">
                {/* Stat 1 */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950/40 text-cyan-400 border border-cyan-800/30 shrink-0">
                    <Waves size={24} />
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-bold text-white tracking-tight">
                      1,250,000+
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Tons removed
                    </span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950/40 text-cyan-400 border border-cyan-800/30 shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <span className="block text-xl sm:text-2xl font-bold text-white tracking-tight">
                      850,000+
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      People impacted
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block lg:col-span-1 h-20 w-px bg-slate-800 mx-auto" />

            {/* Right Side: Explore Tiles */}
            <div className="lg:col-span-6">
              <h4 className="text-xs sm:text-sm font-medium text-slate-300 mb-4">
                Explore
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {exploreTiles.map((tile) => {
                  const IconComponent = tile.icon;
                  const isSelected = activeTile === tile.id;

                  return (
                    <button
                      key={tile.id}
                      onClick={() => setActiveTile(tile.id)}
                      className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#0b192c] border-cyan-600/60 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                          : "bg-[#071120]/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200 hover:bg-[#081527]"
                      }`}
                    >
                      <div className="mb-2">
                        <IconComponent />
                      </div>
                      <span className="text-xs font-medium leading-tight">
                        {tile.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;