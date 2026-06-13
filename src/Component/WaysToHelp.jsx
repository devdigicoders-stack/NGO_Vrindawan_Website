import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Utensils, Cake, Handshake, Building2, Home } from 'lucide-react';

export default function WaysToHelp() {
  const ways = [
    {
      id: 1,
      icon: <Heart className="w-10 h-10 text-[#D32F2F] group-hover:text-white transition-colors duration-300" />,
      title: "Donate",
      desc: "₹500 feeds an elder for a day. ₹6,500 sponsors an elder for an entire month. No amount is too small. Every rupee reaches them directly.",
      btnText: "Donate Now",
      btnLink: "/donate",
      topColor: "bg-[#D32F2F]",
      btnStyle: "bg-[#D32F2F] text-white hover:bg-[#b71c1c] border-transparent shadow-md group-hover:border-white/30"
    },
    {
      id: 2,
      icon: <Utensils className="w-10 h-10 text-[#FDD835] group-hover:text-white transition-colors duration-300" />,
      title: "Sponsor a Meal",
      desc: "Celebrate your birthday or anniversary by feeding our elders. From just ₹750, you can bring a warm meal — and a warm smile — to everyone at Aanandam.",
      btnText: "Choose a Meal",
      btnLink: "/sponsor-a-meal",
      topColor: "bg-[#FDD835]",
      btnStyle: "bg-[#2E7D32] text-white hover:bg-[#1B5E20] border-transparent shadow-md group-hover:border-[#FDD835]/50"
    },
    {
      id: 3,
      icon: <Cake className="w-10 h-10 text-[#2E7D32] group-hover:text-white transition-colors duration-300" />,
      title: "Celebrate Here",
      desc: "Birthdays. Anniversaries. Promotions. Mark your special days here, surrounded by 30 grandparents who will bless you with all their heart. It will be the most meaningful day of your life.",
      btnText: "Book a Celebration",
      btnLink: "/celebrate",
      topColor: "bg-[#2E7D32]",
      btnStyle: "bg-transparent text-[#0a231a] hover:bg-[#0a231a] hover:text-[#FDD835] border-[#0a231a] group-hover:border-white group-hover:text-white hover:!bg-white hover:!text-[#0a231a]"
    },
    {
      id: 4,
      icon: <Handshake className="w-10 h-10 text-[#1976D2] group-hover:text-white transition-colors duration-300" />,
      title: "Volunteer",
      desc: "Doctors, students, professionals — give your time.",
      btnText: "Join Us",
      btnLink: "/volunteer",
      topColor: "bg-[#1976D2]",
      btnStyle: "bg-[#1976D2] text-white hover:bg-[#1565C0] border-transparent shadow-md group-hover:border-white/30"
    },
    {
      id: 5,
      icon: <Building2 className="w-10 h-10 text-[#E65100] group-hover:text-white transition-colors duration-300" />,
      title: "CSR Partner",
      desc: "Corporate social responsibility with real, measurable impact.",
      btnText: "Partner With Us",
      btnLink: "/csr-partnerships",
      topColor: "bg-[#E65100]",
      btnStyle: "bg-[#E65100] text-white hover:bg-[#EF6C00] border-transparent shadow-md group-hover:border-white/30"
    },
    {
      id: 6,
      icon: <Home className="w-10 h-10 text-[#8E24AA] group-hover:text-white transition-colors duration-300" />,
      title: "Admit an Elder",
      desc: "Know an abandoned elder? Contact us — we will help.",
      btnText: "Contact Us",
      btnLink: "/admission",
      topColor: "bg-[#8E24AA]",
      btnStyle: "bg-[#8E24AA] text-white hover:bg-[#7B1FA2] border-transparent shadow-md group-hover:border-white/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="pt-10 pb-24 px-4 sm:px-6 lg:px-2 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto">

        {/* Section Top Label */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 sm:w-24 h-[1px] bg-[#D4AF37]/40"></div>
          <span className="text-[#D4AF37] font-bold tracking-widest text-[13px] uppercase text-center">
            Ways To Help
          </span>
          <div className="w-12 sm:w-24 h-[1px] bg-[#D4AF37]/40"></div>
        </div>

        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#2E7D32] leading-[1.3]">
            You Don't Need to Change the World. Just Change One Elder's Day.
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {ways.map((way) => (
            <motion.div
              key={way.id}
              variants={cardVariants}
              className="relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center p-10 border border-gray-100 group cursor-pointer"
            >
              {/* The Sliding Dark Green Background */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

              {/* Top Color Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 ${way.topColor} transition-all duration-500 z-10 group-hover:h-2.5`}></div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col items-center w-full h-full">
                {/* Icon */}
                <div className="text-4xl mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {way.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif font-black text-[22px] text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-6">
                  {way.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-white/85 transition-colors duration-300 text-[15px] leading-[1.8] font-medium mb-10 flex-grow">
                  {way.desc}
                </p>

                {/* Button */}
                <Link
                  to={way.btnLink}
                  className={`w-full inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-bold rounded transition-all duration-300 border-2 ${way.btnStyle}`}
                >
                  {way.btnText}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
