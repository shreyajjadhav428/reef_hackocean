import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHeart, FiShare2 } from 'react-icons/fi';

const Cta = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-6 md:px-12 py-16 mb-20 relative z-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="group bg-[#050c18] border border-slate-800/80 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
      >
        {/* Background Photo with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/underwater_hero.png"
            alt="Ocean Reef Sanctuary"
            className="w-full h-full object-cover object-center opacity-45 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040810] via-[#050c18]/85 to-[#040810]/80" />
        </div>

        {/* Ambient Light Ray Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500 mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none z-10"></div>

        {/* Card Content Container */}
        <div className="relative z-10">
          <motion.h3 variants={itemVariants} className="text-cyan-300 uppercase tracking-[0.3em] text-xs font-bold mb-6 drop-shadow-md">
            Other Ways to Help
          </motion.h3>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-light leading-tight text-white mb-6 drop-shadow-lg">
            Can't dive in today? <br className="hidden md:block" />
            <span className="font-semibold text-slate-100">You can still make waves.</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-slate-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md font-normal">
            Every contribution, whether it's funding a coral nursery or simply sharing our mission with your network, helps us protect the ocean's most vulnerable ecosystems.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/donate"
              className="w-full sm:w-auto bg-[#9ce3ec] hover:bg-[#82d6df] text-slate-950 font-semibold py-4 px-8 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-[0_0_20px_rgba(156,227,236,0.3)] hover:shadow-[0_0_30px_rgba(156,227,236,0.5)] cursor-pointer"
            >
              <FiHeart size={20} />
              <span>Donate Now</span>
            </Link>
            
            <button 
              className="w-full sm:w-auto bg-[#050c18]/80 backdrop-blur-md border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-200 font-semibold py-4 px-8 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 cursor-pointer shadow-lg"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'REEF - Ocean Conservation',
                    text: 'Join the movement to protect our marine ecosystems.',
                    url: window.location.href,
                  });
                }
              }}
            >
              <FiShare2 size={20} />
              <span>Share the Mission</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Cta;