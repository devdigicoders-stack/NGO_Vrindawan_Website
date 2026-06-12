import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';

function Volunteer() {
  const whoWeNeed = [
    {
      icon: "🎓",
      title: "Students & Interns",
      desc: "NSS, NCC, social work students, management interns — Aanandam provides meaningful internship certificates and impactful social hours. You will learn things no classroom teaches.",
      borderColor: "border-[#F59E0B]" // Orange
    },
    {
      icon: "🩺",
      title: "Doctors & Health Professionals",
      desc: "Visit monthly for health check-ups, advice, and guidance. Dentists, physiotherapists, dieticians, ophthalmologists — every specialty is welcome and deeply needed.",
      borderColor: "border-[#2E7D32]" // Green
    },
    {
      icon: "🧘",
      title: "Yoga & Meditation Teachers",
      desc: "Lead morning sessions for our elders. Your hour-long class will set the tone for an elder's entire day. This is the most direct form of preventive healthcare.",
      borderColor: "border-[#C62828]" // Red
    },
    {
      icon: "🎵",
      title: "Musicians & Performers",
      desc: "Sing. Play. Perform. Our elders love classical music, bhajans and folk songs. A live performance at Aanandam is an emotional experience neither performer nor audience forgets.",
      borderColor: "border-[#9C27B0]" // Purple
    },
    {
      icon: "📚",
      title: "Educators & Counsellors",
      desc: "Run activity sessions, storytelling circles, life history interviews, or gentle counselling. Help elders process their journeys and find meaning in the present.",
      borderColor: "border-[#0288D1]" // Blue
    },
    {
      icon: "🏢",
      title: "Corporate Teams",
      desc: "CSR volunteering day at Aanandam. Your entire team spends a day with elders — serving meals, conducting activities, sharing stories. The most powerful team-building exercise you will ever do.",
      borderColor: "border-[#00796B]" // Teal
    }
  ];

  const steps = [
    "Fill out our volunteer registration form (link below) or WhatsApp us your name, profession and availability.",
    "We match you with the most suitable volunteer role based on your skills and schedule.",
    "Your first visit is scheduled. We guide you on what to bring, what to expect and how to prepare.",
    "You arrive. You connect. You give. And you receive something you didn't expect — something that stays with you long after you leave Aanandam."
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="Volunteer With Us"
        description="Give your time, share your skills, and receive unconditional love. Join the Aanandam family as a volunteer."
        hideBreadcrumb={true}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 mt-16 space-y-20">

        {/* Intro Section */}
        <motion.div
          className="max-w-5xl space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] leading-tight mb-6">
            You Don't Need Special Skills. You Just Need to Show Up.
          </h2>
          <div className="space-y-6 text-gray-700 text-base leading-relaxed font-medium">
            <p>
              Volunteering at Aanandam is one of the most talked-about experiences in Delhi's social impact community. People come for a few hours — and come back every week. Students arrive for internship hours — and stay long after their certificates are issued. Doctors come for a medical camp — and make it a monthly commitment.
            </p>
            <p>
              Why? Because <strong>Aanandam changes you.</strong> When you sit beside an 80-year-old who has survived unimaginable hardship and still chooses to smile — something shifts. Your perspective expands. Your problems shrink. Your capacity for gratitude grows beyond anything you thought possible.
            </p>
          </div>
        </motion.div>

        {/* Who We Need Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#F59E0B] mb-8">
            Who We Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeNeed.map((item, index) => (
              <motion.div
                key={index}
                className={`relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border-t-4 ${item.borderColor} border-l border-r border-b border-gray-100 group cursor-pointer overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* The Sliding Dark Green Background */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-3">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Volunteer Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] mb-8">
            How to Volunteer
          </h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-5 border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 flex-shrink-0 bg-[#F59E0B] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base pt-1">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="#" className="w-full sm:w-auto bg-[#C62828] hover:bg-[#B71C1C] text-white font-bold py-3 px-8 rounded-xl shadow-md transition transform hover:-translate-y-0.5 hover:shadow-lg text-sm text-center">
            Register as Volunteer
          </a>
          <a href="#" className="w-full sm:w-auto bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold py-3 px-8 rounded-xl shadow-md transition transform hover:-translate-y-0.5 hover:shadow-lg text-sm text-center">
            Apply for Internship
          </a>
          <a href="#" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#0a231a] font-bold py-3 px-8 rounded-xl shadow-sm border-2 border-[#0a231a] transition transform hover:-translate-y-0.5 hover:shadow-md text-sm text-center">
            Plan a Corporate Volunteer Day
          </a>
        </motion.div>

      </section>
    </div>
  );
}

export default Volunteer;
