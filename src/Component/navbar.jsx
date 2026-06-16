import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  const [involvedDropdown, setInvolvedDropdown] = useState(false);
  const [supportUsDropdown, setsupportUsDropdown] = useState(false);
  const [galleryDropdown, setGalleryDropdown] = useState(false);

  const activeStyle = ({ isActive }) =>
    `text-[17px] font-bold tracking-wide transition-all duration-300 pb-1 border-b-2 ${isActive ? "text-[#0a231a] border-[#FDD835]" : "text-gray-700 border-transparent hover:text-[#0a231a]"
    }`;

  return (
    <nav className="bg-white/95 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-1 flex items-center justify-start">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/image.png" alt="Logo" className="h-25 md:h-30 w-auto object-contain mt-4" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center justify-center space-x-4 xl:space-x-8">
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
                    About Aanandam
                  </Link>
                  <Link to="/about-niraj-gera" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    About Niraj Gera
                  </Link>
                  <Link to="/life-at-aanandam" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Life At Aanandam
                  </Link>
                  <Link to="/meet-our-elders" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Meet Our Elders
                  </Link>
                  <Link to="/resident-stories" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Story of Residents
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
                  <Link to="/celebrate-special-days" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    Celebrate Special Days
                  </Link>
                  <Link to="/csr-partnerships" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                    CSR Partnerships
                  </Link>
                </div>
              )}
            </div>



            {/* Support Us Dropdown */}
            <div
              className="relative flex items-center h-full py-6"
              onMouseEnter={() => setsupportUsDropdown(true)}
            onMouseLeave={() => setsupportUsDropdown(false)}
            >
            <button className="flex items-center text-[17px] font-bold tracking-wide text-gray-700 hover:text-[#0a231a] transition-all duration-300 focus:outline-none pb-1 border-b-2 border-transparent">
              Support Us
            </button>

            {supportUsDropdown && (
            <div className="absolute top-16 left-0 w-60 bg-white rounded shadow-lg py-2 z-50 animate-fade-in border-t-2 border-[#FDD835]">
              <Link to="/Support Us" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                Support Us Now
              </Link>
              <Link to="/Support Us-a-meal" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                Support Us A Meal
              </Link>
              <Link to="/Support Us-an-elder" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                Support Us An Elder
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
                <Link to="/social-media-testimonials" className="block px-4 py-2.5 text-[14px] font-bold text-[#0a231a] hover:bg-gray-50 hover:text-[#FDD835]">
                  Social Media & Testimonials
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Contact Us Button & Mobile menu button */}
        <div className="flex-1 flex items-center justify-end space-x-3 sm:space-x-4">
          
          {/* Custom Language Toggle */}
          <button
            onClick={() => {
              const select = document.querySelector('.goog-te-combo');
              if (select) {
                // Determine current language (default to English if empty)
                const currentLang = select.value || 'en';
                const newLang = currentLang === 'en' ? 'hi' : 'en';
                select.value = newLang;
                select.dispatchEvent(new Event('change'));
              } else {
                alert("Translation is still loading, please wait a second...");
              }
            }}
            className="flex items-center justify-center p-2 text-gray-700 bg-white border-2 border-transparent hover:border-[#FDD835] hover:text-[#0a231a] hover:bg-gray-50 transition-all duration-300 rounded-full shadow-sm"
            title="Translate to Hindi / English"
          >
            <MdLanguage className="text-2xl" />
          </button>

          <Link
            to="/donate"
            className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-[14px] font-bold tracking-wide text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-sm shadow-sm"
          >
            Donate Now
          </Link>
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

      {/* Mobile Menu */ }
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
          <Link to="/about-founder" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">About Aanandam</Link>
          <Link to="/about-niraj-gera" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">About Niraj Gera</Link>
          <Link to="/life-at-aanandam" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Life At Aanandam</Link>
          <Link to="/meet-our-elders" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Meet Our Elders</Link>
          <Link to="/resident-stories" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Story of Residents</Link>
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
          <Link to="/celebrate-special-days" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Celebrate Special Days</Link>
          <Link to="/csr-partnerships" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">CSR Partnerships</Link>
        </div>
      </div>

      {/* Support Us Accordion */}
      <div className="border-b border-gray-100">
        <button
          onClick={() => setMobileSection(mobileSection === 'Support Us' ? null : 'Support Us')}
          className="flex justify-between items-center w-full py-3 text-[16px] font-bold text-[#0a231a] hover:text-[#FDD835]"
        >
          <span>Support Us</span>
          <svg className={`w-4 h-4 transform transition-transform ${mobileSection === 'Support Us' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>

        <div className={`space-y-1 pl-4 overflow-hidden transition-all duration-300 ${mobileSection === 'Support Us' ? 'max-h-64 pb-3' : 'max-h-0'}`}>
          <Link to="/Support Us" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Support Us Now</Link>
          <Link to="/Support Us-a-meal" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Support Us A Meal</Link>
          <Link to="/Support Us-an-elder" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Support Us An Elder</Link>
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
          <Link to="/social-media-testimonials" onClick={() => setIsOpen(false)} className="block py-2 text-[15px] font-medium text-gray-600 hover:text-[#0a231a]">Social Media & Testimonials</Link>
        </div>
      </div>

      <Link to="/donate" onClick={() => setIsOpen(false)} className="mt-6 flex items-center justify-center w-full px-6 py-4 text-[16px] font-bold rounded text-white bg-green-600 hover:bg-green-700 shadow-lg transition-colors">
        Donate Now
      </Link>
      <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 flex items-center justify-center w-full px-6 py-4 text-[16px] font-bold rounded text-[#0a231a] bg-[#FDD835] shadow-lg transition-colors">
        Contact Us
      </Link>
    </div>
  </div>
    </nav >
  );
}

export default Navbar;