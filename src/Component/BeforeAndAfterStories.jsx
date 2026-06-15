import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, BookOpen } from 'lucide-react';

const BeforeAndAfterStories = () => {
  const stories = [
    {
      name: '"Chacha Ji"',
      age: 'Age 78',
      profession: 'Retired Government Employee',
      before: 'His three children emigrated abroad and stopped communicating. Found near ISBT Delhi, wearing the same clothes for weeks.',
      after: 'He leads the morning prayer, plays carrom with other elders, and laughs the loudest at every joke.',
      icon: <User size={28} className="text-[#F59E0B]" />
    },
    {
      name: '"Savitri Devi"',
      age: 'Age 71',
      profession: 'Widow',
      before: 'Her husband passed away. Her daughter-in-law turned her out of her own home. Arrived at Aanandam in tears with one small bag.',
      after: 'She cooks kheer on festivals, teaches volunteers how to make chai, and says — "Yahan toh mera parivaar hai."',
      icon: <Heart size={28} className="text-[#C62828]" />
    },
    {
      name: '"Master Ji"',
      age: 'Age 83',
      profession: 'Retired School Teacher',
      before: 'No children, no relatives. Spent years in a slum before being referred to Aanandam by a kind neighbour.',
      after: 'He teaches English alphabets to volunteers\' children. His dignity is fully restored. His spirit is unbreakable.',
      icon: <BookOpen size={28} className="text-[#2E7D32]" />
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto py-8 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="text-center max-w-4xl mx-auto mb-10 space-y-4 mt-12">
        <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a]">
          Before and After
        </h2>
        <h3 className="text-lg sm:text-xl font-bold text-[#F59E0B]">
          Before They Came to Aanandam — and After.
        </h3>
        <p className="text-gray-700 text-base leading-relaxed font-medium">
          These are not statistics. These are human beings — with full lives behind them, with memories and stories, with dignity that was taken from them and which we are giving back. We share these stories (with privacy protected and consent obtained) because the world needs to see the faces behind the numbers. Aanandam Vridhashram, located in Karala Village near Rohini Sector-38, Pitampura, Delhi NCR, is home to dozens of such stories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-100 shadow-inner">
                {story.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0a231a]">{story.name}</h4>
                <p className="text-sm font-semibold text-gray-500">{story.age} — {story.profession}</p>
              </div>
            </div>

            {/* Before */}
            <div className="mb-6 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-200 rounded-full"></div>
              <div className="pl-5">
                <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">Before Aanandam</p>
                <p className="text-gray-600 italic leading-relaxed text-sm">
                  "{story.before}"
                </p>
              </div>
            </div>

            {/* After */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-300 rounded-full"></div>
              <div className="pl-5">
                <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-2">Today at Aanandam</p>
                <p className="text-[#0a231a] font-semibold leading-relaxed">
                  {story.after}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BeforeAndAfterStories;
