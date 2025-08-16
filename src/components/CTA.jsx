import React from "react";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center lg:justify-between p-8 rounded-3xl border border-accent/30 bg-accent/5 shadow-lg">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">
              Let's <span className="text-accent">BUILD</span> India's Next
              Playground.
            </h2>
            <p className="mt-4 text-bg-foreground-secondary">
              Serving schools, brands, societies, gymkhanas & clubs across
              India.
            </p>
          </div>

          <a
            href="#"
            className="bg-gradient-to-r from-teal-300 via-green-400 to-green-500 font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full transition-transform hover:scale-105 text-black w-fit"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
