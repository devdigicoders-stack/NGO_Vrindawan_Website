import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CelebrationGallery = ({ limit }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/20260308_170324.jpg",
    "/20260308_170422.jpg",
    "/20260308_170446.jpg",
    "/20260308_170516.jpg",
    "/20260308_170544.jpg",
    "/20260308_170555.jpg",
    "/20260304_145835.jpg",
    "/20260304_150711.jpg",
    "/20260304_151401.jpg",
    "/20260304_150913.jpg",
    "/20260319_130725.jpg",
    "/20260319_130801.jpg"
  ];

  const displayImages = limit ? images.slice(0, limit) : images;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-[#0a231a] mb-4">
          Glimpses of Celebrations
        </h2>
        <p className="text-gray-600 font-medium max-w-3xl mx-auto text-lg leading-relaxed">
          Take a look at the smiles and joy shared during celebrations at Aanandam. 
          From the vibrant colors of Holi to the sparkling lights of Diwali, every festival is celebrated with immense love, turning the ashram into a beautiful home filled with laughter, togetherness, and countless blessings.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayImages.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 aspect-[4/3] group relative cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onClick={() => setSelectedImage(src)}
          >
            <img 
              src={src} 
              alt={`Celebration ${index + 1}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                View Image
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors bg-black/50 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              src={selectedImage} 
              alt="Celebration Full View" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CelebrationGallery;
