import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg1 from '../assets/hero_bg.png';
import heroBg2 from '../assets/impact_1.png';
import heroBg3 from '../assets/impact_2.png';
import heroBg4 from '../assets/service_1.png';
import HeroBackground3D from './HeroBackground3D';

const slides = [
  {
    image: heroBg1,
    tag: "100% Free • 100% Love • 100% Dignity",
    title: "Aanandam — खुशियों का घर",
    subtitle: "India's Happiest Free Old Age Home | Karala, Delhi",
    desc: '"Some people call it an old age home. We call it Khushiyon Ka Ghar — a place where every elder finds what they lost: a family, a voice, a home, and a reason to smile again."'
  },
  {
    image: heroBg2,
    tag: "Compassion in Action",
    title: "Empowering Our Elders",
    subtitle: "Providing Medical Care and Emotional Support",
    desc: '"Our mission goes beyond shelter. We ensure every resident receives regular health checkups, nutritious meals, and the emotional care they deserve."'
  },
  {
    image: heroBg3,
    tag: "Join Our Mission",
    title: "You Can Make a Difference",
    subtitle: "Volunteer, Support Us, and Spread Smiles",
    desc: '"Your small contribution can light up an elder’s day. Celebrate your special days with them or volunteer your time to bring joy into their lives."'
  },
  {
    image: heroBg4,
    tag: "A Community of Love",
    title: "Celebrating Life Everyday",
    subtitle: "Activities, Yoga, and Cultural Events",
    desc: '"At Aanandam, life never stops. From morning yoga to evening bhajans, we create an environment full of life, laughter, and spiritual peace."'
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-[#0a231a]">
      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.div
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        />
      </AnimatePresence>

      {/* 3D Background Animation */}
      <HeroBackground3D />

      {/* Gradient Overlay for better text readability on both mobile and desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a231a] via-[#0a231a]/70 sm:via-[#0a231a]/60 to-[#0a231a]/20 sm:to-transparent pointer-events-none"></div>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8 pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentIndex}`}
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
              {slides[currentIndex].tag}
            </motion.div>

            <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl leading-tight text-white mb-4 drop-shadow-2xl">
              {slides[currentIndex].title}
            </h1>

            <h2 className="font-kalam text-lg sm:text-2xl text-[#FDD835] mb-6 drop-shadow-md">
              {slides[currentIndex].subtitle}
            </h2>

            <p className="text-sm sm:text-lg text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-md font-medium">
              {slides[currentIndex].desc}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/Support Us"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FDD835] hover:bg-white text-[#0a231a] font-bold rounded-sm shadow-lg transition duration-300 transform hover:-translate-y-1 text-center text-[15px]"
              >
                Support Us / Support Us Now
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
