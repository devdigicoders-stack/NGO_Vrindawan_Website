import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  const [involvedDropdown, setInvolvedDropdown] = useState(false);
  const [donateDropdown, setDonateDropdown] = useState(false);
  const [galleryDropdown, setGalleryDropdown] = useState(false);

  const activeStyle = ({ isActive }) =>
    `text-[17px] font-bold tracking-wide transition-all duration-300 pb-1 border-b-2 ${isActive ? "text-[#0a231a] border-[#FDD835]" : "text-gray-700 border-transparent hover:text-[#0a231a]"
    }`;

  return (
    <nav className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/image.png" alt="Logo" className="h-25 md:h-30 w-auto object-contain mt-4" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={activeStyle}>
              Home
            </NavLink>

            {/* About Dropdown */}
            <div
              className="relative flex items-center h-full py-6"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button className="flex items-center text-[17px] font-bold tracking-wide text-gray-700 hover:text-[#0a231a] transition-all duration-300 focus:outline-none pb-1 border-b-2 border-transparent">
                About Us
              </button>

              {aboutDropdown && (
                <div className="absolute top-16 left-0 w-56 bg-white rounded shadow-lg py-2 z-50 animate-fade-in border-t-2 border-[#FDD835]">
                  <Link to="/about-aanandam" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    About Aanandam
                  </Link>
                  <Link to="/why-aanandam" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Why Aanandam
                  </Link>
                  <Link to="/about-founder" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    About Founder
                  </Link>
                  <Link to="/about-niraj-gera" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    About Niraj Gera
                  </Link>
                  <Link to="/life-at-aanandam" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Life At Aanandam
                  </Link>
                  <Link to="/facilities" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Facilities
                  </Link>
                  <Link to="/dream-campus" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Dream Campus
                  </Link>
                </div>
              )}
            </div>

            {/* Get Involved Dropdown */}
            <div
              className="relative flex items-center h-full py-6"
              onMouseEnter={() => setInvolvedDropdown(true)}
              onMouseLeave={() => setInvolvedDropdown(false)}
            >
              <button className="flex items-center text-[17px] font-bold tracking-wide text-gray-700 hover:text-[#0a231a] transition-all duration-300 focus:outline-none pb-1 border-b-2 border-transparent">
                Get Involved
              </button>

              {involvedDropdown && (
                <div className="absolute top-16 left-0 w-60 bg-white rounded shadow-lg py-2 z-50 animate-fade-in border-t-2 border-[#FDD835]">
                  <Link to="/admission" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Admission
                  </Link>
                  <Link to="/volunteer" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Volunteer
                  </Link>
                  <Link to="/celebrate-with-elders" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Celebrate With Elders
                  </Link>
                  <Link to="/csr-partnerships" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    CSR Partnerships
                  </Link>
                </div>
              )}
            </div>



            {/* Donate Dropdown */}
            <div
              className="relative flex items-center h-full py-6"
              onMouseEnter={() => setDonateDropdown(true)}
              onMouseLeave={() => setDonateDropdown(false)}
            >
              <button className="flex items-center text-[17px] font-bold tracking-wide text-gray-700 hover:text-[#0a231a] transition-all duration-300 focus:outline-none pb-1 border-b-2 border-transparent">
                Donate
              </button>

              {donateDropdown && (
                <div className="absolute top-16 left-0 w-60 bg-white rounded shadow-lg py-2 z-50 animate-fade-in border-t-2 border-[#FDD835]">
                  <Link to="/donate" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Donate Now
                  </Link>
                  <Link to="/sponsor-a-meal" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Sponsor A Meal
                  </Link>
                  <Link to="/sponsor-an-elder" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Sponsor An Elder
                  </Link>
                </div>
              )}
            </div>

            {/* Gallery Dropdown */}
            <div
              className="relative flex items-center h-full py-6"
              onMouseEnter={() => setGalleryDropdown(true)}
              onMouseLeave={() => setGalleryDropdown(false)}
            >
              <button className="flex items-center text-[17px] font-bold tracking-wide text-gray-700 hover:text-[#0a231a] transition-all duration-300 focus:outline-none pb-1 border-b-2 border-transparent">
                Gallery
              </button>

              {galleryDropdown && (
                <div className="absolute top-16 left-0 w-60 bg-white rounded shadow-lg py-2 z-50 animate-fade-in border-t-2 border-[#FDD835]">
                  <Link to="/photo-gallery" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Photo Gallery
                  </Link>
                  <Link to="/video-gallery" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Video Gallery
                  </Link>
                  <Link to="/news-and-events" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    News & Events
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Contact Us Button & Mobile menu button */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+919310105630"
              className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-[14px] font-bold tracking-wide text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-sm shadow-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Call Now
            </a>
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-[14px] font-bold tracking-wide text-[#0a231a] bg-[#FDD835] hover:bg-[#0a231a] hover:text-[#FDD835] transition-colors duration-300 rounded-sm"
            >
              Contact Us
            </Link>

            <div className="flex items-center lg:hidden">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  if (isOpen) setMobileSection(null);
                }}
                className="inline-flex items-center justify-center p-2 rounded text-[#0a231a] hover:text-green-800 focus:outline-none transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-2xl transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0 pointer-events-none border-t-0"
          }`}
      >
        <div className="py-4 px-6 space-y-2 pb-8">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="block py-3 text-[16px] font-bold text-[#0a231a] hover:text-[#FDD835] border-b border-gray-100">
            Home
          </NavLink>

          {/* About Us Accordion */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => setMobileSection(mobileSection === 'about' ? null : 'about')}
              className="flex justify-between items-center w-full py-3 text-[16px] font-bold text-[#0a231a] hover:text-[#FDD835]"
            >
              <span>About Us</span>
              <svg className={`w-4 h-4 transform transition-transform ${mobileSection === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div className={`space-y-1 pl-4 overflow-hidden transition-all duration-300 ${mobileSection === 'about' ? 'max-h-64 pb-3' : 'max-h-0'}`}>
              <Link to="/about-aanandam" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">About Aanandam</Link>
              <Link to="/why-aanandam" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Why Aanandam</Link>
              <Link to="/about-founder" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">About Founder</Link>
              <Link to="/about-niraj-gera" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">About Niraj Gera</Link>
              <Link to="/life-at-aanandam" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Life At Aanandam</Link>
              <Link to="/facilities" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Facilities</Link>
              <Link to="/dream-campus" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Dream Campus</Link>
            </div>
          </div>

          {/* Get Involved Accordion */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => setMobileSection(mobileSection === 'involved' ? null : 'involved')}
              className="flex justify-between items-center w-full py-3 text-[16px] font-bold text-[#0a231a] hover:text-[#FDD835]"
            >
              <span>Get Involved</span>
              <svg className={`w-4 h-4 transform transition-transform ${mobileSection === 'involved' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div className={`space-y-1 pl-4 overflow-hidden transition-all duration-300 ${mobileSection === 'involved' ? 'max-h-64 pb-3' : 'max-h-0'}`}>
              <Link to="/admission" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Admission Rules</Link>
              <Link to="/volunteer" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Volunteer With Us</Link>
              <Link to="/celebrate-with-elders" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Celebrate With Elders</Link>
              <Link to="/csr-partnerships" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">CSR Partnerships</Link>
            </div>
          </div>

          {/* Donate Accordion */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => setMobileSection(mobileSection === 'donate' ? null : 'donate')}
              className="flex justify-between items-center w-full py-3 text-[16px] font-bold text-[#0a231a] hover:text-[#FDD835]"
            >
              <span>Donate</span>
              <svg className={`w-4 h-4 transform transition-transform ${mobileSection === 'donate' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div className={`space-y-1 pl-4 overflow-hidden transition-all duration-300 ${mobileSection === 'donate' ? 'max-h-64 pb-3' : 'max-h-0'}`}>
              <Link to="/donate" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Donate Now</Link>
              <Link to="/sponsor-a-meal" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Sponsor A Meal</Link>
              <Link to="/sponsor-an-elder" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Sponsor An Elder</Link>
            </div>
          </div>

          {/* Gallery Accordion */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => setMobileSection(mobileSection === 'gallery' ? null : 'gallery')}
              className="flex justify-between items-center w-full py-3 text-[16px] font-bold text-[#0a231a] hover:text-[#FDD835]"
            >
              <span>Gallery</span>
              <svg className={`w-4 h-4 transform transition-transform ${mobileSection === 'gallery' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div className={`space-y-1 pl-4 overflow-hidden transition-all duration-300 ${mobileSection === 'gallery' ? 'max-h-64 pb-3' : 'max-h-0'}`}>
              <Link to="/photo-gallery" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Photo Gallery</Link>
              <Link to="/video-gallery" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Video Gallery</Link>
              <Link to="/news-and-events" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">News & Events</Link>
            </div>
          </div>

          <a href="tel:+919310105630" className="mt-6 flex items-center justify-center w-full px-6 py-4 text-[16px] font-bold rounded text-white bg-green-600 hover:bg-green-700 shadow-lg transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            Call Now
          </a>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 flex items-center justify-center w-full px-6 py-4 text-[16px] font-bold rounded text-[#0a231a] bg-[#FDD835] shadow-lg transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;