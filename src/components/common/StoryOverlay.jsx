import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen } from 'lucide-react';

const StoryOverlay = ({ isOpen, onClose, title, content }) => {
  // Prevent background scrolling when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key press to close overlay
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  // Parser function to beautifully format raw text data
  const parseContent = (text) => {
    if (!text) return <p className="text-slate-400 italic">No content available.</p>;
    
    // Split text by newlines, trim, and remove empty lines
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
    return lines.map((line, index) => {
      // 1. Render Glowing Divider (---)
      if (line.match(/^---+$/) || line === '---') {
        return (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="w-full flex justify-center py-10 md:py-14"
          >
            <div className="w-2/3 max-w-md h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
            </div>
          </motion.div>
        );
      }
      
      // 2. Render Subheadings (short lines without ending punctuation)
      if (line.length < 60 && !line.endsWith('.') && !line.endsWith('?') && !line.endsWith('!') && line.split(' ').length <= 8) {
        return (
          <motion.h3 
            key={index}
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-cyan-300 mt-12 mb-6 tracking-wide drop-shadow-sm"
          >
            {line}
          </motion.h3>
        );
      }
      
      // 3. Render Standard Paragraphs
      return (
        <motion.p 
          key={index}
          variants={itemVariants}
          className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed mb-6 tracking-wide"
        >
          {line}
        </motion.p>
      );
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 bg-[#040810]/95 backdrop-blur-3xl overflow-y-auto font-serif selection:bg-cyan-500 selection:text-slate-950 flex flex-col"
        >
          {/* Ambient Background Orbs */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px] mix-blend-screen"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[150px] mix-blend-screen"></div>
          </div>

          {/* Sticky Header Bar */}
          <div className="sticky top-0 z-20 w-full px-6 sm:px-12 py-5 flex items-center justify-between bg-[#040810]/70 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
            <div className="flex items-center gap-3 text-cyan-400">
              <BookOpen size={20} className="opacity-80" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                Immersive View
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#050c18] border border-slate-700/50 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-950/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-pointer group"
              aria-label="Close overlay"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="relative z-10 flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-12 md:py-20">
            
            {/* Glassmorphism Reading Container */}
            <div className="bg-[#050c18]/80 backdrop-blur-md border border-slate-800/60 rounded-[2rem] shadow-2xl p-8 md:p-16 lg:p-20 overflow-hidden relative">
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 via-cyan-400 to-blue-600"></div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col"
              >
                {/* Hero Title */}
                <motion.div variants={itemVariants} className="mb-16 text-center">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-xl mb-6">
                    {title || "[ Title Placeholder ]"}
                  </h1>
                  <div className="w-24 h-[2px] bg-cyan-400 mx-auto opacity-70"></div>
                </motion.div>

                {/* Parsed Content */}
                <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-slate-300">
                  {parseContent(content)}
                </div>
              </motion.div>

            </div>
          </div>

          {/* Footer Bar */}
          <div className="relative z-10 w-full px-6 py-8 text-center">
            <span className="text-slate-500 text-xs tracking-widest uppercase flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-slate-700"></span>
              Press <kbd className="font-sans px-2 py-1 bg-slate-800 rounded mx-1 text-slate-300 border border-slate-700">ESC</kbd> to return
              <span className="w-8 h-[1px] bg-slate-700"></span>
            </span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StoryOverlay;
