import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HeroBackground3D from './HeroBackground3D';

import bg1 from '../assets/old_age_1.png';
import bg2 from '../assets/old_age_2.png';
import bg3 from '../assets/old_age_3.png';
import bg4 from '../assets/old_age_4.png';

const images = [bg1, bg2, bg3, bg4];

function PageHero({ title, description, hideBreadcrumb = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden bg-[#0a231a]">
      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.div 
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images[currentIndex]})` }} 
        />
      </AnimatePresence>

      {/* Dark green overlay - reduced opacity for better image visibility */}
      <div className="absolute inset-0 bg-[#0a231a]/40"></div>

      {/* 3D Background Animation */}
      <HeroBackground3D />

      {/* Slight gradient for better text readability - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a231a]/60 to-transparent pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 px-4 mt-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight font-serif leading-tight">
          {title}
        </h1>
        
        {description && (
          <p className="text-white/90 text-lg md:text-xl font-medium tracking-wide mb-8 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}

      </div>
    </section>
  );
}

export default PageHero;
