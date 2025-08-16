import CTA from "../components/CTA";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ImpactSection from "../components/ImpactSection";
import LogoRibbon from "../components/LogoRibbon";
import TestimonialsSection from "../components/TestimonialsSection";
import WhoAreWe from "../components/WhoAreWe";

const Home = () => {
  return (
    <>
      <main className="w-full overflow-x-hidden">
        <Hero />
        <div className="relative z-50 mt-4">
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
