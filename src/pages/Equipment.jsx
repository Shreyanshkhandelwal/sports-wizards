import React from "react";
import ReuseHero from "../components/utils/ReuseHero";
import LogoRibbon from "../components/LogoRibbon";
import Footer from "../components/utils/Footer";
import Categories from "../components/equipment/Categories";
import CursorTrail from "../components/utils/CursorTrail";

const Equipment = () => {
  return (
    <>
    <CursorTrail />
      <main className="w-full overflow-x-hidden">
        <ReuseHero
          heading="Play Starts with The Right Gear"
          accentWord="Starts"
          paragraph="From premium pickleball paddles to full-scale basketball hoops — we provide B2B sports gear for infra clients, schools, and sports communitieswith end-to-end fulfilment."
          primaryButtonText="Share Requirement"
          backgroundImage="/equipment.jpg"
        />
        <div className="relative z-50 mt-4">
          <LogoRibbon />
        </div>
        <Categories />
        <Footer />
      </main>
    </>
  );
};

export default Equipment;
