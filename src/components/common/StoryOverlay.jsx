import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#040810]/95 backdrop-blur-2xl overflow-y-auto flex flex-col justify-between font-serif selection:bg-cyan-500 selection:text-slate-950"
        >
          {/* Header Bar with Close Button */}
          <div className="sticky top-0 z-10 w-full px-6 sm:px-12 py-6 flex items-center justify-between bg-[#040810]/80 backdrop-blur-md border-b border-slate-800/80">
            <span className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-semibold">
              Full Story View
            </span>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#050c18] border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-950/40 transition-all duration-300 cursor-pointer shadow-lg group"
              aria-label="Close story overlay"
            >
              <X size={22} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Story Container */}
          <div className="flex-1 w-full max-w-4xl mx-auto px-6 sm:px-12 py-12 flex flex-col space-y-10">
            
            {/* 1. Story Title Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="border-b border-slate-800/80 pb-6"
            >
              <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                {title || "[ Story Title Placeholder ]"}
              </h1>
            </motion.div>

            {/* 2. Story Content Single Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed min-h-[300px]"
            >
              {content || "[ Story Content Placeholder ]"}
            </motion.div>

          </div>

          {/* Footer Bar */}
          <div className="w-full px-6 sm:px-12 py-6 border-t border-slate-800/80 text-center text-slate-500 text-xs">
            Press ESC or click the close button to exit
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StoryOverlay;
