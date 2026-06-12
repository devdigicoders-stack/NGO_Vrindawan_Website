import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';

function CelebrateWithElders() {
  const happenings = [
    {
      title: "Welcome & Aarti",
      desc: "You are welcomed to Aanandam with a warm aarti and tilak. The elders gather together, dressed in their best, to celebrate with you."
    },
    {
      title: "Cake Cutting & Songs",
      desc: "The elders sing birthday songs or join in the celebration. There is laughter, there is music, there is the kind of energy that only genuine joy creates."
    },
    {
      title: "Blessings Ceremony",
      desc: "Each elder offers you their blessing — in their own words, in their own language, from their heart. These are not performance blessings. They come from people who have lived full lives and understand what truly matters."
    },
    {
      title: "Sharing of Sweets or Meal",
      desc: "You bring or sponsor sweets, a meal or snacks for everyone. Eating together is the deepest form of celebration in Indian culture — and Aanandam honours it completely."
    },
    {
      title: "Blessings Certificate",
      desc: "You receive a handwritten “Blessings Certificate” from Aanandam — signed by the elders — that you can frame and keep forever."
    },
    {
      title: "Photos & Memories",
      desc: "We capture the moments for you. You leave with photographs and a video that will be shared with your family and cherished for decades."
    }
  ];

  const perfectFor = [
    {
      icon: "🎂",
      title: "Birthdays",
      desc: "Adults and children both. A child who celebrates their birthday at Aanandam learns the meaning of empathy and gratitude in one afternoon — a lesson no school teaches.",
      borderColor: "border-[#F59E0B]" // Orange
    },
    {
      icon: "💍",
      title: "Anniversaries",
      desc: "What better way to honour love than by sharing it? Bring your partner to Aanandam and receive blessings from those who have loved for decades.",
      borderColor: "border-[#2E7D32]" // Green
    },
    {
      icon: "🎊",
      title: "Promotions & Achievements",
      desc: "Mark your professional milestones by giving back. Start your new chapter with the most powerful good wishes you can receive — from those who have nothing to gain and everything to give.",
      borderColor: "border-[#C62828]" // Red
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="Celebrate With Elders"
        description="Turn your special days into unforgettable memories by sharing your joy with those who need it most."
        hideBreadcrumb={true}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 mt-16 space-y-20">

        {/* Intro Section */}
        <motion.div
          className="max-w-4xl space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-xl sm:text-2xl lg:text-3xl text-[#0a231a] leading-tight mb-8 max-w-2xl">
            You've Had Parties. But Have You Had Blessings?
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium">
            <p>
              Birthdays at restaurants. Anniversaries at hotels. Promotions with colleagues at pubs. We celebrate our milestones in beautiful places with beautiful people — and yet, how many of those celebrations do you remember a year later? Two years later?
            </p>
            <p>
              Now imagine this: thirty grandparents singing happy birthday to you. An elderly woman placing her hand on your head and blessing you with tears in her eyes. An old man who has seen 80 years of life telling you, in his gentle voice, that God will give you everything you deserve.
            </p>
            <p className="font-bold text-[#0a231a] pt-2">
              That is a moment you will remember for the rest of your life.
            </p>
          </div>
        </motion.div>

        {/* What Happens Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#F59E0B] mb-10">
            What Happens at an Aanandam Celebration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {happenings.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 flex-shrink-0 bg-[#F59E0B] text-white rounded-full flex items-center justify-center font-black text-lg shadow-md mt-1">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a231a] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Perfect For Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] mb-10">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perfectFor.map((item, index) => (
              <motion.div
                key={index}
                className={`relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border-t-4 ${item.borderColor} border-l border-r border-b border-gray-100 group cursor-pointer overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* The Sliding Dark Green Background */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-4">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="bg-[#FAFAF5] border-l-4 border-[#FDD835] rounded-r-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden w-full max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="relative z-10 space-y-6">
            <p className="text-[#2E7D32] text-lg sm:text-xl font-serif italic leading-relaxed">
              "I brought my 7-year-old daughter for her birthday. She came home and told her teacher, 'I want to go back every birthday forever.' That is the greatest gift Aanandam gave us."
            </p>
            <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">
              — Priyanka Sharma, Mother, Rohini
            </p>
          </div>
        </motion.div>

        {/* Bottom Call to Action Banner */}
        <motion.div
          className="bg-[#F59E0B] rounded-3xl p-8 sm:p-12 shadow-2xl text-white w-full max-w-7xl mx-auto overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Decorative shapes */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#C62828]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-4">
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-white mb-6">
              Book Your Celebration
            </h2>
            <p className="text-white/90 text-lg leading-relaxed font-medium">
              Celebrations are available on weekends and selected weekdays. We request at least 5-7 days advance notice to prepare. There is no fixed charge — you are welcome to sponsor a meal or donate whatever your heart allows.
            </p>
            <p className="text-white font-bold text-lg mt-4">
              Call or WhatsApp us at <a href="https://wa.me/919310105630" target="_blank" rel="noreferrer" className="underline hover:text-white/80 transition-colors">+91-9310105630</a> to book your date.
            </p>
          </div>
        </motion.div>

      </section>
    </div>
  );
}

export default CelebrateWithElders;
