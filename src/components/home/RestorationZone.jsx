import { motion } from "framer-motion";

const RestorationZone = () => {
  return (
    <section 
      id="chapter-hope" 
      className="relative w-full min-h-screen bg-[#040810] text-white overflow-hidden select-none flex items-start sm:items-center snap-start snap-always"
    >
      {/* Smooth Section Junction Gradient Overlays */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#040810] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#040810] to-transparent pointer-events-none z-10" />

      {/* FULL SECTION RESTORATION / HOPE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-65">
        <img loading="lazy"
          src="/images/action_ocean_bg.webp"
          alt="Ocean Restoration and Coral Reef Hope"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/70 via-[#040810]/30 to-[#040810]/70 z-10" />
      </div>

      {/* AMBIENT GLOW LIGHTING */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/15 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Right Side Section Headline & Text Description */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 max-w-md lg:max-w-xl ml-auto mr-0 sm:mr-24 lg:mr-36 text-left pt-24 pb-44 sm:py-12 px-6 sm:px-0"
      >
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
          Seeds of Renewal. <br />
          <span className="text-emerald-300 font-normal">Rebuilding marine life together.</span>
        </h2>
        <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed font-light">
          Through innovative coral farming, reef nursery transplants, and marine protected sanctuaries, degraded ocean habitats are healing and blooming with life once again.
        </p>
      </motion.div>
    </section>
  );
};

export default RestorationZone;
