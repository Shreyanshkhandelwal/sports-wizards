import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import CarouselImg1 from "/carousel-1.png";
import CarouselImg2 from "/carousel-2.png";
import CarouselImg3 from "/carousel-3.png";

const slides = [
  { image: CarouselImg1, title: "Events" },
  { image: CarouselImg2, title: "Coaching" },
  { image: CarouselImg3, title: "Merchandise" },
];

const HeroCarousel = () => {
  const swiperRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const newSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setWindowSize(newSize);

      if (swiperRef.current && swiperRef.current.swiper) {
        setTimeout(() => {
          swiperRef.current.swiper.update();
          swiperRef.current.swiper.updateSize();
          swiperRef.current.swiper.updateSlides();
          swiperRef.current.swiper.slideToLoop(activeIndex, 0);
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [activeIndex]);

  const getSlideSize = () => {
    const screenWidth = windowSize.width;

    if (screenWidth < 320) {
      return { width: Math.min(140, screenWidth * 0.4), height: 180 };
    }
    if (screenWidth < 400) {
      return { width: Math.min(160, screenWidth * 0.45), height: 200 };
    }
    if (screenWidth < 520) {
      return { width: Math.min(180, screenWidth * 0.4), height: 225 };
    }
    if (screenWidth < 640) {
      return { width: Math.min(200, screenWidth * 0.42), height: 250 };
    }
    if (screenWidth < 768) {
      return { width: 240, height: 300 };
    }
    return { width: 280, height: 350 };
  };

  const slideSize = getSlideSize();

  const getContainerMaxWidth = () => {
    const screenWidth = windowSize.width;

    if (screenWidth < 520) {
      return Math.min(screenWidth - 30, screenWidth * 0.9);
    }
    if (screenWidth < 640) {
      return Math.min(screenWidth - 40, screenWidth * 0.92);
    }
    return "100%";
  };

  return (
    <div
      className="relative w-full p-4"
      style={{ maxWidth: getContainerMaxWidth() }}
    >
      <style jsx>{`
        .hero-carousel {
          width: 100%;
          padding: 20px 0;
          max-width: 100%;
          overflow: hidden;
        }

        .hero-carousel .swiper-slide {
          background-position: center;
          background-size: cover;
          width: ${slideSize.width}px;
          height: ${slideSize.height}px;
          max-width: ${windowSize.width < 520
            ? "calc(100vw - 60px)"
            : "calc(100vw - 80px)"}; /* Tighter control for problem area */
        }

        .hero-carousel .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: ${windowSize.width < 480 ? "12px" : "16px"};
          box-shadow: 0 ${windowSize.width < 480 ? "15px 30px" : "20px 40px"}
            rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
        }

        .hero-carousel .swiper-slide-active img {
          box-shadow: 0 ${windowSize.width < 480 ? "20px 40px" : "25px 50px"}
            rgba(0, 0, 0, 0.6);
          transform: scale(${windowSize.width < 480 ? "1.02" : "1.05"});
        }

        .slide-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: ${windowSize.width < 480
            ? "20px 10px 10px"
            : windowSize.width < 640
            ? "30px 15px 15px"
            : "40px 20px 20px"};
          border-radius: 0 0
            ${windowSize.width < 480 ? "12px 12px" : "16px 16px"};
          text-align: center;
        }

        .slide-title {
          font-size: ${windowSize.width < 480
            ? "14px"
            : windowSize.width < 640
            ? "16px"
            : "24px"};
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: ${windowSize.width < 480 ? "1px" : "2px"};
          margin: 0;
        }

        .swiper-slide {
          transition: all 0.3s ease !important;
        }

        .hero-carousel .swiper-wrapper {
          align-items: center;
        }

        .hero-carousel .swiper-container {
          overflow: visible;
        }
      `}</style>

      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        // slidesPerView={3}
        loop={false}
        watchOverflow={true}
        watchSlidesProgress={true}
        watchSlidesVisibility={true}
        resizeObserver={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        coverflowEffect={{
          rotate: 0,
          stretch:
            windowSize.width < 400
              ? 10
              : windowSize.width < 520
              ? 15
              : windowSize.width < 640
              ? 25
              : 50,
          depth:
            windowSize.width < 400
              ? 80
              : windowSize.width < 520
              ? 100
              : windowSize.width < 640
              ? 150
              : 200,
          modifier: windowSize.width < 520 ? 0.8 : 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="hero-carousel"
        onSwiper={(swiper) => {
          if (swiperRef.current) {
            swiperRef.current.swiper = swiper;
            swiper.slideToLoop(activeIndex, 0);
          }
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          240: {
            coverflowEffect: {
              stretch: 8,
              depth: 60,
              modifier: 0.7,
            },
          },
          320: {
            coverflowEffect: {
              stretch: 10,
              depth: 80,
              modifier: 0.75,
            },
          },
          400: {
            coverflowEffect: {
              stretch: 12,
              depth: 90,
              modifier: 0.8,
            },
          },
          520: {
            coverflowEffect: {
              stretch: 18,
              depth: 110,
              modifier: 0.85,
            },
          },
          640: {
            coverflowEffect: {
              stretch: 25,
              depth: 140,
              modifier: 0.9,
            },
          },
          768: {
            coverflowEffect: {
              stretch: 35,
              depth: 170,
              modifier: 1,
            },
          },
          1024: {
            coverflowEffect: {
              stretch: 50,
              depth: 200,
              modifier: 1,
            },
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`${index}-${windowSize.width}`}>
            <div>
              <img
                src={slide.image}
                alt={slide.title}
                className="transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-center gap-2 sm:gap-4  px-2 sm:px-6  mx-auto w-fit">
        <button className="swiper-button-prev-custom group cursor-pointer p-1.5 sm:p-2 md:p-3 rounded-full border border-white transition-all duration-300 hover:scale-110 active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:text-white/90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <span className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-wider px-1 sm:px-2 whitespace-nowrap">
          Unlock the Services
        </span>

        <button className="swiper-button-next-custom group cursor-pointer p-1.5 sm:p-2 md:p-3 rounded-full border border-white transition-all duration-300 hover:scale-110 active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:text-white/90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
