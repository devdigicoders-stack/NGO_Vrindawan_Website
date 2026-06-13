import React from 'react';
import { motion } from 'framer-motion';

export default function OriginStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const checkIcon = (
    <svg className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAF5]">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >

        {/* Top Label */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
          <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase text-center">
            Our Origin Story
          </span>
          <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
        </motion.div>

        {/* Heading */}
        <motion.h2 variants={itemVariants} className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#0a231a] leading-tight mb-8 text-center">
          <span className="  px-2 py-1 leading-normal">It Started with a Moment</span> That Could Not Be Ignored.
        </motion.h2>

        {/* Paragraphs */}
        <motion.div variants={itemVariants} className="space-y-6 text-[16px] sm:text-[17px] text-gray-700 leading-[1.8] font-medium mb-20">
          <p>
            One afternoon, our founder <strong className="text-[#0a231a]">Niraj Gera</strong> came face-to-face with an elderly man sitting alone on a roadside in Delhi — frail, confused, wearing torn clothes, holding a bag that contained everything he owned. His children had moved on. His home was gone. His world had shrunk to that single bench on a busy road.
          </p>
          <p>
            That moment became the seed of <strong className="text-[#0a231a]">Aanandam Vridhashram</strong>. Not a statistic. Not a report. A real human being — abandoned, alone, invisible — who deserved so much more.
          </p>
          <p>
            Niraj, already the Chairman of Humanify Foundation and a tireless social activist, knew that awareness alone was not enough. Something tangible had to be built — a place, a home, not an institution that merely houses people, but a <strong className="text-[#0a231a]">living, breathing family</strong> where elders feel seen, heard, loved and respected.
          </p>
          <p>
            Aanandam (आनंदम् — meaning <em>"bliss, pure joy"</em> in Sanskrit) was born with that promise. Located in Karala Village, near Rohini Sector-38, close to Pitampura and Kanjhawala in Delhi NCR — and every single day, we recommit to keeping that promise.
          </p>
        </motion.div>

        {/* Two Columns: Values & Differences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">

          {/* Core Values */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase">
                Our Core Values
              </span>
              <div className="flex-grow h-[1px] bg-[#E58F00]/30"></div>
            </div>
            <ul className="space-y-5 text-[15px] sm:text-[16px] text-gray-700">
              <li className="flex items-start gap-3">
                {checkIcon}
                <span><strong className="text-[#0a231a]">Dignity above everything</strong> — every elder is treated with complete respect</span>
              </li>
              <li className="flex items-start gap-3">
                {checkIcon}
                <span><strong className="text-[#0a231a]">Zero compromise on honesty</strong> — we tell you exactly what we are and what we aren't</span>
              </li>
              <li className="flex items-start gap-3">
                {checkIcon}
                <span><strong className="text-[#0a231a]">Joy is non-negotiable</strong> — life at Aanandam must be happy, not just comfortable</span>
              </li>
              <li className="flex items-start gap-3">
                {checkIcon}
                <span><strong className="text-[#0a231a]">Community over charity</strong> — our elders are not recipients, they are family</span>
              </li>
              <li className="flex items-start gap-3">
                {checkIcon}
                <span><strong className="text-[#0a231a]">Transparency</strong> in every rupee donated and every decision made</span>
              </li>
            </ul>
          </motion.div>

          {/* What Makes Us Different */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap">
                What Makes Us Different
              </span>
              <div className="flex-grow h-[1px] bg-[#E58F00]/30"></div>
            </div>
            <ul className="space-y-5 text-[15px] sm:text-[16px] text-gray-700">
              <li className="flex items-start gap-3">
                {checkIcon}
                <span><strong className="text-[#0a231a]">100% free old age home</strong> — Nishulk Vridhashram, no hidden charges ever</span>
              </li>
              <li className="flex items-start gap-3">
                {checkIcon}
                <span>Founded by a <strong className="text-[#0a231a]">World Record Holder</strong> & NITI Aayog Mentor</span>
              </li>
              <li className="flex items-start gap-3">
                {checkIcon}
                <span>Trusted & visited by <strong className="text-[#0a231a]">Amul, Axis Max Life, Yes Madam, HelpAge India & Dr. Kiran Bedi Ji</strong></span>
              </li>
              <li className="flex items-start gap-3">
                {checkIcon}
                <span><strong className="text-[#0a231a]">Oldies Got Talent</strong> — a stage that showcases elder talent</span>
              </li>
              <li className="flex items-start gap-3">
                {checkIcon}
                <span><strong className="text-[#0a231a]">Outbound activities</strong> — including a recent Vrindavan trip</span>
              </li>
              <li className="flex items-start gap-3">
                {checkIcon}
                <span><strong className="text-[#0a231a]">Active, transparent</strong> social media presence</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Orange Banner */}
        <motion.div
          variants={itemVariants}
          className="bg-[#E58F00] rounded-xl p-8 sm:p-10 shadow-lg text-white"
        >
          <h3 className="font-serif font-bold text-xl sm:text-2xl mb-4">
            Becoming One of India's Happiest Old Age Homes — Together
          </h3>
          <p className="text-white/95 leading-relaxed text-[15px] sm:text-[16px]">
            We are honest about where we are today. Our facilities are warm, genuine and growing — powered almost entirely by donations, volunteers and the goodness of people like you. Our medical care currently relies on health camps by generous donor hospitals, medicine donations, and government hospital treatment. Our dream is to upgrade — better medical facilities, more space, more staff, a larger campus. <strong className="text-white">With your support, we will get there.</strong>
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
