import Header from "./utils/Header";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className=" relative w-full min-h-[650px] md:min-h-[700px] lg:h-screen lg:max-h-[900px] mx-auto overflow-hidden">
      <Header />

      <img
        src="/bg-1.jpeg"
        alt="Background 1"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-1" />
      <img
        src="/bg-2.jpg"
        alt="gradient 1"
        className="absolute inset-0 w-full h-full object-cover z-1 opacity-40"
      />
      <img
        src="/bg-3.jpg"
        alt="gradient 1"
        className="absolute inset-0 w-full h-full object-cover z-1 opacity-50"
      />

      <div className="relative z-10 flex flex-col lg:hidden pt-25 w-full h-full">
        <div className="px-4  z-50">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wide">
            <span
              className=""
              style={{
                fontSize: "25px",
                background:
                  "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Powering
            </span>{" "}
            <span style={{ fontSize: "25px" }}> India&apos;s</span>
            <br />
            <h1 style={{ fontSize: "28px" }}>Playgrounds</h1>
          </h1>
          <div className="flex flex-row items-center justify-center gap-3 md:gap-4 mt-8">
            <button
              style={{
                background:
                  "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
              }}
              className=" font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full transition-transform hover:scale-105 text-black"
            >
              Explore What We Do
            </button>
            <button className="bg-white text-black font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full transition-transform hover:scale-105">
              Enquire Now
            </button>
          </div>
        </div>

        <div className="relative w-full h-96 mt-4">
          <img
            // src="/p1.png"
            src="https://res.cloudinary.com/dnivrv6ar/image/upload/f_auto,q_auto/v1756561431/p1_l0wsdf.png"
            alt="player 1"
            className="absolute bottom-0 left-[20%] sm:left-[35%] -translate-x-1/2 w-[65%] max-w-[240px] h-auto z-10 transform -scale-x-100"
          />
          <img
            // src="/p2.png"
            src="https://res.cloudinary.com/dnivrv6ar/image/upload/f_auto,q_auto/v1756561459/p2_d5ywdv.png"
            alt="player 2"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] max-w-[320px] h-auto z-20"
          />
          <img
            // src="/p3.png"
            src="https://res.cloudinary.com/dnivrv6ar/image/upload/f_auto,q_auto/v1756561447/p3_l69o4n.png"
            alt="player 3"
            className="absolute bottom-0 left-[80%] sm:left-[65%] -translate-x-1/2 w-[65%] max-w-[260px] h-auto z-10"
          />
        </div>

        <div className="mt-[-4rem] flex justify-center">
          <div className="w-full max-w-[280px] sm:max-w-sm z-50">
            <HeroCarousel />
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative w-full h-full z-10">
        <div className="absolute top-60 -left-5 w-1/2 flex flex-col justify-center text-left px-6 xl:px-24 z-40">
          <h1 className="text-6xl font-black text-white uppercase tracking-wide">
            <span
              className=""
              style={{
                fontSize: "38px",
                background:
                  "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Powering
            </span>{" "}
            <span style={{ fontSize: "38px" }}> India&apos;s</span>
            <br />
            <span style={{ fontSize: "58px" }}>Playgrounds</span>
          </h1>
          <div className="flex flex-row items-center justify-start gap-10 mt-36">
            <button
              style={{
                background:
                  "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
              }}
              className="font-bold text-base py-3 px-6 rounded-full transition-transform hover:scale-105 z-[999] text-black"
            >
              Explore What We Do
            </button>
            <button className="bg-white text-black font-bold text-base py-3 px-6 rounded-full transition-transform hover:scale-105 z-[999]">
              Enquire Now
            </button>
          </div>
        </div>

        <div className="absolute  top-[25%] right-0 z-40 flex items-center justify-center w-1/2 ">
          <div className="w-full max-w-[350px] xl:max-w-[280px] ">
            <HeroCarousel />
          </div>
        </div>

        <div className="absolute inset-0 z-30">
          <div className="relative w-full h-full max-w-5xl mx-auto">
            <img
              src="/p1.png"
              alt="player 1"
              className="absolute -bottom-9 left-[25%] -translate-x-1/2 w-[60%] h-[100%] max-w-none z-10 transform -scale-x-100"
            />
            <img
              src="/p2.png"
              alt="player 2"
              className="absolute -bottom-8 left-[46%] -translate-x-1/2 w-[50%] h-[100%] max-w-none z-20"
            />
            <img
              src="/p3.png"
              alt="player 3"
              className="absolute -bottom-7 left-[68%] -translate-x-1/2 w-[60%] h-[105%] max-w-none z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
