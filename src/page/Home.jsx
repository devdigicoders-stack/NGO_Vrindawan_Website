import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../Component/HeroSlider";
import Ticker from "../Component/Ticker";
import AboutSection from "../Component/AboutSection";
import ServicesSection from "../Component/ServicesSection";
import WhyChooseUs from "../Component/WhyChooseUs";
import FeaturesGrid from "../Component/FeaturesGrid";
import ImpactNumbers from "../Component/ImpactNumbers";
import ElderBlessings from "../Component/ElderBlessings";
import WaysToHelp from "../Component/WaysToHelp";
import FinalCTA from "../Component/FinalCTA";
import SeoHindiSection from "../Component/SeoHindiSection";
import CelebrateHomeSection from "../Component/CelebrateHomeSection";
import CelebrationGallery from "../Component/CelebrationGallery";
import ChooseHowToHelp from "../Component/ChooseHowToHelp";

function Home() {


  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSlider />

      {/* Infinite Scrolling Ticker */}
      <Ticker />

      {/* Modern About Section */}
      <AboutSection />



      {/* 3. Core Services / Actions */}
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Elder Blessings Wall */}
      <ElderBlessings />

      {/* Ways To Help */}
      <WaysToHelp />

      {/* Choose How to Help (New Section) */}
      <ChooseHowToHelp />

      {/* Celebrate Special Days Section */}
      <CelebrateHomeSection />

      {/* Image Gallery */}
      <CelebrationGallery limit={6} />

      {/* SEO Hindi Content */}
      <SeoHindiSection />

      {/* 4. Founder Spotlight */}

      {/* Impact Numbers */}
      <ImpactNumbers />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}

export default Home;
