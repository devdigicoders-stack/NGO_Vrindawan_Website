import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';
import { Link } from 'react-router-dom';
import CelebrationGallery from '../Component/CelebrationGallery';
import { FaCalendarAlt } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

/* ── Reusable star badge ── */
const Stars = ({ count }) => (
  <span className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? 'text-[#D4AF37] text-lg' : 'text-gray-300 text-lg'}>★</span>
    ))}
  </span>
);

/* ── Calendar day card ── */
const DayCard = ({ name, stars, desc, hindi, accent = '#D4AF37' }) => (
  <motion.div
    variants={fadeUp}
    className="bg-white rounded-xl border border-[#E5E7EB] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 p-6 sm:p-7 flex flex-col gap-3 group hover:-translate-y-1 relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-1.5 h-full transition-colors duration-300" style={{ backgroundColor: accent }}></div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <h4 className="font-bold text-[#2A1F18] text-lg sm:text-xl font-serif tracking-wide">{name}</h4>
      <Stars count={stars} />
    </div>
    <p className="text-[#5C5046] text-[15px] sm:text-base leading-relaxed">{desc}</p>
    {hindi && <p className="text-[#992B2B] text-[14px] sm:text-[15px] italic mt-1 font-medium">{hindi}</p>}
  </motion.div>
);

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

