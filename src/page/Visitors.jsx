import React from "react";
import PageHero from "../Component/PageHero";

function Visitors() {
  const visitorsList = [
    {
      badge: "Corporate Visitor",
      name: "🐄 Amul",
      subtitle: "India's Most Trusted Food Brand",
      description: "The team from Amul visited Aanandam to connect with our elders. Their visit brought warmth, nutrition, and delightful group activities, leaving our grandparents with genuine joy and national pride.",
      photoHint: "📸 Photo: Amul team with elders, product distribution, and smiling group shots."
    },
    {
      badge: "CSR Partner",
      name: "🏦 Axis Max Life Insurance",
      subtitle: "Largest Private Life Insurer",
      description: "Axis Max Life Insurance visited Aanandam as part of their CSR programs. The team engaged in interactive games, physical exercises, and spiritual sessions, conveying their values of elder protection.",
      photoHint: "📸 Photo: Axis Max Life representatives participating in elder activities."
    },
    {
      badge: "Wellness Partner",
      name: "💅 Yes Madam",
      subtitle: "Beauty & Wellness Platform",
      description: "Yes Madam brought grooming and care services directly to our elderly grandmothers. A warm grooming session made them feel cherished and built their confidence and self-respect.",
      photoHint: "📸 Photo: Grandmothers during grooming and wellness session."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <PageHero title="Distinguished Visitors" />

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-2 space-y-12 text-sm sm:text-base">

        {/* Intro Text */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-primary">
            Credibility Earned Through Trust and Association
          </h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full"></div>
          <p className="text-grey leading-relaxed">
            Credibility is earned, visit by visit. At Aanandam, we are honored to have hosted some of the nation's most respected
            brands, NGOs, and leaders, confirming our standard of elder care.
          </p>
        </div>

        {/* Corporate Visitors Grid */}
        <div className="space-y-6">
          <h3 className="font-serif font-bold text-xl text-dark border-b border-gold/15 pb-2">
            Corporate &amp; Corporate CSR Visits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visitorsList.map((visitor, idx) => (
              <div
                key={idx}
                className="bg-cream border border-gold/20 p-6 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <span className="bg-primary/10 text-primary font-bold text-xxs px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {visitor.badge}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-dark">{visitor.name}</h4>
                  <span className="text-xs text-accent-dark font-bold">{visitor.subtitle}</span>
                </div>
                <p className="text-xs text-grey leading-relaxed">
                  {visitor.description}
                </p>
                <div className="bg-white/80 p-3 rounded-lg border border-gold/10 text-xxs text-grey italic">
                  {visitor.photoHint}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NGO Association (HelpAge India) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
          <div className="lg:col-span-7 bg-cream border border-gold/20 p-8 rounded-3xl space-y-4 shadow-sm">
            <span className="bg-primary/10 text-primary font-bold text-xxs px-2.5 py-1 rounded-full uppercase tracking-wider">
              NGO Association
            </span>
            <h3 className="font-serif font-bold text-xl text-dark">
              🤝 HelpAge India Partnership
            </h3>
            <span className="text-xs text-accent-dark font-bold block -mt-2">
              India's Premier Organization for Elderly Care Since 1978
            </span>
            <p className="text-xs sm:text-sm text-grey leading-relaxed">
              HelpAge India, which has served elderly citizens across the country for over four decades,
              visited and commended our setup at Aanandam. This validation shows that our zero-cost,
              dignity-centered model is aligned with recognized best practices in elderly rehabilitation.
            </p>
            <div className="text-xs text-primary-light font-bold">
              HelpAge India | 12A &amp; 80G Certified | Serves 10 Lakh+ Elders Annually
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-gold/10 text-xxs text-grey italic">
              📸 Photo: HelpAge India representatives coordinating with Niraj Gera Ji and residents.
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-gold/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h4 className="font-serif font-bold text-dark text-lg">Why NGO Partnerships Matter</h4>
            <ul className="list-disc pl-5 space-y-2 text-xs text-grey leading-relaxed">
              <li>Confirms that operations meet national standards of elderly safety.</li>
              <li>Validates that our model is trusted by professional researchers.</li>
              <li>Reassures sponsors that donations directly reach the needy.</li>
              <li>Links Aanandam to the wider social-care network in India.</li>
            </ul>
          </div>
        </div>

        {/* National Icon Spotlight (Dr. Kiran Bedi) */}
        <div className="bg-warm border-2 border-accent/30 rounded-3xl p-8 space-y-6 shadow-sm">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <span className="bg-red-brand/10 text-red-brand font-bold text-xxs px-2.5 py-1 rounded-full uppercase tracking-wider">
                National Icon Visit
              </span>
              <h3 className="font-serif font-black text-2xl text-primary mt-2">
                🇮🇳 Dr. Kiran Bedi Ji
              </h3>
              <p className="text-xs text-accent-dark font-bold uppercase tracking-wider">
                IPS (Retd.) | Former Lt. Governor of Puducherry | Ramon Magsaysay Award Winner
              </p>
            </div>
          </div>

          <p className="text-sm text-grey leading-relaxed">
            We were humbled to host Dr. Kiran Bedi Ji at Aanandam. Dr. Bedi Ji spent extensive time talking
            with each resident, sharing prayers and meals, and appreciating the transparency of the Humanify Foundation.
            Her visit remains a source of deep inspiration for all of us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs border-t border-gold/10 pt-4">
            <div className="bg-white/80 p-4 rounded-xl border border-gold/10">
              <span className="block font-bold text-red-brand mb-1">About Dr. Kiran Bedi Ji</span>
              <p className="text-grey leading-relaxed">
                India's first woman IPS officer (1972). Dedicated police reformer and social activist with outstanding public integrity.
              </p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl border border-gold/10">
              <span className="block font-bold text-primary mb-1">📸 Photo Records Required</span>
              <ul className="list-disc pl-4 text-grey space-y-1">
                <li>Candid interactions with elders</li>
                <li>Niraj Gera Ji welcoming Dr. Kiran Bedi</li>
                <li>Group photograph with residents</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hindi Highlight Section */}
        <div className="bg-orange-50/40 border-l-4 border-orange-500 rounded-r-2xl p-6 space-y-3">
          <h3 className="font-kalam text-xl font-bold text-red-brand">प्रतिष्ठित अतिथि — जब बड़े नाम आनंदम् आते हैं</h3>
          <p className="font-kalam text-sm sm:text-base text-dark/95 leading-relaxed">
            आनंदम् वृद्धाश्रम में देश के सबसे बड़े और प्रतिष्ठित संगठनों (जैसे <strong>अमूल</strong>, <strong>Axis Max Life</strong>,
            <strong>Yes Madam</strong>, और <strong>HelpAge India</strong>) की टीमें आ चुकी हैं।
            इसके अतिरिक्त, भारत की पहली महिला IPS अधिकारी और राष्ट्रीय प्रेरणास्रोत <strong>डॉ. किरण बेदी जी</strong> ने भी हमारे यहाँ
            आकर बुजुर्गों के साथ समय बिताया है और आश्रम की व्यवस्था की सराहना की है। ये सभी दौरे इस बात का प्रमाण हैं कि आनंदम् केवल एक आश्रम
            नहीं, बल्कि एक <strong>अत्यंत विश्वसनीय और पारदर्शी प्रयास</strong> है।
          </p>
          <div className="flex flex-wrap gap-2 text-xxs font-bold">
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full">डॉ किरण बेदी वृद्धाश्रम</span>
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full">अमूल वृद्धाश्रम दिल्ली</span>
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full">विश्वसनीय वृद्धाश्रम</span>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Visitors;
