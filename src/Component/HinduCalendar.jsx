import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

function HinduCalendar() {
  const dates = [
    { event: "Makar Sankranti", period: "January", description: "Auspicious day for Anna Daan (Food Donation) to seek blessings for the new year." },
    { event: "Maha Shivaratri", period: "February / March", description: "A highly spiritual night. Donating on this day brings inner peace and prosperity." },
    { event: "Holi", period: "March", description: "Festival of colors and joy. Bring smiles to the elders by donating sweets and clothes." },
    { event: "Chaitra Navratri & Ram Navami", period: "March / April", description: "Nine days of divine mother worship. Kanya Pujan and elder feeding are highly rewarding." },
    { event: "Akshaya Tritiya", period: "April / May", description: "The day of unending prosperity. Any charity done today is said to multiply manifold." },
    { event: "Guru Purnima", period: "July", description: "Honor the wisdom of elders and gurus. A perfect day to sponsor an elder's care." },
    { event: "Janmashtami", period: "August", description: "Celebrate Lord Krishna's birth by feeding the hungry and spreading joy at the ashram." },
    { event: "Pitru Paksha (Shradh)", period: "September / October", description: "The most important fortnight to honor ancestors. Feeding elders brings peace to departed souls." },
    { event: "Sharad Navratri & Dussehra", period: "October", description: "Triumph of good over evil. Celebrate by gifting new clothes and festive meals." },
    { event: "Diwali", period: "October / November", description: "Festival of Lights. Light up a lonely elder's life with your generous contribution." },
    { event: "Kartik Purnima", period: "November", description: "A highly auspicious full moon day for taking dips in holy rivers and doing charity." },
    { event: "Geeta Jayanti", period: "December", description: "The birth of Bhagavad Gita. Support spiritual sessions and well-being of the elderly." }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-[#FDD835]/30 my-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CalendarDays className="text-[#D32F2F]" size={32} />
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a]">
              Auspicious Days for Giving
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-medium">
            In Hindu culture, donating (Daan) on specific auspicious days multiplies the spiritual merit (Punya). Consider marking these dates to bring joy to our elders and receive their heartfelt blessings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dates.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-[#FAFAF5] p-6 rounded-2xl border border-[#FDD835]/50 shadow-sm hover:shadow-md hover:border-[#D32F2F]/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif font-bold text-xl text-[#D32F2F] mb-1 group-hover:text-[#0a231a] transition-colors">
                {item.event}
              </h3>
              <p className="text-[#E58F00] font-bold text-sm mb-3 uppercase tracking-wide">
                {item.period}
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#0a231a] font-bold text-lg mb-6 bg-[#FDD835]/20 inline-block px-8 py-3 rounded-full border border-[#FDD835]">
            "Annadaan is Mahadaan" — The greatest charity is the charity of food.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HinduCalendar;
