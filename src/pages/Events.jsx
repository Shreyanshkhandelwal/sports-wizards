import React, { useEffect, useState } from "react";

import ReuseHero from "../components/utils/ReuseHero";
import LogoRibbon from "../components/LogoRibbon";
import Footer from "../components/utils/Footer";
import CTAReuse from "../components/utils/CTAReuse";
import NeonCursor from "../components/utils/NeonCursor";
import EventsMid from "../components/events/EventsMid";
import DownloadForm from "../components/contact/DownloadForm";
import EventsCta from "../components/events/EventsCta";
import { CiCircleCheck } from "react-icons/ci";

const Events = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDownloadForm, setShowDownloadForm] = useState(false);

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
          heading="From Sports Days to Stadium Shows—we bring the game."
          accentWord="Stadium"
          paragraph="We execute all types of sports events for corporates, schools, associations, clubs & communities."
          primaryButtonText="Plan my event"
          backgroundImage="/infra.jpg"
          primaryBtnClick="/events#events-head"
        />
        <div className="relative z-50 mt-4">
          <LogoRibbon />
        </div>
        <EventsMid onDownloadClick={() => setShowDownloadForm(true)} />

        <CTAReuse
          heading="Make Your Next Event A Winning One"
          accentWord="Event "
          paragraph="“Don’t just gather your team. Game with them.”"
          primaryButtonText="Get A Custom Quote"
          secondaryButtonText="Talk to Our Events Team"
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

      {showDownloadForm && (
        <EventsCta
          onClose={() => setShowDownloadForm(false)}
          onSuccess={() => {
            setShowDownloadForm(false);
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

export default Events;
