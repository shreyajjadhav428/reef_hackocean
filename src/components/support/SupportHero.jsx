import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Heart, Sparkles } from 'lucide-react';

const SupportHero = ({ onContinue }) => {
  return (
    <section className="relative w-full max-w-5xl mx-auto text-center px-4 sm:px-6 pt-6 pb-12 z-20">
      
      {/* 1. Sanctuary Initiative Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-3 bg-[#050c18]/90 border border-cyan-500/40 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.2)] mb-8 backdrop-blur-md"
      >
        <div className="relative w-7 h-7 rounded-full bg-cyan-950 border border-cyan-400/60 flex items-center justify-center text-cyan-300 shadow-md">
          <Sparkles size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        <div className="text-left">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 block">
            REEF Restoration Initiative
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-200">
            Join thousands of guardians protecting vital marine ecosystems.
          </span>
        </div>
      </motion.div>

      {/* 2. Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-xl"
      >
        Every Reef You Save Begins With <br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-white">
          Someone Who Cared.
        </span>
      </motion.h1>

      {/* 3. Supporting Sub-caption */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-10"
      >
        Every small action creates ripples that reach far beyond the shoreline. Experience how your contribution restores marine habitats in real time.
      </motion.p>

      {/* 4. CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button
          onClick={onContinue}
          className="group inline-flex items-center gap-3 bg-[#9ce3ec] hover:bg-[#82d6df] text-slate-950 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-[0_0_25px_rgba(156,227,236,0.5)] hover:shadow-[0_0_35px_rgba(156,227,236,0.7)] transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Continue Journey</span>
          <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-200" />
        </button>
      </motion.div>

    </section>
  );
};

export default SupportHero;
