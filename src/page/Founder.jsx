import React from "react";
import PageHero from "../Component/PageHero";
import FounderExtraSections from "../Component/FounderExtraSections";
import { FaSpa, FaCamera, FaMicrophoneAlt, FaLandmark } from "react-icons/fa";

function Founder() {
  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="About the Founder"
        description="Meet the visionary behind Aanandam Vridhashram."
        hideBreadcrumb={true}
      />

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-2">

        {/* About Niraj Gera Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center mt-8 mb-20 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-full md:w-1/3 flex-shrink-0 relative group rounded-xl overflow-hidden shadow-md">
            <img
              src="/Photographer - Niraj Gera.jpg"
              alt="Niraj Gera"
              className="w-full h-auto object-cover aspect-[4/5] transform transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-5">
            <h3 className="text-[#E5A937] font-bold tracking-[0.15em] uppercase text-[13px] mb-2">
              The Man Behind the Mission
            </h3>
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] leading-tight">
              Niraj Gera — He Didn't Build an Institution. He Built a Family.
            </h2>
            <p className="text-gray-700 text-[16px] leading-relaxed font-medium mt-6">
              Some people work for a cause. Others are the cause — so completely and consistently that their life itself becomes the argument for why the work matters. Niraj Gera is the second kind.
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed font-medium">
              For over 18 years, Niraj Gera has been one of Delhi's — and India's — most quietly relentless social activists. Not loud. Not self-promoting. Just present, wherever people are forgotten, with a camera, a microphone, a meditation technique and an unshakeable conviction that every human being deserves to be seen.
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed font-medium">
              He is the Founder & Chairman of Humanify Foundation, the creator of Aanandam Vridhashram, a certified Happiness and Mental Health coach, a senior faculty member of The Art of Living Organisation (active in 180+ countries), a TEDx speaker, an internationally awarded social documentary photographer, a poet — and a NITI Aayog Mentor of Change.
            </p>
          </div>
        </div>

        {/* Credentials & Achievements */}
        <div className="mb-24">
          <div className="mb-8 text-center">
            <h3 className="text-[#E5A937] font-bold tracking-[0.15em] uppercase text-[13px]">
              Credentials & Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 border-t-2 border-t-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🏆</div>
              <p className="text-[#0a231a] text-[13.5px] sm:text-[14px] font-medium leading-snug">
                Official World Record — Highest Number of Women's Health Sessions
              </p>
            </div>
            
            {/* 2 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 border-t-2 border-t-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4 font-bold text-[#b71c1c]">IN</div>
              <p className="text-[#0a231a] text-[13.5px] sm:text-[14px] font-medium leading-snug">
                Mentor of Change — NITI Aayog, Government of India
              </p>
            </div>

            {/* 3 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 border-t-2 border-t-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🎤</div>
              <p className="text-[#0a231a] text-[13.5px] sm:text-[14px] font-medium leading-snug">
                4 TEDx Talks — GGSIPU, FIIB & others
              </p>
            </div>

            {/* 4 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 border-t-2 border-t-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🌍</div>
              <p className="text-[#0a231a] text-[13.5px] sm:text-[14px] font-medium leading-snug">
                BBC, Daily Mail, Times of India, Hindustan Times & more
              </p>
            </div>

            {/* 5 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 border-t-2 border-t-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📷</div>
              <p className="text-[#0a231a] text-[13.5px] sm:text-[14px] font-medium leading-snug">
                Royal Photographic Society Gold Medal, UK (2018)
              </p>
            </div>

            {/* 6 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 border-t-2 border-t-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🏅</div>
              <p className="text-[#0a231a] text-[13.5px] sm:text-[14px] font-medium leading-snug">
                Humanitarian of the Year — National Icon Award
              </p>
            </div>

            {/* 7 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 border-t-2 border-t-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4 text-pink-500">💧</div>
              <p className="text-[#0a231a] text-[13.5px] sm:text-[14px] font-medium leading-snug">
                MHM Champion Award by Padmashri Damodaran Ji
              </p>
            </div>

            {/* 8 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 border-t-2 border-t-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📖</div>
              <p className="text-[#0a231a] text-[13.5px] sm:text-[14px] font-medium leading-snug break-all">
                Wikipedia Page:<br/>en.wikipedia.org/wiki/Niraj_Gera
              </p>
            </div>

          </div>
        </div>

        {/* Why His Background Matters */}
        <div className="mb-10 text-center">
          <div className="mb-6">
            <h3 className="text-[#E5A937] font-bold tracking-[0.15em] uppercase text-[13px]">
              Why His Background Matters For Aanandam
            </h3>
          </div>

          <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-[32px] text-[#0a231a] mb-6 leading-tight max-w-4xl mx-auto">
            A Happiness Coach Running an Old Age Home — That Changes Everything
          </h2>
          <p className="text-gray-700 text-[15.5px] sm:text-[16px] leading-relaxed max-w-4xl mx-auto font-medium mb-12">
            Most elder care facilities are run by administrators, doctors or social workers — and that is valuable. Aanandam is run by a <strong className="text-[#0a231a]">Happiness and Mental Health practitioner</strong> who has spent nearly two decades studying and practicing what makes human beings genuinely flourish. That difference is visible in every aspect of life at Aanandam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 border-t-[5px] border-t-[#2E7D32] hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6 text-[#2E7D32]"><FaSpa /></div>
              <h4 className="font-serif font-bold text-[20px] sm:text-[22px] text-[#0a231a] mb-4">
                The Happiness & Wellbeing Focus
              </h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Niraj Gera's training as a certified Happiness coach, Life coach and senior Art of Living faculty means Aanandam's approach to elder wellbeing goes far beyond physical care. Yoga sessions, happiness programmes, spiritual discussions and music therapy are woven into daily life here — not as activities but as philosophy.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 border-t-[5px] border-t-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6 text-[#E5A937]"><FaCamera /></div>
              <h4 className="font-serif font-bold text-[20px] sm:text-[22px] text-[#0a231a] mb-4">
                The Photographer's Eye for Human Dignity
              </h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                His internationally awarded photo series — <em>Abandoned Souls</em> (old age home residents), <em>Immortal Love</em> (elderly couples), <em>Sacred Stains</em> (menstruation), <em>Sacred Transformations</em> (acid attack survivors) — show a man who doesn't just see suffering but insists on seeing the dignity inside it. That is the lens through which Aanandam was built.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 border-t-[5px] border-t-[#2E7D32] hover:shadow-md transition-shadow">
              <div className="text-4xl mb-6 text-[#2E7D32]"><FaMicrophoneAlt /></div>
              <h4 className="font-serif font-bold text-[20px] sm:text-[22px] text-[#0a231a] mb-4">
                The Motivational Speaker's Gift
              </h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                600+ sessions at IIT Delhi, Lal Bahadur Shastri National Academy of Administration (LBSNAA), Army Public School, Air Force School, Amity University, Kendriya Vidyalayas, and on platforms like TEDx and AIESEC — Niraj Gera knows how to move people. Aanandam's growing community of donors, volunteers and supporters is partly that same gift at work.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 border-t-[5px] border-t-[#FDD835] hover:shadow-md transition-shadow">
              <div className="text-4xl text-[#b71c1c] mb-6"><FaLandmark /></div>
              <h4 className="font-serif font-bold text-[20px] sm:text-[22px] text-[#0a231a] mb-4">
                Government & Policy Engagement
              </h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                As a NITI Aayog Mentor of Change, Niraj has personally met the Prime Minister's Office, Union Health Ministers, and Niti Aayog leadership to advocate for menstrual health policy and elder care. Aanandam's future growth — seeking government land, institutional support and policy partnerships — is directly served by these connections.
              </p>
            </div>

          </div>
        </div>

        {/* Extra Sections (Quotes, Testimonials, SEO) */}
        <FounderExtraSections />

      </section>
    </div>
  );
}

export default Founder;
