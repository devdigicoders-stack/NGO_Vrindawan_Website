import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function OtherServiceProjects() {
  const projects = [
    {
      id: 1,
      name: "Daily Nutritious Meals",
      image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80",
      description: "Providing balanced, healthy, and timely meals tailored to the dietary needs of the elderly to ensure their physical well-being.",
      link: "https://humanifyfoundation.org/"
    },
    {
      id: 2,
      name: "Medical Checkups & Care",
      image: "https://images.unsplash.com/photo-1576091160550-2173ff9e9e9c?auto=format&fit=crop&w=600&q=80",
      description: "Regular doctor visits, free medicines, and emergency medical support to keep our residents healthy and safe.",
      link: "https://humanifyfoundation.org/"
    },
    {
      id: 3,
      name: "Yoga & Spiritual Sessions",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=600&q=80",
      description: "Daily morning yoga, meditation, and bhajan sessions to keep the mind peaceful and the spirit uplifted.",
      link: "https://humanifyfoundation.org/"
    },
    {
      id: 4,
      name: "Birthday & Festival Celebrations",
      image: "https://images.unsplash.com/photo-1530103862676-de88927951ea?auto=format&fit=crop&w=600&q=80",
      description: "Making every resident feel special by celebrating their birthdays and all major Indian festivals with joy and togetherness.",
      link: "https://humanifyfoundation.org/"
    },
    {
      id: 5,
      name: "Clean & Safe Accommodation",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
      description: "Providing a hygienic, comfortable, and safe living environment that feels just like their own home.",
      link: "https://humanifyfoundation.org/"
    },
    {
      id: 6,
      name: "Outbound Spiritual Trips",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
      description: "Organizing outbound trips to holy places like Vrindavan and local temples to fulfill their spiritual desires.",
      link: "https://humanifyfoundation.org/"
    },
    {
      id: 7,
      name: "Mental Health & Counseling",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
      description: "Offering counseling and emotional support to help residents overcome trauma, loneliness, and depression.",
      link: "https://humanifyfoundation.org/"
    },
    {
      id: 8,
      name: "Youth & Volunteer Interactions",
      image: "https://images.unsplash.com/photo-1593113589914-009ce0b5368a?auto=format&fit=crop&w=600&q=80",
      description: "Bridging the generational gap by bringing young students and volunteers to spend quality time with the elders.",
      link: "https://humanifyfoundation.org/"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[2px] bg-[#FDD835] w-12"></div>
            <h3 className="text-[#FDD835] font-bold text-sm tracking-[0.2em] uppercase">BEYOND AANANDAM</h3>
            <div className="h-[2px] bg-[#FDD835] w-12"></div>
          </div>
          <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#0a231a] leading-tight">
            Our Core Services
          </h2>
          <p className="text-gray-600 text-[16px] font-medium pt-2">
            Providing comprehensive care, dignity, and a loving home to our elderly residents through these essential services.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#FAFAF5] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0a231a] mb-3 line-clamp-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-[14px] leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                {/* Button */}
                <div className="mt-auto">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#2E7D32] font-bold hover:text-[#0a231a] transition-colors duration-300 group/btn"
                  >
                    Read More 
                    <ArrowRight size={18} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA for Humanify */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://humanifyfoundation.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#0a231a] hover:bg-[#2E7D32] transition-colors duration-300 rounded shadow-md"
          >
            Explore All Projects at Humanify Foundation
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default OtherServiceProjects;
