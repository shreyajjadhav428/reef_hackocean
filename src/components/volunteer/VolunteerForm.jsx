import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiList, 
  FiMessageSquare, 
  FiSend, 
  FiCheckCircle,
  FiArrowRight,
  FiX
} from 'react-icons/fi';

const VolunteerForm = ({ selectedEvent, onClearEvent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedEvent) {
      setFormData(prev => ({
        ...prev,
        message: `I would like to register for "${selectedEvent}".`
      }));
    }
  }, [selectedEvent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating network request for hackathon presentation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="volunteer-form" className="w-full max-w-4xl mx-auto px-6 md:px-12 py-16 relative z-10">
      
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-12 relative z-10"
      >
        <h3 className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Join The Movement</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Become a Volunteer</h2>
      </motion.div>

      <div className="relative z-10 bg-[#050c18] border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden min-h-[500px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          
          {!isSubmitted ? (
            <motion.form 
              key="form"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
              onSubmit={handleSubmit} 
              className="space-y-6 w-full"
            >
              {selectedEvent && (
                <div className="p-4 rounded-2xl bg-[#071324] border border-cyan-500/50 flex items-center justify-between text-sm shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                  <div className="flex items-center gap-2.5 text-cyan-300 font-semibold">
                    <FiCheckCircle size={18} className="text-cyan-400 shrink-0" />
                    <span>Registering for Event: <strong className="text-white font-bold">{selectedEvent}</strong></span>
                  </div>
                  {onClearEvent && (
                    <button 
                      type="button"
                      onClick={onClearEvent}
                      className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                      aria-label="Clear event selection"
                    >
                      <FiX size={16} />
                    </button>
                  )}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name" 
                    className="w-full bg-[#060e1b]/80 border border-slate-800 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <FiUser className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>

                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    className="w-full bg-[#060e1b]/80 border border-slate-800 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number (Optional)" 
                    className="w-full bg-[#060e1b]/80 border border-slate-800 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <FiPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>

                <div className="relative">
                  <select 
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-[#060e1b]/80 border border-slate-800 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#060e1b] text-slate-400">Select Area of Interest</option>
                    <option value="cleanup" className="bg-[#060e1b] text-white">Beach & Coastal Cleanup</option>
                    <option value="diving" className="bg-[#060e1b] text-white">Underwater Restoration (Certified Divers)</option>
                    <option value="education" className="bg-[#060e1b] text-white">Community Education</option>
                    <option value="fundraising" className="bg-[#060e1b] text-white">Fundraising & Events</option>
                  </select>
                  <FiList className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="relative">
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Why do you want to join REEF?" 
                  rows="4"
                  className="w-full bg-[#060e1b]/80 border border-slate-800 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
                <FiMessageSquare className="absolute right-4 top-4 text-slate-400" />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#9ce3ec] hover:bg-[#82d6df] text-slate-950 font-semibold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group shadow-[0_0_20px_rgba(156,227,236,0.3)] cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Submitting Application...</span>
                ) : (
                  <>
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center py-8 w-full"
            >
              <div className="w-20 h-20 bg-cyan-950/50 border border-cyan-500/50 rounded-full flex items-center justify-center text-cyan-300 mx-auto mb-6 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <FiCheckCircle size={40} />
              </div>
              <h3 className="text-3xl text-white font-bold mb-4">Welcome Aboard!</h3>
              <p className="text-slate-300 text-lg max-w-md mx-auto mb-8">
                Thank you for stepping up to protect our oceans. We have received your application and will be in touch shortly with your training details.
              </p>
              
              <Link 
                to="/impact"
                className="inline-flex items-center gap-2 bg-transparent border border-cyan-400 text-cyan-300 hover:bg-[#9ce3ec] hover:text-slate-950 py-3 px-8 rounded-xl font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                View Our Impact
                <FiArrowRight />
              </Link>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default VolunteerForm;