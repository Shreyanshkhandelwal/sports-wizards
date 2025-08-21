import React from "react";
import ReuseHero from "../components/utils/ReuseHero";
import Footer from "../components/utils/Footer";
import CTAReuse from "../components/utils/CTAReuse";
import ContactForm from "../components/contact/ContactForm";
import CursorTrail from "../components/utils/CursorTrail";

const Contact = () => {
  return (
    <>
      <CursorTrail />
      <main className="w-full overflow-x-hidden">
        <ReuseHero
          heading="Contact Us"
          accentWord="movement"
          paragraph=""
          primaryButtonText=""
          backgroundImage="/contact.png"
        />
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
