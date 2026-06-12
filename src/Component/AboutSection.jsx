import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
import aboutLarge from '../assets/about_large.png';
import aboutSmall from '../assets/about_small.png';
import aboutCard from '../assets/about_card.png';

export default function AboutSection() {
  return (
    <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-2 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side: Images & Graphics */}
          <div className="relative flex justify-center lg:justify-start pt-10 pl-4 sm:pl-10 lg:pl-0">
            {/* Main Image Container */}
            <div className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] lg:w-[550px] lg:h-[550px]">

              {/* Large Circle */}
              <div className="group absolute top-0 left-0 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-10 cursor-pointer">
                {/* Center to Sides Hover Animation */}
                <div className="absolute inset-0 bg-white/25 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center z-10 pointer-events-none"></div>
                <img src={aboutLarge} alt="Elders smiling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Small Circle */}
              <div className="group absolute bottom-0 right-[-10px] sm:right-[-30px] lg:right-[-40px] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-20 cursor-pointer">
                {/* Center to Sides Hover Animation */}
                <div className="absolute inset-0 bg-white/25 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center z-10 pointer-events-none"></div>
                <img src={aboutSmall} alt="Volunteer helping elder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Floating Experience Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-6 left-[-10px] sm:bottom-16 sm:left-[-40px] lg:left-[-50px] bg-[#FDD835] px-6 py-5 sm:px-8 sm:py-6 rounded-lg shadow-2xl z-30 flex flex-col items-center text-center border-b-4 border-yellow-600"
              >
                <h3 className="font-serif font-black text-[#0a231a] text-3xl sm:text-4xl">25+</h3>
                <p className="font-sans font-bold text-[#0a231a] text-[10px] sm:text-[11px] uppercase tracking-widest mt-1">Years Of</p>
                <p className="font-sans font-bold text-[#0a231a] text-[10px] sm:text-[11px] uppercase tracking-widest">Experience</p>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FDD835]"></span>
              <span className="text-[13px] font-bold text-gray-700 uppercase tracking-wide">About Our NGO</span>
            </div>

            {/* Heading & Paragraph */}
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] leading-[1.25] max-w-[90%]">
              Every Elder Deserves a Family. Aanandam Is That Family.
            </h2>
            <p className="text-gray-600 text-[16px] sm:text-[17px] leading-[1.7] font-medium">
              In a country of 1.4 billion people, over 2 crore senior citizens live alone. Thousands are abandoned. Thousands more are homeless. Many have spent their lives raising families, building homes, and holding their world together — only to find themselves forgotten when they needed love the most.
            </p>

            {/* Info Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-8 shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-gray-100">
              <div className="flex-1 space-y-4">
                <div className="w-12 h-12 bg-[#FDD835] rounded-full flex items-center justify-center text-[#0a231a]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-xl text-[#0a231a]">Empowering Lives</h4>
                <div className="flex items-start gap-3 border-t border-gray-100 pt-4">
                  <svg className="w-5 h-5 text-[#FDD835] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                    We work closely with the community to identify real needs and provide immediate care.
                  </p>
                </div>
              </div>
              <div className="group relative w-full sm:w-56 h-48 sm:h-auto rounded-xl overflow-hidden shadow-sm flex-shrink-0 cursor-pointer">
                {/* Center to Sides Hover Animation */}
                <div className="absolute inset-0 bg-white/25 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center z-10 pointer-events-none"></div>
                <img src={aboutCard} alt="Happy elders" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-8 pt-6">
              <Link
                to="/about-aanandam"
                className="inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-bold text-[#0a231a] bg-[#FDD835] hover:bg-[#0a231a] hover:text-[#FDD835] transition-colors duration-300 rounded shadow-lg"
              >
                More About Us
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <button className="inline-flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#FDD835]/20 rounded-full flex items-center justify-center text-[#FDD835] group-hover:bg-[#FDD835] group-hover:text-[#0a231a] transition-all duration-300 shadow-sm">
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-bold text-[#0a231a] text-[15px] group-hover:underline decoration-2 underline-offset-4">Watch Our Video</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
