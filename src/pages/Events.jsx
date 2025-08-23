import React from "react";

import ReuseHero from "../components/utils/ReuseHero";
import LogoRibbon from "../components/LogoRibbon";
import Footer from "../components/utils/Footer";
import CTAReuse from "../components/utils/CTAReuse";
import NeonCursor from "../components/utils/NeonCursor";
import EventsMid from "../components/events/EventsMid";

const Events = () => {
  return (
    <>
      <NeonCursor />
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
        <EventsMid />

        <CTAReuse
          heading="Make Your Next Event A Winning One"
          accentWord="Event"
          paragraph="“Don’t just gather your team. Game with them.”"
          primaryButtonText="Get A Custom Quote"
          secondaryButtonText="Talk to Our Events Team"
        />
        <Footer />
      </main>
    </>
  );
};

export default Events;
