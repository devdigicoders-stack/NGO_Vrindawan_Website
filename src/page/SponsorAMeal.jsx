import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';
import { FaUtensils, FaCalendarAlt, FaHome, FaPhoneAlt } from "react-icons/fa";
import { Sun, Utensils, Coffee, Moon } from "lucide-react";

function SponsorAMeal() {
  const mealOptions = [
    {
      id: 1,
      price: "₹1,500",
      title: "Breakfast Sponsorship",
      icon: <Sun size={64} className="text-[#0a231a]" />,
      desc: "Poha / Upma / Daliya / Parathas + Chai. Fresh-made. Warm. Enough to nourish every elder and start their day with energy and love."
    },
    {
      id: 2,
      price: "₹2,500",
      title: "Lunch Sponsorship",
      icon: <Utensils size={64} className="text-[#0a231a]" />,
      desc: "Dal, rice, sabzi, roti, salad, pickle and seasonal specials. A complete, balanced, satisfying midday meal — the centrepiece of the Aanandam day."
    },
    {
      id: 3,
      price: "₹750",
      title: "Evening Tea & Snacks",
      icon: <Coffee size={64} className="text-[#0a231a]" />,
      desc: "Hot chai with biscuits, pakodas or seasonal snacks. Small in cost, enormous in comfort — especially on a cold Delhi evening."
    },
    {
      id: 4,
      price: "₹2,500",
      title: "Dinner Sponsorship",
      icon: <Moon size={64} className="text-[#0a231a]" />,
      desc: "Warm, filling and nourishing. No elder goes to bed hungry when you sponsor dinner. A full stomach at night — the most peaceful gift you can give."
    }
  ];

  const steps = [
    "Your name (or the name of the person you wish to honour) is displayed at the meal.",
    "Our team announces your sponsorship to all elders before the meal begins.",
    "The elders offer a group blessing in your name.",
    "You receive a photo or video from the meal — directly on WhatsApp.",
    "A thank-you message from our elders, in their own words, is shared with you."
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="bg-[#FAFAF5] min-h-screen">
      <PageHero
        title="Sponsor a Meal"
        description="Fill a plate, warm a heart. Your generosity becomes a reason for our elders to smile today."
        hideBreadcrumb={true}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto space-y-24">

        {/* Intro Section */}
        <motion.div
          className="space-y-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] leading-tight text-center">
            One Meal. Thirty Smiles. <span className="text-[#C62828] block sm:inline mt-2">One Memory You Will Carry Forever.</span>
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium mt-8">
            <p>
              There is something ancient and deeply human about feeding others. Every culture, every religion, every tradition honours the act of feeding the hungry — of bringing food to a table and watching someone eat with relief and gratitude.
            </p>
            <p>
              At Aanandam, you can sponsor an entire meal for all our elders — to celebrate your birthday, mark an anniversary, honour a departed loved one, or simply because today feels like the right day to give.
            </p>
            <p>
              When you sponsor a meal, you are not just buying food. You are sitting at that table with them. Your name is announced. Your generosity is celebrated. And thirty grandparents bless you with all the love they have — which, it turns out, is a great deal more than you expect.
            </p>
          </div>
        </motion.div>

        {/* Meal Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {mealOptions.map((meal) => (
            <motion.div
              key={meal.id}
              variants={fadeInUp}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              {/* The Sliding Dark Green Background */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

              <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 group-hover:rotate-12 z-0">
                {meal.icon}
              </div>

              <div className="relative z-10 text-center space-y-4">
                <div className="text-4xl font-black text-[#C62828] group-hover:text-[#FDD835] transition-colors duration-300 font-serif tracking-tight">{meal.price}</div>
                <h3 className="text-xl font-bold text-[#0a231a] group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  <div className="scale-50">{meal.icon}</div> {meal.title}
                </h3>
                <div className="h-1 w-12 bg-[#FDD835] mx-auto rounded-full group-hover:bg-white transition-colors duration-300"></div>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 font-medium leading-relaxed">
                  {meal.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What Happens After You Sponsor */}
        <motion.div
          className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDD835]/10 rounded-bl-full -z-0"></div>
          <div className="relative z-10">
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] mb-10">
              What Happens After You Sponsor?
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-[#F59E0B] text-white rounded-full flex items-center justify-center font-black text-lg shadow-md border-2 border-white">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 text-lg pt-1.5 font-medium border-b border-gray-100 pb-5 w-full">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="bg-[#0a231a] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="absolute top-4 left-4 text-[#FDD835] text-8xl opacity-20 font-serif leading-none">"</div>
          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <p className="text-white text-xl sm:text-2xl font-serif italic leading-relaxed">
              "I sponsored a birthday lunch for my father's 60th birthday in memory of his mother. When Aanandam sent me the photo of the elders eating and smiling, I cried for ten minutes. It was the most meaningful thing I had done in years."
            </p>
            <p className="text-[#FDD835] font-bold tracking-widest uppercase text-sm">
              — Siddharth Gupta, Delhi
            </p>
          </div>
        </motion.div>

        {/* Annadan New Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {/* Annadan Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap">
                Annadan — Feed an Elder Today
              </span>
              <div className="flex-grow h-[1px] bg-[#E58F00]/30"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#E58F00] font-bold mb-6">
              For ₹51, You Can Feed an Elder Today.
            </h2>
            <p className="text-gray-700 text-[16px] leading-[1.8] font-medium max-w-4xl">
              At Aanandam Vridhashram (Karala Village, near Rohini Sector-38, Pitampura, Delhi NCR), every meal matters. For just ₹51 — less than the cost of a cup of coffee — you can sponsor one full, nutritious meal for one of our elder residents.
            </p>
          </div>

          {/* How It Works Header */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap">
                How It Works
              </span>
              <div className="flex-grow h-[1px] bg-[#E58F00]/30"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 flex-shrink-0 bg-[#F59E0B] text-white rounded-full flex items-center justify-center font-black text-lg shadow-sm">1</div>
                <p className="text-gray-700 text-[15.5px] pt-1.5 font-medium border-b border-gray-100 pb-5 w-full">
                  Choose how many meals you'd like to sponsor — one meal, one day's meals for one elder, or meals for the entire home for a day.
                </p>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 flex-shrink-0 bg-[#F59E0B] text-white rounded-full flex items-center justify-center font-black text-lg shadow-sm">2</div>
                <p className="text-gray-700 text-[15.5px] pt-1.5 font-medium border-b border-gray-100 pb-5 w-full">
                  Make your contribution online via UPI/bank transfer, or in person at Aanandam.
                </p>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 flex-shrink-0 bg-[#F59E0B] text-white rounded-full flex items-center justify-center font-black text-lg shadow-sm">3</div>
                <p className="text-gray-700 text-[15.5px] pt-1.5 font-medium border-b border-gray-100 pb-5 w-full">
                  We use your contribution directly for ingredients, cooking and serving — with full transparency.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 border-t-4 border-t-[#E58F00] p-6 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="font-serif text-xl font-bold text-[#0a231a] mb-4 flex items-center gap-3">
                <span className="text-[#a882e3] text-2xl"><FaUtensils /></span> One Meal
              </h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed font-medium">
                <span className="font-bold text-gray-800">₹51</span> — feeds one elder one full meal (breakfast, lunch or dinner).
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 border-t-4 border-t-[#2E7D32] p-6 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="font-serif text-xl font-bold text-[#0a231a] mb-4 flex items-center gap-3">
                <span className="text-[#4b9cdb] text-2xl"><FaCalendarAlt /></span> One Day, One Elder
              </h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed font-medium">
                <span className="font-bold text-gray-800">₹150</span> — covers all three meals for one elder for a full day.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 border-t-4 border-t-[#E58F00] p-6 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="font-serif text-xl font-bold text-[#0a231a] mb-4 flex items-center gap-3">
                <span className="text-[#e35957] text-2xl"><FaHome /></span> Full Home, One Day
              </h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed font-medium">
                Contact us for the current cost to sponsor meals for the entire Aanandam family for a day — a wonderful way to mark a special occasion.
              </p>
            </div>
          </div>
        </motion.div>



        {/* Hindi SEO / Summary Section */}
        <motion.div
          className="mt-16 bg-[#FFFDF5] rounded-xl border-l-[6px] border-l-[#E58F00] p-8 md:p-10 shadow-sm relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="absolute top-6 right-6 text-[#E58F00] text-sm font-bold">हिंदी</div>
          <h3 className="font-serif font-bold text-2xl md:text-[26px] mb-6 text-[#9a3412]">
            एक भोजन प्रायोजित करें — अन्नदान
          </h3>
          <div className="space-y-4 text-gray-700 text-[15.5px] leading-[1.8] font-medium">
            <p>
              सिर्फ ₹51 में एक बुजुर्ग को आज भोजन दें। आनंदम् वृद्धाश्रम (करला, रोहिणी सेक्टर-38 के पास, दिल्ली) में हर भोजन एक सम्मान है।
            </p>
            <p>
              जन्मदिन, सालगिरह या अपने प्रियजनों की याद में 'अन्नदान' करें — यह सबसे सरल और सीधा सहयोग है।
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="bg-[#E58F00] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-sm">अन्नदान वृद्धाश्रम</span>
            <span className="bg-[#E58F00] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-sm">भोजन दान ₹51</span>
            <span className="bg-[#E58F00] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-sm">बुजुर्ग को भोजन दें</span>
          </div>
        </motion.div>

        {/* Contact Banner */}
        <motion.div
          className="mt-10 bg-[#1f2937] rounded-xl p-8 md:p-10 shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h3 className="font-serif font-bold text-2xl text-white mb-6 flex items-center gap-3">
            <span className="text-[#e81cff] text-2xl"><FaPhoneAlt /></span> Sponsor a Meal Now
          </h3>
          <p className="text-white/90 text-[14.5px] leading-[2]">
            <span className="font-bold">Phone / WhatsApp:</span> +91-9310105630 (24×7) | <span className="font-bold">Website:</span> www.vridhashram.in/sponsor-a-meal
          </p>
        </motion.div>

      </section>
    </div>
  );
}

export default SponsorAMeal;
