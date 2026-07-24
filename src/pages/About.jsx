import Mission from '../components/about/Mission';
import Vision from '../components/about/Vision';
import Timeline from '../components/about/Timeline';
import Team from '../components/about/Team';
import Partner from '../components/about/Partner';

const About = () => {
  return (
    <div className="min-h-screen bg-[#040810] text-white pt-28 pb-20 font-serif selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden select-none">
      
      {/* VIVID TOP HEADER BACKGROUND IMAGE (Extends to 20px below subheading title) */}
      <div className="absolute top-0 inset-x-0 h-[440px] sm:h-[480px] lg:h-[500px] z-0 overflow-hidden pointer-events-none">
        <img loading="lazy"
          src="/images/about.webp"
          alt="About Reef Foundation"
          className="w-full h-full object-cover object-center opacity-85 brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/50 via-black/20 to-[#040810]" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#040810] to-transparent" />
      </div>

      {/* Subtle Ambient Background Elements to maintain cinematic depth across all sections */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 fixed">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-950/30 rounded-full mix-blend-screen filter blur-[140px] opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#050c18] rounded-full mix-blend-screen filter blur-[150px] opacity-40"></div>
      </div>

      {/* Main Content Area - Components spaced out to allow breathing room and scroll immersion */}
      <main className="relative z-10 space-y-16 md:space-y-32 lg:space-y-48 flex flex-col items-center w-full">
        <Mission />
        <Vision />
        <Timeline />
        <Team />
        <Partner />
      </main>

    </div>
  );
};

export default About;