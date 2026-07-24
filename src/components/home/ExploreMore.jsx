import { motion } from "framer-motion";

const ExploreMore = () => {
  return (
    <section 
      id="chapter-action" 
      className="relative w-full min-h-screen bg-[#040810] text-white overflow-hidden select-none flex items-start sm:items-center snap-start snap-always"
    >
      {/* Smooth Section Junction Gradient Overlays */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#040810] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#040810] to-transparent pointer-events-none z-10" />

      {/* INSPIRATIONAL VOLUNTEER ACTION BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-65">
        <img loading="lazy"
          src="/images/volunteer_action_bg.webp"
          alt="Inspiring Marine Conservation Volunteers"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/70 via-[#040810]/30 to-[#040810]/70 z-10" />
      </div>

      {/* AMBIENT BACKGROUND LIGHTING GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[190px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none z-0" />

      {/* Right Side CTA Cards */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 max-w-md lg:max-w-lg ml-auto mr-0 sm:mr-16 lg:mr-24 pt-20 pb-44 sm:py-12 px-4 sm:px-0 flex flex-col gap-4 sm:gap-6"
      >
        {/* Card 1: Know More About REEF (Secondary) */}
        <div className="group bg-cyan-950/40 border border-cyan-500/20 hover:border-cyan-400/50 rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:bg-cyan-900/40 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] hover:-translate-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <span className="text-cyan-400 text-2xl">🌊</span> Know More About REEF
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
            Discover our mission to protect marine life. Learn about our ongoing projects, coral nurseries, and how we are fighting to save our oceans.
          </p>
          <a 
            href="/about"
            aria-label="Learn more about REEF's mission and projects"
            className="inline-block px-6 py-2.5 rounded-full border border-cyan-400 text-cyan-300 font-semibold text-sm hover:bg-cyan-400 hover:text-slate-900 transition-colors"
          >
            Learn More About REEF
          </a>
        </div>

        {/* Card 2: Become an Ocean Guardian (Primary) */}
        <div className="group relative bg-gradient-to-br from-emerald-900/80 to-teal-900/60 border border-emerald-400/50 hover:border-emerald-300 rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-[0_8px_32px_rgba(16,185,129,0.25)] hover:-translate-y-1 overflow-hidden">
          {/* Subtle glow effect inside the primary card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl group-hover:bg-emerald-400/20 transition-colors" />
          
          <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <span className="text-emerald-400 text-2xl">🛡️</span> Become an Ocean Guardian
          </h3>
          <p className="relative z-10 text-emerald-50 text-sm leading-relaxed mb-6 font-light">
            Protecting the ocean requires passionate volunteers and active community participation. Join our volunteer program and make a tangible difference today.
          </p>
          <a 
            href="/volunteer"
            className="relative z-10 inline-block px-7 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-[0_4px_14px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,185,129,0.6)]"
          >
            Join as a Volunteer
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ExploreMore;
