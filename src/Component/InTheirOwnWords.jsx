import React from 'react';
import { motion } from 'framer-motion';

const InTheirOwnWords = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-10">
      {/* Header with line */}
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-[#F59E0B] font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap">
          In Their Own Words
        </h3>
        <div className="h-[1px] bg-gray-200 w-full"></div>
      </div>

      {/* Quote Box */}
      <motion.div 
        className="bg-[#FDFCF7] border-l-[6px] border-[#F59E0B] p-8 md:p-12 rounded-r-xl shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-serif italic text-xl md:text-2xl text-[#2E7D32] leading-relaxed mb-6">
          "I had forgotten what it felt like to wake up without fear. Now I wake up to the sound of laughter and the smell of chai. This is my home. These are my people."
        </p>
        <p className="text-gray-500 text-sm md:text-base font-medium">
          — A resident at Aanandam Vridhashram (name withheld for privacy)
        </p>
      </motion.div>
    </div>
  );
};

export default InTheirOwnWords;
