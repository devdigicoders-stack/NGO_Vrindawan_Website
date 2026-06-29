import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const EldersGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/fwd47photos/16.jpg",
    "/fwd47photos/15.jpg",
    "/fwd47photos/17.jpg",
    "/fwd47photos/18.jpg",
    "/fwd47photos/19.jpg",
    "/fwd47photos/26.jpg"
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-[#0a231a] mb-4">
          Moments of Joy
        </h2>
        <p className="text-gray-600 font-medium max-w-3xl mx-auto text-lg leading-relaxed">
          Witness the peace, love, and comfort that our elders experience at Aanandam. Every smile tells a story of dignity restored.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
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
              alt={`Elder ${index + 1}`} 
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
              alt="Elder Full View" 
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

export default EldersGallery;
