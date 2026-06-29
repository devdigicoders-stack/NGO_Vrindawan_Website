import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturesGrid() {
  const features = [
    {
      id: 1,
      icon: "🏠",
      title: "A Real Home",
      desc: "No admission charge. No monthly fee. Clean room, mattress, essentials — and the warmth of a community that is genuinely glad you are here.",
      borderColor: "border-[#1B5E20]"
    },
    {
      id: 2,
      icon: "🍲",
      title: "Daily Nourishment",
      desc: "Three freshly cooked meals every day, plus morning and evening tea with biscuits. Seasonal, wholesome, made with care.",
      borderColor: "border-[#E5A937]"
    },
    {
      id: 3,
      icon: "🧘",
      title: "Yoga & Wellbeing",
      desc: "Regular yoga sessions, happiness programmes and spiritual discussions — because the mind and soul need care as much as the body.",
      borderColor: "border-[#1B5E20]"
    },
    {
      id: 4,
      icon: "🎵",
      title: "Bhajans & Togetherness",
      desc: "Evening bhajans, satsang and community gathering — the kind of human connection that transforms a building into a home.",
      borderColor: "border-[#E5A937]"
    },
    {
      id: 5,
      icon: "🎉",
      title: "Celebrations",
      desc: "Every festival, every birthday — celebrated with full heart. Holi, Diwali, Navratri, Eid and the simple joys of Tuesday afternoons.",
      borderColor: "border-[#1B5E20]"
    },
    {
      id: 6,
      icon: "🩺",
      title: "Health Support",
      desc: "Regular health camps through our volunteer doctor network. Medical guidance available — because prevention matters as much as treatment.",
      borderColor: "border-[#E5A937]"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-2 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#0a231a] leading-[1.25]">
            Not Just Shelter. A Life Worth Living.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: feature.id * 0.1 }}
              className={`group relative overflow-hidden bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 border-t-[4px] ${feature.borderColor} hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Hover Green Line at Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#1B5E20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Icon */}
              <div className="relative z-10 text-[28px] mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 font-serif font-bold text-[20px] text-[#0a231a] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 text-[15px] leading-[1.7] font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
