import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaHeart } from 'react-icons/fa';
import { MdCheck } from 'react-icons/md';
import PageHero from '../Component/PageHero';

export default function WaysToSupport() {
  const [activeTab, setActiveTab] = useState('volunteer');

  const tabs = [
    { id: 'volunteer', icon: '🤝', label: 'Volunteer / Intern' },
    { id: 'donate', icon: '💛', label: 'Donate' },
    { id: 'perform', icon: '🎵', label: 'Perform / Bhajan / Jam' },
    { id: 'spend_time', icon: '☕', label: 'Spend Time' },
    { id: 'sponsor_food', icon: '🍛', label: 'Sponsor Food' },
    { id: 'medical', icon: '🩺', label: 'Medical Support' },
    { id: 'csr', icon: '🏢', label: 'CSR Partnership' },
    { id: 'clothes', icon: '📦', label: 'In-Kind / Goods' },
    { id: 'campus', icon: '🌳', label: 'Land / Dream Campus' },
  ];

  const tabDetails = {
    volunteer: {
      title: "🤝 Volunteer or Intern With Us",
      desc: "Give a few hours or a few months \u2014 onsite or online. Students, professionals, photographers, doctors, content creators \u2014 there's a role for almost anyone willing to show up.",
      bullets: [
        "Elder interaction, companionship, activities",
        "Social media, photography, videography, content writing",
        "Psychology support, medical support, event management",
        "Internship certificates available for students"
      ],
      primaryBtnText: "WhatsApp to Apply",
      primaryBtnLink: "https://wa.me/91931085630",
      primaryBtnIcon: <FaWhatsapp className="text-xl" />
    },
    donate: {
      title: "💛 Donate \u2014 One-Time or Monthly",
      desc: "From \u20B9500 to a full elder sponsorship \u2014 every rupee reaches our residents directly. 80G tax exemption available.",
      bullets: [
        "One-time donation \u2014 any amount",
        "Sponsor a meal \u2014 \u20B93,100 (or \u20B9750 for tea/snacks)",
        "Support an elder monthly \u2014 \u20B96,500",
        "Set up automatic monthly giving via UPI AutoPay",
        "Bank: Humanify Foundation | A/C: 0944102100000038",
        "PNB, Sector-8, Rohini | IFSC: PUNB0094410 | 80G: AACTH1344Q25DL02"
      ],
      primaryBtnText: "Donate via Razorpay \u2192",
      primaryBtnLink: "/donate",
      primaryBtnIcon: null
    },
    perform: {
      title: "🎵 Singing, Cultural Performances & Bhajan Sessions",
      desc: "Musicians, singers, dancers, bhajan mandlis, storytellers \u2014 bring your art to Aanandam. Few things light up our residents' faces like live music and performance.",
      bullets: [
        "Bhajan and kirtan sessions",
        "Cultural performances \u2014 dance, music, theatre",
        "Jamming sessions and informal music gatherings",
        "Storytelling and poetry recitations"
      ],
      primaryBtnText: "WhatsApp to Schedule",
      primaryBtnLink: "https://wa.me/91931085630",
      primaryBtnIcon: <FaWhatsapp className="text-xl" />
    },
    spend_time: {
      title: "☕ Spend Time With Our Elders",
      desc: "Sometimes the simplest gift is your presence. A conversation, a cup of tea, a few hours of company \u2014 for elders who rarely get visitors, this means more than most donations.",
      bullets: [
        "Casual visits \u2014 no agenda needed",
        "Celebrate a birthday, anniversary or special day with them",
        "Bring family, friends or your team for an outing",
        "Visiting hours: 10 AM \u2013 6 PM, all days"
      ],
      primaryBtnText: "WhatsApp to Plan a Visit",
      primaryBtnLink: "https://wa.me/91931085630",
      primaryBtnIcon: <FaWhatsapp className="text-xl" />
    },
    sponsor_food: {
      title: "🍛 Sponsor Food & Meals",
      desc: "Sponsor a meal, evening tea, or a month's milk supply for all residents \u2014 through our standard donation channel. Your name is shared with the residents at the time of the meal.",
      bullets: [
        "Evening tea & snacks \u2014 \u20B9750",
        "Full meal (lunch/dinner) \u2014 \u20B93,100",
        "Month's milk supply for all \u2014 \u20B915,000",
        "Option to request a photo/video update via WhatsApp"
      ],
      primaryBtnText: "Sponsor a Meal \u2192",
      primaryBtnLink: "/donate",
      primaryBtnIcon: null
    },
    medical: {
      title: "🩺 Offer Medical Facilities & Support",
      desc: "Doctors, hospitals, diagnostic centres and medical professionals can make a profound difference here. Our residents currently rely on volunteer health camps and government hospital referrals \u2014 your support can change that.",
      bullets: [
        "Medicines and first-aid supply donations",
        "Health check-up camps \u2014 BP, sugar, eye, dental",
        "Pathology tests and diagnostic services (X-ray, blood work)",
        "Physiotherapy sessions and consultations",
        "Doctor volunteering \u2014 one-time or recurring"
      ],
      primaryBtnText: "WhatsApp to Offer Support",
      primaryBtnLink: "https://wa.me/91931085630",
      primaryBtnIcon: <FaWhatsapp className="text-xl" />
    },
    csr: {
      title: "🏢 CSR Partnership for Corporates",
      desc: "Adopt the home for a year, fund our Dream Campus, run regular employee engagement activities, or sponsor elders and essential consumables \u2014 structured to match your CSR goals and budget.",
      bullets: [
        "Annual adoption of Aanandam or specific elders",
        "Recurring CSR visits and on-site team activities",
        "Product/service contributions from your company",
        "Monthly grocery, milk and consumables support"
      ],
      primaryBtnText: "WhatsApp Us",
      primaryBtnLink: "https://wa.me/91931085630",
      primaryBtnIcon: <FaWhatsapp className="text-xl" />
    },
    clothes: {
      title: "📦 Donate Goods, Products or Services",
      desc: "If you make, grow or sell something useful \u2014 food, clothing, furniture, hygiene products, technology \u2014 we welcome in-kind contributions just as warmly as money.",
      bullets: [
        "Ration, milk, cooking oil, seasonal vegetables and fruits",
        "Clothing, blankets, mattresses and bedding",
        "Hearing aids, reading glasses, mobility aids",
        "Cleaning supplies, toiletries and hygiene products"
      ],
      primaryBtnText: "WhatsApp to Arrange Drop-off",
      primaryBtnLink: "https://wa.me/91931085630",
      primaryBtnIcon: <FaWhatsapp className="text-xl" />
    },
    campus: {
      title: "🌳 Land, Property & Our Dream Campus",
      desc: "Our long-term vision is a permanent, owned campus for 100\u2013200 elders. If you have land to offer, know someone who might, or want to contribute toward this larger fund, we'd love to talk.",
      bullets: [
        "Land donation, lease or concessional sale",
        "Funding toward construction and infrastructure",
        "Architectural, legal or planning expertise",
        "Connections to philanthropic land trusts or government schemes"
      ],
      primaryBtnText: "Connect With Us",
      primaryBtnLink: "https://wa.me/91931085630",
      primaryBtnIcon: <FaWhatsapp className="text-xl" />
    }
  };

  const activeData = tabDetails[activeTab] || tabDetails['volunteer'];

  return (
    <>
      <PageHero
        title="Ways to Support"
        description="Every rupee reaches an elder directly. Pick the way that feels right to you \u2014 a one-time gesture, a meaningful celebration, or a quiet ongoing promise."
      />
      <div className="bg-[#FAFAF5] min-h-screen pt-20 pb-20">

        {/* SECTION 1: Pick What Feels Right to You */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="font-serif font-bold text-3xl text-[#0a231a] mb-3">
              Pick What Feels Right to You
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Click any option below to see how it works. No pressure to choose the "biggest" form of help \u2014 every single one matters, and we mean that honestly, not as a courtesy line.
            </p>
          </div>

          {/* Tabs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden ${activeTab === tab.id
                    ? 'border-[#C62828] bg-gradient-to-b from-red-50 to-white shadow-md'
                    : 'border-gray-200 bg-white hover:border-red-200 hover:shadow-lg'
                  }`}
              >
                {activeTab === tab.id && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#C62828]" />
                )}
                <span className={`text-4xl mb-3 transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                  {tab.icon}
                </span>
                <span className={`text-sm md:text-[15px] font-bold text-center transition-colors duration-300 ${activeTab === tab.id ? 'text-[#C62828]' : 'text-gray-700 group-hover:text-[#C62828]'
                  }`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Detail Card */}
          <div className="w-full h-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] w-full"
              >
                <h3 className="text-2xl md:text-3xl font-black text-[#0a231a] mb-5 flex items-center gap-3">
                  {activeData.title}
                </h3>
                <p className="text-gray-600 text-base md:text-[17px] mb-8 leading-relaxed font-medium">
                  {activeData.desc}
                </p>

                <ul className="space-y-4 mb-10">
                  {activeData.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                      <div className="bg-green-100 p-1 rounded-full mr-4 flex-shrink-0 mt-0.5">
                        <MdCheck className="text-green-700 text-lg" />
                      </div>
                      <span className="text-gray-800 text-[15px] font-semibold">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                  {activeData.primaryBtnLink.startsWith('http') ? (
                    <a
                      href={activeData.primaryBtnLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#C62828] hover:bg-[#a01f1f] text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-[15px]"
                    >
                      {activeData.primaryBtnIcon}
                      {activeData.primaryBtnText}
                    </a>
                  ) : (
                    <Link
                      to={activeData.primaryBtnLink}
                      className="inline-flex items-center justify-center gap-2 bg-[#C62828] hover:bg-[#a01f1f] text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-[15px]"
                    >
                      {activeData.primaryBtnIcon}
                      {activeData.primaryBtnText}
                    </Link>
                  )}

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-[#0a231a] hover:text-[#0a231a] text-gray-700 font-bold py-3 px-8 rounded-xl transition-all duration-300 text-[15px]"
                  >
                    More Details &rarr;
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* SECTION 2: Hindi Donation Banner */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-gradient-to-br from-[#8b1010] to-[#b71c1c] rounded-2xl p-6 md:p-10 shadow-xl relative overflow-hidden">
            {/* Subtle overlay effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="relative z-10">
              <h3 className="flex items-center gap-3 text-white text-xl md:text-2xl font-bold mb-3">
                <FaHeart className="text-[#FFB300]" />
                तैयार हैं दान करने के लिए? 1,500 रुपये से एक जीवन बदल सकता है।
              </h3>
              <p className="text-red-100 text-sm md:text-base mb-8">
                Choose your amount to give today, or enter a custom amount.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                {[
                  { amount: "1,500", label: "Feed Elders 1 Day" },
                  { amount: "3,100", label: "Sponsor a Meal" },
                  { amount: "16,500", label: "Adopt 1 Month" },
                  { amount: "Any ₹", label: "Your amount" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-3 md:p-4 text-center cursor-pointer transition-colors">
                    <div className="text-white font-bold text-lg md:text-xl mb-1">{item.amount}</div>
                    <div className="text-red-100 text-[10px] md:text-xs uppercase tracking-wider">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <Link to="/donate" className="block w-full text-center bg-white hover:bg-gray-50 text-[#8b1010] font-bold py-3.5 rounded shadow-lg transition-colors">
                  Donate Now via Razorpay &rarr;
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-white/80 text-xs md:text-sm border-t border-white/10 pt-5">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt /> +91-931085630 | +91-981031833
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope /> info@aanandam.in
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Hindi Ways to Join */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF8E7] rounded-2xl p-6 md:p-10 border-l-4 border-[#E5A937] shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-[#0a231a] mb-8 font-serif">
              जुड़ने के तरीके - जैसे भी आप चाहें
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 mb-10">
              {[
                { icon: '🤝', label: 'स्वयंसेवक/इंटर्न बनें' },
                { icon: '💛', label: 'दान करें' },
                { icon: '🎵', label: 'भजन/कीर्तन/सत्संग' },
                { icon: '☕', label: 'समय बिताएं' },
                { icon: '🍱', label: 'भोजन प्रायोजित करें' },
                { icon: '🩺', label: 'चिकित्सा सहायता दें' },
                { icon: '🏢', label: 'CSR साझेदारी' },
                { icon: '📦', label: 'सामान दान करें' },
                { icon: '🌳', label: 'ड्रीम कैंपस' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-800 font-medium text-sm md:text-base">{item.label} !</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E5A937]/30 pt-8">
              <p className="text-gray-700 italic mb-4 text-sm md:text-base">
                कोई भी तरीका आपके लिए सही लगे - हमसे संपर्क करें:
              </p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-800 text-sm md:text-base font-medium mb-8">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#C62828]" /> +91-931085630 | +91-981031833
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-[#C62828]" /> info@aanandam.in
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['वृद्धाश्रम दिल्ली-एनसीआर', 'बुजुर्गों की सेवा', 'स्वयंसेवक अवसर', 'भोजन दान', 'मेडिकल सहायता', 'वृद्धाश्रम'].map((tag, idx) => (
                  <span key={idx} className="bg-[#E65100] text-white text-[10px] md:text-xs px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
