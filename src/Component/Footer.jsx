import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="bg-[#0a231a] text-white/80 pt-20 pb-8 relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18l-10-5v2.5l10 5zm10-5V13l-10 5v2.5l10-5zM0 20.5V18l10-5v2.5l-10 5zM20 40.5V38l-10-5v2.5l10 5zm10-5V33l-10 5v2.5l10-5zM0 40.5V38l10-5v2.5l-10 5z' fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Logo & About */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-[#FDD835] rounded-full flex items-center justify-center text-[#0a231a]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="font-serif font-black text-2xl text-white tracking-wide">
                Aanandam.
              </h3>
            </div>
            <p className="text-[15px] leading-relaxed text-white/70">
              Delhi's most compassionate 100% free old age home. Providing dignity, joy, and a warm family for every abandoned grandparent.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-[15px] flex flex-col items-center md:items-start">
              <li><Link to="/" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> Home</Link></li>
              <li><Link to="/about-aanandam" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> About Aanandam</Link></li>
              <li><Link to="/about-founder" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> About Founder</Link></li>
              <li><Link to="/life-at-aanandam" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> Life At Aanandam</Link></li>
              <li><Link to="/facilities" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> Facilities</Link></li>
              <li><Link to="/dream-campus" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> Dream Campus</Link></li>
              <li><Link to="/contact" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Get Involved & Media */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-white text-lg mb-6">Get Involved & Media</h4>
            <ul className="space-y-3 text-[15px] flex flex-col items-center md:items-start">
              <li><Link to="/admission" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> Admission Rules</Link></li>
              <li><Link to="/volunteer" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> Volunteer With Us</Link></li>
              <li><Link to="/celebrate-with-elders" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> Celebrate With Elders</Link></li>
              <li><Link to="/Support Us" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> Support Us Now</Link></li>
              <li><Link to="/Support Us-a-meal" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> Support Us A Meal</Link></li>
              <li><Link to="/photo-gallery" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> Photo Gallery</Link></li>
              <li><Link to="/video-gallery" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full"></span> Video Gallery</Link></li>
            </ul>
          </div>

          {/* Column 4: Location & Socials */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Our Location</h4>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <svg className="w-5 h-5 text-[#FDD835] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Aanandam+Vridhashram+Karala+Village+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] leading-relaxed hover:text-[#FDD835] transition-colors"
                >
                  Pole No-25, 513/11, near Karala Stadium,<br />
                  opposite ISO Solid Gym, Karala Village,<br />
                  Delhi - 110081
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white text-lg mb-4">Follow Us On Socials:</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FDD835] hover:text-[#0a231a] transition-colors">
                  {/* Pinterest Icon Placeholder */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345l-.288 1.178c-.043.178-.141.22-.328.133-1.223-.569-1.988-2.355-1.988-3.79 0-3.084 2.241-5.91 6.452-5.91 3.397 0 6.037 2.422 6.037 5.656 0 3.376-2.128 6.091-5.086 6.091-1.127 0-2.188-.585-2.551-1.279l-.693 2.637c-.25 .962-.924 2.165-1.378 2.899 1.05.32 2.162.492 3.303.492 6.627 0 11.985-5.365 11.985-11.987C24.004 5.367 18.644 0 12.017 0z" /></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FDD835] hover:text-[#0a231a] transition-colors">
                  {/* X (Twitter) Icon */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FDD835] hover:text-[#0a231a] transition-colors">
                  {/* Facebook Icon */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
                <a href="https://www.instagram.com/aanandamoldagehome" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FDD835] hover:text-[#0a231a] transition-colors">
                  {/* Instagram Icon */}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Newsletter & Contact */}
        <div className="py-10 border-t border-b border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10 mb-8">

          {/* YouTube Subscribe Box */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <a 
              href="https://www.youtube.com/@NirajGera?sub_confirmation=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full max-w-md bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition-all duration-300 group shadow-lg"
            >
              <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,0,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-[15px] group-hover:text-[#FF0000] transition-colors">Subscribe on YouTube</h4>
                <p className="text-white/60 text-[13px]">Watch our latest activities & stories</p>
              </div>
              <div className="bg-[#FF0000] text-white font-bold px-5 py-2 rounded-lg text-[13px] group-hover:bg-white group-hover:text-[#FF0000] transition-colors">
                Subscribe
              </div>
            </a>
          </div>

          {/* Contact Info blocks */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-10">
            {/* Email Block */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
              <div className="w-12 h-12 bg-[#FDD835] rounded-full flex items-center justify-center text-[#0a231a] flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-[15px]">Email Address</p>
                <p className="text-white/70 text-[15px]">nirajgera@gmail.com</p>
              </div>
            </div>

            {/* Phone Block */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
              <div className="w-12 h-12 bg-[#FDD835] rounded-full flex items-center justify-center text-[#0a231a] flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white text-[15px]">Phone Number</p>
                <p className="text-white/70 text-[15px]">+91-9310105630</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-white/50 text-[14px]">
          Copyright © {new Date().getFullYear()} Aanandam Vridhashram. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
