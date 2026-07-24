import React, { useState, useRef } from 'react';
import SupportHero from '../components/support/SupportHero';
import ReefSimulation from '../components/support/ReefSimulation';
import ImpactSelector from '../components/support/ImpactSelector';
import ContributionSelector from '../components/support/ContributionSelector';
import ConfirmationScreen from '../components/support/ConfirmationScreen';

const SupportReef = () => {
  const [selectedImpact, setSelectedImpact] = useState('coral');
  const [contributionAmount, setContributionAmount] = useState(500);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const simulationRef = useRef(null);

  const handleContinueHero = () => {
    if (simulationRef.current) {
      simulationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectImpact = (id) => {
    setSelectedImpact(id);
  };

  const handleSelectAmount = (amount) => {
    setContributionAmount(amount);
  };

  const handleSubmitSupport = () => {
    setIsConfirmed(true);
    if (simulationRef.current) {
      simulationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setSelectedImpact('coral');
    setContributionAmount(500);
  };

  return (
    <div className="min-h-screen bg-[#040810] text-white pt-28 pb-24 font-serif selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden select-none">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 fixed">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-950/30 rounded-full mix-blend-screen filter blur-[150px] opacity-25" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#050c18] rounded-full mix-blend-screen filter blur-[160px] opacity-40" />
      </div>

      {/* Main Container */}
      <main className="relative z-10 space-y-12 max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center">
        
        {/* 1. Hero Section */}
        <SupportHero onContinue={handleContinueHero} />

        {/* 2. Interactive Reef Simulation Box */}
        <div ref={simulationRef} className="w-full max-w-5xl pt-4 scroll-mt-32">
          <ReefSimulation 
            selectedImpact={selectedImpact} 
            contributionAmount={contributionAmount} 
            isConfirmed={isConfirmed} 
          />
        </div>

        {/* 3. Dynamic Experience Controls OR Confirmation Screen */}
        {!isConfirmed ? (
          <div className="w-full space-y-12">
            <ImpactSelector 
              selectedImpact={selectedImpact} 
              onSelectImpact={handleSelectImpact} 
            />

            <ContributionSelector 
              contributionAmount={contributionAmount} 
              onSelectAmount={handleSelectAmount} 
              onSubmitSupport={handleSubmitSupport} 
            />
          </div>
        ) : (
          <ConfirmationScreen 
            selectedImpact={selectedImpact} 
            contributionAmount={contributionAmount} 
            onReset={handleReset} 
          />
        )}

      </main>

    </div>
  );
};

export default SupportReef;
