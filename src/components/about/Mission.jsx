import { motion } from 'framer-motion';
import { 
  FiCompass, 
  FiShield, 
  FiUsers, 
  FiActivity, 
  FiHeart 
} from 'react-icons/fi';

const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const valuesData = [
    {
      icon: <FiCompass size={28} />,
      title: "Curiosity",
      description: "We never stop exploring."
    },
    {
      icon: <FiShield size={28} />,
      title: "Stewardship",
      description: "We protect what sustains life."
    },
    {
      icon: <FiUsers size={28} />,
      title: "Community",
      description: "Meaningful change happens together."
    },
    {
      icon: <FiActivity size={28} />,
      title: "Science",
      description: "Knowledge guides every action."
    },
    {
      icon: <FiHeart size={28} />,
      title: "Hope",
      description: "Every reef deserves another chance."
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Hero Section */}
        <motion.div variants={fadeUpVariants} className="text-center max-w-4xl mx-auto mb-20">
          <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold mb-6">About Us</h3>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight">
            Our Mission Begins <br />
            <span className="font-light text-slate-300">Beneath the Waves.</span>
          </h1>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          variants={fadeUpVariants} 
          className="bg-[#050c18] border border-slate-800/80 rounded-3xl p-10 md:p-16 shadow-2xl max-w-5xl mx-auto mb-24 relative overflow-hidden"
        >
          {/* Decorative glass reflection */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-cyan-400"></span>
            Mission
            <span className="w-8 h-[1px] bg-cyan-400"></span>
          </h2>
          <p className="text-slate-300 text-xl md:text-2xl leading-relaxed font-normal text-center">
            To inspire people everywhere to discover, understand, and protect coral reef ecosystems through education, storytelling, and collective action.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div variants={fadeUpVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
          <div className="w-16 h-[2px] bg-cyan-400 mx-auto opacity-60"></div>
        </motion.div>

        {/* Values Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {valuesData.map((value, index) => (
            <motion.div 
              key={index}
              variants={fadeUpVariants}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-[#060e1b]/80 border border-slate-800/80 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-[#071426] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#071324] border border-slate-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 text-sm font-normal leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Mission;