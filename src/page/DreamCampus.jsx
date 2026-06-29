import React from 'react';
import PageHero from '../Component/PageHero';

export default function DreamCampus() {
  const schedule = [
    {
      id: 1,
      time: "5:30 AM",
      title: "Brahma Muhurta Prayer",
      desc: "The day begins with a short prayer and mantra chanting. For elders who have spent decades waking early, this rhythm of dawn brings comfort and grounding."
    },
    {
      id: 2,
      time: "6:30 AM",
      title: "Yoga & Gentle Exercise",
      desc: "Light yoga, pranayama and stretching exercises suited to the age and ability of each elder. Our volunteer yoga instructors guide the sessions. This is one of the most joyful parts of the day — full of laughter and gentle encouragement."
    },
    {
      id: 3,
      time: "8:00 AM",
      title: "Nutritious Breakfast",
      desc: "A hot, freshly prepared breakfast — typically poha, upma, daliya or parathas with chai. Seasonal. Varied. Lovingly made. Our kitchen team knows every elder's preferences and dietary needs."
    },
    {
      id: 4,
      time: "10:00 AM",
      title: "Activities, Rest & Visitors",
      desc: "Morning activities include indoor games, craft sessions, music, group conversations and volunteer interactions. This is when most visitors and volunteers join us — and the energy of young and old together fills every corner of Aanandam."
    },
    {
      id: 5,
      time: "1:00 PM",
      title: "Community Lunch",
      desc: "Everyone eats together. Dal, sabzi, rice or roti, salad, pickle — a full, balanced meal. The dining area is where the most stories are shared, the most laughter erupts, and the truest bonds are formed."
    },
    {
      id: 6,
      time: "3:00 PM",
      title: "Afternoon Rest",
      desc: "A necessary and respected rest period. Some elders sleep; others sit in the courtyard, sun themselves, chat quietly, or read. The pace of Aanandam honours the body's natural rhythm."
    },
    {
      id: 7,
      time: "5:00 PM",
      title: "Evening Tea & Snacks",
      desc: "Hot chai with biscuits or seasonal snacks. Often the time when volunteers drop in, families visit, and the atmosphere becomes most animated and warm."
    },
    {
      id: 8,
      time: "6:30 PM",
      title: "Bhajans, Satsang & Spiritual Time",
      desc: "Evening prayers, bhajan singing, or satsang. Some elders lead the sessions themselves — their voices carrying decades of devotion. This hour is sacred at Aanandam — the hour that heals more than any medicine."
    },
    {
      id: 9,
      time: "7:30 PM",
      title: "Dinner",
      desc: "Another warm, nourishing meal. Simple, wholesome, made with care. No elder ever goes to bed hungry at Aanandam — not a single night."
    },
    {
      id: 10,
      time: "9:00 PM",
      title: "Rest & Goodnight",
      desc: "The day closes gently. Lights dim. The hum of quiet conversation fades. Another day lived with dignity, warmth and community. Another promise kept."
    }
  ];

  return (
    <div className="bg-[#FAFAF5] min-h-screen">
      <PageHero
        title="Our Dream Campus"
        description="Experience the joy, peace, and routine that makes Aanandam a true home."
        hideBreadcrumb={true}
      />

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-2">

        {/* Intro Section */}
        <div className="space-y-6 mb-16 text-gray-700 text-[15px] sm:text-[16px] leading-relaxed font-medium">



          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#2E7D32] mb-6">
            Here, Every Day Is a Celebration of Being Alive.
          </h2>
          <p>
            People often imagine old age homes as quiet, sad, institutional places — where elders wait out their days in grey corridors, watching the clock. Aanandam is the opposite of that image in every possible way.
          </p>
          <p>
            At Aanandam, the day begins before sunrise — with the gentle sound of prayer bells and a bhajan that drifts through every room. It ends after dinner, with elders telling stories, laughing, arguing over who won at chess, and falling asleep with a full stomach and a light heart.
          </p>
          <p>
            Between those bookends? Life. Real, warm, joyful, dignified life.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#E67E22] mb-12">
            A Day at Aanandam — Hour by Hour
          </h2>

          <div className="space-y-0">
            {schedule.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline item */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 py-8 items-start relative z-10 group cursor-pointer">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F5B041] text-white flex items-center justify-center font-black text-lg shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#E67E22]">
                    {item.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2 pt-1 transition-transform duration-300 group-hover:translate-x-2">
                    <h3 className="font-sans font-bold text-[#0a231a] text-[17px] sm:text-[18px]">
                      {item.time} — {item.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Separator line (except for last item) */}
                {index !== schedule.length - 1 && (
                  <div className="absolute bottom-0 right-0 w-full sm:w-[calc(100%-5rem)] h-[1px] bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#2E7D32] mb-4">
              Glimpses of Aanandam
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto font-medium">
              Take a walk through our home. Every smile, every shared meal, and every quiet moment of prayer is a testament to the love that fills these walls. This isn't just a shelter; it's a family captured in moments.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm group">
              <img src="/fwd47photos/1.jpg" alt="Elders smiling" className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm group">
              <img src="/fwd47photos/2.jpg" alt="Elder care" className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm group">
              <img src="/fwd47photos/32.jpg" alt="Community gathering" className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm group">
              <img src="/fwd47photos/31.jpg" alt="Happy elder" className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm group">
              <img src="/fwd47photos/17.jpg" alt="Elders enjoying time" className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm group">
              <img src="/fwd47photos/15.jpg" alt="Elderly care center" className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm group hidden md:block">
              <img src="/fwd47photos/7.jpg" alt="Elders activities" className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-sm group hidden lg:block">
              <img src="/fwd47photos/8.jpg" alt="Aanandam Campus" className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Bottom Highlight Block */}
        <div className="bg-[#E67E22] rounded-2xl p-8 sm:p-12 shadow-lg text-white transform transition-transform duration-500 hover:shadow-xl hover:-translate-y-1">
          <h2 className="font-serif font-black text-2xl sm:text-3xl mb-6">
            Festivals Are Our Heartbeat
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-relaxed font-medium opacity-95">
            Holi — with colours and gujiya. Diwali — with diyas and mithai. Navratri — with dandiya and bhajans. Eid — with sewai and togetherness. Independence Day — with flag hoisting and pride. And birthdays — celebrated with cake, songs and the warmest blessings you will ever receive. At Aanandam, every festival is celebrated with the same energy and love that once filled family homes. Because this IS family.
          </p>
        </div>

      </section>
    </div>
  );
}
