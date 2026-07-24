import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Shield, Trash2, BookOpen, Compass, CheckCircle2 } from 'lucide-react';

const impactOptions = [
  {
    id: 'coral',
    title: 'Restore Coral',
    icon: Droplet,
    description: 'Fragment & replant heat-resilient coral species directly into degraded marine sanctuaries.',
    tag: 'Core Mission',
  },
  {
    id: 'turtle',
    title: 'Protect Sea Turtles',
    icon: Shield,
    description: 'Safeguard endangered sea turtle nesting sites and coastal migration corridors.',
    tag: 'Wildlife Protection',
  },
  {
    id: 'cleanup',
    title: 'Clean Coastlines',
    icon: Trash2,
    description: 'Remove ghost nets, microplastics, and marine debris before they harm ocean life.',
    tag: 'Debris Removal',
  },
  {
    id: 'education',
    title: 'Ocean Education',
    icon: BookOpen,
    description: 'Train local coastal communities and empower the next generation of youth guardians.',
    tag: 'Community Impact',
  },
  {
    id: 'research',
    title: 'Marine Research',
    icon: Compass,
    description: 'Deploy AI sensors and oceanographic monitoring tools to study reef resilience.',
    tag: 'Scientific Action',
  },
];

const ImpactSelector = ({ selectedImpact, onSelectImpact }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 z-20">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-3">Step 1</h3>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
          Choose Your Impact
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-normal">
          Select an initiative to see its transformation in the interactive reef simulation above.
        </p>
      </div>

      {/* Impact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
        {impactOptions.map((option) => {
          const IconComp = option.icon;
          const isSelected = selectedImpact === option.id;

          return (
            <motion.div
              key={option.id}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectImpact(option.id)}
              className={`relative rounded-3xl p-6 border cursor-pointer transition-all duration-300 flex flex-col justify-between select-none ${
                isSelected
                  ? 'bg-[#07162b] border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)] text-white'
                  : 'bg-[#050c18]/90 border-slate-800/90 text-slate-300 hover:border-slate-700 hover:bg-[#061224]'
              }`}
            >
              {/* Selected Badge Checkmark */}
              {isSelected && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 text-cyan-400"
                >
                  <CheckCircle2 size={20} className="fill-cyan-950" />
                </motion.div>
              )}

              <div>
                {/* Category Tag */}
                <span className={`text-[10px] font-extrabold uppercase tracking-widest block mb-4 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`}>
                  {option.tag}
                </span>

                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  isSelected 
                    ? 'bg-cyan-950 border border-cyan-400/60 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.3)]' 
                    : 'bg-[#071324] border border-slate-800 text-cyan-400'
                }`}>
                  <IconComp size={24} />
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                  {option.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  {option.description}
                </p>
              </div>

              {/* Bottom Glow Bar */}
              <div className={`mt-6 h-1 w-full rounded-full transition-colors duration-300 ${isSelected ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-slate-800'}`} />
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default ImpactSelector;
