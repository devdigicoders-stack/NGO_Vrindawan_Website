import React from 'react';
import { Link } from 'react-router-dom';
import HeroBackground3D from './HeroBackground3D';

function PageHero({ title, description, hideBreadcrumb = false }) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80')" }} 
      >
        {/* Dark green overlay to match the design */}
        <div className="absolute inset-0 bg-[#0a231a]/80"></div>
      </div>

      {/* 3D Background Animation */}
      <HeroBackground3D />

      {/* Slight gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a231a]/90 to-transparent pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 px-4 mt-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight font-serif leading-tight">
          {title}
        </h1>
        
        {description && (
          <p className="text-white/90 text-lg md:text-xl font-medium tracking-wide mb-8 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}

        {!hideBreadcrumb && (
          <div className="text-white/90 text-sm md:text-base font-bold tracking-wider uppercase">
            <Link to="/" className="hover:text-[#FDD835] transition-colors duration-300">Home</Link>
            <span className="mx-3 text-white/50">/</span>
            <span className="text-[#FDD835]">{title}</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default PageHero;
