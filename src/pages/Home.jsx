import Hero from "../components/home/Hero";
import Dive from "../components/home/Dive";
import CoralZone from "../components/home/CoralZone";
import ThreatZone from "../components/home/ThreatZone";
import RestorationZone from "../components/home/RestorationZone";
import ExploreMore from "../components/home/ExploreMore";

const Home = () => {
  return (
    <div id="chapter-hero" className="min-h-screen bg-[#040810] text-white selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. Surface Hero Section (with Navbar) */}
      <Hero />

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
    </div>
  );
};

export default Home;


