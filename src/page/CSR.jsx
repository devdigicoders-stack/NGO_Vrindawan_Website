import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe } from 'lucide-react';
import PageHero from '../Component/PageHero';
import { FaHardHat, FaHospital, FaHandsHelping, FaCreditCard, FaPhoneAlt } from 'react-icons/fa';

function CSR() {
  const whyPartner = [
    {
      title: "High Emotional Impact",
      desc: "Elder care stories resonate deeply with every demographic. Your employees, customers and shareholders will be genuinely moved by your partnership with us."
    },
    {
      title: "Employee Engagement",
      desc: "We organise structured Corporate Volunteer Days at Aanandam — one of the most powerful team-building experiences available in the Delhi NCR region."
    },
    {
      title: "Complete Transparency",
      desc: "Detailed impact reports, expense statements and activity logs provided quarterly. You always know exactly where your investment goes."
    },
    {
      title: "Genuine Need",
      desc: "You are not funding a trend or a marketing exercise. You are keeping abandoned grandparents fed, safe and loved. That is a legacy."
    },
    {
      title: "80G Tax Benefits",
      desc: "All donations to Humanify Foundation qualify for 80G deduction under the Income Tax Act."
    },
    {
      title: "Flexible Partnership Models",
      desc: "Monthly giving, annual Sponsorship, one-time infrastructure support, medical camps, festive celebrations — we customise to your budget and objectives."
    },
    {
      title: "Brand Visibility",
      desc: "Your company name is featured in our communications, banners, events, social media and annual report."
    },
    {
      title: "Media Credibility",
      desc: "Humanify Foundation has been covered by national media. Your partnership is associated with a credible, transparent, impactful organisation."
    }
  ];

  const opportunities = [
    { type: "Monthly Elder Sponsorship (per elder)", investment: "₹6,500/month", impact: "Complete care for one elder" },
    { type: "Festive Celebration Sponsorship", investment: "₹15,000–₹50,000", impact: "Full festival event for all residents" },
    { type: "Medical Camp Organisation", investment: "₹25,000+", impact: "Health check-ups for all elders" },
    { type: "Infrastructure Support", investment: "Custom", impact: "Beds, kitchen, solar, facility upgrades" },
    { type: "Annual Operational Partner", investment: "₹5 Lakh+", impact: "Named as Primary Partner; full branding" },
    { type: "Campus Construction Fund", investment: "₹10 Lakh+", impact: "Named donor on Dream Campus" }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="CSR Partnerships"
        description="Align your corporate social responsibility with a cause that touches every heart. Build a legacy of care and compassion."
        hideBreadcrumb={true}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 mt-16 space-y-20">

        {/* New Visual CSR Overview Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {/* Top CSR Intro */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap">
                CSR Partnerships
              </span>
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0a231a] font-bold mb-6">
              High-Impact, High-Trust, High-Visibility CSR — Aanandam Vridhashram.
            </h2>
            <p className="text-gray-700 text-[16px] leading-[1.8] font-medium max-w-5xl mx-auto">
              Aanandam Vridhashram, run by Humanify Foundation under Founder Niraj Gera (World Record Holder, NITI Aayog Mentor of Change), offers Delhi NCR corporates a rare combination: a genuinely impactful, transparent and media-credible CSR partner in the elderly care sector. Located in Karala Village near Rohini Sector-38, Pitampura and Kanjhawala, Aanandam is easily accessible for site visits and employee volunteering days.
            </p>
          </div>

          {/* Why Partner */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap">
                Why Partner With Us For CSR
              </span>
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
            </div>
            <div className="space-y-5 pl-2">
              <div className="flex items-start gap-4">
                <span className="text-[#2E7D32] text-xl font-bold mt-0.5">✓</span>
                <p className="text-gray-700 text-[15.5px] font-medium"><span className="text-[#0a231a] font-bold">Proven track record</span> — Humanify Foundation already holds a World Record (Happiness Express — 400+ sessions, 1,30,000+ attendees across 23+ states)</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#2E7D32] text-xl font-bold mt-0.5">✓</span>
                <p className="text-gray-700 text-[15.5px] font-medium"><span className="text-[#0a231a] font-bold">Already trusted by major brands</span> — Amul, Axis Max Life Insurance, Yes Madam, and NGOs like HelpAge India; visited by Dr. Kiran Bedi Ji</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#2E7D32] text-xl font-bold mt-0.5">✓</span>
                <p className="text-gray-700 text-[15.5px] font-medium"><span className="text-[#0a231a] font-bold">National & international media presence</span> — BBC, Times of India, Hindustan Times, NDTV, Daily Mail UK and more</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#2E7D32] text-xl font-bold mt-0.5">✓</span>
                <p className="text-gray-700 text-[15.5px] font-medium"><span className="text-[#0a231a] font-bold">Founder with strong public credibility</span> — National Icon Award 2024 (Humanitarian of the Year), TEDx speaker, Wikipedia-listed</p>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap">
                CSR Opportunities Available
              </span>
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Card 1 */}
              <div className="relative overflow-hidden group bg-white rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-[#2E7D32] p-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-4xl text-[#e67e22] mb-6 group-hover:text-white transition-colors duration-500"><FaHardHat /></div>
                  <h3 className="font-serif font-bold text-[#0a231a] group-hover:text-white transition-colors duration-500 text-[19px] mb-4">Infrastructure Development</h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 text-[14.5px] leading-relaxed">Building renovation, furniture, beds, sanitation upgrades for our Dream Campus project.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative overflow-hidden group bg-white rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-[#E58F00] p-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-4xl text-[#9b59b6] mb-6 group-hover:text-white transition-colors duration-500"><FaHospital /></div>
                  <h3 className="font-serif font-bold text-[#0a231a] group-hover:text-white transition-colors duration-500 text-[19px] mb-4">Healthcare Partnerships</h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 text-[14.5px] leading-relaxed">Hospitals, pathology labs, diagnostic centres & pharmaceutical companies providing free health camps, X-Ray, MRI, and medicines.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative overflow-hidden group bg-white rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-[#2E7D32] p-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-4xl text-[#f39c12] mb-6 group-hover:text-white transition-colors duration-500"><FaHandsHelping /></div>
                  <h3 className="font-serif font-bold text-[#0a231a] group-hover:text-white transition-colors duration-500 text-[19px] mb-4">Employee Volunteering</h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 text-[14.5px] leading-relaxed">Structured visits, skill-sharing sessions, festival celebrations and Oldies Got Talent events.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative overflow-hidden group bg-white rounded-2xl shadow-sm border border-gray-100 border-t-4 border-t-[#E58F00] p-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-4xl text-[#3498db] mb-6 group-hover:text-white transition-colors duration-500"><FaCreditCard /></div>
                  <h3 className="font-serif font-bold text-[#0a231a] group-hover:text-white transition-colors duration-500 text-[19px] mb-4">Recurring Giving</h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 text-[14.5px] leading-relaxed">Support Us meals or elder care as part of employee payroll-giving schemes.</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>        {/* Intro Section */}
        <motion.div
          className="w-full space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-xl sm:text-2xl lg:text-[24px] xl:text-[28px] text-[#0a231a] leading-tight mb-8 lg:whitespace-nowrap">
            Elder Care Is Not Just a Social Need. It Is India's Most Urgent CSR Opportunity.
          </h2>
          <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
            <p>
              India's senior citizen population is growing faster than any support system being built for them. By 2050, 1 in 5 Indians will be over 60. Yet elder care remains one of the most underfunded, underrepresented areas in corporate social responsibility.
            </p>
            <p>
              <strong>Aanandam Vridhashram invites forward-thinking corporations, foundations and institutions to change that.</strong> Partner with us and your CSR investment doesn't just fulfil a mandate — it restores dignity to people who built the very industries your company belongs to.
            </p>
          </div>
        </motion.div>

        {/* Why Partner Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#F59E0B] mb-10">
            Why Partner with Aanandam?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {whyPartner.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 mt-1">
                  {/* Checkmark icon */}
                  <svg className="w-6 h-6 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    <strong className="text-[#0a231a]">{item.title}</strong> — {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Opportunities Table */}
        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] mb-8">
            Partnership Opportunities
          </h2>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#1A1A1A] text-white">
                    <th className="py-4 px-6 font-bold tracking-wider text-xs sm:text-sm uppercase w-2/5">Partnership Type</th>
                    <th className="py-4 px-6 font-bold tracking-wider text-xs sm:text-sm uppercase w-1/4">Investment</th>
                    <th className="py-4 px-6 font-bold tracking-wider text-xs sm:text-sm uppercase">Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {opportunities.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, backgroundColor: "#ffffff" }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-6 text-gray-700 text-sm sm:text-base">
                        {item.type}
                      </td>
                      <td className="py-4 px-6 text-gray-800 font-medium text-sm sm:text-base">
                        {item.investment}
                      </td>
                      <td className="py-4 px-6 text-gray-600 text-sm sm:text-base">
                        {item.impact}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Contact Call to Action Banner */}
        <motion.div
          className="bg-[#2E7D32] rounded-3xl p-8 sm:p-12 shadow-xl text-white w-full max-w-7xl mx-auto overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C62828]/20 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-white mb-4">
              Contact Our Partnerships Team
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium max-w-4xl">
              Write to us or call us directly to discuss how we can build a partnership that aligns with your CSR goals, budget and values. We will prepare a customised proposal within 48 hours.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-sm sm:text-base font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+919310105630" className="hover:text-white/80 transition-colors">+91-9310105630</a>
              </div>
              <span className="hidden sm:inline text-white/40">|</span>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:nirajgera@gmail.com" className="hover:text-white/80 transition-colors">nirajgera@gmail.com</a>
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
            </div>
          </div>
        </motion.div>

        {/* Hindi SEO / Summary Section for CSR */}
        <motion.div
          className="mt-16 bg-[#FDF9EC] rounded-xl border-l-[6px] border-l-[#2E7D32] p-8 md:p-10 shadow-sm relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="absolute top-6 right-6 text-[#2E7D32] text-sm font-bold">हिंदी</div>
          <h3 className="font-serif font-bold text-2xl md:text-[26px] mb-6 text-[#0a231a]">
            CSR भागीदारी — आनंदम् वृद्धाश्रम के साथ
          </h3>
          <div className="space-y-4 text-gray-700 text-[15.5px] leading-[1.8] font-medium">
            <p>
              ह्यूमैनिफाई फाउंडेशन, जो पहले से विश्व रिकॉर्ड और राष्ट्रीय पुरस्कार प्राप्त है, कॉरपोरेट्स के लिए एक भरोसेमंद CSR साझीदार है — स्वास्थ्य शिविर, इंफ्रास्ट्रक्चर सहयोग, कर्मचारी स्वयंसेवा कार्यक्रम — सभी उपलब्ध।
            </p>
            <p>
              Amul, Axis Max Life, Yes Madam, HelpAge India जैसे संगठन हमारे साथ जुड़े हैं। करला, रोहिणी सेक्टर-38 के पास, दिल्ली एनसीआर में स्थित।
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="bg-[#FDD835] text-[#0a231a] text-[13px] font-bold px-5 py-2 rounded-full shadow-sm">CSR वृद्धाश्रम दिल्ली</span>
            <span className="bg-[#FDD835] text-[#0a231a] text-[13px] font-bold px-5 py-2 rounded-full shadow-sm">corporate social responsibility old age home</span>
            <span className="bg-[#FDD835] text-[#0a231a] text-[13px] font-bold px-5 py-2 rounded-full shadow-sm">CSR स्वास्थ्य शिविर</span>
          </div>
        </motion.div>

        {/* Contact Banner Dark */}
        <motion.div
          className="mt-10 bg-[#0a231a] rounded-xl p-8 md:p-10 shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h3 className="font-serif font-bold text-2xl text-white mb-6 flex items-center gap-3">
            <span className="text-[#FDD835] text-2xl"><FaPhoneAlt /></span> Discuss a CSR Partnership
          </h3>
          <p className="text-white/90 text-[14.5px] leading-[2]">
            <span className="font-bold text-[#FDD835]">Phone / WhatsApp:</span> +91-9310105630 | <span className="font-bold text-[#FDD835]">Email:</span> nirajgera@gmail.com | <span className="font-bold text-[#FDD835]">Website:</span> www.vridhashram.in | www.humanify.in | www.nirajgera.com
          </p>
        </motion.div>

      </section>
    </div>
  );
}

export default CSR;
