import React from "react";

const CTAReuse = ({
  heading = "Powering India's Playgrounds",
  accentWord = "Powering",
  paragraph = "",
  primaryButtonText = "Explore What We Do",
  secondaryButtonText = "", // 👈 new prop
}) => {
  const processedHeading = heading.replace(accentWord, `|||${accentWord}|||`);
  const headingParts = processedHeading.split("|||");

  const hasTwoButtons = Boolean(secondaryButtonText);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 rounded-3xl border border-accent/30 bg-accent/5 shadow-lg 
            ${
              hasTwoButtons
                ? "flex flex-col items-center gap-4"
                : "flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center lg:justify-between"
            }`}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">
              {headingParts.map((part, i) =>
                part === accentWord ? (
                  <span key={i} className="text-accent">
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </h2>
            {paragraph && (
              <p
                className={`mt-4 text-bg-foreground-secondary ${
                  hasTwoButtons ? "flex flex-col items-center " : ""
                }`}
              >
                {paragraph}
              </p>
            )}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex gap-3 ${hasTwoButtons ? "mt-4" : "mt-0 lg:mt-0"}`}
          >
            <a
              href="#"
              className="bg-gradient-to-r from-teal-300 via-green-400 to-green-500 font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full transition-transform hover:scale-105 text-black w-fit"
            >
              {primaryButtonText}
            </a>

            {hasTwoButtons && (
              <a
                href="#"
                className="bg-white font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full transition-transform hover:scale-105 text-black w-fit shadow"
              >
                {secondaryButtonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAReuse;
