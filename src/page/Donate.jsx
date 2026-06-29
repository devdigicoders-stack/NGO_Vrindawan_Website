import React, { useState } from "react";
import PageHero from "../Component/PageHero";
import DonationTables from "../Component/DonationTables";
import { FaCreditCard, FaBoxOpen, FaHeart, FaMobileAlt, FaPhoneAlt } from "react-icons/fa";
import HinduCalendar from "../Component/HinduCalendar";

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

            {/* QR Code Side */}
            <div className="relative bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-gold/20 flex flex-col items-center justify-center text-center h-full group overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-warm rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-warm rounded-tr-full -z-10 transition-transform duration-700 group-hover:scale-110"></div>
              
              <div className="mb-6">
                <h3 className="font-serif font-black text-2xl lg:text-3xl text-primary mb-2">Scan & Donate</h3>
                <p className="text-grey text-sm font-medium">100% Secure Payments via UPI apps</p>
              </div>
              
              <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl border-2 border-dashed border-accent mb-8 w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center relative transform transition-transform duration-500 hover:-translate-y-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent opacity-30 blur rounded-3xl -z-10"></div>
                <img
                  src="/fwd47photos/1001362344.jpeg"
                  alt="Donation QR Code"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>

              <div className="bg-warm px-6 py-4 rounded-2xl border border-gold/30 w-full max-w-sm shadow-sm flex flex-col items-center justify-center">
                <p className="text-grey text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">Or Direct Bank Transfer</p>
                <div className="space-y-1">
                  <p className="text-dark text-sm sm:text-base">A/c Name: <span className="font-bold">Humanify Foundation</span></p>
                  <p className="text-dark text-sm sm:text-base">A/c No: <span className="font-bold">50200057291753</span></p>
                  <p className="text-dark text-sm sm:text-base">IFSC: <span className="font-bold">HDFC0000284</span></p>
                </div>
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
                  Every rupee you Support Us reaches directly to an elder. We publish our expenses transparently. You will always know how your money is used.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Every Rupee Counts Section */}
      <section className="bg-[#FFFDF5] py-16 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap">
                Every Rupee Counts
              </span>
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#9a3412] font-bold mb-6 leading-tight">
              Support Us to Aanandam Vridhashram — <br className="hidden lg:block" />Every Rupee Becomes a Meal, a Medicine, a Moment of Dignity.
            </h2>
            <p className="text-gray-700 text-[16px] leading-[1.8] font-medium max-w-4xl mx-auto">
              Aanandam Vridhashram, a 100% free old age home in Karala Village near Rohini Sector-38 and Pitampura, Delhi NCR, runs entirely on the generosity of donors like you. As an initiative under Humanify Foundation, all donations are eligible for tax exemption under Section 80G of the Income Tax Act.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap">
                Choose Your Way To Give
              </span>
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-[#E58F00] p-6 text-white text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">One-Time Donation</h3>
                  <p className="font-serif text-[28px] font-bold">Any Amount</p>
                </div>
                <div className="p-8 flex-grow flex items-center justify-center text-center">
                  <p className="text-gray-600 text-[14.5px] leading-relaxed">
                    Used immediately for urgent needs — food, medicines, bedding, repairs. Every contribution, big or small, is deployed where it's needed most.
                  </p>
                </div>
                <button className="bg-[#E58F00] hover:bg-[#d97706] text-white font-bold py-4 px-4 w-full uppercase tracking-wider text-[13px] transition-colors">
                  Support Us Now
                </button>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-[#2E7D32] p-6 text-white text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">Monthly Giving</h3>
                  <p className="font-serif text-[28px] font-bold">Recurring</p>
                </div>
                <div className="p-8 flex-grow flex items-center justify-center text-center">
                  <p className="text-gray-600 text-[14.5px] leading-relaxed">
                    Predictable monthly support lets us plan better care, food supplies and medical arrangements for our elders — the most sustainable way to help.
                  </p>
                </div>
                <button className="bg-[#E58F00] hover:bg-[#d97706] text-white font-bold py-4 px-4 w-full uppercase tracking-wider text-[13px] transition-colors">
                  Become a Monthly Donor
                </button>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-[#2d3748] p-6 text-white text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">Support Us a Meal</h3>
                  <p className="font-serif text-[28px] font-bold">₹51</p>
                </div>
                <div className="p-8 flex-grow flex items-center justify-center text-center">
                  <p className="text-gray-600 text-[14.5px] leading-relaxed">
                    ₹51 covers one full, nutritious meal for one elder. A simple, low-cost way to feed someone today. Perfect for "Annadan" on special occasions.
                  </p>
                </div>
                <button className="bg-[#E58F00] hover:bg-[#d97706] text-white font-bold py-4 px-4 w-full uppercase tracking-wider text-[13px] transition-colors">
                  Support Us a Meal
                </button>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-[#991b1b] p-6 text-white text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">Support Us an Elder</h3>
                  <p className="font-serif text-[28px] font-bold">₹1,500/mo</p>
                </div>
                <div className="p-8 flex-grow flex items-center justify-center text-center">
                  <p className="text-gray-600 text-[14.5px] leading-relaxed">
                    Covers the complete monthly care of one elder — meals, shelter, medicines, wellbeing. Receive updates & photos.
                  </p>
                </div>
                <button className="bg-[#E58F00] hover:bg-[#d97706] text-white font-bold py-4 px-4 w-full uppercase tracking-wider text-[13px] transition-colors">
                  Support Us an Elder
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hindu Calendar Section */}
      <HinduCalendar />

      {/* Main Content Area */}
      <section className="bg-[#FFFDF5] pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12 text-sm sm:text-base text-grey leading-relaxed">

          {/* Ways to Support Us Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
              <span className="text-[#E58F00] font-bold tracking-widest text-[13px] uppercase whitespace-nowrap">
                Other Ways To Give
              </span>
              <div className="w-12 sm:w-24 h-[1px] bg-[#E58F00]/30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: UPI / Online Transfer */}
              <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gold/20 overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:border-transparent">
                {/* The Sliding Dark Green Background */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

                {/* Content Container */}
                <div className="relative z-10">
                  <h3 className="font-serif font-bold text-xl text-dark group-hover:text-white transition-colors duration-300 flex items-center mb-4">
                    <span className="mr-3 text-2xl text-[#E58F00] group-hover:text-white"><FaCreditCard /></span> UPI / Online Transfer
                  </h3>
                  <p className="text-grey group-hover:text-white/80 transition-colors duration-300 text-sm mb-6 leading-relaxed">
                    The fastest way to Support Us. Use any UPI app — GPay, PhonePe, Paytm — or direct bank transfer.
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

              {/* Card 2: Support Us in Kind */}
              <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gold/20 overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:border-transparent">
                {/* The Sliding Dark Green Background */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0a231a] transition-all duration-500 ease-out group-hover:h-full z-0"></div>

                {/* Content Container */}
                <div className="relative z-10">
                  <h3 className="font-serif font-bold text-xl text-dark group-hover:text-white transition-colors duration-300 flex items-center mb-4">
                    <span className="mr-3 text-2xl text-[#E58F00] group-hover:text-white"><FaBoxOpen /></span> Support Us in Kind
                  </h3>
                  <p className="text-grey group-hover:text-white/80 transition-colors duration-300 text-sm mb-4">
                    You can Support Us items we need every month:
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

            {/* Hindi SEO / Summary Section */}
            <div className="mt-8 bg-[#FFFDF5] rounded-xl border-l-[6px] border-l-[#E58F00] p-8 md:p-10 shadow-sm relative">
              <div className="absolute top-6 right-6 text-[#E58F00] text-sm font-bold">हिंदी</div>
              <h3 className="font-serif font-bold text-2xl md:text-[26px] mb-6 text-[#9a3412]">
                आनंदम् वृद्धाश्रम को दान दें
              </h3>
              <div className="space-y-4 text-gray-700 text-[15.5px] leading-[1.8] font-medium">
                <p>
                  आनंदम् वृद्धाश्रम (करला, रोहिणी सेक्टर-38 के पास, दिल्ली) को दान दें — आपका हर रुपया एक बुजुर्ग के लिए भोजन, दवा या सम्मान बनता है।
                </p>
                <p>
                  एक बार का दान, मासिक दान, भोजन प्रायोजन (₹51), या बुजुर्ग प्रायोजन (₹1,500/माह) — सभी विकल्प उपलब्ध हैं। हुमानिफाई फाउंडेशन के तहत सभी दान <span className="font-bold text-[#9a3412]">80G</span> के अंतर्गत कर-मुक्त हैं।
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-[#E58F00] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-sm">वृद्धाश्रम दान दिल्ली</span>
                <span className="bg-[#E58F00] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-sm">मासिक दान वृद्धाश्रम</span>
                <span className="bg-[#E58F00] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-sm">80G दान रसीद</span>
                <span className="bg-[#E58F00] text-white text-[13px] font-bold px-5 py-2 rounded-full shadow-sm">CSR दान वृद्धाश्रम</span>
              </div>
            </div>

            {/* Contact Banner */}
            <div className="mt-10 bg-[#1f2937] rounded-xl p-8 md:p-10 shadow-md">
              <h3 className="font-serif font-bold text-2xl text-white mb-6 flex items-center gap-3">
                <span className="text-[#e81cff] text-2xl"><FaPhoneAlt /></span> Support Us Now
              </h3>
              <p className="text-white/90 text-[14.5px] leading-[2]">
                <span className="font-bold">Phone / WhatsApp:</span> +91-9310105630 (24×7) | <span className="font-bold">Email:</span> nirajgera@gmail.com | <span className="font-bold">Website:</span> www.vridhashram.in | www.humanify.in | www.nirajgera.com | <span className="font-bold">Address:</span> Pole No-25, 513/11, Karala Village, Delhi - 110081
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;
