import React from 'react';
import { Phone, Globe } from 'lucide-react';

export default function SeoHindiSection() {
  return (
    <section className="bg-[#1b4332] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#0a231a]">
      <div className="max-w-5xl mx-auto text-center sm:text-left">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-[#FDD835] mb-4 font-serif">
          आनंदम् वृद्धाश्रम — दिल्ली का सबसे भरोसेमंद निःशुल्क वृद्धाश्रम
        </h2>
        
        <div className="space-y-4 text-white/90 text-[15px] sm:text-[16px] leading-relaxed">
          <p>
            आनंदम् वृद्धाश्रम करला गाँव, रोहिणी सेक्टर-38 के पास, पीतमपुरा और कंझावला के निकट, दिल्ली एनसीआर में स्थित एक 100% निःशुल्क वृद्धाश्रम (मुफ्त वृद्ध आश्रम) है। यहाँ हर परित्यक्त और एकाकी बुजुर्ग को नि:शुल्क आश्रय, भोजन, स्वास्थ्य देखभाल, योग-ध्यान और एक परिवार मिलता है।
          </p>

          <p>
            हमारे संस्थापक — <span className="font-bold text-[#FDD835]">नीरज गेरा</span>, विश्व रिकॉर्ड धारक, NITI आयोग 'Mentor of Change' और हुमानिफाई फाउंडेशन के अध्यक्ष। हमारा सपना है — भारत का सबसे खुशहाल वृद्धाश्रम बनना।
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white font-bold">
            <a href="tel:+919310105630" className="flex items-center gap-2 hover:text-[#FDD835] transition-colors whitespace-nowrap">
              <Phone className="w-5 h-5 text-[#FDD835]" /> +91-9310105630
            </a>
            <a href="https://www.vridhashram.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FDD835] transition-colors whitespace-nowrap">
              <Globe className="w-5 h-5 text-[#FDD835]" /> www.vridhashram.in
            </a>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end gap-2 text-[12px] text-white/80">
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 shadow-sm">निःशुल्क वृद्धाश्रम दिल्ली</span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 shadow-sm">मुफ्त बुजुर्ग आश्रम</span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 shadow-sm">वृद्धाश्रम करला रोहिणी पीतमपुरा</span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 shadow-sm">बुजुर्ग देखभाल दिल्ली</span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 shadow-sm">वृद्धाश्रम दान</span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 shadow-sm">vridhashram.in</span>
          </div>
        </div>

      </div>
    </section>
  );
}
