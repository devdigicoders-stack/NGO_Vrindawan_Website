import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../Component/PageHero";

import TeamSection from "../Component/TeamSection";
import AboutSeoSection from "../Component/AboutSeoSection";
import OtherServiceProjects from "../Component/OtherServiceProjects";
import WhatMakesUsDifferent from "../Component/WhatMakesUsDifferent";

function About() {
  return (
    <div className="bg-[#FAFAF5] min-h-screen">
      <PageHero
        title="About Aanandam"
        description="We are not just an NGO. We are a family for those who have been forgotten."
      />


      <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-2">

        {/* New Origin Story Section */}
        <div className="space-y-6 mb-20 pt-8 sm:pt-12">
          <div className="text-center mb-2">
            <span className="text-[#E5A937] font-bold tracking-[0.15em] uppercase text-[13px]">Origin Story</span>
          </div>
          <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-[34px] text-[#1B5E20] mb-8 text-center">
            It Began on a Stage — And Grew Into a Home
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] sm:text-[16px] font-medium">
            <p>
              For several years before Aanandam existed, our founder Niraj Gera would do something unusual. He would walk into old age homes across Delhi — not with forms or inspections, but with music, energy and a camera. He would sit beside elders who hadn't been visited in months, listen to their stories, and then ask them something nobody had asked in a long time: <em className="text-gray-900 font-serif">"What are you good at?"</em>
            </p>
            <p>
              The answers were extraordinary. A man who had spent 40 years as a classical singer. A woman who had danced at weddings across Rajasthan. A retired teacher who still composed poetry in his room every morning. A former tailor who could sew anything from memory. All of them living in silence — their talents folded away like old letters, unseen.
            </p>
            <p>
              Niraj's response was to create <strong className="text-gray-900">Oldies Got Talent</strong> — an annual event where residents from old age homes across Delhi were given a real stage, a real audience, and a real performance. Singers sang. Dancers danced. Poets recited. One grandmotherly woman in her eighties walked the ramp to a standing ovation she will carry to her last day.
            </p>

            <div className="my-10 bg-[#FEF5E7] border-l-[6px] border-[#E5A937] p-8 sm:p-10 rounded-r-xl shadow-sm">
              <p className="font-serif italic text-[16px] sm:text-[18px] lg:text-[19px] text-[#2E7D32] leading-relaxed">
                "But what moved me most wasn't the performance. It was the three months before it — the weeks of rehearsal, the anticipation, the laughter in practice sessions, the way residents who had stopped caring about tomorrow suddenly had something to wake up for. That was the real medicine."
              </p>
              <p className="mt-6 text-[13.5px] text-gray-500 font-medium font-serif">
                — Niraj Gera, Founder, Humanify Foundation
              </p>
            </div>

            <p>
              Niraj began to imagine something: <strong className="text-gray-900">a home where that feeling wasn't annual, but daily.</strong> Where yoga began each morning not as exercise but as intention. Where bhajans rose each evening not as routine but as belonging. Where residents didn't just eat and sleep — but sang, laughed, rehearsed, created, contributed, and mattered.
            </p>
            <p>
              In 2021, that imagination became <strong className="text-gray-900">Aanandam Vridhashram.</strong>
            </p>
            <p>
              Located in Karala Village, near Rohini, Delhi — Aanandam is a 100% free old age home for abandoned, neglected and homeless senior citizens, built around one belief: that the last chapter of a person's life deserves to be the most dignified, most joyful, most meaningful of all.
            </p>
          </div>
        </div>

        {/* Two Columns Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-20">

          {/* Vision Box (Previously Pillars) */}
          <div className="relative group bg-white border-2 border-[#FDD835]/60 rounded-xl p-8 sm:p-10 shadow-sm overflow-hidden h-full">
            {/* Sliding Dark Green Background */}
            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

            <div className="relative z-10">
              <h3 className="font-serif font-black text-[22px] sm:text-2xl text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-6 border-b border-gray-100 group-hover:border-white/20 pb-4 uppercase tracking-[0.1em]">
                Our Vision
              </h3>

              <div className="space-y-6 text-[15px] sm:text-[16px] text-gray-700 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                <p className="font-serif font-bold text-xl sm:text-2xl text-[#0a231a] group-hover:text-white transition-colors duration-300">
                  A home where no elder feels forgotten, unloved, or without purpose.
                </p>
                <p>
                  We are working toward becoming one of India's most joyful, most trusted and most deeply human elder care sanctuaries — where peace, dignity and joy are not goals, but daily realities.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Box (Previously Vision) */}
          <div className="relative group bg-white border-2 border-[#2E7D32]/70 rounded-xl p-8 sm:p-10 shadow-sm overflow-hidden h-full flex flex-col">
            {/* Sliding Dark Green Background */}
            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

            <div className="relative z-10 flex-grow flex flex-col">
              <h3 className="font-serif font-black text-[22px] sm:text-2xl text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-6 border-b border-gray-100 group-hover:border-white/20 pb-4 uppercase tracking-[0.1em]">
                Our Mission
              </h3>

              <div className="space-y-4 text-[14.5px] sm:text-[15px] text-gray-700 group-hover:text-white/90 transition-colors duration-300 leading-relaxed flex-grow">
                <p className="font-serif font-bold text-xl sm:text-2xl text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-6">
                  To give every elder a home, a voice, a community and a reason to smile.
                </p>

                <div className="space-y-3 pt-2">
                  <p className="flex gap-3">
                    <span className="text-[#2E7D32] group-hover:text-[#FDD835] transition-colors duration-300">—</span>
                    <span>Provide free shelter, nourishment and care</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-[#2E7D32] group-hover:text-[#FDD835] transition-colors duration-300">—</span>
                    <span>Restore dignity through respect and genuine attention</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-[#2E7D32] group-hover:text-[#FDD835] transition-colors duration-300">—</span>
                    <span>Nurture mental and emotional wellbeing daily</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-[#2E7D32] group-hover:text-[#FDD835] transition-colors duration-300">—</span>
                    <span>Build a community where elders belong, contribute and are celebrated</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-[#2E7D32] group-hover:text-[#FDD835] transition-colors duration-300">—</span>
                    <span>Grow into a model that other communities can replicate</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* What Makes Aanandam Different */}
      <WhatMakesUsDifferent />

      {/* Other Service Projects Section */}
      <OtherServiceProjects />

      {/* Team Section */}
      <TeamSection />

      {/* SEO Section for About Page */}
      <AboutSeoSection />

    </div>
  );
}

export default About;
