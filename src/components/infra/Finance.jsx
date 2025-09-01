import React from "react";
import { FaBolt, FaBook, FaBullseye, FaTrophy, FaUsers } from "react-icons/fa";

const Finance = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 "
      style={{ background: "rgba(255, 255, 255, 0.09)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h5
            style={{
              background:
                "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="inline-block text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
          >
            Embedded Finance
          </h5>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h5 className=" text-3xl font-bold leading-tight">
                Now Build with Confidence –{" "}
                <span
                  className=""
                  style={{
                    background:
                      "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Financing Available{" "}
                </span>
              </h5>
            </div>

            <div className="space-y-4 text-gray-300">
              <p className="text-base">
                Building quality sports infrastructure can be{" "}
                <span
                  className=""
                  style={{
                    background:
                      "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  capital-intensive
                </span>{" "}
                —but we’ve got you covered. Sports Wizards now partners with
                leading
                <span
                  className=""
                  style={{
                    background:
                      "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  finance
                </span>{" "}
                providers to help institutions, clubs, and individuals access
                easy, scalable financing.
              </p>

              <div className="space-y-3">
                {[
                  {
                    icon: FaUsers,
                    text: "Unsecured loans up to ₹50 Lakhs.",
                  },
                  {
                    icon: FaBullseye,
                    text: "Secured loans from ₹50 Lakhs to ₹5 Crores.",
                  },
                  {
                    icon: FaTrophy,
                    text: "Flexible tenure and repayment.",
                  },
                  {
                    icon: FaBook,
                    text: "Quick approval with project-based assessment.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center content-center space-x-3"
                  >
                    {/* <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" /> */}
                    <img src="/bullet.png" className="w-3 h-3" />
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-base">
                Whether you’re a school, builder, or a private investor, our
                embedded financing ensures that your dream project doesn’t stall
                for cash flow.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/infra-f.jpg"
                alt="Students playing various sports"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            {/* <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-green-500 rounded-full opacity-20 blur-xl"></div> */}
            {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-20 blur-xl"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finance;
