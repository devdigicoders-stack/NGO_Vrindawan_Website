import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedCounter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 2000, 1); // 2 second duration
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const backgroundImages = [
  "/fwd47photos/2.jpg",
  "/fwd47photos/4.jpg",
  "/fwd47photos/6.jpg",
  "/fwd47photos/9.jpg"
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[90vh] min-h-[700px] flex flex-col justify-between overflow-hidden bg-black">
      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.div
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
        />
      </AnimatePresence>

      {/* Neutral Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 pointer-events-none z-0"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 sm:px-8 text-center pt-24 pb-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#E5A937] italic font-serif text-sm sm:text-base md:text-lg mb-6 tracking-wide"
        >
          Karala Village, Delhi — near Rohini & Pitampura
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-white max-w-[700px] mx-auto mb-8 tracking-tight"
        >
          A <span className="text-[#E5A937]">Home</span> for Every <br className="hidden md:block" /> Forgotten Grandparent
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-200 text-sm sm:text-[15px] md:text-base leading-[1.8] max-w-3xl mx-auto mb-12 font-medium"
        >
          Aanandam Vridhashram is a free old age home in Delhi where abandoned and homeless senior citizens find shelter, warmth, yoga, bhajans — and a family that does not leave.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto"
        >
          <Link
            to="/donate"
            className="w-full sm:w-auto px-10 py-4 bg-[#C63D2F] hover:bg-[#A83225] text-white font-bold rounded-lg shadow-lg transition-colors text-[17px] flex items-center justify-center gap-2"
          >
            <span className="text-[#FDD835]">💛</span> Donate Now
          </Link>
          <Link
            to="/admission"
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-gray-400 hover:bg-white/5 text-white font-bold rounded-lg transition-colors text-[17px] flex items-center justify-center"
          >
            Admit an Elder &rarr;
          </Link>
        </motion.div>
      </div>

      {/* Bottom Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full border-t border-white/10 py-12"
      >
        <div className="max-w-[1100px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="font-serif font-bold text-3xl sm:text-4xl text-[#E5A937] mb-2"><AnimatedCounter end={100} suffix="%" /></span>
            <span className="text-gray-400 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase">Free of Charge</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif font-bold text-3xl sm:text-4xl text-[#E5A937] mb-2"><AnimatedCounter end={30} suffix="+" /></span>
            <span className="text-gray-400 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase">Elders in our Care</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif font-bold text-3xl sm:text-4xl text-[#E5A937] mb-2"><AnimatedCounter end={3} suffix="+" /></span>
            <span className="text-gray-400 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase">Years of Service</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif font-bold text-3xl sm:text-4xl text-[#E5A937] mb-2">∞</span>
            <span className="text-gray-400 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase">Blessings Received</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
