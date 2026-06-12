import React from 'react';

const items = [
  "Community Support",
  "Health Support",
  "Volunteer Impact",
  "Future Ready",
  "Community Support",
  "Health Support",
  "Volunteer Impact",
  "Future Ready"
];

export default function Ticker() {
  return (
    <div className="w-full overflow-hidden bg-[#FDD835] py-5 sm:py-7 border-y border-[#0a231a]/10 relative flex items-center">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 50s linear infinite;
            display: flex;
            width: max-content;
          }
          /* Pause on hover for better user experience */
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <div className="animate-marquee whitespace-nowrap">
        {/* Double the content so it loops seamlessly when translating -50% */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <div key={`${i}-${index}`} className="flex items-center">
                <span className="text-[#0a231a] font-bold text-[15px] sm:text-[17px] tracking-[0.15em] uppercase">
                  {item}
                </span>
                <span className="mx-6 sm:mx-12 text-[#0a231a] text-lg sm:text-xl font-black">
                  ✱
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
