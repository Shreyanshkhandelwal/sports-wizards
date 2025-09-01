import React from "react";
import { useLocation } from "react-router-dom";

const CTAReuse = ({
  heading = "Powering India's Playgrounds",
  accentWord = "Powering",
  paragraph = "",
  primaryButtonText = "Explore What We Do",
  secondaryButtonText = "",
  primaryBtnClick = "/",
  secondaryBtnClick = "/",
}) => {
  const processedHeading = heading.replace(accentWord, `|||${accentWord}|||`);
  const headingParts = processedHeading.split("|||");

  const hasTwoButtons = Boolean(secondaryButtonText);

  const location = useLocation();
  const isEventsPage = location.pathname === "/events";

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-4 rounded-3xl border border-accent/30 bg-accent/5 shadow-lg 
    flex flex-col gap-4
    ${
      hasTwoButtons
        ? "items-center text-center lg:items-center lg:text-left"
        : "lg:flex-row lg:items-center lg:justify-between"
    }`}
        >
          <div>
            <span className="md:text-[35px] font-bold uppercase max-[800px]:text-[16px] font-Race">
              {headingParts.map((part, i) =>
                part === accentWord ? (
                  <span
                    className="inline text-[35px] max-[800px]:text-[16px]"
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
            </span>
            <br />
            {paragraph && (
              <span
                style={{ fontSize: "14px", color: "rgba(211, 211, 211, 1)" }}
                className={`mt-4 text-bg-foreground-secondary ${
                  hasTwoButtons ? "flex flex-col items-center " : ""
                }`}
              >
                {paragraph}
              </span>
            )}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex gap-3 ${
              hasTwoButtons
                ? isEventsPage
                  ? "flex-row "
                  : "flex-col sm:flex-row items-center"
                : "flex-col"
            } ${hasTwoButtons ? "mt-4" : "mt-0 lg:mt-0"}`}
          >
            <button
              onClick={primaryBtnClick}
              className=" font-bold lg:min-w-[220px] text-[12px] md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full transition-transform hover:scale-105 text-black w-fit"
              style={{
                background:
                  "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
              }}
            >
              {primaryButtonText}
            </button>

            {hasTwoButtons && (
              <button
                onClick={secondaryBtnClick}
                className="bg-white font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full transition-transform hover:scale-105 text-black w-fit shadow"
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAReuse;
