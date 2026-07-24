import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Team = () => {
  const teamData = [
    {
      name: "Dr. Elena Rostova",
      role: "Lead Marine Biologist",
      image: "ER",
      bio: "Spearheads our global coral fragmenting and restoration nurseries.",
    },
    {
      name: "Marcus Chen",
      role: "Oceanographic Director",
      image: "MC",
      bio: "Maps temperature anomalies to locate heat-resilient reef zones.",
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Community",
      image: "SJ",
      bio: "Builds alliances with local coastal communities and global NGOs.",
    },
    {
      name: "David Alaba",
      role: "Conservation Policy Lead",
      image: "DA",
      bio: "Advocates for marine protected areas at the international level.",
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 relative z-10">
      
      {/* Section Header */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h3 className="text-[#48CAE4] uppercase tracking-[0.3em] text-xs font-semibold mb-4">Our People</h3>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#CAF0F8] mb-4">The Team Behind the Waves</h2>
        <div className="w-16 h-[2px] bg-[#48CAE4] mx-auto opacity-50"></div>
      </motion.div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }} // Staggered entrance
            className="group relative bg-[#023E8A]/30 border border-[#0077B6]/20 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl hover:border-[#48CAE4]/50 transition-all duration-500"
          >
            {/* Image Placeholder / Avatar */}
            <div className="w-full h-64 bg-gradient-to-br from-[#03045E] to-[#023E8A] flex items-center justify-center relative overflow-hidden">
              {/* Subtle water overlay effect */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
              
              <span className="text-5xl font-light text-[#CAF0F8]/20 group-hover:text-[#CAF0F8]/40 transition-colors duration-500">
                {member.image}
              </span>

              {/* Hover Social Overlay */}
              <div className="absolute inset-0 bg-[#03045E]/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="w-10 h-10 rounded-full bg-[#48CAE4] text-[#03045E] flex items-center justify-center hover:bg-white transition-colors">
                  <FiLinkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#48CAE4] text-[#03045E] flex items-center justify-center hover:bg-white transition-colors">
                  <FiTwitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#48CAE4] text-[#03045E] flex items-center justify-center hover:bg-white transition-colors">
                  <FiMail size={18} />
                </a>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-xl font-medium text-[#CAF0F8] mb-1 group-hover:text-[#48CAE4] transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-[#48CAE4] text-sm font-semibold mb-3 tracking-wide">
                {member.role}
              </p>
              <p className="text-[#90E0EF]/80 text-sm font-light leading-relaxed">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Team;