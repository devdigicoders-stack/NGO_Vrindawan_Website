import React from "react";
import PageHero from "../Component/PageHero";

function Outbound() {
  const outings = [
    {
      icon: "🌳",
      title: "Nature & Garden Outings",
      desc: "Elders spend sunny mornings in parks (Lodhi Garden, local reserves), enjoying fresh air, light stretching, and bird watching."
    },
    {
      icon: "🎭",
      title: "Cultural & Festival Outings",
      desc: "Trips to regional melas, Ramlila plays, and community events, helping them stay connected to the active traditions of their youth."
    },
    {
      icon: "🏛️",
      title: "Heritage & Historical Walks",
      desc: "Visiting locations like Red Fort or Qutub Minar, letting our seniors share their stories and recollections about Delhi's growth."
    }
  ];

  const sponsorTiers = [
    { price: "₹5,000", label: "Local Park Outing", desc: "Sponsors transport, snacks, and medical support staff for a half-day local garden visit." },
    { price: "₹15,000", label: "Full-Day Temple Outing", desc: "Covers a comfortable bus, special meals, and support volunteers for a major temple trip." },
    { price: "₹30,000", label: "Overnight Pilgrimage", desc: "Covers hotel stay, travel support, and all arrangements for a local overnight trip." },
    { price: "₹50,000+", label: "Vrindavan / Mathura Journey", desc: "Sponsors a full out-of-city spiritual tour, including temple darshans and aarti arrangements." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <PageHero title="Outbound Activities & Outings" />

      {/* Main Content Area */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-2 space-y-12 text-sm sm:text-base text-grey leading-relaxed">

        {/* Intro */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-primary">
            Life Beyond Four Walls
          </h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full"></div>
          <p className="text-grey">
            We believe elder care extends beyond safety and shelter. We nourish their spirits by planning regular
            outbound activities, reconnecting them to a world full of color, music, and spiritual joy.
          </p>
        </div>

        {/* Feature Trip (Vrindavan) */}
        <div className="bg-cream border border-gold/20 rounded-3xl overflow-hidden shadow-sm">
          <div className="bg-accent-dark text-white p-6 sm:p-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-white/90">Featured Outing</span>
            <h3 className="font-serif font-black text-2xl">🕉️ Vrindavan &amp; Mathura Pilgrimage</h3>
            <p className="text-xs text-white/85">Spiritual Journey to the land of Lord Krishna</p>
          </div>
          <div className="p-6 sm:p-8 space-y-4">
            <p>
              For many of our grandparents, visiting Vrindavan was a lifelong dream they could no longer achieve alone.
              Our Vrindavan trip is designed with strict comfort standards, enabling them to visit the sacred Banke Bihari
              Temple, Prem Mandir, and sit peacefully by the Yamuna ghat for sunset aarti.
            </p>
            <div className="border-t border-gold/15 pt-4">
              <span className="block font-serif font-bold text-dark mb-2">Activities Conducted:</span>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Comfortable AC transport with medical first-aid backups.</li>
                <li>Wheelchair coordination for temple entrances.</li>
                <li>Communal prasad and bhajan chanting at the Yamuna banks.</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gold/10 text-xxs text-grey italic">
              📸 Photo: Elders holding hands near the ghats, offering prayers, and singing group bhajans.
            </div>
          </div>
        </div>

        {/* Outing Cards Grid */}
        <div className="space-y-6">
          <h3 className="font-serif font-bold text-xl text-dark text-center">Other Outdoor Outings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outings.map((out, idx) => (
              <div
                key={idx}
                className="bg-cream/40 border border-gold/15 p-6 rounded-2xl space-y-3 shadow-xs hover:border-accent/40"
              >
                <span className="text-3xl block">{out.icon}</span>
                <h4 className="font-serif font-bold text-md text-dark">{out.title}</h4>
                <p className="text-xs text-grey leading-relaxed">{out.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Health Benefits Callout */}
        <div className="bg-primary/5 rounded-3xl p-8 space-y-4">
          <h3 className="font-serif font-bold text-lg text-primary">Mental and Physical Wellness Impact</h3>
          <p className="text-xs sm:text-sm text-grey">
            Studies show that regular outings dramatically decrease feelings of isolation and cognitive decline among seniors.
            At Aanandam, we witness this transformation first-hand—seniors return with better sleep patterns, active conversations,
            and renewed excitement. A single outing acts as a powerful healer.
          </p>
        </div>

        {/* Sponsorship Grid */}
        <div className="space-y-6">
          <h3 className="font-serif font-bold text-xl text-dark text-center">Sponsor a Joyful Outing</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white border border-gold/15 rounded-2xl p-6 text-center space-y-3 shadow-xs border-t-4 border-t-accent"
              >
                <span className="block font-serif font-black text-2xl text-red-brand">{tier.price}</span>
                <h4 className="font-serif font-bold text-sm text-dark">{tier.label}</h4>
                <p className="text-xxs text-grey leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action contact */}
        <div className="bg-dark text-white p-8 rounded-3xl text-center space-y-4">
          <h4 className="font-serif font-bold text-lg">Partner With Us for a Family Outing</h4>
          <p className="text-xs text-white/80 max-w-xl mx-auto">
            You can also volunteer to manage an outing, or take our seniors out as a CSR/family activity.
            We organize logistics while you bring the warmth.
          </p>
          <div>
            <a
              href="tel:+919310105630"
              className="inline-block px-6 py-2.5 bg-accent hover:bg-accent-dark text-dark font-bold rounded-xl text-xs transition"
            >
              Contact Trip Planners: +91-9310105630 📞
            </a>
          </div>
        </div>

        {/* Hindi Highlight Section */}
        <div className="bg-orange-50/40 border-l-4 border-orange-500 rounded-r-2xl p-6 space-y-3">
          <h3 className="font-kalam text-xl font-bold text-red-brand">आउटडोर यात्राएँ — जब चेहरे खिलते हैं</h3>
          <p className="font-kalam text-sm sm:text-base text-dark/95 leading-relaxed">
            आनंदम् में हमारे बुजुर्गों को केवल चार दीवारों के भीतर नहीं रखा जाता। हम उन्हें नियमित तीर्थ यात्राओं और पिकनिक पर ले जाते हैं।
            हाल ही में आयोजित <strong>वृंदावन यात्रा</strong> में हमारे बुजुर्गों ने बांके बिहारी मंदिर और प्रेम मंदिर के दर्शन किए।
            घाट पर बैठकर यमुना जी की आरती की और भजन गाए। आप भी इनमें से किसी यात्रा को प्रायोजित (sponsor) कर सकते हैं:
            स्थानीय पार्क यात्रा (₹5,000), मंदिर दर्शन (₹15,000), या संपूर्ण वृंदावन यात्रा (₹50,000+)।
          </p>
          <div className="flex flex-wrap gap-2 text-xxs font-bold">
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full">बुजुर्गों की वृंदावन यात्रा</span>
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full">तीर्थ यात्रा स्पॉन्सरशिप</span>
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full">vridhashram.in यात्रा</span>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Outbound;
