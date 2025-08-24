import ReuseHero from "../components/utils/ReuseHero";
import LogoRibbon from "../components/LogoRibbon";

import Footer from "../components/utils/Footer";
import CTAReuse from "../components/utils/CTAReuse";
import NeonCursor from "../components/utils/NeonCursor";
import WhatWeBuild from "../components/infra/WhatWeBuild";
import MadeAMark from "../components/infra/MadeAMark";
import Finance from "../components/infra/Finance";
import InfraBottom from "../components/infra/InfraBottom";
import InfraCrousle from "../components/infra/InfraCrousle";
import { useEffect, useState } from "react";

const Infracture = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMediaQueryChange = (e) => {
      setIsLargeScreen(e.matches);
    };

    setIsLargeScreen(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <>
      {isLargeScreen && <NeonCursor />}
      <main className="w-full overflow-x-hidden">
        <ReuseHero
          heading="Surfaces That Inspire Play. Infra That Endures."
          accentWord="Inspire"
          paragraph="We execute all types of sports events for corporates, schools, associations, clubs & communities."
          primaryButtonText="Build My Court Now"
          backgroundImage="/infra.jpg"
        />
        <div className="relative z-50 mt-4">
          <LogoRibbon />
        </div>
        <InfraCrousle />
        <Finance />
        <MadeAMark />
        <InfraBottom />
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

export default Infracture;
