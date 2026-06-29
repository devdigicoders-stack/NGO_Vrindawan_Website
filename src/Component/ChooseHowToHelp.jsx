import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ChooseHowToHelp() {
  const cards = [
    {
      id: 1,
      price: "Any ₹",
      title: "One-Time Donation",
      desc: "Give whatever your heart allows — ₹100 or ₹1,00,000. Every amount matters. Every amount reaches someone who needs it.",
      btnText: "Donate Now",
      btnLink: "/donate",
      btnClass: "bg-[#C62828] hover:bg-[#b71c1c] text-white",
      highlight: false,
      infoBox: null
    },
    {
      id: 2,
      price: "₹3,100",
      title: "Sponsor a Meal",
      desc: "Sponsor one full lunch or dinner for all our residents — on your birthday, anniversary, or any day you want to mark with meaning. Your name is announced at the meal.",
      btnText: "Sponsor a Meal",
      btnLink: "/donate",
      btnClass: "bg-[#C62828] hover:bg-[#b71c1c] text-white",
      highlight: true,
      tag: "MOST LOVED",
      infoBox: null
    },
    {
      id: 3,
      price: "₹6,500",
      suffix: "/month",
      title: "Support an Elder",
      desc: "Cover the complete monthly care of one elder — food, shelter, clothing, health support and activities. You receive a photo update every month.",
      btnText: "Sponsor Monthly",
      btnLink: "/donate",
      btnClass: "bg-[#C62828] hover:bg-[#b71c1c] text-white",
      highlight: false,
      infoBox: {
        title: "⚡ Set up once, help every month automatically.",
        text: "After clicking below, choose \"Monthly\" on the payment page — your bank or UPI will auto-debit on the same date each month. No reminders needed. Cancel anytime."
      }
    },
    {
      id: 4,
      price: "Any ₹",
      suffix: "/month",
      title: "Monthly Giving",
      desc: "Choose any fixed amount and set it as a recurring monthly gift. Even ₹500 a month feeds an elder every day. A small habit with a large heart.",
      btnText: "Start Monthly Giving",
      btnLink: "/donate",
      btnClass: "bg-[#C62828] hover:bg-[#b71c1c] text-white",
      highlight: false,
      infoBox: {
        title: "⚡ Works like a SIP — once set, it runs itself.",
        text: "Select \"Recurring\" on checkout, confirm once, and your chosen amount is deducted automatically every month through your UPI or card. We send a WhatsApp receipt each time."
      }
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0a231a] mb-4">
            Choose How You Want to Help
          </h2>
          <p className="text-gray-700 text-lg">
            Every rupee reaches an elder directly. Pick the way that feels right to you — a one-time gesture, a meaningful celebration, or a quiet ongoing promise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-8 lg:p-10 border shadow-[0_4px_20px_rgb(0,0,0,0.04)] ${
                card.highlight ? 'border-[3px] border-[#E5A937] bg-[#FFFEF7]' : 'border-gray-200'
              }`}
            >
              {card.highlight && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#E5A937] text-white text-[11px] font-bold uppercase tracking-widest py-1.5 px-5 rounded-full shadow-sm">
                  {card.tag}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-[#C62828] text-4xl lg:text-[44px] font-bold mb-2">
                  {card.price}
                  {card.suffix && <span className="text-gray-400 text-xl font-medium">{card.suffix}</span>}
                </h3>
                <h4 className="font-serif text-[22px] text-[#0a231a] font-bold">
                  {card.title}
                </h4>
              </div>

              <p className="text-gray-600 text-[15px] leading-[1.7] mb-8 font-medium">
                {card.desc}
              </p>

              {card.infoBox && (
                <div className="bg-[#E8F5E9] rounded-lg p-5 mb-8 border border-[#C8E6C9]">
                  <p className="text-[#1B5E20] text-[14px] font-bold mb-1.5">
                    {card.infoBox.title}
                  </p>
                  <p className="text-[#2E7D32] text-[13.5px] leading-relaxed">
                    {card.infoBox.text}
                  </p>
                </div>
              )}

              <Link
                to={card.btnLink}
                className={`inline-block font-bold py-3.5 px-8 rounded shadow-md transition-colors text-[15px] ${card.btnClass}`}
              >
                {card.btnText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
