import { motion } from 'framer-motion';

const Vision = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] // Custom cinematic easing
      } 
    }
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 2, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative flex items-center justify-center min-h-[60vh]">
      
      {/* Cinematic Glowing Orb Behind Text */}
      <motion.div 
        variants={glowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#48CAE4] rounded-full mix-blend-screen filter blur-[150px] md:blur-[250px] opacity-10 pointer-events-none"
      />

      <motion.div 
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#48CAE4]"></div>
          <h2 className="text-[#48CAE4] uppercase tracking-[0.3em] text-sm font-semibold">
            Our Vision
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#48CAE4]"></div>
        </div>

        <h3 className="text-3xl md:text-5xl lg:text-6xl font-light leading-snug md:leading-tight text-[#CAF0F8] drop-shadow-2xl">
          A future where <span className="font-semibold text-white">thriving coral reefs</span> continue to support vibrant oceans, resilient communities, and generations yet to come.
        </h3>
      </motion.div>

    </section>
  );
};

export default Vision;