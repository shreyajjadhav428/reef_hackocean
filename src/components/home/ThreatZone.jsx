import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ShieldAlert, Compass, ArrowRight, ChevronRight, RefreshCw, Trash2 } from "lucide-react";

// --- THREAT STEPS DATA WITH MOCKUP THUMBNAILS ---
const threatSequence = [
  {
    step: 1,
    id: "plastic",
    title: "Plastic Pollution",
    subtitle: "Synthetic Waste Invasion",
    image: "/images/Plastic bottle.jpg",
    thumbnail: "/images/Plastic bottle.jpg",
    description: "Every minute, over 1 truckload of plastic enters our oceans. Microplastics break down into toxic particles ingested by marine life across the entire food web.",
    stat: "80% of marine litter is plastic",
  },
  {
    step: 2,
    id: "nets",
    title: "Abandoned Fishing Nets",
    subtitle: "Ghost Gear Entanglement",
    image: "/images/ghost_nets.png",
    thumbnail: "/images/ghost_nets.png",
    description: "Derelict 'ghost' fishing gear drifts endlessly, snagging delicate coral branches and trapping turtles, sharks, and marine mammals for decades.",
    stat: "640,000 tons of ghost nets lost yearly",
  },
  {
    step: 3,
    id: "bleaching",
    title: "Coral Fading & Bleaching",
    subtitle: "Thermal Acidification Stress",
    image: "/images/coral_bleaching.png",
    thumbnail: "/images/coral_bleaching.png",
    description: "Rising ocean temperatures force corals to expel their symbiotic algae, causing vibrant reefs to fade into ghost-white limestone skeletons.",
    stat: "Over 75% of world's reefs bleached",
  },
  {
    step: 4,
    id: "darkwater",
    title: "Dark Murky Water",
    subtitle: "Abyssal Light Deprivation",
    image: "/images/diver_dark_water.png",
    thumbnail: "/images/diver_dark_water.png",
    description: "Runoff, sedimentation, and dense pollution block sunlight, depriving surviving deep coral polyps of energy and smothering bottom ecosystems.",
    stat: "Light penetration decreased by 40%",
  },
];

// --- OVERALL OCEAN STATISTICS (WITH THEMATIC BACKGROUNDS) ---
const impactStatistics = [
  {
    id: "stat1",
    number: "11 Million",
    unit: "TONS",
    label: "Plastic entering oceans every year",
    icon: Trash2,
    image: "/images/Plastic bottle.jpg",
    color: "text-red-400 border-red-500/30 bg-red-950/40",
  },
  {
    id: "stat2",
    number: "700+",
    unit: "SPECIES",
    label: "Marine species currently threatened",
    icon: ShieldAlert,
    image: "/turtle.png",
    color: "text-amber-400 border-amber-500/30 bg-amber-950/40",
  },
  {
    id: "stat3",
    number: "90%",
    unit: "LOSS RISK",
    label: "Coral reefs facing collapse by 2050",
    icon: AlertTriangle,
    image: "/images/coral_bleaching.png",
    color: "text-orange-400 border-orange-500/30 bg-orange-950/40",
  },
  {
    id: "stat4",
    number: "1 in 3",
    unit: "STOCKS",
    label: "Global fish stocks severely overfished",
    icon: Compass,
    image: "/images/ghost_nets.png",
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/40",
  },
];

