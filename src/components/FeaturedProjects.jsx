import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projects = [
  {
    id: 1,
    title: "Multisport Court - Surat Gymkhana",
    imageUrl: "/featured_projects/1.jpeg",
  },
  {
    id: 2,
    title: "Pickleball Court - Kalani College, Ulhasnagar",
    imageUrl: "/featured_projects/2.jpeg",
  },
  {
    id: 3,
    title: "Pickleball Court - SportsVilla, Akola",
    imageUrl: "/featured_projects/3.jpeg",
  },
  {
    id: 4,
    title: "Tennis Court - Aurangabad",
    imageUrl: "/featured_projects/4.jpeg",
  },
  {
    id: 5,
    title: "Badminton Court - DPIS School, Pune",
    imageUrl: "/featured_projects/5.jpeg",
  },
  {
    id: 5,
    title: "Basketball Court - The Cricket Club Of India (CCI), Churchgate",
    imageUrl: "/featured_projects/6.jpeg",
  },
  {
    id: 5,
    title: "Football Turf - Mira Road",
    imageUrl: "/featured_projects/7.jpeg",
  },
  {
    id: 5,
    title: "Kids Play Area - Paradise Society, Powai",
    imageUrl: "/featured_projects/8.jpeg",
  },
];

const ProjectCard = ({ imageUrl, title }) => (
  <div className="relative w-full h-full overflow-hidden group">
    <img
      src={imageUrl}
      alt={title}
      className="w-[90vw] h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
      <h5
        style={{
          fontSize: "12px",
        }}
        className="text-lg md:text-xl font-bold uppercase tracking-wide font-Race"
      >
        {title}
      </h5>
      {/* <p className="mt-2 text-xs md:text-sm text-gray-300 max-w-md leading-relaxed">
        {description}
      </p> */}
    </div>
  </div>
);

export default function FeaturedProjects() {
  return (
    <>
      <style>{`
        .featured-projects-swiper .swiper-pagination-bullet {
          background-color: #ffffff;
          opacity: 0.5;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .featured-projects-swiper .swiper-pagination-bullet-active {
          background-color: #65F455;
          opacity: 1;
          transform: scale(1.25);
        }
        .featured-projects-swiper .swiper-slide {
          transition: opacity 0.3s ease-in-out;
        }
        .featured-projects-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.6;
        }
        .featured-projects-swiper .swiper-pagination {
          position: relative;
          bottom: auto;
          margin-top: 2rem;
        }
        @media (min-width: 768px) {
          .featured-projects-swiper .swiper-slide-active {
            opacity: 1;
          }
        }
      `}</style>

      <div className="overflow-hidden">
        <div className="hidden lg:block py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-16">
              <div className="flex-1">
                <div className="mb-4 flex items-center justify-center">
                  <h5
                    style={{
                      background:
                        "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="inline-block text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
                  >
                    Featured Projects
                  </h5>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl xl:text-4xl font-bold text-white leading-tight text-xl">
                    SHOWCASING OUR SIGNATURE
                    <br />
                    <span
                      style={{
                        background:
                          " linear-gradient(90deg, #45FD3D 0%, #26FDAC 27.4%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      CREATIONS
                    </span>{" "}
                    ACROSS COMMUNITIES.
                  </h1>
                  <button
                    style={{
                      background:
                        "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                    }}
                    className="font-bold text-sm md:text-base  px-5 md:py-3 md:px-6 rounded-full transition-transform hover:scale-105 text-black"
                  >
                    Build my Court
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Swiper
              className="featured-projects-swiper"
              modules={[Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                scale: 0.9,
                slideShadows: false,
              }}
              slidesPerView={1.5}
              spaceBetween={50}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id} className="!h-auto">
                  <div className="h-[60vh]">
                    <ProjectCard {...project} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="block lg:hidden py-12">
          <div className="px-4">
            <div className=" mb-8">
              <div className="inline-block mb-4">
                <h5
                  style={{
                    background:
                      "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="inline-block text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
                >
                  Featured Projects
                </h5>
              </div>
              <h5 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-6">
                SHOWCASING OUR SIGNATURE
                <br />
                <span
                  style={{
                    background:
                      " linear-gradient(90deg, #45FD3D 0%, #26FDAC 27.4%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  CREATIONS
                </span>{" "}
                ACROSS COMMUNITIES.
              </h5>
              <button
                style={{
                  background:
                    "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                }}
                className="font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full transition-transform hover:scale-105 text-black"
              >
                Build my Court
              </button>
            </div>

            <div className="w-full mt-12">
              <Swiper
                className="featured-projects-swiper"
                modules={[Pagination, Autoplay]}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={20}
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.id} className="!h-auto">
                    <div className="aspect-video max-w-[90vw] mx-auto">
                      <ProjectCard {...project} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
