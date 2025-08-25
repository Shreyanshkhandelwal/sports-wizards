import ReuseHero from "../components/utils/ReuseHero";
import LogoRibbon from "../components/LogoRibbon";
import Story from "../components/about/Story";
import Footer from "../components/utils/Footer";
import CTAReuse from "../components/utils/CTAReuse";
import NeonCursor from "../components/utils/NeonCursor";
import { useEffect, useState } from "react";

const About = () => {
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
        <ReuseHero
          heading="More than a brand. A movement in the making"
          accentWord="movement"
          paragraph="We’re creating structured, inclusive and accessible sports experiences—through coaching, infrastructure, events, and innovation."
          primaryButtonText="Scroll to Discover"
          backgroundImage="/about-bg.jpg"
        />
        <div className="relative z-50 mt-4">
          <LogoRibbon />
        </div>
        <Story />
        <CTAReuse
          heading="Bring Your Play Vision to Life"
          accentWord="Vision"
          paragraph="Curious how we can transform play for your school, turf, or workplace?"
          primaryButtonText="Contact Our Team"
        />
        <Footer />
      </main>
    </>
  );
};

export default About;
