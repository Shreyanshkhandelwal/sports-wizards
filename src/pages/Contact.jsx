import React from "react";
import ReuseHero from "../components/utils/ReuseHero";
import Footer from "../components/utils/Footer";
import CTAReuse from "../components/utils/CTAReuse";
import ContactForm from "../components/contact/ContactForm";
import NeonCursor from "../components/utils/NeonCursor";
import Header from "../components/utils/Header";

const Contact = () => {
  return (
    <>
      <NeonCursor />
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
        <ContactForm />
        <CTAReuse
          heading="Get Your Free Guide Instantly"
          accentWord="Guide"
          paragraph="Unlock exclusive insights in our downloadable guide. Just fill in your details and start reading in seconds."
          primaryButtonText="Get My Free Guide"
        />
        <Footer />
      </main>
    </>
  );
};

export default Contact;
