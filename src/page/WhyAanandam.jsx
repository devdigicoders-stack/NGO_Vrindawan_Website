import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function WhyAanandam() {
  return (
    <div className="bg-[#FAFAF5] min-h-screen">
      <PageHero
        title="Why Aanandam?"
        description="Because where you place your trust — or your parent — matters."
        hideBreadcrumb={true}
      />

      {/* ══════════════════════════════════════
          SECTION 1 — WHATEVER BROUGHT YOU HERE
      ══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 text-center">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a231a] mb-4">
            Whatever Brought You Here — We See You
          </h2>
          <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed max-w-4xl mx-auto">
            People arrive at Aanandam for very different reasons, carrying very different questions. We've tried to answer honestly, for each of you.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {[
            {
              icon: '🤔', title: "If You're Worried About an Elder With Nowhere to Go",
              desc: "You may be a neighbour, a distant relative, a social worker, or a stranger who noticed someone in need. We won't ask you to justify why you're calling. We won't make this complicated. We will listen, and we will try our best to help — within the limits of the space and resources we currently have."
            },
            {
              icon: '🙋', title: "If You Are an Elder Considering This for Yourself",
              desc: "Perhaps you live alone. Perhaps your circumstances have changed. We understand that walking into a home like this takes courage — and we don't take that courage lightly. Come visit before deciding. Sit with the residents. Ask them how they feel. Let your own sense of it guide you, not our words."
            },
            {
              icon: '💛', title: "If You Are Considering a Donation",
              desc: "You don't need to believe we are perfect to give. We are an honest, growing organisation — not a polished corporation. What we can offer is transparency about where we are, sincerity about where we're headed, and the certainty that your contribution reaches real people with real needs, directly."
            },
            {
              icon: '🤝', title: "If You Want to Volunteer or Intern",
              desc: "You may be looking for experience, for purpose, or simply for a way to spend your time meaningfully. Whatever your reason, we won't judge it. Come with whatever motivation brought you here — many of our most committed volunteers started with reasons that had nothing to do with elder care, and found something they didn't expect."
            },
            {
              icon: '🏢', title: "If You're Evaluating Us for CSR Partnership",
              desc: "You likely have due diligence to do, budgets to justify, and outcomes to report. We respect that. We can offer documentation, photos, regular updates and honest conversation about our scale and limitations. We are not the largest elder care organisation in India — but we are a sincere, growing, well-regarded one, with associations including HelpAge India and visits from respected names like Dr. Kiran Bedi Ji."
            },
            {
              icon: '💗', title: "If You're Simply a Kind-Hearted Person Who Wants to Help",
              desc: "No agenda needed. No elaborate reason required. If something in you wants to give, visit, or simply learn more — that instinct is enough. Trust it. Come see what Aanandam is, and decide for yourself what role you'd like to play."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white rounded-xl border border-[#FDD835]/40 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col sm:flex-row gap-4"
            >
              <div className="text-2xl flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-[#0a231a] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — WHAT AANANDAM IS
      ══════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 text-center">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a231a] mb-4">
              What Aanandam Is — Without Exaggeration
            </h2>
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed max-w-4xl mx-auto">
              We are a free old age home in Karala, Delhi, built and sustained by donations. We are not the biggest. We are not flawless. We are run by people, for people, with all the imperfections that come with both.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {/* Green Box */}
            <motion.div variants={fadeUp} className="bg-[#F0FDF4] border-t-4 border-green-600 rounded-xl p-8 shadow-sm">
              <h3 className="font-bold text-green-800 text-[13px] tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="text-green-600">✅</span> WHAT WE GENUINELY OFFER
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                No-cost shelter, food and basic care. A community where elders are not alone. Regular yoga, bhajans and happiness-focused activities. Honest, ongoing effort to do better — visibly, consistently.
              </p>
            </motion.div>

            {/* Orange Box */}
            <motion.div variants={fadeUp} className="bg-[#FFF8F0] border-t-4 border-orange-500 rounded-xl p-8 shadow-sm">
              <h3 className="font-bold text-orange-800 text-[13px] tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="text-orange-500">📋</span> WHAT WE DON'T CLAIM
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                We don't claim to be the "best" or "happiest" old age home — we are working toward that, openly. We don't promise 24x7 medical care or intensive personal attendance. We don't promise a fixed routine every single day. We promise sincerity, not perfection.
              </p>
            </motion.div>
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="border-l-4 border-[#FDD835] pl-6 py-5 bg-[#FAFAF5] rounded-r-2xl shadow-sm w-full"
          >
            <p className="font-serif italic text-[#0a231a] text-lg sm:text-xl leading-relaxed font-semibold">
              "We are not interested in being chosen over someone else. We are interested in being honest about who we are — so that the right people find us, for the right reasons."
            </p>
            <p className="mt-3 text-gray-500 text-[13px] font-medium">— Sh. Niraj Gera, Founder & Chairman, Humanify Foundation</p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — WHY PEOPLE STAY CONNECTED
      ══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10 text-center">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0a231a] mb-4">
            Why People Who Visit, Stay Connected
          </h2>
          <div className="text-gray-600 text-[15px] sm:text-base leading-relaxed max-w-4xl mx-auto space-y-4">
            <p>
              We've noticed a pattern. People rarely visit Aanandam just once. A donor becomes a monthly supporter. A volunteer for a day returns every weekend. A corporate team's "one-time CSR activity" becomes an annual tradition. We think it's because of something simple:
            </p>
            <p className="font-serif italic text-[#2E7D32] text-lg font-semibold pt-2">
              Here, your presence is never wasted. Someone always notices. Someone always remembers.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {[
            {
              icon: '🤝', title: "Led by Lived Experience",
              desc: "Founded by Sh. Niraj Gera — a happiness and spiritual coach with 18+ years across elder care, mental health and social work. His approach shapes everything here."
            },
            {
              icon: '🏅', title: "Recognised Associations",
              desc: "HelpAge India, Amul, Axis Max Life, Yes Madam — and a visit from Dr. Kiran Bedi Ji. Trust that has been earned, not claimed."
            },
            {
              icon: '🧘', title: "Joy as Philosophy, Not Afterthought",
              desc: 'Born from "Oldies Got Talent," Aanandam treats happiness as central — not a checkbox after basic care is met.'
            },
            {
              icon: '🌱', title: "Honest About Where We Are",
              desc: "We don't oversell. We talk openly about our limitations and our growing vision — including our Dream Campus plans."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform p-8"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-[#0a231a] text-[17px] mb-3">{item.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — HINDI SEO
      ══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-[#FFF8EE] border-l-[6px] border-[#E65100] rounded-r-2xl p-8 sm:p-10 shadow-sm"
          style={{ fontFamily: 'Mukta, sans-serif' }}
        >
          <h2 className="font-bold text-xl sm:text-2xl text-[#C0392B] mb-3 italic">
            आनंदम् क्यों — हर आगंतुक के लिए सच्चा जवाब
          </h2>
          <p className="text-[#5D4037] text-[15.5px] leading-relaxed mb-6 italic">
            हम यह दावा नहीं करते कि आनंदम् "सबसे अच्छा" या "सबसे खुशहाल" वृद्धाश्रम है — हम बस उस दिशा में ईमानदारी से काम कर रहे हैं।
          </p>

          <ul className="space-y-4 text-[#0a231a] text-[15px] mb-8 font-medium">
            <li className="flex gap-3">
              <span className="text-[#C0392B] font-bold">कोई बुजुर्ग अकेला हो —</span>
              <span className="text-gray-700">हम सुनेंगे, मदद करेंगे, जितना हमारी क्षमता हो।</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C0392B] font-bold">कोई दान करना चाहे —</span>
              <span className="text-gray-700">हर पैसा सीधे बुजुर्गों तक पहुँचता है।</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C0392B] font-bold">कोई स्वयंसेवक बनना चाहे —</span>
              <span className="text-gray-700">बिना शर्त, बिना judgment, स्वागत है।</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C0392B] font-bold">कोई CSR साझेदारी चाहे —</span>
              <span className="text-gray-700">पूरी पारदर्शिता और दस्तावेज़ीकरण के साथ।</span>
            </li>
          </ul>

          <p className="text-[#C0392B] font-bold italic text-[15.5px] mb-8">
            श्री निराज गेरा जी — एक हैपीनेस कोच — के नेतृत्व में, आनंदम् सिर्फ आश्रम नहीं, एक सच्चा घर बनने की कोशिश कर रहा है।
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              'आनंदम् क्यों चुनें',
              'ईमानदार वृद्धाश्रम दिल्ली',
              'विश्वसनीय वृद्धाश्रम',
              'निशुल्क वृद्धाश्रम',
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1.5 bg-[#E65100] text-white text-[13px] font-bold rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
