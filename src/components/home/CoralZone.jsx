import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Info, Sparkles, X, ShieldCheck, Layers, Eye, BookOpen } from "lucide-react";

// --- CORAL CARDS DATA ---
const coralCards = [
  {
    id: "staghorn",
    title: "Staghorn Coral",
    subtitle: "Acropora cervicornis",
    tag: "Architect of the Reef",
    image: "/images/staghorn_coral.png",
    depth: "5 - 30m",
    status: "Critically Endangered",
    fact: "Staghorn corals grow up to 10–20 cm per year, forming dense underwater forests that protect coastlines from storm surges.",
    role: "Provides vital nursery shelter for 50+ species of juvenile fish.",
  },
  {
    id: "brain",
    title: "Brain Coral",
    subtitle: "Diploria labyrinthiformis",
    tag: "Ancient Foundation",
    image: "/images/corals.jpg",
    depth: "1 - 40m",
    status: "Stable",
    fact: "Brain corals can live for over 900 years! Their grooved labyrinth pattern withstands severe ocean currents and powerful waves.",
    role: "Acts as a heavy structural anchor for reef ecosystems.",
  },
  {
    id: "seafan",
    title: "Sea Fan Coral",
    subtitle: "Gorgonia ventalina",
    tag: "Surge Filter",
    image: "/images/surface ocean.jpg",
    depth: "2 - 15m",
    status: "Vulnerable",
    fact: "Sea fans align their flat mesh bodies perpendicular to ocean currents to maximize filter feeding on plankton.",
    role: "Filters micro-particles, keeping reef waters clear and oxygenated.",
  },
];

// --- MARINE LIFE CARDS DATA ---
const marineLifeCards = [
  {
    id: "turtle",
    title: "Green Sea Turtle",
    subtitle: "Chelonia mydas",
    tag: "Ocean Navigator",
    image: "/turtle.png",
    depth: "Surface to 100m",
    status: "Endangered",
    fact: "Sea turtles have navigated the Earth's oceans for over 110 million years, using geomagnetic fields for navigation.",
    role: "Maintains healthy seagrass beds by grazing, which stores carbon.",
  },
  {
    id: "clownfish",
    title: "Clown Anemonefish",
    subtitle: "Amphiprion ocellaris",
    tag: "Symbiosis Master",
    image: "/images/clownfish.png",
    depth: "1 - 15m",
    status: "Least Concern",
    fact: "Clownfish have a mucus layer that shields them from venomous anemone tentacles, forming a mutual survival bond.",
    role: "Cleans anemones of parasites and detritus in exchange for protection.",
  },
  {
    id: "manta",
    title: "Reef Manta Ray",
    subtitle: "Mobula alfredi",
    tag: "Gentle Giant",
    image: "/underwater_hero.png",
    depth: "0 - 120m",
    status: "Vulnerable",
    fact: "Manta rays have the largest brain-to-body ratio of all fish and exhibit high intelligence, playfulness, and self-awareness.",
    role: "Transfers nutrients between deep water and shallow reefs.",
  },
];

// --- EDUCATIONAL QUICK FACTS ---
const educationalFacts = [
  {
    id: 1,
    title: "25% Marine Life Hub",
    detail: "Coral reefs cover less than 0.1% of the ocean floor, yet nurture over 25% of all marine species.",
  },
  {
    id: 2,
    title: "Natural Storm Shields",
    detail: "Healthy coral reefs reduce wave energy by up to 97%, shielding coastal communities from erosion.",
  },
  {
    id: 3,
    title: "Living Animals",
    detail: "Corals are colonies of tiny animals called polyps that build limestone skeletons over centuries.",
  },
  {
    id: 4,
    title: "Solar Powered Coral",
    detail: "Microscopic zooxanthellae algae live inside coral polyps and supply up to 90% of their energy via photosynthesis.",
  },
];

