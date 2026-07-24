import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Team = () => {
  const teamData = [
    {
      name: "Dr. Elena Rostova",
      role: "Lead Marine Biologist",
      imageSrc: "/images/team_elena.webp",
      bio: "Spearheads our global coral fragmenting and restoration nurseries.",
    },
    {
      name: "Marcus Chen",
      role: "Oceanographic Director",
      imageSrc: "/images/team_marcus.webp",
      bio: "Maps temperature anomalies to locate heat-resilient reef zones.",
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Community",
      imageSrc: "/images/team_sarah.webp",
      bio: "Builds alliances with local coastal communities and global NGOs.",
    },
    {
      name: "David Alaba",
      role: "Conservation Policy Lead",
      imageSrc: "/images/team_david.webp",
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
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Our People</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Team Behind the Waves</h2>
        <div className="w-16 h-[2px] bg-cyan-400 mx-auto opacity-60"></div>
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
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#050c18] border border-slate-800/80 rounded-3xl overflow-hidden shadow-xl hover:border-cyan-500/50 transition-all duration-300"
          >
            {/* Team Member Portrait Image */}
            <div className="w-full h-72 bg-[#060e1b] relative overflow-hidden">
              <img loading="lazy" 
                src={member.imageSrc} 
                alt={member.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Social Overlay */}
              <div className="absolute inset-0 bg-[#050c18]/85 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="w-10 h-10 rounded-full bg-[#9ce3ec] text-slate-950 flex items-center justify-center hover:bg-cyan-300 transition-colors">
                  <FiLinkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#9ce3ec] text-slate-950 flex items-center justify-center hover:bg-cyan-300 transition-colors">
                  <FiTwitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#9ce3ec] text-slate-950 flex items-center justify-center hover:bg-cyan-300 transition-colors">
                  <FiMail size={18} />
                </a>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-cyan-400 text-sm font-semibold mb-3 tracking-wide">
                {member.role}
              </p>
              <p className="text-slate-400 text-sm font-normal leading-relaxed">
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