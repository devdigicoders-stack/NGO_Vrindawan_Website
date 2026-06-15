import React from 'react';
import { PhoneCall } from 'lucide-react';

const CelebrateSeoHindi = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-8">
      {/* Hindi SEO Box */}
      <div className="bg-[#FAF8F5] border-l-4 border-[#F59E0B] p-6 sm:p-8 rounded-r-xl relative shadow-sm">
        <span className="absolute top-4 right-4 text-[#F59E0B] font-medium text-sm">हिंदी</span>
        
        <h2 className="text-xl sm:text-2xl font-bold text-[#D84315] mb-4">
          बुजुर्गों के साथ उत्सव मनाएं
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed italic text-[15px] sm:text-base">
          <p>
            आनंदम् वृद्धाश्रम (करला, रोहिणी सेक्टर-38 के पास, दिल्ली) में अपना जन्मदिन, सालगिरह या त्योहार बुजुर्गों के साथ मनाएं और किसी की ज़िंदगी में खुशियाँ भरें।
          </p>
          <p>
            केक, मिठाई, सांस्कृतिक कार्यक्रम या 'अन्नदान' के साथ अपने खास दिन को और भी खास बनाएं। कॉरपोरेट टीम्स के लिए यह एक बेहतरीन CSR गतिविधि भी है।
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="bg-[#F59E0B] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-sm">
            वृद्धाश्रम में जन्मदिन मनाएं
          </span>
          <span className="bg-[#F59E0B] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-sm">
            बुजुर्गों के साथ त्योहार
          </span>
          <span className="bg-[#F59E0B] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-sm">
            अन्नदान वृद्धाश्रम
          </span>
        </div>
      </div>

      {/* Book a Celebration Dark Card */}
      <div className="bg-[#1a1f2e] text-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-2">
          <PhoneCall className="text-pink-500" size={24} />
          <h3 className="text-xl sm:text-2xl font-serif font-bold">Book a Celebration</h3>
        </div>
        <p className="text-gray-300 text-sm sm:text-base font-medium">
          +91-9310105630 <span className="mx-2">|</span> www.vridhashram.in/celebrate-with-elders
        </p>
      </div>
    </div>
  );
};

export default CelebrateSeoHindi;
