import React, { useState } from "react";
import PageHero from "../Component/PageHero";
import DonationTables from "../Component/DonationTables";

function Donate() {
  const [amountType, setAmountType] = useState("meal");
  const [customAmount, setCustomAmount] = useState("");

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for choosing to support us! Please use the UPI ID or Bank Details below to complete your transfer of value. We appreciate your compassion.`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <PageHero
        title="Become the Family They Lost."
        description="Your small act of kindness provides food, medicine, and love to abandoned elders. Join us in making their twilight years truly golden."
        hideBreadcrumb={true}
      />

      {/* Impact Story Section */}
      <section className="bg-cream/20 py-16 sm:py-24 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image Side */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] lg:h-[550px] group">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000"
                alt="Elderly hands holding together"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-serif italic text-xl lg:text-2xl leading-relaxed">"A single act of kindness can fill a lonely heart with hope."</p>
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="block text-xs font-bold text-accent-dark uppercase tracking-widest">Your Impact</span>
                <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-primary leading-tight">
                  You Cannot Put a Price on Dignity. <br /> <span className="text-dark">But You Can Fund It.</span>
                </h2>
                <div className="h-1.5 w-24 bg-accent rounded-full"></div>
              </div>

              <div className="space-y-6 text-grey leading-relaxed text-base sm:text-lg">
                <p>
                  Every meal served at Aanandam. Every blanket on a cold night. Every diya lit at Diwali. Every birthday cake cut. Every doctor who visits. Every smile on a face that once knew only loneliness. All of it — all of it — is made possible by people like you who chose to give.
                </p>
                <p>
                  Aanandam is <strong className="text-primary">100% donation-funded</strong>. We receive no government grants. We charge no fees from our elders. We exist entirely because compassionate individuals — students, professionals, families, companies — believe that abandoned grandparents deserve better.
                </p>
                <p className="font-medium text-dark bg-warm p-4 rounded-xl border border-gold/20 shadow-sm">
                  Every rupee you donate reaches directly to an elder. We publish our expenses transparently. You will always know how your money is used.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-2 space-y-12 text-sm sm:text-base text-grey leading-relaxed">


        {/* Ways to Donate Section */}
        <div className="space-y-8">
          <h2 className="font-serif font-black text-3xl text-accent-dark">Ways to Donate</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: UPI / Online Transfer */}
            <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gold/20 overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:border-transparent">
              {/* The Sliding Dark Green Background */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

              {/* Content Container */}
              <div className="relative z-10">
                <h3 className="font-serif font-bold text-xl text-dark group-hover:text-white transition-colors duration-300 flex items-center mb-4">
                  <span className="mr-3 text-2xl">💳</span> UPI / Online Transfer
                </h3>
                <p className="text-grey group-hover:text-white/80 transition-colors duration-300 text-sm mb-6 leading-relaxed">
                  The fastest way to donate. Use any UPI app — GPay, PhonePe, Paytm — or direct bank transfer.
                </p>

                <div className="space-y-2 text-sm text-dark group-hover:text-white/90 transition-colors duration-300">
                  <p><span className="font-bold text-grey group-hover:text-white transition-colors duration-300">UPI ID:</span> vridhashram@upi</p>
                  <p><span className="font-bold text-grey group-hover:text-white transition-colors duration-300">Bank:</span> HDFC Bank Ltd</p>
                  <p><span className="font-bold text-grey group-hover:text-white transition-colors duration-300">Account No:</span> 50200057291753</p>
                  <p><span className="font-bold text-grey group-hover:text-white transition-colors duration-300">IFSC:</span> HDFC0000284</p>
                  <p><span className="font-bold text-grey group-hover:text-white transition-colors duration-300">Account Name:</span> Humanify Foundation</p>
                </div>
              </div>
            </div>

            {/* Card 2: Donate in Kind */}
            <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gold/20 overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:border-transparent">
              {/* The Sliding Dark Green Background */}
              <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

              {/* Content Container */}
              <div className="relative z-10">
                <h3 className="font-serif font-bold text-xl text-dark group-hover:text-white transition-colors duration-300 flex items-center mb-4">
                  <span className="mr-3 text-2xl">📦</span> Donate in Kind
                </h3>
                <p className="text-grey group-hover:text-white/80 transition-colors duration-300 text-sm mb-4">
                  You can donate items we need every month:
                </p>

                <ul className="text-sm text-dark group-hover:text-white/90 transition-colors duration-300 space-y-1.5 mb-6">
                  <li>• Dal, rice, atta, cooking oil, sugar, tea</li>
                  <li>• Seasonal vegetables and fruits</li>
                  <li>• Milk and dairy products</li>
                  <li>• Gas cylinders</li>
                  <li>• Medicines and first-aid supplies</li>
                  <li>• Bedsheets, blankets, towels</li>
                  <li>• Cleaning and hygiene supplies</li>
                </ul>

                <p className="text-sm text-grey group-hover:text-[#FDD835] font-bold transition-colors duration-300">
                  Call us to arrange drop-off or pick-up.
                </p>
              </div>
            </div>
          </div>

          {/* Tax Benefit Banner */}
          <div className="bg-[#F59E0B] text-white p-8 sm:p-10 rounded-2xl shadow-md">
            <h3 className="font-serif font-bold text-2xl mb-4">Tax Benefit — 80G Deduction</h3>
            <p className="text-white/90 leading-relaxed text-sm sm:text-base">
              Donations to Humanify Foundation qualify for 80G income tax deduction. We provide official receipts for all donations. Please share your PAN number and contact details when donating to receive your 80G certificate. <em className="font-bold opacity-100">Do good. Save tax. Change a life.</em>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#C62828] hover:bg-[#B71C1C] text-white font-bold py-3 px-6 rounded-lg shadow-sm transition flex items-center transform hover:scale-105">
              <span className="mr-2">💖</span> Donate Now via Razorpay
            </button>
            <button className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold py-3 px-6 rounded-lg shadow-sm transition flex items-center transform hover:scale-105">
              <span className="mr-2">📱</span> Pay via UPI
            </button>
            <button className="bg-white border-2 border-dark text-dark font-bold hover:bg-warm py-3 px-6 rounded-lg shadow-sm transition flex items-center transform hover:scale-105">
              <span className="mr-2">📦</span> Donate in Kind
            </button>
          </div>
        </div>

        {/* Hindi Highlight Section */}
        <div className="bg-orange-50/40 border-l-4 border-orange-500 rounded-r-2xl p-6 space-y-3">
          <h3 className="font-kalam text-xl font-bold text-red-brand">दान एवं सहयोग — पुण्य का भागीदार बनें</h3>
          <p className="font-kalam text-sm sm:text-base text-dark/95 leading-relaxed">
            आनंदम् वृद्धाश्रम आपके सहयोग से ही चलता है। आप हमारे बुजुर्गों के भोजन (₹1,500), प्रति बुजुर्ग मासिक सहायता (₹6,000),
            या किसी यात्रा को प्रायोजित (₹15,000) कर सकते हैं। दान की गई राशि आयकर अधिनियम की धारा <strong>80G</strong> के तहत
            करमुक्त है। आप सीधे हमारे बैंक खाते में Net Banking द्वारा या <strong>vridhashram@upi</strong> पर UPI द्वारा भुगतान कर सकते हैं।
            स्थानांतरण के पश्चात रसीद प्राप्त करने के लिए स्क्रीनशॉट <strong>+91-9310105630</strong> पर WhatsApp अवश्य भेजें।
          </p>
          <div className="flex flex-wrap gap-2 text-xxs font-bold">
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full">वृद्धाश्रम बैंक खाता</span>
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full">वृद्धाश्रम दान UPI</span>
            <span className="bg-orange-500 text-white px-2.5 py-1 rounded-full">vridhashram.in दान</span>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Donate;
