import { useState } from 'react';
import { motion } from 'framer-motion';
import TurtleContactImg from '../assets/images/Turtle_contact.png';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock, 
  FiUser, 
  FiEdit2, 
  FiMessageSquare, 
  FiSend, 
  FiLock,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiArrowRight
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#040810] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 font-serif selection:bg-cyan-500 selection:text-slate-950 select-none">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 relative">
          <motion.div variants={itemVariants} className="lg:w-1/2 z-10">
            <h3 className="text-cyan-400 uppercase tracking-widest text-sm font-semibold mb-4">Contact Reef</h3>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 text-white">
              Let's Connect.<br />
              <span className="font-semibold text-slate-200">Let's Protect.</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-md leading-relaxed">
              We'd love to hear from you. Whether you have a question, an idea, or want to collaborate — we're all ears.
            </p>
          </motion.div>
          
          {/* Swimming Sea Turtle Photo */}
          <motion.div 
            variants={itemVariants} 
            className="lg:w-7/12 lg:absolute lg:right-0 lg:-top-[20px] lg:translate-x-[40px] z-0 pointer-events-none mt-8 lg:mt-0 flex justify-start"
          >
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.25)] max-w-lg w-full">
              <img 
                src={TurtleContactImg} 
                alt="Swimming Sea Turtle" 
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050c18] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* Main Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 z-10 relative">
          
          {/* Left Column: Get in Touch */}
          <motion.div variants={itemVariants} className="lg:col-span-5 bg-[#050c18] border border-slate-800/80 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              Reach out to us through any of the means below. We typically respond within 24–48 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#071324] rounded-full border border-slate-800 text-cyan-400">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="text-slate-200 font-semibold text-sm">Email Us</h4>
                  <a href="mailto:hello@reef.org" className="text-slate-300 text-sm hover:text-cyan-300 transition-colors">hello@reef.org</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#071324] rounded-full border border-slate-800 text-cyan-400">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="text-slate-200 font-semibold text-sm">Call Us</h4>
                  <a href="tel:+919876543210" className="text-slate-300 text-sm hover:text-cyan-300 transition-colors">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#071324] rounded-full border border-slate-800 text-cyan-400">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="text-slate-200 font-semibold text-sm">Visit Us</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    REEF Foundation<br />
                    Ocean House, Marine Drive<br />
                    Mumbai, India - 400020
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#071324] rounded-full border border-slate-800 text-cyan-400">
                  <FiClock size={20} />
                </div>
                <div>
                  <h4 className="text-slate-200 font-semibold text-sm">Working Hours</h4>
                  <p className="text-slate-300 text-sm">
                    Mon - Fri : 9:00 AM - 6:00 PM<br />
                    Sat - Sun : Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-slate-200 font-semibold text-sm mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[FiInstagram, FiFacebook, FiTwitter, FiLinkedin, FiYoutube].map((Icon, index) => (
                  <a key={index} href="#" className="p-2.5 bg-[#071324] rounded-full border border-slate-800 text-slate-300 hover:text-slate-950 hover:bg-[#9ce3ec] transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Send Us a Message */}
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-[#050c18] border border-slate-800/80 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-slate-800">Send Us a Message</h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 bg-cyan-950/50 border border-cyan-500/50 rounded-full flex items-center justify-center text-cyan-300 mb-4 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <FiSend size={32} />
                </div>
                <h3 className="text-2xl text-white font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-300">Thank you for reaching out. We will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
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

                <div className="relative">
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    className="w-full bg-[#060e1b]/80 border border-slate-800 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <FiEdit2 className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>

                <div className="relative">
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message" 
                    rows="5"
                    className="w-full bg-[#060e1b]/80 border border-slate-800 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                  <FiMessageSquare className="absolute right-4 top-4 text-slate-400" />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#9ce3ec] hover:bg-[#82d6df] text-slate-950 font-semibold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-70 shadow-[0_0_20px_rgba(156,227,236,0.3)] cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <FiSend />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center space-x-2 text-slate-400 text-xs mt-4">
                  <FiLock />
                  <span>Your information is safe with us. We respect your privacy.</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div variants={itemVariants} className="bg-[#050c18] border border-slate-800/80 rounded-3xl p-6 lg:p-8 shadow-2xl mb-8 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center space-x-3 text-white mb-2">
              <FiMapPin className="text-cyan-400" size={24} />
              <h2 className="text-xl font-bold">Find Us Here</h2>
            </div>
            <p className="text-slate-400 text-sm pl-9">Click on the marker to get directions.</p>
          </div>
          <div className="md:w-2/3 w-full h-48 rounded-2xl overflow-hidden relative border border-slate-800 bg-[#060e1b]">
            <div className="absolute inset-0 bg-[url('/map-placeholder.jpg')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-cyan-400"
              >
                <FiMapPin size={40} className="drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              </motion.div>
            </div>
            <span className="absolute top-4 left-1/4 text-xs text-slate-400/80">Marine Drive</span>
            <span className="absolute bottom-4 right-1/4 text-xs text-slate-400/80">Malabar Hill</span>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div variants={itemVariants} className="bg-[#050c18] border border-slate-800/80 rounded-3xl p-8 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 lg:w-1/2">
            <div className="text-cyan-400">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22v-7" /><path d="M12 15a4 4 0 0 0-4-4H5" /><path d="M12 15a4 4 0 0 1 4-4h3" /><path d="M8 11v-3" /><path d="M16 11v-3" /><path d="M8 8a3 3 0 0 1-3-3" /><path d="M16 8a3 3 0 0 0 3-3" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Stay Connected. Stay Inspired.</h2>
              <p className="text-slate-400 text-sm">Subscribe to our newsletter and get the latest updates on our work, impact, and ways to help our oceans.</p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-[#060e1b]/80 border border-slate-800 border-r-0 rounded-l-xl py-3.5 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button className="bg-[#9ce3ec] hover:bg-[#82d6df] text-slate-950 font-semibold px-6 rounded-r-xl flex items-center space-x-2 transition-colors whitespace-nowrap cursor-pointer">
              <span>Subscribe</span>
              <FiArrowRight />
            </button>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Contact;