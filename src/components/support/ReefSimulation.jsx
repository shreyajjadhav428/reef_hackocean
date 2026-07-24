import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ReefSimulation = ({ selectedImpact, contributionAmount, isConfirmed }) => {
  // Calculate vitality level (0 to 100) based on selection and contribution
  const vitality = useMemo(() => {
    if (isConfirmed) return 100;
    let score = 25; // Base bleached state
    if (selectedImpact) score += 25;
    if (contributionAmount > 0) {
      if (contributionAmount >= 2500) score += 50;
      else if (contributionAmount >= 1000) score += 40;
      else if (contributionAmount >= 500) score += 30;
      else if (contributionAmount >= 250) score += 20;
      else score += Math.min(25, Math.floor(contributionAmount / 20));
    }
    return Math.min(100, score);
  }, [selectedImpact, contributionAmount, isConfirmed]);

  // Determine fish count and turtle visibility based on vitality
  const fishCount = useMemo(() => {
    if (vitality >= 90) return 8;
    if (vitality >= 70) return 6;
    if (vitality >= 50) return 4;
    if (vitality >= 30) return 2;
    return 1;
  }, [vitality]);

  const showTurtle = vitality >= 50 || selectedImpact === 'turtle';

  // Generate bubble data
  const bubbles = useMemo(() => {
    const count = Math.floor(vitality / 5) + 5;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 4,
      left: `${Math.random() * 90 + 5}%`,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 3,
    }));
  }, [vitality]);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl bg-[#030812] border border-slate-800/80 overflow-hidden shadow-2xl transition-all duration-700 select-none">
      
      {/* 1. Animated Sunlight Rays */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{ opacity: vitality / 100 }}
      >
        <div className="absolute top-0 left-1/4 w-72 h-full bg-gradient-to-b from-cyan-400/20 via-cyan-500/5 to-transparent transform -rotate-12 blur-xl animate-pulse" />
        <div className="absolute top-0 right-1/3 w-96 h-full bg-gradient-to-b from-cyan-300/20 via-teal-500/5 to-transparent transform rotate-6 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* 2. Water Depth Gradient Layer */}
      <div 
        className="absolute inset-0 transition-colors duration-1000 pointer-events-none"
        style={{ 
          background: typeof window !== 'undefined' && window.innerWidth < 768 
            ? (vitality > 60 ? '#040810' : '#030812')
            : (vitality > 60 
              ? 'radial-gradient(circle at 50% 30%, rgba(6, 40, 65, 0.9) 0%, rgba(4, 8, 16, 1) 100%)' 
              : 'radial-gradient(circle at 50% 30%, rgba(4, 20, 35, 0.8) 0%, rgba(3, 8, 18, 1) 100%)')
        }}
      />

      {/* 3. Vitality HUD Badge */}
      <div className="absolute top-4 left-4 z-30 flex items-center gap-3 bg-[#050c18]/90 border border-slate-800 px-4 py-2 rounded-2xl backdrop-blur-md shadow-lg">
        <div className="relative w-3 h-3 flex items-center justify-center">
          <span 
            className="absolute inline-flex h-full w-full rounded-full animate-ping opacity-75"
            style={{ backgroundColor: vitality > 60 ? '#22d3ee' : '#f59e0b' }}
          />
          <span 
            className="relative inline-flex rounded-full h-2.5 w-2.5"
            style={{ backgroundColor: vitality > 60 ? '#22d3ee' : '#f59e0b' }}
          />
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
            Reef Vitality
          </span>
          <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
            {vitality}% {vitality >= 80 ? 'Thriving Ecosystem ✨' : vitality >= 50 ? 'Healing & Recovering 🌿' : 'Bleached & Faded 💔'}
          </span>
        </div>
      </div>

      {/* 4. Active Impact Indicator Tag */}
      {selectedImpact && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 z-30 bg-cyan-950/80 border border-cyan-500/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-300 backdrop-blur-md flex items-center gap-1.5 shadow-[0_0_12px_rgba(34,211,238,0.2)] uppercase tracking-wider"
        >
          <Sparkles size={14} className="text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Restoring: {selectedImpact}</span>
        </motion.div>
      )}

      {/* 5. Floating Animated Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            className="absolute bg-cyan-200/40 rounded-full border border-cyan-100/60"
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              bottom: '-20px',
            }}
            animate={{
              y: ['0px', '-420px'],
              x: ['0px', (b.id % 2 === 0 ? 15 : -15) + 'px', '0px'],
              opacity: [0, 0.7, 0.9, 0],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              delay: b.delay,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* 6. Swimming Sea Turtle (Luna) */}
      <AnimatePresence>
        {showTurtle && (
          <motion.div
            initial={{ x: '-120px', y: '160px', opacity: 0 }}
            animate={{
              x: ['-100px', '100%'],
              y: ['160px', '120px', '180px'],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute z-20 pointer-events-none"
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-cyan-300 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
              <path d="M32 12C24 12 18 18 18 26C18 36 26 44 32 50C38 44 46 36 46 26C46 18 40 12 32 12Z" fill="currentColor" opacity="0.8" />
              <circle cx="32" cy="10" r="4" fill="currentColor" />
              <path d="M14 22C8 20 4 24 6 28C10 30 16 26 18 24Z" fill="currentColor" />
              <path d="M50 22C56 20 60 24 58 28C54 30 48 26 46 24Z" fill="currentColor" />
              <path d="M20 40C14 44 12 48 16 50C18 50 22 44 22 42Z" fill="currentColor" />
              <path d="M44 40C50 44 52 48 48 50C46 50 42 44 42 42Z" fill="currentColor" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Swimming Fish School */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {Array.from({ length: fishCount }).map((_, i) => {
          const speed = 10 + (i % 3) * 4;
          const topPos = 80 + (i * 45) % 220;
          return (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? '-60px' : '100%', y: topPos }}
              animate={{
                x: i % 2 === 0 ? ['-60px', '100%'] : ['100%', '-60px'],
                y: [topPos, topPos + (i % 2 === 0 ? 15 : -15), topPos],
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                delay: i * 1.5,
                ease: 'easeInOut',
              }}
              className="absolute"
            >
              <svg 
                width="28" 
                height="18" 
                viewBox="0 0 28 18" 
                fill="none" 
                className={`filter drop-shadow-[0_0_6px_rgba(34,211,238,0.4)] ${i % 2 === 0 ? '' : 'scale-x-[-1]'}`}
                style={{ color: i % 2 === 0 ? '#38bdf8' : '#34d399' }}
              >
                <path d="M2 9C7 3 18 3 22 9C18 15 7 15 2 9Z" fill="currentColor" opacity="0.85" />
                <path d="M22 9L27 3V15L22 9Z" fill="currentColor" opacity="0.9" />
                <circle cx="6" cy="7" r="1" fill="#040810" />
              </svg>
            </motion.div>
          );
        })}
      </div>

      {/* 8. Bottom Coral Garden Layer */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-20 flex items-end justify-between px-4 sm:px-10 pointer-events-none">
        
        {/* Coral Left Formation */}
        <motion.div 
          animate={{ scale: vitality > 40 ? 1.05 : 0.95 }}
          transition={{ duration: 0.8 }}
          className="relative transition-all duration-1000"
          style={{
            filter: vitality > 50 
              ? `drop-shadow(0 0 16px rgba(34, 211, 238, ${vitality / 150})) brightness(${0.7 + vitality / 150})` 
              : 'grayscale(0.8) opacity-50'
          }}
        >
          <svg width="120" height="130" viewBox="0 0 120 130" fill="none">
            <path d="M30 130V60C30 45 15 35 10 20C20 20 30 35 40 50C50 35 65 20 60 10C70 20 65 40 55 55V130" fill={vitality > 50 ? "#06b6d4" : "#475569"} />
            <path d="M60 130V75C60 60 80 50 85 30C92 40 82 55 75 70V130" fill={vitality > 50 ? "#14b8a6" : "#334155"} />
            <circle cx="10" cy="20" r="4" fill={vitality > 50 ? "#38bdf8" : "#64748b"} />
            <circle cx="60" cy="10" r="5" fill={vitality > 50 ? "#a855f7" : "#64748b"} />
            <circle cx="85" cy="30" r="4" fill={vitality > 50 ? "#f43f5e" : "#64748b"} />
          </svg>
        </motion.div>

        {/* Coral Center Formation */}
        <motion.div 
          animate={{ scale: vitality > 60 ? 1.08 : 0.92 }}
          transition={{ duration: 0.8 }}
          className="relative transition-all duration-1000 hidden sm:block"
          style={{
            filter: vitality > 50 
              ? `drop-shadow(0 0 20px rgba(52, 211, 153, ${vitality / 150})) brightness(${0.7 + vitality / 150})` 
              : 'grayscale(0.8) opacity-50'
          }}
        >
          <svg width="140" height="150" viewBox="0 0 140 150" fill="none">
            <path d="M70 150V50C70 30 40 20 35 5C50 15 65 30 75 45C85 25 110 15 115 5C115 20 95 35 85 55V150" fill={vitality > 50 ? "#10b981" : "#475569"} />
            <path d="M40 150V90C40 75 20 65 15 50C25 55 35 70 45 85V150" fill={vitality > 50 ? "#3b82f6" : "#334155"} />
            <circle cx="35" cy="5" r="5" fill={vitality > 50 ? "#38bdf8" : "#64748b"} />
            <circle cx="115" cy="5" r="6" fill={vitality > 50 ? "#f43f5e" : "#64748b"} />
            <circle cx="15" cy="50" r="4" fill={vitality > 50 ? "#ec4899" : "#64748b"} />
          </svg>
        </motion.div>

        {/* Coral Right Formation */}
        <motion.div 
          animate={{ scale: vitality > 40 ? 1.05 : 0.95 }}
          transition={{ duration: 0.8 }}
          className="relative transition-all duration-1000"
          style={{
            filter: vitality > 50 
              ? `drop-shadow(0 0 16px rgba(244, 63, 94, ${vitality / 150})) brightness(${0.7 + vitality / 150})` 
              : 'grayscale(0.8) opacity-50'
          }}
        >
          <svg width="110" height="135" viewBox="0 0 110 135" fill="none">
            <path d="M80 135V55C80 40 95 30 100 15C90 20 80 35 70 50C60 35 45 20 40 10C45 25 55 40 65 55V135" fill={vitality > 50 ? "#f43f5e" : "#475569"} />
            <path d="M40 135V70C40 55 25 45 20 30C30 35 35 50 45 65V135" fill={vitality > 50 ? "#8b5cf6" : "#334155"} />
            <circle cx="100" cy="15" r="5" fill={vitality > 50 ? "#fbbf24" : "#64748b"} />
            <circle cx="40" cy="10" r="4" fill={vitality > 50 ? "#38bdf8" : "#64748b"} />
            <circle cx="20" cy="30" r="4" fill={vitality > 50 ? "#34d399" : "#64748b"} />
          </svg>
        </motion.div>
      </div>

    </div>
  );
};

export default ReefSimulation;
