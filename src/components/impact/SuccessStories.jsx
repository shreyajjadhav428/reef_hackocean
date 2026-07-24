import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlayCircle, FiArrowRight } from 'react-icons/fi';
import StoryOverlay from '../common/StoryOverlay';

const SuccessStories = () => {
  const [selectedReportTitle, setSelectedReportTitle] = useState('');
  const [selectedReportContent, setSelectedReportContent] = useState('');
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  /* =========================================================================
     SUCCESS STORIES DATA & REPORT PLACEHOLDERS
     ========================================================================= */
  const storiesData = [
    {
      title: "The Return of the Manta Rays",
      location: "Nusa Penida, Bali",
      category: "Ecosystem Revival",
      description: "After three years of intensive coral replanting and the enforcement of a new marine protected area, the local reef has seen a 400% increase in biodiversity. Most notably, the majestic Manta Rays have returned to their historical cleaning stations.",
      image: "bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop')]",
      hasVideo: true,

      /* ---------------------------------------------------------------------
         1. PASTE YOUR REPORT TITLE HERE FOR STORY #1
         --------------------------------------------------------------------- */
      reportTitle: "Ecosystem Revival : The Return of the Manta Rays — Nusa Penida, Bali",

      /* ---------------------------------------------------------------------
         2. PASTE YOUR COMPLETE REPORT CONTENT HERE FOR STORY #1
         --------------------------------------------------------------------- */
      reportContent: `Three years ago, large sections of the reef surrounding Nusa Penida showed visible signs of coral degradation following repeated bleaching events and increasing human pressure. Once-famous cleaning stations that regularly attracted majestic manta rays had grown increasingly quiet as coral health declined and marine biodiversity decreased.

In response, the Ecosystem Revival Initiative was launched to restore damaged reef habitats through large-scale coral transplantation, long-term ecosystem monitoring, and the establishment of a protected marine conservation zone.

Today, the reef tells a different story.


---

Background

Healthy coral reefs provide more than shelter for marine life—they form the foundation of entire ocean ecosystems. As reef conditions deteriorated, many species gradually abandoned the area, disrupting ecological relationships that had existed for generations.

Among the most noticeable changes was the disappearance of manta rays from their traditional cleaning stations, locations where cleaner fish remove parasites from larger marine animals. These sites are important indicators of reef health and biodiversity.

Recognizing the ecological significance of this decline, restoration teams began an ambitious effort to restore both habitat quality and ecosystem resilience.


---

Restoration Strategy

The project combined several complementary conservation approaches:

Large-scale transplantation of heat-tolerant coral species.

Continuous monitoring of coral survival and growth.

Installation of artificial reef structures to encourage marine recolonization.

Expansion and enforcement of a Marine Protected Area (MPA).

Collaboration with local communities, researchers, and conservation volunteers.

Public awareness programs promoting sustainable marine tourism.


Each strategy was designed not only to restore damaged coral but also to rebuild the ecological conditions necessary for long-term recovery.


---

Project Outcomes

After three years of continuous restoration and monitoring, encouraging signs of ecosystem recovery became increasingly visible.

Key observations included:

Significant improvement in coral cover across restoration sites.

Approximately 400% increase in recorded marine biodiversity within monitored areas.

Return of numerous reef fish, invertebrates, and other marine species.

Re-establishment of active cleaning stations used by manta rays.

Increased ecological stability throughout surrounding reef habitats.


Perhaps the most celebrated milestone was the return of manta rays to waters they had largely abandoned years earlier—a powerful symbol of ecosystem recovery.


---

Community Impact

Conservation success extended beyond the reef itself.

Local communities participated in reef monitoring, restoration activities, and sustainable tourism initiatives. Educational workshops helped strengthen awareness of marine conservation while creating new opportunities linked to eco-tourism rather than resource exploitation.

The project demonstrated that protecting biodiversity and supporting local livelihoods can work together.


---

Looking Ahead

Although recovery is encouraging, reef restoration remains an ongoing commitment.

Future priorities include:

Expanding coral restoration zones.

Continued biodiversity monitoring.

Strengthening protection against illegal fishing.

Increasing community-led conservation programs.

Improving climate resilience through adaptive restoration techniques.



---

Closing Statement

The return of the manta rays represents more than the recovery of a single species.

It reflects the resilience of nature when science, community action, and long-term commitment come together with a shared purpose.
`
    },
    {
      title: "From Ghost Nets to Guardian Reefs",
      location: "Andaman Islands",
      category: "Debris Removal",
      description: "Our volunteer diving teams successfully extracted over 12 tons of abandoned fishing gear. Working alongside local fishermen, we transformed the cleared zones into active coral nurseries, providing a new sustainable livelihood for the community.",
      image: "bg-[url('https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=1200&auto=format&fit=crop')]",
      hasVideo: false,

      /* ---------------------------------------------------------------------
         1. PASTE YOUR REPORT TITLE HERE FOR STORY #2
         --------------------------------------------------------------------- */
      reportTitle: "From Ghost Nets to Guardian Reefs : Community-Led Marine Restoration — Andaman Islands",

      /* ---------------------------------------------------------------------
         2. PASTE YOUR COMPLETE REPORT CONTENT HERE FOR STORY #2
         --------------------------------------------------------------------- */
      reportContent: `Abandoned fishing nets, commonly known as ghost nets, continue to threaten marine ecosystems long after they are discarded. Entangling marine wildlife, damaging coral reefs, and disrupting natural habitats, these invisible hazards represent one of the ocean's most persistent forms of pollution.

The Guardian Reefs Initiative was established to address this challenge by combining advanced dive operations with local community partnerships to remove marine debris while creating new opportunities for reef restoration.


---

Background

Ghost nets can remain in the ocean for decades, continuing to trap fish, sea turtles, sharks, and countless other marine organisms.

In several reef systems surrounding the Andaman Islands, years of abandoned fishing equipment had accumulated across coral habitats, reducing biodiversity and limiting natural reef recovery.

Recognizing that lasting conservation requires local participation, restoration teams partnered directly with regional fishing communities to develop sustainable solutions.


---

Restoration Approach

The initiative followed a coordinated multi-stage strategy.

Phase One

Mapping underwater debris using divers and remotely operated vehicles.

Phase Two

Carefully removing abandoned fishing gear without damaging surrounding coral structures.

Phase Three

Recycling recoverable materials wherever possible.

Phase Four

Transforming cleared reef zones into protected coral restoration nurseries.

Phase Five

Supporting alternative livelihood opportunities through eco-tourism, coral restoration, and marine stewardship programs.

This integrated approach ensured that cleanup efforts produced both environmental and social benefits.


---

Project Outcomes

The initiative achieved several important milestones during its initial restoration phase.

Highlights included:

More than 12 tonnes of abandoned fishing gear successfully removed.

Hundreds of ghost nets safely extracted from sensitive reef habitats.

Multiple degraded reef sites converted into active coral nursery zones.

Improved habitat conditions supporting increased marine biodiversity.

Strong collaboration between conservation teams and local fishing communities.


The transformation of previously damaged reef systems into thriving restoration sites demonstrated the long-term value of cooperative conservation.


---

Community Partnership

Rather than treating local fishers as part of the problem, the project recognized them as essential partners in the solution.

Community members contributed local ecological knowledge, assisted underwater cleanup operations, and participated in restoration training programs focused on sustainable marine resource management.

These partnerships helped strengthen trust while creating new conservation-focused employment opportunities.


---

Long-Term Vision

Future expansion of the Guardian Reefs Initiative will focus on:

Increasing ghost-net detection using underwater robotics.

Expanding coral nursery programs.

Supporting community-led reef monitoring.

Strengthening sustainable fisheries education.

Scaling restoration methods to additional island ecosystems.



---

Closing Statement

Every ghost net removed represents more than cleaner water.

It creates space for coral to grow, wildlife to return, and communities to build a more sustainable relationship with the ocean.

Conservation is most powerful when people become guardians of the ecosystems they depend upon.`
    }
  ];

  const handleOpenReport = (story) => {
    setSelectedReportTitle(story.reportTitle || story.title);
    setSelectedReportContent(story.reportContent);
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
                      onClick={() => handleOpenReport(story)}
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
                    onClick={() => handleOpenReport(story)}
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

      {/* Full-Screen Report Overlay */}
      <StoryOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
        title={selectedReportTitle}
        content={selectedReportContent}
      />

    </section>
  );
};

export default SuccessStories;