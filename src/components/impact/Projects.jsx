import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiArrowRight, FiActivity } from 'react-icons/fi';
import StoryOverlay from '../common/StoryOverlay';

const Projects = () => {
  const [selectedStoryTitle, setSelectedStoryTitle] = useState('');
  const [selectedStoryContent, setSelectedStoryContent] = useState('');
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const projectsData = [
    {
      title: "Operation Coral Oasis",
      location: "Great Barrier Reef, Australia",
      status: "Active",
      description: "A large-scale restoration effort focusing on planting heat-tolerant coral species to combat bleaching events.",
      fullStory: `Restoring Hope, One Coral at a Time.

Opening Hook

When a coral reef loses its color, it isn't just a beautiful landscape fading away—it is an entire underwater city struggling to survive. Fish lose their homes, marine life begins to disappear, and an ecosystem that took thousands of years to grow can decline within a single generation.

But even the most fragile reefs can recover when people choose to act.


---

The Challenge

Rising ocean temperatures have triggered repeated coral bleaching events across reef ecosystems worldwide. Many corals expel the microscopic algae that provide them with energy, leaving behind pale white skeletons that are vulnerable to disease and death. Without intervention, these reefs face an uncertain future.


---

Our Mission

Operation Coral Oasis was launched with one clear objective: restore damaged reefs using heat-tolerant coral species capable of surviving warmer ocean conditions.

Marine scientists, restoration specialists, and volunteers worked together to cultivate resilient coral fragments in underwater nurseries before carefully transplanting them onto degraded reef structures. Each fragment represented a small but meaningful step toward rebuilding an ecosystem.


---

How Restoration Works

The process begins long before a coral reaches the reef. Healthy parent colonies are selected based on their resilience to higher temperatures. Small fragments are then nurtured in controlled underwater nurseries where they grow in protected conditions.

Once strong enough, divers transplant these corals onto damaged reef areas using environmentally safe attachment methods. Over time, the fragments expand, merge with neighboring colonies, and begin providing shelter for marine life once again.


---

Early Signs of Recovery

Within months, schools of colorful reef fish returned to areas that had once appeared lifeless. Young coral colonies continued to grow, invertebrates recolonized the reef, and biodiversity slowly began to increase. While restoration is a long-term commitment, every healthy coral planted represents another opportunity for the ecosystem to recover naturally.


---

Closing Message

A thriving reef is never rebuilt overnight. It grows through patience, science, and thousands of small actions working together. Operation Coral Oasis reminds us that hope beneath the waves is something we can help create.`,
      image: "bg-[url('https://images.unsplash.com/photo-1546505858-a836da32a39a?q=80&w=800&auto=format&fit=crop')]",
      featured: true
    },
    {
      title: "Mangrove Renewal Project",
      location: "Bali, Indonesia",
      status: "Completed",
      description: "Restoring coastal mangrove forests to protect marine biodiversity and prevent coastal erosion.",
      fullStory: `Where the Forest Meets the Sea.

Opening Hook

Long before waves reach the shore, nature has already built a powerful line of defense. Mangrove forests stand between the ocean and the land, protecting coastlines, nurturing marine life, and quietly supporting millions of people every day.

When these forests disappear, the impact is felt far beyond the shoreline.


---

The Challenge

Rapid coastal development, pollution, and changing climate conditions have led to the loss of large areas of mangrove habitat. Without these forests, coastlines become increasingly vulnerable to erosion, storm surges, and habitat loss for countless marine species that depend on mangrove roots during the earliest stages of life.


---

Our Mission

The Mangrove Renewal Project focuses on restoring degraded coastal forests while strengthening the connection between healthy shorelines and thriving marine ecosystems.

Teams carefully identify damaged coastal zones, remove accumulated waste, improve water flow where possible, and plant native mangrove saplings suited to local environmental conditions. Community volunteers, researchers, and environmental organizations work together to ensure each restoration site has the best opportunity to flourish.


---

Why Mangroves Matter

Mangroves serve as natural nurseries for fish, crabs, and countless marine organisms. Their intricate root systems provide shelter for juvenile species while trapping sediment that helps maintain water quality. They also absorb significant amounts of carbon, making them valuable allies in addressing climate change.


---

Signs of Recovery

As young mangroves establish themselves, birds begin returning to nest, fish populations increase within the sheltered roots, and coastlines become more resilient against erosion. Each restored forest strengthens the relationship between land and sea while creating healthier habitats for future generations.


---

Closing Message

Protecting the ocean doesn't always begin beneath the waves. Sometimes, it begins where the forest meets the sea.`,
      image: "bg-[url('https://images.unsplash.com/photo-1621274220335-ebde89b0d1bf?q=80&w=800&auto=format&fit=crop')]",
      featured: false
    },
    {
      title: "Deep Sea Debris Removal",
      location: "Pacific Garbage Patch",
      status: "Active",
      description: "Deploying advanced diving teams and underwater drones to extract ghost nets and microplastics.",
      fullStory: `Recovering What the Ocean Never Chose to Keep.

Opening Hook

Some of the ocean's greatest dangers cannot be seen from the surface. Beneath the waves, abandoned fishing nets, discarded equipment, and decades of marine debris continue to drift silently through fragile ecosystems, trapping wildlife and damaging habitats long after they have been forgotten.

Removing them is one of the ocean's most difficult challenges.


---

The Challenge

Ghost nets and submerged debris pose an ongoing threat to marine biodiversity. Sea turtles, sharks, coral reefs, and countless other species can become entangled in abandoned fishing gear that continues to capture marine life for years. Many of these hazards rest hundreds of meters below the surface, making recovery both technically demanding and time-consuming.


---

Our Mission

Deep Sea Debris Renewal combines skilled dive teams with advanced underwater robotics to locate, document, and safely recover marine debris from sensitive ecosystems.

Using remotely operated vehicles, sonar mapping, and specialized recovery equipment, teams identify hazardous materials before carefully removing them without causing additional damage to surrounding habitats. Every recovered net and every piece of debris contributes to a cleaner, safer ocean.


---

Technology Beneath the Waves

Modern underwater drones allow researchers to reach locations that are unsafe or inaccessible for human divers. High-definition cameras, precision navigation systems, and robotic manipulators make it possible to inspect reefs, identify abandoned fishing equipment, and assist recovery operations with remarkable accuracy.


---

Restoring the Ecosystem

Once debris is removed, marine life gradually begins reclaiming the habitat. Coral colonies continue growing without obstruction, fish return to previously disturbed areas, and vulnerable species face fewer risks from entanglement. Recovery may take time, but every successful cleanup allows nature another chance to heal.


---

Closing Message

The ocean remembers everything we leave behind. Deep Sea Debris Renewal is a reminder that protecting marine life also means taking responsibility for what no longer belongs beneath the waves.
`,
      image: "bg-[url('https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?q=80&w=800&auto=format&fit=crop')]",
      featured: false
    }
  ];

  const handleOpenStory = (project) => {
    setSelectedStoryTitle(project.title);
    setSelectedStoryContent(project.fullStory);
    setIsOverlayOpen(true);
  };

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
              
              <button 
                onClick={() => handleOpenStory(project)}
                className="flex items-center gap-3 text-cyan-400 font-semibold group/btn cursor-pointer"
              >
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

      {/* Full-Screen Story Overlay */}
      <StoryOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
        title={selectedStoryTitle}
        content={selectedStoryContent}
      />

    </section>
  );
};

export default Projects;