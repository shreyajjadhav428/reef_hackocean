import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

const Benefits = () => {
  const benefitsData = [
    {
      title: "Make a Tangible Impact",
      description: "See the direct results of your work as damaged reefs transform back into thriving, colorful ecosystems.",
      icon: <FiHeart size={28} />
    },
    {
      title: "Earn Certifications",
      description: "Gain globally recognized marine conservation and specialized diving certifications as you progress.",
      icon: <FiAward size={28} />
    },
    {
      title: "Global Community",
      description: "Connect with like-minded ocean advocates, marine biologists, and conservationists from around the world.",
      icon: <FiUsers size={28} />
    },
    {
      title: "Career Development",
      description: "Build a unique portfolio of environmental action and leadership skills that stand out in any professional field.",
      icon: <FiTrendingUp size={28} />
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Why Join Us</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The REEF Guardian Experience</h2>
        <div className="w-16 h-[2px] bg-cyan-400 mx-auto opacity-60"></div>
      </motion.div>

      {/* Benefits Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
      >
        {benefitsData.map((benefit, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="group bg-[#050c18] border border-slate-800/80 rounded-3xl p-8 lg:p-10 shadow-xl hover:bg-[#060e1b] hover:border-cyan-500/50 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6 relative overflow-hidden"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none"></div>

            {/* Icon Container */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#071324] border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-[#9ce3ec] group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              {benefit.icon}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-slate-300 text-base font-normal leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Benefits;