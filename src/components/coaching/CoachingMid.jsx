import React from "react";
import {
  FaCheck,
  FaUsers,
  FaTrophy,
  FaBullseye,
  FaBook,
  FaBolt,
  FaDownload,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";
import { IoMdMegaphone } from "react-icons/io";

const CoachingMid = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Main Section - Not Just for Schools */}
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <h1
            style={{ fontSize: "24px" }}
            className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
          >
            Not Just for Schools
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* First Div - Image Right, Text Left */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6">
              <h1 className="text-white font-bold text-3xl leading-relaxed uppercase">
                While our flagship program—
                <span className="text-accent">SportsWizards@School</span>
                — <br />
                is tailored for educational institutions, our coaching vertical
                serves:
              </h1>
            </div>

            {/* Right Side - Image */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <CgGym className="text-accent w-10 h-10 mb-3" />,
                  title: "Clubs & Gymkhanas",
                },
                {
                  icon: <FaBuilding className="text-accent w-10 h-10 mb-3" />,
                  title: "Residential Societies",
                },
                {
                  icon: <FaGlobe className="text-accent w-10 h-10 mb-3" />,
                  title: "Sports Associations",
                },
                {
                  icon: <FaGlobe className="text-accent w-10 h-10 mb-3" />,
                  title: "Court & Turf Owners",
                },
                {
                  icon: (
                    <IoMdMegaphone className="text-accent w-10 h-10 mb-3" />
                  ),
                  title: "Brand-Led Campaigns",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className=" rounded-xl p-6 flex flex-col items-center justify-center text-center "
                  style={{ background: "rgba(75, 75, 75, 0.2)" }}
                >
                  {service.icon}
                  <h3 className="text-white font-semibold">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Second Div - Text Right, Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            {/* <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-teal-500/30"> */}
            {/* <div className=" flex items-center justify-center min-h-96"> */}
            <div className="relative w-full h-full min-h-48 ">
              <img
                src="/coach-talk.jpg"
                alt="Custom team apparel and training bibs"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              {/* </div> */}
              {/* </div> */}
            </div>

            {/* Right Side - Text */}
            <div className="h-full flex flex-col items-start content-between relative">
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you need a seasonal coaching plan, tournament-ready
                prep, or trainer{" "}
                <span className="text-accent">certification programs</span>—we
                bring structure, accountability, and expert coaching. Aligned
                with <span className="text-accent">NEP 2020</span> and{" "}
                <span className="text-accent">NSP 2025</span>, our coaching
                philosophy promotes structured physical literacy, talent
                identification, and holistic student well-being. From daily
                sessions to parent engagement camps—our approach is
                academic-friendly and outcome-driven.
              </p>

              <button className=" absolute bottom-8 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-green-500/25 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Partner with Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Program Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 "
        style={{ background: "rgba(255, 255, 255, 0.09)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h1
              style={{ fontSize: "24px" }}
              className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
            >
              Flagship Program
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-4xl font-semibold">
                  SportsWizards@School
                </h3>
                <h1 className=" text-3xl font-bold leading-tight">
                  One Program. Five Sports.{" "}
                  <span className="text-green-400">Unlimited </span>
                  Possibilities.
                </h1>
              </div>

              <div className="space-y-4 text-gray-300">
                <p className="text-base">
                  Our full-service model enables schools to offer 5 daily sports
                  -{" "}
                  <span className="text-green-400">
                    Football, Basketball, Cricket, Volleyball/Badminton, and
                    Martial Arts/skating
                  </span>{" "}
                  - daily. Students can opt for any or all, and schedules are
                  optimized to ensure fair playtime.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      icon: FaUsers,
                      text: "5 sports coached by certified professionals",
                    },
                    {
                      icon: FaBullseye,
                      text: "Equipment + Curriculum + On-site team",
                    },
                    {
                      icon: FaTrophy,
                      text: "A revenue earning stream for the School",
                    },
                    {
                      icon: FaBook,
                      text: "Monthly engagement session with parents (tournaments or camps)",
                    },
                    {
                      icon: FaBolt,
                      text: "No overheads for school management",
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
              </div>

              <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold py-3 px-6 rounded-full text-sm shadow-lg hover:shadow-green-500/25 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center content-center gap-2">
                <FaDownload /> Download Program Deck
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/coaching3.png"
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
    </div>
  );
};

export default CoachingMid;
