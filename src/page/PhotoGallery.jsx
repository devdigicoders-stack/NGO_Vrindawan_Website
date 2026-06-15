import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaGlassCheers, FaMicrophone, FaStethoscope, FaBus, FaHandshake, FaHandsHelping, FaStar } from 'react-icons/fa';
import PageHero from '../Component/PageHero';

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/20260215_140949 (1).jpg",
    "/20260215_152343.jpg",
    "/20260304_134952.jpg",
    "/20260304_135319.jpg",
    "/20260304_145835.jpg",
    "/20260304_150711.jpg",
    "/20260304_150913.jpg",
    "/20260304_151034.jpg",
    "/20260304_151141.jpg",
    "/20260304_151401.jpg",
    "/20260304_151935.jpg",
    "/20260304_152202 (1).jpg",
    "/20260304_152202.jpg",
    "/20260306_131933.jpg",
    "/20260308_170324.jpg",
    "/20260308_170422.jpg",
    "/20260308_170446.jpg",
    "/20260308_170516.jpg",
    "/20260308_170544.jpg",
    "/20260308_170555.jpg",
    "/20260308_170623.jpg",
    "/20260308_171406.jpg",
    "/20260308_171445.jpg",
    "/20260319_130549.jpg",
    "/20260319_130601.jpg",
    "/20260319_130703.jpg",
    "/20260319_130719.jpg",
    "/20260319_130725.jpg",
    "/20260319_130801.jpg",
    "/20260319_130811 (1).jpg",
    "/20260319_130811.jpg",
    "/20260319_130821.jpg"
  ];

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
    <div className="bg-[#FAFAF5] min-h-screen">
      <PageHero
        title="Photo Gallery"
        description="Glimpses of joy, peace, and togetherness at Aanandam. Every picture tells a story of dignity restored."
        hideBreadcrumb={true}
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a231a] mb-4">Glimpses of Life at Aanandam</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-[#C62828]">Pictures (and Videos) Speak Louder Than Promises.</strong><br className="hidden sm:block" />
            This gallery showcases real moments from Aanandam Vridhashram, our free old age home in Karala Village near Rohini Sector-38, Pitampura, Delhi NCR — both as photos and embedded videos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaSun />, title: "Daily Life", desc: "Meals, yoga, garden time, conversations" },
            { icon: <FaGlassCheers />, title: "Festivals & Celebrations", desc: "Holi, Diwali, Janmashtami, birthdays" },
            { icon: <FaMicrophone />, title: "Oldies Got Talent", desc: "Performances and events" },
            { icon: <FaStethoscope />, title: "Health Camps", desc: "Visiting doctors, checkups, donor visits" },
            { icon: <FaBus />, title: "Outbound Activities", desc: "Vrindavan trip and other outings" },
            { icon: <FaHandshake />, title: "Distinguished Visitors", desc: "Amul, Axis Max Life, Yes Madam, HelpAge India, Dr. Kiran Bedi Ji" },
            { icon: <FaHandsHelping />, title: "Volunteers in Action", desc: "Students, doctors, corporate groups" },
            { icon: <FaStar />, title: "Before & After", desc: "Transformation stories (with consent)" }
          ].map((cat, idx) => (
            <motion.div 
              key={idx}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#FDD835] group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-[#C62828] mb-4 transform group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="text-xl font-bold text-[#0a231a] mb-2 group-hover:text-[#C62828] transition-colors">{cat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-sm cursor-pointer group"
              onClick={() => setSelectedImage(img)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 10) * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hindi SEO Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#FAF0E6] border-l-4 border-[#F57C00] p-6 sm:p-8 rounded-r-lg relative shadow-sm">
          <div className="absolute top-4 right-4 text-[#F57C00] text-sm font-semibold opacity-70">
            हिंदी
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#C62828] mb-4">
            फोटो और वीडियो गैलरी
          </h2>
          <p className="text-[#5D4037] text-lg mb-6 leading-relaxed">
            आनंदम् वृद्धाश्रम (कराला, रोहिणी सेक्टर-38 के पास, दिल्ली) की झलकियाँ। दैनिक जीवन, त्योहार, स्वास्थ्य शिविर, वृंदावन यात्रा और विशिष्ट अतिथियों की तस्वीरें और वीडियो यहाँ देखें।
          </p>
          <div className="flex flex-wrap items-center gap-2 text-[#5D4037] font-medium mb-6">
            <span className="italic">अपनी तस्वीरें साझा करें: Instagram @aanandamoldagehome</span>
            <span className="hidden sm:inline text-[#F57C00] font-bold mx-1">|</span>
            <span className="flex items-center gap-2 text-gray-700 font-semibold">
              <span className="text-xl">📞</span> +91-9310105630
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#F57C00] text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-[#E65100] transition-colors cursor-pointer shadow-sm">
              वृद्धाश्रम फोटो गैलरी
            </span>
            <span className="bg-[#F57C00] text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-[#E65100] transition-colors cursor-pointer shadow-sm">
              वृद्धाश्रम वीडियो
            </span>
            <span className="bg-[#F57C00] text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-[#E65100] transition-colors cursor-pointer shadow-sm">
              आनंदम् तस्वीरें
            </span>
          </div>
        </div>
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

export default PhotoGallery;
