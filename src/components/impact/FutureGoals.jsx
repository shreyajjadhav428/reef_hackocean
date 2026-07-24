import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiCpu, FiUsers, FiArrowRight } from 'react-icons/fi';
import StoryOverlay from '../common/StoryOverlay';

const FutureGoals = () => {
  const [selectedInitiativeTitle, setSelectedInitiativeTitle] = useState('');
  const [selectedInitiativeDescription, setSelectedInitiativeDescription] = useState('');
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  /* =========================================================================
     FUTURE GOALS DATA & INITIATIVE PLACEHOLDERS
     ========================================================================= */
  const goalsData = [
    {
      title: "Global Reef Monitoring Network",
      description: "Deploying AI-driven underwater sensors across 50 vulnerable reef systems to provide real-time data on temperature changes and biodiversity health.",
      icon: <FiCpu size={28} />,
      year: "By 2028",

      /* ---------------------------------------------------------------------
         1. PASTE YOUR INITIATIVE TITLE HERE FOR GOAL #1
         --------------------------------------------------------------------- */
      initiativeTitle: "Global Reef Monitoring Network",

      /* ---------------------------------------------------------------------
         2. PASTE YOUR COMPLETE INITIATIVE DESCRIPTION HERE FOR GOAL #1
         --------------------------------------------------------------------- */
      initiativeDescription: `Launching 2028

Vision Statement

What if we could hear the ocean before it cries for help?

Around the world, coral reefs are changing every day. Rising temperatures, declining biodiversity, and environmental stress often go unnoticed until the damage is already severe. The Global Reef Monitoring Network envisions a future where conservation begins with knowledge—not reaction.


---

Initiative Overview

The Global Reef Monitoring Network aims to establish an interconnected system of AI-powered underwater monitoring stations across 50 of the world's most vulnerable coral reef ecosystems.

By continuously collecting environmental data, these intelligent monitoring systems will help scientists, conservationists, and local communities detect ecological changes in real time, enabling faster and more informed conservation decisions.


---

Key Objectives

Deploy AI-assisted underwater monitoring sensors.

Monitor ocean temperature, water quality, and reef health.

Track biodiversity trends across protected ecosystems.

Detect early warning signs of coral bleaching.

Build an open scientific database for global collaboration.



---

Why It Matters

Conservation becomes far more effective when problems are identified before ecosystems reach a critical tipping point.

Real-time environmental intelligence allows researchers to respond more quickly, prioritize restoration efforts, and better understand how coral reefs respond to changing ocean conditions.


---

Long-Term Vision

The Global Reef Monitoring Network represents the first step toward creating a living digital map of coral reef health—one capable of supporting smarter conservation strategies for decades to come.


---

Initiative Status

🟢 Planned — Launch Target: 2028


---

> "The better we understand the ocean today, the better we can protect it tomorrow."
`
    },
    {
      title: "1 Million Ocean Guardians",
      description: "Expanding our digital education and volunteer platform to train and certify one million active marine conservationists worldwide.",
      icon: <FiUsers size={28} />,
      year: "By 2030",

      /* ---------------------------------------------------------------------
         1. PASTE YOUR INITIATIVE TITLE HERE FOR GOAL #2
         --------------------------------------------------------------------- */
      initiativeTitle: "One Million Ocean Guardians",

      /* ---------------------------------------------------------------------
         2. PASTE YOUR COMPLETE INITIATIVE DESCRIPTION HERE FOR GOAL #2
         --------------------------------------------------------------------- */
      initiativeDescription: `Launching 2030

Vision Statement

The greatest force for conservation isn't technology—it's people.

Healthy oceans depend not only on scientists and researchers but also on millions of individuals who understand why marine ecosystems matter. One informed person can inspire an entire community.

Imagine what one million could achieve.


---

Initiative Overview

The One Million Ocean Guardians initiative seeks to build the world's largest digital community of trained ocean advocates by providing accessible conservation education, interactive learning experiences, and volunteer certification programs.

Participants will gain practical knowledge about marine ecosystems while contributing to local and global conservation efforts.


---

Key Objectives

Train and certify one million conservation volunteers.

Expand digital learning resources worldwide.

Support citizen science initiatives.

Connect volunteers with local restoration projects.

Encourage lifelong environmental stewardship.



---

Learning Journey

Participants will progress through interactive learning pathways covering:

Coral Reef Ecology

Marine Biodiversity

Ocean Pollution

Sustainable Living

Climate Awareness

Community Conservation


Each completed pathway contributes toward becoming a certified Ocean Guardian.


---

Why It Matters

Technology can monitor ecosystems.

Science can guide restoration.

But lasting change happens when people understand, care, and choose to act.

Education transforms awareness into action—and action creates lasting impact.


---

Initiative Status

🟢 Planned — Launch Target: 2030


---

> "Every ocean guardian begins with a single moment of curiosity."
`
    },
    {
      title: "30x30 Conservation Target",
      description: "Partnering with international governments to ensure 30% of the world's oceans are designated as fully protected marine areas.",
      icon: <FiTarget size={28} />,
      year: "By 2030",

      /* ---------------------------------------------------------------------
         1. PASTE YOUR INITIATIVE TITLE HERE FOR GOAL #3
         --------------------------------------------------------------------- */
      initiativeTitle: "The 30×30 Conservation Target",

      /* ---------------------------------------------------------------------
         2. PASTE YOUR COMPLETE INITIATIVE DESCRIPTION HERE FOR GOAL #3
         --------------------------------------------------------------------- */
      initiativeDescription: `Launching 2030

Vision Statement

A thriving ocean requires places where nature can simply be nature.

Marine ecosystems cannot recover if every part of the ocean is exposed to constant human pressure. Protecting biodiversity means allowing ecosystems the space and time they need to heal naturally.


---

Initiative Overview

The 30×30 Conservation Target supports a global vision of protecting 30 percent of the world's oceans through fully protected Marine Protected Areas (MPAs).

Working alongside governments, conservation organizations, researchers, and coastal communities, the initiative seeks to strengthen international cooperation for long-term ocean protection.


---

Strategic Priorities

Expand protected marine ecosystems.

Strengthen international conservation partnerships.

Support science-based policy development.

Protect biodiversity hotspots.

Improve long-term monitoring of marine protected areas.



---

Why Protected Oceans Matter

Marine Protected Areas serve as safe havens where coral reefs, fish populations, and marine ecosystems can recover with minimal human disturbance.

Healthy protected ecosystems often help replenish surrounding waters, benefiting biodiversity, fisheries, and coastal communities alike.


---

Looking Toward 2030

Achieving meaningful ocean protection requires collaboration across nations, scientific disciplines, and local communities.

The 30×30 vision represents more than a conservation target—it reflects a shared commitment to safeguarding the future of our blue planet.


---

Initiative Status

🟢 Planned — Launch Target: 2030


---

> "Protecting thirty percent of the ocean means preserving one hundred percent of its future."
`
    }
  ];

  const handleOpenInitiative = (goal) => {
    setSelectedInitiativeTitle(goal.initiativeTitle || goal.title);
    setSelectedInitiativeDescription(goal.initiativeDescription);
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-12 pb-24 relative z-10">
      
      {/* Decorative Light Ray */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none mix-blend-screen filter blur-[80px]"></div>

      {/* Section Header */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 relative z-10"
      >
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Looking Ahead</h3>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
          Our Vision for <span className="font-light text-slate-300">Tomorrow.</span>
        </h2>
        <div className="w-16 h-[2px] bg-cyan-400 mx-auto opacity-60"></div>
      </motion.div>

      {/* Goals Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
      >
        {goalsData.map((goal, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="group bg-[#050c18] border border-slate-800/80 rounded-3xl p-8 lg:p-10 shadow-2xl hover:bg-[#060e1b] hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
          >
            {/* Subtle Hover Glow */}
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Header: Icon & Year */}
            <div className="flex items-start justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#071324] border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-[#9ce3ec] group-hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                {goal.icon}
              </div>
              <span className="bg-[#071324] border border-slate-800 text-cyan-400 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                {goal.year}
              </span>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {goal.title}
              </h3>
              <p className="text-slate-300 text-sm md:text-base font-normal leading-relaxed mb-6">
                {goal.description}
              </p>
            </div>

            {/* Action Link */}
            <button 
              onClick={() => handleOpenInitiative(goal)}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors text-sm font-semibold tracking-wide mt-auto group/btn w-fit cursor-pointer"
            >
              Explore Initiative
              <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Full-Screen Initiative Overlay */}
      <StoryOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
        title={selectedInitiativeTitle}
        content={selectedInitiativeDescription}
      />

    </section>
  );
};

export default FutureGoals;