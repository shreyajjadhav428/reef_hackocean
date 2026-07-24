import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Icons for the 4 Species Cards
const CoralTreeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
    <path d="M12 22V11" />
    <path d="M12 16C9 14 7 11 7 8" />
    <path d="M12 14C15 13 17 10 17 7" />
    <circle cx="7" cy="8" r="1.5" fill="currentColor" />
    <circle cx="17" cy="7" r="1.5" fill="currentColor" />
    <circle cx="12" cy="5" r="1.5" fill="currentColor" />
  </svg>
);

const TurtleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
    <ellipse cx="12" cy="12" rx="6" ry="4" />
    <path d="M6 12C4 11 3 12 3 13" />
    <path d="M18 12c2-1 3 0 3 1" />
    <circle cx="17.5" cy="10" r="1" />
    <path d="M9 16c-1 2-2 2-3 2" />
    <path d="M15 16c1 2 2 2 3 2" />
  </svg>
);

const ClownfishIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
    <path d="M2 12c4-5 11-5 15 0l4-3v6l-4-3c-4 5-11 5-15 0z" />
    <path d="M8 8v8" />
    <path d="M13 7v10" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
);

const SeagrassIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
    <path d="M6 22c3-6 0-12 3-18" />
    <path d="M12 22c-2-5 2-10 0-18" />
    <path d="M18 22c2-7-1-12 1-18" />
  </svg>
);

const speciesList = [
  {
    id: "coral",
    title: "Coral",
    description: "Ecosystem keystone, built to last.",
    icon: CoralTreeIcon,
  },
  {
    id: "turtle",
    title: "Turtle",
    description: "Ocean's ancient time travelers.",
    icon: TurtleIcon,
  },
  {
    id: "clownfish",
    title: "Clownfish",
    description: "Small heroes, big ocean impact.",
    icon: ClownfishIcon,
  },
  {
    id: "seagrass",
    title: "Seagrass",
    description: "Ocean's lungs, seagrass meadows.",
    icon: SeagrassIcon,
  },
];

const CoralZone = () => {
  return (
    <section id="chapter-coral" className="relative w-full bg-[#060e1b] text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-[#060e1b] overflow-hidden relative p-8 sm:p-16 lg:p-24"
      >

        {/* Background Image: Corals */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/corals.jpg"
            alt="Coral Reef"
            loading="lazy"
            className="w-full h-full object-cover object-bottom opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e1b] via-[#060e1b]/70 to-transparent" />
        </div>

        {/* Section 3 Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 max-w-xl"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            A World of Life <br />
            <span className="text-slate-100">Beneath the Waves</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-normal">
            Vibrant corals. Colorful fish. A delicate balance.
          </p>

          <div className="mt-6">
            <Link
              to="/learn"
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-slate-600 hover:border-cyan-400 text-white hover:text-cyan-300 text-sm font-semibold transition-all duration-200 bg-black/30 backdrop-blur-md"
            >
              Explore Reef
            </Link>
          </div>
        </motion.div>

        {/* Section 4 Species Grid (4 Cards Row with Stagger Reveal) */}
        <div className="relative z-10 mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {speciesList.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                className="bg-[#050c18]/85 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                  <IconComp />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default CoralZone;
