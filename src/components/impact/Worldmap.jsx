import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiDroplet, FiTrash2 } from 'react-icons/fi';

const WorldMap = () => {
  const [activeRegion, setActiveRegion] = useState(null);

  // Simulated coordinate data (percentages for responsive absolute positioning)
  const regionsData = [
    {
      id: "caribbean",
      name: "Caribbean Sea",
      top: "45%",
      left: "25%",
      corals: "25K+",
      debris: "120T",
      status: "Active Restoration"
    },
    {
      id: "mediterranean",
      name: "Mediterranean Coast",
      top: "35%",
      left: "50%",
      corals: "10K+",
      debris: "85T",
      status: "Monitoring"
    },
    {
      id: "indian-ocean",
      name: "Indian Ocean",
      top: "55%",
      left: "68%",
      corals: "50K+",
      debris: "300T",
      status: "Major Expansion"
    },
    {
      id: "coral-triangle",
      name: "Coral Triangle",
      top: "60%",
      left: "82%",
      corals: "65K+",
      debris: "345T",
      status: "Critical Zone"
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-12 relative z-10">
       
      {/* Section Header */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Global Reach</h3>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Our Impact <span className="font-light text-slate-300">Worldwide.</span>
        </h2>
        <div className="w-16 h-[2px] bg-cyan-400 mx-auto opacity-60"></div>
      </motion.div>

      {/* Interactive Map Container */}
      <motion.div 
        variants={mapVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative w-full aspect-square md:aspect-video bg-[#050c18] border-2 border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.2)] flex items-center justify-center p-4 group"
      >
        {/* Glowing Radial Ocean Light Behind Map */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18)_0%,transparent_70%)] pointer-events-none hidden md:block"></div>

        {/* World Map SVG Background - Vibrant Cyan Glow & High Visibility */}
        <div className="absolute inset-0 opacity-70 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain pointer-events-none filter brightness-150 invert-[0.85] hue-rotate-[155deg] saturate-[350%] drop-shadow-[0_0_14px_rgba(34,211,238,0.7)] transition-opacity duration-300"></div>

        {/* Decorative Compass Lines / Latitude Grid */}
        <div className="absolute inset-0 border-t border-b border-cyan-500/10 pointer-events-none my-12"></div>
        <div className="absolute inset-0 border-l border-r border-cyan-500/10 pointer-events-none mx-16"></div>

        {/* Dynamic Map Pins */}
        {regionsData.map((region) => (
          <div 
            key={region.id}
            className="absolute z-20 group"
            style={{ top: region.top, left: region.left }}
            onMouseEnter={() => setActiveRegion(region)}
            onMouseLeave={() => setActiveRegion(null)}
          >
            {/* Pulsing Dot */}
            <div className="relative flex items-center justify-center cursor-pointer">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40 animate-ping"></span>
              <div className="relative w-4 h-4 md:w-6 md:h-6 bg-cyan-400 rounded-full border-2 border-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.8)] flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                <FiMapPin className="text-slate-950 w-2 h-2 md:w-3 md:h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Glassmorphism Tooltip (Desktop Hover) */}
            <AnimatePresence>
              {activeRegion?.id === region.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 bg-[#060e1b]/95 border border-slate-800 rounded-2xl p-4 backdrop-blur-md shadow-2xl pointer-events-none hidden md:block"
                >
                  <h4 className="text-white font-bold text-lg mb-1">{region.name}</h4>
                  <p className="text-cyan-400 text-xs tracking-wider uppercase mb-3 pb-2 border-b border-slate-800">{region.status}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-slate-300">
                        <FiDroplet className="text-cyan-400" /> Corals
                      </span>
                      <span className="font-bold text-white">{region.corals}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-slate-300">
                        <FiTrash2 className="text-cyan-400" /> Debris
                      </span>
                      <span className="font-bold text-white">{region.debris}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Mobile Fallback Display (Visible only on small screens) */}
        <div className="absolute bottom-4 left-4 right-4 md:hidden">
          <AnimatePresence mode="wait">
            {activeRegion ? (
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-[#060e1b]/95 border border-slate-800 rounded-2xl p-4 backdrop-blur-md w-full shadow-2xl"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-bold">{activeRegion.name}</h4>
                  <span className="text-cyan-400 text-[10px] tracking-wider uppercase border border-slate-800 px-2 py-1 rounded-full">{activeRegion.status}</span>
                </div>
                <div className="flex gap-4 mt-2">
                  <span className="flex items-center gap-1 text-slate-300 text-sm">
                    <FiDroplet className="text-cyan-400 w-3 h-3" /> {activeRegion.corals}
                  </span>
                  <span className="flex items-center gap-1 text-slate-300 text-sm">
                    <FiTrash2 className="text-cyan-400 w-3 h-3" /> {activeRegion.debris}
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="bg-[#050c18] border border-slate-800 rounded-2xl p-3 text-center backdrop-blur-md"
              >
                <p className="text-slate-300 text-sm flex items-center justify-center gap-2">
                  <FiMapPin className="text-cyan-400 animate-bounce" /> Tap a glowing marker to explore
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
      </motion.div>
    </section>
  );
};

export default WorldMap;