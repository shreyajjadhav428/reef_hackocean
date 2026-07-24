import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HeartHandshake, Heart, Share2, ArrowRight, Check, X, Sparkles, Globe } from "lucide-react";

const ExploreMore = () => {
  const [showShareToast, setShowShareToast] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [customAmount, setCustomAmount] = useState("25");

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin);
    setShowShareToast(true);
    setTimeout(() => {
      setShowShareToast(false);
    }, 3000);
  };

  return (
    <section id="chapter-action" className="relative w-full bg-[#040810] text-white overflow-hidden select-none py-20 px-4 sm:px-10 lg:px-16">
      
      {/* Smooth Section Junction Gradient Overlays */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#040810]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#040810]/80 to-transparent pointer-events-none z-10" />

      {/* INSPIRATIONAL VOLUNTEER ACTION BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-70">
        <img
          src="/images/volunteer_action_bg.png"
          alt="Inspiring Marine Conservation Volunteers"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040810]/90 via-[#040810]/55 to-[#040810]/95" />
      </div>

      {/* AMBIENT BACKGROUND LIGHTING */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[190px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none z-0" />

      {/* SHARE TOAST NOTIFICATION */}
      <AnimatePresence>
        {showShareToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 z-50 bg-emerald-950/90 border border-emerald-400 text-emerald-200 px-6 py-3.5 rounded-2xl shadow-[0_0_30px_rgba(52,211,153,0.4)] backdrop-blur-xl flex items-center gap-3 font-semibold text-sm"
          >
            <div className="p-1 rounded-full bg-emerald-400 text-slate-950">
              <Check size={16} strokeWidth={3} />
            </div>
            Mission link copied to clipboard! Share with friends.
          </motion.div>
        )}
      </AnimatePresence>

      {/* DONATE MODAL */}
      <AnimatePresence>
        {showDonateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-[#050e1c] border border-cyan-500/40 rounded-3xl p-8 max-w-md w-full shadow-[0_0_60px_rgba(34,211,238,0.3)] text-center space-y-6"
            >
              <button
                onClick={() => setShowDonateModal(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="w-16 h-16 rounded-full bg-cyan-950/60 border border-cyan-400/50 text-cyan-300 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                <Heart size={32} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-serif">Fund Coral Restoration</h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Every $10 plants 1 living coral fragment onto damaged ocean reefs.
                </p>
              </div>

              {/* PRESET AMOUNTS */}
              <div className="grid grid-cols-3 gap-3">
                {["10", "25", "50"].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setCustomAmount(amt)}
                    className={`py-3 rounded-xl border text-sm font-bold transition cursor-pointer ${
                      customAmount === amt
                        ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                        : "bg-[#071528] border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>

              <Link
                to="/volunteer"
                onClick={() => setShowDonateModal(false)}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(34,211,238,0.4)] transition hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                Complete Donation of ${customAmount} <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-14">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Finally... <br />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
              Take Action For Our Oceans
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            Every coral restored and every marine species protected begins with passionate individuals taking action today.
          </p>
        </motion.div>

        {/* 3 PRIMARY ACTION CARDS & BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CARD 1: BECOME VOLUNTEER (Links to /volunteer) */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-[#050e1c] border border-cyan-500/40 rounded-3xl p-8 shadow-2xl flex flex-col justify-between hover:border-cyan-400 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                <HeartHandshake size={28} />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white group-hover:text-cyan-300 transition">
                Become Volunteer
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Join our international community of reef restoration divers, coastal cleanup teams, and ocean advocates.
              </p>
            </div>

            {/* BUTTON LINKING DIRECTLY TO VOLUNTEER PAGE */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 relative z-10">
              <Link
                to="/volunteer"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group/btn"
              >
                Become Volunteer
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* CARD 2: DONATE */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-[#050e1c] border border-emerald-500/40 rounded-3xl p-8 shadow-2xl flex flex-col justify-between hover:border-emerald-400 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                <Heart size={28} />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white group-hover:text-emerald-300 transition">
                Donate
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Directly fund nursery coral planting, marine patrol equipment, and scientific research expeditions.
              </p>
            </div>

            {/* DONATE BUTTON */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 relative z-10">
              <button
                onClick={() => setShowDonateModal(true)}
                className="w-full py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(52,211,153,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer group/btn"
              >
                Donate Now
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* CARD 3: SHARE */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-[#050e1c] border border-amber-500/40 rounded-3xl p-8 shadow-2xl flex flex-col justify-between hover:border-amber-400 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-amber-950/60 border border-amber-500/40 text-amber-300 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <Share2 size={28} />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition">
                Share
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Amplify our ocean conservation mission across your network to inspire thousands of new supporters.
              </p>
            </div>

            {/* SHARE BUTTON */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 relative z-10">
              <button
                onClick={handleShare}
                className="w-full py-3.5 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer group/btn"
              >
                Share Mission
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM QUICK VOLUNTEER PAGE NAVIGATION BANNER */}
        <div className="bg-[#050d1a] border border-[#132338] rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-xl text-center sm:text-left space-y-1">
            <h3 className="text-2xl font-serif font-bold text-white">Ready to join our next expedition?</h3>
            <p className="text-slate-300 text-sm">
              Head directly to our Volunteer Page to submit your application and view active projects.
            </p>
          </div>

          <Link
            to="/volunteer"
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(34,211,238,0.4)] transition hover:scale-105 active:scale-95 shrink-0 flex items-center gap-2"
          >
            Volunteer Page <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ExploreMore;
