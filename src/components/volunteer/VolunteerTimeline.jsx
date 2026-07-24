import React from 'react';
import { motion } from 'framer-motion';
import { FiEdit3, FiBookOpen, FiTrash2, FiShield } from 'react-icons/fi';

const VolunteerTimeline = () => {
  const journeySteps = [
    {
      phase: "Step 01",
      title: "Sign Up",
      description: "Join our global network of ocean advocates. Create your profile and tell us about your skills and passion for marine conservation.",
      icon: <FiEdit3 size={24} />,
      imageSrc: "/images/volunteer_action_bg.png"
    },
    {
      phase: "Step 02",
      title: "Training",
      description: "Complete our immersive online orientation. Learn about local reef ecosystems, safety protocols, and effective restoration techniques.",
      icon: <FiBookOpen size={24} />,
      imageSrc: "/images/volunterring wokring.jpg"
    },
    {
      phase: "Step 03",
      title: "Cleanup & Restoration",
      description: "Dive in. Participate in local beach cleanups, underwater trash removal, or assist in our coral fragmentation nurseries.",
      icon: <FiTrash2 size={24} />,
      imageSrc: "/images/collecting the garbage.jpg"
    },
    {
      phase: "Step 04",
      title: "Ocean Guardian",
      description: "Become a certified REEF Guardian. Lead your own community initiatives and mentor the next wave of volunteers.",
      icon: <FiShield size={24} />,
      imageSrc: "/images/corals.jpg"
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-20 relative">
      
      {/* Hero / Header Section */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-24"
      >
        <h3 className="text-cyan-300 uppercase tracking-[0.3em] text-xs sm:text-sm font-bold mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Take Action</h3>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          Your Journey to <br />
          <span className="font-light text-slate-200">Ocean Guardian.</span>
        </h1>
        <p className="text-slate-100 text-lg max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          Every massive wave starts with a single ripple. Here is how you can transform your passion into tangible impact for our coral reefs.
        </p>
      </motion.div>

      {/* The Journey Timeline */}
      <div className="relative wrap overflow-hidden p-4 md:p-10">
        
        {/* Central Connecting Line */}
        <div className="absolute border-opacity-30 border-cyan-500 h-full border-l-2 left-8 md:left-1/2 md:-ml-[1px] top-0 z-0 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent"></div>

        {/* Timeline Steps */}
        <div className="relative z-10 flex flex-col space-y-16">
          {journeySteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Container for alternating layout on desktop */}
                <div className={`hidden md:block md:w-1/2 ${isEven ? 'pl-16' : 'pr-16'}`}>
                  <div className="w-full h-48 rounded-3xl overflow-hidden shadow-2xl relative group border border-slate-800/80">
                    <img 
                      src={step.imageSrc} 
                      alt={step.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-[#050c18]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>
                
                {/* Glowing Node Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#050c18] border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] z-20">
                  {step.icon}
                </div>
                
                {/* Content Card */}
                <div className={`w-full pl-24 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'} mt-4 md:mt-0`}>
                  <div className="bg-[#050c18] border border-slate-800/80 rounded-3xl p-8 shadow-xl hover:border-cyan-500/50 hover:bg-[#060e1b] transition-all duration-300 relative group overflow-hidden">
                    {/* Subtle glass reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    
                    <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-3 block">
                      {step.phase}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-base font-normal leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default VolunteerTimeline;