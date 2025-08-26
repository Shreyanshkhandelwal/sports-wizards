import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useRef, useCallback } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { useLocation } from "react-router-dom";

const CustomSwiperStyles = () => (
  <style>{`
    .swiper {
      /*padding-bottom: 40px !important;*/
      width: 100% !important;
    }
    .swiper-wrapper {
      align-items: stretch !important;
    }/*
    .swiper-slide {
      height: auto !important;
      display: flex !important;
    }*/
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background-color: #4a4a4a;
      opacity: 1;
      transition: background-color 0.3s ease;
    }
    .swiper-pagination-bullet-active {
      background-color: #00f078;
    }

    .gradient-border-r {
      position: relative;
    }

    .gradient-border-r::after {
      content: '';
      position: absolute;
      top: 10%;
      right: 0;
      width: 2px;
      height: 80%;
      background: linear-gradient(to bottom, transparent, #00f078, transparent);
      opacity: 0.6;
      transition: opacity 0.3s ease;
    }

    .hide-border::after {
      opacity: 0 !important;
    }
  `}</style>
);

const testimonials = [
  {
    quote:
      "More than just a vendor—Sports Wizards felt like partners on our campus project.",
    name: "Mr. Rakesh Kalani",
    title: "Principal, Kalani College",
  },
  {
    quote: "They brought our vision alive with speed and expertise.",
    name: "Mr. Pankaj",
    title: "SportsVilla, Akola",
  },
  {
    quote: "From the first call to the final whistle, their team was on point.",
    name: "Mr. Nitin Taneja",
    title: "Corporate HR Head, ParamountHealthcare",
  },
  {
    quote: "A truly professional team. Their attention to detail is unmatched.",
    name: "Ms. Priya Sharma",
    title: "Event Coordinator, Apex Events",
  },
  {
    quote:
      "The quality of their work exceeded all our expectations. Highly recommended!",
    name: "Mr. Arjun Mehta",
    title: "Director, Greenfield Sports Academy",
  },
];

const TestimonialCard = ({ quote, name, title }) => (
  <div className="text-center p-4 h-full flex flex-col justify-center items-center w-full">
    <p className="text-bg-foreground-secondary italic text-lg md:text-xl mb-6">
      "{quote}"
    </p>
    <div>
      <h4 className="font-bold text-lg">{name}</h4>
      <p className="text-bg-foreground-secondary text-sm">{title}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const location = useLocation();

  const headingText =
    location.pathname === "/coaching"
      ? "Let’s Transform Your School’s Sporting Culture"
      : "What Our Partners Say";

  const swiperRef = useRef(null);

  const updateBorders = useCallback((swiper) => {
    if (!swiper.slides) return;

    swiper.slides.forEach((slide) => {
      slide
        .querySelector(".gradient-border-r")
        ?.classList.remove("hide-border");
    });

    const slidesPerView = swiper.params.slidesPerView;

    if (slidesPerView <= 1) {
      swiper.slides.forEach((slide) => {
        slide.querySelector(".gradient-border-r")?.classList.add("hide-border");
      });
      return;
    }

    const lastVisibleSlideIndex = swiper.activeIndex + slidesPerView - 1;
    const lastSlide = swiper.slides[lastVisibleSlideIndex];

    if (lastSlide) {
      lastSlide
        .querySelector(".gradient-border-r")
        ?.classList.add("hide-border");
    }
  }, []);

  return (
    <section className="py-12 md:py-20">
      <CustomSwiperStyles />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block relative">
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
              Testimonials
            </h1>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl mt-4 tracking-wider uppercase">
            {headingText}
          </h2>
        </div>

        <div className="w-full">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            onSwiper={(swiper) => updateBorders(swiper)}
            onSlideChangeTransitionEnd={(swiper) => updateBorders(swiper)}
            onResize={(swiper) => updateBorders(swiper)}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 0 },
              768: { slidesPerView: 2, spaceBetween: 0 },
              1024: { slidesPerView: 3, spaceBetween: 0 },
            }}
            className="mySwiper w-full overflow-hidden"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="h-full w-full gradient-border-r">
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
