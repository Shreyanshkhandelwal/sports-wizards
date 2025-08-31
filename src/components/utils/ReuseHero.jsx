import React from "react";
import Header from "./Header";

const ReuseHero = ({
  heading = "Powering India's Playgrounds",
  accentWord = "Powering",
  paragraph = "",
  primaryButtonText = "Explore What We Do",
  backgroundImage = "",
}) => {
  // Split the heading to apply special styling to accent word
  const processedHeading = heading.replace(accentWord, `|||${accentWord}|||`);
  const headingParts = processedHeading.split("|||");

  return (
    <section className="relative w-full min-h-[650px] md:min-h-[700px] lg:h-screen lg:max-h-[900px] mx-auto overflow-hidden flex items-center justify-center">
      <Header />

      {/* Backgrounds */}
      <img
        src={backgroundImage || "/bg-1.jpeg"}
        alt="Background 1"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-1" />

      {/* Common Content (Centered for all screen sizes) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 lg:px-0 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wide">
          {headingParts.map((part, i) =>
            part === accentWord ? (
              <span
                key={i}
                style={{
                  background:
                    " linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {part}
              </span>
            ) : (
              part
            )
          )}
        </h1>

        {paragraph && (
          <p className="text-white mt-4 md:mt-6 text-base md:text-2xl">
            {paragraph}
          </p>
        )}

        <div className="mt-8">
          {primaryButtonText && (
            <button
              style={{
                background:
                  "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
              }}
              className=" font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg"
            >
              {primaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReuseHero;
