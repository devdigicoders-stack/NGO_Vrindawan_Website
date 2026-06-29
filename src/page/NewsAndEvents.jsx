import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import PageHero from '../Component/PageHero';

function NewsAndEvents() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      image: "/fwd47photos/13.jpg",
      date: "October 24, 2023",
      category: "Event",
      title: "Grand Diwali Celebration at Aanandam",
      snippet: "Our elders celebrated the festival of lights with incredible joy, music, and a special feast organized by our wonderful volunteers.",
      content: "Diwali is always a special time at Aanandam. This year, over 50 volunteers joined our 30 residents to light diyas, make beautiful rangolis, and share a festive meal. The evening concluded with an unforgettable bhajan session where everyone sang and danced together. Thank you to everyone who Sponsored sweets and gifts for our elders. Your generosity brought light to their lives."
    },
    {
      id: 2,
      image: "/fwd47photos/14.jpg",
      date: "September 10, 2023",
      category: "News",
      title: "Free Mega Health Camp Organized",
      snippet: "A successful free medical check-up camp was held, providing essential healthcare services to over 100 senior citizens from the surrounding villages.",
      content: "In collaboration with a team of 15 specialist doctors from top hospitals in Delhi, Humanify Foundation organized a Mega Health Camp at Aanandam. Services included eye check-ups, dental care, general physician consultations, and free medicine distribution. Over 100 elderly individuals from Karala and nearby villages benefited from this initiative. We plan to make this a quarterly event."
    },
    {
      id: 3,
      image: "/fwd47photos/15.jpg",
      date: "August 15, 2023",
      category: "Event",
      title: "Independence Day Flag Hoisting",
      snippet: "Patriotism filled the air as our elders proudly hoisted the national flag, sharing inspiring stories from their youth.",
      content: "The 77th Independence Day was celebrated with great fervor at Aanandam. The national flag was hoisted by our oldest resident, 92-year-old Ramkrishna Ji. The morning was filled with patriotic songs, followed by a story-telling session where our elders shared their childhood memories of a newly independent India. It was a beautiful reminder of the history they have witnessed."
    },
    {
      id: 4,
      image: "/fwd47photos/16.jpg",
      date: "July 2, 2023",
      category: "News",
      title: "New Solar Panels Installed",
      snippet: "Thanks to a generous corporate CSR partner, Aanandam is now running on 80% renewable solar energy.",
      content: "We are thrilled to announce that Aanandam Vridhashram has taken a major step towards sustainability. With the support of our corporate CSR partners, a 10kW solar power system has been installed on our roof. This not only reduces our carbon footprint but also significantly cuts down our electricity bills, allowing us to redirect those funds toward better healthcare and nutrition for our elders."
    },
    {
      id: 5,
      image: "/fwd47photos/17.jpg",
      date: "June 21, 2023",
      category: "Event",
      title: "International Yoga Day Session",
      snippet: "A special restorative yoga and meditation session was held to promote physical and mental well-being among our residents.",
      content: "On International Yoga Day, expert yoga instructors volunteered their time to conduct a specialized session tailored for senior citizens. The focus was on gentle stretching, deep breathing exercises (Pranayama), and meditation. Our elders actively participated and learned techniques to manage joint pain and improve their sleep quality. Yoga is now a regular part of our morning routine!"
    },
    {
      id: 6,
      image: "/fwd47photos/18.jpg",
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

      {/* Radio & TV Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
          <h3 className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">
            RADIO & TV
          </h3>
          <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border-t-4 border-[#2E7D32] shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <h4 className="text-lg sm:text-xl font-bold text-[#0a231a] mb-3 flex items-center gap-2">
              <span className="text-2xl">📺</span> Doordarshan
            </h4>
            <p className="text-gray-600 text-sm sm:text-[15px] font-medium leading-relaxed flex-grow">
              DD News Conclave — "Niraj Gera reveals shocking facts about Periods".
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border-t-4 border-[#F59E0B] shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <h4 className="text-lg sm:text-xl font-bold text-[#0a231a] mb-3 flex items-center gap-2">
              <span className="text-2xl">📻</span> Radio City
            </h4>
            <p className="text-gray-600 text-sm sm:text-[15px] font-medium leading-relaxed flex-grow">
              Interview on PM Narendra Modi's "Janta Curfew" appeal.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border-t-4 border-[#2E7D32] shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <h4 className="text-lg sm:text-xl font-bold text-[#0a231a] mb-3 flex items-center gap-2">
              <span className="text-2xl">📻</span> AIR FM Rainbow
            </h4>
            <p className="text-gray-600 text-sm sm:text-[15px] font-medium leading-relaxed flex-grow">
              Interview on menstrual health awareness.
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border-t-4 border-[#F59E0B] shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <h4 className="text-lg sm:text-xl font-bold text-[#0a231a] mb-3 flex items-center gap-2">
              <span className="text-2xl">📻</span> Radio Noida
            </h4>
            <p className="text-gray-600 text-sm sm:text-[15px] font-medium leading-relaxed flex-grow">
              Interview on the "Sacred Stains" photo series.
            </p>
          </div>
        </div>
      </section>



      {/* Media Coverage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 mt-20 mb-16 space-y-12">

        {/* Header */}
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
            <h3 className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              IN THE PRESS
            </h3>
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a231a]">
            Aanandam Vridhashram & Humanify Foundation in the Media.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium max-w-5xl mx-auto">
            Aanandam Vridhashram, located in Karala Village near Rohini Sector-38, Pitampura, Delhi NCR, is part of the Humanify Foundation ecosystem — an organisation whose founder, Niraj Gera, and whose initiatives have received significant national and international media attention over the years.
          </p>
        </div>

        {/* International Media */}
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
            <h3 className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              INTERNATIONAL MEDIA
            </h3>
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["BBC UK & USA", "Daily Mail UK", "Metro News UK", "Yahoo News Australia", "LIFO Greece", "20 Minutene Switzerland"].map((media, idx) => (
              <span key={idx} className="bg-[#2E7D32] text-white px-4 py-2 rounded-md font-bold text-sm shadow-sm">
                {media}
              </span>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed font-medium max-w-4xl mx-auto">
            Coverage of Niraj Gera's social documentary photo series — including BBC's feature on "the Indian couple who swear by blind love" and Daily Mail's "Indian acid attack survivors show their scarred skin in a powerful photoshoot".
          </p>
        </div>

        {/* National Media */}
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
            <h3 className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              NATIONAL MEDIA
            </h3>
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Times of India", "Hindustan Times", "India Today", "New Indian Express", "The Statesman", "The Tribune", "NDTV", "Asian Age", "India Times"].map((media, idx) => (
              <span key={idx} className="bg-[#0f172a] text-white px-4 py-2 rounded-md font-bold text-sm shadow-sm">
                {media}
              </span>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed font-medium max-w-4xl mx-auto">
            Coverage of Niraj Gera's menstrual health advocacy, acid attack survivor photo series, and humanitarian work.
          </p>
        </div>

        {/* Awards & Recognition */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <h3 className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              AWARDS & RECOGNITION COVERED IN MEDIA
            </h3>
            <div className="h-[1px] bg-gray-300 w-full"></div>
          </div>
          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="flex gap-3">
              <span className="text-[#2E7D32] font-bold">✓</span>
              <span><strong className="text-[#0a231a]">National Icon Award 2024</strong> — Humanitarian of the Year</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#2E7D32] font-bold">✓</span>
              <span><strong className="text-[#0a231a]">MHM Champion Award 2024</strong> — by Padmashri Damodaran Ji</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#2E7D32] font-bold">✓</span>
              <span><strong className="text-[#0a231a]">World Record</strong> — Happiness Express (400+ sessions, 1,30,000+ attendees, 23+ states)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#2E7D32] font-bold">✓</span>
              <span><strong className="text-[#0a231a]">Rex Karamveer Award Nominee 2024</strong> — Global Fellowship (iCONGO & UN)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#2E7D32] font-bold">✓</span>
              <span><strong className="text-[#0a231a]">Times Now "Amazing Indians" Award Nominee</strong></span>
            </li>
          </ul>
        </div>

        {/* Aanandam-Specific Coverage */}
        <div className="bg-[#F59E0B] rounded-xl p-6 sm:p-8 text-white shadow-md">
          <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 flex items-center gap-2">
            <span>📣</span> Aanandam-Specific Coverage (Growing)
          </h3>
          <p className="text-white/95 leading-relaxed font-medium">
            As Aanandam Vridhashram grows, this section will feature dedicated press coverage of the old age home itself — including visits by Amul, Axis Max Life, Yes Madam, HelpAge India, and Dr. Kiran Bedi Ji, our Vrindavan outbound trip, and Oldies Got Talent events. We encourage local Delhi NCR media (covering Rohini, Pitampura, Karala, Kanjhawala) to visit and feature our work.
          </p>
        </div>

        {/* Hindi SEO Block */}
        <div className="bg-[#FAF8F5] border-l-4 border-[#F59E0B] p-6 sm:p-8 rounded-r-xl relative shadow-sm mt-8">
          <span className="absolute top-4 right-4 text-[#F59E0B] font-medium text-sm">हिंदी</span>

          <h2 className="text-xl sm:text-2xl font-bold text-[#D84315] mb-4">
            समाचार और मीडिया कवरेज
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed italic text-[15px] sm:text-base">
            <p>
              आनंदम् वृद्धाश्रम और ह्यूमनिफाई फाउंडेशन को BBC, Daily Mail, Times of India, Hindustan Times, NDTV और कई राष्ट्रीय-अंतर्राष्ट्रीय मीडिया में स्थान मिला है।
            </p>
            <p>
              संस्थापक नीरज गेरा को 'Humanitarian of the Year 2024', विश्व रिकॉर्ड और कई अन्य सम्मान मिल चुके हैं। मीडिया संपर्क हेतु: info@humanify.in | 📞 +91-9310105630
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-[#F59E0B] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-sm cursor-pointer">
              वृद्धाश्रम समाचार
            </span>
            <span className="bg-[#F59E0B] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-sm cursor-pointer">
              नीरज गेरा मीडिया कवरेज
            </span>
            <span className="bg-[#F59E0B] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-sm cursor-pointer">
              ह्यूमनिफाई फाउंडेशन समाचार
            </span>
          </div>
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
                          <Calendar className="w-4 h-4" /> {selectedArticle.date}
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
