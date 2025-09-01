import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Categories = () => {
  const products = [
    { img: "/e1.jpeg", text: "Basketball Hoops & Poles " },
    { img: "/e2.jpeg", text: "Pickleball Nets & Paddles" },
    { img: "/e3.png", text: "Cricket Nets & Turf Rolls" },
    { img: "/e4.png", text: "Football Nets & Goalposts" },
    { img: "/e5.png", text: "Multi-Sport Court Gear " },
  ];
  return (
    <>
      {/* sets apart */}
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h5
              style={{
                background:
                  "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="inline-block text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
            >
              Product Categories
            </h5>
          </div>

          {/* 🚀 Mobile Swiper */}
          <div className="block sm:hidden mt-10">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1} // exactly 1 slide per view
              centeredSlides={true}
              pagination={{ clickable: true }}
              className="w-full max-w-[300px]" // keeps slides constrained
            >
              {products.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div
                    className="flex flex-col items-center text-center p-4 rounded-[14px] w-full"
                    style={{ background: "rgba(71, 71, 71, 0.17)" }}
                  >
                    <div className="mb-4 h-[280px] w-full rounded-[14px] overflow-hidden relative">
                      <img
                        src={item.img}
                        alt={`icon-${index}`}
                        className="mx-auto w-full h-full object-cover"
                      />
                      <button
                        className="bg-white px-4 py-1 rounded-xl absolute bottom-2 right-2 text-black"
                        style={{
                          boxShadow: "0px 4px 11px 0px rgba(0, 0, 0, 0.54)",
                          fontWeight: "600",
                        }}
                      >
                        with setup
                      </button>
                    </div>
                    <span className="text-lg md:text-2xl font-bold uppercase mb-2 text-start font-Race">
                      {item.text}
                    </span>
                    <a
                      href="#"
                      style={{
                        background:
                          "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                      }}
                      className="font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-[10px] text-black w-full"
                    >
                      Get Quote
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 🖥️ Desktop Grid */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-16">
            {products.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-[14px]"
                style={{ background: "rgba(71, 71, 71, 0.17)" }}
              >
                <div className="mb-4 h-[280px] w-full rounded-[14px] overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={`icon-${index}`}
                    className="mx-auto w-[100%] h-[100%] object-cover"
                  />
                  <button
                    className="bg-white px-4 py-1 rounded-xl absolute bottom-2 right-2 text-black"
                    style={{
                      boxShadow: "0px 4px 11px 0px rgba(0, 0, 0, 0.54)",
                      fontWeight: "600",
                    }}
                  >
                    with setup
                  </button>
                </div>
                <span
                  className="text-xl text-start md:text-2xl font-bold uppercase mb-2 font-Race"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {item.text}
                </span>
                <a
                  href="#"
                  style={{
                    background:
                      " linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
                  }}
                  className=" font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full  text-black w-full"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .swiper-pagination {
            bottom: -4px !important; /* move dots lower */
          }
          .swiper-pagination-bullet {
            background: #303030;
 /* Tailwind gray-400 */
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background-color: #00ff01;
            ); 
          }
        `}</style>
      </section>

      {/* orders */}
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h5
              style={{
                background:
                  "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="inline-block text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
            >
              Available for Bulk Orders
            </h5>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-white space-y-20">
          {/* Row 1 - Image left, Text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative bg-black rounded-2xl overflow-hidden">
              <div className="p-8 flex items-center justify-center min-h-96">
                <div className="relative w-full max-w-sm">
                  <img
                    src="/order1.png"
                    alt="Custom team jerseys and bibs"
                    className="w-full h-auto object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-lg">
                  Customizable
                </span>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-6">
              <h5 className="text-xl font-bold uppercase">
                Team Jerseys & Bibs
              </h5>
              <span
                className="text-white text-lg leading-relaxed block"
                style={{
                  fontSize: "15px",
                }}
              >
                Custom team apparel & training bibs available in multiple
                colors, sizes, and branding options.
              </span>

              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Available Options:
              </span>
              <br />
              <ul className="space-y-3">
                {["Jerseys", "Bibs", "Tracksuits", "Custom Printing"].map(
                  (item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white text-base">{item}</span>
                    </li>
                  )
                )}
              </ul>
              <button
                style={{
                  background: "linear-gradient(90deg, #26FEB2 3%, #46FD3E 85%)",
                  border: "0.56px solid rgba(255, 255, 255, 0.52)",
                  fontSize: "14px",
                }}
                className=" text-black font-bold py-3 px-12 rounded-[14px] text-lg shadow-lg hover:shadow-green-500/25 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Row 2 - Text left, Image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right Image — move this up on mobile with order-1 */}
            <div className="relative bg-black rounded-2xl overflow-hidden order-1 lg:order-2">
              <div className="p-8 flex items-center justify-center min-h-96">
                <div className="relative w-full max-w-sm">
                  <img
                    src="/order2.png"
                    alt="Training equipment kit with cones, hurdles, and agility tools"
                    className="w-full h-auto object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Left Text — move this below on mobile with order-2 */}
            <div className="space-y-6 order-2 lg:order-1">
              <h5 className="text-xl font-bold uppercase">
                Recreational Equipment
              </h5>
              <span
                className="text-white text-lg leading-relaxed block"
                style={{
                  fontSize: "15px",
                }}
              >
                Essential training aids — from cones & hurdles to timers &
                agility ladders — for any sport.
              </span>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Available Options:
              </span>
              <br />
              <ul className="space-y-3">
                {[
                  "Cones",
                  "Hurdles",
                  "Agility Kits",
                  "Stopwatches",
                  "& more",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                style={{
                  background: "linear-gradient(90deg, #26FEB2 3%, #46FD3E 85%)",
                  border: "0.56px solid rgba(255, 255, 255, 0.52)",
                  fontSize: "14px",
                }}
                className=" text-black font-bold py-3 px-12 rounded-[14px] text-lg shadow-lg hover:shadow-green-500/25 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* model apart */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg text-bg-foreground">
        <div className="max-w-7xl mx-auto">
          {/* FULFILMENT MODEL HEADING */}
          <div className="text-center mb-16">
            <h5
              style={{
                background:
                  "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="inline-block text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
            >
              Fulfilment Model
            </h5>

            {/* DESKTOP VIEW */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-12">
              {[
                {
                  img: "1",
                  head: "Contact-led",
                  text: "Share your requirements with our team for personalized assistance.",
                },
                {
                  img: "2",
                  head: "Quote",
                  text: "Get a tailored quotation based on your needs and specifications.",
                },
                {
                  img: "3",
                  head: "Dispatch",
                  text: "We deliver and set up your order across India, hassle-free.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start text-left p-6 rounded-2xl"
                  style={{
                    background: "rgba(71, 71, 71, 0.17)",
                    border: "1.2px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <h5 className="text-xl font-bold uppercase mb-2 ">
                    {item.head}
                  </h5>
                  <p className="text-base text-bg-foreground-secondary">
                    {item.text}
                  </p>
                </div>
              ))}
              {/* Additional Info */}
            </div>

            {/* MOBILE VIEW - HORIZONTAL SCROLL */}
            <div className="flex gap-6 mt-12 lg:hidden overflow-x-auto no-scrollbar px-1">
              <div className="flex gap-6 w-max pr-4">
                {[
                  {
                    img: "1",
                    head: "Contact-led",
                    text: "Share your requirements with our team for personalized assistance.",
                  },
                  {
                    img: "2",
                    head: "Quote",
                    text: "Get a tailored quotation based on your needs and specifications.",
                  },
                  {
                    img: "3",
                    head: "Dispatch",
                    text: "We deliver and set up your order across India, hassle-free.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 min-w-[250px] flex flex-col items-start text-left p-4 rounded-2xl max-w-[270px]"
                    style={{
                      background: "rgba(71, 71, 71, 0.17)",
                      border: "1.2px solid rgba(255, 255, 255, 0.12)",
                    }}
                  >
                    <h5 className="text-xl font-bold uppercase mb-2 ">
                      {item.head}
                    </h5>
                    <p className="text-base text-bg-foreground-secondary">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Additional Info (Last Card) */}
            <div className="w-full flex items-center justify-center mt-16 text-center gap-4">
              <img
                src="/model.png"
                alt="Pan-India"
                className="object-contain w-8 h-8"
              />
              <h5 className="text-xl font-bold uppercase mb-0">
                Pan-India Setup & Delivery
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
