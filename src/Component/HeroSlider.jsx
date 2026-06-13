import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero_bg.png';
import HeroBackground3D from './HeroBackground3D';

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-[#0a231a]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* 3D Background Animation */}
      <HeroBackground3D />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a231a] via-[#0a231a]/60 to-transparent pointer-events-none"></div>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8 pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#FDD835] mb-6 shadow-xl"
            >
              100% Free • 100% Love • 100% Dignity
            </motion.div>

            <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl leading-tight text-white mb-4 drop-shadow-2xl">
              Aanandam — खुशियों का घर
            </h1>

            <h2 className="font-kalam text-lg sm:text-2xl text-[#FDD835] mb-6 drop-shadow-md">
              India's Happiest Free Old Age Home | Karala, Delhi
            </h2>

            <p className="text-sm sm:text-lg text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-md font-medium">
              "Some people call it an old age home. We call it Khushiyon Ka Ghar — a place where every elder finds what they lost: a family, a voice, a home, and a reason to smile again."
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/donate"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FDD835] hover:bg-white text-[#0a231a] font-bold rounded-sm shadow-lg transition duration-300 transform hover:-translate-y-1 text-center text-[15px]"
              >
                Sponsor / Donate Now
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-sm shadow-lg transition duration-300 transform hover:-translate-y-1 text-center text-[15px]"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
