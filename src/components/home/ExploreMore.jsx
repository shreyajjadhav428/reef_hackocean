import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const exploreCards = [
  {
    id: "marine",
    title: "Explore Marine Life",
    description: "Discover amazing ocean creatures.",
    actionLabel: "Explore",
    path: "/learn",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    description: "Be part of our community.",
    actionLabel: "Volunteer",
    path: "/volunteer",
  },
  {
    id: "impact",
    title: "Impact Dashboard",
    description: "See our impact in future graphs.",
    actionLabel: "View Impact",
    path: "/impact",
  },
  {
    id: "gallery",
    title: "Gallery",
    description: "Moments from our ocean journeys.",
    actionLabel: "View Gallery",
    path: "/gallery",
  },
];

const ExploreMore = () => {
  return (
    <section className="relative w-full bg-[#040810] text-white">
      <div className="w-full bg-[#050c18] border-b border-slate-800/80 shadow-2xl p-8 sm:p-16 lg:p-24">

        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Want to Learn More?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-normal">
            Choose your path and continue making an impact.
          </p>
        </div>

        {/* 4 Cards Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#071120]/80 border border-slate-800/80 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] group"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60">
                <Link
                  to={card.path}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-cyan-300 transition"
                >
                  {card.actionLabel}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExploreMore;