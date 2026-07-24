import { motion } from "framer-motion";

const ExploreMore = () => {
  return (
    <section 
      id="chapter-action" 
      className="relative w-full min-h-screen bg-[#040810] text-white overflow-hidden select-none flex items-center snap-start snap-always"
    >
      {/* Smooth Section Junction Gradient Overlays */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#040810] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#040810] to-transparent pointer-events-none z-10" />

      {/* INSPIRATIONAL VOLUNTEER ACTION BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-65">
        <img
          src="/images/volunteer_action_bg.png"
          alt="Inspiring Marine Conservation Volunteers"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/70 via-[#040810]/30 to-[#040810]/70 z-10" />
      </div>

      {/* AMBIENT BACKGROUND LIGHTING GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[190px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none z-0" />

      {/* Right Side Section Headline & Text Description */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 max-w-md lg:max-w-xl ml-auto mr-12 sm:mr-24 lg:mr-36 text-left py-8 sm:py-12 px-6 sm:px-0"
      >
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
          Protect Our Seas. <br />
          <span className="text-cyan-300 font-normal">Your actions shape tomorrow.</span>
        </h2>
        <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed font-light">
          Every choice matters. Join local cleanup initiatives, support coral conservation projects, and spread awareness to ensure future generations inherit a thriving ocean.
        </p>
      </motion.div>
    </section>
  );
};

export default ExploreMore;
