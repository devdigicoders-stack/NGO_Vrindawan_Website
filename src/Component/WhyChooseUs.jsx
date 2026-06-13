import React from 'react';
import { Link } from 'react-router-dom';
import impact1 from '../assets/impact_1.png';
import impact2 from '../assets/impact_2.png';

export default function WhyChooseUs() {
  const points = [
    {
      id: 1,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "100% Free of Cost: No hidden charges, completely free for life."
    },
    {
      id: 2,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      text: "Family-like Environment: Replacing isolation with companionship."
    },
    {
      id: 3,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Holistic Care: Providing nutritious food and medical support."
    }
  ];

  return (
    <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-2 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side: Content */}
          <div className="space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FDD835]"></span>
              <span className="text-[13px] font-bold text-gray-700 uppercase tracking-wide">Why Choose Us</span>
            </div>

            {/* Heading & Paragraph */}
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] leading-[1.25]">
              Every Elder Deserves a Family. Aanandam Is That Family.
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-[16px] sm:text-[17px] leading-[1.7] font-medium">
                Aanandam Vridhashram was built for them. Not as a charity. Not as an institution. But as a home — with warm meals, familiar laughter, festival celebrations, and the gentle reassurance that they are not alone.
              </p>
              <p className="text-gray-600 text-[16px] sm:text-[17px] leading-[1.7] font-medium">
                Located in the heart of Karala Village, near Rohini, Delhi, Aanandam is a 100% free old age home — where no elder pays a single rupee for their stay, food, care, or joy. Every resource here flows from the compassion of donors, volunteers, and well-wishers like you.
              </p>
            </div>

            {/* Mission Statement Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_rgb(0,0,0,0.06)] border-l-4 border-[#FDD835]">
              <p className="text-[#0a231a] font-bold text-[18px] sm:text-[20px] leading-relaxed mb-4">
                आनंदम् वृद्धाश्रम — एक ऐसा घर जहाँ बुजुर्गों को मिलता है प्यार, सम्मान और परिवार।
              </p>
              <p className="text-gray-600 font-medium text-[16px] sm:text-[18px]">
                <span className="text-[#0a231a] font-bold">100% निःशुल्क।</span>
                <span className="text-[#0a231a] font-bold ml-2">100% दिल से।</span>
                <span className="text-[#0a231a] font-bold ml-2">100% आपके लिए।</span>
              </p>
            </div>


          </div>

          {/* Right Side: Images */}
          <div className="relative flex justify-center lg:justify-end pt-10 sm:pt-0 group cursor-pointer">
            {/* Main Image */}
            <div className="relative w-full max-w-[400px] h-[550px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out group-hover:shadow-[0_20px_50px_rgba(10,35,26,0.3)] group-hover:translate-x-4 group-hover:-translate-y-4">
              {/* Center to Sides Hover Animation with Fade-out */}
              <div className="absolute inset-0 bg-white/30 scale-x-0 opacity-100 group-hover:scale-x-100 group-hover:opacity-0 transition-all duration-1000 ease-out origin-center z-10 pointer-events-none"></div>
              <img src={impact1} alt="Elders at Aanandam" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

            {/* Overlapping Small Image */}
            <div className="absolute -left-4 sm:-left-12 bottom-10 w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white transition-all duration-700 ease-out group-hover:-translate-x-6 group-hover:translate-y-4 group-hover:scale-105 z-10">
              {/* Center to Sides Hover Animation with Fade-out */}
              <div className="absolute inset-0 bg-white/30 scale-x-0 opacity-100 group-hover:scale-x-100 group-hover:opacity-0 transition-all duration-1000 ease-out origin-center z-10 pointer-events-none"></div>
              <img src={impact2} alt="Volunteer helping elder" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