const ThreatZone = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(3); // Default to Step 4 as in mockup

  const currentStep = threatSequence[activeStepIndex];

  const handleNextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % threatSequence.length);
  };

  return (
    <section id="chapter-threat" className="relative w-full bg-[#040810] text-white overflow-hidden select-none py-16 px-4 sm:px-10 lg:px-16">
      
      {/* Smooth Section Junction Gradient Overlays */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#040810]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#040810]/80 to-transparent pointer-events-none z-10" />

      {/* DYNAMIC FULL SECTION BACKGROUND IMAGE WITH SMOOTH CROSS-FADE TRANSITION */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentStep.id}
            src={currentStep.image}
            alt={currentStep.title}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/90 via-[#040810]/50 to-[#040810]/90 z-10" />
      </div>

      {/* AMBIENT BACKGROUND LIGHTING */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-950/20 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="relative z-10 w-full flex flex-col gap-14">
        
        {/* 1. TOP HERO BANNER SECTION (Matches Mockup Header) */}
        <div className="bg-[#050c18] border border-[#17263c] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 z-10"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
              Our Oceans <br />
              <span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Are Under Crisis
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-md font-normal leading-relaxed">
              Trace the cascade of marine destruction — from surface plastics down into fading coral reefs and lightless waters.
            </p>
            <div className="mt-7">
              <Link
                to="/learn"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                Learn More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Banner Illustration (Sea Turtle Trapped in Nets/Plastic) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
          >
            <img
              src="/images/threat_hero_banner.png"
              alt="Sea Turtle Trapped in Marine Pollution"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050c18] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050c18] via-transparent to-transparent opacity-60" />
          </motion.div>

        </div>

        {/* 2. THREAT CASCADE SEQUENCE (Matches Mockup Middle Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: 4 Step Cards with Vertical Dotted Line & Thumbnails */}
          <div className="lg:col-span-5 flex flex-col gap-4 relative">
            <h3 className="text-[11px] font-mono font-bold tracking-widest text-red-500 uppercase mb-1">
              THREAT CASCADE SEQUENCE
            </h3>

            {/* Dotted Vertical Connecting Line */}
            <div className="absolute top-14 bottom-6 left-9 w-[2px] border-l-2 border-dashed border-slate-700/70 z-0 pointer-events-none" />
            
            {threatSequence.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveStepIndex(idx)}
                  whileHover={{ x: 4 }}
                  className={`relative z-10 p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-[#081224] border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.25)] ring-1 ring-red-500/50"
                      : "bg-[#050c18]/90 border-[#17253b] hover:border-slate-700"
                  }`}
                >
                  {/* Left Step Number & Title */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                      isActive ? "bg-red-500 text-slate-950 shadow-[0_0_12px_rgba(239,68,68,0.6)]" : "bg-slate-800 text-slate-400"
                    }`}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className={`text-sm sm:text-base font-bold transition-colors ${isActive ? "text-white" : "text-slate-300"}`}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>

                  {/* Right Thumbnail Image & Arrow */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-12 h-10 rounded-lg overflow-hidden border border-slate-800 shadow-md">
                      <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <ChevronRight size={16} className={isActive ? "text-red-400" : "text-slate-600"} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: ACTIVE STAGE DISPLAY CARD (Matches Mockup Stage 4 Display) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#050d1a] border border-[#1b2b44] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                {/* LARGE FEATURED IMAGE DISPLAY */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6 group">
                  <img
                    src={currentStep.image}
                    alt={currentStep.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent opacity-60" />

                  {/* STAGE BADGE (Top Left) */}
                  <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-red-300 text-[11px] font-mono tracking-wider font-semibold uppercase backdrop-blur-md">
                    STAGE {currentStep.step} OF 4
                  </span>

                  {/* NEXT STAGE BUTTON (Top Right) */}
                  <button
                    onClick={handleNextStep}
                    className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-black/70 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer backdrop-blur-md transition shadow-md"
                  >
                    Next Stage <RefreshCw size={12} />
                  </button>
                </div>

                {/* TEXT DESCRIPTION */}
                <div className="space-y-2.5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {currentStep.step}. {currentStep.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-normal">
                    {currentStep.description}
                  </p>
                </div>

                {/* FOOTER BADGE & LINK */}
                <div className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
                  <div className="px-4 py-2 rounded-xl bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-semibold flex items-center gap-2 shadow-sm">
                    <AlertTriangle size={15} className="text-red-400 shrink-0" />
                    {currentStep.stat}
                  </div>

                  <Link
                    to="/learn"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 transition group"
                  >
                    Learn More on Learn Page <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* 3. CRITICAL DATA / IMPACT BY THE NUMBERS (Matches Mockup 4 Grid Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="bg-[#050c18] border border-[#17253b] rounded-3xl p-8 sm:p-10 shadow-2xl"
        >
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold tracking-widest text-red-500 uppercase">CRITICAL DATA</span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">Impact By The Numbers</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">Empirical findings measuring human disruption to ocean health</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStatistics.map((stat) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative bg-[#071324] border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between gap-6 overflow-hidden shadow-xl group hover:border-slate-700 transition min-h-[220px]"
                >
                  {/* BACKGROUND THEMATIC IMAGE (Brighter & Clearly Visible) */}
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                    <img src={stat.image} alt={stat.label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-[#071324]/50 to-transparent/20" />
                  </div>

                  {/* ICON */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border ${stat.color}`}>
                      <IconComp size={18} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 space-y-1">
                    <div className="text-3xl font-serif font-bold text-white tracking-tight">{stat.number}</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 4. BOTTOM CTA BANNER (Width reduced by 20% to 80% centered) */}
        <div className="w-[80%] mx-auto flex flex-col sm:flex-row items-center justify-between bg-[#050c18] border border-[#17253b] rounded-3xl p-8 sm:p-10 shadow-2xl gap-6 relative overflow-hidden">
          
          {/* Left Text Content */}
          <div className="max-w-xl text-center sm:text-left relative z-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              Understand the science behind marine conservation
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Dive deeper into research, solutions, and how we can protect our oceans for future generations.
            </p>
          </div>

          {/* CTA Button */}
          <div className="relative z-10 shrink-0">
            <Link
              to="/learn"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 flex items-center gap-2"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ThreatZone;
