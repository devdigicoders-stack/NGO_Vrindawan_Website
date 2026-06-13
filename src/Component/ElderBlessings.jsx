import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, Heart } from 'lucide-react';

export default function ElderBlessings() {
  const elders = [
    {
      id: 1,
      icon: <User className="w-12 h-12 text-white" />,
      name: "Ram Lal Ji",
      details: "Age 74 | Farmer, Uttar Pradesh",
      story: "Ram Lal Ji worked his land for 50 years. When his children moved to the city, he had no one. Aanandam gave him brothers, sisters, and a reason to laugh again.",
      quote: "Beta, Bhagwan aapko woh khushi de jo aapne humein di hai."
    },
    {
      id: 2,
      icon: <Heart className="w-12 h-12 text-white" />,
      name: "Shanti Devi Ji",
      details: "Age 78 | Homemaker, Delhi",
      story: "Shanti Ji raised three children. When her husband passed and her children grew distant, she found herself alone. Today, she leads the morning bhajan sessions at Aanandam.",
      quote: "Yahan aake laga, mera ghar phir se mil gaya."
    },
    {
      id: 3,
      icon: <Users className="w-12 h-12 text-white" />,
      name: "Mohan Das Ji",
      details: "Age 82 | Retired Teacher, Haryana",
      story: "He spent 40 years shaping young minds. When his health declined, he had nowhere to go. Today, Mohan Das Ji teaches the younger volunteers how to live with purpose.",
      quote: "Jab tak saans hai, tab tak dua deta rahunga."
    }
  ];

  return (
    <section className="pt-20 pb-24 px-4 sm:px-6 lg:px-2 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto">

        {/* Section Top Label */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 sm:w-24 h-[1px] bg-[#D4AF37]/40"></div>
          <span className="text-[#D4AF37] font-bold tracking-widest text-[13px] uppercase text-center">
            Elder Blessings Wall
          </span>
          <div className="w-12 sm:w-24 h-[1px] bg-[#D4AF37]/40"></div>
        </div>

        {/* Section Heading & Intro */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#2E7D32] leading-[1.3] mb-6">
            They Have So Much to Give. All They Ask Is That You Remember Them.
          </h2>
          <p className="text-gray-700 text-[16px] sm:text-[18px] leading-[1.8] font-medium">
            Every elder at Aanandam carries a lifetime of stories — of sacrifice, of love, of resilience. When you visit, they don't ask for much. They ask for your time. Your smile. Your presence. And in return, they give you something no money can buy: <span className="font-black text-[#0a231a]">their blessings.</span>
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {elders.map((elder) => (
            <div
              key={elder.id}
              className="relative overflow-hidden group bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center cursor-pointer"
            >
              {/* The Sliding Dark Green Background */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

              {/* Content Container */}
              <div className="relative z-10 w-full flex flex-col h-full">

                {/* Avatar Icon */}
                <div className="w-24 h-24 rounded-full bg-[#F57C00] flex items-center justify-center text-5xl mb-6 mx-auto shadow-md transform group-hover:scale-110 transition-transform duration-500">
                  {elder.icon}
                </div>

                {/* Name */}
                <h3 className="font-serif font-black text-[22px] text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-1">
                  {elder.name}
                </h3>

                {/* Details */}
                <p className="text-[#F57C00] group-hover:text-[#FDD835] transition-colors duration-300 text-[14px] font-bold mb-6">
                  {elder.details}
                </p>

                {/* Story */}
                <p className="text-gray-600 group-hover:text-white/85 transition-colors duration-300 text-[15px] leading-[1.8] font-medium mb-8 flex-grow">
                  {elder.story}
                </p>

                {/* Quote Box */}
                <div className="bg-[#FFF0F0] group-hover:bg-white/10 p-5 rounded-xl transition-colors duration-300 mt-auto border border-[#FFE0E0] group-hover:border-white/20">
                  <p className="text-[#D32F2F] group-hover:text-[#FDD835] font-medium italic text-[16px] leading-relaxed">
                    "{elder.quote}"
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
