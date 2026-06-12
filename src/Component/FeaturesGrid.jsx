import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturesGrid() {
  const features = [
    {
      id: 1,
      icon: "🏠",
      title: "100% Free. Always.",
      desc: "No admission fee. No monthly charge. No hidden costs. Every elder at Aanandam receives complete care at absolutely no cost — because dignity should never come with a price tag.",
      bottomText: "No hidden charges ever."
    },
    {
      id: 2,
      icon: "🍛",
      title: "Three Meals, Every Day",
      desc: "A nutritious breakfast, a hearty lunch, evening tea & snacks, and a warm dinner — prepared fresh every day by our kitchen team. Because a full stomach is the first step to a happy heart.",
      bottomText: "Fresh, healthy, and vegetarian."
    },
    {
      id: 3,
      icon: "🧘",
      title: "Yoga, Bhajans & Soul Care",
      desc: "Every morning begins with yoga, meditation and prayer. Every evening ends with bhajans and community gathering. At Aanandam, we care for the body — and the soul equally.",
      bottomText: "Daily meditation and prayers."
    },
    {
      id: 4,
      icon: "🎉",
      title: "Festivals & Celebrations",
      desc: "Holi with colours. Diwali with diyas. Navratri with dandiya. Birthdays with cake and blessings. Life at Aanandam is never ordinary — it is always worth celebrating.",
      bottomText: "Celebrating every joy together."
    },
    {
      id: 5,
      icon: "🩺",
      title: "Medical Support",
      desc: "Regular medical guidance, basic health check-ups, and access to doctors through our volunteer network. The health of our elders is our daily priority and responsibility.",
      bottomText: "Regular health check-ups."
    },
    {
      id: 6,
      icon: "🤝",
      title: "Volunteers Welcome",
      desc: "Students, professionals, doctors, musicians — everyone is welcome here. Spending time with our elders heals them. And quietly, it heals you too.",
      bottomText: "Anyone can join and help."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-2 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#FDD835]"></span>
            <span className="text-[13px] font-bold text-gray-700 uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="font-serif font-black text-4xl sm:text-5xl text-[#0a231a] leading-[1.2]">
            Everything We Do for Our Elders
          </h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-[1.7] font-medium">
            We ensure that our elders are given the best of facilities with complete dignity, respect, and a lot of love.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              className="relative overflow-hidden group bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-gray-100 cursor-pointer"
            >
              {/* The Sliding Dark Green Background */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

              {/* Background Decorative Shape */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-100/50 rounded-bl-3xl rounded-tr-xl transform rotate-12 opacity-50 group-hover:bg-white/5 transition-colors duration-500 z-0"></div>

              {/* Content Container */}
              <div className="relative z-10">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-[#FDD835] flex items-center justify-center text-2xl mb-8 shadow-sm">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif font-black text-[22px] text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-4 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-white/80 transition-colors duration-300 text-[15px] leading-[1.8] font-medium mb-8 min-h-[135px]">
                  {feature.desc}
                </p>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-gray-200 group-hover:bg-white/20 transition-colors duration-300 mb-6"></div>

                {/* Bottom Bullet Point */}
                <div className="flex items-start gap-3">
                  <div className="mt-[3px] w-[18px] h-[18px] rounded-full bg-[#FDD835] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-3 h-3 text-[#0a231a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 group-hover:text-[#FDD835] transition-colors duration-300 text-[14px] font-bold">
                    {feature.bottomText}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
