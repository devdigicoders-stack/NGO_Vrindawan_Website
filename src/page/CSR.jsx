import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';
import { Link } from 'react-router-dom';
import { 
  FaTrophy, FaMicrophone, FaCamera, FaSpa, FaMedal,
  FaHome, FaBuilding, FaUsers, FaBox, FaHandsHelping,
  FaShoppingBasket, FaWallet, FaRegCalendarAlt, FaWhatsapp,
  FaEnvelope, FaPhoneAlt, FaHeart
} from 'react-icons/fa';

/* ── Amount button ── */
const AmountBtn = ({ amount, label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center py-4 px-2 sm:px-4 rounded-xl border-[1.5px] font-bold transition-all duration-300 cursor-pointer shadow-sm
      ${selected
        ? 'bg-[#2A1F18] border-[#2A1F18] text-[#FDFCF0] scale-[1.02] shadow-md'
        : 'bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50'}`}
  >
    <span className={`text-xl sm:text-2xl mb-1 ${selected ? 'text-[#FDFCF0]' : 'text-white'}`}>{amount}</span>
    <span className={`text-[12px] sm:text-[13px] font-medium text-center ${selected ? 'text-white/80' : 'text-white/70'}`}>{label}</span>
  </button>
);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function CSR() {
  const [selectedAmount, setSelectedAmount] = useState('₹3,100');
  
  const amounts = [
    { value: '₹3,100', label: 'Sponsor a meal' },
    { value: '₹6,500', label: '1 elder / month' },
    { value: '₹15,000', label: 'Monthly milk supply' },
    { value: 'Any ₹', label: 'Custom amount' },
  ];

  const handleRazorpay = (e) => {
    e.preventDefault();
    const razorpayUrl = 'https://pages.razorpay.com/pl_Jp1oG04oA3l83K/view';
    window.open(razorpayUrl, '_blank', 'noopener,noreferrer');
  };

  const waysToPartner = [
    {
      icon: <FaHome className="text-[#A93226] text-2xl" />,
      title: 'Adopt Aanandam for a Year',
      desc: 'Become the named annual partner supporting the home\'s core operations — food, shelter, basic care and activities — for a full year. The most comprehensive partnership we offer, with regular reporting and visibility for your organisation.',
      tag: 'ANNUAL COMMITMENT',
      tagColor: 'text-[#A93226]'
    },
    {
      icon: <FaBuilding className="text-[#E67E22] text-2xl" />,
      title: 'Fund Our Dream Campus',
      desc: 'Contribute toward Aanandam\'s long-term vision of a permanent, owned campus for 100–200 elders. Land, construction funding, or infrastructure contributions are all welcome as part of this larger mission.',
      tag: 'CAPITAL / INFRASTRUCTURE',
      tagColor: 'text-[#E67E22]'
    },
    {
      icon: <FaUsers className="text-[#2E7D32] text-2xl" />,
      title: 'Regular CSR Activities & On-Site Visits',
      desc: 'Organise recurring employee engagement days at Aanandam — serving meals, leading activities, celebrating festivals, or simply spending time with residents. A powerful way to build empathy within your team while supporting our community.',
      tag: 'EMPLOYEE ENGAGEMENT',
      tagColor: 'text-[#2E7D32]'
    },
    {
      icon: <FaBox className="text-[#2980B9] text-2xl" />,
      title: 'Offer Your Company\'s Products or Services',
      desc: 'If your business produces food, healthcare products, clothing, furniture, technology or any other useful goods or services, we welcome in-kind contributions just as warmly as financial ones.',
      tag: 'IN-KIND SUPPORT',
      tagColor: 'text-[#2980B9]'
    },
    {
      icon: <FaHandsHelping className="text-[#8E44AD] text-2xl" />,
      title: 'Adopt / Support Elders',
      desc: 'Sponsor the monthly care of one or several residents through our standard elder sponsorship programme (₹6,500/month per elder). Companies can sponsor any number of elders as part of their CSR commitment.',
      tag: 'ELDER SPONSORSHIP',
      tagColor: 'text-[#8E44AD]'
    },
    {
      icon: <FaShoppingBasket className="text-[#16A085] text-2xl" />,
      title: 'Monthly Grocery, Milk & Consumables',
      desc: 'Commit to supplying or funding monthly essentials — ration, milk, cooking oil, tea, sugar and other daily consumables. A practical, ongoing form of support that directly impacts daily life at Aanandam.',
      tag: 'RECURRING IN-KIND',
      tagColor: 'text-[#16A085]'
    },
    {
      icon: <FaWallet className="text-[#D35400] text-2xl" />,
      title: 'Monthly Pocket Money for Elders',
      desc: 'Many residents have no personal income at all. A modest monthly allowance — even a small amount — restores a sense of independence and dignity that means more than its monetary value.',
      tag: 'DIGNITY & INDEPENDENCE',
      tagColor: 'text-[#D35400]'
    },
    {
      icon: <FaRegCalendarAlt className="text-[#34495E] text-2xl" />,
      title: 'Other Recurring Expenses & Activities',
      desc: 'Medical camps, festival celebrations, outbound trips, clothing drives, or any other specific need — we\'re glad to discuss what aligns best with your organisation\'s CSR focus areas and budget.',
      tag: 'CUSTOM PARTNERSHIP',
      tagColor: 'text-[#34495E]'
    }
  ];

  return (
    <div className="bg-[#FDFCF0] min-h-screen pb-20 font-sans">
      <PageHero
        title="CSR Partnerships"
        description="Align your corporate social responsibility with a cause that touches every heart. Build a legacy of care and compassion."
        hideBreadcrumb={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-24">
        
        {/* Section 1: Intro */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#245336] mb-6 leading-tight text-center">
            Why Elder Care Deserves a Place in Your CSR Portfolio
          </h2>
          <div className="space-y-6 text-[#4A4036] text-[16px] sm:text-lg leading-relaxed max-w-5xl mx-auto text-center">
            <p>
              India's senior citizen population is growing faster than the support systems built for them. Among India's CSR categories, elder care remains significantly underfunded compared to education or environment — even though its impact is immediate, visible and deeply human.
            </p>
            <p>
              Aanandam Vridhashram is a free old age home in Karala, Delhi, sheltering abandoned and homeless senior citizens. We are run by <strong className="text-[#2A1F18]">Humanify Foundation</strong>, founded and chaired by <strong className="text-[#2A1F18]">Sh. Niraj Gera</strong>.
            </p>
          </div>
        </motion.section>

        {/* Section 2: Founder Recognition */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#245336] mb-8 text-center">
            About Our Founder — Personal Recognition
          </h2>
          <div className="bg-[#2A1F18] rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            
            <p className="text-[#FDFCF0]/60 text-sm font-bold tracking-widest uppercase mb-4">
              Founder & Chairman, Humanify Foundation
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F4D03F] font-bold mb-6">
              Sh. Niraj Gera
            </h3>
            
            <p className="text-[#FDFCF0]/90 text-base sm:text-lg leading-relaxed mb-8 max-w-4xl">
              The following are <strong className="text-white">personal credentials and recognitions of Sh. Niraj Gera</strong>, accumulated over 18+ years of social work — separate from and prior to Aanandam Vridhashram's establishment as a residential elder care facility:
            </p>

            <ul className="space-y-5 text-[#FDFCF0]/80 text-base sm:text-[17px] leading-relaxed max-w-4xl text-left w-full mx-auto">
              <li className="flex gap-4">
                <FaTrophy className="text-[#F4D03F] text-xl shrink-0 mt-1" />
                <span><strong className="text-white">Official World Record Holder</strong> — highest number of women's health sessions conducted by an individual</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#F4D03F] font-bold text-lg leading-none shrink-0 mt-1">IN</span>
                <span><strong className="text-white">Mentor of Change</strong> — NITI Aayog, Government of India</span>
              </li>
              <li className="flex gap-4">
                <FaMicrophone className="text-[#F4D03F] text-xl shrink-0 mt-1" />
                <span><strong className="text-white">TEDx Speaker</strong> (multiple talks)</span>
              </li>
              <li className="flex gap-4">
                <FaCamera className="text-[#F4D03F] text-xl shrink-0 mt-1" />
                <span><strong className="text-white">Internationally recognised social documentary photographer</strong> — his personal photography work has been featured in publications including BBC, Times of India and Hindustan Times</span>
              </li>
              <li className="flex gap-4">
                <FaSpa className="text-[#F4D03F] text-xl shrink-0 mt-1" />
                <span><strong className="text-white">Senior faculty member</strong>, The Art of Living Organisation</span>
              </li>
              <li className="flex gap-4">
                <FaMedal className="text-[#F4D03F] text-xl shrink-0 mt-1" />
                <span><strong className="text-white">Recipient of the Humanitarian of the Year Award</strong>, National Icon Award Ceremony</span>
              </li>
            </ul>

            <p className="mt-8 text-[#FDFCF0]/50 italic text-sm sm:text-[15px] leading-relaxed max-w-4xl border-t border-white/10 pt-6">
              These recognitions reflect Sh. Niraj Gera's broader body of work across menstrual health awareness, motivational speaking and social activism — and inform the values and leadership behind Aanandam Vridhashram, though they are not achievements of the Aanandam facility itself.
            </p>
          </div>
        </motion.section>

        {/* Section 3: Ways to Partner */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#245336] mb-4 text-center">
            Ways Your Organisation Can Partner With Us
          </h2>
          <p className="text-[#4A4036] text-[16px] sm:text-lg mb-10 max-w-5xl leading-relaxed mx-auto text-center">
            We've kept this list practical and specific — these are the actual forms of support that make a direct difference at Aanandam. Exact amounts and structures are discussed individually based on your organisation's CSR goals and scale; <strong className="text-[#2A1F18]">please get in touch with us to determine what fits your budget.</strong>
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {waysToPartner.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
                whileHover={{ y: -2 }}
              >
                <div className={`absolute left-0 top-0 w-1 h-full opacity-50 ${item.tagColor.replace('text-', 'bg-')}`}></div>
                <div className="flex gap-5">
                  <div className="shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#2A1F18] mb-3 group-hover:text-[#245336] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#5C5046] text-[15px] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    <span className={`text-[11px] font-bold tracking-widest uppercase ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-[#5C5046] text-[15px] italic text-center">
            All partnership amounts, durations and structures are discussed individually — please reach out so we can share specifics suited to your organisation.
          </p>
        </motion.section>

        {/* Section 4: Direct Contribution */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#245336] mb-6 text-center">
            Or Start Simply — With a Direct Contribution
          </h2>
          <p className="text-[#4A4036] text-[16px] sm:text-lg mb-10 max-w-4xl leading-relaxed mx-auto text-center">
            If your organisation prefers to begin with a straightforward donation while we discuss a larger partnership, here are our standard giving options:
          </p>

          <div className="rounded-[24px] overflow-hidden shadow-2xl bg-gradient-to-br from-[#8B2323] via-[#A93226] to-[#7B1113] p-8 sm:p-12 relative max-w-5xl mx-auto text-center">
            {/* Top half */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 mb-8">
              <div className="flex-1 w-full">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <FaHeart className="text-2xl mt-1 text-[#F4D03F]" />
                  <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#F4D03F] leading-tight">
                    Donate to Aanandam Vridhashram
                  </h2>
                </div>
                
                {/* Amount buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
                  {amounts.map((item) => (
                    <AmountBtn
                      key={item.value}
                      amount={item.value}
                      label={item.label}
                      selected={selectedAmount === item.value}
                      onClick={() => setSelectedAmount(item.value)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-4 relative z-10">
              <Link
                to="/donate"
                className="w-full bg-[#FDFCF0] text-[#8C3A3A] font-bold text-lg sm:text-xl py-4 sm:py-5 rounded-xl hover:bg-white hover:scale-[1.01] transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                Donate via Razorpay <span>→</span>
              </Link>
              <Link
                to="/donate"
                className="w-full bg-[#2E7D32] text-white font-bold text-lg sm:text-xl py-4 sm:py-5 rounded-xl hover:bg-[#276a2a] hover:scale-[1.01] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 border border-[#43A047]/50"
              >
                Set Up Monthly Giving <span>→</span>
              </Link>
            </div>

            {/* Details */}
            <div className="mt-8 pt-8 border-t border-white/20 text-[#FDFCF0]/90 text-sm sm:text-[15px] space-y-3 relative z-10">
              <p><strong className="text-[#F4D03F]">Bank Transfer:</strong> Humanify Foundation</p>
              <p><strong className="text-[#F4D03F]">A/C No:</strong> 0944102100000038 | PNB, Sector-8, Rohini | IFSC: <strong className="text-[#F4D03F]">PUNB0094410</strong></p>
              <p><strong className="text-[#F4D03F]">UPI / QR:</strong> Scan QR code on our Donate page</p>
              <p><strong className="text-[#F4D03F]">80G Reg:</strong> AACTH1344Q25DL02 (Cash over ₹2,000 not eligible for 80G)</p>
            </div>

            <div className="mt-6 bg-white/10 rounded-xl p-4 sm:p-6 text-white/90 text-sm sm:text-base font-medium relative z-10 backdrop-blur-sm border border-white/10">
              After donating, WhatsApp +91-9310105630 with your details — including company name if this is a corporate contribution — for receipt and 80G certificate.
            </div>
          </div>
        </motion.section>

        {/* Section 5: Let's Start the Conversation */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="border border-[#2980B9]/20 bg-white rounded-[24px] p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#2980B9]/60"></div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#2A1F18] mb-4">
              Let's Start the Conversation
            </h2>
            <p className="text-[#5C5046] text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Write to us with your organisation's CSR focus area and rough budget range. We'll respond with specific partnership options, amounts and a documentation framework suited to your needs — usually within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href="https://wa.me/919310105630" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3 rounded-full hover:bg-[#20bd5a] transition-colors w-full sm:w-auto shadow-md">
                <FaWhatsapp className="text-xl" /> WhatsApp Us
              </a>
              <a href="mailto:info@vridhashram.in" className="flex items-center justify-center gap-2 bg-[#2980B9] text-white font-bold px-8 py-3 rounded-full hover:bg-[#2471a3] transition-colors w-full sm:w-auto shadow-md">
                <FaEnvelope className="text-xl" /> Email Us
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[#5C5046] text-[15px]">
              <div className="flex items-center gap-2"><FaPhoneAlt className="text-[#A93226]" /> +91-9310105630 | +91-9891139833</div>
              <span className="hidden sm:inline text-gray-300">|</span>
              <div className="flex items-center gap-2"><FaEnvelope className="text-[#A93226]" /> info@vridhashram.in | nirajgera@gmail.com</div>
            </div>
          </div>
          
          <div className="mt-10 text-center max-w-3xl mx-auto">
            <p className="font-serif italic text-lg sm:text-xl text-[#245336] leading-relaxed">
              "We don't need your company to save us. We need it to walk alongside us — for a year, for an event, for whatever feels right to start with."
            </p>
          </div>
        </motion.section>

        {/* Section 6: Hindi SEO Section */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="bg-[#FDF9EC] border-l-4 border-[#E67E22] rounded-r-2xl p-8 sm:p-10 shadow-sm max-w-7xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E67E22]/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="font-serif font-bold text-lg sm:text-xl md:text-2xl mb-6 text-[#A93226] italic text-left">
              CSR साझेदारी — आपकी कंपनी, हमारे बुजुर्ग
            </h3>
            
            <ul className="space-y-2 text-[#4A4036] text-[16px] sm:text-lg font-medium mb-8" style={{ fontFamily: 'Mukta, sans-serif' }}>
              <li>एक वर्ष के लिए आनंदम् को गोद लें | सपनों के परिसर के लिए फंड | नियमित CSR गतिविधियाँ</li>
              <li>कंपनी के उत्पाद/सेवाएँ दान करें | बुजुर्गों को गोद लें (₹6,500/माह)</li>
              <li>मासिक राशन-दूध सहायता | बुजुर्गों के लिए मासिक जेब खर्च</li>
            </ul>

            <p className="text-[#5C5046] text-[15px] sm:text-[16px] italic mb-8" style={{ fontFamily: 'Mukta, sans-serif' }}>
              सभी राशियाँ और साझेदारी का स्वरूप व्यक्तिगत रूप से तय होता है — कृपया संपर्क करें।
            </p>

            <div className="space-y-2 text-[#4A4036] font-bold text-[15px] sm:text-base">
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#A93226]" /> +91-9310105630 | +91-9891139833 | ✉ info@vridhashram.in</p>
              <p>80G पंजीकरण: <span className="text-[#E67E22]">AACTH1344Q25DL02</span></p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-[#E67E22] text-white text-[13px] font-bold px-4 py-1.5 rounded-full">CSR वृद्धाश्रम दिल्ली</span>
              <span className="bg-[#E67E22] text-white text-[13px] font-bold px-4 py-1.5 rounded-full">कॉर्पोरेट CSR बुजुर्ग सेवा</span>
              <span className="bg-[#E67E22] text-white text-[13px] font-bold px-4 py-1.5 rounded-full">CSR गोद लेना वृद्धाश्रम</span>
              <span className="bg-[#E67E22] text-white text-[13px] font-bold px-4 py-1.5 rounded-full">कंपनी दान NGO</span>
              <span className="bg-[#E67E22] text-white text-[13px] font-bold px-4 py-1.5 rounded-full">CSR साझेदारी दिल्ली</span>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default CSR;
