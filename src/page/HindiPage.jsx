import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HindiPage() {
  return (
    <div className="bg-[#FAFAF5] min-h-screen">

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative w-full min-h-[85vh] flex items-center justify-center text-center overflow-hidden bg-[#0a231a]"
        style={{ backgroundImage: "url('/fwd47photos/11.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0a231a]/65" />

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-8 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -20 }}    
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#FDD835] font-bold tracking-[0.2em] uppercase text-[12px] sm:text-[13px] mb-4"
          >
            आनंदम् वृद्धाश्रम — दिल्ली
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            दिल्ली में निःशुल्क वृद्धाश्रम
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-white/85 text-[17px] sm:text-[20px] leading-relaxed mb-4 max-w-3xl mx-auto font-medium"
          >
            जहाँ परित्यक्त, उपेक्षित और बेघर बुजुर्गों को मिलता है — प्यार, सम्मान और एक सच्चा परिवार।
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[#FDD835] font-bold text-[16px] sm:text-[18px] mb-10 italic"
          >
            100% निःशुल्क • कोई प्रवेश शुल्क नहीं • कोई मासिक किराया नहीं
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/admission"
              className="bg-[#FDD835] hover:bg-[#F9C800] text-[#0a231a] font-black text-[15px] px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              प्रवेश के लिए संपर्क करें
            </Link>
            <Link
              to="/donate"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a231a] font-bold text-[15px] px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              दान करें — 80G छूट उपलब्ध
            </Link>
          </motion.div>
        </div>

      </section>

      {/* ===== PAGE CONTENT ===== */}

      {/* Section 1: Intro — Full Width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0">
        <div className="bg-[#FFF4E6] border-l-[6px] border-[#E65100] rounded-r-2xl p-10 sm:p-14 shadow-sm relative">
          <span className="absolute top-6 right-6 text-[#E65100]/60 text-[12px] font-bold">हिंदी</span>
          <h1 className="text-[#E65100] font-bold text-2xl sm:text-3xl lg:text-4xl mb-5 font-serif italic">
            दिल्ली में निःशुल्क वृद्धाश्रम की तलाश है?
          </h1>
          <p className="text-[#0a231a] text-[16px] sm:text-[17px] lg:text-[18px] leading-relaxed mb-6 font-medium italic max-w-5xl">
            <span className="text-[#b71c1c] font-bold">आनंदम् वृद्धाश्रम</span> — करला गाँव, रोहिणी और पीतमपुरा के पास, दिल्ली — एक ऐसा घर है जहाँ परित्यक्त, उपेक्षित और बेघर बुजुर्गों को मिलता है प्यार, सम्मान और एक सच्चा परिवार।
          </p>
          <p className="text-[#b71c1c] font-bold text-[17px] sm:text-[20px] italic">
            100% निःशुल्क। कोई प्रवेश शुल्क नहीं। कोई मासिक किराया नहीं।
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section 2: Kya milta hai */}
        <div>
          <h2 className="text-[#2E7D32] font-bold text-2xl sm:text-3xl mb-8 font-serif italic">
            आनंदम् में क्या मिलता है — बिल्कुल मुफ्त?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-t-[4px] border-t-[#2E7D32]">
              <h3 className="font-bold text-[18px] text-[#0a231a] mb-3 flex items-center gap-2 italic"><span className="text-2xl not-italic">🏡</span> रहना</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed italic">साफ कमरा, बिस्तर, गद्दा और जरुरी सामान — बिल्कुल मुफ्त</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-t-[4px] border-t-[#E5A937]">
              <h3 className="font-bold text-[18px] text-[#0a231a] mb-3 flex items-center gap-2 italic"><span className="text-2xl not-italic">🍲</span> खाना</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed italic">तीन वक्त का ताज़ा भोजन + सुबह-शाम चाय और बिस्किट/रस्क</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-t-[4px] border-t-[#2E7D32]">
              <h3 className="font-bold text-[18px] text-[#0a231a] mb-3 flex items-center gap-2 italic"><span className="text-2xl not-italic">🧘</span> योग</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed italic">नियमित योग सत्र, ध्यान और खुशी के कार्यक्रम</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-t-[4px] border-t-[#E5A937]">
              <h3 className="font-bold text-[18px] text-[#0a231a] mb-3 flex items-center gap-2 italic"><span className="text-2xl not-italic">🎵</span> भजन</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed italic">रोज़ाना भजन, सत्संग और आध्यात्मिक चर्चाएँ</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-t-[4px] border-t-[#2E7D32]">
              <h3 className="font-bold text-[18px] text-[#0a231a] mb-3 flex items-center gap-2 italic"><span className="text-2xl not-italic">🎉</span> त्योहार</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed italic">होली, दीवाली, नवरात्रि, जन्मदिन — हर उत्सव पूरे दिल से</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-t-[4px] border-t-[#E5A937]">
              <h3 className="font-bold text-[18px] text-[#0a231a] mb-3 flex items-center gap-2 italic"><span className="text-2xl not-italic">🕉️</span> यात्राएँ</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed italic">वृंदावन, मंदिर और बाहरी यात्राएँ — क्योंकि जीवन चलता रहता है</p>
            </div>
          </div>
        </div>

        {/* Section 3: Kaun aa sakta hai */}
        <div className="bg-[#FFF4E6] border-l-[6px] border-[#E65100] rounded-r-2xl p-8 sm:p-10 shadow-sm relative">
          <span className="absolute top-6 right-6 text-[#E65100]/60 text-[12px] font-bold">हिंदी</span>
          <h2 className="text-[#b71c1c] font-bold text-xl sm:text-2xl mb-6 font-serif italic">
            कौन आ सकता है आनंदम् में?
          </h2>
          <ul className="space-y-4 text-[#0a231a] font-bold text-[15px] sm:text-[16px] mb-8 italic">
            <li className="flex gap-3"><span>✅</span><span>60 वर्ष या उससे अधिक आयु के बुजुर्ग</span></li>
            <li className="flex gap-3"><span>✅</span><span>जो परिवार द्वारा छोड़ दिए गए हों या उपेक्षित हों</span></li>
            <li className="flex gap-3"><span>✅</span><span>बेघर बुजुर्ग या आर्थिक रूप से कमज़ोर वरिष्ठ नागरिक</span></li>
            <li className="flex gap-3"><span>✅</span><span>जिनके पास आधार कार्ड नहीं है — <span className="text-[#E65100]">तब भी हम मना नहीं करेंगे</span></span></li>
            <li className="flex gap-3"><span>✅</span><span>जो समाजसेवी, पुलिस, अस्पताल या किसी शुभचिंतक द्वारा भेजे गए हों</span></li>
          </ul>
          <p className="text-[#0a231a] font-medium text-[15px] italic">
            <span className="text-[#b71c1c] font-bold">📌 एक बात:</span> अभी हम पूरी तरह बिस्तर पर रहने वाले या गहन देखभाल की जरुरत वाले बुजुर्गों को प्रवेश देने में सक्षम नहीं हैं। हम इस दिशा में काम कर रहे हैं।
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">वृद्धाश्रम में प्रवेश</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">60 वर्ष बुजुर्ग आश्रम</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">परित्यक्त बुजुर्ग दिल्ली</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">बेघर वृद्ध दिल्ली</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">माँ बाप के लिए आश्रम</span>
          </div>
        </div>

        {/* Section 4: Story */}
        <div className="bg-[#FFF4E6] border-l-[6px] border-[#E65100] rounded-r-2xl p-8 sm:p-10 shadow-sm relative">
          <span className="absolute top-6 right-6 text-[#E65100]/60 text-[12px] font-bold">हिंदी</span>
          <h2 className="text-[#E65100] font-bold text-xl sm:text-2xl mb-6 font-serif italic">
            आनंदम् की कहानी — Oldies Got Talent से जन्मा एक सपना
          </h2>
          <div className="text-[#0a231a] text-[15.5px] leading-relaxed space-y-6 font-medium italic">
            <p>
              हमारे संस्थापक <span className="text-[#E65100] font-bold">निराज गेरा जी</span> कई वर्षों तक दिल्ली के विभिन्न वृद्धाश्रमों में जाते थे और हर साल एक कार्यक्रम आयोजित करते — "Oldies Got Talent"। इसमें बुजुर्ग गाते, नाचते, कविता सुनाते और रैम्प वॉक करते।
            </p>
            <p>
              तीन महीने की तैयारी में जो बदलाव आता था — वह किसी दवाई से नहीं आ सकता था। बुजुर्गों के चेहरे पर जो खुशी होती थी — उसे देखकर निराज जी ने सोचा:
            </p>
            <p className="text-[#b71c1c] font-bold text-[18px]">
              "क्यों न ऐसा घर बनाया जाए जहाँ यह खुशी हर रोज़ हो?"
            </p>
            <p>
              और इस तरह <span className="text-[#b71c1c] font-bold">आनंदम् वृद्धाश्रम</span> का जन्म हुआ।
            </p>
          </div>
        </div>

        {/* Section 5: Donate */}
        <div className="bg-[#FFF4E6] border-l-[6px] border-[#E65100] rounded-r-2xl p-8 sm:p-10 shadow-sm relative">
          <span className="absolute top-6 right-6 text-[#E65100]/60 text-[12px] font-bold">हिंदी</span>
          <h2 className="text-[#b71c1c] font-bold text-xl sm:text-2xl mb-6 font-serif italic">
            दान करें — एक बुजुर्ग की मुस्कान का कारण बनें
          </h2>
          
          <ul className="space-y-4 text-[#0a231a] font-bold text-[15px] sm:text-[16px] mb-8 italic">
            <li className="flex gap-3 items-center"><span className="text-xl not-italic">💛</span><span><span className="text-[#E65100]">एकमुश्त दान</span> — जितना दिल चाहे</span></li>
            <li className="flex gap-3 items-center"><span className="text-xl not-italic">🍲</span><span><span className="text-[#E65100]">भोजन प्रायोजित करें</span> — ₹3,100 में सभी निवासियों का एक दोपहर या रात का खाना</span></li>
            <li className="flex gap-3 items-center"><span className="text-xl not-italic">👴</span><span><span className="text-[#E65100]">एक बुजुर्ग को सहारा दें</span> — ₹6,500/माह में एक बुजुर्ग की पूरी देखभाल</span></li>
            <li className="flex gap-3 items-center"><span className="text-xl not-italic">🧾</span><span><span className="text-[#E65100]">मासिक दान</span> — कोई भी निश्चित राशि, हर महीने अपने आप कटेगी</span></li>
          </ul>

          <p className="text-[#E65100] font-bold italic text-[16px] mb-10">
            80G टैक्स छूट उपलब्ध है।
          </p>

          <div className="space-y-3 mb-10">
            <p className="text-[#b71c1c] font-bold text-[16px] italic flex items-center gap-2">
              <span className="not-italic">📞</span> +91-9310105630 <span className="text-gray-400 mx-1">|</span> <span className="not-italic text-[#0a231a]">🌐</span> <span className="text-[#0a231a]">www.vridhashram.in</span>
            </p>
            <p className="text-[#0a231a] font-bold text-[15px] italic flex items-start gap-2">
              <span className="not-italic text-[#b71c1c]">📍</span> 513/11, उत्सव विहार, करला गाँव, रोहिणी सेक्टर-38 के सामने, दिल्ली 110081
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm">वृद्धाश्रम में दान दिल्ली</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm">बुजुर्ग भोजन प्रायोजन</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm">₹6500 एक बुजुर्ग</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm">मासिक दान NGO</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm">80G टैक्स छूट दान</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm">वृद्धाश्रम में दान कैसे करें</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm">UPI दान वृद्धाश्रम</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm">vridhashram.in</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm">आनंदम् वृद्धाश्रम दिल्ली</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm">निःशुल्क वृद्धाश्रम</span>
          </div>
        </div>

      </div>
    </div>
  );
}
