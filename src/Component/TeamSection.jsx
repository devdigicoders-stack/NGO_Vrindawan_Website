import React from 'react';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Cameron Williamson",
      role: "Program Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#"
      }
    },
    {
      id: 2,
      name: "Dianne Russell",
      role: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#"
      }
    },
    {
      id: 3,
      name: "Wade Warren",
      role: "Impact & Monitoring Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#"
      }
    }
  ];

  return (
    <section className="py-24 bg-white px-4 sm:px-6 lg:px-2">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FDD835]"></span>
            <span className="text-sm font-bold text-[#0a231a]">Our Expert Team</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-sans font-black text-[#0a231a] mb-6 tracking-tight">
            People Behind our Mission
          </h2>

          <p className="text-gray-600 text-base md:text-[17px] leading-relaxed">
            Our team brings together passionate professionals, volunteers, and leaders who work tirelessly
            to drive positive social change & create lasting impact in communities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="relative group rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Background Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a231a] via-[#0a231a]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 ease-in-out group-hover:-translate-y-12">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FDD835]"></span>
                  <span className="text-white/90 text-[13px] font-semibold tracking-wide uppercase">{member.role}</span>
                </div>
                <h3 className="text-white text-[22px] font-bold tracking-wide">{member.name}</h3>
              </div>

              {/* Social Icons (Hidden by default, slide up on hover) */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex gap-4">
                <a href={member.socials.facebook} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#FDD835] hover:text-[#0a231a] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
                <a href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#FDD835] hover:text-[#0a231a] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
                <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#FDD835] hover:text-[#0a231a] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
