import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiDroplet, FiUsers, FiTrash2, FiGlobe } from 'react-icons/fi';

// Internal animated counter component for high-end cinematic feel
const AnimatedCounter = ({ to, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(to, 10);
      if (end === 0) return;
      
      const incrementTime = 16; // approx 60fps
      const totalFrames = duration / incrementTime;
      const increment = end / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [inView, to, duration]);

  return (
    <span ref={nodeRef} className="font-semibold">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const Statistics = () => {
  const statsData = [
    {
      title: "Corals Planted",
      value: "150000",
      suffix: "+",
      description: "Heat-resilient fragments restored to the ocean.",
      icon: <FiDroplet size={32} />
    },
    {
      title: "Active Volunteers",
      value: "12500",
      suffix: "+",
      description: "Ocean guardians trained and deployed globally.",
      icon: <FiUsers size={32} />
    },
    {
      title: "Plastic Removed",
      value: "850",
      suffix: "T",
      description: "Tons of debris extracted from marine habitats.",
      icon: <FiTrash2 size={32} />
    },
    {
      title: "Protected Zones",
      value: "45",
      suffix: "",
      description: "Marine areas actively monitored and conserved.",
      icon: <FiGlobe size={32} />
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-20 relative z-10">
      
      {/* Section Header */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h3 className="text-cyan-300 uppercase tracking-[0.3em] text-xs sm:text-sm font-bold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">The Numbers</h3>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          Measurable <span className="font-light text-slate-200">Impact.</span>
        </h2>
        <p className="text-slate-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          We believe in full transparency. Every dive, every fragment, and every volunteer hour contributes to a healthier ocean. Here is what we have achieved together.
        </p>
      </motion.div>

      {/* Statistics Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {statsData.map((stat, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="group relative bg-[#050c18] border border-slate-800/80 rounded-3xl p-8 text-center shadow-xl hover:bg-[#060e1b] hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="w-16 h-16 mx-auto rounded-full bg-[#071324] border border-slate-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-[#9ce3ec] group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              {stat.icon}
            </div>

            <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
              <AnimatedCounter to={stat.value} suffix={stat.suffix} />
            </h4>
            
            <h3 className="text-lg font-bold text-cyan-400 mb-3 uppercase tracking-wider text-sm">
              {stat.title}
            </h3>
            
            <p className="text-slate-400 text-sm font-normal leading-relaxed">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Statistics;