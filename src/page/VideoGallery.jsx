import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../Component/PageHero';

function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const videos = [
    { id: "8ujLQ49fEAk", title: "Aanandam Video 1" },
    { id: "ZwE4pmZP5yk", title: "Aanandam Video 2" },
    { id: "80wF_whL_qU", title: "Aanandam Video 3" },
    { id: "TKMp61TjpcM", title: "Aanandam Video 4" },
    { id: "8toc_A3L6KQ", title: "Aanandam Video 5" },
    { id: "jAujEwM6zdY", title: "Aanandam Video 6" },
    { id: "EqQISZTMwTs", title: "Aanandam Video 7" },
    { id: "TnmDUy34Edw", title: "Aanandam Video 8" },
    { id: "P4sgXhKpm3k", title: "Aanandam Video 9" },
    { id: "gx983DviBYc", title: "Aanandam Video 10" },
    { id: "2TOSmaG5nLY", title: "Aanandam Video 11" },
    { id: "8ah5AMY_eTQ", title: "Aanandam Video 12" },
    { id: "tObjYc5D-Oc", title: "Aanandam Video 13" },
    { id: "PzZyB2-FFXg", title: "Aanandam Video 14" },
    { id: "qrb0EL_hv1U", title: "Aanandam Video 15" },
    { id: "OZcJAdvSGAQ", title: "Aanandam Video 16" },
    { id: "6GlPTVGS8fg", title: "Aanandam Video 17" }
  ];

  return (
    <div className="bg-[#FAFAF5] min-h-screen">
      <PageHero
        title="Video Gallery"
        description="Experience the laughter, tears of joy, and beautiful moments captured at Aanandam."
        hideBreadcrumb={true}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto">
        {/* Section Heading & Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a231a] mb-4">
            A Glimpse into Aanandam
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the everyday joy, celebrations, and heartwarming moments we share with our elders. Each video is a testament to the love, care, and family-like bond that makes our NGO a true home.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer group hover:shadow-2xl transition-all duration-300 bg-black aspect-[9/16]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedVideo(video.id)}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Video Player on Hover or Thumbnail Image */}
              {hoveredVideo === video.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&playsinline=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
                ></iframe>
              ) : (
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  onError={(e) => { e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }}
                  alt={video.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-50"
                  loading="lazy"
                />
              )}

              {/* Title Overlay */}
              <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/80 to-transparent z-10 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg truncate drop-shadow-md">
                  {video.title}
                </h3>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* Fullscreen Video Modal (Lightbox) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a231a]/95 backdrop-blur-md p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-[#C62828] rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-md transition-colors z-50"
              onClick={() => setSelectedVideo(null)}
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Video Player */}
            <motion.div
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicking video from closing modal
            >
              {/* Only render iframe if selectedVideo exists */}
              {selectedVideo && (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default VideoGallery;
