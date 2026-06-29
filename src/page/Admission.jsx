import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';

function Admission() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="Admission"
        description="A home for those who have nowhere else to go. We are here to support, care, and love."
        hideBreadcrumb={true}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        
        {/* Intro Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <p className="text-gray-700 text-[17px] leading-relaxed mb-6">
            Aanandam Vridhashram — a Humanify Foundation initiative — is a free old age home in Karala Village, Delhi, near Rohini. We exist for senior citizens who have been abandoned, neglected, or left without family support. Every service here — shelter, food, daily care, yoga sessions, bhajans — is provided at absolutely no cost.
          </p>

          <div className="bg-[#FFF8E1] border-l-4 border-[#E65100] p-6 sm:p-8 rounded-r-xl shadow-sm">
            <p className="text-[#C62828] text-[18px] sm:text-[20px] font-serif italic leading-relaxed">
              आनंदम् वृद्धाश्रम — एक <strong className="font-black">100% निःशुल्क</strong> घर है उन बुजुर्गों के लिए जिन्हें परिवार ने अकेला छोड़ दिया। यहाँ <strong className="font-black">न कोई प्रवेश शुल्क है, न मासिक किराया।</strong> रहना, खाना, देखभाल — सब मुफ्त।
            </p>
          </div>
        </motion.div>

        {/* Two Column Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B5E20] mb-8">
            Who Can Be Admitted <span className="text-[#2E7D32]">/</span> कौन आ सकता है?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* We Welcome Box */}
            <div className="bg-[#E8F5E9] border border-[#2E7D32]/30 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-[#1B5E20] font-bold text-xl mb-6 flex items-center gap-2">
                ✅ We Welcome / हम स्वागत करते हैं
              </h3>
              
              <ul className="space-y-4 text-[#1B5E20] text-[15.5px]">
                <li className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <div>
                    <p>Senior citizens aged <strong className="font-bold">60 years and above</strong></p>
                    <p className="text-sm mt-0.5"><strong className="font-bold">60 वर्ष या उससे अधिक</strong> के बुजुर्ग</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <div>
                    <p>Abandoned or neglected by family</p>
                    <p className="text-sm mt-0.5">परिवार द्वारा <strong className="font-bold">परित्यक्त या उपेक्षित</strong></p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <div>
                    <p>Homeless elders with no support</p>
                    <p className="text-sm mt-0.5"><strong className="font-bold">बेघर या आर्थिक रूप से कमज़ोर</strong> वरिष्ठ नागरिक</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <div>
                    <p>Those referred by police, hospital, social worker or concerned individual</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">✓</span>
                  <div>
                    <p>Physically &amp; mentally capable of daily self-care</p>
                    <p className="text-sm mt-0.5"><strong className="font-bold">शारीरिक व मानसिक रूप से स्वस्थ</strong> (रोज़मर्रा के काम खुद कर सकें)</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Limitations Box */}
            <div className="bg-[#FFF3E0] border border-[#E65100]/30 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col">
              <h3 className="text-[#E65100] font-bold text-xl mb-6 flex items-center gap-2">
                ⚠️ Current Limitations / अभी सीमाएँ
              </h3>
              
              <ul className="space-y-4 text-[#E65100] text-[15.5px] flex-grow">
                <li className="flex items-start gap-3">
                  <span className="mt-1">—</span>
                  <div>
                    <p>Fully bedridden elders needing round-the-clock attendants</p>
                    <p className="text-sm mt-0.5">पूरी तरह बिस्तर पर रहने वाले जिन्हें <strong className="font-bold">24 घंटे परिचारक</strong> चाहिए</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">—</span>
                  <div>
                    <p>Those with active infectious / contagious diseases</p>
                    <p className="text-sm mt-0.5">(संक्रामक रोग)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">—</span>
                  <div>
                    <p>Severe dementia or acute psychiatric conditions needing intensive care</p>
                    <p className="text-sm mt-0.5">गंभीर मानसिक विकार वाले जिन्हें <strong className="font-bold">विशेष देखभाल</strong> की जरूरत है</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[#E65100]/20 text-[#E65100] italic text-sm">
                <p>We are working to expand capacity and medical support. We deeply wish to serve every elder in need — and we are getting there, one step at a time.</p>
                <p className="mt-2">हम अपनी क्षमता बढ़ाने की दिशा में काम कर रहे हैं।</p>
              </div>
            </div>
            
          </div>
        </motion.div>

        {/* What We Provide Section */}
        <motion.div
          className="pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1B5E20] mb-8">
            What Aanandam Provides — Free <span className="text-[#2E7D32]">/</span> हम क्या देते हैं — मुफ्त
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-[#E8F5E9] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 bg-[#E8F5E9] w-14 h-14 rounded-full flex items-center justify-center">🏡</div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#0a231a] text-[16px] leading-tight">Safe, clean accommodation</h4>
                  <p className="text-gray-500 text-[14px] mt-1.5">bed, mattress, essentials</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-[#C62828] text-[16px] leading-tight">साफ कमरा</h4>
                  <p className="text-[#C62828]/80 text-[14px] mt-1.5 italic">बिस्तर, गद्दा, जरूरी सामान</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E8F5E9] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 bg-[#E8F5E9] w-14 h-14 rounded-full flex items-center justify-center">🍲</div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#0a231a] text-[16px] leading-tight">Three nutritious meals</h4>
                  <p className="text-gray-500 text-[14px] mt-1.5">morning & evening tea with biscuits</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-[#C62828] text-[16px] leading-tight">ताज़ा भोजन + चाय</h4>
                  <p className="text-[#C62828]/80 text-[14px] mt-1.5 italic">सुबह-शाम चाय-बिस्कुट/रस्क</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E8F5E9] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 bg-[#E8F5E9] w-14 h-14 rounded-full flex items-center justify-center">🧘</div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#0a231a] text-[16px] leading-tight">Regular yoga sessions</h4>
                  <p className="text-gray-500 text-[14px] mt-1.5">and happiness programmes</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-[#C62828] text-[16px] leading-tight">योग सत्र</h4>
                  <p className="text-[#C62828]/80 text-[14px] mt-1.5 italic">और खुशी के कार्यक्रम</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#E8F5E9] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 bg-[#E8F5E9] w-14 h-14 rounded-full flex items-center justify-center">🎵</div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#0a231a] text-[16px] leading-tight">Bhajans, satsang</h4>
                  <p className="text-gray-500 text-[14px] mt-1.5">and spiritual gatherings</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-[#C62828] text-[16px] leading-tight">भजन, सत्संग</h4>
                  <p className="text-[#C62828]/80 text-[14px] mt-1.5 italic">और आध्यात्मिक गतिविधियाँ</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-[#E8F5E9] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 bg-[#E8F5E9] w-14 h-14 rounded-full flex items-center justify-center">🎉</div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#0a231a] text-[16px] leading-tight">Festival celebrations</h4>
                  <p className="text-gray-500 text-[14px] mt-1.5">Holi, Diwali, Navratri, Eid...</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-[#C62828] text-[16px] leading-tight">त्योहार और जन्मदिन</h4>
                  <p className="text-[#C62828]/80 text-[14px] mt-1.5 italic">पूरे दिल से</p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-[#E8F5E9] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 bg-[#E8F5E9] w-14 h-14 rounded-full flex items-center justify-center">🕉️</div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#0a231a] text-[16px] leading-tight">Outings</h4>
                  <p className="text-gray-500 text-[14px] mt-1.5">temple visits, Vrindavan, parks</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-[#C62828] text-[16px] leading-tight">वृंदावन, मंदिर</h4>
                  <p className="text-[#C62828]/80 text-[14px] mt-1.5 italic">और बाहरी यात्राएँ</p>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white border border-[#E8F5E9] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 bg-[#E8F5E9] w-14 h-14 rounded-full flex items-center justify-center">🩺</div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#0a231a] text-[16px] leading-tight">Health camps</h4>
                  <p className="text-gray-500 text-[14px] mt-1.5">through volunteer doctor network</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-[#C62828] text-[16px] leading-tight">स्वास्थ्य शिविर</h4>
                  <p className="text-[#C62828]/80 text-[14px] mt-1.5 italic">स्वयंसेवक डॉक्टरों द्वारा</p>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white border border-[#E8F5E9] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 bg-[#E8F5E9] w-14 h-14 rounded-full flex items-center justify-center">💗</div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#0a231a] text-[16px] leading-tight">Emotional care</h4>
                  <p className="text-gray-500 text-[14px] mt-1.5">companionship & a loving community</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-[#C62828] text-[16px] leading-tight">भावनात्मक देखभाल</h4>
                  <p className="text-[#C62828]/80 text-[14px] mt-1.5 italic">एक परिवार जो आपका है</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Documents Required Section */}
        <motion.div
          className="pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1B5E20] mb-4">
            Documents Required <span className="text-[#2E7D32]">/</span> आवश्यक दस्तावेज़
          </h2>
          <p className="text-gray-700 text-[15.5px] leading-relaxed mb-6">
            The following documents are <strong className="font-bold">mandatory</strong> for admission. Please WhatsApp scanned copies or clear photos of these documents to <strong className="font-bold">+91-9310105630</strong> before or at the time of visit.
          </p>

          <div className="bg-[#FFF4E6] border-l-4 border-[#E65100] p-5 sm:p-6 rounded-r-[12px] shadow-sm mb-10">
            <p className="text-[#C62828] text-[16px] italic leading-relaxed">
              प्रवेश के लिए नीचे दिए गए दस्तावेज़ <strong className="font-bold italic">अनिवार्य</strong> हैं। कृपया इनकी फोटो WhatsApp करें: <strong className="font-bold italic">+91-9310105630</strong>
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 pb-6 gap-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">🪪</span>
                <div>
                  <h4 className="font-bold text-gray-800 text-[16px]">Aadhar Card — <span className="italic text-gray-600 font-normal">आधार कार्ड</span></h4>
                  <p className="text-gray-500 text-[14.5px] mt-1">Government-issued identity proof. Mandatory. If lost, we can assist with application.</p>
                </div>
              </div>
              <span className="bg-[#C62828] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shrink-0 shadow-sm">
                Mandatory
              </span>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 pb-6 gap-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">📷</span>
                <div>
                  <h4 className="font-bold text-gray-800 text-[16px]">Recent Photographs (2) — <span className="italic text-gray-600 font-normal">हाल की 2 फोटो</span></h4>
                  <p className="text-gray-500 text-[14.5px] mt-1">Passport-size or clear face photos. Taken within the last 3 months.</p>
                </div>
              </div>
              <span className="bg-[#C62828] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shrink-0 shadow-sm">
                Mandatory
              </span>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 pb-6 gap-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">🤝</span>
                <div>
                  <h4 className="font-bold text-gray-800 text-[16px]">Introduction from a Known Person — <span className="italic text-gray-600 font-normal">किसी परिचित का परिचय पत्र</span></h4>
                  <p className="text-gray-500 text-[14.5px] mt-1 leading-relaxed">A letter or WhatsApp message from a friend, relative, neighbour, social worker or government employee who can vouch for the elder's situation. This helps us understand the background and provide better care.</p>
                </div>
              </div>
              <span className="bg-[#C62828] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shrink-0 shadow-sm">
                Mandatory
              </span>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 pb-6 gap-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">📋</span>
                <div>
                  <h4 className="font-bold text-gray-800 text-[16px]">Medical Records (if any) — <span className="italic text-gray-600 font-normal">चिकित्सा रिकॉर्ड (यदि उपलब्ध हो)</span></h4>
                  <p className="text-gray-500 text-[14.5px] mt-1">Any prescriptions, reports or doctor notes. Helps us provide appropriate care. Not mandatory if unavailable.</p>
                </div>
              </div>
              <span className="text-gray-400 text-[13.5px] italic shrink-0">
                if available
              </span>
            </div>
            
          </div>

          <div className="mt-10 bg-[#F0F7FF] border border-[#90CAF9]/50 rounded-xl p-5 sm:p-6 shadow-sm">
            <p className="text-[#1565C0] text-[15px] leading-relaxed">
              📱 <strong className="font-bold">WhatsApp documents to:</strong> <a href="tel:+919310105630" className="hover:underline font-bold">+91-9310105630</a> — Send Aadhar Card photo, recent photos, and the introduction message. We will guide you for the next step.
            </p>
          </div>

        </motion.div>

        {/* How Admission Works Section */}
        <motion.div
          className="pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1B5E20] mb-4">
            How Admission Works <span className="text-[#2E7D32]">/</span> प्रवेश प्रक्रिया
          </h2>

          <div className="bg-[#FFF4E6] border-l-4 border-[#E65100] p-5 sm:p-6 rounded-r-[12px] shadow-sm mb-10">
            <p className="text-[#C62828] text-[16px] italic leading-relaxed">
              <strong className="font-bold italic">प्रवेश प्रक्रिया बहुत सरल है।</strong> हम समझते हैं कि ऐसे समय में परिवार और बुजुर्ग दोनों बहुत तनाव में होते हैं। हम आपकी हर संभव मदद करेंगे।
            </p>
          </div>

          <div className="space-y-6">
            
            {/* Step 1 */}
            <div className="flex items-start gap-5 border-b border-gray-200 pb-6">
              <div className="w-10 h-10 shrink-0 bg-[#F59E0B] text-white font-bold rounded-full flex items-center justify-center text-lg mt-1 shadow-sm">
                1
              </div>
              <div>
                <p className="text-gray-700 text-[15.5px] leading-relaxed">
                  <strong className="text-[#0a231a] font-bold">WhatsApp or Call Us</strong> — Share the elder's situation briefly. Send Aadhar, photos and introduction on WhatsApp: +91-9310105630 or +91-9891139833.
                </p>
                <p className="text-gray-500 text-[14.5px] mt-1.5 italic">
                  WhatsApp करें या फोन करें — बुजुर्ग की स्थिति बताएँ।
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-5 border-b border-gray-200 pb-6">
              <div className="w-10 h-10 shrink-0 bg-[#F59E0B] text-white font-bold rounded-full flex items-center justify-center text-lg mt-1 shadow-sm">
                2
              </div>
              <div>
                <p className="text-gray-700 text-[15.5px] leading-relaxed">
                  <strong className="text-[#0a231a] font-bold">Brief Discussion</strong> — We understand the elder's needs, health, and background. No judgement. No difficult questions.
                </p>
                <p className="text-gray-500 text-[14.5px] mt-1.5 italic">
                  संक्षिप्त बातचीत — हम समझेंगे, judge नहीं करेंगे।
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-5 border-b border-gray-200 pb-6">
              <div className="w-10 h-10 shrink-0 bg-[#F59E0B] text-white font-bold rounded-full flex items-center justify-center text-lg mt-1 shadow-sm">
                3
              </div>
              <div>
                <p className="text-gray-700 text-[15.5px] leading-relaxed">
                  <strong className="text-[#0a231a] font-bold">Visit Aanandam</strong> — Come see the home. We encourage elders to visit before deciding, so they feel comfortable and settled.
                </p>
                <p className="text-gray-500 text-[14.5px] mt-1.5 italic">
                  आनंदम् देखने आएँ — ताकि बुजुर्ग खुद महसूस करें कि यह उनका घर है।
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-5 border-b border-gray-200 pb-6">
              <div className="w-10 h-10 shrink-0 bg-[#F59E0B] text-white font-bold rounded-full flex items-center justify-center text-lg mt-1 shadow-sm">
                4
              </div>
              <div>
                <p className="text-gray-700 text-[15.5px] leading-relaxed">
                  <strong className="text-[#0a231a] font-bold">Simple Formality</strong> — A short admission form. Verification of documents. Takes less than 30 minutes.
                </p>
                <p className="text-gray-500 text-[14.5px] mt-1.5 italic">
                  सरल औपचारिकता — फॉर्म और दस्तावेज़ जमा।
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start gap-5 border-b border-gray-200 pb-6">
              <div className="w-10 h-10 shrink-0 bg-[#F59E0B] text-white font-bold rounded-full flex items-center justify-center text-lg mt-1 shadow-sm">
                5
              </div>
              <div>
                <p className="text-gray-700 text-[15.5px] leading-relaxed">
                  <strong className="text-[#0a231a] font-bold">Welcome Home</strong> — The elder is welcomed as a member of the Aanandam family. Their place is ready. Their meal is waiting.
                </p>
                <p className="text-gray-500 text-[14.5px] mt-1.5 italic">
                  स्वागत है आनंदम् परिवार में — घर तैयार है, खाना इंतज़ार कर रहा है।
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Availability & Contact Grid */}
        <motion.div
          className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          {/* Box 1: Note on Availability */}
          <div className="bg-[#1B5E20] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-center">
            <h3 className="text-[#FDE047] font-bold text-[17px] mb-4 flex items-center gap-2">
              📌 A Note on Availability <span className="text-white/60 font-normal">/</span> उपलब्धता के बारे में
            </h3>
            
            <div className="space-y-4 text-white/95 text-[14.5px] leading-relaxed">
              <p>
                Admission to Aanandam depends on the availability of beds at the time of enquiry. We are a growing home with limited current capacity — and we deeply regret every time we are unable to accommodate someone in immediate need.
              </p>
              <p>
                We are actively working to expand our capacity — through new donors, infrastructure support and our dream of a larger campus — so that we never have to say no to any abandoned elder who needs us.
              </p>
              <p className="text-[#FDE047] italic pt-2">
                प्रवेश हमारे पास उपलब्ध बिस्तरों पर निर्भर करता है। हम अपनी क्षमता बढ़ाने का प्रयास कर रहे हैं ताकि कोई भी बुजुर्ग हमसे 'नहीं' न सुने।
              </p>
            </div>
          </div>

          {/* Box 2: Reach Us for Admission */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full">
            <div>
              <h3 className="text-[#1B5E20] font-bold text-[17px] mb-6 flex items-center gap-2">
                📞 Reach Us for Admission <span className="text-[#1B5E20]/50 font-normal">/</span> प्रवेश के लिए संपर्क करें
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
                  <span className="text-xl leading-none">📱</span>
                  <p className="text-gray-800 text-[15px]">WhatsApp / Call: <strong className="font-bold">+91-9310105630</strong></p>
                </div>
                <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
                  <span className="text-xl leading-none">📱</span>
                  <p className="text-gray-800 text-[15px]">WhatsApp / Call: <strong className="font-bold">+91-9891139833</strong></p>
                </div>
                <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
                  <span className="text-xl leading-none">✉️</span>
                  <p className="text-gray-800 text-[15px]">info@vridhashram.in</p>
                </div>
                <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
                  <span className="text-xl leading-none mt-0.5">📍</span>
                  <p className="text-gray-800 text-[15px] leading-snug">513/11, Utsav Vihar, Karala Village, near Rohini Sec-38, Delhi 110081</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/919310105630" target="_blank" rel="noreferrer" className="mt-6 block w-full bg-[#C62828] hover:bg-[#b71c1c] text-white text-center font-bold py-3.5 px-4 rounded-[8px] shadow-sm transition-colors text-[15px]">
              📱 WhatsApp Us for Admission Enquiry
            </a>
          </div>
        </motion.div>

        {/* Hindi SEO & Summary Section */}
        <motion.div
          className="pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="bg-[#FFF4E6] border-l-4 border-[#E65100] p-6 sm:p-8 rounded-r-[16px] shadow-sm">
            <h3 className="text-[#C62828] font-bold text-xl sm:text-2xl mb-6 italic">
              आनंदम् वृद्धाश्रम में प्रवेश — पूरी जानकारी हिंदी में
            </h3>
            
            <div className="space-y-6 text-[#C62828] text-[15px] sm:text-[16px] leading-relaxed italic">
              <p>
                <strong className="font-bold">पात्रता:</strong> 60+ वर्ष | परित्यक्त या बेघर बुजुर्ग | शारीरिक व मानसिक रूप से स्वस्थ | कोई संक्रामक रोग नहीं
              </p>
              
              <p>
                <strong className="font-bold">अनिवार्य दस्तावेज़:</strong> आधार कार्ड | 2 हाल की फोटो | किसी परिचित का परिचय पत्र
              </p>
              
              <p>
                <strong className="font-bold">WhatsApp पर भेजें:</strong> +91-9310105630 — आधार, फोटो और परिचय पत्र
              </p>
              
              <p>
                प्रवेश बिस्तरों की उपलब्धता पर निर्भर है। हम क्षमता बढ़ा रहे हैं। <strong className="font-bold">कोई शुल्क नहीं — सब मुफ्त।</strong>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-[#E65100] text-white text-[13px] px-4 py-1.5 rounded-full shadow-sm">वृद्धाश्रम प्रवेश दिल्ली</span>
              <span className="bg-[#E65100] text-white text-[13px] px-4 py-1.5 rounded-full shadow-sm">निशुल्क वृद्धाश्रम</span>
              <span className="bg-[#E65100] text-white text-[13px] px-4 py-1.5 rounded-full shadow-sm">बुजुर्ग भर्ती प्रक्रिया</span>
              <span className="bg-[#E65100] text-white text-[13px] px-4 py-1.5 rounded-full shadow-sm">परित्यक्त बुजुर्ग घर</span>
              <span className="bg-[#E65100] text-white text-[13px] px-4 py-1.5 rounded-full shadow-sm">आधार वृद्धाश्रम</span>
              <span className="bg-[#E65100] text-white text-[13px] px-4 py-1.5 rounded-full shadow-sm">60 वर्ष बुजुर्ग आश्रम</span>
              <span className="bg-[#E65100] text-white text-[13px] px-4 py-1.5 rounded-full shadow-sm">रोहिणी वृद्धाश्रम</span>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <p className="text-gray-600 italic text-[15px] sm:text-base leading-relaxed border-t border-gray-200 pt-6 mt-8">
            Note: Since our residents take care of their own daily chores independently, we ask that those seeking admission are physically and mentally capable of doing so. We do not have personal one-on-one attendants for individual residents at this time.
          </p>
        </motion.div>

      </section>
    </div>
  );
}

export default Admission;
