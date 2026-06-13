import React from 'react';
import PageHero from '../Component/PageHero';
import { motion } from 'framer-motion';
import { Handshake, Mic, Camera, Heart } from 'lucide-react';

function AboutNirajGera() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const checkIcon = (
    <svg className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#FAFAF5]">
      <PageHero
        title="About Niraj Gera"
        description="The visionary behind Aanandam Vridhashram, a World Record Holder, and NITI Aayog Mentor."
        hideBreadcrumb={true}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* Top Label */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
            <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap text-center">
              Founder Chairman
            </span>
            <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={itemVariants} className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#0a231a] leading-tight mb-8 text-center">
            Niraj Gera — <span className="text-[#2E7D32]">Decoding Life. Transforming Society.</span>
          </motion.h2>

          {/* Paragraphs */}
          <motion.div variants={itemVariants} className="space-y-6 text-[16px] sm:text-[17px] text-gray-700 leading-[1.8] font-medium mb-20">
            <p>
              <strong className="text-[#0a231a]">Niraj Gera</strong> is not just the founder of Aanandam Vridhashram. He is one of India's most remarkable multi-dimensional social change-makers — a man whose work has touched hundreds of thousands of lives across India and earned recognition from BBC UK, Daily Mail UK, Times of India, NITI Aayog, and stages from TEDx to the floors of Parliament.
            </p>
            <p>
              Driven by his Guru, the universally revered humanitarian leader <strong className="text-[#0a231a]">Gurudev Sri Sri Ravi Shankar Ji</strong>, Niraj has built a life of purpose — one cause, one session, one photograph, one smile at a time. His guiding philosophy: <em className="text-[#2E7D32] font-semibold">"The power to transform the world lies not in grand gestures, but in the countless acts of kindness that ripple through our communities."</em>
            </p>
          </motion.div>

          {/* Credentials Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
            <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap">
              Key Credentials & Roles
            </span>
            <div className="flex-grow h-[1px] bg-[#E58F00]/30"></div>
          </motion.div>

          {/* Two Columns: Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

            {/* Column 1 */}
            <motion.div variants={itemVariants}>
              <ul className="space-y-5 text-[15px] sm:text-[16px] text-gray-700">
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">Chairman</strong> — Humanify Foundation (Non-profit NGO)</span>
                </li>
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">World Record Holder</strong> — Highest number of women's health sessions by an individual (Official World Record Certificate)</span>
                </li>
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">Mentor of Change</strong> — NITI Aayog, Government of India</span>
                </li>
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">TEDx Speaker</strong> — Multiple TEDx stages (TEDxGGSIPU, TEDxFIIB, and more)</span>
                </li>
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">National Icon Award 2024</strong> — Humanitarian of the Year</span>
                </li>
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">MHM Champion Award 2024</strong> — by Padmashri Damodaran Ji</span>
                </li>
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">Rex Karamveer Award Nominee 2024</strong> — Global Fellowship (iCONGO & UN)</span>
                </li>
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">Nominated</strong> — Times Now Amazing Indians Award</span>
                </li>
              </ul>
            </motion.div>

            {/* Column 2 */}
            <motion.div variants={itemVariants}>
              <ul className="space-y-5 text-[15px] sm:text-[16px] text-gray-700">
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">Art of Living Senior Faculty</strong> — Meditation, Yoga & Happiness Coach under Sri Sri Ravi Shankar Ji</span>
                </li>
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">International Award-Winning Photographer</strong> — Gold Medal, Royal Photographic Society UK (2018); Gold Medal, IKEI Spain (2019); Singapore International Photography Award (2017); Top 20 Photographers in the World (China)</span>
                </li>
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">600+ Motivational Sessions</strong> — IIT Delhi, Amity University, University of Delhi, AIESEC, LBSNAA, TEDx stages</span>
                </li>
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">Happiness Express</strong> — 400+ sessions, 23+ states, 1,30,000+ attendees (Official World Record)</span>
                </li>
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">Featured in:</strong> BBC UK, Daily Mail UK, Times of India, Hindustan Times, India Today, New Indian Express, NDTV</span>
                </li>
                <li className="flex items-start gap-3">
                  {checkIcon}
                  <span><strong className="text-[#0a231a]">Wikipedia page:</strong> <a href="https://en.wikipedia.org/wiki/Niraj_Gera" target="_blank" rel="noopener noreferrer" className="text-[#1976D2] hover:underline">en.wikipedia.org/wiki/Niraj_Gera</a></span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Work Dimensions Section */}
          <motion.div variants={itemVariants} className="mt-24">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap text-center">
                His Work — 4 Dimensions
              </span>
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <motion.div variants={itemVariants} className="relative overflow-hidden group bg-white rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#2E7D32] p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#2E7D32] transition-all duration-500 ease-out group-hover:h-full z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                    <Handshake size={36} className="text-[#0a231a]" />
                  </div>
                  <h3 className="font-serif font-bold text-[20px] text-[#0a231a] group-hover:text-[#FDD835] transition-colors duration-300 mb-4 leading-snug">Social Activist</h3>
                  <p className="text-gray-600 group-hover:text-white/95 transition-colors duration-300 text-[15px] leading-relaxed flex-grow">
                    Women empowerment, menstrual health destigmatization, anti-acid attack movement, elderly care, underprivileged children upliftment. Founder of Humanify Foundation.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={itemVariants} className="relative overflow-hidden group bg-white rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#E58F00] p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#2E7D32] transition-all duration-500 ease-out group-hover:h-full z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                    <Mic size={36} className="text-[#0a231a]" />
                  </div>
                  <h3 className="font-serif font-bold text-[20px] text-[#0a231a] group-hover:text-[#FDD835] transition-colors duration-300 mb-4 leading-snug">TEDx / Motivational Speaker</h3>
                  <p className="text-gray-600 group-hover:text-white/95 transition-colors duration-300 text-[15px] leading-relaxed flex-grow">
                    600+ sessions at IITs, AIESEC, universities, schools, corporates — women empowerment, stress management, spirituality, happiness.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={itemVariants} className="relative overflow-hidden group bg-white rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#2E7D32] p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#2E7D32] transition-all duration-500 ease-out group-hover:h-full z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                    <Camera size={36} className="text-[#0a231a]" />
                  </div>
                  <h3 className="font-serif font-bold text-[20px] text-[#0a231a] group-hover:text-[#FDD835] transition-colors duration-300 mb-4 leading-snug">International Photographer</h3>
                  <p className="text-gray-600 group-hover:text-white/95 transition-colors duration-300 text-[15px] leading-relaxed flex-grow">
                    Award-winning social documentary photo series: Sacred Transformations (acid attack survivors), Sacred Stains (menstruation), Sacred Love (blind couple). Covered by BBC, Daily Mail, India Times.
                  </p>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div variants={itemVariants} className="relative overflow-hidden group bg-white rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#E58F00] p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#2E7D32] transition-all duration-500 ease-out group-hover:h-full z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                    <Heart size={36} className="text-[#0a231a]" />
                  </div>
                  <h3 className="font-serif font-bold text-[20px] text-[#0a231a] group-hover:text-[#FDD835] transition-colors duration-300 mb-4 leading-snug">Art of Living Faculty</h3>
                  <p className="text-gray-600 group-hover:text-white/95 transition-colors duration-300 text-[15px] leading-relaxed flex-grow">
                    Senior Faculty at Art of Living Organisation (180+ countries). Life & Relationship Coach. 1,30,000+ mental health sessions conducted.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="bg-[#FFFDF5] border-l-4 border-l-[#E58F00] p-6 sm:p-8 rounded-r-lg shadow-sm">
              <h3 className="font-serif italic text-xl sm:text-2xl text-[#2E7D32] mb-3">
                "Live your life before you die." — Niraj Gera
              </h3>
              <p className="text-gray-500 text-[14px] sm:text-[15px]">
                World Record Holder | NITI Aayog Mentor of Change | Humanitarian of the Year 2024
              </p>
            </div>
          </motion.div>

          {/* Hindi SEO Section */}
          <motion.div variants={itemVariants} className="mt-12 bg-[#FFFDF5] border-l-4 border-l-[#f97316] p-6 sm:p-8 rounded-r-lg shadow-sm relative">
            <span className="absolute top-4 right-4 text-[#fbd38d] text-xs font-semibold">हिंदी</span>
            
            <h3 className="font-bold text-xl sm:text-2xl text-[#d97706] mb-4 italic">
              नीरज गेरा — एक परिचय
            </h3>
            
            <div className="space-y-6 text-gray-700 text-[15.5px] leading-[1.8] italic mb-8">
              <p>
                <strong className="text-[#d97706] font-semibold">नीरज गेरा</strong> — विश्व रिकॉर्ड धारक, NITI आयोग के 'Mentor of Change', TEDx वक्ता, अंतर्राष्ट्रीय पुरस्कार विजेता फोटोग्राफर, आर्ट ऑफ लिविंग सीनियर फैकल्टी और हुमानिफाई फाउंडेशन के संस्थापक अध्यक्ष।
              </p>
              <p>
                उन्होंने आनंदम् वृद्धाश्रम (करला, रोहिणी सेक्टर-38 के पास, दिल्ली) की स्थापना <strong className="text-[#d97706] font-semibold">गुरुदेव श्री श्री रवि शंकर जी की प्रेरणा से की</strong> — ताकि हर परित्यक्त बुजुर्ग को एक सम्मानजनक जीवन मिल सके।
              </p>
              <p>
                <strong className="text-[#d97706] font-semibold">पुरस्कार:</strong> National Icon Award 2024 | MHM Champion Award | Rex Karamveer Award Nominee | विश्व रिकॉर्ड (Happiness Express)
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-[12px] font-medium">
              <span className="bg-[#f97316] text-white px-3.5 py-1.5 rounded-full shadow-sm">नीरज गेरा</span>
              <span className="bg-[#f97316] text-white px-3.5 py-1.5 rounded-full shadow-sm">विश्व रिकॉर्ड</span>
              <span className="bg-[#f97316] text-white px-3.5 py-1.5 rounded-full shadow-sm">NITI आयोग</span>
              <span className="bg-[#f97316] text-white px-3.5 py-1.5 rounded-full shadow-sm">TEDx वक्ता</span>
              <span className="bg-[#f97316] text-white px-3.5 py-1.5 rounded-full shadow-sm">हुमानिफाई फाउंडेशन</span>
            </div>
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
}

export default AboutNirajGera;
