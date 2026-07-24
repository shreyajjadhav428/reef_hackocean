import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlayCircle, FiArrowRight } from 'react-icons/fi';
import StoryOverlay from '../common/StoryOverlay';

const SuccessStories = () => {
  const [selectedStoryTitle, setSelectedStoryTitle] = useState('');
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const storiesData = [
    {
      title: "The Return of the Manta Rays",
      location: "Nusa Penida, Bali",
      category: "Ecosystem Revival",
      description: "After three years of intensive coral replanting and the enforcement of a new marine protected area, the local reef has seen a 400% increase in biodiversity. Most notably, the majestic Manta Rays have returned to their historical cleaning stations.",
      image: "bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop')]",
      hasVideo: true
    },
    {
      title: "From Ghost Nets to Guardian Reefs",
      location: "Andaman Islands",
      category: "Debris Removal",
      description: "Our volunteer diving teams successfully extracted over 12 tons of abandoned fishing gear. Working alongside local fishermen, we transformed the cleared zones into active coral nurseries, providing a new sustainable livelihood for the community.",
      image: "bg-[url('https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=1200&auto=format&fit=crop')]",
      hasVideo: false
    }
  ];

  const handleOpenStory = (title) => {
    setSelectedStoryTitle(title);
    setIsOverlayOpen(true);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  const textVariantsReverse = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-12 relative z-10">
      
      {/* Section Header */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20"
      >
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Real Results</h3>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Stories of <span className="font-light text-slate-300">Hope.</span>
        </h2>
        <div className="w-16 h-[2px] bg-cyan-400 mx-auto opacity-60"></div>
      </motion.div>

      {/* Stories List */}
      <div className="space-y-24 md:space-y-32">
        {storiesData.map((story, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-0 relative`}>
              
              {/* Image Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full lg:w-2/3 h-[400px] md:h-[500px] rounded-3xl overflow-hidden relative group shadow-2xl z-10 border border-slate-800/80"
              >
                <div className={`absolute inset-0 ${story.image} bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 ease-out`}></div>
                
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-[#040810]/40 mix-blend-multiply"></div>
                <div className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r ${isEven ? 'from-[#040810] lg:via-[#040810]/60' : 'from-[#040810] lg:via-[#040810]/60'} to-transparent opacity-90`}></div>

                {/* Optional Play Button for Video Stories */}
                {story.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div 
                      onClick={() => handleOpenStory(story.title)}
                      className="w-20 h-20 rounded-full bg-[#050c18]/80 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-[#9ce3ec] group-hover:text-slate-950 group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)] pointer-events-auto cursor-pointer"
                    >
                      <FiPlayCircle size={40} className="ml-1" />
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Text Content (Overlapping the image on desktop) */}
              <motion.div 
                variants={isEven ? textVariants : textVariantsReverse}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`w-full lg:w-1/2 lg:absolute z-20 ${isEven ? 'lg:right-0' : 'lg:left-0'}`}
              >
                <div className="bg-[#050c18] border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-2xl">
                  <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4 block">
                    {story.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {story.title}
                  </h3>
                  <p className="text-cyan-300 text-sm md:text-base font-semibold mb-6 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-cyan-400"></span>
                    {story.location}
                  </p>
                  <p className="text-slate-300 text-base font-normal leading-relaxed mb-8">
                    {story.description}
                  </p>
                  <button 
                    onClick={() => handleOpenStory(story.title)}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors font-semibold tracking-wide group cursor-pointer"
                  >
                    Read Full Report
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

            </div>
          );
        })}
      </div>

      {/* Full-Screen Story Overlay */}
      <StoryOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
        title={selectedStoryTitle}
      />

    </section>
  );
};

export default SuccessStories;