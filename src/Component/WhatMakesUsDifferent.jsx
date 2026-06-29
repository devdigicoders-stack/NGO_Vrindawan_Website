import React from 'react';
import { motion } from 'framer-motion';

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-4">
            <h3 className="text-[#E5A937] font-bold tracking-[0.15em] uppercase text-[13px]">
              What Makes Aanandam Different
            </h3>
          </div>
          
          <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-[32px] text-[#0a231a] mb-6 leading-tight max-w-3xl mx-auto">
            The Focus Is Not Just Care — It Is Joy
          </h2>
          
          <p className="text-gray-700 text-[15.5px] sm:text-[16px] leading-relaxed max-w-4xl mx-auto font-medium">
            Most old age homes focus on the basics — shelter, meals, medicine. Aanandam does all of that. But we were founded by a Happiness and Mental Health practitioner who has spent two decades studying what makes human beings genuinely flourish at every age. That perspective changes everything.
          </p>
        </div>

        {/* 3 Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm border-t-[5px] border-t-[#2E7D32] hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-6">🧘</div>
            <h4 className="font-serif font-bold text-[22px] text-[#0a231a] mb-4">
              Yoga & Happiness Sessions
            </h4>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Regular yoga sessions and happiness programmes led by our team — because a still mind and a joyful spirit are the foundation of physical health at any age.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm border-t-[5px] border-t-[#FDD835] hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-6">🎵</div>
            <h4 className="font-serif font-bold text-[22px] text-[#0a231a] mb-4">
              Bhajans, Music & Spiritual Life
            </h4>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Daily bhajan sessions, spiritual discussions and music — not as activity slots, but as the rhythm of life here. This is the heartbeat of Aanandam.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm border-t-[5px] border-t-[#2E7D32] hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-6">🎭</div>
            <h4 className="font-serif font-bold text-[22px] text-[#0a231a] mb-4">
              Talent, Creativity & Expression
            </h4>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Born from Oldies Got Talent — residents are encouraged to sing, tell stories, share skills and remain creative contributors. Not residents. Artists.
            </p>
          </motion.div>

        </div>

        {/* Honest Note Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#2E7D32] rounded-2xl p-8 sm:p-12 text-white shadow-md"
        >
          <h3 className="font-serif font-bold text-2xl sm:text-3xl mb-6">
            On Our Approach to Care — An Honest Note
          </h3>
          <div className="space-y-6 text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-medium">
            <p>
              We are a community-funded, community-powered home. Our medical support currently operates through regular volunteer health camps and doctor visits. For hospitalisation or specialist care, we rely on government facilities and our growing network of medical volunteers. We do not over-promise — because the elders who trust us deserve honesty.
            </p>
            <p>
              We are actively seeking hospital and diagnostic partners (X-ray, pathology, physiotherapy) to bring better healthcare to our residents. If your institution can help — <strong className="text-white underline decoration-[#FDD835] decoration-2 underline-offset-4">please reach out to us.</strong>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
