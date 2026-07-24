import { Link } from "react-router-dom";
import { AlertTriangle, Compass, ShieldAlert } from "lucide-react";

const ThreatZone = () => {
  return (
    <section id="chapter-threat" className="relative w-full bg-[#040810] text-white">
      <div className="w-full bg-[#060c18] border-b border-slate-800/80 shadow-2xl overflow-hidden relative p-8 sm:p-16 lg:p-24">

        
        {/* Background Image: Submerged Plastic Bottle */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Plastic bottle.jpg"
            alt="Submerged Plastic Bottle Danger"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060c18] via-[#060c18]/85 to-[#060c18]" />
        </div>

        {/* 2 Column Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Our Oceans <br />
              <span className="text-slate-200">Are in Danger</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-md font-normal leading-relaxed">
              Stay up to Date—Fighting together (and growing). Empathy for our marine ecosystem.
            </p>

            <div className="mt-8">
              <Link
                to="/impact"
                className="inline-flex items-center px-6 py-2.5 rounded-full border border-slate-600 hover:border-red-400 text-white hover:text-red-300 text-sm font-semibold transition-all duration-200 bg-black/40 backdrop-blur-md"
              >
                See the Facts
              </Link>
            </div>
          </div>

          {/* Right Column: 11 Million Tons Stats Box */}
          <div className="lg:col-span-6">
            <div className="bg-[#050e1c]/90 backdrop-blur-xl border border-slate-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl">
              <span className="block text-2xl sm:text-4xl font-extrabold text-white tracking-wide">
                11 MILLION TONS
              </span>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium border-b border-slate-800 pb-5">
                of plastic enter our oceans every year.
              </p>

              {/* 3 Stat Points */}
              <div className="mt-6 flex flex-col gap-5">
                
                {/* Stat Item 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-800/40 flex items-center justify-center text-red-400 shrink-0">
                    <AlertTriangle size={20} />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white mr-2">700+</span>
                    <span className="text-xs sm:text-sm text-slate-400">Marine species threatened</span>
                  </div>
                </div>

                {/* Stat Item 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-800/40 flex items-center justify-center text-amber-400 shrink-0">
                    <ShieldAlert size={20} />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white mr-2">90%</span>
                    <span className="text-xs sm:text-sm text-slate-400">Coral reefs could vanish by 2050</span>
                  </div>
                </div>

                {/* Stat Item 3 */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <Compass size={20} />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-white mr-2">1 in 3</span>
                    <span className="text-xs sm:text-sm text-slate-400">Fish stocks are overfished</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ThreatZone;