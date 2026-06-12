import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

// Custom Animated Counter Component
const AnimatedCounter = ({ end, duration = 2.5, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

        // Easing function for smooth deceleration (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  // Format number with Indian numbering system commas
  const formattedCount = count.toLocaleString('en-IN');

  return (
    <span ref={ref}>
      {formattedCount}{suffix}
    </span>
  );
};

export default function ImpactNumbers() {
  const stats = [
    { id: 1, end: 500, label: "Elders Sheltered" },
    { id: 2, end: 100000, label: "Meals Served" },
    { id: 3, end: 2000, label: "Volunteers Joined" },
    { id: 4, end: 150, label: "Celebrations Hosted" },
    { id: 5, end: 25, label: "Years of Service" }
  ];

  return (
    <section className="pt-10 pb-10 px-4 sm:px-6 lg:px-2 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto">

        {/* Green Box */}
        <div className="bg-[#2E7D32] rounded-xl p-8 sm:p-12 shadow-xl mb-16 border-l-8 border-[#FDD835]">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mb-6">
            Our Promise in Numbers
          </h2>
          <p className="text-white/90 text-[16px] sm:text-[18px] leading-[1.8] max-w-5xl font-medium">
            Every number here represents a life touched, a meal shared, a smile restored. These are not just statistics — these are the reasons we wake up every morning and do what we do. <span className="italic font-bold text-[#FDD835]">Join us in making these numbers grow.</span>
          </p>
        </div>

        {/* Animated Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 px-2 sm:px-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center group">
              <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                <AnimatedCounter end={stat.end} />
              </h3>
              <p className="text-gray-500 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
