import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Handshake, Camera, Home } from 'lucide-react';
import PageHero from '../Component/PageHero';

function SponsorAnElder() {
  const expenses = [
    { name: "Daily Meals (3 + tea)", cost: "₹3,500", desc: "No hunger. Ever. For an entire month." },
    { name: "Medicines & Health", cost: "₹500", desc: "Their health is monitored and cared for." },
    { name: "Toiletries & Hygiene", cost: "₹300", desc: "Clean, dignified daily living." },
    { name: "Clothing & Essentials", cost: "₹700", desc: "Seasonally appropriate clothing and personal items." },
    { name: "Staff & Activities", cost: "₹1,000", desc: "Yoga, bhajans, celebrations, daily care." },
    { name: "Total", cost: "₹6,500", desc: "One complete, dignified, joyful month of life.", isTotal: true }
  ];

  const steps = [
    {
      title: "Choose to Support Us",
      desc: "Set up a monthly contribution of ₹6,500 (or more — every extra rupee benefits the community). We can set up auto-debit for your convenience.",
      icon: <Heart size={32} />
    },
    {
      title: "Meet Your Elder",
      desc: "We will introduce you (virtually or in person) to the elder your contribution supports. You will receive their photo, name and a short story.",
      icon: <Handshake size={32} />
    },
    {
      title: "Stay Connected",
      desc: "Every month, we send you a brief update — a photo, a blessing, a small story from your elder's life at Aanandam. You will never wonder where your money went.",
      icon: <Camera size={32} />
    },
    {
      title: "Visit Anytime",
      desc: "Sponsors are always welcome to visit Aanandam and meet their elder in person. Many Sponsors become regular visitors — and lasting friends.",
      icon: <Home size={32} />
    }
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
        title="Support Us an Elder"
        description="Become the anchor in someone's twilight years. Your monthly commitment gives an abandoned elder a life of dignity, health, and love."
        hideBreadcrumb={true}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-2 max-w-7xl mx-auto space-y-24">

        {/* Intro Section with Image Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl group h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/fwd47photos/46.jpg"
              alt="Elderly smiling"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a231a] to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl text-white">
                <p className="font-serif italic text-lg leading-relaxed">
                  "Every elder deserves to be loved, not forgotten."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#0a231a] leading-tight">
              The Grandparent You Never Had Is Waiting for You at Aanandam.
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium">
              <p>
                For <span className="text-[#C62828] font-bold">₹6,500 a month</span> — the cost of two restaurant dinners in a city like Delhi — you can completely Support Us the life of one abandoned elder at Aanandam. Every rupee of your monthly contribution covers their food, shelter, clothing, medicines, toiletries and activities for an entire month.
              </p>
              <p className="bg-[#FDD835]/10 p-6 rounded-2xl border border-[#FDD835]/30 text-[#0a231a]">
                Nothing passes through unnecessary hands. Nothing is lost in administration. Your contribution goes directly, immediately and completely to the elder you Support Us.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Cost Breakdown Table */}
        <motion.div
          className="max-w-7xl mx-auto w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-3xl text-[#F59E0B] mb-8 text-center sm:text-left">
            What ₹6,500 / Month Covers
          </h2>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0a231a] text-white">
                    <th className="py-5 px-6 font-bold tracking-wider text-sm uppercase w-1/3">Expense</th>
                    <th className="py-5 px-6 font-bold tracking-wider text-sm uppercase w-1/4">Monthly Cost</th>
                    <th className="py-5 px-6 font-bold tracking-wider text-sm uppercase">What It Means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {expenses.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, backgroundColor: "#ffffff" }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`hover:bg-gray-50 transition-colors ${item.isTotal ? 'bg-[#E8F5E9] border-t-2 border-[#2E7D32]' : ''}`}
                    >
                      <td className={`py-5 px-6 ${item.isTotal ? 'font-bold text-[#0a231a] text-lg' : 'text-gray-700 font-medium'}`}>
                        {item.name}
                      </td>
                      <td className={`py-5 px-6 ${item.isTotal ? 'font-black text-[#C62828] text-xl' : 'text-gray-800 font-bold'}`}>
                        {item.cost}
                      </td>
                      <td className={`py-5 px-6 ${item.isTotal ? 'font-bold text-[#2E7D32]' : 'text-gray-600'}`}>
                        {item.desc}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* How Sponsorship Works */}
        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] mb-12 text-center">
            How Sponsorship Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-white px-6 py-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group cursor-pointer overflow-hidden min-h-[350px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* The Sliding Yellow Background */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#FDD835] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

                {/* Big Number at the Bottom */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[120px] font-black text-gray-100 group-hover:text-[#0a231a]/10 transition-colors duration-500 z-0 leading-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 bg-[#FDD835] group-hover:bg-white text-[#0a231a] rounded-full flex items-center justify-center text-2xl shadow-sm mb-6 transition-colors duration-500">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0a231a] mb-4">{step.title}</h3>

                  {/* Divider Line */}
                  <div className="w-12 h-[2px] bg-gray-200 group-hover:bg-[#0a231a]/20 mb-4 transition-colors duration-500"></div>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-[#0a231a] leading-relaxed font-medium transition-colors duration-500 text-sm">
                    {step.desc}
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
              "I started Sponsoring Shanti Ji six months ago. Last month, she sent me a hand-embroidered card for my birthday through the Aanandam team. I cried. I didn't know a ₹6,500 decision would change my life this much."
            </p>
            <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">
              — Neha Arora, Corporate Professional, Gurgaon
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
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#C62828]/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="font-serif font-black text-2xl sm:text-3xl text-white">
              One Rupee, One Life, One Month at a Time
            </h2>
            <p className="text-white/90 text-lg leading-relaxed font-medium max-w-3xl">
              You do not have to change the world today. You just have to make sure one elder sleeps well tonight, eats well tomorrow, and wakes up to a morning that feels worth living. ₹6,500 a month. That is all it takes. That is everything it takes.
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 pb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="/Support Us" className="w-full sm:w-auto bg-[#C62828] hover:bg-[#B71C1C] text-white font-bold py-4 px-10 rounded-2xl shadow-xl transition transform hover:-translate-y-1 hover:shadow-2xl text-lg text-center border-2 border-[#C62828]">
            Start Monthly Sponsorship
          </a>
          <a href="https://wa.me/919310105630" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold py-4 px-10 rounded-2xl shadow-xl transition transform hover:-translate-y-1 hover:shadow-2xl text-lg text-center flex items-center justify-center gap-3 border-2 border-[#2E7D32]">
            Meet Elders to Support Us
          </a>
        </motion.div>

      </section>
    </div>
  );
}

export default SponsorAnElder;
