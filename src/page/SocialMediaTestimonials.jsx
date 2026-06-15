import React from 'react';
import PageHero from '../Component/PageHero';
import { Eye, Users, Bell, Share2 } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

function SocialMediaTestimonials() {
  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title={
          <span className="text-3xl md:text-4xl lg:text-5xl block">
            सोशल मीडिया और प्रशंसापत्र<br />
            <span className="text-2xl md:text-3xl lg:text-4xl mt-2 block text-[#FDD835]">SOCIAL MEDIA & TESTIMONIALS</span>
          </span>
        }
        description="Combines our online community presence with real voices — donors, volunteers, CSR partners and visitors — to build trust through both reach and word-of-mouth."
        hideBreadcrumb={true}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Header Block */}
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
            <h3 className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              JOIN OUR COMMUNITY
            </h3>
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-[#0a231a]">
            Follow Aanandam Vridhashram Online — And Hear From Those Who've Visited.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium max-w-4xl mx-auto">
            Our social media presence is one of the strongest ways for the world to see the real, daily impact of Aanandam Vridhashram (Karala Village, near Rohini Sector-38, Pitampura, Delhi NCR) — and we're proud of the growing community following our journey.
          </p>
        </div>

        {/* Where to Find Us Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
            <h3 className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              WHERE TO FIND US
            </h3>
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-t-4 border-[#2E7D32] border-b-4 border-b-transparent hover:border-b-[#2E7D32] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <h4 className="text-xl font-bold text-[#0a231a] mb-4 flex items-center gap-3">
                <FaInstagram className="text-[#2E7D32] w-6 h-6" /> Instagram
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed text-[15px]">
                @aanandamoldagehome (daily photos, reels, stories of elders, events and behind-the-scenes moments) and @geraniraj (founder Niraj Gera's personal account — TEDx talks, social work, photography).
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border-t-4 border-[#F59E0B] border-b-4 border-b-transparent hover:border-b-[#2E7D32] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <h4 className="text-xl font-bold text-[#0a231a] mb-4 flex items-center gap-3">
                <FaFacebook className="text-[#F59E0B] w-6 h-6" /> Facebook
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed text-[15px]">
                Humanify Foundation page, sharing updates across all our initiatives including Aanandam, Happiness Express, Paavni, and Oldies Got Talent.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border-t-4 border-[#2E7D32] border-b-4 border-b-transparent hover:border-b-[#2E7D32] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <h4 className="text-xl font-bold text-[#0a231a] mb-4 flex items-center gap-3">
                <FaYoutube className="text-[#C62828] w-6 h-6" /> YouTube
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed text-[15px]">
                TEDx talks, media interviews, resident stories, and event highlights.
              </p>
            </div>
          </div>
        </div>

        {/* What You'll See List */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <h3 className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              WHAT YOU'LL SEE
            </h3>
            <div className="h-[1px] bg-gray-300 w-full"></div>
          </div>
          
          <ul className="space-y-4 text-gray-700 font-medium max-w-4xl">
            {[
              "Daily life moments — meals, yoga, conversations, laughter",
              "Festival celebrations in full colour",
              "Oldies Got Talent performances",
              "Distinguished visitor highlights — Amul, Axis Max Life, Yes Madam, HelpAge India, Dr. Kiran Bedi Ji",
              "Outbound trips — including our Vrindavan visit",
              "Before-and-after transformation stories (with consent)",
              "Donor and volunteer shoutouts"
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-[#2E7D32] font-bold">✓</span> 
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonials */}
        <div className="space-y-6 text-center pt-8">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
            <h3 className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              TESTIMONIALS — IN THEIR OWN WORDS
            </h3>
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-[#2E7D32] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <p className="text-gray-700 italic font-medium leading-relaxed text-lg flex-grow mb-6">
                "Visiting Aanandam was one of the most humbling experiences for our team. The warmth, the cleanliness, and most of all — the genuine happiness on the elders' faces — said it all."
              </p>
              <p className="text-[#F59E0B] font-bold text-sm">
                — CSR Volunteer, Corporate Visit
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-[#2E7D32] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <p className="text-gray-700 italic font-medium leading-relaxed text-lg flex-grow mb-6">
                "I came as a medical volunteer expecting to give an hour. I stayed for the whole day. The elders here have so much love to give — you just have to show up."
              </p>
              <p className="text-[#F59E0B] font-bold text-sm">
                — Doctor, Health Camp Volunteer
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-[#2E7D32] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <p className="text-gray-700 italic font-medium leading-relaxed text-lg flex-grow mb-6">
                "We sponsor an elder every month, and the updates we receive make us feel like part of the Aanandam family. It's the most meaningful ₹1,500 we spend each month."
              </p>
              <p className="text-[#F59E0B] font-bold text-sm">
                — Monthly Donor Family, Delhi NCR
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-[#2E7D32] shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <p className="text-gray-700 italic font-medium leading-relaxed text-lg flex-grow mb-6">
                "It is heartening to see initiatives like Aanandam, working with sincerity towards our elders who deserve dignity and care."
              </p>
              <p className="text-[#F59E0B] font-bold text-sm">
                — Distinguished Visitor
              </p>
            </div>
          </div>
        </div>

        {/* Why Follow & Share Us */}
        <div className="space-y-6 text-center pt-8">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
            <h3 className="text-[#F59E0B] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              WHY FOLLOW & SHARE US
            </h3>
            <div className="hidden sm:block h-[1px] bg-gray-300 w-16"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-t-4 border-[#2E7D32] shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <h4 className="text-xl font-bold text-[#0a231a] mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#2E7D32]" /> Transparency
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed text-[15px] flex-grow">
                See exactly where your donations and support go.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border-t-4 border-[#F59E0B] shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <h4 className="text-xl font-bold text-[#0a231a] mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#F59E0B]" /> Community
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed text-[15px] flex-grow">
                Connect with like-minded donors, volunteers and well-wishers.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border-t-4 border-[#2E7D32] shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <h4 className="text-xl font-bold text-[#0a231a] mb-3 flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#2E7D32]" /> Stay Updated
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed text-[15px] flex-grow">
                Be the first to know about events, health camps, and opportunities to help.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border-t-4 border-[#F59E0B] shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <h4 className="text-xl font-bold text-[#0a231a] mb-3 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-[#F59E0B]" /> Share & Amplify
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed text-[15px] flex-grow">
                Every share, like and comment helps more people discover Aanandam.
              </p>
            </div>
          </div>
        </div>

        {/* Hindi SEO Block */}
        <div className="bg-[#FAF8F5] border-l-4 border-[#F59E0B] p-6 sm:p-8 rounded-r-xl relative shadow-sm mt-8">
          <span className="absolute top-4 right-4 text-[#F59E0B] font-medium text-sm">हिंदी</span>
          
          <h2 className="text-xl sm:text-2xl font-bold text-[#D84315] mb-4">
            सोशल मीडिया और प्रशंसापत्र
          </h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed italic text-[15px] sm:text-base">
            <p>
              हमारे साथ जुड़ें — सोशल मीडिया पर आनंदम् वृद्धाश्रम को फॉलो करें। Instagram: @aanandamoldagehome और @geraniraj — रोज़ाना तस्वीरें, कहानियाँ और कार्यक्रम।
            </p>
            <p>
              यदि आप विज़िट करें, स्वयंसेवा करें या दान दें — तो @aanandamoldagehome को टैग करें और अपना अनुभव साझा करें।
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-[#F59E0B] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-sm cursor-pointer">
              आनंदम् सोशल मीडिया
            </span>
            <span className="bg-[#F59E0B] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-sm cursor-pointer">
              वृद्धाश्रम प्रशंसापत्र
            </span>
            <span className="bg-[#F59E0B] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-sm cursor-pointer">
              happiest old age home india
            </span>
          </div>
        </div>

      </section>

    </div>
  );
}

export default SocialMediaTestimonials;
