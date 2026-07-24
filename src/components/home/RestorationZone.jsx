import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Check, RotateCcw, ShieldCheck, Leaf } from "lucide-react";

// --- CORAL FRAGMENT ICON ---
const CoralFragmentIcon = ({ color = "text-emerald-400", size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={color}>
    <path d="M12 22V11" />
    <path d="M12 16C9 14 7 11 7 8" />
    <path d="M12 14C15 13 17 10 17 7" />
    <circle cx="7" cy="8" r="1.5" fill="currentColor" />
    <circle cx="17" cy="7" r="1.5" fill="currentColor" />
    <circle cx="12" cy="5" r="1.5" fill="currentColor" />
  </svg>
);

const RestorationZone = () => {
  // 0: Broken Reef (Initial/Replayed), 1: Coral Growing, 2: Restored Reef (Mockup State)
  const [restorationStage, setRestorationStage] = useState(2);
  const [isHoveredOverDropzone, setIsHoveredOverDropzone] = useState(false);

  const handleDropOrClick = () => {
    if (restorationStage === 0) {
      setRestorationStage(1);
      setTimeout(() => {
        setRestorationStage(2);
      }, 1100);
    }
  };

  const handleReset = () => {
    setRestorationStage(0);
  };

  return (
    <section id="chapter-hope" className="relative w-full bg-[#040810] text-white overflow-hidden select-none py-16 px-4 sm:px-10 lg:px-16">
      
      {/* Smooth Section Junction Gradient Overlays */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#040810]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#040810]/80 to-transparent pointer-events-none z-10" />

      {/* AMBIENT GLOW LIGHTING */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/15 rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="relative z-10 w-full flex flex-col gap-12 max-w-7xl mx-auto">
        
        {/* TOP HERO BANNER SECTION (Matches Mockup Header) */}
        <div className="relative w-full bg-[#040b17] border border-[#132338] rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Header Background Illustration */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-90">
            <img
              src="/images/coral_reef_bg.png"
              alt="Bright Coral Reef with Turtle"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040b17] via-[#040b17]/85 to-transparent/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040b17]/70 via-transparent to-transparent" />
          </div>

          {/* Left Side Header Text */}
          <div className="lg:col-span-8 z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-widest backdrop-blur-md">
              <Leaf size={14} className="text-emerald-400" /> SIGNATURE INTERACTION — RESTORATION
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              Bring The Reef <br />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(52,211,153,0.4)]">
                Back To Life!
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Drag the living coral fragment onto the damaged reef bed to initiate coral growth, attract returning marine life, and brighten ocean waters.
            </p>
          </div>

          {/* Top Right Replay Restoration Control */}
          <div className="lg:col-span-4 z-10 flex flex-col items-end justify-start h-full gap-6">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#071526]/80 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-white text-xs font-semibold backdrop-blur-md transition cursor-pointer shadow-lg active:scale-95"
            >
              <RotateCcw size={14} /> Replay Restoration
            </button>
          </div>

        </div>

        {/* MAIN INTERACTIVE CANVAS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: INSTRUCTION & DRAG SOURCE BOX */}
          <div className="lg:col-span-5 flex">
            <div className="bg-[#040b17] border border-[#132338] rounded-3xl p-7 shadow-2xl flex flex-col justify-between w-full">
              
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
                  INSTRUCTION
                </span>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {restorationStage === 2 && "Reef Ecosystem Restored!"}
                  {restorationStage === 1 && "Coral Growing..."}
                  {restorationStage === 0 && "Drag Coral Fragment"}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {restorationStage === 2 && "Vibrant corals bloom, tropical fish return, and Luna the Sea Turtle arrives!"}
                  {restorationStage === 1 && "Living polyps expanding across limestone beds..."}
                  {restorationStage === 0 && "Pick up the living coral fragment below and drop it onto the damaged reef bed."}
                </p>
              </div>

              {/* DOTTED LIVING FRAGMENT SOURCE BOX */}
              <div className="mt-8 p-6 rounded-2xl border-2 border-dashed border-emerald-500/40 bg-[#061426]/60 text-center flex flex-col items-center justify-center gap-3">
                <span className="text-xs font-serif text-slate-300 font-medium">
                  Living Fragment Source
                </span>

                {restorationStage === 0 ? (
                  <motion.div
                    drag
                    dragSnapToOrigin
                    whileDrag={{ scale: 1.25, zIndex: 50 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={handleDropOrClick}
                    onDragEnd={handleDropOrClick}
                    className="w-20 h-20 rounded-full border-2 border-emerald-400 bg-emerald-950/80 flex items-center justify-center text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.7)] cursor-grab active:cursor-grabbing transition-transform animate-pulse"
                  >
                    <CoralFragmentIcon color="text-emerald-300" size={40} />
                  </motion.div>
                ) : (
                  <div className="w-20 h-20 rounded-full border border-emerald-400/60 bg-emerald-950/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                    <CoralFragmentIcon color="text-emerald-300" size={38} />
                  </div>
                )}

                <div className="space-y-0.5">
                  <span className="block text-emerald-400 font-serif font-bold text-sm tracking-wide">
                    {restorationStage === 0 ? "Click or Drag Fragment" : "Fragment Placed"}
                  </span>
                  <span className="block text-slate-400 text-xs font-sans">
                    living coral fragment here
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: RESTORED REEF CANVAS WITH ACHIEVEMENT CARD */}
          <div className="lg:col-span-7 flex">
            <div
              onDragOver={(e) => { e.preventDefault(); setIsHoveredOverDropzone(true); }}
              onDragLeave={() => setIsHoveredOverDropzone(false)}
              onDrop={(e) => { e.preventDefault(); setIsHoveredOverDropzone(false); handleDropOrClick(); }}
              onClick={handleDropOrClick}
              className={`relative w-full h-[460px] sm:h-[500px] rounded-3xl border-2 overflow-hidden shadow-2xl transition-all duration-700 flex flex-col items-center justify-between p-6 sm:p-8 text-center cursor-pointer ${
                restorationStage === 2
                  ? "border-emerald-400/80 shadow-[0_0_60px_rgba(52,211,153,0.35)]"
                  : isHoveredOverDropzone
                  ? "border-emerald-400 bg-emerald-950/40"
                  : "border-slate-800 bg-[#050d1a]"
              }`}
            >
              {/* RICH RESTORED REEF BACKGROUND IMAGE */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={restorationStage === 2 ? "/images/coral_reef_bg.png" : "/images/coral_bleaching.png"}
                  alt="Reef Bed"
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    restorationStage === 2 ? "saturate-125 brightness-105 opacity-90" : "brightness-50 grayscale opacity-40"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040c18] via-transparent to-[#040c18]/50 opacity-60" />
              </div>

              {/* STAGE 0: REPLAY TARGET DROP BUTTON */}
              {restorationStage === 0 && (
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  onClick={handleDropOrClick}
                  className="relative z-30 my-auto p-7 sm:p-9 rounded-3xl border-2 border-dashed border-emerald-400/90 bg-[#051824]/90 backdrop-blur-xl flex flex-col items-center justify-center gap-3 shadow-[0_0_50px_rgba(52,211,153,0.5)] cursor-pointer"
                >
                  <CoralFragmentIcon color="text-emerald-300 animate-bounce" size={48} />
                  <div className="space-y-1">
                    <span className="block text-emerald-300 font-serif font-bold text-lg sm:text-xl">
                      Click or Drop Coral Here
                    </span>
                    <span className="block text-slate-300 text-xs sm:text-sm font-sans">
                      To Restore The Damaged Reef Bed
                    </span>
                  </div>
                </motion.div>
              )}

              {/* STAGE 1: GROWING ANIMATION */}
              {restorationStage === 1 && (
                <motion.div
                  initial={{ scale: 0.3, opacity: 0 }}
                  animate={{ scale: 1.4, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-30 my-auto flex flex-col items-center gap-3"
                >
                  <CoralFragmentIcon color="text-emerald-300" size={64} />
                  <Sparkles size={36} className="text-emerald-300 animate-spin" />
                  <span className="text-emerald-300 font-serif font-bold text-lg">Coral Polyps Blooming...</span>
                </motion.div>
              )}

              {/* STAGE 2: TOP CENTER GLOWING CHECKMARK CIRCLE */}
              {restorationStage === 2 && (
                <div className="relative z-10 pt-4">
                  <div className="w-14 h-14 rounded-full bg-[#053733] border-2 border-emerald-400 text-emerald-300 flex items-center justify-center shadow-[0_0_35px_#34d399] transition-transform hover:scale-110">
                    <Check size={28} strokeWidth={3} />
                  </div>
                </div>
              )}

              {/* STAGE 2: BOTTOM CENTER ACHIEVEMENT UNLOCKED OVERLAY CARD */}
              <AnimatePresence>
                {restorationStage === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-20 bg-[#051120]/95 border border-emerald-500/40 rounded-2xl p-6 sm:p-7 backdrop-blur-xl shadow-[0_0_50px_rgba(52,211,153,0.35)] max-w-md w-full text-center my-auto"
                  >
                    {/* Top Pill Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[11px] font-mono tracking-widest uppercase font-semibold">
                      <ShieldCheck size={13} /> ACHIEVEMENT UNLOCKED
                    </div>

                    {/* Main Achievement Title */}
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mt-3 mb-1">
                      You helped restore the reef.
                    </h3>

                    {/* Small Coral Divider */}
                    <div className="flex justify-center my-2 text-emerald-400/60">
                      <CoralFragmentIcon size={18} color="text-emerald-400/60" />
                    </div>

                    {/* Description Text */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      Corals are growing, fish have returned, <br />
                      ocean waters are bright, and <br />
                      Luna is swimming freely!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RestorationZone;
