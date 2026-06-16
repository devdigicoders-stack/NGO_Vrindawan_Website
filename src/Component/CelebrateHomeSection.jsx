import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gift, Heart, Users, Sparkles } from 'lucide-react';

function CelebrateHomeSection() {
  const specialDays = [
    {
      icon: <Gift size={32} className="text-[#0a231a]" />,
      title: "Birthday Celebration",
      desc: "Share your special day with our elders and receive heartfelt blessings.",
    },
    {
      icon: <Heart size={32} className="text-[#0a231a]" />,
      title: "Anniversary Celebration",
      desc: "Mark the milestone of your love by bringing smiles to those in need.",
    },
    {
      icon: <Sparkles size={32} className="text-[#0a231a]" />,
      title: "Parents' Memory Day",
      desc: "Honor the memory of your late parents by offering food and spending time.",
    },
    {
      icon: <Users size={32} className="text-[#0a231a]" />,
      title: "Adopt a Parent/Grandparent",
      desc: "Take responsibility for the well-being of an elder and build a lasting bond.",
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[2px] bg-[#FDD835] w-12"></div>
            <h3 className="text-[#FDD835] font-bold text-sm tracking-[0.2em] uppercase">MAKE IT MEMORABLE</h3>
            <div className="h-[2px] bg-[#FDD835] w-12"></div>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0a231a] leading-tight">
            Celebrate Your Special Days With Us
          </h2>
          <p className="text-gray-600 text-lg font-medium pt-2">
            Turn your personal milestones into moments of joy for our elder residents. Your time and love are the greatest gifts they can receive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specialDays.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-[#FAFAF5] p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Sliding Dark Green Background */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-3">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed text-[15px] transition-colors duration-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/celebrate-special-days"
            className="inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold tracking-wide text-[#0a231a] bg-[#FDD835] hover:bg-[#0a231a] hover:text-[#FDD835] transition-colors duration-300 rounded shadow-md"
          >
            Celebrate With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CelebrateHomeSection;
