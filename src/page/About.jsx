import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../Component/PageHero";
import TeamSection from "../Component/TeamSection";

function About() {
  return (
    <div className="bg-[#FAFAF5] min-h-screen">
      <PageHero
        title="About Aanandam"
        description="We are not just an NGO. We are a family for those who have been forgotten."
      />

      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-2">

        {/* Story Section */}
        <div className="space-y-6 mb-16">
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] mb-6">
            It Began With a Question Nobody Was Asking.
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] sm:text-[16px] font-medium">
            <p>
              The year was 2020. On a quiet evening in Delhi, our founder Niraj Gera was sitting outside a tea stall when he noticed an old man — thin, frail, eyes distant — sitting on the pavement. Not begging. Not sleeping. Just sitting. Watching the world move without him.
            </p>
            <p>
              Niraj stopped. He sat beside him. He asked: <em className="text-[#0a231a] font-semibold">"Ghar kahan hai aapka?"</em>
            </p>
            <p>
              The old man smiled — the kind of smile that carries years of pain — and said simply: <em className="text-[#0a231a] font-semibold">"Pata nahi beta. Ghar tha kabhi."</em> (I don't know, son. There was a home, once.)
            </p>
            <p>
              That evening, Aanandam was born. Not as a plan or a project — but as a <strong className="text-[#0a231a]">promise</strong>. That no elder should ever have to say those words again.
            </p>
          </div>
        </div>

        {/* Quote Block */}
        <div className="bg-[#FFFDE7]/60 border border-[#FDD835]/40 rounded-xl p-8 sm:p-12 mb-20 shadow-sm relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-2 h-full bg-[#FDD835]"></div>

          <blockquote className="relative z-10 pl-2">
            <p className="font-serif italic text-[18px] sm:text-[21px] text-[#2E7D32] leading-relaxed mb-6 font-medium">
              "Aanandam is not an NGO programme. It is an apology — from a society that forgot its parents — and a promise that it will never happen again."
            </p>
            <footer className="text-gray-500 font-semibold text-[14px] sm:text-[15px]">
              — Niraj Gera, Founder, Humanify Foundation
            </footer>
          </blockquote>
        </div>

        {/* Name Mission Section */}
        <div className="space-y-6 mb-20">
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] mb-6">
            The Name Itself Is Our Mission
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] sm:text-[16px] font-medium">
            <p>
              <strong className="text-[#0a231a]">Aanandam (आनंदम्)</strong> — from Sanskrit — means pure, unconditional bliss. Not the happiness that comes from possessions or achievements, but the deep joy that arises from belonging, from being seen, from being loved.
            </p>
            <p>
              That is what we offer every elder who walks through our doors. Not just a roof or a meal — but <strong className="text-[#0a231a]">joy</strong>. The kind that comes from community. From morning bhajans. From the laughter of a birthday celebration. From holding someone's hand and knowing you matter.
            </p>
          </div>
        </div>

        {/* Problem Section */}
        <div className="space-y-6 mb-16">
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-[#0a231a] mb-6">
            The Problem We Exist to Solve
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] sm:text-[16px] font-medium">
            <p>
              India has over <strong className="text-[#0a231a]">10 crore senior citizens</strong>. A significant number live without adequate care, dignity, or family support. Rapid urbanisation, nuclear family structures, and financial stress have created a crisis that is invisible to most — but devastating to those living it.
            </p>
            <p>
              Abandoned elders sleep under flyovers. Neglected parents wait by windows. Homeless seniors beg not for money — but for someone to notice them. Government facilities are overcrowded. Paid facilities are beyond reach.
            </p>
            <p className="font-bold text-[#0a231a] text-[17px] mt-8 block">
              Aanandam is the answer for those who have nowhere else to go.
            </p>
          </div>
        </div>

        {/* Two Columns Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-20">

          {/* Four Pillars Box */}
          <div className="relative group bg-white border-2 border-[#FDD835]/60 rounded-xl p-8 sm:p-10 shadow-sm overflow-hidden h-full">
            {/* Sliding Dark Green Background */}
            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

            <div className="relative z-10">
              <h3 className="font-serif font-black text-[22px] sm:text-2xl text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-6 border-b border-gray-100 group-hover:border-white/20 pb-4">
                Our Four Pillars
              </h3>

              <div className="space-y-6 text-[14.5px] sm:text-[15px] text-gray-700 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                <p>
                  <strong className="text-[#0a231a] group-hover:text-[#FDD835] transition-colors duration-300">1. Dignity</strong> — Every elder is treated as a parent, a grandparent, a respected elder of a family. Not as a case number or a charity recipient.
                </p>
                <p>
                  <strong className="text-[#0a231a] group-hover:text-[#FDD835] transition-colors duration-300">2. Compassion</strong> — Every staff member and volunteer is trained to serve with love, patience and deep sensitivity to the emotional needs of the elderly.
                </p>
                <p>
                  <strong className="text-[#0a231a] group-hover:text-[#FDD835] transition-colors duration-300">3. Transparency</strong> — We publish our expenses, activities and impact openly. Donors always know exactly where their contribution goes.
                </p>
                <p>
                  <strong className="text-[#0a231a] group-hover:text-[#FDD835] transition-colors duration-300">4. Joy</strong> — This is the pillar most NGOs forget. We don't just keep elders alive. We make them happy. Truly, deeply, daily happy.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Box */}
          <div className="relative group bg-white border-2 border-[#2E7D32]/70 rounded-xl p-8 sm:p-10 shadow-sm overflow-hidden h-full flex flex-col">
            {/* Sliding Dark Green Background */}
            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

            <div className="relative z-10 flex-grow flex flex-col">
              <h3 className="font-serif font-black text-[22px] sm:text-2xl text-[#0a231a] group-hover:text-white transition-colors duration-300 mb-6 border-b border-gray-100 group-hover:border-white/20 pb-4">
                Our Vision for the Future
              </h3>

              <div className="space-y-6 text-[14.5px] sm:text-[15px] text-gray-700 group-hover:text-white/90 transition-colors duration-300 leading-relaxed flex-grow">
                <p>
                  Aanandam is just the beginning. Our dream is to build India's most visible, most loved, most expansive elder care ecosystem.
                </p>

                <div className="space-y-4 pt-2">
                  <p>
                    <strong className="text-[#2E7D32] group-hover:text-[#FDD835] transition-colors duration-300">Within 2 years:</strong> Serve 50+ elders, build volunteer network of 500+
                  </p>
                  <p>
                    <strong className="text-[#2E7D32] group-hover:text-[#FDD835] transition-colors duration-300">Within 5 years:</strong> Build a dedicated campus with capacity for 200+ elders
                  </p>
                  <p>
                    <strong className="text-[#2E7D32] group-hover:text-[#FDD835] transition-colors duration-300">Within 10 years:</strong> Aanandam centres in 10 Indian cities — a national model for elder dignity
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-gray-100 group-hover:border-white/20 transition-colors duration-300">
                <p className="text-gray-600 group-hover:text-white transition-colors duration-300 font-medium text-[14px]">
                  This vision needs land. It needs infrastructure. It needs you. <Link to="/dream-campus" className="text-[#2E7D32] group-hover:text-[#FDD835] font-bold hover:underline decoration-2 underline-offset-2 ml-1 transition-colors duration-300">See Our Dream Campus →</Link>
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Team Section */}
      <TeamSection />

    </div>
  );
}

export default About;
