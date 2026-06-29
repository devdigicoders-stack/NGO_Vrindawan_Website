import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images removed to use public paths

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
                {/* Center to Sides Hover Animation with Fade-out */}
                <div className="absolute inset-0 bg-white/30 scale-x-0 opacity-100 group-hover:scale-x-100 group-hover:opacity-0 transition-all duration-1000 ease-out origin-center z-10 pointer-events-none"></div>
                <img src="/fwd47photos/30.jpg" alt="Elders smiling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Small Circle */}
              <div className="group absolute bottom-0 right-[-10px] sm:right-[-30px] lg:right-[-40px] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-20 cursor-pointer">
                {/* Center to Sides Hover Animation with Fade-out */}
                <div className="absolute inset-0 bg-white/30 scale-x-0 opacity-100 group-hover:scale-x-100 group-hover:opacity-0 transition-all duration-1000 ease-out origin-center z-10 pointer-events-none"></div>
                <img src="/fwd47photos/31.jpg" alt="Volunteer helping elder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
          <div className="space-y-6">
            {/* Tag */}
            <div className="text-[13px] font-bold text-[#E5A937] uppercase tracking-[0.15em]">
              How Aanandam Began
            </div>

            {/* Heading & Paragraphs */}
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[32px] text-[#1B5E20] leading-[1.3]">
              It Started With a Stage. And a Dream.
            </h2>
            
            <div className="text-gray-700 text-[15px] sm:text-[16px] leading-[1.8] font-medium space-y-6 pt-2">
              <p>
                For years, our founder Niraj Gera visited old age homes across Delhi — not as an official, but as a friend. He would sit with elders, listen to their stories, and once a year, give them something rare: a stage. An event called <em className="text-gray-900 font-serif">Oldies Got Talent</em> — where residents sang, danced, recited poetry, walked the ramp — and received something they had forgotten they deserved: <strong className="text-gray-900">applause.</strong>
              </p>
              <p>
                In the weeks of preparation, something changed. Elders who had grown quiet began to sing again. Those who shuffled slowly began to stand straight. That three-month journey of rehearsals, laughter and anticipation was medicine no prescription could provide.
              </p>
              <p>
                <em className="text-gray-900 font-serif">That</em> is when Aanandam was born — not as a facility, but as a feeling. A home where that joy is not annual, but daily.
              </p>
            </div>

            {/* Buttons */}
            <div className="pt-6">
              <Link to="/about-aanandam" className="inline-flex items-center justify-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold py-3.5 px-7 rounded shadow-md transition-colors text-[16px]">
                Read the Full Story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
