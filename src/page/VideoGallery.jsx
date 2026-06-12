import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../Component/PageHero';

function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Example videos using YouTube IDs. The thumbnail is fetched automatically from YouTube.
  const videos = [
    { id: "dQw4w9WgXcQ", title: "A Day at Aanandam" },
    { id: "jNQXAC9IVRw", title: "Diwali Celebration 2023" },
    { id: "tgbNymZ7vqY", title: "Medical Camp Highlights" },
    { id: "y6120QOlsfU", title: "Corporate Volunteering" },
    { id: "9bZkp7q19f0", title: "Elders Singing Bhajan" },
    { id: "ZaX1gD54u28", title: "Birthday Celebration" },
    { id: "V-_O7nl0Ii0", title: "Yoga & Meditation" },
    { id: "M7lc1UVf-VE", title: "Founder's Message" },
    { id: "Wch3gJG2IG4", title: "New Year Event" },
  ];

  return (
    <div className="bg-[#FAFAF5] min-h-screen">
      <PageHero
        title="Video Gallery"
        description="Experience the laughter, tears of joy, and beautiful moments captured at Aanandam."
        hideBreadcrumb={true}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto">
        {/* Instructions Box for Admin */}
        <motion.div
          className="mb-12 bg-white p-6 sm:p-8 rounded-2xl shadow-md border-l-4 border-[#C62828]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-[#0a231a] font-black text-xl mb-3 flex items-center gap-2">
            <span>🎥</span> How to add your YouTube videos:
          </h3>
          <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed mb-2">
            Simply find the YouTube video you want to add. Look at the link (e.g. <code className="bg-gray-100 px-2 py-1 rounded text-[#C62828]">https://www.youtube.com/watch?v=<b>YOUR_ID_HERE</b></code>).
          </p>
          <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
            Copy the ID part and add it to the <code>videos</code> array in the code. Our system will automatically fetch the thumbnail and play the video in a beautiful popup!
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer group hover:shadow-2xl transition-all duration-300 bg-black aspect-video"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedVideo(video.id)}
            >
              {/* Thumbnail Image from YouTube */}
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                onError={(e) => { e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }}
                alt={video.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-50"
                loading="lazy"
              />

              {/* Title Overlay */}
              <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/80 to-transparent z-10 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg truncate drop-shadow-md">
                  {video.title}
                </h3>
              </div>

              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 bg-[#C62828] text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
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
