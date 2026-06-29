import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Globe, MessageCircle } from 'lucide-react';
import PageHero from '../Component/PageHero';

function Facilities() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/fwd47photos/27.jpg",
    "/fwd47photos/28.jpg",
    "/fwd47photos/31.jpg",
    "/fwd47photos/33.jpg",
    "/fwd47photos/34.jpg",
    "/fwd47photos/43.jpg",
    "/fwd47photos/46.jpg",
    "/fwd47photos/47.jpg"
  ];

  const facilitiesList = [
    "साफ, हवादार कमरा — बिस्तर, गद्दा, तकिया और जरूरी सामान के साथ",
    "हर रोज़ तीन बार ताज़ा और पौष्टिक भोजन — नाश्ता, दोपहर का खाना, रात का खाना और चाय",
    "रोज़ सुबह योग, ध्यान और प्रार्थना",
    "शाम को भजन, सत्संग और सामूहिक गतिविधियाँ",
    "त्योहारों का जश्न — होली, दीवाली, नवरात्रि, जन्मदिन और अन्य",
    "बुनियादी चिकित्सा सहायता और स्वास्थ्य मार्गदर्शन",
    "भावनात्मक सहारा, देखभाल और साथ",
    "स्वयंसेवक और दर्शनार्थी हर समय स्वागत योग्य"
  ];

  const whoCanCome = [
    "परिवार द्वारा छोड़ दिए गए हों या उपेक्षित हों",
    "बेघर हों या आर्थिक रूप से कमज़ोर हों",
    "जिनके पास रहने की कोई व्यवस्था न हो",
    "किसी सामाजिक कार्यकर्ता या शुभचिंतक द्वारा भेजे गए हों"
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20 font-sans">
      <PageHero
        title="सुविधाएं (Facilities)"
        description="आनंदम में हम हर बुजुर्ग को एक सुरक्षित, सम्मानजनक और प्यार भरा घर देते हैं।"
        hideBreadcrumb={true}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 mt-16 space-y-20">

        {/* Intro Highlight Box */}
        <motion.div
          className="max-w-5xl mx-auto bg-[#FFF8E1] border border-[#F59E0B] p-8 sm:p-10 rounded-2xl shadow-sm text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#C62828] mb-6">
            क्या आप दिल्ली में किसी बुजुर्ग के लिए निःशुल्क वृद्धाश्रम ढूंढ रहे हैं?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium mb-6">
            <strong>आनंदम वृद्धाश्रम</strong> — कराला गाँव, रोहिणी के पास, दिल्ली — एक ऐसा घर है जहाँ परित्यक्त, उपेक्षित और बेघर बुजुर्गों को मिलता है:
          </p>
          <p className="text-[#2E7D32] font-black text-lg sm:text-xl">
            मुफ्त आश्रम • मुफ्त भोजन • मुफ्त देखभाल • और सबसे बढ़कर — प्यार
          </p>
        </motion.div>

        {/* Image Gallery Grid with Lightbox Support */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden aspect-square shadow-sm cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt="Aanandam Facility" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </motion.div>

        {/* What Is Provided Free */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#2E7D32] mb-8 border-b-2 border-[#2E7D32]/20 pb-4">
            आनंदम में क्या-क्या मिलता है — बिल्कुल निःशुल्क?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
            {facilitiesList.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Who Can Come */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] mb-6">
            कौन आ सकता है आनंदम में?
          </h2>
          <p className="text-gray-700 text-sm sm:text-base font-medium mb-6">
            60 वर्ष या उससे अधिक आयु के बुजुर्ग जो:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
            {whoCanCome.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#FAFAF5] border-l-4 border-[#F59E0B] p-6 rounded-r-xl shadow-sm">
            <p className="text-[#2E7D32] italic font-serif text-lg sm:text-xl leading-relaxed">
              "अगर किसी बुजुर्ग के पास आधार कार्ड नहीं है, कोई दस्तावेज़ नहीं है — तब भी हम उन्हें वापस नहीं भेजेंगे। आनंदम में एकमात्र योग्यता है — <span className="font-bold border-b border-[#2E7D32]">ज़रूरत</span>।"
            </p>
          </div>
        </motion.div>

        {/* Support Request */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#F59E0B] mb-6">
            दान करें — आनंदम को आपके सहयोग की ज़रूरत है
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
            आनंदम पूरी तरह दान पर चलता है। आप जो भी दें — एक वक्त का खाना, एक महीने का राशन, या किसी बुजुर्ग के पूरे महीने का खर्च (₹6500) — वह सीधे उन तक पहुंचता है जिन्हें इसकी सबसे ज़्यादा ज़रूरत है।
          </p>
        </motion.div>

        {/* Contact Box */}
        <motion.div
          className="bg-[#2E7D32] rounded-3xl p-8 sm:p-10 shadow-xl text-white w-full mx-auto overflow-hidden relative max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
              <MapPin className="w-8 h-8" /> पता और संपर्क
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
              पोल नं-25, 513/11, कराला स्टेडियम के पास, ISO सॉलिड जिम के सामने, कराला गाँव (रोहिणी सेक्टर-38 के सामने), दिल्ली - 110081
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-sm sm:text-base font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+919310105630" className="hover:text-white/80 transition-colors">+91-9310105630</a>
              </div>
              <span className="hidden sm:inline text-white/40">|</span>
              <div className="flex items-center gap-2 flex-wrap">
                <Globe className="w-5 h-5 flex-shrink-0" />
                <div className="flex gap-2 flex-wrap">
                  <a href="https://www.vridhashram.in" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">www.vridhashram.in</a>
                  <span className="text-white/40">|</span>
                  <a href="https://www.humanify.in" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">www.humanify.in</a>
                  <span className="text-white/40">|</span>
                  <a href="https://www.nirajgera.com" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">www.nirajgera.com</a>
                </div>
              </div>
              <span className="hidden sm:inline text-white/40">|</span>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp: इसी नंबर पर</span>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Fullscreen Image Modal (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a231a]/95 backdrop-blur-md p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-[#C62828] rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-md transition-colors z-50"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.img
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Facilities;
