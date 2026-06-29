import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function WaysToGetInvolved() {
  return (
    <div className="bg-[#FAFAF5] min-h-screen">

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative w-full min-h-[85vh] flex items-center justify-center text-center overflow-hidden bg-[#0a231a]"
        style={{ backgroundImage: "url('/fwd47photos/13.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#0a231a]/60" />
        <div className="relative z-10 px-4 sm:px-8 max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-[#FDD835] font-bold tracking-[0.2em] uppercase text-[12px] sm:text-[13px] mb-4">
            Aanandam Vridhashram — Delhi
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            There Are Many Ways to Give.<br />
            <span className="text-[#FDD835]">Find Yours.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
            className="text-white/85 text-[17px] sm:text-[20px] leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
            Whether you give your time, your money, your talent or your celebration — every form of involvement changes a life at Aanandam.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer" className="bg-[#FDD835] hover:bg-[#F9C800] text-[#0a231a] font-black text-[15px] px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              Celebrate With Elders
            </Link>
            <Link to="/donate" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a231a] font-bold text-[15px] px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
              Donate Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== INTRO: Some Celebrations Change You Forever ===== */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] mb-6 leading-tight">
            Some Celebrations Change You Forever
          </h2>
          <p className="text-gray-700 text-[15.5px] sm:text-[16px] leading-relaxed mb-5 font-medium">
            We live in a world full of celebrations — birthdays at restaurants, anniversaries at hotels, Diwali parties with office colleagues. These are lovely. But every once in a while, something in us wants to celebrate differently. More meaningfully. In a way that echoes long after the evening ends.
          </p>
          <p className="text-gray-700 text-[15.5px] sm:text-[16px] leading-relaxed mb-10 font-medium">
            At Aanandam Vridhashram, we have seen it happen again and again: people arrive with a cake, a bag of sweets, or simply their presence — and they leave transformed. Not because anything grand happened. But because they sat beside someone who has nothing left to pretend, and felt genuinely seen and genuinely celebrated in return.
          </p>

          {/* Quote */}
          <div className="bg-[#FFF8E7]/70 border-l-[5px] border-[#FDD835] px-8 py-6 rounded-r-xl mb-10">
            <p className="font-serif italic text-[17px] sm:text-[20px] text-[#2E7D32] leading-relaxed mb-3 font-medium">
              "When 25 grandparents sang happy birthday to my daughter, she looked at me and said: 'Papa, this is the best birthday I've ever had.' She was seven. She understood something that evening that most adults take decades to learn."
            </p>
            <p className="text-gray-500 font-semibold text-[13px]">— A visitor to Aanandam, Delhi</p>
          </div>

          <p className="text-gray-700 text-[15.5px] sm:text-[16px] leading-relaxed font-medium">
            Blessings from the elderly carry a different weight. These are people who have seen life's full arc — joy and loss, love and abandonment. When they place their hand on your head and say <em className="text-[#0a231a] font-semibold">"Khush raho, beta"</em> — it means something. It stays with you.
          </p>
        </div>
      </section>

      {/* ===== SECTION 1: Every Reason to Celebrate ===== */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#2E7D32] mb-4 leading-tight">
          Every Reason to Celebrate Is a Reason to Come
        </h2>
        <p className="text-gray-700 text-[15.5px] sm:text-[16px] leading-relaxed mb-12 max-w-4xl font-medium">
          There is no occasion too big, too small, or too personal to bring to Aanandam. Here are some of the moments our visitors have chosen to celebrate with our elders:
        </p>

        <div className="space-y-10">

          {/* Personal Milestones */}
          <div>
            <p className="text-[#E5A937] font-bold tracking-[0.15em] uppercase text-[11px] mb-4">Personal Milestones & Life Events</p>
            <div className="flex flex-wrap gap-3">
              {["🎂 Birthday — yours, your child's, your parent's", "💍 Wedding Anniversary", "🎓 Graduation & Academic Success",
                "🚀 Promotion, New Job, Business Launch", "🏠 Housewarming (Griha Pravesh)", "🌸 Post-Wedding Blessings",
                "🌿 Recovery After Illness", "⭐ Any Personal Achievement or Milestone", "🔷 Retirement — a new beginning"]
                .map((tag, i) => (
                  <span key={i} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-[13.5px] text-gray-700 font-medium shadow-sm hover:border-[#2E7D32] hover:text-[#2E7D32] transition-colors">{tag}</span>
                ))}
            </div>
          </div>

          {/* In Memory */}
          <div>
            <p className="text-[#E5A937] font-bold tracking-[0.15em] uppercase text-[11px] mb-4">In Memory & In Honour</p>
            <div className="flex flex-wrap gap-3">
              {["🙏 Parents' Birthday or Death Anniversary (Shraddha Tithi)", "🍊 In Memory of a Loved One",
                "💛 Parents' Day, Grandparents' Day", "🎗️ Any remembrance or tribute"]
                .map((tag, i) => (
                  <span key={i} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-[13.5px] text-gray-700 font-medium shadow-sm hover:border-[#2E7D32] hover:text-[#2E7D32] transition-colors">{tag}</span>
                ))}
            </div>
          </div>

          {/* Festivals */}
          <div>
            <p className="text-[#E5A937] font-bold tracking-[0.15em] uppercase text-[11px] mb-4">Festivals & Auspicious Days</p>
            <div className="flex flex-wrap gap-3">
              {["🪔 Diwali", "🎨 Holi", "🧡 Navratri", "🌾 Makar Sankranti", "🌙 Eid", "🎄 Christmas",
                "🎊 New Year", "🌸 Ram Navami, Guru Purnima, Akshaya Tritiya", "🌕 Pitru Paksha & Amavasya",
                "✨ Any auspicious or regional festival"]
                .map((tag, i) => (
                  <span key={i} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-[13.5px] text-gray-700 font-medium shadow-sm hover:border-[#2E7D32] hover:text-[#2E7D32] transition-colors">{tag}</span>
                ))}
            </div>
          </div>

          {/* Corporate */}
          <div>
            <p className="text-[#E5A937] font-bold tracking-[0.15em] uppercase text-[11px] mb-4">Corporate & Group Occasions</p>
            <div className="flex flex-wrap gap-3">
              {["🏢 Corporate Team Outing", "🎭 Cultural Performance", "🎵 Music or Bhajan Session",
                "📷 Photography or Content Visit", "📋 CSR Engagement Day"]
                .map((tag, i) => (
                  <span key={i} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-[13.5px] text-gray-700 font-medium shadow-sm hover:border-[#2E7D32] hover:text-[#2E7D32] transition-colors">{tag}</span>
                ))}
            </div>
          </div>

          {/* No Reason */}
          <div>
            <p className="text-[#E5A937] font-bold tracking-[0.15em] uppercase text-[11px] mb-4">Or Simply — No Reason at All</p>
            <div className="flex flex-wrap gap-3">
              {["❤️ Because you want to", "💜 Because someone you love would have wanted you to",
                "🌟 Because a Sunday spent giving is never wasted"]
                .map((tag, i) => (
                  <span key={i} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-[13.5px] text-gray-700 font-medium shadow-sm hover:border-[#2E7D32] hover:text-[#2E7D32] transition-colors">{tag}</span>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: What You Will Find Here ===== */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] mb-4 leading-tight text-center">
            What You Will Find Here
          </h2>
          <p className="text-gray-700 text-[15.5px] sm:text-[16px] leading-relaxed mb-10 max-w-4xl mx-auto font-medium text-center">
            We won't script your visit. Every experience at Aanandam is different — shaped by who visits, what they bring, and the energy they carry. What we can promise is this:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#FAFAF5] rounded-xl p-8 border border-gray-100 border-l-[4px] border-l-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🙏</div>
              <h4 className="font-serif font-bold text-[19px] text-[#0a231a] mb-3">Blessings That Are Real</h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">When an elder blesses you — especially one who has lived through abandonment — the words carry the full weight of a life fully lived. These are not ceremonial blessings. They come from the heart.</p>
            </div>
            <div className="bg-[#FAFAF5] rounded-xl p-8 border border-gray-100 border-l-[4px] border-l-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">👀</div>
              <h4 className="font-serif font-bold text-[19px] text-[#0a231a] mb-3">A Spark in Their Eyes</h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">Visitors change our elders' days in ways that no meal or medicine can. When someone arrives — especially with joy and intention — you see it: a brightness that returns. Sit with that for a moment.</p>
            </div>
            <div className="bg-[#FAFAF5] rounded-xl p-8 border border-gray-100 border-l-[4px] border-l-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🤗</div>
              <h4 className="font-serif font-bold text-[19px] text-[#0a231a] mb-3">Connection That Surprises You</h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">You may come planning to give. You will leave having received — stories, warmth, a kind of perspective that reshapes how you see your own life and its worries.</p>
            </div>
            <div className="bg-[#FAFAF5] rounded-xl p-8 border border-gray-100 border-l-[4px] border-l-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🌿</div>
              <h4 className="font-serif font-bold text-[19px] text-[#0a231a] mb-3">A Memory That Stays</h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">Celebrations fade. But the memory of sitting beside someone who has nothing and still smiles — that does not leave you. It becomes a part of who you are.</p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-[#FFF8E7]/60 border-l-[6px] border-[#FDD835] p-8 sm:p-10 rounded-r-2xl shadow-sm max-w-4xl">
            <p className="font-serif italic text-[18px] sm:text-[21px] text-[#2E7D32] leading-relaxed font-medium">
              "There is no special protocol here. You come. You sit. You share what you've brought — sweets, a song, your time, your presence. And somehow, in that simplicity, something sacred happens."
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Testimonials ===== */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] mb-10 leading-tight text-center">
          What People Say After Their Visit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { quote: '"I came on my mother\'s death anniversary to pray and give. I didn\'t expect to cry this much — or to smile this much. Both happened. It was exactly what the day needed."', name: '— Priya R., Delhi' },
            { quote: '"Our team of 15 came for a CSR outing. Everyone said it was the most meaningful work event they\'d ever attended. We\'re coming back next month."', name: '— Corporate Team, Gurgaon' },
            { quote: '"My husband and I came on our anniversary with sweets. An 80-year-old held both our hands and said \'Hamesha khush raho.\' We left feeling married in a new way."', name: '— Anniversary visitor, Rohini' },
            { quote: '"I brought my kids for their Diwali celebrations. They haven\'t stopped talking about it. More than any gift or party, this is what they\'ll remember."', name: '— Parent, Pitampura' },
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-8 border border-gray-100 border-t-[4px] border-t-[#0a231a] shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 italic text-[15.5px] leading-relaxed mb-4 font-medium">{t.quote}</p>
              <p className="text-[#0a231a] font-bold text-[14px]">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION 4: Want to Celebrate CTA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#2E7D32] rounded-2xl p-10 sm:p-14 text-center shadow-lg">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-white leading-tight mb-4">
            Want to Celebrate at Aanandam?
          </h2>
          <p className="text-white/80 text-[16px] sm:text-[17px] leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
            No advance booking needed — just your presence, your intention, and whatever you've decided to bring. We'll make it meaningful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/919310105630" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#FDD835] hover:bg-[#F9C800] text-[#0a231a] font-black text-[15px] px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              <FaWhatsapp className="text-xl" /> WhatsApp to Plan Your Visit
            </a>
            <a href="tel:+919310105630"
              className="flex items-center gap-2 text-white/80 hover:text-white font-medium text-[15px] transition-colors">
              <FaPhoneAlt /> +91-9310105630
            </a>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: Can't Visit in Person ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-[#7f0000] rounded-2xl p-10 sm:p-14 shadow-lg">
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-white leading-tight mb-4">
            Can't Visit in Person? Celebrate Anyway — From Wherever You Are
          </h2>
          <p className="text-white/80 text-[15.5px] sm:text-[16px] leading-relaxed max-w-4xl font-medium mb-10">
            Many of our supporters celebrate their special days by making a donation in someone's name, sponsoring a meal, or simply sending a wish with a contribution. The elders receive the same warmth — and you receive the same blessings — regardless of distance.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { amount: '₹750', label: 'Evening tea & snacks' },
              { amount: '₹3,100', label: 'Sponsor a full meal' },
              { amount: '₹6,500', label: 'Support 1 elder / month' },
              { amount: 'Any ₹', label: 'Any amount, any day' },
            ].map((item, i) => (
              <div key={i} className="bg-[#9b0000] rounded-xl p-6 text-center border border-white/20">
                <p className="text-[#FDD835] font-black text-[22px] sm:text-[26px] mb-1">{item.amount}</p>
                <p className="text-white/80 text-[13px] font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Donate Button */}
          <div className="mb-8">
            <Link to="/donate"
              className="block w-full max-w-sm mx-auto text-center border-2 border-[#E65100] text-[#E65100] hover:bg-[#E65100] hover:text-white font-bold text-[15px] px-8 py-4 rounded-full transition-all duration-300 bg-white">
              Donate Online via Razorpay →
            </Link>
          </div>

          {/* Bank Details */}
          <div className="bg-[#6b0000] rounded-xl p-6 text-[14px] text-white/90 font-medium space-y-2 mb-8">
            <p><span className="text-[#FDD835] font-bold">Bank Transfer:</span> Humanify Foundation</p>
            <p>A/C No: <span className="font-bold">0944102100000038</span> | Punjab National Bank</p>
            <p>Branch: Sector-8, Rohini | IFSC: <span className="font-bold">PUNB0094410</span></p>
            <p>UPI / QR: Scan the QR code on our Donate page</p>
            <p className="text-[#FDD835] font-bold">80G Tax Exemption available | Reg: AACTH1344Q25DL02</p>
          </div>

          <p className="text-white/70 text-[14px] italic text-center">
            After donating, WhatsApp your Name, Number, Amount, Date & occasion to +91-9310105630 — we'll share a photo or update from the celebration with you.
          </p>
        </div>
      </section>

      {/* ===== SECTION 6: Hindi SEO Section ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-[#FFF4E6] border-l-[6px] border-[#E65100] rounded-r-2xl p-8 sm:p-10 shadow-sm relative">
          <span className="absolute top-6 right-6 text-[#E65100]/60 text-[12px] font-bold">हिंदी</span>
          <h2 className="text-[#E65100] font-bold text-xl sm:text-2xl mb-4 font-serif italic">
            बुजुर्गों के साथ मनाएँ अपना जश्न
          </h2>
          <div className="text-[#0a231a] text-[15px] sm:text-[16px] leading-relaxed space-y-4 mb-8 italic font-medium">
            <p>जन्मदिन, सालगिरह, प्रमोशन, नई नौकरी, गृह प्रवेश, बच्चों की सफलता, माँ-बाप की पुण्यतिथि, श्राद्ध तिथि, होली, दीवाली, नवरात्रि, ईद, क्रिसमस, नया साल — या बस ऐसे ही।</p>
            <p><span className="text-[#2E7D32] font-bold">आनंदम् वृद्धाश्रम आइए। बुजुर्गों के साथ बैठिए। उनकी दुआएँ लीजिए।</span></p>
            <p>जब कोई 80 साल का बुजुर्ग आपके सिर पर हाथ रखकर कहता है — <span className="text-[#b71c1c] font-bold">"खुश रहो, बेटा"</span> — वो दुआ किसी भी पाँचसितारा होटल में नहीं मिलती।</p>
            <p>जो नहीं आ सकते, वो दान करके भी इस खुशी में शामिल हो सकते हैं।</p>
          </div>
          <p className="text-[#b71c1c] font-bold text-[16px] italic mb-8 flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1"><FaPhoneAlt className="text-sm" /> +91-9310105630</span>
            <span className="text-gray-400">|</span>
            <span>+91-9891139833</span>
          </p>
          <div className="flex flex-wrap gap-3">
            {['जन्मदिन वृद्धाश्रम', 'बुजुर्गों के साथ जश्न', 'सालगिरह पुण्य भाव', 'श्राद्ध तिथि दान',
              'पुण्यतिथि बुजुर्ग सेवा', 'दीवाली वृद्धाश्रम', 'होली बुजुर्गों के साथ',
              'आनंदम् वृद्धाश्रम', 'कॉर्पोरेट टीम आउटिंग दिल्ली', 'बुजुर्गों की दुआएँ'].map((tag, i) => (
              <span key={i} className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">{tag}</span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
