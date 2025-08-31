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
import { CgGym } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const CoachingMid = () => {
  const testimonials = [
    {
      id: 1,
      image: "/coaching_flagship/1.jpg",
      title: "Kickboxing Training at JVPG Club,Juhu",
      description:
        "Hosted 2017 Indian Open Pickleball Championship (AIPA, Redbull, Doordarshan)",
    },
    {
      id: 2,
      image: "/coaching_flagship/2.jpg",
      title: "Pickleball Workshop at Bombay YMCA",
      description: "Built employee sports activations across corporate Sector.",
    },
    {
      id: 3,
      image: "/coaching_flagship/6.jpg",
      title: "Pickleball Coaching at St.Anne's School",
      description:
        "Created legacy events that shaped India’s grassroots sports culture.",
    },
    {
      id: 5,
      image: "/coaching_flagship/8.jpg",
      title: "Pickleball Coaching at Edubridge International School",
      description:
        "Created legacy events that shaped India’s grassroots sports culture.",
    },
  ];
  const spotlights = [
    // { src: "/coaching_flagship/1.jpg", alt: "Students playing sport 1" },
    // { src: "/coaching_flagship/2.jpg", alt: "Students playing sport 2" },
    { src: "/coaching_flagship/3.jpg", alt: "Students playing sport 3" }, // your uploaded image
    { src: "/coaching_flagship/4.jpg", alt: "Students playing sport 3" }, // your uploaded image
    { src: "/coaching_flagship/5.jpg", alt: "Students playing sport 3" }, // your uploaded image
    // { src: "/coaching_flagship/6.jpg", alt: "Students playing sport 3" }, // your uploaded image
    // { src: "/coaching_flagship/7.jpg", alt: "Students playing sport 3" }, // your uploaded image
    // { src: "/coaching_flagship/8.jpg", alt: "Students playing sport 3" }, // your uploaded image
  ];
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Main Section - Not Just for Schools */}
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
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
              Not Just for Schools
            </h5>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* First Div - Image Right, Text Left */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6">
              <span className="text-white font-bold text-[14px] lg:text-3xl leading-relaxed uppercase">
                While our flagship program—
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SportsWizards@School
                </span>
                — <br />
                is tailored for educational institutions, our coaching vertical
                serves:
              </span>
            </div>

            {/* Right Side - Image */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  // icon: <CgGym className="text-accent w-10 h-10 mb-3" />,
                  icon: <img src="/coaching/1.png" className="mb-3" />,
                  title: "Clubs & Gymkhanas",
                },
                {
                  icon: <img src="/coaching/2.png" className="mb-3" />,
                  title: "Residential Societies",
                },
                {
                  icon: <img src="/coaching/3.png" className="mb-3" />,
                  title: "Sports Associations",
                },
                {
                  icon: <img src="/coaching/4.png" className="mb-3" />,
                  title: "Court & Turf Owners",
                },
                {
                  icon: <img src="/coaching/5.png" className="mb-3" />,
                  title: "Brand-Led Campaigns",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className=" rounded-xl p-6 flex flex-col items-center justify-center text-center "
                  style={{ background: "rgba(75, 75, 75, 0.2)" }}
                >
                  {service.icon}
                  <span className="text-white font-semibold font-Race">
                    {service.title}
                  </span>
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
            <div className="h-full flex flex-col items-start justify-between relative">
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you need a seasonal coaching plan, tournament-ready
                prep, or trainer{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  certification programs
                </span>
                —we bring structure, accountability, and expert coaching.
                Aligned with{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  NEP 2020
                </span>{" "}
                and{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  NSP 2025
                </span>
                , our coaching philosophy promotes structured physical literacy,
                talent identification, and holistic student well-being. From
                daily sessions to parent engagement camps—our approach is
                academic-friendly and outcome-driven.
              </p>

              <button
                style={{
                  background: "linear-gradient(90deg, #26FEB2 3%, #46FD3E 85%)",
                }}
                className="  text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-green-500/25 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
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
              Flagship Program
            </h5>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <img
                  src="/school.png"
                  alt="Spotlight"
                  className="object-fill h-20"
                />

                <span className=" text-3xl font-bold leading-tight">
                  One Program. Five Sports.{" "}
                  <span
                    className=""
                    style={{
                      background:
                        "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Unlimited{" "}
                  </span>
                  Possibilities.
                </span>
              </div>

              <div className="space-y-4 text-gray-300">
                <p className="text-base">
                  Our full-service model enables schools to offer 5 daily sports
                  -{" "}
                  <span
                    className=""
                    style={{
                      background:
                        "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
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

              <button
                style={{
                  background: "linear-gradient(90deg, #26FEB2 3%, #46FD3E 85%)",
                }}
                className=" text-black font-bold py-3 px-6 rounded-full text-sm shadow-lg hover:shadow-green-500/25 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center content-center gap-2"
              >
                <FaDownload /> Download Program Deck
              </button>
            </div>

            {/* Right Side - Image */}
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
        </div>
      </section>

      {/* Track Record Section */}
      <div className="text-center mb-12">
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
          OUR PROVEN RESULTS
        </h5>
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
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="text-lg font-bold  mb-2 font-Race block"
                  >
                    {testimonial.title}
                  </span>
                  {/* <span className="text-gray-300 text-sm text-center">
                              {testimonial.description}
                            </span> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>{`
                  .swiper {
        position: relative !important;
      }
                  .swiper-pagination{bottom:-40px;}`}</style>
      </div>
    </div>
  );
};

export default CoachingMid;
