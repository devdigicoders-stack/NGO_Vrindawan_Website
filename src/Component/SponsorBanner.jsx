import React from 'react';
import { motion } from 'framer-motion';

const SponsorBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <motion.div 
        className="bg-[#F59E0B] rounded-2xl p-8 md:p-10 shadow-md text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl" role="img" aria-label="yellow heart">💛</span>
          <h2 className="font-serif font-bold text-2xl md:text-3xl">
            Sponsor or Adopt an Elder — ₹1,500 Per Month Changes Everything
          </h2>
        </div>
        <p className="text-white/95 leading-relaxed text-[15px] md:text-base font-medium max-w-full">
          For just ₹1,500 per month — the cost of two restaurant meals for you — you can sponsor the complete care of one elder at Aanandam: their meals, shelter, medicines and wellbeing. You will receive updates, photos and the knowledge that your contribution is making a real, direct, daily difference. Visit <a href="/sponsor-an-elder" className="underline hover:text-white transition-colors">www.vridhashram.in/adopt-a-resident</a> to begin today.
        </p>
      </motion.div>
    </section>
  );
};

export default SponsorBanner;
