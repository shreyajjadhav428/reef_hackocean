import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Check, DollarSign, IndianRupee } from 'lucide-react';

const contributionTiers = [
  {
    amount: 250,
    label: '₹250',
    usdLabel: '$3',
    impact: 'Restores 5 coral fragments in sanctuary nurseries.',
    benefit: 'Provides nursery frames & polyp care',
  },
  {
    amount: 500,
    label: '₹500',
    usdLabel: '$6',
    impact: 'Protects 50m² of turtle nesting coastline.',
    benefit: 'Funds marine patrols & beach cleanups',
  },
  {
    amount: 1000,
    label: '₹1000',
    usdLabel: '$12',
    impact: 'Sponsors 2 students for ocean education.',
    benefit: 'Provides field gear & marine science kits',
  },
  {
    amount: 2500,
    label: '₹2500',
    usdLabel: '$30',
    impact: 'Deploys AI reef temperature & sonar sensors.',
    benefit: 'Expands scientific monitoring network',
  },
];

const ContributionSelector = ({ contributionAmount, onSelectAmount, onSubmitSupport }) => {
  const [isCustom, setIsCustom] = useState(false);
  const [customVal, setCustomVal] = useState('');
  const [currency, setCurrency] = useState('INR'); // INR or USD

  const handleTierClick = (amount) => {
    setIsCustom(false);
    onSelectAmount(amount);
  };

  const handleCustomChange = (e) => {
    const val = e.target.value;
    setCustomVal(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      onSelectAmount(num);
    } else {
      onSelectAmount(0);
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 z-20">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-3">Step 2</h3>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
          Select Your Contribution
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-normal">
          Every rupee creates real, tangible restoration in the marine ecosystem.
        </p>

        {/* Currency Switcher */}
        <div className="inline-flex items-center gap-1 bg-[#050c18] border border-slate-800 p-1 rounded-full mt-4">
          <button
            onClick={() => setCurrency('INR')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              currency === 'INR' ? 'bg-cyan-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            ₹ INR
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              currency === 'USD' ? 'bg-cyan-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            $ USD
          </button>
        </div>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {contributionTiers.map((tier) => {
          const isSelected = !isCustom && contributionAmount === tier.amount;
          const displayLabel = currency === 'INR' ? tier.label : tier.usdLabel;

          return (
            <motion.div
              key={tier.amount}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleTierClick(tier.amount)}
              className={`relative rounded-3xl p-6 border cursor-pointer transition-all duration-300 flex flex-col justify-between select-none ${
                isSelected
                  ? 'bg-[#07162b] border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)] text-white'
                  : 'bg-[#050c18]/90 border-slate-800/90 text-slate-300 hover:border-slate-700 hover:bg-[#061224]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">
                    {displayLabel}
                  </span>
                  {isSelected && (
                    <span className="w-6 h-6 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-md">
                      <Check size={14} strokeWidth={3} />
                    </span>
                  )}
                </div>

                <p className="text-sm font-semibold text-cyan-300 mb-2 leading-snug">
                  {tier.impact}
                </p>

                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  {tier.benefit}
                </p>
              </div>

              <div className={`mt-5 pt-3 border-t text-[11px] font-semibold tracking-wider uppercase ${
                isSelected ? 'border-cyan-500/40 text-cyan-300' : 'border-slate-800 text-slate-400'
              }`}>
                {isSelected ? 'Selected Plan' : 'Select Tier'}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Custom Amount Field */}
      <div className="bg-[#050c18] border border-slate-800/90 rounded-3xl p-6 max-w-xl mx-auto mb-10 text-center shadow-xl">
        <label className="text-xs uppercase font-extrabold tracking-widest text-slate-400 block mb-3">
          Or Enter Custom Contribution
        </label>

        <div className="relative max-w-xs mx-auto">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 font-bold text-lg">
            {currency === 'INR' ? '₹' : '$'}
          </div>
          <input
            type="number"
            min="10"
            placeholder="Custom Amount"
            value={customVal}
            onFocus={() => setIsCustom(true)}
            onChange={handleCustomChange}
            className="w-full bg-[#060e1b] border border-slate-800 rounded-2xl py-3.5 pl-10 pr-4 text-white text-lg font-bold placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>
      </div>

      {/* Submit Action Button */}
      <div className="text-center">
        <button
          onClick={onSubmitSupport}
          disabled={contributionAmount <= 0}
          className="group inline-flex items-center gap-3 bg-[#9ce3ec] hover:bg-[#82d6df] text-slate-950 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-[0_0_25px_rgba(156,227,236,0.4)] hover:shadow-[0_0_35px_rgba(156,227,236,0.7)] transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <Heart size={20} className="fill-slate-950" />
          <span>Confirm & Support The Reef</span>
          <Sparkles size={18} className="animate-spin" style={{ animationDuration: '4s' }} />
        </button>
      </div>

    </section>
  );
};

export default ContributionSelector;
