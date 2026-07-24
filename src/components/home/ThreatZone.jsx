import { motion } from "framer-motion";
import plasticBagSvg from "../../assets/svg/plastic bag.svg";
import plasticBottleSvg from "../../assets/svg/plastic bottle svg.svg";

const ThreatZone = () => {
  return (
    <section 
      id="chapter-threat" 
      className="relative w-full min-h-[550px] sm:min-h-[650px] bg-[#040810] text-white overflow-hidden select-none flex items-center"
    >
      {/* Smooth Section Junction Gradient Overlays */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#040810] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#040810] to-transparent pointer-events-none z-10" />

      {/* FULL SECTION THREAT ZONE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-65">
        <img
          src="/images/threat_zone_full_bg.png"
          alt="Threatened Ocean Dark Waters"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/70 via-[#040810]/35 to-[#040810]/70 z-10" />
      </div>

      {/* AMBIENT BACKGROUND LIGHTING GLOWS */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-red-950/25 rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-950/25 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Right Side Section Headline & Text Description with Bag & Bottle SVGs */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 max-w-md lg:max-w-xl ml-auto mr-12 sm:mr-24 lg:mr-36 text-left py-8 sm:py-12 px-6 sm:px-0"
      >
        {/* PLASTIC BOTTLE SVG (Top-Left of Text) */}
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-14 sm:-top-20 -left-24 sm:-left-44 lg:-left-52 z-10 pointer-events-none"
        >
          <img
            src={plasticBottleSvg}
            alt="Drifting Ocean Plastic Bottle Pollution"
            className="w-24 sm:w-36 lg:w-44 object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] opacity-85"
          />
        </motion.div>

        {/* Text Description Block */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
          Fading Colors. <br />
          <span className="text-rose-300 font-normal">The silent crisis beneath the waves.</span>
        </h2>
        <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed font-light">
          Over 8 million tons of plastic waste enter our oceans annually, coupled with rising sea temperatures. Coral bleaching and pollution threaten to collapse fragile marine ecosystems.
        </p>

        {/* PLASTIC BAG SVG (Bottom-Right of Text) */}
        <motion.div
          animate={{ y: [0, 14, 0], rotate: [6, -6, 6] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-14 sm:-bottom-20 -right-8 sm:-right-20 z-10 pointer-events-none"
        >
          <img
            src={plasticBagSvg}
            alt="Floating Ocean Plastic Bag Pollution"
            className="w-28 sm:w-40 lg:w-48 object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] opacity-85"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ThreatZone;
