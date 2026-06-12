import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';

function LifeAtAanandam() {
  const images = [
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1576765974102-b756026ecee3?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516302752946-f93f8eb6c429?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544027993-37db48d8e0e6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1593113554316-22a36af1c238?auto=format&fit=crop&q=80"
  ];

  const providedFree = [
    "Safe, clean, well-ventilated room with bed, mattress, pillow and essential furnishings",
    "Three fresh, nutritious meals every day (breakfast, lunch and dinner) plus morning tea and evening snacks",
    "Clean drinking water and daily hygiene essentials",
    "Yoga and meditation sessions every morning",
    "Evening bhajans, satsang and community activities",
    "Festival celebrations — Holi, Diwali, Navratri, Eid, birthdays, anniversaries",
    "Basic medical guidance and support through our volunteer doctor network",
    "Emotional support, companionship and compassionate daily care",
    "Clothing, toiletries and daily essentials as required",
    "Visitors and volunteers welcomed to ensure elders never feel isolated"
  ];

  const whoCanCome = [
    "Abandoned or neglected by family members",
    "Homeless with no place to live",
    "Economically weaker seniors with no financial support",
    "In immediate need of safe shelter and basic care",
    "Seniors referred by a social worker, government employee or concerned citizen"
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="Life At Aanandam"
        description="A glimpse into our safe, loving, and completely free home for the elderly."
        hideBreadcrumb={true}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 mt-16 space-y-20">

        {/* Intro Section */}
        <motion.div
          className="max-w-5xl space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#0a231a] leading-tight mb-8">
            Are You Looking for a Free Old Age Home in Delhi?
          </h2>
          <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
            <p>
              If you are searching for a <strong>completely free (Nishulk) old age home in Delhi</strong> — for yourself, for a family member, or for an elder you know who has nowhere to go — you have found the right place.
            </p>
            <p>
              <strong>Aanandam Vridhashram</strong>, located in Karala Village near Rohini, Delhi, is a 100% free old age home run by <strong>Humanify Foundation</strong>. Here, abandoned, neglected and homeless senior citizens receive everything they need to live with dignity, warmth and joy — completely free of charge.
            </p>
            <p className="bg-[#FFF8E1] p-4 rounded-xl border-l-4 border-[#F59E0B]">
              There is no admission fee. There is no monthly charge. There is no hidden cost. <strong>Every single service at Aanandam is free.</strong> Always has been. Always will be.
            </p>
          </div>
        </motion.div>

        {/* Image Grid Section - Fulfilling user request for lots of images */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          {images.map((img, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-shadow duration-300">
              <img src={img} alt="Life at Aanandam" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out" />
            </div>
          ))}
        </motion.div>

        {/* What Is Provided Free */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#F59E0B] mb-8">
            What Is Provided Completely Free at Aanandam?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
            {providedFree.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Who Can Come */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] mb-6">
            Who Can Come to Aanandam?
          </h2>
          <p className="text-gray-700 text-sm sm:text-base font-medium mb-6">
            Aanandam is for senior citizens aged <strong>60 years and above</strong> who meet any of the following:
          </p>
          <div className="space-y-4 mb-6">
            {whoCanCome.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[#2E7D32] italic font-serif text-sm sm:text-base">
            Even if an elder has no documents — no Aadhar, no records — we will not turn them away. Need is the only eligibility that matters at Aanandam.
          </p>
        </motion.div>

        {/* Why Aanandam is Different */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#F59E0B] mb-6">
            Why Aanandam is Different from Other Old Age Homes
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
            There are paid old age homes in Delhi that charge ₹15,000 to ₹50,000 per month. There are government facilities that are overcrowded and understaffed. Aanandam is neither. It is a <strong>family-run, community-powered, compassion-driven free home</strong> — where every elder is treated not as a resident but as a beloved member of a large, warm family.
          </p>
        </motion.div>

        {/* Contact Banner & Buttons */}
        <motion.div
          className="bg-[#2E7D32] rounded-3xl p-8 sm:p-10 shadow-xl text-white w-full overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">📍</span> Our Address
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
              Pole No-25, 513/11, Near Karala Stadium, Opposite ISO Solid Gym, Karala Village (Opposite Rohini Sector-38), Delhi – 110081
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-sm sm:text-base font-medium">
              <div className="flex items-center gap-2">
                <span className="text-xl">📞</span>
                <a href="tel:+919310105630" className="hover:text-white/80 transition-colors">+91-9310105630</a>
              </div>
              <span className="hidden sm:inline text-white/40">|</span>
              <div className="flex items-center gap-2">
                <span className="text-xl">🌐</span>
                <a href="https://www.HUMANIFY.in" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">www.HUMANIFY.in</a>
              </div>
              <span className="hidden sm:inline text-white/40">|</span>
              <div className="flex items-center gap-2">
                <span className="text-xl">💬</span>
                <span>WhatsApp: Same number</span>
              </div>
            </div>

            <p className="text-white/80 italic text-sm mt-4">
              We are open 24×7. You can call us any time for admissions, visits or information.
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="tel:+919310105630" className="w-full sm:w-auto bg-[#C62828] hover:bg-[#B71C1C] text-white font-bold py-3 px-8 rounded-xl shadow-md transition transform hover:-translate-y-0.5 hover:shadow-lg text-sm text-center flex items-center justify-center gap-2">
            <span>📞</span> Call Now for Admission
          </a>
          <a href="https://wa.me/919310105630" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold py-3 px-8 rounded-xl shadow-md transition transform hover:-translate-y-0.5 hover:shadow-lg text-sm text-center flex items-center justify-center gap-2">
            <span>💬</span> WhatsApp Us
          </a>
          <a href="#" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#0a231a] font-bold py-3 px-8 rounded-xl shadow-sm border-2 border-[#0a231a] transition transform hover:-translate-y-0.5 hover:shadow-md text-sm text-center flex items-center justify-center gap-2">
            <span>🧭</span> Get Directions
          </a>
        </motion.div>

      </section>
    </div>
  );
}

export default LifeAtAanandam;
