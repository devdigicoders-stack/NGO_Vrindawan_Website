import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

      <section className="py-20 px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto">
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
