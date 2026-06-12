import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top instantly when route changes
    window.scrollTo(0, 0);

    // Show loader
    setIsLoading(true);
    
    // Hide the loader after a short delay to simulate page loading and provide a smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000ms (2 seconds) loading duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0a231a] flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          {/* Brand Name Animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <h1 className="font-serif font-black text-4xl sm:text-5xl text-white">
              Aanandam
            </h1>
          </motion.div>
          
          {/* Custom Modern Spinner */}
          <div className="relative w-16 h-16">
            <motion.span 
              className="absolute inset-0 rounded-full border-4 border-white/10"
            />
            <motion.span 
              className="absolute inset-0 rounded-full border-4 border-t-[#F59E0B] border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>
          
          <p className="mt-8 text-white/80 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm animate-pulse">
            Loading
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
