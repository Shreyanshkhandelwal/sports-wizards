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

const Home = () => {
  return (
    <>
      <CursorTrail />
      <main className="w-full overflow-x-hidden">
        <HeroCarousel />
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
