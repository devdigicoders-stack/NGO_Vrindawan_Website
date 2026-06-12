import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';

function SponsorAMeal() {
  const mealOptions = [
    {
      id: 1,
      price: "₹1,500",
      title: "Breakfast Sponsorship",
      icon: "🌅",
      desc: "Poha / Upma / Daliya / Parathas + Chai. Fresh-made. Warm. Enough to nourish every elder and start their day with energy and love."
    },
    {
      id: 2,
      price: "₹2,500",
      title: "Lunch Sponsorship",
      icon: "🍛",
      desc: "Dal, rice, sabzi, roti, salad, pickle and seasonal specials. A complete, balanced, satisfying midday meal — the centrepiece of the Aanandam day."
    },
    {
      id: 3,
      price: "₹750",
      title: "Evening Tea & Snacks",
      icon: "☕",
      desc: "Hot chai with biscuits, pakodas or seasonal snacks. Small in cost, enormous in comfort — especially on a cold Delhi evening."
    },
    {
      id: 4,
      price: "₹2,500",
      title: "Dinner Sponsorship",
      icon: "🌙",
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

      <section className="py-20 px-4 sm:px-6 lg:px-2 max-w-6xl mx-auto space-y-24">

        {/* Intro Section */}
        <motion.div
          className="space-y-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] leading-tight text-center">
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

              <div className="absolute -right-6 -top-6 text-9xl opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 group-hover:rotate-12 z-0">
                {meal.icon}
              </div>

              <div className="relative z-10 text-center space-y-4">
                <div className="text-4xl font-black text-[#C62828] group-hover:text-[#FDD835] transition-colors duration-300 font-serif tracking-tight">{meal.price}</div>
                <h3 className="text-xl font-bold text-[#0a231a] group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  <span>{meal.icon}</span> {meal.title}
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
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] mb-10">
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

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 pb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="/donate" className="w-full sm:w-auto bg-[#C62828] hover:bg-[#B71C1C] text-white font-bold py-4 px-10 rounded-2xl shadow-xl transition transform hover:-translate-y-1 hover:shadow-2xl text-lg text-center">
            Sponsor a Meal Today
          </a>
          <a href="https://wa.me/919310105630" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold py-4 px-10 rounded-2xl shadow-xl transition transform hover:-translate-y-1 hover:shadow-2xl text-lg text-center flex items-center justify-center gap-3">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            WhatsApp to Arrange
          </a>
        </motion.div>

      </section>
    </div>
  );
}

export default SponsorAMeal;
