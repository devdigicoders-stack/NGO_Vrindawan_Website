import React from "react";
import PageHero from "../Component/PageHero";
import { Globe, Newspaper, Mic } from "lucide-react";

function Media() {
  const internationalMedia = [
    "BBC UK & USA", "Daily Mail UK", "Metro News UK", "Asian Age London",
    "20 Minutene Switzerland", "LIFO Greece", "Yahoo News Australia", "Pop Sugar USA"
  ];

  const nationalMedia = [
    "Times of India", "Hindustan Times", "India Times", "New Indian Express",
    "The Tribune", "The Statesman", "India Today", "NDTV", "The Print"
  ];

  const broadcastMedia = [
    "Doordarshan News Conclave", "AIR FM Rainbow", "Radio Noida", "Radio City", "Times Now Nominee"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <PageHero title="News & Media Coverage" />

      {/* Main Content Area */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-2 space-y-12 text-sm sm:text-base text-grey leading-relaxed">

        {/* Intro */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-primary">
            Independent Verification by National and International Press
          </h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full"></div>
          <p className="text-grey">
            Aanandam Vridhashram and Humanify Foundation's campaigns have been covered by some of the world's most
            respected media houses. These reports act as independent validations of our work on the ground.
          </p>
        </div>

        {/* International Grid */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-lg text-dark border-b border-gold/15 pb-2">
            International Press Features
          </h3>
          <div className="flex flex-wrap gap-3">
            {internationalMedia.map((media, idx) => (
              <span
                key={idx}
                className="bg-primary/5 border border-primary/15 text-primary text-xs font-bold px-4 py-2 rounded-xl"
              >
                <Globe className="w-4 h-4 inline-block mr-1" /> {media}
              </span>
            ))}
          </div>
        </div>

        {/* National Grid */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-lg text-dark border-b border-gold/15 pb-2">
            National Press Features
          </h3>
          <div className="flex flex-wrap gap-3">
            {nationalMedia.map((media, idx) => (
              <span
                key={idx}
                className="bg-accent/5 border border-accent/25 text-accent-dark text-xs font-bold px-4 py-2 rounded-xl"
              >
                <Newspaper className="w-4 h-4 inline-block mr-1" /> {media}
              </span>
            ))}
          </div>
        </div>

        {/* Broadcast Grid */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-lg text-dark border-b border-gold/15 pb-2">
            Radio and Broadcast Television
          </h3>
          <div className="flex flex-wrap gap-3">
            {broadcastMedia.map((media, idx) => (
              <span
                key={idx}
                className="bg-dark text-white text-xs font-bold px-4 py-2 rounded-xl"
              >
                <Mic className="w-4 h-4 inline-block mr-1" /> {media}
              </span>
            ))}
          </div>
        </div>

        {/* Media Enquiry Block */}
        <div className="bg-cream border border-gold/20 p-8 rounded-3xl space-y-4">
          <h3 className="font-serif font-bold text-lg text-primary">Media &amp; Public Relations Contacts</h3>
          <p className="text-xs sm:text-sm text-grey">
            We welcome journalists, documentary producers, and content creators to visit Aanandam Vridhashram.
            We offer full access, interviews with our team, and stories about our residents with proper consent.
          </p>
          <div className="text-xs">
            <strong>Email Enquiries:</strong> <a href="mailto:nirajgera@gmail.com" className="text-accent-dark hover:underline">nirajgera@gmail.com</a>
            <span className="mx-2">|</span>
            <strong>WhatsApp Contact:</strong> +91-9310105630
          </div>
        </div>

        {/* Hindi Highlight Section */}
        <div className="bg-orange-50/40 border-l-4 border-orange-500 rounded-r-2xl p-6 space-y-3">
          <h3 className="font-kalam text-xl font-bold text-red-brand">मीडिया रिपोर्ट — हमारे कार्य की वैश्विक पहचान</h3>
          <p className="font-kalam text-sm sm:text-base text-dark/95 leading-relaxed">
            आनंदम् वृद्धाश्रम और मानवीय फाउंडेशन के सामाजिक कार्यों को मीडिया द्वारा व्यापक सराहना मिली है।
            हमारे प्रयासों को <strong>BBC UK & USA</strong>, <strong>Daily Mail</strong>, <strong>Doordarshan News</strong>,
            <strong>Times of India</strong>, <strong>Hindustan Times</strong>, और <strong>NDTV</strong> जैसी बड़ी राष्ट्रीय
            एवं अंतरराष्ट्रीय मीडिया एजेंसियों ने रिपोर्ट किया है। यह स्वतंत्र रिपोर्टिंग हमारे जमीनी स्तर पर किए जा रहे
            ईमानदार काम को दर्शाती है।
          </p>
          <div className="flex flex-wrap gap-2 text-xxs font-bold">
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full">वृद्धाश्रम समाचार कवरेज</span>
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full">vridhashram.in मीडिया</span>
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full">Humanify Foundation BBC</span>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Media;
