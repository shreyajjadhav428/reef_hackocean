import React, { Suspense } from "react";
import Hero from "../components/home/Hero";

// Lazy-load below-the-fold components
const Dive = React.lazy(() => import("../components/home/Dive"));
const CoralZone = React.lazy(() => import("../components/home/CoralZone"));
const ThreatZone = React.lazy(() => import("../components/home/ThreatZone"));
const RestorationZone = React.lazy(() => import("../components/home/RestorationZone"));
const ExploreMore = React.lazy(() => import("../components/home/ExploreMore"));
const LunaSticky = React.lazy(() => import("../components/home/LunaSticky"));
const ChapterScroller = React.lazy(() => import("../components/home/ChapterScroller"));
const InteractiveFish = React.lazy(() => import("../components/common/InteractiveFish"));

const Home = () => {
  return (
    <div id="chapter-hero" className="min-h-screen bg-[#040810] text-white selection:bg-cyan-500 selection:text-slate-950" style={{ scrollSnapType: 'y mandatory' }}>
      {/* 1. Surface Hero Section (with Navbar) - Kept synchronous for LCP */}
      <Hero />

      {/* Wrap everything below the fold in Suspense */}
      <Suspense fallback={<div className="h-screen bg-[#040810]" />}>
        {/* 2. Dive Deeper / Chapter Navigator Section */}
        <Dive />

        {/* 3 & 4. A World of Life Beneath the Waves (Coral Reef Chapter & Species Tiles) */}
        <CoralZone />

        {/* 5. Our Oceans Are in Danger (Threat Zone Chapter) */}
        <ThreatZone />

        {/* 6. You Can Help Restore Our Oceans (Hope / Interactive Restoration Dropzone) */}
        <RestorationZone />

        {/* 7. Want to Learn More? (Explore Navigation Cards) */}
        <ExploreMore />

        {/* Sticky Right-side Chapter Scroller Navigator */}
        <ChapterScroller />

        {/* Sticky Luna Sea Turtle companion from Dive section onwards */}
        <LunaSticky />

        {/* Global Interactive Fish Companion */}
        <InteractiveFish />
      </Suspense>
    </div>
  );
};

export default Home;


