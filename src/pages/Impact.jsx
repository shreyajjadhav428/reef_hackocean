import React from 'react';

// Component Imports
import Statistics from '../components/impact/Statistics';
import Projects from '../components/impact/Projects';
import WorldMap from '../components/impact/Worldmap';
import SuccessStories from '../components/impact/SuccessStories';
import FutureGoals from '../components/impact/FutureGoals';

const Impact = () => {
  return (
    <div className="min-h-screen bg-[#040810] text-white pt-28 pb-20 font-serif selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden select-none">
      
      {/* VIVID TOP HEADER BACKGROUND IMAGE (Extends to 20px below subheading) */}
      <div className="absolute top-0 inset-x-0 h-[480px] sm:h-[520px] lg:h-[540px] z-0 overflow-hidden pointer-events-none">
        <img loading="lazy"
          src="/images/surface ocean.webp"
          alt="Surface Ocean Habitat Impact"
          className="w-full h-full object-cover object-bottom opacity-85 brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/50 via-black/20 to-[#040810]" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#040810] to-transparent" />
      </div>

      {/* Subtle Ambient Background Elements for cinematic depth */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 fixed">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-950/30 rounded-full mix-blend-screen filter blur-[140px] opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-[#050c18] rounded-full mix-blend-screen filter blur-[160px] opacity-40"></div>
      </div>

      {/* Main Content Area - Components spaced for scroll immersion */}
      <main className="relative z-10 space-y-16 md:space-y-32 lg:space-y-40 flex flex-col items-center w-full">
        <Statistics />
        <Projects />
        <WorldMap />
        <SuccessStories />
        <FutureGoals />
      </main>

    </div>
  );
};

export default Impact;