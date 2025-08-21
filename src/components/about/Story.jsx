import React from "react";

const Story = () => {
  return (
    <>
      {/* story */}
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <h1
            style={{ fontSize: "24px" }}
            className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
          >
            Our Story
          </h1>

          <div className="flex flex-col items-center justify-center gap-8 lg:gap-12 text-center">
            <p
              className="w-full text-bg-foreground-secondary text-base md:text-lg leading-relaxed text-center order-1 lg:order-2 mb-8 lg:mb-0 lg:mt-6"
              style={{ fontSize: "22px" }}
            >
              Founded by professionals with{" "}
              <span className="text-accent"> 25+ years </span> in sports, Sports
              Wizards began with a vision to make India a sport-playing nation.
              From early fitness programs at JVPG Club and Jai Hind College to
              large-scale Pickleball tournaments, our journey has spanned
              grassroots and game changers alike.
            </p>
            <p
              className="w-full text-bg-foreground-secondary text-base md:text-lg leading-relaxed text-center order-1 lg:order-2 mb-8 lg:mb-0 lg:mt-6"
              style={{ fontSize: "22px", fontWeight: 400 }}
            >
              Our breakthrough came in 2017 when we conceptualized and executed
              the{" "}
              <span className="text-accent">
                {" "}
                Indian Open Pickleball Championship{" "}
              </span>{" "}
              in partnership with the All India Pickleball Association — one of
              the earliest, large-scale activations of the sport in India.With
              150+ international and national players, Inox Cinemas as Cinema
              partner, Red Bull as a Energy Drink partner, and Doordarshan
              live-streaming the finals — the event laid the foundation for our
              belief that India is ready for a play-first revolution.
            </p>
          </div>
        </div>
      </section>

      {/* vision */}
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <h1
            style={{ fontSize: "24px" }}
            className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
          >
            What Sets Us Apart
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-10 text-center mt-16">
            <div
              className="mission w-2/5 rounded-[14px] p-6  "
              style={{ background: " rgba(71, 71, 71, 0.17)" }}
            >
              <h2
                className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-2xl font-bold mb-3 "
                style={{ fontSize: "24px" }}
              >
                MISSION:
              </h2>
              <p style={{ fontSize: "22px" }}>
                Integrate structured play into everyday life through scalable
                and sustainable models.
              </p>
            </div>
            <div
              className="vision w-2/5 rounded-[14px] p-6 "
              style={{ background: " rgba(71, 71, 71, 0.17)" }}
            >
              <h2
                className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-2xl font-bold mb-3"
                style={{ fontSize: "24px" }}
              >
                VISION:
              </h2>
              <p style={{ fontSize: "22px" }}>
                Make India a sport-playing nation across all age groups.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* sets apart */}
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <h1
            style={{ fontSize: "24px" }}
            className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
          >
            Our Vision & Mission
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16 px-4">
            {[
              {
                img: "/ab-1.png",
                text: "Full-Stack Sports Enablement: Coaching | Infra | Events | Gear",
              },
              {
                img: "/ab-2.png",
                text: "Embedded Finance Option for Infra Projects from ₹50L to ₹5Cr",
              },
              {
                img: "/ab-3.png",
                text: "Get Personalised Attention with Ops-Active Founders",
              },
              {
                img: "/ab-4.png",
                text: "Pan-India Execution with Speed & Expertise",
              },
              {
                img: "/ab-5.png",
                text: "Aligned with NEP & National Sports Policy",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center  p-6 rounded-[14px] h-full"
                style={{ background: " rgba(71, 71, 71, 0.17)" }}
              >
                <div className="mb-4">
                  <img
                    src={item.img}
                    alt={`icon-${index}`}
                    className="mx-auto w-18 h-18 object-contain"
                  />
                </div>
                <p className="text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* leadership snippet*/}
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl w-full">
          <h1
            style={{ fontSize: "24px" }}
            className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
          >
            Leadership Snippet
          </h1>

          <div className="w-full  px-4 sm:px-6 lg:px-8">
            <div
              className="flex flex-col items-start text-center  p-6 rounded-[14px] h-full w-full gap-5"
              style={{ background: " rgba(71, 71, 71, 0.17)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
                style={{ marginBottom: "30px" }}
              >
                <path
                  d="M29.334 24H18.1949C17.1066 20.4082 16.5625 16.6857 16.5625 12.8327C16.5625 8.91428 17.5547 5.81224 19.5393 3.52653C21.5878 1.17551 24.5967 0 28.5658 0V5.48571C25.3649 5.48571 23.7644 7.47755 23.7644 11.4612V13.3224H29.334V24ZM13.1055 24H1.96643C0.878134 20.4082 0.333984 16.6857 0.333984 12.8327C0.333984 8.91428 1.32626 5.81224 3.31081 3.52653C5.35937 1.17551 8.3682 0 12.3373 0V5.48571C9.13641 5.48571 7.53597 7.47755 7.53597 11.4612V13.3224H13.1055V24Z"
                  fill="white"
                />
              </svg>
              <p className="text-base" style={{ fontSize: "24px" }}>
                "We’re not in the business of sports. We’re in the business of
                building people—through play."
              </p>
              <p style={{ fontSize: "18px" }}>
                <span className="text-accent">— Abhijeet Malve,</span>
                Co-Founder, Sports Wizards
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
