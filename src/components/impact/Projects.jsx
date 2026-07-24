import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiArrowRight, FiActivity } from 'react-icons/fi';

const Projects = () => {
  const projectsData = [
    {
      title: "Operation Coral Oasis",
      location: "Great Barrier Reef, Australia",
      status: "Active",
      description: "A large-scale restoration effort focusing on planting heat-tolerant coral species to combat bleaching events.",
      image: "bg-[url('https://images.unsplash.com/photo-1546505858-a836da32a39a?q=80&w=800&auto=format&fit=crop')]",
      featured: true
    },
    {
      title: "Mangrove Renewal Project",
      location: "Bali, Indonesia",
      status: "Completed",
      description: "Restoring coastal mangrove forests to protect marine biodiversity and prevent coastal erosion.",
      image: "bg-[url('https://images.unsplash.com/photo-1621274220335-ebde89b0d1bf?q=80&w=800&auto=format&fit=crop')]",
      featured: false
    },
    {
      title: "Deep Sea Debris Removal",
      location: "Pacific Garbage Patch",
      status: "Active",
      description: "Deploying advanced diving teams and underwater drones to extract ghost nets and microplastics.",
      image: "bg-[url('https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?q=80&w=800&auto=format&fit=crop')]",
      featured: false
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
    hidden: { opacity: 0, y: 50 },
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
        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
      >
        <div>
          <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Our Work</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Global Initiatives</h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors text-sm font-semibold tracking-wide group cursor-pointer">
          View All Projects
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className={`group relative rounded-3xl overflow-hidden shadow-2xl ${project.featured ? 'lg:col-span-12' : 'lg:col-span-6'} min-h-[400px] flex flex-col justify-end border border-slate-800/80`}
          >
            {/* Background Image with Parallax-like Zoom */}
            <div className={`absolute inset-0 ${project.image} bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 ease-out`}></div>
            
            {/* Cinematic Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#040810] via-[#040810]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-[#050c18]/30 group-hover:bg-transparent transition-colors duration-300"></div>

            {/* Status Badge */}
            <div className="absolute top-6 left-6 z-20">
              <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border backdrop-blur-md
                ${project.status === 'Active' 
                  ? 'bg-[#050c18]/90 border-cyan-500/50 text-cyan-300' 
                  : 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'}`}
              >
                {project.status === 'Active' && <FiActivity className="animate-pulse" />}
                {project.status}
              </span>
            </div>

            {/* Content Area */}
            <div className="relative z-20 p-8 md:p-12 w-full md:w-3/4 lg:w-2/3">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-3">
                <FiMapPin />
                <span>{project.location}</span>
              </div>
              
              <h3 className={`font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300 ${project.featured ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                {project.title}
              </h3>
              
              <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <button className="flex items-center gap-3 text-cyan-400 font-semibold group/btn cursor-pointer">
                <span className="relative overflow-hidden">
                  <span className="block group-hover/btn:-translate-y-full transition-transform duration-300">Read the Full Story</span>
                  <span className="block absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 text-cyan-200">Read the Full Story</span>
                </span>
                <FiArrowRight className="group-hover/btn:translate-x-1 group-hover/btn:text-cyan-200 transition-all duration-300" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Projects;