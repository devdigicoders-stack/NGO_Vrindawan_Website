import React from 'react';
import PageHero from '../Component/PageHero';
import { FaRupeeSign, FaSpa, FaMicrophoneAlt, FaHandshake, FaOm, FaHeart } from 'react-icons/fa';

function WhyAanandam() {
  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="Why Aanandam?"
        description="Because where you place your trust — or your parent — matters."
        hideBreadcrumb={true}
      />

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-2">
        
        {/* Intro Section */}
        <div className="mb-16 text-center">
          <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-[32px] text-[#2E7D32] mb-6 leading-tight max-w-4xl mx-auto">
            Because Where You Place Your Trust — Or Your Parent — Matters.
          </h2>
          
          <div className="text-gray-700 text-[15.5px] sm:text-[16px] leading-relaxed max-w-4xl mx-auto font-medium space-y-4">
            <p>
              There are many old age homes in Delhi. Some charge ₹15,000 a month. Some charge ₹50,000. Government facilities are overcrowded. And the few truly free ones are often under-resourced, under-staffed and under-loved.
            </p>
            <p>
              Aanandam is none of these things. It is something rarer: a home run by people who genuinely care, founded on a philosophy of joy, trusted by some of India's most respected institutions and individuals — and completely free.
            </p>
            <p className="pt-2">
              Here is why families, donors and organisations choose Aanandam:
            </p>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
            <div className="text-3xl mb-4 text-[#E5A937]"><FaRupeeSign /></div>
            <h4 className="font-serif font-bold text-[20px] text-[#0a231a] mb-4">
              No Fees — Ever
            </h4>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
              No admission charge. No monthly fee. No deposit. No "suggested donation" for staying. Aanandam is 100% free for every resident, funded entirely through community generosity.
            </p>
            <div className="text-[10px] font-bold text-[#2E7D32] tracking-wider uppercase flex flex-wrap gap-1 leading-tight">
              <span>FREE OLD AGE HOME DELHI</span> <span>•</span> <span>NO FEE SENIOR SHELTER</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
            <div className="text-3xl mb-4 text-[#2E7D32]"><FaSpa /></div>
            <h4 className="font-serif font-bold text-[20px] text-[#0a231a] mb-4">
              Joy Is the Philosophy
            </h4>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
              Founded by a Happiness coach — not an administrator. Yoga sessions, happiness programmes, bhajans and spiritual discussions are the daily rhythm here, not occasional extras.
            </p>
            <div className="text-[10px] font-bold text-[#2E7D32] tracking-wider uppercase flex flex-wrap gap-1 leading-tight">
              <span>HAPPINESS FOCUSED ELDER CARE</span> <span>•</span> <span>YOGA OLD AGE HOME DELHI</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
            <div className="text-3xl mb-4 text-[#E5A937]"><FaMicrophoneAlt /></div>
            <h4 className="font-serif font-bold text-[20px] text-[#0a231a] mb-4">
              A Stage, Not Just a Bed
            </h4>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
              Born from Oldies Got Talent — Aanandam residents are encouraged to sing, create, contribute. Elders here are not waiting for time to pass. They are living.
            </p>
            <div className="text-[10px] font-bold text-[#2E7D32] tracking-wider uppercase flex flex-wrap gap-1 leading-tight">
              <span>OLDIES GOT TALENT</span> <span>•</span> <span>CREATIVE ELDER CARE</span> <span>•</span> <span>ACTIVE SENIOR HOME</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
            <div className="text-3xl mb-4 text-[#2E7D32]"><FaHandshake /></div>
            <h4 className="font-serif font-bold text-[20px] text-[#0a231a] mb-4">
              Trusted by India's Best
            </h4>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
              Amul, Axis Max Life, Yes Madam, HelpAge India, and Dr. Kiran Bedi Ji have all visited Aanandam. Their presence is not endorsement through words — it is endorsement through action.
            </p>
            <div className="text-[10px] font-bold text-[#2E7D32] tracking-wider uppercase flex flex-wrap gap-1 leading-tight">
              <span>HELPAGE INDIA PARTNER</span> <span>•</span> <span>AMUL CSR</span> <span>•</span> <span>DR KIRAN BEDI</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
            <div className="text-3xl mb-4 text-[#E5A937]"><FaOm /></div>
            <h4 className="font-serif font-bold text-[20px] text-[#0a231a] mb-4">
              Outings & Spiritual Connection
            </h4>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
              Residents are taken on outbound visits — Vrindavan, temples, parks, cultural events. Because life for our elders does not end at the gate of Aanandam.
            </p>
            <div className="text-[10px] font-bold text-[#2E7D32] tracking-wider uppercase flex flex-wrap gap-1 leading-tight">
              <span>VRINDAVAN TRIP OLD AGE HOME</span> <span>•</span> <span>ELDER OUTING DELHI</span>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
            <div className="text-3xl mb-4 text-[#b71c1c]"><FaHeart /></div>
            <h4 className="font-serif font-bold text-[20px] text-[#0a231a] mb-4">
              A Community, Not an Institution
            </h4>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
              Thirty elders who eat together, pray together, celebrate together, grieve together. Aanandam feels less like a facility and more like the joint family that modern India is losing.
            </p>
            <div className="text-[10px] font-bold text-[#2E7D32] tracking-wider uppercase flex flex-wrap gap-1 leading-tight">
              <span>COMMUNITY ELDER CARE</span> <span>•</span> <span>JOINT FAMILY OLD AGE HOME</span>
            </div>
          </div>

        </div>

        {/* Admission Note Section */}
        <div className="mb-24 text-center">
          <div className="mb-4">
            <h3 className="text-[#E5A937] font-bold tracking-[0.15em] uppercase text-[12px]">
              ADMISSION — HONEST & TRANSPARENT
            </h3>
          </div>
          
          <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-[32px] text-[#0a231a] mb-6 leading-tight max-w-4xl mx-auto">
            We Are Honest About What We Offer
          </h2>
          <p className="text-gray-700 text-[15.5px] sm:text-[16px] leading-relaxed max-w-4xl mx-auto font-medium mb-10">
            Trust is built not just by what you promise — but by what you are willing to honestly not promise. Here is Aanandam's honest admission note, because families deserve clarity:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Left Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 border-t-[5px] border-t-[#2E7D32]">
              <h4 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#0a231a] mb-6 flex items-center gap-2">
                ✅ Who We Are Well-Equipped For
              </h4>
              <ul className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gray-400">✓</span>
                  <span>Senior citizens aged 60+ who are physically independent or semi-dependent</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400">✓</span>
                  <span>Abandoned, neglected or homeless elders with no family support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400">✓</span>
                  <span>Elders who can participate in the community's daily rhythm</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400">✓</span>
                  <span>Those referred by social workers, hospitals, police or concerned individuals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400">✓</span>
                  <span>Elders with no documents — need alone is our only criterion</span>
                </li>
              </ul>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 border-t-[5px] border-t-[#E5A937]">
              <h4 className="font-serif font-bold text-[18px] sm:text-[20px] text-[#0a231a] mb-6 flex items-center gap-2">
                📋 Our Honest Current Limitations
              </h4>
              <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed">
                <p>
                  <strong className="text-[#0a231a]">Intensive personal care:</strong> At this stage of our journey, we are not yet resourced to provide round-the-clock personal attendant care for fully bedridden residents or those requiring intensive supervision due to advanced dementia or similar conditions. We are working to build this capacity and welcome partners who can help us get there.
                </p>
                <p>
                  <strong className="text-[#0a231a]">Medical facilities:</strong> Our healthcare support currently works through regular volunteer doctor camps and health check-ups. For hospitalisation and specialist diagnosis, we work with government facilities. We are actively seeking partnerships with hospitals, pathology labs and diagnostic centres to improve this. <em className="text-[#0a231a]">If your medical institution can help — we would love to hear from you.</em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hindi SEO Block */}
        <div className="bg-[#FFF4E6] border-l-[6px] border-[#E65100] rounded-r-2xl p-8 sm:p-10 shadow-sm relative">
          <span className="absolute top-6 right-6 text-[#E65100]/60 text-[12px] font-bold">हिंदी</span>
          
          <h2 className="text-[#E65100] font-bold text-xl sm:text-2xl mb-2 font-serif italic">
            आनंदम् क्यों चुनें — क्या है यहाँ खास
          </h2>
          <h3 className="text-[#b71c1c] font-bold text-[15.5px] sm:text-[16.5px] mb-8 font-serif italic">
            दिल्ली में आनंदम् वृद्धाश्रम क्यों बेहतर है?
          </h3>
          
          <ul className="space-y-4 text-[#0a231a] font-bold text-[14px] sm:text-[15px] mb-8 italic">
            <li className="flex gap-3">
              <span>✅</span>
              <span><span className="text-[#b71c1c]">कोई शुल्क नहीं</span> — न प्रवेश, न मासिक किराया</span>
            </li>
            <li className="flex gap-3">
              <span>🧘</span>
              <span><span className="text-[#b71c1c]">खुशी और मानसिक स्वास्थ्य पर ध्यान</span> — योग, ध्यान, भजन हर रोज़</span>
            </li>
            <li className="flex gap-3">
              <span>🎤</span>
              <span><span className="text-[#b71c1c]">Oldies Got Talent की विरासत</span> — यहाँ बुजुर्ग सिर्फ रहते नहीं, जीते हैं</span>
            </li>
            <li className="flex gap-3">
              <span>🤝</span>
              <span><span className="text-[#b71c1c]">HelpAge India, अमूल, Yes Madam, Dr. किरण बेदी जी</span> — सभी ने हमें देखा और सराहा</span>
            </li>
            <li className="flex gap-3">
              <span>🕉️</span>
              <span><span className="text-[#b71c1c]">वृंदावन और मंदिर यात्राएँ</span> — बुजुर्गों की आत्मा को भी पोषण मिलता है</span>
            </li>
          </ul>

          <p className="text-[#b71c1c] font-bold italic text-[16px] mb-10">
            अभी संपर्क करें: +91-9310105630
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">आनंदम् क्यों</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">सर्वश्रेष्ठ वृद्धाश्रम दिल्ली</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">निःशुल्क बुजुर्ग देखभाल</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">HelpAge India साझेदार</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">वृंदावन यात्रा बुजुर्ग</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">Oldies Got Talent दिल्ली</span>
            <span className="bg-[#E65100] text-white px-4 py-1.5 rounded-full text-[12.5px] font-bold shadow-sm">विश्वसनीय वृद्धाश्रम दिल्ली</span>
          </div>
        </div>

      </section>
    </div>
  );
}

export default WhyAanandam;
