import React, { useState } from "react";
import PageHero from "../Component/PageHero";
import Swal from 'sweetalert2';
import { MapPin, PhoneCall, Clock, Bed, Heart, Handshake, Building, Wrench } from "lucide-react";
import ContactCard3D from "../Component/ContactCard3D";

function Contact() {
  const [formData, setFormData] = useState({
    enquiryType: "General Enquiry",
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Submitted Successfully!',
      text: `Thank you, ${formData.name}! Your ${formData.enquiryType} has been received. Our team will contact you shortly.`,
      icon: 'success',
      confirmButtonColor: '#0a231a', // matching primary green
      confirmButtonText: 'Great!'
    });
    setFormData({ enquiryType: "General Enquiry", name: "", phone: "", email: "", message: "" });
  };

  const scrollToForm = (type) => {
    setFormData({ ...formData, enquiryType: type });
    const formElement = document.getElementById("enquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Contact Us"
        description="Whether you want to Support Us an elder, volunteer your time, or just come over to share a cup of tea, we’d love to hear from you. Aanandam's doors are always open."
        hideBreadcrumb={true}
      />

      {/* Main Content Area */}
      <section className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-2 space-y-16 text-sm sm:text-base text-grey leading-relaxed">

        {/* Welcome Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-primary leading-tight">
            We Are Here. Always. <br className="hidden sm:block" /> For Elders, for Donors, for Volunteers, for You.
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto rounded-full"></div>
          {/* Removed tags as requested */}
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 mt-12 mb-8">

          {/* Address */}
          <div
            className="relative group bg-white px-6 pb-8 pt-16 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2E7D32]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center mt-6 lg:mt-0"
            onMouseEnter={() => setHoveredCard('address')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center overflow-hidden">
              <ContactCard3D shape="address" isHovered={hoveredCard === 'address'} />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#0a231a] mb-4">Our Address</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
              We welcome you to visit our home and spend time with our elders.
            </p>
            <div className="w-full h-px bg-gray-100 mb-6 group-hover:bg-[#2E7D32]/20 transition-colors duration-300"></div>
            <p className="text-[#0a231a] font-bold text-sm leading-relaxed">
              Pole No-25, 513/11, Karala Village, Delhi - 110081
            </p>
          </div>

          {/* Contact Details */}
          <div
            className="relative group bg-white px-6 pb-8 pt-16 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2E7D32]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center mt-6 lg:mt-0"
            onMouseEnter={() => setHoveredCard('contact')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center overflow-hidden">
              <ContactCard3D shape="contact" isHovered={hoveredCard === 'contact'} />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#0a231a] mb-4">Contact Info</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
              Reach out to us for admissions, donations, or any queries.
            </p>
            <div className="w-full h-px bg-gray-100 mb-6 group-hover:bg-[#2E7D32]/20 transition-colors duration-300"></div>
            <p className="text-[#0a231a] font-bold text-sm leading-relaxed">
              +91-9310105630 <br />
              <span className="font-normal text-gray-500">nirajgera@gmail.com</span>
            </p>
          </div>

          {/* Visiting Hours */}
          <div
            className="relative group bg-white px-6 pb-8 pt-16 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2E7D32]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center mt-6 lg:mt-0"
            onMouseEnter={() => setHoveredCard('hours')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center overflow-hidden">
              <ContactCard3D shape="hours" isHovered={hoveredCard === 'hours'} />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#0a231a] mb-4">Working Hours</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
              We are open every day. Prior calls are appreciated.
            </p>
            <div className="w-full h-px bg-gray-100 mb-6 group-hover:bg-[#2E7D32]/20 transition-colors duration-300"></div>
            <p className="text-[#0a231a] font-bold text-sm leading-relaxed">
              All Days <br />
              <span className="font-normal text-gray-500">10:00 AM – 6:00 PM</span>
            </p>
          </div>

        </div>

        {/* Quick Contact Cards */}
        <div className="space-y-6">
          <h3 className="font-serif font-bold text-2xl text-center text-primary">How can we help you today?</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <button onClick={() => scrollToForm('Admission Form')} className="bg-cream border border-gold/20 p-4 rounded-2xl hover:bg-primary hover:text-white group transition flex flex-col items-center">
              <Bed className="w-8 h-8 mb-2 text-[#0a231a] group-hover:text-white transition-colors group-hover:scale-110" />
              <span className="font-bold text-sm">Admission</span>
            </button>
            <button onClick={() => scrollToForm('Donation Form')} className="bg-cream border border-gold/20 p-4 rounded-2xl hover:bg-primary hover:text-white group transition flex flex-col items-center">
              <Heart className="w-8 h-8 mb-2 text-[#0a231a] group-hover:text-white transition-colors group-hover:scale-110" />
              <span className="font-bold text-sm">Support Us</span>
            </button>
            <button onClick={() => scrollToForm('Volunteer Form')} className="bg-cream border border-gold/20 p-4 rounded-2xl hover:bg-primary hover:text-white group transition flex flex-col items-center">
              <Handshake className="w-8 h-8 mb-2 text-[#0a231a] group-hover:text-white transition-colors group-hover:scale-110" />
              <span className="font-bold text-sm">Volunteer</span>
            </button>
            <button onClick={() => scrollToForm('CSR Partnership Form')} className="bg-cream border border-gold/20 p-4 rounded-2xl hover:bg-primary hover:text-white group transition flex flex-col items-center">
              <Building className="w-8 h-8 mb-2 text-[#0a231a] group-hover:text-white transition-colors group-hover:scale-110" />
              <span className="font-bold text-sm">CSR</span>
            </button>
            <button onClick={() => scrollToForm('Land & Infrastructure Form')} className="bg-cream border border-gold/20 p-4 rounded-2xl hover:bg-primary hover:text-white group transition col-span-2 md:col-span-1 flex flex-col items-center">
              <Wrench className="w-8 h-8 mb-2 text-[#0a231a] group-hover:text-white transition-colors group-hover:scale-110" />
              <span className="font-bold text-sm">Land Donation</span>
            </button>
          </div>
        </div>

        {/* Contact Form Section (Image Design) */}
        <div id="enquiry-form" className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row mt-16 border border-gray-100">

          {/* Left Side: Image */}
          <div className="w-full lg:w-5/12 h-[350px] sm:h-[450px] lg:h-auto relative flex-shrink-0 bg-gray-100 overflow-hidden group cursor-pointer">
            {/* Center to Sides Hover Animation with Fade-out */}
            <div className="absolute inset-0 bg-white/30 scale-x-0 opacity-100 group-hover:scale-x-100 group-hover:opacity-0 transition-all duration-1000 ease-out origin-center z-10 pointer-events-none"></div>
            <img
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80"
              alt="Volunteers and community"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 mb-6 w-max">
              <span className="w-2 h-2 rounded-full bg-[#FDD835]"></span>
              <span className="text-xs font-bold text-gray-700 tracking-wide uppercase">Get In Touch</span>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] mb-6">
              Contact Us Today
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed text-[15px] sm:text-[16px]">
              We'd love to hear from you! Whether you want to volunteer, support our programs, or learn more about our initiatives.
            </p>

            <form onSubmit={handleContactSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#0a231a]">First Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter First Name"
                    className="w-full p-4 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FDD835]/50 border-none placeholder-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#0a231a]">Last Name *</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full p-4 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FDD835]/50 border-none placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#0a231a]">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter Phone Number"
                    className="w-full p-4 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FDD835]/50 border-none placeholder-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-[#0a231a]">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter Email Address"
                    className="w-full p-4 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FDD835]/50 border-none placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-[#0a231a]">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any Message..."
                  rows="4"
                  className="w-full p-4 rounded-xl bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FDD835]/50 border-none placeholder-gray-400 resize-none"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 py-4 px-8 bg-[#FDD835] hover:bg-[#F5B041] text-[#0a231a] font-bold text-[16px] rounded-lg shadow-sm transition duration-300 transform hover:-translate-y-1"
                >
                  Submit Message
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7m0 0H8m9 0v9"></path></svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto space-y-6 pt-8">
          <h3 className="font-serif font-bold text-2xl text-dark text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cream/50 border border-gold/15 p-6 rounded-2xl">
              <h4 className="font-bold text-primary mb-2">Can I visit without an appointment?</h4>
              <p className="text-sm text-grey">Yes, visitors are welcome any day between 10 AM and 6 PM. However, a prior call helps us organize a better interaction for you with the elders.</p>
            </div>
            <div className="bg-cream/50 border border-gold/15 p-6 rounded-2xl">
              <h4 className="font-bold text-primary mb-2">How do I Support Us in person?</h4>
              <p className="text-sm text-grey">You can visit the campus to Support Us via cheque, UPI, or in-kind donations (ration, medicines). Our manager will issue an 80G receipt immediately.</p>
            </div>
          </div>
        </div>

      </section>

      {/* Google Map - Full Width Edge to Edge */}
      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13998.665796035987!2d77.0371946!3d28.7295133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d065842823aa5%3A0x6b47c6e6b5ff7f6c!2sKarala%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aanandam Vridhashram Location"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
