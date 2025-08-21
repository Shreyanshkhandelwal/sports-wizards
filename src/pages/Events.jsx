import React from "react";

import ReuseHero from "../components/utils/ReuseHero";
import LogoRibbon from "../components/LogoRibbon";
import Footer from "../components/utils/Footer";
import CTAReuse from "../components/utils/CTAReuse";
import CursorTrail from "../components/utils/CursorTrail";

const Events = () => {
  return (
    <>
      <CursorTrail />
      <main className="w-full overflow-x-hidden">
        <ReuseHero
          heading="From Sports Days to Stadium Shows—we bring the game."
          accentWord="Stadium"
          paragraph="We execute all types of sports events for corporates, schools, associations, clubs & communities."
          primaryButtonText="Plan my event"
          backgroundImage="/infra.jpg"
        />
        <div className="relative z-50 mt-4">
          <LogoRibbon />
        </div>

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

export default Events;
