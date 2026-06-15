import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Heart, PartyPopper, Sparkles, Music, Building2, CalendarDays } from 'lucide-react';
import PageHero from '../Component/PageHero';
import CelebrationGallery from '../Component/CelebrationGallery';
import CelebrateSeoHindi from '../Component/CelebrateSeoHindi';

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
      icon: <Cake size={40} className="text-[#0a231a] group-hover:text-white transition-colors duration-300" />,
      title: "Birthdays",
      desc: "Adults and children both. A child who celebrates their birthday at Aanandam learns the meaning of empathy and gratitude in one afternoon — a lesson no school teaches.",
      borderColor: "border-[#F59E0B]" // Orange
    },
    {
      icon: <Heart size={40} className="text-[#0a231a] group-hover:text-white transition-colors duration-300" />,
      title: "Anniversaries",
      desc: "What better way to honour love than by sharing it? Bring your partner to Aanandam and receive blessings from those who have loved for decades.",
      borderColor: "border-[#2E7D32]" // Green
    },
    {
      icon: <PartyPopper size={40} className="text-[#0a231a] group-hover:text-white transition-colors duration-300" />,
      title: "Promotions & Achievements",
      desc: "Mark your professional milestones by giving back. Start your new chapter with the most powerful good wishes you can receive — from those who have nothing to gain and everything to give.",
      borderColor: "border-[#C62828]" // Red
    },
    {
      icon: <Sparkles size={40} className="text-[#0a231a] group-hover:text-white transition-colors duration-300" />,
      title: "Festival Celebrations",
      desc: "Holi, Diwali, Janmashtami, Lohri, Eid, Christmas, Raksha Bandhan and more — sponsor decorations, sweets, and a full day of festivities.",
      borderColor: "border-[#FDD835]" // Yellow
    },
    {
      icon: <Music size={40} className="text-[#0a231a] group-hover:text-white transition-colors duration-300" />,
      title: "Cultural Performances",
      desc: "Bring musicians, dancers or performers for an 'Oldies Got Talent' style event — energise the whole home with music and laughter.",
      borderColor: "border-[#1976D2]" // Blue
    },
    {
      icon: <Building2 size={40} className="text-[#0a231a] group-hover:text-white transition-colors duration-300" />,
      title: "Corporate Team Outings",
      desc: "A meaningful CSR/team-bonding activity for employees in Delhi NCR — celebrate a company anniversary or milestone with real impact.",
      borderColor: "border-[#8E24AA]" // Purple
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

      {/* Gallery Section */}
      <CelebrationGallery />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 mt-16 space-y-20">

        {/* Intro Section */}
        <motion.div
          className="w-full space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-semibold text-xl sm:text-2xl lg:text-3xl text-[#0a231a] leading-tight mb-8">
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
          <h2 className="font-serif font-semibold text-3xl sm:text-4xl text-[#F59E0B] mb-10">
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
          <div className="text-center mb-16 space-y-4 max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="hidden sm:block h-[1px] bg-gray-300 w-12 sm:w-20"></div>
              <h3 className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase sm:whitespace-nowrap leading-relaxed">
                TURN YOUR SPECIAL DAY INTO SOMEONE ELSE'S BEST DAY
              </h3>
              <div className="hidden sm:block h-[1px] bg-gray-300 w-12 sm:w-20"></div>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-[#0a231a] leading-tight">
              Celebrate With Our Elders.
            </h2>
            <p className="text-gray-600 font-medium text-[15px] sm:text-lg leading-relaxed pt-2">
              At Aanandam Vridhashram (Karala Village, near Rohini Sector-38, Pitampura, Delhi NCR), birthdays, anniversaries, festivals and personal milestones become extra special when shared with our elder residents.
            </p>
          </div>
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
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-4">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why It Matters Section */}
        <motion.div
          className="w-full pt-12 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4">
            <h3 className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              WHY IT MATTERS
            </h3>
            <div className="h-[1px] bg-gray-300 w-full"></div>
          </div>
          
          <p className="text-gray-700 font-medium text-lg leading-relaxed">
            For our elders — many of whom have lost touch with their own families — these celebrations are deeply emotional moments. Laughter, music, sweets, and the simple presence of visitors bring immense joy and a sense of being remembered and valued.
          </p>

          <div className="bg-[#2E7D32] rounded-xl p-8 sm:p-10 shadow-lg text-white space-y-4">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-[#FDD835]" size={32} />
              <h3 className="text-2xl sm:text-3xl font-serif font-bold">
                How to Plan a Visit
              </h3>
            </div>
            <p className="text-white/90 text-[17px] leading-relaxed font-medium">
              Call/WhatsApp us at +91-9310105630 at least a few days in advance. We'll help you plan the celebration — including suggested activities, dietary considerations, and timing that works best for our elders' routines.
            </p>
          </div>

          <p className="text-gray-700 font-medium text-lg leading-relaxed">
            Whether it's a child's birthday, a company anniversary, or a festival you want to make unforgettable — celebrate it at Aanandam Vridhashram, and give it real meaning.
          </p>
        </motion.div>

      </section>

      {/* Hindi SEO and Booking Component */}
      <CelebrateSeoHindi />
    </div>
  );
}

export default CelebrateWithElders;
