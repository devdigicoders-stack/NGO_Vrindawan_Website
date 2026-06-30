import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function DreamCampus() {
  const [selectedAmt, setSelectedAmt] = useState(1);

  const features = [
    { icon: '🛏️', title: 'Spacious, Ventilated Rooms', desc: 'Proper space to walk within each room — not just a bed against a wall. Natural light, fresh air, dignity in design.' },
    { icon: '🌳', title: 'Open Walking & Recreation Areas', desc: 'Gardens and pathways for daily walks, fresh air and gentle movement — essential for physical and mental wellbeing.' },
    { icon: '🏛️', title: 'A Dedicated Temple', desc: 'A proper worship space where faith can be practiced fully — not a corner of a room, but a sacred place of its own.' },
    { icon: '🧘', title: 'Separate Meditation & Chanting Hall', desc: 'A quiet, dedicated space for meditation and chanting — away from daily bustle, for deeper concentration and peace.' },
    { icon: '🍽️', title: 'Spacious Community Dining Hall', desc: 'Room for everyone to eat together comfortably — because shared meals are where Aanandam\'s family spirit comes alive.' },
    { icon: '🌸', title: 'Garden & Green Spaces', desc: 'A place to tend plants, sit in sunlight, and feel connected to nature — proven to ease anxiety and lift spirits at any age.' },
    { icon: '🤝', title: 'Visitor & Meeting Areas', desc: 'A welcoming space for families, volunteers, musicians and well-wishers to sit, connect and spend time with residents.' },
    { icon: '🩺', title: 'Medical Room', desc: 'A dedicated space for health check-ups and basic emergency response — supporting (not replacing) hospital care when needed.' },
    { icon: '📦', title: 'Adequate Storage', desc: 'Proper space for rations, supplies and donated goods — so nothing is wasted, and everything is organised with care.' },
    { icon: '🎭', title: 'Community & Activity Hall', desc: 'A space for Oldies Got Talent, festivals, performances and gatherings — where joy is structured into daily life, not just occasional.' },
  ];

  const stats = [
    { value: '100–200', label: 'Elders to be sheltered' },
    { value: '0', label: 'Rent — owned, not rented' },
    { value: '365', label: 'Days of joy, every year' },
    { value: '∞', label: 'Lives that won\'t be turned away', red: true },
  ];

  const amounts = [
    { amount: '₹5,000', label: 'Campus fund contribution' },
    { amount: '₹25,000', label: 'Significant building block' },
    { amount: '₹1,00,000+', label: 'Named donor recognition' },
    { amount: 'Any ₹', label: 'Every rupee counts' },
  ];

  return (
    <div className="bg-[#FAFAF5] min-h-screen">
      {/* ── HERO ── */}
      <PageHero
        title="Our Dream Campus"
        description="A permanent home — where no elder is ever turned away for lack of space."
        hideBreadcrumb={true}
      />

      {/* ══════════════════════════════════════
          SECTION 1 — WHY WE DREAM
      ══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a231a] mb-5 leading-tight">
            Why We Dream of More Than What We Have Today
          </h2>
          <div className="space-y-3 text-gray-600 text-[15px] sm:text-base leading-relaxed max-w-7xl mx-auto">
            <p>
              Aanandam runs on rented land in Karala, Delhi. Every month, a significant portion of donations goes toward rent — money that could instead feed more elders, buy medicines, or bring more joy.
            </p>
            <p>
              Every week, families call with abandoned grandparents who need a home. And every week, we have to say:{' '}
              <em className="text-[#C0392B] font-semibold">"We are full. We have no more beds."</em>
            </p>
            <p>
              Our founder, <strong className="text-[#0a231a]">Sh. Niraj Gera</strong>, carries one vision: <strong className="text-[#0a231a]">a permanent, owned campus where no elder is ever turned away.</strong>
            </p>
          </div>
        </motion.div>

        {/* Founder Quote */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="my-10 border-l-4 border-[#FDD835] pl-6 py-5 bg-yellow-50 rounded-r-2xl shadow-sm max-w-7xl mx-auto"
        >
          <p className="font-serif italic text-[#0a231a] text-base sm:text-lg leading-relaxed font-semibold">
            "We don't just want to shelter elders. We want to build a place where their last years are their happiest — where every morning has meaning, every evening has music, and every soul finds peace."
          </p>
          <p className="mt-3 text-gray-500 text-[13px] font-medium">— Sh. Niraj Gera, Founder & Chairman, Humanify Foundation</p>
        </motion.div>

        {/* Problem / Solution Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-orange-500 text-lg">⚠️</span>
              <h3 className="font-bold text-orange-700 text-sm tracking-widest uppercase">The Problem Today</h3>
            </div>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Rented land. Limited space. Rooms with little room to walk. No dedicated temple or chanting space. No separate medical room. Rising rent that eats into care funds. And every month, elders we cannot accept — because we are full.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-600 text-lg">✅</span>
              <h3 className="font-bold text-green-700 text-sm tracking-widest uppercase">The Solution We Dream Of</h3>
            </div>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              A permanent, owned campus. Spacious, ventilated rooms. Open walking areas. A dedicated temple, meditation hall, garden, visitor space and medical room. Capacity for 100–200 elders. No rent. No "we're full." Just home.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — WHAT WE ENVISION
      ══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 text-center">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a231a] mb-4">
            What We Envision — Built for Body, Mind & Soul
          </h2>
          <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed max-w-3xl mx-auto">
            Sh. Niraj Gera's vision draws from his years as a happiness and spiritual coach: that true elder care must nurture not just survival, but the mind, the emotions, and the spirit equally. Every space in our dream campus reflects that belief.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex gap-4 items-start group"
            >
              <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{f.icon}</span>
              <div>
                <h3 className="font-bold text-[#0a231a] text-[16px] mb-1.5">{f.title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — VISION IN NUMBERS
      ══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8 text-center">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a231a]">Our Vision in Numbers</h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center"
            >
              <div className={`font-serif font-bold text-2xl sm:text-3xl mb-1 ${s.red ? 'text-[#C0392B]' : 'text-[#C0392B]'}`}>{s.value}</div>
              <div className="text-gray-500 text-[12px] font-semibold uppercase tracking-widest leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — COLORED INFO BLOCKS
      ══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-5">
        {/* Location Block */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-[#0a231a] rounded-2xl p-8 sm:p-10 text-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🏡</span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#FDD835]">Why Location Matters — Not Isolated, But Embraced</h2>
          </div>
          <div className="space-y-3 text-white/85 text-[15px] leading-relaxed max-w-4xl">
            <p>
              The dream campus will be located in or near Delhi NCR — accessible by public transport, close to hospitals, and in a place where volunteers, families and well-wishers can visit easily.
            </p>
            <p>
              We envision that it feel like a part of it — a place where neighbours stop by, where volunteers come regularly, where musicians perform regularly, and where the joy of the elders spills generously and openly into the local fabric.
            </p>
          </div>
        </motion.div>

        {/* Community Block */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-2xl p-8 sm:p-10 text-white"
          style={{ background: 'linear-gradient(135deg, #E59400 0%, #D4830A 100%)' }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🎁</span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">A Gift Back to the Community</h2>
          </div>
          <div className="space-y-3 text-white/90 text-[15px] leading-relaxed max-w-4xl">
            <p>
              Our vision extends beyond our own residents. A portion of the dream campus will be dedicated to skill-building and education — for elderly citizens still living independently nearby, for underprivileged children, and for women in the surrounding community.
            </p>
            <p>
              Vocational training, basic literacy, craft skills, and confidence-building sessions — Aanandam's campus will not just be a place of receiving care, but a place that gives back to everyone around it.
            </p>
          </div>
        </motion.div>

        {/* Happiest Old Age Home */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-2xl p-8 sm:p-10 text-white"
          style={{ background: 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)' }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">😊</span>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">The Happiest Old Age Home — A Vision Worth Striving For</h2>
          </div>
          <p className="text-white/90 text-[15px] leading-relaxed max-w-4xl">
            Sh. Niraj Gera is a certified happiness and spiritual coach who has spent his career studying what makes human beings genuinely flourish. His vision for the dream campus is simple but profound: not just to shelter elders, but to make their final chapter the happiest one of all — through yoga, music, meditation, community, nature and purpose, every single day.
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — PHOTO GALLERY
      ══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a231a] mb-3">Glimpses of Aanandam</h2>
          <p className="text-gray-600 text-[15px] sm:text-base max-w-2xl mx-auto leading-relaxed">
            Take a walk through our home. Every smile, every shared meal, and every quiet moment of prayer is a testament to the love that fills these walls.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {[
            { src: '/fwd47photos/1.jpg', alt: 'Elders smiling' },
            { src: '/fwd47photos/2.jpg', alt: 'Elder care' },
            { src: '/fwd47photos/32.jpg', alt: 'Community gathering' },
            { src: '/fwd47photos/31.jpg', alt: 'Happy elder' },
            { src: '/fwd47photos/17.jpg', alt: 'Elders enjoying time' },
            { src: '/fwd47photos/15.jpg', alt: 'Elderly care center' },
            { src: '/fwd47photos/7.jpg', alt: 'Elders activities', hidden: 'hidden md:block' },
            { src: '/fwd47photos/8.jpg', alt: 'Aanandam Campus', hidden: 'hidden lg:block' },
          ].map((img, i) => (
            <motion.div key={i} variants={fadeUp} className={`aspect-square rounded-2xl overflow-hidden shadow-sm group ${img.hidden || ''}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 6 — HOW TO HELP / DONATE
      ══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8 text-center">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a231a] mb-3">
            How You Can Help This Dream Become Real
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-3xl mx-auto">
            This is not a small ask, and we don't pretend otherwise. A permanent campus needs land, construction, and sustained support. But every great home was once just an idea — and every idea needs people willing to believe in it early.
          </p>
        </motion.div>

        {/* Donate Card */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl mb-6"
          style={{ background: 'linear-gradient(135deg, #7B1113 0%, #A93226 60%, #C0392B 100%)' }}
        >
          <div className="p-7 sm:p-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💛</span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#FDD835]">
                Contribute Toward the Dream Campus Fund
              </h3>
            </div>
            <p className="text-white/75 text-[13.5px] mb-6 ml-9">
              Every contribution — large or small — moves us closer to a community-owned campus.
            </p>

            {/* Amount Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {amounts.map((a, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedAmt(i)}
                  className={`flex flex-col items-center justify-center py-3 px-3 rounded-xl border-2 font-bold transition-all duration-200 cursor-pointer
                    ${selectedAmt === i
                      ? 'bg-[#FDD835] border-[#FDD835] text-[#0a231a]'
                      : 'bg-white/10 border-white/20 text-white hover:bg-white/20'}`}
                >
                  <span className="text-lg sm:text-xl">{a.amount}</span>
                  <span className={`text-[11px] mt-0.5 ${selectedAmt === i ? 'text-[#0a231a]/70' : 'text-white/70'}`}>{a.label}</span>
                </button>
              ))}
            </div>

            {/* Donate Button */}
            <a
              href="https://rzp.io/l/aanandam"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-full py-3.5 bg-white text-[#C0392B] font-bold text-base rounded-xl hover:bg-gray-50 transition-colors duration-200 mb-4 shadow"
            >
              Donate to Dream Campus Fund →
            </a>

            {/* Bank Details */}
            <div className="bg-[#0a231a]/60 rounded-xl p-5 space-y-1.5 text-[13px] mb-4">
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">Bank Transfer:</span> Humanify Foundation</p>
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">A/C No:</span> 09441021000000038 | PNB, Sector-8, Rohini | <span className="text-[#FDD835] font-bold">IFSC:</span> PUNB0094410</p>
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">UPI / QR:</span> Scan QR on our Donate page</p>
              <p className="text-white/90"><span className="text-[#FDD835] font-bold">80G Reg:</span> AACTH1344Q25DL02</p>
            </div>

            <div className="bg-white/10 rounded-xl p-4 text-[13px] text-white/80">
              <p>Mention <strong className="text-white">"Dream Campus"</strong> when you WhatsApp your details to <strong className="text-white">+91-9310105630</strong> — so we can track contributions toward this specific vision.</p>
            </div>
          </div>
        </motion.div>

        {/* Land Offer */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-2xl border-2 border-dashed border-[#C0392B]/40 bg-white p-7 sm:p-10 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🌱</span>
            <h3 className="font-serif font-bold text-xl text-[#0a231a]">Do You Have Land or Property to Offer?</h3>
          </div>
          <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed mb-6 max-w-3xl">
            <p>
              If you own land in or near a residential area of Delhi NCR — or know someone who might consider donating, leasing or selling at concessional rates for this cause — please reach out. This single conversation could be the most transformative contribution anyone makes to Aanandam's future.
            </p>
            <p>
              We are equally open to connecting with architects, builders, government land schemes, or philanthropic land trusts who share this vision.
            </p>
          </div>
          <a
            href="https://wa.me/919310105630"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C0392B] text-white font-bold text-[15px] rounded-xl hover:bg-red-700 transition-colors duration-200 shadow"
          >
            🤝 Connect Us With Land or Resources
          </a>
        </motion.div>

        {/* Final Quote */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="border-l-4 border-[#FDD835] pl-6 py-4 bg-yellow-50 rounded-r-2xl shadow-sm"
        >
          <p className="font-serif italic text-[#0a231a] text-base sm:text-lg leading-relaxed">
            "We are not asking you to build the whole house. We are asking you to help us lay one brick. The rest, together, we will build."
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 7 — HINDI SEO
      ══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-[#FFF8EE] border border-[#FDD835]/40 rounded-2xl p-8 sm:p-10 shadow-sm"
        >
          <h2
            className="font-bold text-xl sm:text-2xl text-[#C0392B] mb-3"
            style={{ fontFamily: 'Mukta, sans-serif' }}
          >
            आनंदम का सपनों का आश्रम
          </h2>
          <div className="space-y-3 text-[#5D4037] text-[15px] leading-relaxed mb-6" style={{ fontFamily: 'Mukta, sans-serif' }}>
            <p>
              आज आनंदम किराए की ज़मीन पर चलता है — हर महीने किराए में जाने वाला पैसा वो पैसा है जो बुजुर्गों की सेवा में लग सकता था।
            </p>
            <p>
              <strong>हमारा सपना:</strong> एक स्थायी, अपना परिसर — 100–200 बुजुर्गों के लिए। हवादार कमरे, बगीचा, मंदिर, ध्यान कक्ष, विशाल भोजनालय, मेडिकल रूम — सब कुछ बुजुर्गों के शारीरिक, मानसिक और आध्यात्मिक स्वास्थ्य के लिए।
            </p>
            <p>
              <strong>श्री निराज गेरा जी</strong> — एक हैपीनेस और स्पिरिचुअल कोच — चाहते हैं कि यह दुनिया का सबसे खुशहाल निःशुल्क वृद्धाश्रम बने।
            </p>
            <p>
              <strong>आपके पास ज़मीन है? या आप जानते हैं किसी ऐसे व्यक्ति को? कृपया संपर्क करें।</strong>
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 mb-5" style={{ fontFamily: 'Mukta, sans-serif' }}>
            <span className="text-lg">📞</span>
            <span className="text-[#0a231a] font-bold text-[15px]">
              <a href="tel:+919310105630" className="hover:underline">+91-9310105630</a>
              {' '}|{' '}
              <a href="tel:+919891139833" className="hover:underline">+91-9891139833</a>
            </span>
          </div>

          {/* SEO Chips */}
          <div className="flex flex-wrap gap-2">
            {[
              'सपनों का वृद्धाश्रम',
              'आनंदम NGO',
              'स्थायी वृद्धाश्रम दिल्ली',
              'बड़ा वृद्धाश्रम',
              'संगीत का वृद्धाश्रम',
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
