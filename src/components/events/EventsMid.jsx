"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaPlay,
  FaStar,
  FaUsers,
  FaCalendar,
  FaTrophy,
  FaGraduationCap,
  FaHeart,
  FaBuilding,
  FaGlobe,
  FaBullseye,
  FaBook,
  FaBolt,
  FaDownload,
} from "react-icons/fa";
import { IoIosCall, IoMdMic } from "react-icons/io";
import { RxDownload } from "react-icons/rx";
import { PiBuildingApartmentFill, PiCourtBasketballFill } from "react-icons/pi";
import { IoMdMegaphone } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { GiWhistle } from "react-icons/gi";
import { HiDocument } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";

const EventsMid = () => {
  const activities = [
    {
      id: 1,
      title: "CORPORATE WELLNESS PROGRAMS",
      description:
        "Our flagship Corporate Wellness Programs are designed to boost employee well-being and productivity through sports wellness, team building, and sports-centered experiences.",
      image: "/offer1.jpg",
      // icon: <PiBuildingApartmentFill className="text-accent text-3xl" />,
      icon: <img src="/eventsOffer/1.png" className="" />,
    },
    {
      id: 2,
      title: "SPORTS TOURNAMENTS",
      description:
        "Custom tournaments for Schools, Corporates & Associations to promote fitness, networking & team work, competitiveness, and healthy living.",
      image: "/offer2.png",
      icon: <img src="/eventsOffer/2.png" className="" />,
    },
    {
      id: 3,
      title: "CUSTOM CHALLENGES & SPORTS EVENTS",
      description:
        "Tailored skill challenges and large-scale sports fests from bring together companies, schools, clubs, and communities giving.",
      image: "/offer3.png",
      icon: <img src="/eventsOffer/3.png" className="" />,
    },
    {
      id: 4,
      title: "BRAND-LED SPORTS IPs",
      description:
        "Custom-designed intellectual properties that enhance brand engagement through innovative sports formats and marketing.",
      image: "/offer4.jpg",
      icon: <img src="/eventsOffer/4.png" className="" />,
    },
    {
      id: 5,
      title: "FAMILY DAYS PROGRAMS",
      description:
        "Sports + Culture combined to create memorable family sports events with games, activities, and entertainment for all ages.",
      image: "/offer5.jpg",
      icon: <img src="/eventsOffer/5.png" className="" />,
    },
  ];

  const testimonials = [
    {
      id: 1,
      image: "/track1.jpg",
      title: "Indian Open championship",
      description:
        "Hosted 2017 Indian Open Pickleball Championship (AIPA, Redbull, Doordarshan)",
    },
    {
      id: 2,
      image: "/track2.jpg",
      title: "Corporate activations",
      description: "Built employee sports activations across corporate Sector.",
    },
    {
      id: 3,
      image: "/track3.png",
      title: "Legacy Events",
      description:
        "Created legacy events that shaped India’s grassroots sports culture.",
    },
  ];

  const spotlights = [
    { src: "/spotlight1.jpg", alt: "Students playing sport 1" },
    { src: "/contact.png", alt: "Students playing sport 2" },
    { src: "/coaching1.png", alt: "Students playing sport 3" }, // your uploaded image
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* What We Offer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1
              style={{
                fontSize: "24px",
                background:
                  "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="inline-block text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
            >
              What we offer
            </h1>
          </div>

          {/* Activities List */}
          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`flex h-max-[100px] ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`relative rounded-lg flex flex-col w-full md:w-[70%] lg:h-[200px] ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{
                    background: "rgba(255, 255, 255, 0.09)",
                    backdropFilter: "blur(33.5px)",
                  }}
                >
                  {/* Text Section */}
                  <div className="flex flex-col p-2 md:p-4 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="icon bg-black p-2 rounded-lg">
                        {activity.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {activity.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
                      {activity.description}
                    </p>
                  </div>

                  {/* Image Section */}
                  <div
                    className={`w-full h-full md:w-[40%] overflow-hidden ${
                      index % 2 === 0 ? "md:rounded-r-lg" : "md:rounded-l-lg"
                    }`}
                  >
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 min-h-[500px]">
            {/* Left Side - Text */}
            <div className="space-y-6 flex flex-col items-start content-between h-full">
              <h1 className="text-white font-bold text-xl lg:text-4xl leading-relaxed uppercase">
                Be it
                <span
                  className=""
                  style={{
                    background:
                      "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {" "}
                  50
                </span>{" "}
                participants or
                <span
                  className=""
                  style={{
                    background:
                      "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {" "}
                  50,000
                </span>{" "}
                - we{" "}
                <span
                  className=""
                  style={{
                    background:
                      "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  customize{" "}
                </span>
                formats, infra, referees, emcees, branding, and
                experiences—end-to-end.
              </h1>
              <button
                style={{
                  background:
                    " linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                }}
                className="] text-black px-6 py-2 rounded-full font-bold mt-20 "
              >
                Plan my event
              </button>
              {/* <button className="bg-gradient-to-r from-[#26FEB2]  to-[#46FD3E] font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg">
                {primaryButtonText}
              </button> */}
            </div>

            <div className="flex flex-col">
              <h1
                style={{ fontSize: "24px" }}
                className="text-accent text-base font-bold uppercase tracking-widest mb-6  underline-offset-8 decoration-green-500"
              >
                Services Included:
              </h1>

              {/* Right Side - Image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: (
                      // <PiCourtBasketballFill className="text-accent w-14 h-14" />
                      <img src="/events/1.png" className="" />
                    ),
                    title: "Infra setup (courts, nets, lights).",
                  },
                  {
                    icon: <img src="/events/2.png" className="" />,
                    title: "Event Curation & Hosting.",
                  },
                  {
                    icon: <img src="/events/3.png" className="" />,
                    title: "Certified Referees & Coaches.",
                  },
                  {
                    icon: <img src="/events/4.png" className="" />,
                    title: "Branding, Trophies & Media.",
                  },
                  {
                    icon: <img src="/events/5.png" className="" />,
                    title: "Registration & Scoring System.",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="rounded-2xl p-6 flex flex-col items-center text-center bg-gradient-to-br from-[rgba(75,75,75,0.25)] to-[rgba(75,75,75,0.15)] shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-white font-semibold text-base md:text-lg leading-snug">
                      {service.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h1
              style={{
                fontSize: "24px",
                background:
                  "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="inline-block text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
            >
              Spotlight
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
            <div className="space-y-6">
              {/* Image Section */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/spotlight2.png"
                  alt="Spotlight"
                  className="object-fill h-20"
                />
                <h1 className="text-2xl md:text-3xl font-bold leading-tight text-white drop-shadow-lg">
                  Sports as Your{" "}
                  <span
                    className=""
                    style={{
                      background:
                        "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Next
                  </span>{" "}
                  Offsite
                </h1>
              </div>

              {/* Text Section */}
              <div className="space-y-4 text-gray-300">
                <p className="text-base">
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Courtside@Work{" "}
                  </span>
                  is our corporate sports engagement format designed to boost
                  team morale,{" "}
                  <span
                    className=""
                    style={{
                      background:
                        "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    health{" "}
                  </span>
                  , and{" "}
                  <span
                    className=""
                    style={{
                      background:
                        "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    culture
                  </span>
                  . We bring a pop-up Pickleball arena to your office or event
                  space with coaches, referees, gameplay formats, music, and
                  more.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col lg:flex-row gap-6">
                <button
                  style={{
                    background:
                      "linear-gradient(90deg, #26FEB2 3%, #46FD3E 85%)",
                  }}
                  className=" text-black font-bold py-3 px-6 rounded-full text-sm shadow-lg hover:shadow-green-500/25 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 max-w-[250px]"
                >
                  <FaDownload /> Download Program Deck
                </button>
                <button className="bg-white text-black font-bold py-3 px-6 rounded-full text-sm shadow-lg hover:shadow-green-500/25 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 max-w-[150px]">
                  <BiPhone /> Book A Call
                </button>
              </div>
            </div>

            <div className="relative w-full max-w-4xl mx-auto">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  el: ".custom-pagination",
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={20}
                slidesPerView={1}
                className="rounded-2xl shadow-2xl overflow-hidden"
              >
                {spotlights.map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom bullet bar pagination */}
              {/* Custom bullet bar pagination */}
              <div className="custom-pagination flex justify-center gap-2 mt-3"></div>

              <style jsx global>{`
                .custom-pagination .swiper-pagination-bullet {
                  width: 30px; /* shorter pill width */
                  height: 6px;
                  background: #00ff01; /* gray-300 */
                  border-radius: 9999px;
                  transition: all 0.3s ease;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                  background: #00ff01; /* green-500 */
                  width: 40px; /* slightly bigger when active */
                }
              `}</style>
            </div>
          </div>

          {/* Track Record Section */}
          <div className="text-center mb-12">
            <h1
              style={{
                fontSize: "24px",
                background:
                  "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="inline-block text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
            >
              OUR TRACK RECORD
            </h1>
          </div>

          {/* Testimonials Slider */}
          <div className="">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className="rounded-lg overflow-hidden h-80"
                    style={{
                      background: "rgba(255, 255, 255, 0.09)",
                      backdropFilter: "blur(33.5px)",
                    }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4
                        style={{
                          background:
                            "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        className="text-lg font-bold  mb-2 font-Race"
                      >
                        {testimonial.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {testimonial.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="text-center mt-8">
            <button
              style={{
                background: " linear-gradient(90deg, #26FEB2 3%, #46FD3E 85%)",
              }}
              className=" text-black px-8 py-3 rounded-full font-semibold "
            >
              See Highlights
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsMid;
