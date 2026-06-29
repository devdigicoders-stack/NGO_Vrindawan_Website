import React from 'react';

export default function AboutSeoSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#FAFAF5] rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a231a] mb-6 font-serif text-center sm:text-left">
            आनंदम् की कहानी — एक सपने से बना घर
          </h2>
          
          <div className="space-y-4 text-gray-700 text-[15px] sm:text-[16px] leading-relaxed mb-8">
            <p>
              आनंदम् वृद्धाश्रम की शुरुआत एक मंच से हुई।
            </p>

            <p>
              हमारे संस्थापक निराज गेरा जी दिल्ली के विभिन्न वृद्धाश्रमों में जाकर बुजुर्गों से मिलते थे। हर साल वे एक कार्यक्रम आयोजित करते — "Oldies Got Talent" — जहाँ बुजुर्ग गाते, नाचते, कविता सुनाते और रैम्प वॉक करते। तीन महीने की तैयारी में जो बदलाव आता था — वह किसी दवाई से नहीं आ सकता था।
            </p>
            
            <p className="text-[#2E7D32] font-semibold text-[16px] sm:text-[17px]">
              उसी पल निराज जी ने सोचा: "एक ऐसा घर हो जहाँ यह खुशी हर रोज़ मिले।"
            </p>

            <p>
              और इस तरह जन्म हुआ आनंदम् वृद्धाश्रम का — करला गाँव, रोहिणी के पास, दिल्ली में।
            </p>

            <p>
              यहाँ कोई प्रवेश शुल्क नहीं, कोई मासिक किराया नहीं। सिर्फ प्यार, सम्मान और एक ऐसा परिवार जो छोड़कर नहीं जाता।
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200 flex flex-wrap justify-center sm:justify-start gap-2 text-[12px] text-gray-600 font-medium">
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">आनंदम् वृद्धाश्रम के बारे में</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">दिल्ली वृद्धाश्रम कहानी</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">Oldies Got Talent</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">निराज गेरा वृद्धाश्रम</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">मानवीय फाउंडेशन</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">बुजुर्गों के लिए खुशियाँ</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">योग ध्यान वृद्धाश्रम</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">भजन सत्संग वृद्ध आश्रम</span>
          </div>
        </div>
      </div>
    </section>
  );
}
