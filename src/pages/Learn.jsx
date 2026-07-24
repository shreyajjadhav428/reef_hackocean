import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Plus, Minus, Search, Globe, ShieldCheck, Thermometer } from "lucide-react";

// Icons for Topics
const CoralIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
    <path d="M12 22V11" />
    <path d="M12 16C9 14 7 11 7 8" />
    <path d="M12 14C15 13 17 10 17 7" />
    <circle cx="7" cy="8" r="1" fill="currentColor" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
    <circle cx="12" cy="5" r="1" fill="currentColor" />
  </svg>
);

const PlasticBottleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
    <rect x="9" y="2" width="6" height="3" rx="1" />
    <path d="M10 5v2L7 9v11a2 2 0 002 2h6a2 2 0 002-2V9l-3-2V5" />
    <path d="M7 14h10" />
  </svg>
);

const FishIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
    <path d="M2 12c4-5 11-5 15 0l4-3v6l-4-3c-4 5-11 5-15 0z" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
);

const ClimateIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
    <path d="M14 4v10.5a3.5 3.5 0 1 1-4 0V4a2 2 0 1 1 4 0z" />
    <circle cx="18" cy="8" r="3" />
    <path d="M18 5v6" />
    <path d="M15 8h6" />
  </svg>
);

const ConservationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </svg>
);

const topics = [
  { id: "coral", label: "Coral Reefs", icon: CoralIcon },
  { id: "pollution", label: "Pollution", icon: PlasticBottleIcon },
  { id: "marine", label: "Marine Life", icon: FishIcon },
  { id: "climate", label: "Climate Change", icon: ClimateIcon },
  { id: "conservation", label: "Conservation", icon: ConservationIcon },
];

const explorerSlides = [
  {
    id: 1,
    title: "Great Barrier Reef",
    location: "Australia",
    image: "/images/corals.jpg",
  },
  {
    id: 2,
    title: "Raja Ampat Coral Sanctuary",
    location: "Indonesia",
    image: "/images/surface ocean.jpg",
  },
  {
    id: 3,
    title: "Deep Abyssal Trench",
    location: "Pacific Ocean",
    image: "/images/deep ocean.jpg",
  },
  {
    id: 4,
    title: "Galapagos Marine Reserve",
    location: "Ecuador",
    image: "/underwater_hero.png",
  },
];

const researchReports = [
  {
    id: 1,
    title: "Global Coral Reef Status Report 2024",
    image: "/images/corals.jpg",
  },
  {
    id: 2,
    title: "Microplastics in Our Oceans",
    image: "/images/Plastic bottle.jpg",
  },
  {
    id: 3,
    title: "Rising Ocean Temperatures",
    image: "/images/deep ocean.jpg",
  },
  {
    id: 4,
    title: "Sustainable Fisheries Report",
    image: "/images/surface ocean.jpg",
  },
];

const faqData = [
  {
    question: "Why are coral reefs important?",
    answer:
      "Coral reefs support over 25% of all marine species despite occupying less than 1% of the ocean floor. They shield coastal communities from storm surges, prevent erosion, and sustain global fishing economies.",
  },
  {
    question: "How does plastic harm marine life?",
    answer:
      "Plastic debris breaks down into microplastics that marine animals ingest, causing toxic bioaccumulation, entanglement, habitat degradation, and severe disruption of ocean ecosystems.",
  },
  {
    question: "What can I do to help?",
    answer:
      "You can reduce single-use plastic usage, support marine conservation initiatives, participate in beach cleanups, and advocate for sustainable seafood policies.",
  },
  {
    question: "How is REEF making a difference?",
    answer:
      "REEF actively restores damaged coral structures, removes marine debris, conducts scientific research, and empowers coastal communities through education and direct conservation programs.",
  },
];

const Learn = () => {
  const [selectedTopic, setSelectedTopic] = useState("coral");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % explorerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + explorerSlides.length) % explorerSlides.length);
  };

  return (
    <div className="w-full bg-[#040810] text-white font-serif min-h-screen pt-24 pb-20 px-4 sm:px-10 lg:px-16 select-none">
      <div className="w-full flex flex-col gap-12">

        
        {/* 1. HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-3xl bg-[#050c18] border border-slate-800/80 shadow-2xl p-8 sm:p-14 overflow-hidden flex flex-col justify-between min-h-[380px]"
        >
          {/* Background Image: Sea Turtle */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero1.png"
              alt="Underwater Sea Turtle"
              loading="lazy"
              className="w-full h-full object-cover object-right opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050c18] via-[#050c18]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050c18] via-transparent to-black/30" />
          </div>

          <div className="relative z-10 max-w-xl my-auto">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-white drop-shadow-md">
              Learn. Explore. <br />
              Understand.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-4 font-normal">
              The more we know, the better we protect.
            </p>
          </div>
        </motion.div>

        {/* 2. TOPICS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h3 className="text-lg font-bold text-slate-200 mb-4 tracking-wide">
            Topics
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {topics.map((topic) => {
              const IconComp = topic.icon;
              const isSelected = selectedTopic === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#08182c] border-cyan-500/60 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                      : "bg-[#060e1b]/80 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200 hover:bg-[#071426]"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-950/40 border border-slate-800 flex items-center justify-center mb-2.5">
                    <IconComp />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold leading-tight">
                    {topic.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 3. OCEAN EXPLORER CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-3xl bg-[#050c18] border border-slate-800/80 shadow-2xl p-6 sm:p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Ocean Explorer
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-8">
            Dive into interactive experiences.
          </p>

          <div className="relative max-w-4xl mx-auto flex items-center justify-between gap-4">
            {/* Prev Arrow */}
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-[#071324]/80 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition cursor-pointer shrink-0 z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Slide Card Display */}
            <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-slate-800/80 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={explorerSlides[currentSlide].id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={explorerSlides[currentSlide].image}
                    alt={explorerSlides[currentSlide].title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050c18] via-[#050c18]/40 to-transparent" />

                  {/* Slide Content Overlay */}
                  <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-left">
                    <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md">
                      {explorerSlides[currentSlide].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      {explorerSlides[currentSlide].location}
                    </p>
                    <a
                      href="#explore"
                      className="inline-flex items-center gap-2 mt-4 text-xs sm:text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition"
                    >
                      Explore <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-[#071324]/80 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition cursor-pointer shrink-0 z-10"
              aria-label="Next Slide"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {explorerSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  currentSlide === idx
                    ? "w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"
                    : "w-2 h-2 bg-slate-600 rounded-full hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* 4. RESEARCH & REPORTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-3xl bg-[#050c18] border border-slate-800/80 shadow-2xl p-6 sm:p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Research & Reports
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-8">
            Latest studies and findings from our partners.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchReports.map((report) => (
              <div
                key={report.id}
                className="bg-[#060e1b]/80 border border-slate-800/80 hover:border-cyan-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group text-left"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={report.image}
                    alt={report.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e1b] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-cyan-300 transition">
                    {report.title}
                  </h4>

                  <div className="mt-6 pt-3 border-t border-slate-800/60">
                    <a
                      href="#read"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-200 transition"
                    >
                      Read More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 5. FREQUENTLY ASKED QUESTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-3xl bg-[#050c18] border border-slate-800/80 shadow-2xl p-6 sm:p-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center tracking-tight mb-8">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#060e1b]/80 border border-slate-800/80 overflow-hidden transition duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div className="p-1 rounded-lg bg-slate-800/80 text-cyan-400 shrink-0 ml-4">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Learn;

