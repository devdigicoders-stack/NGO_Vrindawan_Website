import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Component/PageHero';
import { Quote } from 'lucide-react';

function ResidentStories() {
  const stories = [
    {
      id: 1,
      name: "Ramlal Ji, 78",
      image: "/fwd47photos/9.jpg",
      story: "Ramlal Ji was a hardworking farmer his entire life. After his wife passed away, his sons took over the property and slowly started ignoring his basic needs. Eventually, he was asked to leave his own house and was found sleeping at a bus stand for weeks.",
      experience: "At Aanandam, Ramlal Ji found a new family. He is now the head gardener of our ashram. The joy of growing vegetables and sharing meals with his new friends has brought back the smile he thought he had lost forever."
    },
    {
      id: 2,
      name: "Savitri Devi, 82",
      image: "/fwd47photos/10.jpg",
      story: "Savitri Devi suffered a stroke that left her partially paralyzed. Her family, unable to bear the medical expenses and time required for her care, abandoned her outside a government hospital. She had lost the will to live.",
      experience: "With regular physiotherapy, proper medication, and endless love from the volunteers at Aanandam, Savitri Devi can now walk with a walker. She leads our evening bhajans and says she feels like a queen in her new home."
    },
    {
      id: 3,
      name: "Om Prakash & Kamla, 75 & 71",
      image: "/fwd47photos/11.jpg",
      story: "This beautiful couple was thrown out by their daughter-in-law while their son remained a silent spectator. They spent all their savings on their son's education, leaving them penniless and wandering the streets of Delhi in the harsh winter.",
      experience: "Aanandam gave them a private room where they can live with dignity. They are the most romantic couple in the ashram. Om Prakash Ji reads the newspaper to Kamla Ji every morning, and they celebrate every festival with youthful enthusiasm."
    },
    {
      id: 4,
      name: "Kailash Nath, 85",
      image: "/fwd47photos/12.jpg",
      story: "A retired school teacher, Kailash Nath was deeply respected in his village. But after retirement, his children moved abroad and stopped calling. The loneliness and isolation drove him into deep depression.",
      experience: "Today, 'Masterji' teaches basic reading and writing to the illiterate staff and volunteers at Aanandam. The respect and purpose he regained here have completely cured his depression. He says, 'I am reborn here.'"
    }
  ];

  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="Story of Old Age Residents"
        description="Every wrinkle tells a story of survival. Read the heartbreaking yet inspiring journeys of the elders living at Aanandam."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Intro Text */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] leading-tight">
            From Abandonment to Aanandam
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            They built homes, raised children, and sacrificed everything for their families—only to be left alone when they needed love the most. Here are the true stories of resilience and how our elders found a second family with us.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="space-y-16">
          {stories.map((item, index) => (
            <motion.div
              key={item.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-stretch bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow duration-500`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Image Section */}
              <div className="w-full lg:w-2/5 relative overflow-hidden min-h-[300px] lg:min-h-full">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <h3 className="font-serif font-black text-3xl text-[#0a231a] border-b-2 border-[#FDD835] pb-4 inline-block self-start">
                  {item.name}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[#D32F2F] font-bold text-lg mb-2 uppercase tracking-wide text-sm">The Story (Before Aanandam)</h4>
                    <p className="text-gray-700 leading-relaxed font-medium text-[16px]">
                      {item.story}
                    </p>
                  </div>

                  <div className="bg-[#FAFAF5] p-6 rounded-xl border border-gray-100 relative mt-6">
                    <Quote className="absolute top-4 right-4 text-[#FDD835] opacity-30" size={40} />
                    <h4 className="text-[#2E7D32] font-bold text-lg mb-2 uppercase tracking-wide text-sm">The Experience (At Aanandam)</h4>
                    <p className="text-gray-800 leading-relaxed italic text-[16px]">
                      "{item.experience}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
}

export default ResidentStories;
