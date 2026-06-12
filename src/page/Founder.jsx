import React from "react";
import PageHero from "../Component/PageHero";

function Founder() {
  return (
    <div className="bg-[#FAFAF5] min-h-screen">
      <PageHero
        title="About the Founder"
        description="Meet the visionary behind Aanandam Vridhashram."
        hideBreadcrumb={true}
      />

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-2">



        {/* Founder Content */}
        <div className="space-y-8 mb-16">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] text-center">
            He Didn't Choose Social Work. Social Work Chose Him.
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-start mt-8">
            <div className="w-full md:w-1/3 flex-shrink-0 relative group rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer">
              {/* Subtle dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
                alt="Niraj Gera"
                className="w-full h-auto object-cover aspect-[4/5] transform transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            <div className="w-full md:w-2/3 space-y-6 text-gray-700 text-[15px] sm:text-[16px] leading-relaxed font-medium">
              <p>
                There are people who do good. And then there are people who <em>are</em> good — so completely and so consistently that their very existence changes the lives of everyone around them. Niraj Gera is the second kind.
              </p>
              <p>
                For over <strong className="text-[#0a231a]">18 years</strong>, Niraj Gera has walked where few would dare — into slums, schools, rural villages, old age homes, and the hearts of society's most forgotten people — carrying nothing but intention, a camera, and a boundless capacity for love.
              </p>
              <p>
                He is the Founder & Chairman of <strong className="text-[#0a231a]">Humanify Foundation</strong>, the creator of <strong className="text-[#0a231a]">Aanandam Vridhashram</strong>, a <strong className="text-[#0a231a]">TEDx speaker</strong>, an internationally recognised <strong className="text-[#0a231a]">documentary photographer</strong>, a <strong className="text-[#0a231a]">certified life coach</strong>, a motivational educator, a poet — and at his core, a human being who refuses to look away from pain.
              </p>
              <p className="pt-2 text-gray-700">
                His journey wasn't born out of a desire for recognition, but from a profound inability to ignore the suffering around him. Whether it was organizing over 400 health and hygiene sessions for women across rural India or standing by the side of acid attack survivors to help them reclaim their dignity, Niraj's actions have always been guided by a deep spiritual conviction. He believes that true worship is service, and true service is rendered without conditions.
              </p>
              <p className="text-gray-700">
                Aanandam Vridhashram stands as the ultimate reflection of this philosophy. It is not an institution; it is a home built entirely on public participation and boundless compassion. Through his unwavering dedication, he continues to inspire thousands of young volunteers to recognize that empathy is the most powerful tool we possess to heal the world.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Block */}
        <div className="bg-[#FFFDE7]/60 border-l-4 border-[#FDD835] rounded-r-xl p-8 sm:p-12 mb-20 shadow-sm">
          <blockquote className="pl-4">
            <p className="font-serif italic text-[20px] sm:text-[24px] text-[#2E7D32] leading-relaxed mb-6 font-medium">
              "I am not trying to change the world. I am trying to change what the world does to its most vulnerable people — its women, its elders, its children. And I will not stop until it changes."
            </p>
            <footer className="text-gray-500 font-semibold text-[14px] sm:text-[15px]">
              — Niraj Gera
            </footer>
          </blockquote>
        </div>

        {/* Many Gifts Section */}
        <div className="mb-20">
          <h2 className="font-serif font-black text-3xl sm:text-4xl text-[#0a231a] mb-12">
            A Man of Many Gifts, One Purpose
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-[15px] text-gray-700 leading-relaxed">
            <div className="space-y-3">
              <p>
                <strong className="text-[#0a231a] text-[16px]">As a Social Activist</strong> — Niraj has championed causes that others ignored: menstrual hygiene awareness, acid attack survivor rehabilitation, elderly dignity, rural education, and mental health. His campaigns have reached thousands across Delhi, Uttar Pradesh, Uttarakhand and Haryana.
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <strong className="text-[#0a231a] text-[16px]">As a Life & Executive Coach</strong> — Niraj brings the same depth of human understanding into corporate boardrooms and personal coaching sessions. His coaching philosophy draws from yoga, mindfulness, ikigai, and lived experience with India's most resilient communities.
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <strong className="text-[#0a231a] text-[16px]">As a Photographer</strong> — His internationally acclaimed photo documentary series — <em>Sacred Transformations</em> (acid attack survivors), <em>Sacred Stains</em> (menstruation), <em>Sacred Love</em> (a blind couple's story), <em>Immortal Love</em> (elderly couples), and <em>Abandoned Souls</em> (old age homes) — have moved audiences across the world and sparked important social conversations.
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <strong className="text-[#0a231a] text-[16px]">As a Poet & Writer</strong> — Niraj's writing captures what his camera and words cannot — the unspoken grief of an abandoned elder, the quiet dignity of a woman who refuses to be defined by her suffering, the stubborn joy of a child who has nothing but a smile.
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <strong className="text-[#0a231a] text-[16px]">As an Educator</strong> — Through his <em>Happiness Express</em> — a pan-India tour — Niraj has conducted mental and menstrual health sessions in hundreds of schools and colleges, transforming the way young India thinks about the body, the mind, and social responsibility.
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <strong className="text-[#0a231a] text-[16px]">Inspired by Sri Sri Ravi Shankar Ji</strong> — Niraj's worldview is deeply shaped by his Guru's vision of a stress-free, violence-free, compassionate society. As a senior faculty member at the Art of Living Organisation, he brings this vision into every initiative he creates.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Block */}
        <div className="bg-[#2E7D32] rounded-2xl p-8 sm:p-12 mb-10 shadow-lg text-white">
          <h2 className="font-serif font-black text-2xl sm:text-3xl mb-6">
            The Vision That Drives Everything
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-relaxed font-medium opacity-90">
            Niraj Gera's life's work converges on a single, profound question: <em>What does it mean to be truly human?</em> His answer, lived daily through Aanandam, through Humanify Foundation, through every workshop and every photograph and every conversation: <strong className="text-white">To be truly human is to never abandon those who need us most.</strong>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="https://nirajgera.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold rounded-lg transition-colors duration-300 shadow-md"
          >
            Visit NirajGera.com
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
          <a
            href="https://humanifyfoundation.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2E7D32] hover:bg-[#1b5e20] text-white font-bold rounded-lg transition-colors duration-300 shadow-md"
          >
            Explore Humanify Foundation
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>

      </section>
    </div>
  );
}

export default Founder;
