import React from "react";
import ReuseHero from "../components/utils/ReuseHero";
import LogoRibbon from "../components/LogoRibbon";
import Footer from "../components/utils/Footer";
import TestimonialsSection from "../components/utils/TestimonialsSection";
import CTAReuse from "../components/utils/CTAReuse";
import CoachingMid from "../components/coaching/CoachingMid";
import NeonCursor from "../components/utils/NeonCursor";

const Coaching = () => {
  return (
    <>
      <NeonCursor />
      <main className="w-full overflow-x-hidden">
        <ReuseHero
          heading="Playground to Podium: Coaching That Builds Character"
          accentWord="Coaching"
          paragraph="Certified coaches, holistic curriculum, and NEP-aligned coaching across schools, societies, clubs, and associations."
          primaryButtonText="Partner with Us"
          backgroundImage="/coaching.jpg"
        />
        <div className="relative z-50 mt-4">
          <LogoRibbon />
        </div>
        <CoachingMid />
        <TestimonialsSection />
        <CTAReuse
          heading="Sport isn’t extra. It’s essential"
          accentWord="essential"
          paragraph="“Partner with Sports Wizards to build a culture of play on campus.”"
          primaryButtonText="Talk To A Program Advisor"
          secondaryButtonText="Schedule Campus Walkthrough"
        />
        <Footer />
      </main>
    </>
  );
};

export default Coaching;
