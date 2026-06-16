import React from 'react';
import PageHero from '../Component/PageHero';
import BeforeAndAfterStories from '../Component/BeforeAndAfterStories';
import EldersGallery from '../Component/EldersGallery';
import InTheirOwnWords from '../Component/InTheirOwnWords';
import SponsorBanner from '../Component/SponsorBanner';
import StorySeoHindi from '../Component/StorySeoHindi';

function MeetOurElders() {
  return (
    <div className="bg-[#FAFAF5] min-h-screen pb-20">
      <PageHero
        title="Meet Our Elders"
        description="Discover the beautiful stories, wisdom, and joy our elders bring to Aanandam."
        hideBreadcrumb={true}
      />

      {/* Before and After Stories */}
      <BeforeAndAfterStories />

      {/* Elders Gallery */}
      <EldersGallery />

      {/* In Their Own Words Testimonial Section */}
      <InTheirOwnWords />

      {/* Support Us Banner at the very bottom */}
      <SponsorBanner />

      {/* Hindi SEO Section */}
      <StorySeoHindi />
    </div>
  );
}

export default MeetOurElders;
