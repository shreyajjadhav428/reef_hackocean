import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';

const Events = ({ onRegister }) => {
  const eventsData = [
    {
      title: "Coastal Cleanup Drive",
      date: "August 12, 2026",
      time: "07:00 AM - 11:00 AM",
      location: "Marine Drive, Mumbai",
      type: "Land-Based",
      image: "bg-[url('https://images.unsplash.com/photo-1618472609777-b038f1f04b8d?q=80&w=600&auto=format&fit=crop')]"
    },
    {
      title: "Coral Fragmentation Workshop",
      date: "August 20, 2026",
      time: "09:00 AM - 02:00 PM",
      location: "REEF Headquarters",
      type: "Training",
      image: "bg-[url('https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=600&auto=format&fit=crop')]"
    },
    {
      title: "Dive Against Debris",
      date: "September 05, 2026",
      time: "06:30 AM - 01:00 PM",
      location: "Andaman Islands",
      type: "Diving",
      image: "bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop')]"
    }
  ];

  const handleRegisterClick = (eventTitle) => {
    if (onRegister) {
      onRegister(eventTitle);
    } else {
      const el = document.getElementById("volunteer-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-12 relative z-10">
      
      {/* Section Header */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
      >
        <div>
          <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Get Involved</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Upcoming Events</h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors text-sm font-semibold tracking-wide group cursor-pointer">
          View All Events
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Events Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {eventsData.map((event, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="group bg-[#050c18] border border-slate-800/80 rounded-3xl overflow-hidden shadow-xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full"
          >
            {/* Event Image / Visual Placeholder */}
            <div className={`w-full h-48 ${event.image} bg-cover bg-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[#040810]/60 group-hover:bg-[#040810]/40 transition-colors duration-300"></div>
              <div className="absolute top-4 left-4 bg-[#050c18]/90 border border-slate-800 px-3 py-1 rounded-full">
                <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">{event.type}</span>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-300 text-sm">
                    <FiCalendar className="w-4 h-4 mr-3 text-cyan-400" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-slate-300 text-sm">
                    <FiClock className="w-4 h-4 mr-3 text-cyan-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-slate-300 text-sm">
                    <FiMapPin className="w-4 h-4 mr-3 text-cyan-400" />
                    {event.location}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => handleRegisterClick(event.title)}
                className="w-full bg-[#9ce3ec] hover:bg-[#82d6df] text-slate-950 font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(156,227,236,0.3)] cursor-pointer"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile View All Button */}
      <div className="mt-8 text-center md:hidden">
        <button className="flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors text-sm font-semibold tracking-wide w-full cursor-pointer">
          View All Events
          <FiArrowRight />
        </button>
      </div>

    </section>
  );
};

export default Events;