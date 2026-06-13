import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Layout components
import Navbar from "./Component/navbar";
import Footer from "./Component/Footer";
import CustomCursor from "./Component/CustomCursor";
import ScrollToTop from "./Component/ScrollToTop";
import BackToTopButton from "./Component/BackToTopButton";
import SocialSidebar from "./Component/SocialSidebar";
import PageLoader from "./Component/PageLoader";

// Page components
import Home from "./page/Home";
import About from "./page/About";
import Founder from "./page/Founder";
import AboutNirajGera from "./page/AboutNirajGera";
import WhyAanandam from "./page/WhyAanandam";
import LifeAtAanandam from "./page/LifeAtAanandam";
import Facilities from "./page/Facilities";
import DreamCampus from "./page/DreamCampus";
import Admission from "./page/Admission";
import Volunteer from "./page/Volunteer";
import CelebrateWithElders from "./page/CelebrateWithElders";
import CSRPartnerships from "./page/CSR";
import SponsorAMeal from "./page/SponsorAMeal";
import SponsorAnElder from "./page/SponsorAnElder";
import PhotoGallery from "./page/PhotoGallery";
import VideoGallery from "./page/VideoGallery";
import NewsAndEvents from "./page/NewsAndEvents";
import Visitors from "./page/Visitors";
import Outbound from "./page/Outbound";
import Media from "./page/Media";
import Donate from "./page/Donate";
import Contact from "./page/Contact";

function App() {
  return (
    <Router>
      <PageLoader />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAFAF5]">
        <CustomCursor />
        <SocialSidebar />
        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Dynamic Page Routing Section */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-aanandam" element={<About />} />
            <Route path="/why-aanandam" element={<WhyAanandam />} />
            <Route path="/about-founder" element={<Founder />} />
            <Route path="/about-niraj-gera" element={<AboutNirajGera />} />
            <Route path="/life-at-aanandam" element={<LifeAtAanandam />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/dream-campus" element={<DreamCampus />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/celebrate-with-elders" element={<CelebrateWithElders />} />
            <Route path="/csr-partnerships" element={<CSRPartnerships />} />
            <Route path="/sponsor-a-meal" element={<SponsorAMeal />} />
            <Route path="/sponsor-an-elder" element={<SponsorAnElder />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/video-gallery" element={<VideoGallery />} />
            <Route path="/news-and-events" element={<NewsAndEvents />} />
            <Route path="/distinguished-visitors-associations" element={<Visitors />} />
            <Route path="/outbound-activities-elder-outings" element={<Outbound />} />
            <Route path="/news-media-coverage" element={<Media />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
        
        {/* Floating Back to Top Button */}
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
