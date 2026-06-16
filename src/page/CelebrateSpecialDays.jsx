import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Users, Sparkles } from 'lucide-react';
import PageHero from '../Component/PageHero';
import { Link } from 'react-router-dom';
import CelebrationGallery from '../Component/CelebrationGallery';

function CelebrateSpecialDays() {
  const specialDays = [
    {
      icon: <Gift size={40} className="text-[#0a231a] group-hover:text-white transition-colors duration-300" />,
      title: "Birthday Celebration",
      desc: "Celebrate your or your loved ones' birthday by cutting a cake and sharing joy with our elders. Their heartfelt blessings will make your special day truly unforgettable.",
      borderColor: "border-[#F59E0B]"
    },
    {
      icon: <Heart size={40} className="text-[#0a231a] group-hover:text-white transition-colors duration-300" />,
      title: "Anniversary Celebration",
      desc: "Mark the milestone of your love by bringing smiles to the faces of those who need it most. Spend quality time and make your anniversary more meaningful.",
      borderColor: "border-[#E11D48]"
    },
    {
      icon: <Sparkles size={40} className="text-[#0a231a] group-hover:text-white transition-colors duration-300" />,
      title: "Parents' Memory Day",
      desc: "Honor the memory of your late parents by offering food, clothes, or spending time with our elder residents who will give you the same warmth as your own parents.",
      borderColor: "border-[#0284C7]"
    },
    {
      icon: <Users size={40} className="text-[#0a231a] group-hover:text-white transition-colors duration-300" />,
      title: "Adopt a Parent/Grandparent",
      desc: "Take responsibility for the monthly care, medical needs, or general well-being of an elder. Build a lasting relationship and become the family they lost.",
      borderColor: "border-[#16A34A]"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="Celebrate Special Days"
        description="Make your celebrations truly meaningful. Share your joy, milestones, and memories with our elders and receive their priceless blessings."
      />

      {/* Image Gallery Section */}
      <CelebrationGallery />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Intro Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0a231a] leading-tight">
            Turn Your Special Day Into Someone Else's Best Day
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            We celebrate our milestones in beautiful places with beautiful people — and yet, how many of those celebrations do you remember years later? 
            Imagine a celebration where thirty grandparents sing happy birthday to you, blessing you with tears of joy in their eyes. That is a moment you will remember for the rest of your life.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialDays.map((item, index) => (
            <motion.div
              key={index}
              className={`relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border-t-4 ${item.borderColor} border-l border-r border-b border-gray-100 group cursor-pointer overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Sliding Dark Green Background */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed text-[15px] transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-[#FDD835] rounded-2xl p-10 sm:p-12 text-center shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0a231a] mb-6">
            Ready to Celebrate With Us?
          </h2>
          <p className="text-[#0a231a] text-lg font-medium mb-8 max-w-2xl mx-auto">
            Get in touch with us to schedule your visit. Let us know the occasion, and we will help you plan a beautiful celebration with our elders.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#0a231a] hover:bg-green-700 transition-colors duration-300 rounded shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Celebrate With Us
          </Link>
        </motion.div>

      </section>
    </div>
  );
}

export default CelebrateSpecialDays;
