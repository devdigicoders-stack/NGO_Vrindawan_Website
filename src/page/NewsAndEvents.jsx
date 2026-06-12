import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../Component/PageHero';

function NewsAndEvents() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
      date: "October 24, 2023",
      category: "Event",
      title: "Grand Diwali Celebration at Aanandam",
      snippet: "Our elders celebrated the festival of lights with incredible joy, music, and a special feast organized by our wonderful volunteers.",
      content: "Diwali is always a special time at Aanandam. This year, over 50 volunteers joined our 30 residents to light diyas, make beautiful rangolis, and share a festive meal. The evening concluded with an unforgettable bhajan session where everyone sang and danced together. Thank you to everyone who sponsored sweets and gifts for our elders. Your generosity brought light to their lives."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1576765974102-b756026ecee3?auto=format&fit=crop&q=80",
      date: "September 10, 2023",
      category: "News",
      title: "Free Mega Health Camp Organized",
      snippet: "A successful free medical check-up camp was held, providing essential healthcare services to over 100 senior citizens from the surrounding villages.",
      content: "In collaboration with a team of 15 specialist doctors from top hospitals in Delhi, Humanify Foundation organized a Mega Health Camp at Aanandam. Services included eye check-ups, dental care, general physician consultations, and free medicine distribution. Over 100 elderly individuals from Karala and nearby villages benefited from this initiative. We plan to make this a quarterly event."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
      date: "August 15, 2023",
      category: "Event",
      title: "Independence Day Flag Hoisting",
      snippet: "Patriotism filled the air as our elders proudly hoisted the national flag, sharing inspiring stories from their youth.",
      content: "The 77th Independence Day was celebrated with great fervor at Aanandam. The national flag was hoisted by our oldest resident, 92-year-old Ramkrishna Ji. The morning was filled with patriotic songs, followed by a story-telling session where our elders shared their childhood memories of a newly independent India. It was a beautiful reminder of the history they have witnessed."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80",
      date: "July 2, 2023",
      category: "News",
      title: "New Solar Panels Installed",
      snippet: "Thanks to a generous corporate CSR partner, Aanandam is now running on 80% renewable solar energy.",
      content: "We are thrilled to announce that Aanandam Vridhashram has taken a major step towards sustainability. With the support of our corporate CSR partners, a 10kW solar power system has been installed on our roof. This not only reduces our carbon footprint but also significantly cuts down our electricity bills, allowing us to redirect those funds toward better healthcare and nutrition for our elders."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1544027993-37db48d8e0e6?auto=format&fit=crop&q=80",
      date: "June 21, 2023",
      category: "Event",
      title: "International Yoga Day Session",
      snippet: "A special restorative yoga and meditation session was held to promote physical and mental well-being among our residents.",
      content: "On International Yoga Day, expert yoga instructors volunteered their time to conduct a specialized session tailored for senior citizens. The focus was on gentle stretching, deep breathing exercises (Pranayama), and meditation. Our elders actively participated and learned techniques to manage joint pain and improve their sleep quality. Yoga is now a regular part of our morning routine!"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80",
      date: "May 14, 2023",
      category: "News",
      title: "Mother's Day Celebration",
      snippet: "A heartwarming day where volunteers spent time pampering the 'mothers' of Aanandam who have been separated from their families.",
      content: "Mother's Day is always an emotional time. To ensure none of our female residents felt lonely, over 40 youth volunteers visited Aanandam. They brought flowers, handmade cards, and spent the entire day chatting, combing hair, and serving a special lunch. Tears of joy were shed, and many volunteers promised to visit their 'new mothers' regularly."
    }
  ];

  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="News & Events"
        description="Stay updated with the latest happenings, celebrations, and heartwarming stories from Aanandam."
        hideBreadcrumb={true}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 mt-16 space-y-12">

        {/* Grid Layout for Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedArticle(article)}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                  {article.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-[#2E7D32] text-sm font-semibold mb-2 flex items-center gap-2">
                  <span>📅</span> {article.date}
                </p>
                <h3 className="text-xl font-bold text-[#0a231a] mb-3 group-hover:text-[#C62828] transition-colors duration-300 line-clamp-2 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {article.snippet}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-[#2E7D32] font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Article Read Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a231a]/80 backdrop-blur-sm p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            {/* Modal Container */}
            <motion.div
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Prevent click from closing
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-[#C62828] text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-colors"
                onClick={() => setSelectedArticle(null)}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto w-full h-full custom-scrollbar">
                {/* Header Image */}
                <div className="w-full h-64 sm:h-80 relative">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6 sm:p-10">
                    <div className="text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                          {selectedArticle.category}
                        </span>
                        <span className="text-sm font-medium opacity-90 text-white flex items-center gap-1 drop-shadow-md">
                          📅 {selectedArticle.date}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-black font-serif leading-tight drop-shadow-md">
                        {selectedArticle.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6 sm:p-10 bg-white">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line font-medium">
                    {selectedArticle.content}
                  </p>

                  <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center">
                    <p className="text-sm text-gray-500 font-medium">Published by Humanify Foundation</p>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="text-[#C62828] font-bold hover:underline"
                    >
                      Close Article
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2E7D32; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1B5E20; 
        }
      `}</style>
    </div>
  );
}

export default NewsAndEvents;
