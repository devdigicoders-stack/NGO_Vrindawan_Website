import React from 'react';
import { Phone, Globe } from 'lucide-react';

const StorySeoHindi = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 pb-16">
      <div className="bg-[#FDFCF7] border-l-4 border-[#F57C00] p-8 md:p-10 rounded-r-xl shadow-sm relative">
        <div className="absolute top-4 right-6 text-[#F57C00] text-sm font-semibold opacity-70">हिंदी</div>

        <h2 className="text-xl sm:text-2xl font-bold text-[#D84315] mb-4 italic font-serif">
          हमारे बुजुर्गों की कहानियाँ — हिम्मत और खुशी की
        </h2>

        <div className="space-y-4 text-gray-700 text-[15px] sm:text-base leading-relaxed italic">
          <p>
            वे अकेले थे, परित्यक्त थे — लेकिन अब <span className="font-semibold text-[#D84315]">आनंदम् (करला, रोहिणी सेक्टर-38 के पास, दिल्ली)</span> उनका घर है।
          </p>
          <p className="not-italic font-medium pt-2">
            आप भी किसी बुजुर्ग की ज़िंदगी बदल सकते हैं। सिर्फ <span className="font-bold text-[#D84315]">₹1,500 प्रति माह</span> में एक बुजुर्ग को प्रायोजित/अपनाएं।
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-700 font-medium italic">
          <a href="tel:+919310105630" className="flex items-center gap-2 hover:text-[#F57C00] transition-colors">
            <Phone className="w-5 h-5 text-[#E91E63]" /> +91-9310105630
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="https://www.vridhashram.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#F57C00] transition-colors">
            <Globe className="w-5 h-5 text-[#29B6F6]" /> <span className="text-gray-700 italic">www.vridhashram.in</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 text-[12px] font-bold">
          <span className="bg-[#F57C00] text-white px-4 py-1.5 rounded-full shadow-sm">बुजुर्ग की कहानी</span>
          <span className="bg-[#F57C00] text-white px-4 py-1.5 rounded-full shadow-sm">एक बुजुर्ग को प्रायोजित करें</span>
          <span className="bg-[#F57C00] text-white px-4 py-1.5 rounded-full shadow-sm">परित्यक्त बुजुर्ग दिल्ली</span>
          <span className="bg-[#F57C00] text-white px-4 py-1.5 rounded-full shadow-sm">sponsor elder india</span>
        </div>
      </div>
    </section>
  );
};

export default StorySeoHindi;
