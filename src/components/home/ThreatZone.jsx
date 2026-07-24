import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import plasticBagSvg from "../../assets/svg/plastic bag.svg";
import plasticBottleSvg from "../../assets/svg/plastic bottle svg.svg";

const initialTrash = [
  { id: 1, type: "bottle", svg: plasticBottleSvg, className: "absolute -top-14 sm:-top-20 -left-4 sm:-left-44 lg:-left-52", wClass: "w-24 sm:w-36 lg:w-44", animate: { y: [0, -14, 0], rotate: [-4, 4, -4] }, duration: 6 },
  { id: 2, type: "bag", svg: plasticBagSvg, className: "absolute -bottom-14 sm:-bottom-20 -right-8 sm:-right-20", wClass: "w-28 sm:w-40 lg:w-48", animate: { y: [0, 14, 0], rotate: [6, -6, 6] }, duration: 6.5 },
  { id: 3, type: "bottle", svg: plasticBottleSvg, className: "absolute -top-32 sm:-top-48 right-10 sm:right-20", wClass: "w-16 sm:w-20 lg:w-24", animate: { y: [0, 10, 0], rotate: [-10, 10, -10] }, duration: 5.5 },
  { id: 4, type: "bag", svg: plasticBagSvg, className: "absolute bottom-32 sm:bottom-40 -left-4 sm:-left-64", wClass: "w-20 sm:w-24 lg:w-28", animate: { y: [0, -10, 0], rotate: [5, -15, 5] }, duration: 7 }
];

const ThreatZone = () => {
  const [trashItems, setTrashItems] = useState(initialTrash);
  const [isActivityComplete, setIsActivityComplete] = useState(false);

  const handleRemoveTrash = (id) => {
    setTrashItems(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    if (trashItems.length === 0 && !isActivityComplete) {
      setIsActivityComplete(true);
      window.dispatchEvent(new Event("threat-activity-complete"));
    }
  }, [trashItems, isActivityComplete]);

  return (
    <section 
      id="chapter-threat" 
      className="relative w-full min-h-screen bg-[#040810] text-white overflow-hidden select-none flex items-start sm:items-center snap-start snap-always"
    >
      {/* Smooth Section Junction Gradient Overlays */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#040810] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#040810] to-transparent pointer-events-none z-10" />

      {/* FULL SECTION THREAT ZONE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-65">
        <img loading="lazy"
          src="/images/threat_zone_full_bg.webp"
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
        className="relative z-20 max-w-md lg:max-w-xl ml-auto mr-0 sm:mr-24 lg:mr-36 text-left pt-24 pb-44 sm:py-12 px-6 sm:px-0"
      >
        {/* INTERACTIVE TRASH ITEMS */}
        <AnimatePresence>
          {trashItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`${item.className} z-30 cursor-pointer hover:brightness-125`}
              onClick={() => handleRemoveTrash(item.id)}
            >
              <motion.img
                animate={item.animate}
                transition={{ duration: item.duration, repeat: Infinity, ease: "easeInOut" }}
                src={item.svg}
                alt={`Floating Ocean ${item.type} Pollution`}
                className={`${item.wClass} object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] opacity-85 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all`}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Text Description Block */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
          Fading Colors. <br />
          <span className="text-rose-300 font-normal">The silent crisis beneath the waves.</span>
        </h2>
        <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed font-light">
          Over 8 million tons of plastic waste enter our oceans annually, coupled with rising sea temperatures. Coral bleaching and pollution threaten to collapse fragile marine ecosystems.
        </p>
        
        {/* Call to action for cleanup */}
        <AnimatePresence>
          {!isActivityComplete ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-950/40 border border-rose-500/30 text-rose-200 text-sm font-medium backdrop-blur-sm"
            >
              <span className="animate-pulse">⚠️</span> Tap the floating plastic to clean the reef
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-950/40 border border-teal-500/30 text-teal-200 text-sm font-medium backdrop-blur-sm"
            >
              <span>✨</span> Thank you for cleaning the reef!
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </section>
  );
};

export default ThreatZone;