const CoralZone = () => {
  const [activeTab, setActiveTab] = useState("corals"); // "corals" | "marine"
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [ripples, setRipples] = useState([]);

  const displayList = activeTab === "corals" ? coralCards : marineLifeCards;

  const handleSectionClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = {
      id: Date.now() + Math.random(),
      x,
      y,
    };
    setRipples((prev) => [...prev.slice(-15), newRipple]);
  };

  return (
    <section 
      id="chapter-coral" 
      onClick={handleSectionClick}
      className="relative w-full bg-[#040810] text-white overflow-hidden select-none py-20 px-4 sm:px-10 lg:px-20 cursor-crosshair"
    >
      {/* WATER RIPPLE EFFECT LAYER */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {ripples.map((r) => (
          <div
            key={r.id}
            style={{ left: r.x, top: r.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            {/* Primary Inner Ring */}
            <motion.div
              initial={{ width: 0, height: 0, opacity: 0.9 }}
              animate={{ width: 140, height: 140, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-full border-2 border-cyan-400/90 shadow-[0_0_20px_#22d3ee] absolute -translate-x-1/2 -translate-y-1/2"
            />
            {/* Secondary Mid Ring */}
            <motion.div
              initial={{ width: 0, height: 0, opacity: 0.7 }}
              animate={{ width: 240, height: 240, opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.08 }}
              className="rounded-full border border-teal-300/70 shadow-[0_0_25px_#2dd4bf] absolute -translate-x-1/2 -translate-y-1/2"
            />
            {/* Outer Expansion Wave */}
            <motion.div
              initial={{ width: 0, height: 0, opacity: 0.4 }}
              animate={{ width: 340, height: 340, opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.16 }}
              className="rounded-full border border-cyan-200/50 absolute -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>

      {/* CORAL REEF BACKGROUND IMAGE (Balanced Darkness) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-55">
        <img
          src="/images/coral_reef_bg.png"
          alt="Coral Reef Underwater"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/90 via-[#040810]/40 to-[#040810]/90" />
      </div>

      {/* AMBIENT LIGHTING GLOWS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-800/80 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              A Vibrant World <br />
              <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-500 bg-clip-text text-transparent">
                Beneath the Waves
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-4 font-normal leading-relaxed">
              Explore fragile ecosystems, intricate coral architectures, and fascinating marine species thriving in delicate balance.
            </p>
          </motion.div>

          {/* TAB SELECTOR & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0"
          >
            {/* Category Toggle Tabs */}
            <div className="flex items-center bg-[#071324] p-1.5 rounded-2xl border border-slate-800 shadow-xl">
              <button
                onClick={(e) => { e.stopPropagation(); setActiveTab("corals"); }}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeTab === "corals"
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)] font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Layers size={16} /> Coral Cards
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setActiveTab("marine"); }}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeTab === "marine"
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)] font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Eye size={16} /> Marine Life
              </button>
            </div>

            {/* CTA Button */}
            <Link
              to="/learn"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              Explore Reef
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* INTERACTIVE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {displayList.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={(e) => { e.stopPropagation(); setSelectedItem(item); }}
                className="group relative bg-[#050c18]/90 border border-slate-800/90 hover:border-cyan-500/50 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(6,182,212,0.2)] flex flex-col justify-between cursor-pointer"
              >
                {/* CARD IMAGE CONTAINER */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050c18] via-[#050c18]/40 to-transparent" />
                  
                  {/* TAG BADGE */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                    {item.tag}
                  </div>

                  {/* HOVER FISH ANIMATION ON CARD */}
                  {hoveredCard === item.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 20 }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                      className="absolute bottom-4 right-4 pointer-events-none"
                    >
                      <svg width="36" height="20" viewBox="0 0 42 24" fill="none" className="text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]">
                        <path d="M32 12C38 6 42 2 42 2V22C42 22 38 18 32 12Z" fill="currentColor" opacity="0.8" />
                        <path d="M2 12C9 3 24 2 32 12C24 22 9 21 2 12Z" fill="currentColor" />
                      </svg>
                    </motion.div>
                  )}
                </div>

                {/* CARD CONTENT */}
                <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <span className="text-xs text-slate-400 font-mono tracking-wider italic">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                      {item.fact}
                    </p>
                  </div>

                  {/* CARD FOOTER */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-cyan-400" />
                      {item.status}
                    </span>
                    <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                      Learn Fact <Info size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* SMALL EDUCATIONAL FACTS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-[#051022]/90 via-[#07162e]/90 to-[#051022]/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <BookOpen size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Reef Knowledge & Quick Facts</h3>
              <p className="text-xs sm:text-sm text-slate-400">Essential insights into marine coral ecosystems</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {educationalFacts.map((fact) => (
              <motion.div
                key={fact.id}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-[#040914]/80 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Fact #{fact.id}</span>
                    <Sparkles size={14} className="text-cyan-500/50 group-hover:text-cyan-300 group-hover:rotate-12 transition-all" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-cyan-200 transition">
                    {fact.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {fact.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BOTTOM CTA BANNER */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-[#061120] border border-cyan-500/30 rounded-3xl p-8 sm:p-10 shadow-[0_0_50px_rgba(6,182,212,0.15)] gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to dive deeper into marine conservation?
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Join thousands of ocean advocates learning, protecting, and restoring coral reefs worldwide.
            </p>
          </div>

          <Link
            to="/learn"
            onClick={(e) => e.stopPropagation()}
            className="px-8 py-4 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-base shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 flex items-center gap-2"
          >
            Explore Reef
            <ArrowRight size={20} />
          </Link>
        </div>

      </div>

      {/* MODAL DETAILED FACT VIEW */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#050c18] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.3)] text-white"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* MODAL HERO IMAGE */}
              <div className="relative h-64 w-full">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050c18] via-[#050c18]/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">{selectedItem.subtitle}</span>
                  <h3 className="text-3xl font-bold text-white drop-shadow-md">{selectedItem.title}</h3>
                </div>
              </div>

              {/* MODAL CONTENT BODY */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4 bg-[#071426] p-4 rounded-2xl border border-slate-800">
                  <div>
                    <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">Depth Range</span>
                    <span className="text-sm font-bold text-cyan-300">{selectedItem.depth}</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">Conservation Status</span>
                    <span className="text-sm font-bold text-emerald-400">{selectedItem.status}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2">Key Educational Fact</h4>
                  <p className="text-slate-200 text-sm leading-relaxed">{selectedItem.fact}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-teal-400 mb-2">Ecological Importance</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{selectedItem.role}</p>
                </div>

                <div className="pt-4 flex justify-end gap-4 border-t border-slate-800">
                  <Link
                    to="/learn"
                    onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
                    className="px-6 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition flex items-center gap-2"
                  >
                    Learn More in Reef Explorer <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default CoralZone;
