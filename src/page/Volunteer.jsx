import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';
import Swal from 'sweetalert2';

function Volunteer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cards = [
    {
      emoji: "🏅",
      title: "Internship Certificate",
      desc: "Signed certificate from Humanify Foundation — valid for NSS, NCC, college credit and CV. Accepted by schools and colleges across Delhi NCR."
    },
    {
      emoji: "📸",
      title: "Real Impact, Real Stories",
      desc: "Your photos, reels or content directly help us reach more donors and volunteers. Your work has a visible, measurable effect — not just a thank-you email."
    },
    {
      emoji: "🤝",
      title: "Nationally Recognised NGO",
      desc: "Aanandam is associated with HelpAge India, Amul, Axis Max Life, Yes Madam, and has been visited by Dr. Kiran Bedi Ji. Your association carries weight."
    },
    {
      emoji: "🌱",
      title: "Flexible. Free. No Conditions.",
      desc: "One day or six months. Onsite or online. Weekdays or weekends. No fee. We work around you — not the other way around."
    }
  ];

  // Form State
  const [applyAs, setApplyAs] = useState('Volunteer');
  const [duration, setDuration] = useState('Flexible');
  const [contribute, setContribute] = useState(['Elder Interaction']);
  const [availability, setAvailability] = useState('Onsite');
  const [days, setDays] = useState('Flexible');

  const toggleContribute = (item) => {
    if (contribute.includes(item)) {
      setContribute(contribute.filter(i => i !== item));
    } else {
      setContribute([...contribute, item]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Application Submitted!',
      text: 'Thank you for applying. We will reach out to you within 48 hours.',
      icon: 'success',
      confirmButtonColor: '#2E7D32',
    });
    e.target.reset();
  };

  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="Volunteer With Us"
        description="Give your time, share your skills, and receive unconditional love. Join the Aanandam family as a volunteer."
        hideBreadcrumb={true}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0a231a] mb-6">
            Why Aanandam Will Stay With You
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            This is not a routine internship or a box to tick. When you sit beside an elder who hasn't had a real conversation in weeks — when you see their face change — something in you changes too. Permanently. Our volunteers often say the same thing: <span className="italic font-medium">"I came to give. I left with far more than I brought."</span>
          </p>

          <div className="bg-[#f9f7eb] border-l-4 border-[#F59E0B] p-6 sm:p-8 rounded-r-lg shadow-sm mb-12">
            <p className="text-[#0a231a] text-[20px] font-serif italic font-bold leading-relaxed">
              "Aanandam is founded by Sh. Niraj Gera — World Record Holder, NITI Aayog Mentor of Change, TEDx Speaker and social activist with 18+ years of work across elder care, mental health and women's empowerment. Coming here means being part of a mission that is nationally recognised and deeply human."
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 border-t-[3px] border-t-[#2E7D32] shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-3xl drop-shadow-sm">
                {card.emoji}
              </div>
              <h3 className="text-[19px] font-bold text-[#0a231a] mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Who Can Apply Section */}
        <motion.div
          className="pt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0a231a] mb-8">
            Who Can Apply
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
            {[
              "School Students", "College Students", "Psychology", "Social Work", "MBA / Management",
              "Medical Students", "Content Writers", "Photographers", "Videographers", "Graphic Designers",
              "Corporate Teams", "Doctors / Nurses", "Yoga Teachers", "Musicians / Singers", "Senior Citizens",
              "Anyone Willing"
            ].map((role, index) => (
              <span key={index} className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 text-[15px] shadow-sm hover:border-[#0a231a] hover:shadow-md transition-all cursor-default">
                {role}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-[15px] sm:text-base">
            No special degree or experience needed for most roles. If you have a willing heart, there is a place for you here.
          </p>
        </motion.div>

        {/* Apply in 2 Minutes Form Section */}
        <motion.div
          className="pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B5E20] mb-3">
            Apply in 2 Minutes
          </h2>
          <p className="text-gray-600 mb-8 text-[15px]">
            Fill the form below and we'll reach out within 48 hours — usually much sooner.
          </p>

          <div className="bg-[#FFFCF5] border border-[#E5E0D0] rounded-[20px] p-6 sm:p-10 shadow-sm">
            <form className="space-y-8" onSubmit={handleFormSubmit}>
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">Name *</label>
                  <input type="text" required placeholder="Your full name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] outline-none transition-all bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">Age</label>
                  <input type="number" placeholder="Age" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] outline-none transition-all bg-white" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">Whatsapp Number *</label>
                  <input type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] outline-none transition-all bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">Email *</label>
                  <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] outline-none transition-all bg-white" />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">City</label>
                  <input type="text" placeholder="Your city" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] outline-none transition-all bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">College / Organisation</label>
                  <input type="text" placeholder="Where you study or work" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] outline-none transition-all bg-white" />
                </div>
              </div>

              {/* Row 4 */}
              <div>
                <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">Course / Designation</label>
                <input type="text" placeholder="e.g. B.Sc. Psychology, HR Manager, Freelancer" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] outline-none transition-all bg-white" />
              </div>

              {/* Pills sections */}
              <div className="space-y-8">
                
                {/* Apply As */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-3 uppercase">I Am Applying As</label>
                  <div className="flex flex-wrap gap-3">
                    {["Volunteer", "Intern", "Corporate Volunteer", "Group", "NGO Partner"].map(item => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setApplyAs(item)}
                        className={`px-5 py-2.5 rounded-full text-[14px] font-medium border transition-all ${
                          applyAs === item 
                            ? 'bg-[#E8F5E9] border-[#2E7D32] text-[#1B5E20]' 
                            : 'bg-white border-gray-300 text-gray-600 hover:border-gray-400'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-3 uppercase">Duration</label>
                  <div className="flex flex-wrap gap-3">
                    {["1 Day", "1 Week", "1 Month", "3 Months", "6 Months", "Flexible"].map(item => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setDuration(item)}
                        className={`px-5 py-2.5 rounded-full text-[14px] font-medium border transition-all ${
                          duration === item 
                            ? 'bg-[#E8F5E9] border-[#2E7D32] text-[#1B5E20]' 
                            : 'bg-white border-gray-300 text-gray-600 hover:border-gray-400'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contribute In */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-3 uppercase">
                    I Can Contribute In <span className="text-gray-400 font-normal normal-case">(select any)</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Elder Interaction", "Social Media", "Photography", "Videography", "Content Writing",
                      "Fundraising", "Events", "CSR Coordination", "Graphic Design", "Accounts / HR",
                      "Psychology Support", "Medical Support", "Yoga / Meditation", "Music / Bhajans", "Legal",
                      "Web / SEO / AI", "Other"
                    ].map(item => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleContribute(item)}
                        className={`px-5 py-2.5 rounded-full text-[14px] font-medium border transition-all ${
                          contribute.includes(item)
                            ? 'bg-[#E8F5E9] border-[#2E7D32] text-[#1B5E20]' 
                            : 'bg-white border-gray-300 text-gray-600 hover:border-gray-400'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability & Days */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 tracking-wider mb-3 uppercase">Availability</label>
                    <div className="flex flex-wrap gap-3">
                      {["Onsite", "Online", "Both"].map(item => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setAvailability(item)}
                          className={`px-5 py-2.5 rounded-full text-[14px] font-medium border transition-all ${
                            availability === item 
                              ? 'bg-[#E8F5E9] border-[#2E7D32] text-[#1B5E20]' 
                              : 'bg-white border-gray-300 text-gray-600 hover:border-gray-400'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 tracking-wider mb-3 uppercase">Days</label>
                    <div className="flex flex-wrap gap-3">
                      {["Weekdays", "Weekends", "Flexible"].map(item => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setDays(item)}
                          className={`px-5 py-2.5 rounded-full text-[14px] font-medium border transition-all ${
                            days === item 
                              ? 'bg-[#E8F5E9] border-[#2E7D32] text-[#1B5E20]' 
                              : 'bg-white border-gray-300 text-gray-600 hover:border-gray-400'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Textarea */}
              <div>
                <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">
                  Why do you want to join? <span className="text-gray-400 font-normal normal-case">(optional)</span>
                </label>
                <textarea 
                  rows="4" 
                  placeholder="A few words — what draws you here, what you hope to contribute or experience..." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] outline-none transition-all bg-white resize-none"
                ></textarea>
              </div>

              {/* Resume / Portfolio */}
              <div>
                <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">
                  Resume / Portfolio <span className="text-gray-400 font-normal normal-case">(optional)</span>
                </label>
                <input type="text" placeholder="Paste link or we can collect on WhatsApp" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] outline-none transition-all bg-white" />
              </div>

              {/* Submit Button */}
              <div className="pt-4 text-center">
                <button type="submit" className="w-full bg-[#C62828] hover:bg-[#B71C1C] text-white font-bold py-4 rounded-xl shadow-md transition transform hover:-translate-y-0.5 hover:shadow-lg text-lg">
                  Submit Application →
                </button>
                <p className="text-gray-500 text-xs mt-4">
                  We respond within 48 hours. No fee. No conditions. Just show up.
                </p>
              </div>

            </form>
          </div>
        </motion.div>

        {/* Internship Certificate Info */}
        <motion.div
          className="pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="bg-[#E8F5E9] border border-[#2E7D32]/30 rounded-[12px] p-5 sm:p-6 shadow-sm">
            <p className="text-[#1B5E20] text-[15px] sm:text-base leading-relaxed">
              🎓 <span className="font-bold">Internship Certificate:</span> All interns completing their commitment receive a formal certificate from Humanify Foundation — signed by the founder's office — accepted by colleges and universities across Delhi NCR for NSS, NCC and internship-credit requirements.
            </p>
          </div>
        </motion.div>

        {/* Visit Us Section */}
        <motion.div
          className="pt-10 border-t border-gray-200 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1B5E20] mb-6">
            Visit Us
          </h2>
          <div className="space-y-4 text-gray-700 text-[15px]">
            <div className="flex items-start gap-3">
              <span className="text-[#C62828] text-xl mt-0.5">📍</span>
              <div>
                <p>Aanandam Old Age Home, 513/11, Utsav Vihar, Karala Village, Delhi 110081</p>
                <p className="text-gray-500">Near Rohini, Pitampura &amp; Kanjhawala | Opposite ISO Solid Gym</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-[#C62828] text-lg">📞</span>
              <p>+91-9310105630 | +91-9891139833 <span className="text-gray-300 mx-2">|</span> ✉️ info@vridhashram.in</p>
            </div>
          </div>
          <a href="tel:+919310105630" className="inline-block mt-8 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold py-3 px-6 rounded-[8px] shadow-sm transition">
            Get Directions
          </a>
        </motion.div>

        {/* Hindi SEO Block */}
        <motion.div
          className="pt-12 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="bg-[#FFF4E6] border-l-4 border-[#E65100] p-6 sm:p-10 rounded-r-[16px] shadow-sm">
            <div className="space-y-6 text-[#5D4037] text-[15.5px] italic leading-relaxed">
              <p>
                <span className="font-bold text-[#E65100] text-lg not-italic">हमारे साथ जुड़ें</span> — समाज सेवा, वृद्धजनों की देखभाल, सोशल मीडिया, फोटोग्राफी, इवेंट मैनेजमेंट, मनोविज्ञान, योग या मेडिकल सेवा में योगदान दें।
              </p>
              <p>
                आनंदम् की स्थापना <span className="font-bold text-[#E65100] text-lg not-italic">श्री नीरज गेरा जी</span> ने की है — विश्व रिकॉर्ड धारक, NITI Aayog Mentor of Change, TEDx वक्ता।
              </p>
              <p>
                <span className="font-bold text-[#E65100] text-lg not-italic">इंटर्नशिप सर्टिफिकेट</span> मिलता है — कॉलेज क्रेडिट और CV के लिए मान्य।<br/>
                आपका थोड़ा सा समय किसी बुजुर्ग के चेहरे पर वो मुस्कान ला सकता है जो वर्षों से नहीं आई।
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-3 text-[#C62828] font-bold text-[17px]">
              <span>📞</span>
              <p>+91-9310105630 | +91-9891139833</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                "वॉलंटियर वृद्धाश्रम दिल्ली", "NGO इंटर्नशिप दिल्ली", "समाज सेवा बुजुर्ग",
                "NSS NCC वॉलंटियर", "इंटर्नशिप सर्टिफिकेट NGO", "रोहिणी पीतमपुरा वॉलंटियर"
              ].map((tag, idx) => (
                <span key={idx} className="bg-[#E65100] text-white text-[12.5px] font-bold px-4 py-1.5 rounded-full shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  );
}

export default Volunteer;
