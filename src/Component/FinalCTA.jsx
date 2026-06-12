import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="pt-10 pb-32 px-4 sm:px-6 lg:px-2 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto">

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#E58F00] rounded-2xl p-8 sm:p-12 md:p-16 shadow-[0_20px_60px_rgba(229,143,0,0.3)] relative overflow-hidden"
        >
          {/* Decorative subtle background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.07] rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-[0.05] rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center sm:text-left">
            <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-white leading-[1.35] mb-6">
              Will You Be the Reason an Elder Smiles Today?
            </h2>
            <p className="text-white/95 text-[16px] sm:text-[18px] leading-[1.9] font-medium">
              Every day at Aanandam begins with a question: who will come today? Who will sit with us? Who will remember us? You can be that person. Whether you donate ₹100 or ₹100,000 — whether you spend one Sunday with us or dedicate your career to our cause — <span className="font-black text-[#FFFDE7]">every act of love counts at Aanandam.</span> Come. Sit. Stay. Give. And discover what it truly means to be human.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
