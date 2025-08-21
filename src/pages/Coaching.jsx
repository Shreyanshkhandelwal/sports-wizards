import React from "react";
import ReuseHero from "../components/utils/ReuseHero";
import LogoRibbon from "../components/LogoRibbon";
import Footer from "../components/utils/Footer";
import TestimonialsSection from "../components/utils/TestimonialsSection";
import CTAReuse from "../components/utils/CTAReuse";
import CoachingMid from "../components/coaching/CoachingMid";
import CursorTrail from "../components/utils/CursorTrail";

const Coaching = () => {
  return (
    <>
      <CursorTrail />
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
          heading="Let’s build your next play zone together."
          accentWord="play zone"
          paragraph="Curious how we can transform play for your school, turf, or workplace?"
          primaryButtonText="Build my court now"
        />
        <Footer />
      </main>
    </>
  );
};

export default Coaching;
