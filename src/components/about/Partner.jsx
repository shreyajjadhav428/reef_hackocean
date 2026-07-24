import { motion } from 'framer-motion';
import { FiGlobe, FiSun, FiWind, FiCloudDrizzle } from 'react-icons/fi';

const Partner = () => {
  const partners = [
    { name: "Global Ocean Trust", icon: <FiGlobe size={40} /> },
    { name: "Solaris Marine", icon: <FiSun size={40} /> },
    { name: "Wind & Wave Org", icon: <FiWind size={40} /> },
    { name: "Aqua Life Initiative", icon: <FiCloudDrizzle size={40} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 mb-20">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="text-center"
      >
        <motion.h2 variants={itemVariants} className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold mb-8">
          Our Global Partners
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24"
        >
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center text-slate-500 hover:text-cyan-300 transition-colors duration-300 group cursor-pointer"
            >
              <div className="mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                {partner.icon}
              </div>
              <span className="text-sm font-medium tracking-wider">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Partner;