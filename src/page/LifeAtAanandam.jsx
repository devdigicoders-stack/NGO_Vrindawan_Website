import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Globe, Compass } from 'lucide-react';
import PageHero from '../Component/PageHero';

function LifeAtAanandam() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/20260215_140949 (1).jpg",
    "/20260215_152343.jpg",
    "/20260304_134952.jpg",
    "/20260304_135319.jpg",
    "/20260304_145835.jpg",
    "/20260304_150711.jpg"
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

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(selectedImage);
    if (currentIndex > -1) {
      setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(selectedImage);
    if (currentIndex > -1) {
      setSelectedImage(images[(currentIndex + 1) % images.length]);
    }
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
            <div 
              key={index} 
              className="relative rounded-2xl overflow-hidden aspect-square shadow-sm cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt="Life at Aanandam" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
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
              <MapPin className="w-8 h-8" /> Our Address
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
              Pole No-25, 513/11, Karala Village, Delhi - 110081
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-sm sm:text-base font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+919310105630" className="hover:text-white/80 transition-colors">+91-9310105630</a>
              </div>
              <span className="hidden sm:inline text-white/40">|</span>
              <div className="flex items-center gap-2 flex-wrap">
                <Globe className="w-5 h-5 flex-shrink-0" />
                <div className="flex gap-2 flex-wrap">
                  <a href="https://www.vridhashram.in" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">www.vridhashram.in</a>
                  <span className="text-white/40">|</span>
                  <a href="https://www.humanify.in" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">www.humanify.in</a>
                  <span className="text-white/40">|</span>
                  <a href="https://www.nirajgera.com" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">www.nirajgera.com</a>
                </div>
              </div>
              <span className="hidden sm:inline text-white/40">|</span>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
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
            <Phone className="w-5 h-5" /> Call Now for Admission
          </a>
          <a href="https://wa.me/919310105630" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold py-3 px-8 rounded-xl shadow-md transition transform hover:-translate-y-0.5 hover:shadow-lg text-sm text-center flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
          <a href="#" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#0a231a] font-bold py-3 px-8 rounded-xl shadow-sm border-2 border-[#0a231a] transition transform hover:-translate-y-0.5 hover:shadow-md text-sm text-center flex items-center justify-center gap-2">
            <Compass className="w-5 h-5" /> Get Directions
          </a>
        </motion.div>

      </section>

      {/* Fullscreen Image Modal (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a231a]/95 backdrop-blur-md p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-[#C62828] rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-md transition-colors z-50"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Left/Prev Button */}
            <button
              className="absolute left-2 sm:left-6 text-white bg-black/20 hover:bg-[#FDD835] hover:text-[#0a231a] rounded-full w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center backdrop-blur-md transition-colors z-50"
              onClick={handlePrev}
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 pr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right/Next Button */}
            <button
              className="absolute right-2 sm:right-6 text-white bg-black/20 hover:bg-[#FDD835] hover:text-[#0a231a] rounded-full w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center backdrop-blur-md transition-colors z-50"
              onClick={handleNext}
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 pl-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <motion.img
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LifeAtAanandam;
