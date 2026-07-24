import { motion } from 'framer-motion';
import { FiAnchor, FiDroplet, FiLifeBuoy, FiGlobe } from 'react-icons/fi';

const Timeline = () => {
  const timelineData = [
    {
      year: "2018",
      title: "The First Dive",
      description: "REEF was founded by a small group of marine biologists and ocean advocates who saw the urgent need to protect degrading local coral ecosystems.",
      icon: <FiAnchor size={20} />
    },
    {
      year: "2020",
      title: "Coral Restoration Initiative",
      description: "Launched our first major coral nursery, successfully fragmenting and replanting over 10,000 heat-resilient corals back into the ocean.",
      icon: <FiDroplet size={20} />
    },
    {
      year: "2023",
      title: "Global Ocean Alliance",
      description: "Expanded our reach internationally, partnering with local communities and global NGOs to establish marine protected areas.",
      icon: <FiLifeBuoy size={20} />
    },
    {
      year: "2026",
      title: "A Bluer Future",
      description: "Leveraging cutting-edge storytelling and interactive digital experiences to educate millions and drive real-world conservation action.",
      icon: <FiGlobe size={20} />
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-12 relative">
      
      {/* Section Header */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
        <div className="w-16 h-[2px] bg-cyan-400 mx-auto opacity-60"></div>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
        
        {/* The Central Diving Line */}
        <div className="absolute border-opacity-30 border-cyan-500 h-full border-l-2 left-8 md:left-1/2 md:-ml-[1px] top-0 z-0 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent"></div>

        {/* Timeline Items */}
        <div className="relative z-10 flex flex-col space-y-12 md:space-y-24">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block md:w-1/2"></div>
                
                {/* Center Node Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#050c18] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] z-20">
                  {item.icon}
                </div>
                
                {/* Content Card */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'} mt-4 md:mt-0`}>
                  <div className="bg-[#050c18] border border-slate-800/80 rounded-2xl p-8 shadow-xl hover:border-cyan-500/50 hover:bg-[#060e1b] transition-all duration-300 relative overflow-hidden group">
                    {/* Hover light effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="text-cyan-400 font-bold text-xl mb-2 block tracking-widest">{item.year}</span>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-300 text-base font-normal leading-relaxed">
                      {item.description}
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

export default Timeline;