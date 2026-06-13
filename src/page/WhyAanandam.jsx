import React from 'react';
import PageHero from '../Component/PageHero';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaAward, FaHandshake, FaSmile, FaSearch, FaMapMarkerAlt, FaCheckCircle, FaWrench } from 'react-icons/fa';
import { Star } from 'lucide-react';

function WhyAanandam() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const reasons = [
    {
      icon: <FaHandHoldingHeart />,
      title: "100% Free, Always",
      description: "No admission fee, no monthly charge, no hidden cost — ever. We are a true Nishulk Vridhashram (निःशुल्क वृद्धाश्रम), funded entirely by donations and CSR support.",
      borderColor: "border-t-[#2E7D32]",
      iconColor: "text-[#2E7D32]"
    },
    {
      icon: <FaAward />,
      title: "Credible Leadership",
      description: "Founded by Niraj Gera — World Record Holder, NITI Aayog Mentor of Change, National Icon Award 2024 winner — backed by Humanify Foundation's decade-long track record.",
      borderColor: "border-t-[#E58F00]",
      iconColor: "text-[#E58F00]"
    },
    {
      icon: <FaHandshake />,
      title: "Trusted Associations",
      description: "Visited and supported by Amul, Axis Max Life Insurance, Yes Madam, HelpAge India, and respected public figure Dr. Kiran Bedi Ji.",
      borderColor: "border-t-[#2E7D32]",
      iconColor: "text-[#2E7D32]"
    },
    {
      icon: <FaSmile />,
      title: "Joy is the Goal",
      description: "Daily yoga, festivals, Oldies Got Talent performances, and outbound trips (recent visit to Vrindavan) — life here is meant to be lived, not just maintained.",
      borderColor: "border-t-[#E58F00]",
      iconColor: "text-[#E58F00]"
    },
    {
      icon: <FaSearch />,
      title: "Radical Transparency",
      description: "We openly share what we offer and what we don't — including current limitations on medical infrastructure and special-needs care.",
      borderColor: "border-t-[#2E7D32]",
      iconColor: "text-[#2E7D32]"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Convenient Location",
      description: "Karala Village, near Rohini Sector-38 — easily accessible from Pitampura, Kanjhawala, Najafgarh Road, and across Delhi NCR.",
      borderColor: "border-t-[#E58F00]",
      iconColor: "text-[#E58F00]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF5]">
      {/* Hero Section */}
      <PageHero
        title="Why Aanandam"
        description="More than an old age home, Aanandam is a sanctuary of love, respect, and joy for abandoned elders."
      />

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          <div className="mb-16 text-center">
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap">
                Our Promise
              </span>
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="font-serif text-3xl sm:text-4xl text-[#E58F00] font-bold mb-6 leading-tight">
              Not Just a Shelter — <br className="hidden lg:block" /><span className="text-[#2E7D32]">A Genuine Family, Built on Honesty.</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-700 text-[16px] leading-[1.8] max-w-4xl mx-auto font-medium">
              There are many old age homes across Delhi NCR — Rohini, Pitampura, Karala, Kanjhawala and beyond. Families choosing a home for their loved ones, and donors choosing where to give, deserve clarity. Here is why Aanandam Vridhashram stands apart — and where we are honest about what we're still building.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className={`relative overflow-hidden group bg-white rounded-3xl shadow-sm border border-gray-100 border-t-4 ${reason.borderColor} p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col isolate`}
              >
                <div className="absolute inset-0 bg-[#2E7D32] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0 rounded-3xl"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`text-[32px] mb-6 ${reason.iconColor} group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 origin-left`}>
                    {reason.icon}
                  </div>
                  <h3 className="font-serif font-bold text-[20px] text-[#0a231a] group-hover:text-[#FDD835] transition-colors duration-300 mb-4 leading-snug">{reason.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/95 transition-colors duration-300 text-[15px] leading-relaxed flex-grow">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Capabilities Section */}
          <div className="mt-24">
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-10">
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap text-center">
                An Honest Look At Our Current Capabilities
              </span>
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Card */}
              <motion.div variants={itemVariants} className="relative overflow-hidden group bg-white rounded-3xl shadow-sm border border-[#2E7D32] p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 isolate">
                <div className="absolute inset-0 bg-[#FDD835] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8 border-b border-gray-100 group-hover:border-[#0a231a]/10 pb-4 transition-colors">
                    <div className="text-[28px] text-[#2E7D32] transform group-hover:scale-110 transition-transform duration-300 origin-left">
                      <FaCheckCircle />
                    </div>
                    <h3 className="font-serif font-bold text-[22px] text-[#0a231a]">What We Provide, Fully & Freely</h3>
                  </div>
                  <ul className="space-y-5">
                    {[
                      "Safe shelter, bedding & 24×7 caretaker presence",
                      "Three nutritious meals daily",
                      "Daily yoga & meditation (Art of Living methodology)",
                      "Festival celebrations & Oldies Got Talent events",
                      "Outbound spiritual trips (Vrindavan and beyond)",
                      "Regular health camps via donor hospitals",
                      "Medicine donations & government hospital support"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[#2E7D32] mt-0.5 text-[16px] font-bold">✓</span>
                        <span className="text-[#0a231a] text-[15.5px] leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Right Card */}
              <motion.div variants={itemVariants} className="relative overflow-hidden group bg-white rounded-3xl shadow-sm border border-[#E58F00] p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 isolate">
                <div className="absolute inset-0 bg-[#FDD835] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-0 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8 border-b border-gray-100 group-hover:border-[#0a231a]/10 pb-4 transition-colors">
                    <div className="text-[28px] text-[#E58F00] transform group-hover:scale-110 transition-transform duration-300 origin-left">
                      <FaWrench />
                    </div>
                    <h3 className="font-serif font-bold text-[22px] text-[#0a231a]">What We're Actively Building Towards</h3>
                  </div>
                  <ul className="space-y-5">
                    {[
                      "On-site permanent medical infrastructure (currently camp- and hospital-dependent)",
                      "Dedicated care unit for elders with severe mental/physical disabilities",
                      "Larger campus — our \"Dream Campus\" expansion project",
                      "More frequent diagnostic services — pathology, X-Ray, MRI partnerships",
                      "Expanded staff & dedicated personal attendants"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[#2E7D32] mt-0.5 text-[16px] font-bold">✓</span>
                        <span className="text-[#0a231a] text-[15.5px] leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Donor & CSR Section */}
          <motion.div variants={itemVariants} className="mt-16 bg-[#2E7D32] rounded-xl p-8 md:p-10 text-white shadow-md">
            <h3 className="font-serif font-bold text-2xl md:text-[26px] mb-5 flex items-center gap-3">
              <Star className="w-6 h-6 text-[#FDD835]" /> Why Donors & CSR Partners Choose Aanandam
            </h3>
            <p className="text-white/95 text-[15.5px] leading-[1.8]">
              Because credibility, transparency and genuine impact are rare combinations — and Aanandam offers all three. Backed by a World Record-holding founder, visited by India's most trusted brands and personalities, and built on a foundation of radical honesty, Aanandam Vridhashram is one of the most accountable free old age homes in Delhi NCR. Our vision — to become India's happiest old age home — is ambitious, but every supporter brings us closer.
            </p>
          </motion.div>

          {/* Hindi SEO / Summary Section */}
          <motion.div variants={itemVariants} className="mt-8 bg-[#FFFDF5] rounded-xl border-l-[6px] border-l-[#E58F00] p-8 md:p-10 shadow-sm relative">
            <div className="absolute top-6 right-6 text-[#E58F00] text-sm font-bold">हिंदी</div>
            <h3 className="font-serif font-bold text-2xl md:text-[26px] mb-6 text-[#9a3412]">
              आनंदम् वृद्धाश्रम को क्यों चुनें?
            </h3>
            <div className="space-y-4 text-gray-700 text-[15.5px] leading-[1.8] font-medium">
              <p>
                दिल्ली एनसीआर (रोहिणी, पीतमपुरा, करला, कंझावला) में कई वृद्धाश्रम हैं, लेकिन <span className="font-bold text-[#9a3412]">आनंदम् वृद्धाश्रम</span> अलग है — क्योंकि यह 100% निःशुल्क है, इसके संस्थापक नीरज गेरा (विश्व रिकॉर्ड धारक, NITI आयोग सलाहकार) हैं, और इसे Amul, Axis Max Life, Yes Madam, HelpAge India तथा डॉ. किरण बेदी जी जैसी संस्थाओं और शख्सियतों का समर्थन प्राप्त है।
              </p>
              <p>
                हम पूरी पारदर्शिता के साथ काम करते हैं — जो उपलब्ध है, उसे गर्व से देते हैं, और जो नहीं है, उसे सुधारने के लिए प्रयासरत हैं।
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-[#E58F00] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-sm hover:-translate-y-0.5 transition-transform cursor-pointer">सबसे भरोसेमंद वृद्धाश्रम दिल्ली</span>
              <span className="bg-[#E58F00] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-sm hover:-translate-y-0.5 transition-transform cursor-pointer">निःशुल्क वृद्धाश्रम करला</span>
              <span className="bg-[#E58F00] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-sm hover:-translate-y-0.5 transition-transform cursor-pointer">वृद्धाश्रम रोहिणी पीतमपुरा</span>
              <span className="bg-[#E58F00] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-sm hover:-translate-y-0.5 transition-transform cursor-pointer">happiest old age home india</span>
            </div>
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
}

export default WhyAanandam;
