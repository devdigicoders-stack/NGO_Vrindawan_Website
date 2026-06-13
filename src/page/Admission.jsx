import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Globe, Clock } from 'lucide-react';
import PageHero from '../Component/PageHero';

function Admission() {
  const whoCanBeAdmitted = [
    "Senior citizens aged 60 years and above",
    "Those abandoned, neglected or left without family support",
    "Homeless elders with no permanent address",
    "Economically weaker seniors unable to afford any care",
    "Elders referred by police, social workers, hospitals or concerned citizens",
    "Physically independent or semi-dependent elders (Note: we are not equipped for fully bedridden or critical medical conditions at this time — we will help connect such cases to appropriate facilities)"
  ];

  const documents = [
    "Aadhar Card or any government-issued ID (if available)",
    "Any medical records or prescription history",
    "2 photographs (can be arranged here if not available)",
    "Brief introduction from referring person, family member or government employee (preferred, not mandatory)"
  ];

  const steps = [
    {
      title: "Contact Us",
      desc: "Call or WhatsApp us at +91-9310105630. Tell us briefly about the elder's situation. We respond within 24 hours, usually sooner."
    },
    {
      title: "Basic Discussion",
      desc: "A brief conversation to understand the elder's needs, health condition and background. No judgment. No difficult questions. Just understanding."
    },
    {
      title: "Visit Aanandam",
      desc: "Come see our home. We encourage families and elders to visit before admission so they feel comfortable and assured about the environment."
    },
    {
      title: "Simple Formality",
      desc: "A brief admission form is filled. We arrange any documentation support needed. This step takes less than 30 minutes."
    },
    {
      title: "Welcome Home",
      desc: "The elder is welcomed as a member of the Aanandam family. Their room is ready. Their meal is waiting. Their journey of healing begins."
    }
  ];

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

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 mt-16 space-y-16">

        {/* Intro Section */}
        <motion.div
          className="max-w-5xl space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-xl sm:text-2xl lg:text-3xl text-[#0a231a] leading-tight mb-6 max-w-4xl">
            Bringing an Elder to Aanandam Should Never Be Complicated. So We've Made It Simple.
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
            If you know an elder who needs a safe, free, loving home — please reach out to us immediately. Our admission process is designed to be straightforward, compassionate and accessible. We understand that families reaching out to us are often in distress. We will guide you gently through every step.
          </p>
        </motion.div>

        {/* Who Can Be Admitted */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#F59E0B] mb-8">
            Who Can Be Admitted?
          </h2>
          <div className="space-y-4 mb-8">
            {whoCanBeAdmitted.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {/* Checkmark icon */}
                  <svg className="w-5 h-5 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Important Notice Box */}
          <div className="bg-[#FFF8E1] border-l-4 border-[#F59E0B] p-6 rounded-r-xl">
            <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
              <strong className="text-[#0a231a]">Important:</strong> Even if an elder arrives with no documents — no Aadhar, no medical records, nothing — we will <strong>not</strong> turn them away. An elder in need is our only criterion for admission. Documentation can be arranged later with our support.
            </p>
          </div>
        </motion.div>

        {/* Documents Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] mb-8">
            Documents (If Available — Not Compulsory)
          </h2>
          <div className="space-y-4">
            {documents.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {/* Checkmark icon */}
                  <svg className="w-5 h-5 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

        {/* Admission Process Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#F59E0B] mb-10">
            Admission Process — 5 Simple Steps
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 flex-shrink-0 bg-[#F59E0B] text-white rounded-full flex items-center justify-center font-black text-lg shadow-md mt-1">
                  {index + 1}
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base pt-1">
                    <strong className="text-[#0a231a]">{step.title}</strong> — {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Banner */}
        <motion.div
          className="bg-[#2E7D32] rounded-3xl p-8 sm:p-10 shadow-xl text-white w-full max-w-7xl mx-auto overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0a231a]/20 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white mb-4 flex items-center gap-3">
              <MapPin className="w-8 h-8" /> Address & Contact
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
              Pole No-25, 513/11, Karala Village, Delhi - 110081
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-sm sm:text-base font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+919310105630" className="hover:text-white/80 transition-colors">+91-9310105630</a>
              </div>
              <span className="hidden sm:inline text-white/40">|</span>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp: Same Number</span>
              </div>
              <span className="hidden sm:inline text-white/40">|</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Available 24×7</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-sm sm:text-base font-medium">
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
                <a href="https://www.vridhashram.in" target="_blank" rel="noreferrer" className="hover:text-white/80 transition-colors">www.vridhashram.in</a>
              </div>
            </div>

          </div>
        </motion.div>

      </section>
    </div>
  );
}

export default Admission;
