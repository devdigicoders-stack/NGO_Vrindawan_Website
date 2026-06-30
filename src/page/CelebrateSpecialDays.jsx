import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';
import { Link } from 'react-router-dom';
import CelebrationGallery from '../Component/CelebrationGallery';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

/* ── Reusable star badge ── */
const Stars = ({ count }) => (
  <span className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? 'text-[#F59E0B]' : 'text-gray-300'}>★</span>
    ))}
  </span>
);

/* ── Calendar day card ── */
const DayCard = ({ name, stars, desc, hindi, accent = '#F59E0B' }) => (
  <motion.div
    variants={fadeUp}
    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col gap-2"
    style={{ borderLeft: `4px solid ${accent}` }}
  >
    <div className="flex items-center justify-between gap-2">
      <h4 className="font-bold text-[#0a231a] text-[15px] leading-snug">{name}</h4>
      <Stars count={stars} />
    </div>
    <p className="text-gray-600 text-[13.5px] leading-relaxed">{desc}</p>
    {hindi && <p className="text-[#C0392B] text-[13px] italic mt-1">{hindi}</p>}
  </motion.div>
);

/* ── Amount button ── */
const AmountBtn = ({ amount, label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center py-3 px-4 rounded-lg border-2 font-bold transition-all duration-200 cursor-pointer
      ${selected
        ? 'bg-[#FDD835] border-[#FDD835] text-[#0a231a]'
        : 'bg-white/10 border-white/20 text-white hover:bg-white/20'}`}
  >
    <span className="text-xl">{amount}</span>
    <span className={`text-[11px] font-medium mt-0.5 ${selected ? 'text-[#0a231a]/70' : 'text-white/70'}`}>{label}</span>
  </button>
);

function CelebrateSpecialDays() {
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
      accent: '#E59400',
    },
    {
      name: 'Pitru Paksha',
      stars: 5,
      desc: 'The 16-day period of ancestor remembrance. Serving elderly people during Pitru Paksha is considered by many families a deeply meaningful way to honour ancestors and earn their blessings. No day is more aligned with Aanandam\'s mission.',
      hindi: 'पितृ पक्ष — पूर्वजों की शांति के लिए बुजुर्गों की सेवा',
      accent: '#E59400',
    },
    {
      name: 'Guru Purnima',
      stars: 5,
      desc: 'The full moon of gratitude — to teachers, to elders, to all who guided us. Serving and feeding elderly people on Guru Purnima is a natural, deeply felt expression of this gratitude.',
      hindi: 'गुरु पूर्णिमा — बुजुर्गों की सेवा ही गुरु दक्षिणा',
      accent: '#E59400',
    },
    {
      name: 'Amavasya (Every Month)',
      stars: 5,
      desc: 'New moon day — one of the most significant for ancestor remembrance, annadaan, and charity. Many families already perform charitable acts on Amavasya. Feeding elders here is a profound expression of that tradition.',
      hindi: 'अमावस्या — पितरों की याद में अन्नदान',
      accent: '#E59400',
    },
  ];

  const monthlyDays = [
    {
      name: 'Purnima (Full Moon)',
      stars: 4,
      desc: 'Associated with peace, spiritual growth and charity. Monthly Purnima fasting and annadaan are widely practiced. Feeding elders on Purnima carries deep merit.',
      hindi: 'पूर्णिमा — शांति और पुण्य का दिन',
      accent: '#7C3AED',
    },
    {
      name: 'Ekadashi (Twice Monthly)',
      stars: 3,
      desc: 'Devotees traditionally perform annadaan and charity on Ekadashi. Donating to elderly on this day is aligned with the spirit of fasting, selflessness and giving.',
      hindi: 'एकादशी — अन्नदान और सेवा का दिन',
      accent: '#7C3AED',
    },
  ];

  const festivalDays = [
    {
      name: 'Diwali',
      stars: 4,
      desc: 'Festival of light and giving. Sponsor clothes, sweets, diyas and a full celebration for our elders. The festival of light becomes most meaningful when it reaches those in the dark.',
      hindi: 'दीवाली — बुजुर्गों के लिए कपड़े, मिठाई और रोशनी',
      accent: '#F59E0B',
    },
    {
      name: 'Navratri',
      stars: 4,
      desc: "Annadaan during Navratri — especially for women residents — carries the blessings of the Divine Mother. Kanya Pujan's spirit extended to every woman elder here.",
      hindi: 'नवरात्रि — देवी माँ की कृपा, बुजुर्ग महिलाओं की सेवा',
      accent: '#EC4899',
    },
    {
      name: 'Makar Sankranti',
      stars: 3,
      desc: 'Traditional day for charity and donation. Til-gur, warm food and winter clothing for elders — a beautiful act on the festival of harvest and gratitude.',
      hindi: 'मकर संक्रांति — दान-पुण्य का पर्व',
      accent: '#F59E0B',
    },
    {
      name: 'Mahashivratri',
      stars: 3,
      desc: 'Night of Shiva — fasting and food donation. Annadaan for elderly people on this night is considered highly meritorious by devotees.',
      hindi: 'महाशिवरात्रि — अन्नदान और पुण्य',
      accent: '#6366F1',
    },
    {
      name: 'Ram Navami & Hanuman Jayanti',
      stars: 3,
      desc: 'Days of charity, annadaan and community service. Sponsoring a full meal for all Aanandam residents on these days is a fitting tribute to the spirit of seva.',
      hindi: 'राम नवमी / हनुमान जयंती — सेवा और अन्नदान',
      accent: '#F97316',
    },
    {
      name: 'Buddha Purnima',
      stars: 3,
      desc: "The Buddha's path was one of compassion and service. Donating to abandoned elders on this day — those most invisible to society — is an act of genuine bodhichitta.",
      hindi: 'बुद्ध पूर्णिमा — करुणा और सेवा',
      accent: '#14B8A6',
    },
    {
      name: 'Kartik Purnima',
      stars: 4,
      desc: 'One of the most auspicious full moons of the Hindu calendar. Charity on Kartik Purnima — especially annadaan — is considered highly blessed.',
      hindi: 'कार्तिक पूर्णिमा — महापुण्य का दिन',
      accent: '#F59E0B',
    },
    {
      name: 'Ganga Dussehra & Devshayani Ekadashi',
      stars: 3,
      desc: 'Days of spiritual merit, purification and charity. Donating to elderly care — to those who have nothing — is a deeply fitting act on these sacred days.',
      hindi: 'गंगा दशहरा / देवशयनी एकादशी — पुण्य दान',
      accent: '#0EA5E9',
    },
    {
      name: 'Sharad Purnima',
      stars: 3,
      desc: 'The full moon of autumn — associated with nourishment and food donation. Sponsoring kheer or a warm meal for elders on this night is a beloved tradition across North India.',
      hindi: 'शरद पूर्णिमा — खीर और अन्नदान',
      accent: '#7C3AED',
    },
    {
      name: 'Dussehra',
      stars: 3,
      desc: 'Victory of good over evil. New beginnings. What better way to mark the day than an act of pure giving — clothing, food, or support — for those most in need.',
      hindi: 'दशहरा — नई शुरुआत, पुण्य का अवसर',
      accent: '#F97316',
    },
    {
      name: 'Christmas & New Year',
      stars: 3,
      desc: 'Giving, compassion and fresh beginnings transcend every tradition. Many of our donors celebrate Christmas and New Year by sponsoring a meal or elder care at Aanandam.',
      hindi: 'क्रिसमस / नया साल — दान और नई उम्मीद',
      accent: '#22C55E',
    },
    {
      name: 'Basant Panchami',
      stars: 3,
      desc: 'Day of knowledge, learning and new seasons. Donating toward elder care or the education programme at Aanandam on this day is a meaningful gesture.',
      hindi: 'बसंत पंचमी — ज्ञान और सेवा का दिन',
      accent: '#EAB308',
    },
  ];

  return (
    <div className="bg-[#FAFAF5] min-h-screen">
      {/* ── HERO ── */}
      <PageHero
        title="Celebrate Special Days"
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
          className="bg-[#0a231a] rounded-2xl p-8 sm:p-10 text-center shadow-xl"
        >
          <p className="font-serif italic text-[#FDD835] text-lg sm:text-xl md:text-2xl leading-relaxed font-semibold">
            "The greatest charity is not just giving food — it is giving dignity, companionship and hope to someone who once gave their life caring for others."
          </p>
          <p className="mt-4 text-white/80 text-base sm:text-lg font-medium" style={{ fontFamily: 'Mukta, sans-serif' }}>
            सबसे बड़ा दान वह है जो किसी अकेले बुजुर्ग को याद दिलाए कि वे अभी भी प्यारे हैं।
          </p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          SECTION 2 — WHY GIVING TO ELDERS
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a231a] mb-6 leading-tight">
            Why Giving to Elders Is Among the Most Sacred Acts
          </h2>

          <div className="space-y-5 text-gray-700 text-[15px] sm:text-base leading-relaxed">
            <p>
              Across Hindu scriptures, across centuries of tradition, one belief holds firm:{' '}
              <strong className="text-[#0a231a]">Matru-Pitru Seva and Vriddha Seva</strong> — serving mothers, fathers and the elderly — is among the{' '}
              <span className="text-[#C0392B] font-semibold">highest forms of dharma</span> a person can practice. It is believed to bring blessings, dissolve karmic debts, and bring inner peace that no ritual alone can provide.
            </p>
            <p>
              The elders at Aanandam Vridhashram are not strangers. They are someone's abandoned parents, someone's forgotten grandparents. Serving them — feeding them, sheltering them, bringing them joy — is, in the truest sense,{' '}
              <strong className="text-[#0a231a]">Pitru Seva. Matru Seva. Annadaan. Vriddha Seva.</strong>
            </p>
            <p>
              On auspicious days, this act carries an even deeper resonance. It honours your ancestors. It honours the elders in your own life who may be gone. And it honours the deepest teachings of every tradition that has ever asked us to be our best selves.
            </p>
          </div>

          {/* Inner blockquote */}
          <div className="mt-8 border-l-4 border-[#FDD835] pl-5 py-3 bg-yellow-50 rounded-r-xl">
            <p className="font-serif italic text-[#0a231a] text-base sm:text-lg font-semibold">
              "Serving elders is serving the divine in its most human form. There is no puja more complete."
            </p>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          SECTION 3 — DONATE (ANY DAY)
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl"
          style={{ background: 'linear-gradient(135deg, #7B1113 0%, #A93226 60%, #C0392B 100%)' }}
        >
          <div className="p-7 sm:p-10">
            {/* Heading */}
            <div className="flex items-start gap-3 mb-2">
              <span className="text-2xl">🪔</span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#FDD835] leading-snug">
                Donate Today — Any Day Is Auspicious When the Heart Is Ready
              </h2>
            </div>
            <p className="text-white/75 text-[13.5px] mb-6 ml-9">
              Choose your amount. Pay via UPI, bank transfer or Razorpay. After paying, WhatsApp your details to receive your receipt and 80G certificate.
            </p>

            {/* Amount Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {amounts1.map((a, i) => (
                <AmountBtn key={i} {...a} selected={selectedAmt1 === i} onClick={() => setSelectedAmt1(i)} />
              ))}
            </div>

            {/* Razorpay Button */}
            <a
              href="https://rzp.io/l/aanandam"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-full py-3.5 bg-white text-[#C0392B] font-bold text-base rounded-lg hover:bg-gray-50 transition-colors duration-200 mb-4 shadow"
            >
              Donate via Razorpay →
            </a>

            {/* Bank Details */}
            <div className="bg-[#0a231a]/60 rounded-xl p-5 space-y-1.5 text-[13px] mb-4">
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">Bank Transfer / NEFT:</span> Humanify Foundation</p>
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">A/C:</span> 09441021000000038 | PNB, Sector-8, Rohini | <span className="text-[#FDD835] font-bold">IFSC:</span> PUNB0094410</p>
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">UPI / QR Code:</span> Scan QR on our Donate page | UPI ID: [Add here]</p>
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">80G Reg:</span> AACTH1344Q25DL02 — Cash over ₹2,000 not eligible for 80G</p>
            </div>

            {/* WhatsApp Info */}
            <div className="bg-white/10 rounded-xl p-4 text-[13px] text-white/80 space-y-1 mb-4">
              <p>After donating, WhatsApp: <strong className="text-white">+91-9310105630</strong> | +91-9891139833</p>
              <p>Send: Name · Number · Email · Address · Amount · Date · PAN (for 80G certificate)</p>
            </div>

            <p className="text-white/55 text-[12px] leading-relaxed">
              As per Section 80G of the Income Tax Act, cash donations exceeding ₹2,000 are not eligible for tax deduction. Please donate via UPI, bank transfer, cheque or online payment.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          SECTION 4 — HINDU CALENDAR OF SEVA
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">

        {/* Section Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🗓️</span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a231a]">
              Sacred Days to Give — The Hindu Calendar of Seva
            </h2>
          </div>
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-3xl">
            Every tradition has its seasons of giving. These are the days when donation to elderly, annadaan and vriddha seva carry the deepest spiritual meaning — according to age-old Hindu scriptures and beliefs observed across generations.
          </p>
        </motion.div>

        {/* ── Most Auspicious ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-3">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xl">⭐</span>
            <h3 className="font-bold text-[#0a231a] text-lg sm:text-xl">Most Auspicious — Highest Spiritual Merit</h3>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {highestDays.map((d, i) => <DayCard key={i} {...d} />)}
        </motion.div>

        {/* ── Monthly ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-3">
          <div className="inline-flex items-center gap-2 bg-[#FDD835] px-4 py-1.5 rounded-full mb-5">
            <h3 className="font-bold text-[#0a231a] text-base sm:text-lg">Monthly Sacred Days</h3>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {monthlyDays.map((d, i) => <DayCard key={i} {...d} />)}
        </motion.div>

        {/* ── Annual Festivals ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-3">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xl">🎉</span>
            <h3 className="font-bold text-[#0a231a] text-lg sm:text-xl">Annual Festivals — Each With Its Own Spirit of Giving</h3>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {festivalDays.map((d, i) => <DayCard key={i} {...d} />)}
        </motion.div>

        {/* Calendar CTA Strip */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FDD835] rounded-2xl px-6 py-5"
        >
          <p className="font-semibold text-[#0a231a] text-base">
            🪔 An auspicious day is coming. Make it count.
          </p>
          <Link
            to="/donate"
            className="whitespace-nowrap px-7 py-3 bg-[#0a231a] text-white font-bold text-[15px] rounded-lg hover:bg-green-800 transition-colors duration-200 shadow"
          >
            Donate Now →
          </Link>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          SECTION 5 — DONATE (IN HONOUR)
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl"
          style={{ background: 'linear-gradient(135deg, #7B1113 0%, #A93226 60%, #C0392B 100%)' }}
        >
          <div className="p-7 sm:p-10">
            {/* Heading */}
            <div className="flex items-start gap-3 mb-2">
              <span className="text-2xl">🌕</span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#FDD835] leading-snug">
                Donate Today — In Honour of the Day. In Memory of Those You Love
              </h2>
            </div>
            <p className="text-white/75 text-[13.5px] mb-6 ml-9">
              Whether it is Pitru Paksha, Diwali, your mother's birthday or just a Tuesday — every rupee you give feeds an abandoned elder, shelters them, and ensures they are not alone. This is the greatest mitzvah. This is the highest seva.
            </p>

            {/* Amount Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {amounts2.map((a, i) => (
                <AmountBtn key={i} {...a} selected={selectedAmt2 === i} onClick={() => setSelectedAmt2(i)} />
              ))}
            </div>

            {/* Donate Buttons */}
            <div className="space-y-3 mb-5">
              <a
                href="https://rzp.io/l/aanandam"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-full py-3.5 bg-white text-[#C0392B] font-bold text-base rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow"
              >
                🪔 Donate via Razorpay →
              </a>
              <a
                href="https://rzp.io/l/aanandam-monthly"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-full py-3.5 bg-[#16A34A] text-white font-bold text-base rounded-lg hover:bg-green-700 transition-colors duration-200 shadow"
              >
                🗓️ Set Up Monthly Giving (Auto)
              </a>
            </div>

            {/* Bank Details */}
            <div className="bg-[#0a231a]/60 rounded-xl p-5 space-y-1.5 text-[13px] mb-4">
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">Direct Bank Transfer:</span> Humanify Foundation</p>
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">A/C No:</span> 09441021000000038 | Punjab National Bank, Sector-8, Rohini</p>
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">IFSC:</span> PUNB0094410 | <span className="text-[#FDD835] font-bold">MICR:</span> 110024600</p>
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">UPI / QR:</span> Scan QR code on our main Donate page</p>
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">80G Tax Exemption:</span> Reg. No. AACTH1344Q25DL02</p>
            </div>

            {/* WhatsApp Info */}
            <div className="bg-white/10 rounded-xl p-4 text-[13px] text-white/80 space-y-1 mb-4">
              <p>After donating, WhatsApp <strong className="text-white">+91-9310105630</strong> or +91-9891139833:</p>
              <p>Name · WhatsApp No · Email · Address · Amount · Date · PAN (for 80G)</p>
              <p>Email: <strong className="text-white">info@vridhashram.in</strong></p>
            </div>

            <p className="text-white/55 text-[12px] leading-relaxed">
              Important: Cash donations exceeding ₹2,000 are not eligible for 80G income tax deduction under Section 80G of the IT Act, 1961.
            </p>
          </div>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-8 border-l-4 border-[#FDD835] pl-6 py-4 bg-yellow-50 rounded-r-2xl shadow-sm"
        >
          <p className="font-serif italic text-[#0a231a] text-base sm:text-lg leading-relaxed">
            'Donate to old age home. Donate in memory of your parents. Donate on Akshaya Tritiya or Pitru Paksha. Sponsor meals for senior citizens. Support abandoned elderly. However you frame it — the act is the same: a human being choosing not to look away.'
          </p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          SECTION 6 — HINDI SEO SECTION
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-[#FFF8EE] border border-[#FDD835]/40 rounded-2xl p-8 sm:p-10 shadow-sm"
        >
          {/* Heading */}
          <h2
            className="font-bold text-xl sm:text-2xl text-[#C0392B] mb-3 leading-snug"
            style={{ fontFamily: 'Mukta, sans-serif' }}
          >
            शुभ दिन पर दान — बुजुर्गों की सेवा ही सबसे बड़ा पुण्य
          </h2>

          {/* Intro */}
          <p
            className="text-[#5D4037] text-[15px] leading-relaxed mb-6"
            style={{ fontFamily: 'Mukta, sans-serif' }}
          >
            हिंदू शास्त्रों और परंपराओं के अनुसार, <strong>वृद्ध सेवा और मातृ-पितृ सेवा</strong> सबसे बड़े पुण्य कामों में से एक है।
          </p>

          {/* Auspicious Days List */}
          <ul className="space-y-3 mb-8" style={{ fontFamily: 'Mukta, sans-serif' }}>
            {[
              { day: 'अक्षय तृतीया पर दान', desc: 'अनंत पुण्य' },
              { day: 'पितृ पक्ष में बुजुर्गों की सेवा', desc: 'पूर्वजों को श्रद्धांजलि' },
              { day: 'अमावस्या पर अन्नदान', desc: 'पितरों की शांति' },
              { day: 'गुरु पूर्णिमा पर सेवा', desc: 'गुरु दक्षिणा का सर्वश्रेष्ठ रूप' },
              { day: 'दीवाली, नवरात्रि, महाशिवरात्रि', desc: 'हर त्योहार सेवा का अवसर है' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[15px]">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#C0392B] flex-shrink-0"></span>
                <span>
                  <span className="font-bold text-[#C0392B] italic">{item.day}</span>
                  <span className="text-[#5D4037]"> — {item.desc}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="border-t border-[#FDD835]/50 mb-6"></div>

          {/* Donation Info */}
          <div className="space-y-2 mb-7" style={{ fontFamily: 'Mukta, sans-serif' }}>
            <p className="text-[#5D4037] text-[14.5px]">
              <strong className="text-[#0a231a]">आनंदम वृद्धाश्रम से दान करें</strong> —
              UPI, <strong>Bank Transfer</strong> या <strong>Razorpay</strong> से।
            </p>
            <p className="text-[#5D4037] text-[14.5px]">
              दान के बाद WhatsApp करें:{' '}
              <a href="tel:+919310105630" className="text-[#C0392B] font-bold hover:underline">+91-9310105630</a>{' '}
              /{' '}
              <a href="tel:+919891139833" className="text-[#C0392B] font-bold hover:underline">+91-9891139833</a>
            </p>
            <p className="text-[#5D4037] text-[14.5px]">
              80G पंजीकरण:{' '}
              <strong className="text-[#0a231a]">AACTH1344Q25DL02</strong>{' '}
              | ₹2,000 से अधिक नकद दान 80G के लिए अमान्य।
            </p>
          </div>

          {/* SEO Tag Chips */}
          <div className="flex flex-wrap gap-2">
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
                className="px-3 py-1.5 bg-[#C0392B] text-white text-[12.5px] font-medium rounded-full"
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

export default CelebrateSpecialDays;
