import React, { useState } from 'react';

// Component Imports
import VolunteerTimeline from '../components/volunteer/VolunteerTimeline';
import Events from '../components/volunteer/Events';
import Benefits from '../components/volunteer/Benefits';
import VolunteerForm from '../components/volunteer/VolunteerForm';
import Cta from '../components/volunteer/Cta';

const Volunteer = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRegisterEvent = (eventTitle) => {
    setSelectedEvent(eventTitle);
    const el = document.getElementById("volunteer-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#040810] text-white pt-32 pb-20 font-serif selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden select-none">
      
      {/* Subtle Ambient Background Elements for cinematic depth */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 fixed">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-950/30 rounded-full mix-blend-screen filter blur-[140px] opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#050c18] rounded-full mix-blend-screen filter blur-[150px] opacity-40"></div>
      </div>

      {/* Main Content Area - Components spaced out to allow scroll immersion */}
      <main className="relative z-10 space-y-32 md:space-y-40 flex flex-col items-center w-full">
        <VolunteerTimeline />
        <Events onRegister={handleRegisterEvent} />
        <Benefits />
        <VolunteerForm selectedEvent={selectedEvent} onClearEvent={() => setSelectedEvent(null)} />
        <Cta />
      </main>

    </div>
  );
};

export default Volunteer;