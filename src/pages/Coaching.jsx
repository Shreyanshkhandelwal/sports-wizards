import React, { useEffect, useState } from "react";
import ReuseHero from "../components/utils/ReuseHero";
import LogoRibbon from "../components/LogoRibbon";
import Footer from "../components/utils/Footer";
import TestimonialsSection from "../components/utils/TestimonialsSection";
import CTAReuse from "../components/utils/CTAReuse";
import CoachingMid from "../components/coaching/CoachingMid";
import NeonCursor from "../components/utils/NeonCursor";

const Coaching = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
          heading="Playground to Podium: Coaching That Builds Character"
          accentWord="Coaching"
          paragraph="Certified coaches, holistic curriculum, and NEP-aligned coaching across schools, societies, clubs, and associations."
          primaryButtonText="Partner with Us"
          backgroundImage="/coaching.png"
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
          primaryBtnClick={() => setShowModal(true)}
        />
        <Footer />
      </main>
      {/* Modal here */}
      {showModal && (
        <DownloadForm
          onClose={() => setShowModal(false)}
          onSuccess={() => {
            setShowModal(false);
            setShowSuccess(true);
          }}
        />
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-[#161616] rounded-2xl p-8 max-w-sm w-full text-center border border-[#2C2C2C]">
            <div className="mb-6">
              <CiCircleCheck className="w-16 h-16 text-[#00FF01] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#F2F2F2] mb-2">
                Success!
              </h3>
              <p className="text-[#B0B0B0]">
                Your form has been submitted successfully. We'll get back to you
                soon!
              </p>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:opacity-90 text-[#0B0B0B] font-bold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Coaching;
