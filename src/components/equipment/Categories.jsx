import React from "react";

const Categories = () => {
  return (
    <>
      {/* sets apart */}
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <h1
            style={{ fontSize: "24px" }}
            className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
          >
            Product Categories
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16 px-4">
            {[
              {
                img: "/e1.png",
                text: "Basketball Hoops & Poles ",
              },
              {
                img: "/e2.png",
                text: "Pickleball Nets & Paddles",
              },
              {
                img: "/e3.png",
                text: "Cricket Nets & Turf Rolls",
              },
              {
                img: "/e4.png",
                text: "Football Nets & Goalposts",
              },
              {
                img: "/e5.png",
                text: "Multi-Sport Court Gear ",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-[14px]"
                style={{ background: " rgba(71, 71, 71, 0.17)" }}
              >
                <div className="mb-4 h-[350px] w-full rounded-[14px] overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={`icon-${index}`}
                    className="mx-auto w-[100%] h-[100%] object-cover"
                  />
                  <button
                    className="bg-white px-10 py-1 rounded-xl absolute bottom-2 right-2 text-black"
                    style={{
                      boxShadow: "0px 4px 11px 0px rgba(0, 0, 0, 0.54)",
                      fontWeight: "600",
                    }}
                  >
                    with setup
                  </button>
                </div>
                <h2 className="text-2xl text-start md:text-3xl font-bold uppercase mb-2">
                  {item.text}
                </h2>
                <a
                  href="#"
                  className="bg-gradient-to-b from-teal-300 via-green-400 to-green-500 font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full  text-black w-full"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* orders */}
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <h1
            style={{ fontSize: "24px" }}
            className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
          >
            Available for Bulk Orders
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Team Apparel */}
            <div className="space-y-8">
              {/* Product Image Card */}
              <div className="relative bg-black rounded-2xl overflow-hidden ">
                <div className="p-8 flex items-center justify-center min-h-96">
                  {/* Training Equipment Display */}
                  <div className="relative w-full max-w-sm">
                    <img
                      src="/order1.png"
                      alt="Training equipment kit with cones, hurdles, and agility tools"
                      className="w-full h-auto object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </div>

                {/* Customizable Badge */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-lg">
                    Customizable
                  </span>
                </div>
              </div>

              {/* Left Content */}
              <div className="space-y-6">
                <p className="text-white text-lg leading-relaxed">
                  Custom team apparel & training bibs available in multiple
                  colors, sizes, and branding options.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-base">Jerseys</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-base">Bibs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-base">Tracksuits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-base">
                      Custom Printing
                    </span>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-green-500/25 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>

            {/* Right Side - Training Equipment */}
            <div className="space-y-8">
              {/* Training Equipment Content */}
              <div className="space-y-6">
                <p className="text-white text-lg leading-relaxed">
                  Essential training aids - from cones & hurdles to timers &
                  agility ladders - for any sport.
                </p>

                <div className="space-y-3 ">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-base">Cones</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-base">Hurdles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-base">Agility Kits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-base">Stopwatches</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white text-base">& more</span>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-green-500/25 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Get Quote
                </button>
              </div>

              {/* Product Image Card */}
              <div className="relative bg-black rounded-2xl overflow-hidden ">
                <div className="p-8 flex items-center justify-center min-h-96">
                  {/* Training Equipment Display */}
                  <div className="relative w-full max-w-sm">
                    <img
                      src="/order2.png"
                      alt="Training equipment kit with cones, hurdles, and agility tools"
                      className="w-full h-auto object-cover rounded-lg shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* model apart */}
      <section className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <h1
            style={{ fontSize: "24px" }}
            className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
          >
            Fulfilment model
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-16 px-4">
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
                className="flex flex-col items-start text-center p-4 rounded-[14px]"
                style={{
                  background: " rgba(71, 71, 71, 0.17)",
                  border: "1.2px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <a
                  href="#"
                  className="bg-gradient-to-b from-teal-300 via-green-400 to-green-500 rounded-[14px] p-2 text-black w-[40px] h-[40px]"
                >
                  {item.img}
                </a>
                <h2 className="text-xl text-start md:text-xl font-bold uppercase mb-2">
                  {item.head}
                </h2>
                <p className="text-base text-start  mb-2">{item.text}</p>
              </div>
            ))}
            <div className="col-span-full flex justify-center items-center w-full gap-4 mt-4">
              <img
                src="/model.png"
                alt="Pan-India"
                className="object-contain"
              />
              <h2 className="text-xl md:text-xl font-bold uppercase mb-0">
                Pan-India Setup & Delivery
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
