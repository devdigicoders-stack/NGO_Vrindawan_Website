import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';
import { GraduationCap, Stethoscope, Heart, Music, BookOpen, Building } from 'lucide-react';
import Swal from 'sweetalert2';

function Volunteer() {
  const whoWeNeed = [
    {
      icon: <GraduationCap size={32} />,
      title: "Students & Interns",
      desc: "NSS, NCC, social work students, management interns — Aanandam provides meaningful internship certificates and impactful social hours. You will learn things no classroom teaches.",
      borderColor: "border-[#F59E0B]" // Orange
    },
    {
      icon: <Stethoscope size={32} />,
      title: "Doctors & Health Professionals",
      desc: "Visit monthly for health check-ups, advice, and guidance. Dentists, physiotherapists, dieticians, ophthalmologists — every specialty is welcome and deeply needed.",
      borderColor: "border-[#2E7D32]" // Green
    },
    {
      icon: <Heart size={32} />,
      title: "Yoga & Meditation Teachers",
      desc: "Lead morning sessions for our elders. Your hour-long class will set the tone for an elder's entire day. This is the most direct form of preventive healthcare.",
      borderColor: "border-[#C62828]" // Red
    },
    {
      icon: <Music size={32} />,
      title: "Musicians & Performers",
      desc: "Sing. Play. Perform. Our elders love classical music, bhajans and folk songs. A live performance at Aanandam is an emotional experience neither performer nor audience forgets.",
      borderColor: "border-[#9C27B0]" // Purple
    },
    {
      icon: <BookOpen size={32} />,
      title: "Educators & Counsellors",
      desc: "Run activity sessions, storytelling circles, life history interviews, or gentle counselling. Help elders process their journeys and find meaning in the present.",
      borderColor: "border-[#0288D1]" // Blue
    },
    {
      icon: <Building size={32} />,
      title: "Corporate Teams",
      desc: "CSR volunteering day at Aanandam. Your entire team spends a day with elders — serving meals, conducting activities, sharing stories. The most powerful team-building exercise you will ever do.",
      borderColor: "border-[#00796B]" // Teal
    }
  ];

  const steps = [
    "Fill out our volunteer registration form (link below) or WhatsApp us your name, profession and availability.",
    "We match you with the most suitable volunteer role based on your skills and schedule.",
    "Your first visit is scheduled. We guide you on what to bring, what to expect and how to prepare.",
    "You arrive. You connect. You give. And you receive something you didn't expect — something that stays with you long after you leave Aanandam."
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="Volunteer With Us"
        description="Give your time, share your skills, and receive unconditional love. Join the Aanandam family as a volunteer."
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
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] leading-tight mb-6">
            You Don't Need Special Skills. You Just Need to Show Up.
          </h2>
          <div className="space-y-6 text-gray-700 text-base leading-relaxed font-medium">
            <p>
              Volunteering at Aanandam is one of the most talked-about experiences in Delhi's social impact community. People come for a few hours — and come back every week. Students arrive for internship hours — and stay long after their certificates are issued. Doctors come for a medical camp — and make it a monthly commitment.
            </p>
            <p>
              Why? Because <strong>Aanandam changes you.</strong> When you sit beside an 80-year-old who has survived unimaginable hardship and still chooses to smile — something shifts. Your perspective expands. Your problems shrink. Your capacity for gratitude grows beyond anything you thought possible.
            </p>
          </div>
        </motion.div>

        {/* Who We Need Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#F59E0B] mb-8">
            Who We Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeNeed.map((item, index) => (
              <motion.div
                key={index}
                className={`relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border-t-4 ${item.borderColor} border-l border-r border-b border-gray-100 group cursor-pointer overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* The Sliding Dark Green Background */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-3">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Volunteer Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] mb-8">
            How to Volunteer
          </h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-5 border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 flex-shrink-0 bg-[#F59E0B] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base pt-1">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="#registration-form" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#registration-form').scrollIntoView({ behavior: 'smooth' });
          }} className="w-full sm:w-auto bg-[#C62828] hover:bg-[#B71C1C] text-white font-bold py-3 px-8 rounded-xl shadow-md transition transform hover:-translate-y-0.5 hover:shadow-lg text-sm text-center cursor-pointer">
            Register as Volunteer
          </a>
          <a href="#registration-form" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#registration-form').scrollIntoView({ behavior: 'smooth' });
          }} className="w-full sm:w-auto bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold py-3 px-8 rounded-xl shadow-md transition transform hover:-translate-y-0.5 hover:shadow-lg text-sm text-center cursor-pointer">
            Apply for Internship
          </a>
          <a href="#registration-form" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#registration-form').scrollIntoView({ behavior: 'smooth' });
          }} className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#0a231a] font-bold py-3 px-8 rounded-xl shadow-sm border-2 border-[#0a231a] transition transform hover:-translate-y-0.5 hover:shadow-md text-sm text-center cursor-pointer">
            Plan a Corporate Volunteer Day
          </a>
        </motion.div>

        {/* Registration Form Section */}
        <motion.div
          id="registration-form"
          className="mt-20 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Form Left Side - Info */}
          <div className="bg-[#0a231a] w-full md:w-2/5 p-10 sm:p-12 text-white flex flex-col justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#FFE401]/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-green-500/20 blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#FFE401] mb-6 leading-tight">
                Ready to Make a Difference?
              </h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Whether you're looking to volunteer your time, apply for an internship, or organize a corporate visit, we would love to hear from you. Fill out the form and our team will get in touch shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="text-[#FFE401]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Experience Joy</h4>
                    <p className="text-white/60 text-sm">Create unforgettable memories</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-[#FFE401]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Learn & Grow</h4>
                    <p className="text-white/60 text-sm">Gain valuable life experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right Side - Inputs */}
          <div className="w-full md:w-3/5 p-10 sm:p-12">
            <h3 className="text-2xl font-bold text-[#0a231a] mb-8">Submit Your Application</h3>
            
            <form className="space-y-6" onSubmit={(e) => { 
              e.preventDefault(); 
              Swal.fire({
                title: 'Success!',
                text: 'Your application has been submitted successfully. We will get in touch soon.',
                icon: 'success',
                confirmButtonColor: '#0a231a',
                confirmButtonText: 'Great!'
              });
              e.target.reset();
            }}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0a231a] focus:ring-1 focus:ring-[#0a231a] outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0a231a] focus:ring-1 focus:ring-[#0a231a] outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number *</label>
                  <input type="tel" required maxLength="10" minLength="10" pattern="[0-9]{10}" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0a231a] focus:ring-1 focus:ring-[#0a231a] outline-none transition-all bg-gray-50 focus:bg-white" placeholder="10-digit Mobile Number" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Applying For *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0a231a] focus:ring-1 focus:ring-[#0a231a] outline-none transition-all bg-gray-50 focus:bg-white cursor-pointer text-gray-700">
                    <option value="">Select an option</option>
                    <option value="volunteer">Regular Volunteer</option>
                    <option value="internship">Student Internship</option>
                    <option value="corporate">Corporate Group Visit</option>
                    <option value="medical">Medical / Health Camp</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Profession / Institute *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0a231a] focus:ring-1 focus:ring-[#0a231a] outline-none transition-all bg-gray-50 focus:bg-white" placeholder="e.g. Student at Delhi University, or IT Professional" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message / Why do you want to join? (Optional)</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0a231a] focus:ring-1 focus:ring-[#0a231a] outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Tell us a little about yourself and how you'd like to help..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#FFE401] hover:bg-[#E6CD00] text-[#0a231a] font-black text-lg py-4 rounded-xl shadow-md transition transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 mt-4">
                Submit Application
              </button>

            </form>
          </div>
        </motion.div>

      </section>
    </div>
  );
}

export default Volunteer;
