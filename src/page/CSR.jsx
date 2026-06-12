import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';

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
      desc: "Monthly giving, annual sponsorship, one-time infrastructure support, medical camps, festive celebrations — we customise to your budget and objectives."
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

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 mt-16 space-y-20">

        {/* Intro Section */}
        <motion.div
          className="max-w-5xl space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-xl sm:text-2xl lg:text-3xl text-[#0a231a] leading-tight mb-8">
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
          className="bg-[#F59E0B] rounded-3xl p-8 sm:p-12 shadow-xl text-white w-full max-w-7xl mx-auto overflow-hidden relative"
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
                <span className="text-xl">📞</span>
                <a href="tel:+919310105630" className="hover:text-white/80 transition-colors">+91-9310105630</a>
              </div>
              <span className="hidden sm:inline text-white/40">|</span>
              <div className="flex items-center gap-2">
                <span className="text-xl">✉️</span>
                <a href="mailto:nirajgera@gmail.com" className="hover:text-white/80 transition-colors">nirajgera@gmail.com</a>
              </div>
              <span className="hidden sm:inline text-white/40">|</span>
              <div className="flex items-center gap-2">
                <span className="text-xl">🌐</span>
                <a href="https://www.HUMANIFY.in" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">www.HUMANIFY.in</a>
              </div>
            </div>
          </div>
        </motion.div>

      </section>
    </div>
  );
}

export default CSR;
