import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiCpu, FiUsers, FiArrowRight } from 'react-icons/fi';

const FutureGoals = () => {
  const goalsData = [
    {
      title: "Global Reef Monitoring Network",
      description: "Deploying AI-driven underwater sensors across 50 vulnerable reef systems to provide real-time data on temperature changes and biodiversity health.",
      icon: <FiCpu size={28} />,
      year: "By 2028"
    },
    {
      title: "1 Million Ocean Guardians",
      description: "Expanding our digital education and volunteer platform to train and certify one million active marine conservationists worldwide.",
      icon: <FiUsers size={28} />,
      year: "By 2030"
    },
    {
      title: "30x30 Conservation Target",
      description: "Partnering with international governments to ensure 30% of the world's oceans are designated as fully protected marine areas.",
      icon: <FiTarget size={28} />,
      year: "By 2030"
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
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-12 pb-24 relative z-10">
      
      {/* Decorative Light Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none mix-blend-screen filter blur-[80px]"></div>

      {/* Section Header */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 relative z-10"
      >
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Looking Ahead</h3>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
          Our Vision for <span className="font-light text-slate-300">Tomorrow.</span>
        </h2>
        <div className="w-16 h-[2px] bg-cyan-400 mx-auto opacity-60"></div>
      </motion.div>

      {/* Goals Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
      >
        {goalsData.map((goal, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="group bg-[#050c18] border border-slate-800/80 rounded-3xl p-8 lg:p-10 shadow-2xl hover:bg-[#060e1b] hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
          >
            {/* Subtle Hover Glow */}
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Header: Icon & Year */}
            <div className="flex items-start justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#071324] border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-[#9ce3ec] group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                {goal.icon}
              </div>
              <span className="bg-[#071324] border border-slate-800 text-cyan-400 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                {goal.year}
              </span>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {goal.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base font-normal leading-relaxed mb-6">
                {goal.description}
              </p>
            </div>

            {/* Action Link */}
            <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors text-sm font-semibold tracking-wide mt-auto group/btn w-fit cursor-pointer">
              Explore Initiative
              <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default FutureGoals;