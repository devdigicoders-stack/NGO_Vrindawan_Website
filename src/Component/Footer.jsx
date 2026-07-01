import React from "react";
import { Link } from "react-router-dom";

const footerLink = ({ to, label, orange = false }) => (
  <li>
    <Link
      to={to} 
      className={`transition-colors flex items-center gap-2 ${
        orange
          ? "text-orange-400 hover:text-orange-300"
          : "hover:text-[#FDD835]"
      }`}
    >
      <span  
        className={`w-1 h-1 rounded-full flex-shrink-0 ${
          orange ? "bg-orange-400" : "bg-[#FDD835]"
        }`}
      ></span>
      {label}
    </Link>
  </li>
);

export default function Footer() {
  return (
    <footer
      className="bg-[#0a231a] text-white/80 pt-20 pb-8 relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18l-10-5v2.5l10 5zm10-5V13l-10 5v2.5l10-5zM0 20.5V18l10-5v2.5l-10 5zM20 40.5V38l-10-5v2.5l10 5zm10-5V33l-10 5v2.5l10-5zM0 40.5V38l10-5v2.5l-10 5z' fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">

        {/* ── TOP GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* ── Col 1: Logo & About ── */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 bg-[#FDD835] rounded-full flex items-center justify-center text-[#0a231a] flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="font-serif font-black text-2xl text-white tracking-wide">
                Aanandam.
              </h3>
            </div>
            <p className="text-[14px] leading-relaxed text-white/70">
              Delhi's most compassionate 100% free old age home. Providing dignity, joy, and a warm family for every abandoned grandparent.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-3 pt-1">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FDD835] hover:text-[#0a231a] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a href="https://www.instagram.com/aanandamoldagehome" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FDD835] hover:text-[#0a231a] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://www.youtube.com/@NirajGera" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FDD835] hover:text-[#0a231a] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s-.002 3.254-.42 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.812.419-7.812.419s-6.252 0-7.812-.419a2.505 2.505 0 01-1.768-1.768C2 15.254 2 12 2 12s.002-3.254.42-4.814A2.505 2.505 0 014.188 5.418C5.748 5 12 5 12 5s6.252 0 7.812.418zM9.546 15.569l6.59-3.569-6.59-3.569v7.138z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://wa.me/919310105630" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FDD835] hover:text-[#0a231a] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.031 21.054c-1.545 0-3.056-.416-4.382-1.205l-4.887 1.28 1.304-4.757A9.972 9.972 0 013.012 12c0-5.514 4.486-10 10-10 5.515 0 10 4.486 10 10 0 5.514-4.485 10-9.981 10zM12.031 4.027A7.973 7.973 0 004.058 12c0 1.58.423 3.125 1.227 4.486l-.92 3.356 3.435-.901a7.957 7.957 0 004.231 1.201h.001A7.973 7.973 0 0020.003 12c0-4.398-3.578-7.973-7.972-7.973zm4.27 10.66c-.234-.117-1.385-.683-1.601-.762-.215-.078-.372-.117-.528.117-.156.235-.604.762-.741.918-.137.156-.273.176-.508.058-1.144-.576-2.036-1.042-2.825-2.222-.202-.303.203-.279.658-.936.078-.117.039-.219-.001-.336-.039-.117-.528-1.272-.723-1.741-.19-.46-.383-.398-.528-.405-.137-.007-.294-.007-.45-.007-.156 0-.411.059-.626.293-.215.234-.821.802-.821 1.954s.841 2.268.958 2.424c.117.156 1.652 2.525 4.004 3.486.56.228 1.053.385 1.481.492.562.14 1.074.12 1.478.073.454-.053 1.385-.566 1.581-1.114.195-.548.195-1.017.137-1.114-.058-.098-.214-.156-.449-.274z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          {/* ── Col 2: About Us ── */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white text-base mb-5 pb-2 border-b border-white/10">About Us</h4>
            <ul className="space-y-2.5 text-[14px] flex flex-col items-center sm:items-start">
              <li><Link to="/" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Home</Link></li>
              <li><Link to="/about-aanandam" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>About Aanandam</Link></li>
              <li><Link to="/why-aanandam" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Why Aanandam</Link></li>
              <li><Link to="/about-founder" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Founder of Aanandam</Link></li>
              <li><Link to="/about-niraj-gera" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>About Niraj Gera</Link></li>
              <li><Link to="/life-at-aanandam" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Life At Aanandam</Link></li>
              <li><Link to="/meet-our-elders" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Meet Our Elders</Link></li>
              <li><Link to="/resident-stories" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Resident Stories</Link></li>
              <li><Link to="/facilities" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Facilities</Link></li>
              <li><Link to="/dream-campus" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Dream Campus</Link></li>
              <li><Link to="/hindi" className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-orange-400 rounded-full flex-shrink-0"></span>हिंदी पेज</Link></li>
            </ul>
          </div>

          {/* ── Col 3: Get Involved ── */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white text-base mb-5 pb-2 border-b border-white/10">Get Involved</h4>
            <ul className="space-y-2.5 text-[14px] flex flex-col items-center sm:items-start">
              <li><Link to="/ways-to-get-involved" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Ways to Get Involved</Link></li>
              <li><Link to="/admission" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Admission Rules</Link></li>
              <li><Link to="/volunteer" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Volunteer With Us</Link></li>
              <li><Link to="/celebrate-with-elders" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Celebrate With Elders</Link></li>
              <li><Link to="/celebrate-special-days" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Celebrate Special Days</Link></li>
            </ul>

            <h4 className="font-bold text-white text-base mt-8 mb-5 pb-2 border-b border-white/10">Support Us</h4>
            <ul className="space-y-2.5 text-[14px] flex flex-col items-center sm:items-start">
              <li><Link to="/support-us" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Support Us (Special Days)</Link></li>
              <li><Link to="/donate" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Support Us Now</Link></li>
              <li><Link to="/ways-to-support" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Ways to Support</Link></li>
              <li><Link to="/sponsor-a-meal" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Support Us A Meal</Link></li>
              <li><Link to="/sponsor-an-elder" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Support Us An Elder</Link></li>
              <li><Link to="/csr-partnerships" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>CSR Partnerships</Link></li>
            </ul>
          </div>

          {/* ── Col 4: Gallery ── */}
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white text-base mb-5 pb-2 border-b border-white/10">Gallery & Media</h4>
            <ul className="space-y-2.5 text-[14px] flex flex-col items-center sm:items-start">
              <li><Link to="/photo-gallery" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Photo Gallery</Link></li>
              <li><Link to="/video-gallery" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Video Gallery</Link></li>
              <li><Link to="/news-and-events" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>News & Events</Link></li>
              <li><Link to="/social-media-testimonials" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Social Media & Testimonials</Link></li>
              <li><Link to="/distinguished-visitors-associations" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Distinguished Visitors</Link></li>
              <li><Link to="/outbound-activities-elder-outings" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Outbound Activities</Link></li>
              <li><Link to="/news-media-coverage" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>News Media Coverage</Link></li>
            </ul>

            <h4 className="font-bold text-white text-base mt-8 mb-5 pb-2 border-b border-white/10">Contact</h4>
            <ul className="space-y-2.5 text-[14px] flex flex-col items-center sm:items-start">
              <li><Link to="/contact" className="hover:text-[#FDD835] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#FDD835] rounded-full flex-shrink-0"></span>Contact Us</Link></li>
            </ul>
          </div>

          {/* ── Col 5: Location & Contact Info ── */}
          <div className="text-center sm:text-left space-y-6">
            <div>
              <h4 className="font-bold text-white text-base mb-5 pb-2 border-b border-white/10">Our Location</h4>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <svg className="w-5 h-5 text-[#FDD835] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aanandam+Vridhashram+Karala+Village+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] leading-relaxed hover:text-[#FDD835] transition-colors"
                >
                  Pole No-25, 513/11, near Karala Stadium,<br />
                  opposite ISO Solid Gym, Karala Village,<br />
                  Delhi - 110081
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white text-base pb-2 border-b border-white/10">Contact Info</h4>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-9 h-9 bg-[#FDD835] rounded-full flex items-center justify-center text-[#0a231a] flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:nirajgera@gmail.com" className="text-[14px] hover:text-[#FDD835] transition-colors">nirajgera@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-9 h-9 bg-[#FDD835] rounded-full flex items-center justify-center text-[#0a231a] flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+919310105630" className="text-[14px] hover:text-[#FDD835] transition-colors">+91-9310105630</a>
              </div>
            </div>
          </div>

        </div>

        {/* ── MIDDLE: YouTube Subscribe ── */}
        <div className="py-8 border-t border-b border-white/10 flex justify-center mb-8">
          <a
            href="https://www.youtube.com/@NirajGera?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full max-w-md bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition-all duration-300 group shadow-lg"
          >
            <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,0,0,0.5)] group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,22S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
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

        {/* ── BOTTOM: Copyright ── */}
        <div className="text-center text-white/50 text-[13px]">
          Copyright © {new Date().getFullYear()} Aanandam Vridhashram. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
