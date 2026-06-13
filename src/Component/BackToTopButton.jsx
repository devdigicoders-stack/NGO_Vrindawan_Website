import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9000] w-14 h-14 rounded-full shadow-[0_10px_25px_rgba(253,216,53,0.3)] hover:shadow-[0_10px_35px_rgba(10,35,26,0.3)] hover:-translate-y-2 transition-all duration-300 focus:outline-none group flex items-center justify-center"
          aria-label="Scroll to top"
        >
          {/* Animated glow ring behind the button */}
          <div className="absolute inset-0 rounded-full bg-[#FDD835] animate-ping opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
          
          {/* Main Button Background */}
          <div className="absolute inset-0 rounded-full bg-[#FDD835] group-hover:bg-[#0a231a] transition-colors duration-300 border-2 border-transparent group-hover:border-[#FDD835]"></div>
          
          {/* Icon */}
          <ArrowUp className="relative z-10 w-6 h-6 text-[#0a231a] group-hover:text-[#FDD835] group-hover:-translate-y-1 transition-all duration-300" strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
