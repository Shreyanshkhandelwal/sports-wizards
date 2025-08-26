import CTA from "../components/CTA";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/utils/Footer";
// import Hero from "../components/Hero";
import ImpactSection from "../components/ImpactSection";
import LogoRibbon from "../components/LogoRibbon";
import TestimonialsSection from "../components/utils/TestimonialsSection";
import WhoAreWe from "../components/WhoAreWe";
import HeroCarousel from "../components/HeroCarousel";
import CursorTrail from "../components/utils/CursorTrail";
import RibbonTrail from "../components/utils/NeonCursor";
import NeonCursor from "../components/utils/NeonCursor";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";

const Home = () => {
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
      {/* {isLargeScreen && <NeonCursor />} */}
      <main className="w-full overflow-x-hidden">
        <Hero />
        <div className="relative z-50 -mt-5 sm:mt-2">
          <LogoRibbon />
        </div>
        <WhoAreWe />
        <ImpactSection />
        <FeaturedProjects />
        <TestimonialsSection />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Home;
