import Mission from '../components/about/Mission';
import Vision from '../components/about/Vision';
import Timeline from '../components/about/Timeline';
import Team from '../components/about/Team';
import Partner from '../components/about/Partner';

const About = () => {
  return (
    <div className="min-h-screen bg-[#040810] text-white pt-32 pb-20 font-serif selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden select-none">
      
      {/* Subtle Ambient Background Elements to maintain cinematic depth across all sections */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 fixed">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-950/30 rounded-full mix-blend-screen filter blur-[140px] opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#050c18] rounded-full mix-blend-screen filter blur-[150px] opacity-40"></div>
      </div>

      {/* Main Content Area - Components spaced out to allow breathing room and scroll immersion */}
      <main className="relative z-10 space-y-32 md:space-y-48 flex flex-col items-center w-full">
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