import React from "react";

import {
  FaHeadphones,
  FaDraftingCompass,
  FaTools,
  FaCogs,
} from "react-icons/fa";

export default function InfraBottom() {
  const steps = [
    {
      title: "Consult & Assess",
      desc: "On-ground visit, space analysis",
      icon: <FaHeadphones className="text-4xl text-black" />,
    },
    {
      title: "Plan & Design",
      desc: "CAD drawings / 2D sport layouts",
      icon: <FaDraftingCompass className="text-4xl text-black" />,
    },
    {
      title: "Execute & Install",
      desc: "End-to-end construction with assured quality",
      icon: <FaTools className="text-4xl text-black" />,
    },
    {
      title: "Handover & Maintain",
      desc: "Training, care, guides",
      icon: <FaCogs className="text-4xl text-black" />,
    },
  ];
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-bg text-bg-foreground"
      // style={{ background: "rgba(255, 255, 255, 0.09)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* HOW WE WORK */}
        <div className="text-center mb-16">
          <h5
            style={{
              fontSize: "24px",
              background:
                "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="inline-block text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
          >
            How We Work
          </h5>

          {/* Desktop layout */}
          <div className="hidden lg:flex items-center justify-between mt-12">
            {steps.map((item, idx) => (
              <div key={idx} className="flex items-center">
                {/* Card */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl">
                  <div
                    style={{
                      background:
                        "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                    }}
                    className="mb-4  p-2 rounded-lg"
                  >
                    {item.icon}
                  </div>
                  <span className="text-lg font-semibold text-accent">
                    {item.title}
                  </span>
                  <p className="text-sm text-bg-foreground-secondary mt-2">
                    {item.desc}
                  </p>
                </div>

                {/* Connector (skip after last card) */}
                {idx < steps.length - 1 && (
                  <img
                    src="/work-dir.png"
                    className="object-none w-20 ml-6 mr-6"
                    alt="connector"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile layout */}
          <div className="grid grid-cols-1 gap-8 mt-12 lg:hidden">
            {steps.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Card */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl">
                  <div className="bg-gradient-to-r from-teal-300 via-green-400 to-green-500 p-2 rounded-lg mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-bg-foreground-secondary mt-2">
                    {item.desc}
                  </p>
                </div>

                {/* Vertical Connector (skip after last card) */}
                {idx < steps.length - 1 && (
                  <img
                    src="/work-dir.png"
                    className="object-none w-20 rotate-90 mt-6"
                    alt="connector"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE SPORTS WIZARDS */}
        <div className="text-center">
          <h5
            style={{
              fontSize: "24px",
              background:
                "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="inline-block text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
          >
            Why Choose Sports Wizards
          </h5>

          {/* FIRST ROW: 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {[
              "Proven experience across formats & locations.",
              "Material tie-ups with reputed brands.",
              "Fast turnaround with quality guarantees.",
            ].map((point, idx) => (
              <p
                key={idx}
                className="p-6 rounded-2xl bg-bg text-sm text-bg-foreground-secondary"
                style={{
                  boxShadow: "1px 1px 8.7px 0px rgba(70, 253, 62, 0.17)",
                }}
              >
                {point}
              </p>
            ))}
          </div>

          {/* SECOND ROW: 2 items centered */}
          <div className="flex justify-center flex-wrap gap-6">
            {[
              "Execution involvement of leadership team.",
              "Seamless branding integration (great for clubs & campuses).",
            ].map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-bg text-sm text-bg-foreground-secondary w-full sm:w-[calc(50%-12px)] lg:w-[calc(33%-16px)]"
                style={{
                  boxShadow: "1px 1px 8.7px 0px rgba(70, 253, 62, 0.17)",
                }}
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
