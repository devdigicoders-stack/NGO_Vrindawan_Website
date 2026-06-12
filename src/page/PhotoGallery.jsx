import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../Component/PageHero';

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // ==========================================
  // HOW TO ADD GOOGLE DRIVE IMAGES
  // ==========================================
  // 1. Upload images to Google Drive.
  // 2. Right click -> Share -> Change general access to "Anyone with the link".
  // 3. The link looks like: https://drive.google.com/file/d/1A2B3C.../view
  // 4. Copy ONLY the ID (e.g. 1A2B3C...) and add it below as 'url'.
  // Our code automatically converts the ID into a direct image link!
  const galleryImages = [
    { id: 1, url: "/image.png", title: "Smile of Hope" },
    { id: 2, url: "/image.png", title: "Evening Prayers" },
    { id: 3, url: "/image.png", title: "Health Camp" },
    { id: 4, url: "/image.png", title: "Festival Celebration" },
    { id: 5, url: "/image.png", title: "Morning Yoga" },
    { id: 6, url: "/image.png", title: "Community Lunch" },
    { id: 7, url: "/image.png", title: "Elders Bonding" },
    { id: 8, url: "/image.png", title: "Peaceful Environment" },
  ];

  // Helper function to handle both regular URLs, Google Drive IDs, and local public paths
  const getImageUrl = (source) => {
    // If it's a full URL or a local path starting with '/', return it directly
    if (source.startsWith("http") || source.startsWith("/")) {
      return source;
    }
    // Otherwise, treat it as a Google Drive ID
    return `https://drive.google.com/uc?export=view&id=${source}`;
  };

  return (
    <div className="bg-[#FAFAF5] min-h-screen">
      <PageHero
        title="Photo Gallery"
        description="Glimpses of joy, peace, and togetherness at Aanandam. Every picture tells a story of dignity restored."
        hideBreadcrumb={true}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto">



        {/* Gallery Grid - Masonry style (Columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedImage(getImageUrl(img.url))}
            >
              <img
                src={getImageUrl(img.url)}
                alt={img.title}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a231a]/90 via-[#0a231a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-bold p-6 text-lg sm:text-xl w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 font-serif">
                  {img.title}
                </p>
              </div>

              {/* View Icon on Hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            {/* Close Button */}
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

            {/* Expanded Image */}
            <motion.img
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PhotoGallery;