function SupportUs() {
  const [selectedAmt1, setSelectedAmt1] = useState(1);
  const [selectedAmt2, setSelectedAmt2] = useState(0);

  const amounts1 = [
    { amount: '₹750', label: 'Tea & snacks' },
    { amount: '₹3,100', label: 'Full meal (Annadaan)' },
    { amount: '₹6,500', label: '1 elder / 1 month' },
    { amount: 'Any ₹', label: "Your heart's call" },
  ];

  const amounts2 = [
    { amount: '₹3,100', label: 'Annadaan – full meal' },
    { amount: '₹6,500', label: 'Monthly elder care' },
    { amount: '₹15,000', label: "Month's milk supply" },
    { amount: 'Any ₹', label: 'No amount is small' },
  ];

  const highestDays = [
    {
      name: 'Akshaya Tritiya',
      stars: 5,
      desc: 'Traditionally believed: charity on this day yields enduring, inexhaustible (akshaya) spiritual merit. The single most powerful day for donation. Annadaan for elders on Akshaya Tritiya is considered eternal in its blessing.',
      hindi: 'अक्षय तृतीया पर दान — अनंत पुण्य',
      accent: '#D4AF37',
    },
    {
      name: 'Pitru Paksha',
      stars: 5,
      desc: 'The 16-day period of ancestor remembrance. Serving elderly people during Pitru Paksha is considered by many families a deeply meaningful way to honour ancestors and earn their blessings. No day is more aligned with Aanandam\'s mission.',
      hindi: 'पितृ पक्ष — पूर्वजों की शांति के लिए बुजुर्गों की सेवा',
      accent: '#D4AF37',
    },
    {
      name: 'Guru Purnima',
      stars: 5,
      desc: 'The full moon of gratitude — to teachers, to elders, to all who guided us. Serving and feeding elderly people on Guru Purnima is a natural, deeply felt expression of this gratitude.',
      hindi: 'गुरु पूर्णिमा — बुजुर्गों की सेवा ही गुरु दक्षिणा',
      accent: '#D4AF37',
    },
    {
      name: 'Amavasya (Every Month)',
      stars: 5,
      desc: 'New moon day — one of the most significant for ancestor remembrance, annadaan, and charity. Many families already perform charitable acts on Amavasya. Feeding elders here is a profound expression of that tradition.',
      hindi: 'अमावस्या — पितरों की याद में अन्नदान',
      accent: '#D4AF37',
    },
  ];

  const monthlyDays = [
    {
      name: 'Purnima (Full Moon)',
      stars: 4,
      desc: 'Associated with peace, spiritual growth and charity. Monthly Purnima fasting and annadaan are widely practiced. Feeding elders on Purnima carries deep merit.',
      hindi: 'पूर्णिमा — शांति और पुण्य का दिन',
      accent: '#8C3A3A',
    },
    {
      name: 'Ekadashi (Twice Monthly)',
      stars: 3,
      desc: 'Devotees traditionally perform annadaan and charity on Ekadashi. Donating to elderly on this day is aligned with the spirit of fasting, selflessness and giving.',
      hindi: 'एकादशी — अन्नदान और सेवा का दिन',
      accent: '#8C3A3A',
    },
  ];

  const festivalDays = [
    {
      name: 'Diwali',
      stars: 4,
      desc: 'Festival of light and giving. Sponsor clothes, sweets, diyas and a full celebration for our elders. The festival of light becomes most meaningful when it reaches those in the dark.',
      hindi: 'दीवाली — बुजुर्गों के लिए कपड़े, मिठाई और रोशनी',
      accent: '#E67E22',
    },
    {
      name: 'Navratri',
      stars: 4,
      desc: "Annadaan during Navratri — especially for women residents — carries the blessings of the Divine Mother. Kanya Pujan's spirit extended to every woman elder here.",
      hindi: 'नवरात्रि — देवी माँ की कृपा, बुजुर्ग महिलाओं की सेवा',
      accent: '#E67E22',
    },
    {
      name: 'Makar Sankranti',
      stars: 3,
      desc: 'Traditional day for charity and donation. Til-gur, warm food and winter clothing for elders — a beautiful act on the festival of harvest and gratitude.',
      hindi: 'मकर संक्रांति — दान-पुण्य का पर्व',
      accent: '#E67E22',
    },
    {
      name: 'Mahashivratri',
      stars: 3,
      desc: 'Night of Shiva — fasting and food donation. Annadaan for elderly people on this night is considered highly meritorious by devotees.',
      hindi: 'महाशिवरात्रि — अन्नदान और पुण्य',
      accent: '#E67E22',
    },
    {
      name: 'Ram Navami & Hanuman Jayanti',
      stars: 3,
      desc: 'Days of charity, annadaan and community service. Sponsoring a full meal for all Aanandam residents on these days is a fitting tribute to the spirit of seva.',
      hindi: 'राम नवमी / हनुमान जयंती — सेवा और अन्नदान',
      accent: '#E67E22',
    },
    {
      name: 'Buddha Purnima',
      stars: 3,
      desc: "The Buddha's path was one of compassion and service. Donating to abandoned elders on this day — those most invisible to society — is an act of genuine bodhichitta.",
      hindi: 'बुद्ध पूर्णिमा — करुणा और सेवा',
      accent: '#E67E22',
    },
    {
      name: 'Kartik Purnima',
      stars: 4,
      desc: 'One of the most auspicious full moons of the Hindu calendar. Charity on Kartik Purnima — especially annadaan — is considered highly blessed.',
      hindi: 'कार्तिक पूर्णिमा — महापुण्य का दिन',
      accent: '#E67E22',
    },
    {
      name: 'Ganga Dussehra & Devshayani Ekadashi',
      stars: 3,
      desc: 'Days of spiritual merit, purification and charity. Donating to elderly care — to those who have nothing — is a deeply fitting act on these sacred days.',
      hindi: 'गंगा दशहरा / देवशयनी एकादशी — पुण्य दान',
      accent: '#E67E22',
    },
    {
      name: 'Sharad Purnima',
      stars: 3,
      desc: 'The full moon of autumn — associated with nourishment and food donation. Sponsoring kheer or a warm meal for elders on this night is a beloved tradition across North India.',
      hindi: 'शरद पूर्णिमा — खीर और अन्नदान',
      accent: '#E67E22',
    },
    {
      name: 'Dussehra',
      stars: 3,
      desc: 'Victory of good over evil. New beginnings. What better way to mark the day than an act of pure giving — clothing, food, or support — for those most in need.',
      hindi: 'दशहरा — नई शुरुआत, पुण्य का अवसर',
      accent: '#E67E22',
    },
    {
      name: 'Christmas & New Year',
      stars: 3,
      desc: 'Giving, compassion and fresh beginnings transcend every tradition. Many of our donors celebrate Christmas and New Year by sponsoring a meal or elder care at Aanandam.',
      hindi: 'क्रिसमस / नया साल — दान और नई उम्मीद',
      accent: '#E67E22',
    },
    {
      name: 'Basant Panchami',
      stars: 3,
      desc: 'Day of knowledge, learning and new seasons. Donating toward elder care or the education programme at Aanandam on this day is a meaningful gesture.',
      hindi: 'बसंत पंचमी — ज्ञान और सेवा का दिन',
      accent: '#E67E22',
    },
  ];

  return (
    <div className="bg-[#FDFCF0] min-h-screen font-sans text-[#2A1F18]">
      {/* ── HERO ── */}
      <PageHero
        title="Support Us & Give Back"
        description="Make your celebrations truly meaningful. Share your joy, milestones, and memories with our elders and receive their priceless blessings."
      />

      {/* ── GALLERY ── */}
      <CelebrationGallery />

      {/* ════════════════════════════════════
          SECTION 1 — QUOTE BLOCK
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-[#3C2415] rounded-3xl p-8 sm:p-10 md:p-12 text-center shadow-xl relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37]"></div>
          
          <p className="font-serif italic text-[#F4D03F] text-lg sm:text-xl md:text-2xl leading-relaxed font-medium max-w-5xl mx-auto">
            "The greatest charity is not just giving food — it is giving dignity, companionship and hope to someone who once gave their life caring for others."
          </p>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto my-6"></div>
          <p className="text-[#FDFCF0]/90 text-base sm:text-lg font-medium tracking-wide max-w-4xl mx-auto" style={{ fontFamily: 'Mukta, sans-serif' }}>
            सबसे बड़ा दान वह है जो किसी अकेले बुजुर्ग को याद दिलाए कि वे अभी भी प्यारे हैं।
          </p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          SECTION 2 — WHY GIVING TO ELDERS
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-[#245336] mb-8 leading-tight text-center">
            Why Giving to Elders Is Among the Most Sacred Acts
          </h2>

          <div className="space-y-6 text-[#4A4036] text-[16px] sm:text-lg leading-relaxed md:pr-12 max-w-6xl">
            <p>
              Across Hindu scriptures, across centuries of tradition, one belief holds firm:{' '}
              <strong className="text-[#2A1F18] font-bold">Matru-Pitru Seva and Vriddha Seva</strong> — serving mothers, fathers and the elderly — is among the{' '}
              <span className="text-[#8C3A3A] font-bold">highest forms of dharma</span> a person can practice. It is believed to bring blessings, dissolve karmic debts, and bring inner peace that no ritual alone can provide.
            </p>
            <p>
              The elders at Aanandam Vridhashram are not strangers. They are someone's abandoned parents, someone's forgotten grandparents. Serving them — feeding them, sheltering them, bringing them joy — is, in the truest sense,{' '}
              <strong className="text-[#2A1F18] font-bold">Pitru Seva. Matru Seva. Annadaan. Vriddha Seva.</strong>
            </p>
            <p>
              On auspicious days, this act carries an even deeper resonance. It honours your ancestors. It honours the elders in your own life who may be gone. And it honours the deepest teachings of every tradition that has ever asked us to be our best selves.
            </p>
          </div>

          {/* Inner blockquote */}
          <div className="mt-12 border-l-[6px] border-[#D4AF37] pl-6 sm:pl-8 py-6 bg-gradient-to-r from-[#F4D03F]/10 to-transparent rounded-r-2xl">
            <p className="font-serif italic text-[#245336] text-lg sm:text-xl font-medium leading-relaxed">
              "Serving elders is serving the divine in its most human form. There is no puja more complete."
            </p>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          SECTION 3 — DONATE (ANY DAY)
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-[24px] overflow-hidden shadow-2xl border border-[#A93226]/20 bg-[#FDFCF0]"
        >
          <div className="bg-gradient-to-br from-[#8B2323] via-[#A93226] to-[#7B1113] p-8 sm:p-12 text-white">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              
              <div className="flex-1 w-full">
                {/* Heading */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-2xl mt-1">🪔</span>
                  <h2 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-[#F4D03F] leading-tight">
                    Donate Today — Any Day Is Auspicious When the Heart Is Ready
                  </h2>
                </div>
                <p className="text-white/80 text-[15px] sm:text-[16px] mb-8 md:ml-12 leading-relaxed max-w-xl">
                  Choose your amount. Pay via UPI, bank transfer or Razorpay. After paying, WhatsApp your details to receive your receipt and 80G certificate.
                </p>

                {/* Amount Buttons */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {amounts1.map((a, i) => (
                    <AmountBtn key={i} {...a} selected={selectedAmt1 === i} onClick={() => setSelectedAmt1(i)} />
                  ))}
                </div>

                {/* Razorpay Button */}
                <a
                  href="https://rzp.io/l/aanandam"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-full py-4 bg-white text-[#A93226] font-extrabold text-lg rounded-xl hover:bg-[#FDFCF0] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  Donate via Razorpay →
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 bg-white">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Bank Details */}
              <div className="flex-1 bg-[#F9F7F1] border border-[#E5E0D8] rounded-2xl p-6 sm:p-8 space-y-3">
                <h4 className="font-bold text-[#8C3A3A] text-lg mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                  Bank Transfer Details
                </h4>
                <p className="text-[#4A4036] text-[15px]"><span className="font-bold text-[#2A1F18]">Bank Transfer / NEFT:</span> Humanify Foundation</p>
                <div className="h-[1px] w-full bg-[#E5E0D8] my-2"></div>
                <p className="text-[#4A4036] text-[15px]"><span className="font-bold text-[#2A1F18]">A/C:</span> 09441021000000038 <br className="sm:hidden" /><span className="hidden sm:inline"> | </span>PNB, Sector-8, Rohini <br className="sm:hidden" /><span className="hidden sm:inline"> | </span><span className="font-bold text-[#2A1F18]">IFSC:</span> PUNB0094410</p>
                <div className="h-[1px] w-full bg-[#E5E0D8] my-2"></div>
                <p className="text-[#4A4036] text-[15px]"><span className="font-bold text-[#2A1F18]">UPI / QR Code:</span> Scan QR on our Donate page</p>
                <div className="h-[1px] w-full bg-[#E5E0D8] my-2"></div>
                <p className="text-[#4A4036] text-[15px]"><span className="font-bold text-[#2A1F18]">80G Reg:</span> AACTH1344Q25DL02 — Cash over ₹2,000 not eligible for 80G</p>
              </div>

              {/* WhatsApp Info */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="bg-[#245336]/5 border border-[#245336]/20 rounded-2xl p-6 sm:p-8 space-y-2">
                  <h4 className="font-bold text-[#245336] text-lg mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    Send Details on WhatsApp
                  </h4>
                  <p className="text-[#4A4036] text-[15px]">After donating, WhatsApp: <strong className="text-[#245336]">+91-9310105630</strong> | +91-9891139833</p>
                  <p className="text-[#4A4036] text-[14px] mt-2 italic">Send: Name · Number · Email · Address · Amount · Date · PAN (for 80G certificate)</p>
                </div>
                <p className="text-[#8B8276] text-[13px] leading-relaxed px-2">
                  As per Section 80G of the Income Tax Act, cash donations exceeding ₹2,000 are not eligible for tax deduction. Please donate via UPI, bank transfer, cheque or online payment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          SECTION 4 — HINDU CALENDAR OF SEVA
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        {/* Section Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center gap-3 mb-4 bg-[#F4D03F]/20 px-6 py-2 rounded-full border border-[#D4AF37]/30">
            <FaCalendarAlt className="text-xl text-[#245336]" />
            <h2 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-[#245336]">
              Sacred Days to Give
            </h2>
          </div>
          <p className="text-[#5C5046] text-lg leading-relaxed">
            Every tradition has its seasons of giving. These are the days when donation to elderly, annadaan and vriddha seva carry the deepest spiritual meaning.
          </p>
        </motion.div>

        {/* ── Most Auspicious ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-6 flex items-center gap-4">
          <span className="text-2xl">⭐</span>
          <h3 className="font-serif font-bold text-[#2A1F18] text-xl sm:text-2xl">Most Auspicious — Highest Spiritual Merit</h3>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37] to-transparent ml-4"></div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {highestDays.map((d, i) => <DayCard key={i} {...d} />)}
        </motion.div>

        {/* ── Monthly ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-6 flex items-center gap-4">
          <span className="text-2xl">🌕</span>
          <h3 className="font-serif font-bold text-[#2A1F18] text-xl sm:text-2xl">Monthly Sacred Days</h3>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#8C3A3A] to-transparent ml-4"></div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {monthlyDays.map((d, i) => <DayCard key={i} {...d} />)}
        </motion.div>

        {/* ── Annual Festivals ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-6 flex items-center gap-4">
          <span className="text-2xl">🎉</span>
          <h3 className="font-serif font-bold text-[#2A1F18] text-xl sm:text-2xl">Annual Festivals</h3>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#E67E22] to-transparent ml-4"></div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {festivalDays.map((d, i) => <DayCard key={i} {...d} />)}
        </motion.div>

        {/* Calendar CTA Strip */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#F4D03F] to-[#F39C12] rounded-[20px] px-8 py-8 shadow-xl"
        >
          <p className="font-bold text-[#2A1F18] text-lg sm:text-xl md:text-2xl max-w-lg">
            🪔 An auspicious day is coming. Make it count today.
          </p>
          <Link
            to="/donate"
            className="whitespace-nowrap px-8 py-4 bg-[#2A1F18] text-[#FDFCF0] font-bold text-[16px] rounded-xl hover:bg-[#1A130E] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(42,31,24,0.5)]"
          >
            Donate Now →
          </Link>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          SECTION 6 — HINDI SEO SECTION
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-32">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-white border-2 border-[#D4AF37]/30 rounded-[24px] p-8 sm:p-12 shadow-[0_8px_30px_-4px_rgba(212,175,55,0.1)] relative"
        >
          {/* Accent decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-[#8C3A3A] rounded-b-full"></div>

          {/* Heading */}
          <h2
            className="font-bold text-xl sm:text-2xl md:text-3xl text-[#8C3A3A] mb-6 leading-snug text-center"
            style={{ fontFamily: 'Mukta, sans-serif' }}
          >
            शुभ दिन पर दान — बुजुर्गों की सेवा ही सबसे बड़ा पुण्य
          </h2>

          {/* Intro */}
          <p
            className="text-[#4A4036] text-[16px] sm:text-[18px] leading-relaxed mb-10 text-center max-w-4xl mx-auto"
            style={{ fontFamily: 'Mukta, sans-serif' }}
          >
            हिंदू शास्त्रों और परंपराओं के अनुसार, <strong className="text-[#2A1F18]">वृद्ध सेवा और मातृ-पितृ सेवा</strong> सबसे बड़े पुण्य कामों में से एक है।
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {[
              { day: 'अक्षय तृतीया पर दान', desc: 'अनंत पुण्य' },
              { day: 'पितृ पक्ष में बुजुर्गों की सेवा', desc: 'पूर्वजों को श्रद्धांजलि' },
              { day: 'अमावस्या पर अन्नदान', desc: 'पितरों की शांति' },
              { day: 'गुरु पूर्णिमा पर सेवा', desc: 'गुरु दक्षिणा का सर्वश्रेष्ठ रूप' },
              { day: 'दीवाली, नवरात्रि, महाशिवरात्रि', desc: 'हर त्योहार सेवा का अवसर है' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#F9F7F1] p-4 rounded-xl">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#8C3A3A] flex-shrink-0"></span>
                <span className="text-[16px]">
                  <span className="font-bold text-[#8C3A3A] block mb-0.5">{item.day}</span>
                  <span className="text-[#5C5046]">{item.desc}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-10"></div>

          {/* Donation Info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left mb-10" style={{ fontFamily: 'Mukta, sans-serif' }}>
            <div className="space-y-3">
              <p className="text-[#4A4036] text-[16px]">
                <strong className="text-[#2A1F18] text-[18px]">आनंदम वृद्धाश्रम से दान करें</strong>
              </p>
              <p className="text-[#4A4036] text-[15px]">
                दान के बाद WhatsApp करें:{' '}
                <a href="tel:+919310105630" className="text-[#8C3A3A] font-bold hover:underline">+91-9310105630</a>{' '}
                /{' '}
                <a href="tel:+919891139833" className="text-[#8C3A3A] font-bold hover:underline">+91-9891139833</a>
              </p>
            </div>
            <Link
              to="/donate"
              className="px-8 py-3.5 bg-[#8C3A3A] text-white font-bold rounded-lg hover:bg-[#732f2f] transition-colors shadow-md"
            >
              यहाँ दान करें
            </Link>
          </div>

          {/* SEO Tag Chips */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              'अक्षय तृतीया दान',
              'पितृ पक्ष बुजुर्ग सेवा',
              'अमावस्या अन्नदान',
              'वृद्ध सेवा दान',
              'मातृ पितृ सेवा',
              'गुरु पूर्णिमा दान',
              'नवरात्रि अन्नदान',
              'दीवाली वृद्धाश्रम दान',
              'बुजुर्गों की देखभाल',
              'पुण्य के दिन दान',
              'वृद्धाश्रम में दान दिल्ली',
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#2A1F18] text-[#FDFCF0] text-[14px] rounded-full hover:bg-[#3C2415] transition-colors cursor-default"
                style={{ fontFamily: 'Mukta, sans-serif' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default SupportUs;
