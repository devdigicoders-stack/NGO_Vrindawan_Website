import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import service1 from '../assets/service_1.png';
import service2 from '../assets/service_2.png';
import service3 from '../assets/service_3.png';

export default function ServicesSection() {
  // Default to the middle card (index 1) being active
  const [activeIndex, setActiveIndex] = useState(1);

  const services = [
    {
      id: 0,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Free Stay & Shelter",
      desc: "Providing a clean, safe, and comfortable living environment where elderly people can live with dignity and respect.",
      img: service1
    },
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Nutritious Meals",
      desc: "Delivering three fresh, highly nutritious, and satvik vegetarian meals daily to ensure optimal health and well-being.",
      img: service2
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Yoga & Spiritual Care",
      desc: "Promoting physical and mental peace through daily yoga sessions, spiritual discourses, and joyful community activities.",
      img: service3
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-2 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FDD835]"></span>
            <span className="text-[13px] font-bold text-gray-700 uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="font-serif font-black text-4xl sm:text-5xl text-[#0a231a] mb-6">
            Our Actions for Elderly Care
          </h2>
          <p className="text-gray-600 text-[16px] sm:text-[17px] leading-relaxed">
            We turn compassion into action by providing a loving family environment, nutritious food, and holistic healthcare to abandoned senior citizens.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative h-[420px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border ${isActive ? 'border-transparent shadow-[0_20px_50px_rgb(0,0,0,0.15)] scale-[1.02]' : 'border-gray-100 shadow-sm hover:shadow-md'
                  }`}
              >
                {/* Background Layer (White or Image) */}
                <div
                  className={`absolute inset-0 bg-white transition-opacity duration-500 z-0 ${isActive ? 'opacity-0' : 'opacity-100'}`}
                ></div>

                {/* Image Layer */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 z-0 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                  style={{ backgroundImage: `url(${service.img})` }}
                >
                  {/* Dark overlay for text readability when active */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                </div>

                {/* Content Layer */}
                <div className="relative z-10 h-full p-8 flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#FDD835] rounded-full flex items-center justify-center text-[#0a231a] mb-8 shadow-sm">
                    {service.icon}
                  </div>

                  {/* Text */}
                  <div className="mt-auto">
                    <h3 className={`font-serif font-black text-2xl mb-4 transition-colors duration-500 ${isActive ? 'text-white' : 'text-[#0a231a]'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-[15px] leading-relaxed mb-8 transition-colors duration-500 ${isActive ? 'text-gray-200' : 'text-gray-500'}`}>
                      {service.desc}
                    </p>

                    {/* Read More link */}
                    <div className={`border-t pt-5 transition-colors duration-500 ${isActive ? 'border-white/20' : 'border-gray-200/50'}`}>
                      <Link to="/donate" className={`inline-flex items-center text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${isActive ? 'text-white hover:text-[#FDD835]' : 'text-[#0a231a] hover:text-[#FDD835]'}`}>
                        Read More
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
