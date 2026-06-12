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

      {/* Impact Numbers */}
      <ImpactNumbers />

      {/* Elder Blessings Wall */}
      <ElderBlessings />

      {/* Ways To Help */}
      <WaysToHelp />

      {/* Final CTA */}
      <FinalCTA />

      {/* 4. Founder Spotlight */}

    </div>
  );
}

export default Home;
