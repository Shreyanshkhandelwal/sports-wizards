import React, { useEffect, useState } from "react";
import ReuseHero from "../components/utils/ReuseHero";
import Footer from "../components/utils/Footer";
import CTAReuse from "../components/utils/CTAReuse";
import ContactForm from "../components/contact/ContactForm";
import NeonCursor from "../components/utils/NeonCursor";
import Header from "../components/utils/Header";
import { CiCircleCheck } from "react-icons/ci";
import DownloadForm from "../components/contact/DownloadForm";

const Contact = () => {
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
      {isLargeScreen && <NeonCursor />}
      <main className="w-full overflow-x-hidden">
        <section className="relative w-full min-h-[200px] md:min-h-[300px] lg:max-h-[500px] mx-auto overflow-hidden flex items-center justify-center">
          <Header />

          {/* Backgrounds */}
          <img
            src="/contact.png"
            alt="Background 1"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-1" />

          {/* Common Content (Centered for all screen sizes) */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 lg:px-0 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide">
              Contact Us
            </h1>
          </div>
        </section>
        <ContactForm
          onSuccess={() => {
            setShowSuccess(true);
          }}
        />
        <CTAReuse
          heading="Get Your Free Guide Instantly"
          accentWord="Guide"
          paragraph="Unlock exclusive insights in our downloadable guide. Just fill in your details and start reading in seconds."
          primaryButtonText="Get My Free Guide"
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

export default Contact;
