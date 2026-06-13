import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Loader shows for 600ms on every page navigation

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-[#FAFAF5] flex flex-col items-center justify-center"
        >
          {/* Logo Container with breathing animation */}
          <motion.div 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-xl flex items-center justify-center p-4 border-4 border-[#2E7D32]/10"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img src="/image.png" alt="Aanandam Logo" className="w-full h-full object-contain" />
          </motion.div>
          
          <motion.h2 
            className="mt-6 text-[#2E7D32] font-serif font-bold text-2xl tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Aanandam Vridhashram
          </motion.h2>

          {/* Jumping dots */}
          <div className="mt-8 flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-[#FDD835] rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
