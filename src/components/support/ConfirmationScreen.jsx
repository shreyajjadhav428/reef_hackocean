import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Heart, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';

const ConfirmationScreen = ({ selectedImpact, contributionAmount, onReset }) => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center relative z-30 select-none">
      
      {/* 1. Floating Glowing Particles & Confetti Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100, x: (i % 2 === 0 ? -1 : 1) * (i * 20) }}
            animate={{ 
              opacity: [0, 1, 0], 
              y: [-20, -350], 
              x: (i % 2 === 0 ? -1 : 1) * (i * 25) 
            }}
            transition={{ 
              duration: 4 + (i % 3), 
              repeat: Infinity, 
              delay: i * 0.25,
              ease: "easeOut"
            }}
            className="absolute bottom-10 left-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]"
          />
        ))}
      </div>

      {/* 2. Success Icon Badge */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-300 p-1 mx-auto mb-8 shadow-[0_0_40px_rgba(34,211,238,0.5)] flex items-center justify-center"
      >
        <div className="w-full h-full rounded-full bg-[#050c18] flex items-center justify-center text-cyan-300">
          <CheckCircle size={48} className="text-cyan-400" />
        </div>
      </motion.div>

      {/* 3. Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4"
      >
        You Made a Difference!
      </motion.h2>

      {/* 4. Hopeful Impact Sub-message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-cyan-300 text-lg sm:text-xl font-semibold max-w-xl mx-auto mb-10"
      >
        Your contribution of ₹{contributionAmount} is actively restoring {selectedImpact || 'coral reefs'} and breathing new life into our marine sanctuary.
      </motion.p>

      {/* 5. Impact Commitment Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12"
      >
        {/* Ecosystem Restoration Box */}
        <div className="bg-[#050c18]/90 border border-cyan-500/40 rounded-3xl p-6 backdrop-blur-md shadow-xl text-left flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-400/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            <Sparkles size={24} className="text-cyan-300" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-cyan-400 mb-1">
              Ecosystem Restoration
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Your generosity directly funds coral nursery maintenance, debris cleanups, and ongoing habitat monitoring.
            </p>
          </div>
        </div>

        {/* Sanctuary Guardianship Box */}
        <div className="bg-[#050c18]/90 border border-emerald-500/40 rounded-3xl p-6 backdrop-blur-md shadow-xl text-left flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-400/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
            <Heart size={24} className="text-emerald-300 fill-emerald-300/30" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-emerald-400 mb-1">
              Sanctuary Guardianship
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Together, we are protecting fragile underwater ecosystems and ensuring a resilient ocean for future generations.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 6. Navigation Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link
          to="/impact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#9ce3ec] hover:bg-[#82d6df] text-slate-950 font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(156,227,236,0.4)] cursor-pointer"
        >
          <span>Explore Global Impact</span>
          <ArrowRight size={18} />
        </Link>

        <button
          onClick={onReset}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 cursor-pointer"
        >
          <RotateCcw size={16} />
          <span>Support Another Area</span>
        </button>
      </motion.div>

    </section>
  );
};

export default ConfirmationScreen;
