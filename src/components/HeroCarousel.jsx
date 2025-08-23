import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Header from "./utils/Header";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [detailsEven, setDetailsEven] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  const data = [
    {
      place: "Switzerland Alps",
      title: "SAINT",
      title2: "ANTONIEN",
      description:
        "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.",
      image: "https://assets.codepen.io/3685267/timed-cards-1.jpg",
    },
    {
      place: "Japan Alps",
      title: "NANGANO",
      title2: "PREFECTURE",
      description:
        "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country's best powder.",
      image: "https://assets.codepen.io/3685267/timed-cards-2.jpg",
    },
    {
      place: "Sahara Desert - Morocco",
      title: "MARRAKECH",
      title2: "MEROUGA",
      description:
        "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
      image: "https://assets.codepen.io/3685267/timed-cards-3.jpg",
    },
  ];

  let order = useRef([0, 1, 2]);
  const ease = "sine.inOut";

  // Responsive values
  const getResponsiveValues = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const isMobile = width <= 768;
    const isTablet = width <= 1024 && width > 768;

    return {
      cardWidth: isMobile ? 140 : isTablet ? 170 : 200,
      cardHeight: isMobile ? 180 : isTablet ? 250 : 300,
      gap: isMobile ? 15 : isTablet ? 25 : 40,
      numberSize: isMobile ? 25 : isTablet ? 35 : 50,
      offsetTop: isMobile
        ? height - 320
        : isTablet
        ? height - 380
        : height - 430,
      offsetLeft: isMobile ? width - 350 : isTablet ? width - 530 : width - 700,
      progressWidth: isMobile ? 200 : isTablet ? 350 : 500,
    };
  };

  const handleResize = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (dimensions.width > 0) {
      initializeCards();
    }
  }, [dimensions]);

  const initializeCards = () => {
    const [active, ...rest] = order.current;
    const detailsActive = detailsEven ? ".details-even" : ".details-odd";
    const detailsInactive = detailsEven ? ".details-odd" : ".details-even";
    const responsive = getResponsiveValues();

    gsap.set(".pagination", {
      top: responsive.offsetTop + responsive.cardHeight + 30,
      left: responsive.offsetLeft,
      opacity: 1,
      zIndex: 60,
    });
    gsap.set("nav", { opacity: 0 }); // Hide nav since it's removed

    gsap.set(`.card-${active}`, {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    gsap.set(`.card-content-${active}`, { x: 0, y: 0, opacity: 0 });
    gsap.set(detailsActive, { opacity: 1, zIndex: 22, x: 0 });
    gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });

    gsap.set(".progress-sub-foreground", {
      width:
        responsive.progressWidth * (1 / order.current.length) * (active + 1),
    });

    rest.forEach((i, index) => {
      gsap.set(`.card-${i}`, {
        x:
          responsive.offsetLeft +
          index * (responsive.cardWidth + responsive.gap),
        y: responsive.offsetTop,
        width: responsive.cardWidth,
        height: responsive.cardHeight,
        zIndex: 30,
        borderRadius: 10,
      });
      gsap.set(`.card-content-${i}`, {
        x:
          responsive.offsetLeft +
          index * (responsive.cardWidth + responsive.gap),
        zIndex: 40,
        y: responsive.offsetTop + responsive.cardHeight - 100,
      });
      gsap.set(`.slide-item-${i}`, { x: (index + 1) * responsive.numberSize });
    });
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    order.current.push(order.current.shift());
    setDetailsEven(!detailsEven);
    setCurrentIndex((currentIndex + 1) % data.length);

    animateStep();
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const lastItem = order.current.pop();
    order.current.unshift(lastItem);
    setDetailsEven(!detailsEven);
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);

    animateStep(true);
  };

  const animateStep = (reverse = false) => {
    const detailsActive = detailsEven ? ".details-even" : ".details-odd";
    const detailsInactive = detailsEven ? ".details-odd" : ".details-even";
    const [active, ...rest] = order.current;
    const responsive = getResponsiveValues();

    gsap.set(detailsActive, { zIndex: 22 });
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });

    gsap.set(detailsInactive, { zIndex: 12 });

    const prv = rest[rest.length - 1];

    gsap.set(`.card-${prv}`, { zIndex: 10 });
    gsap.set(`.card-${active}`, { zIndex: 20 });

    gsap.to(`.card-content-${active}`, {
      y: responsive.offsetTop + responsive.cardHeight - 10,
      opacity: 0,
      duration: 0.3,
      ease,
    });

    gsap.to(`.slide-item-${active}`, { x: 0, ease });
    gsap.to(`.slide-item-${prv}`, { x: -responsive.numberSize, ease });

    gsap.to(".progress-sub-foreground", {
      width:
        responsive.progressWidth * (1 / order.current.length) * (active + 1),
      ease,
    });

    gsap.to(`.card-${active}`, {
      x: 0,
      y: 0,
      ease,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
      onComplete: () => {
        const xNew =
          responsive.offsetLeft +
          (rest.length - 1) * (responsive.cardWidth + responsive.gap);
        gsap.set(`.card-${prv}`, {
          x: xNew,
          y: responsive.offsetTop,
          width: responsive.cardWidth,
          height: responsive.cardHeight,
          zIndex: 30,
          borderRadius: 10,
          scale: 1,
        });

        gsap.set(`.card-content-${prv}`, {
          x: xNew,
          y: responsive.offsetTop + responsive.cardHeight - 100,
          opacity: 1,
          zIndex: 40,
        });
        gsap.set(`.slide-item-${prv}`, {
          x: rest.length * responsive.numberSize,
        });

        gsap.set(detailsInactive, { opacity: 0 });
        setIsAnimating(false);
      },
    });

    rest.forEach((i, index) => {
      if (i !== prv) {
        const xNew =
          responsive.offsetLeft +
          index * (responsive.cardWidth + responsive.gap);
        gsap.set(`.card-${i}`, { zIndex: 30 });
        gsap.to(`.card-${i}`, {
          x: xNew,
          y: responsive.offsetTop,
          width: responsive.cardWidth,
          height: responsive.cardHeight,
          ease,
          delay: 0.1 * (index + 1),
        });

        gsap.to(`.card-content-${i}`, {
          x: xNew,
          y: responsive.offsetTop + responsive.cardHeight - 100,
          opacity: 1,
          zIndex: 40,
          ease,
          delay: 0.1 * (index + 1),
        });
        gsap.to(`.slide-item-${i}`, {
          x: (index + 1) * responsive.numberSize,
          ease,
        });
      }
    });
  };

  const isMobile = dimensions.width <= 768;
  const isTablet = dimensions.width <= 1024 && dimensions.width > 768;

  return (
    <div
      ref={containerRef}
      className="w-full h-screen bg-gray-900 text-white overflow-hidden relative font-sans"
    >
      <Header />
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500&display=swap");

        .card {
          position: absolute;
          left: 0;
          top: 0;
          background-position: center;
          background-size: cover;
          box-shadow: 6px 6px 10px 2px rgba(0, 0, 0, 0.6);
        }

        .card-content {
          position: absolute;
          left: 0;
          top: 0;
          color: rgba(255, 255, 255, 0.87);
          padding-left: ${isMobile ? "12px" : "16px"};
        }

        .content-place {
          margin-top: 6px;
          font-size: ${isMobile ? "11px" : "13px"};
          font-weight: 500;
        }

        .content-title-1,
        .content-title-2 {
          font-weight: 600;
          font-size: ${isMobile ? "16px" : isTablet ? "18px" : "20px"};
          font-family: "Oswald", sans-serif;
        }

        .content-start {
          width: ${isMobile ? "20px" : "30px"};
          height: ${isMobile ? "3px" : "5px"};
          border-radius: 99px;
          background-color: rgba(255, 255, 255, 0.87);
        }

        .details {
          z-index: 22;
          position: absolute;
          top: ${isMobile ? "50px" : isTablet ? "60px" : "240px"};
          left: ${isMobile ? "20px" : isTablet ? "40px" : "60px"};
          right: ${isMobile ? "20px" : "auto"};
        }

        .place-box {
          height: ${isMobile ? "30px" : "46px"};
          overflow: hidden;
        }

        .place-box .text {
          padding-top: ${isMobile ? "10px" : "16px"};
          font-size: ${isMobile ? "14px" : "20px"};
          position: relative;
        }

        .place-box .text:before {
          top: 0;
          left: 0;
          position: absolute;
          content: "";
          width: ${isMobile ? "20px" : "30px"};
          height: ${isMobile ? "3px" : "4px"};
          border-radius: 99px;
          background-color: white;
        }

        .title-1,
        .title-2 {
          font-weight: 600;
          font-size: ${isMobile ? "28px" : isTablet ? "48px" : "72px"};
          font-family: "Oswald", sans-serif;
          line-height: 0.9;
        }

        .title-box-1,
        .title-box-2 {
          margin-top: 2px;
          height: ${isMobile ? "40px" : isTablet ? "60px" : "100px"};
          overflow: hidden;
        }

        .desc {
          margin-top: 16px;
          width: ${isMobile ? "100%" : isTablet ? "400px" : "500px"};
          font-size: ${isMobile ? "13px" : "16px"};
          line-height: 1.5;
        }

        .cta {
          width: ${isMobile ? "100%" : isTablet ? "400px" : "500px"};
          margin-top: 24px;
          display: flex;
          align-items: center;
          flex-wrap: ${isMobile ? "wrap" : "nowrap"};
          gap: ${isMobile ? "12px" : "16px"};
        }

        .bookmark {
          border: none;
          background-color: #ecad29;
          width: ${isMobile ? "32px" : "36px"};
          height: ${isMobile ? "32px" : "36px"};
          border-radius: 99px;
          color: white;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .bookmark svg {
          width: ${isMobile ? "16px" : "20px"};
          height: ${isMobile ? "16px" : "20px"};
        }

        .discover {
          border: 1px solid #ffffff;
          background-color: transparent;
          height: ${isMobile ? "32px" : "36px"};
          border-radius: 99px;
          color: #ffffff;
          padding: ${isMobile ? "4px 16px" : "4px 24px"};
          font-size: ${isMobile ? "11px" : "12px"};
          text-transform: uppercase;
          white-space: nowrap;
        }

        nav {
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: ${isMobile ? "16px 20px" : "20px 36px"};
          font-weight: 500;
        }

        nav svg {
          width: ${isMobile ? "16px" : "20px"};
          height: ${isMobile ? "16px" : "20px"};
        }

        .nav-left {
          display: inline-flex;
          align-items: center;
          text-transform: uppercase;
          font-size: ${isMobile ? "12px" : "14px"};
          gap: ${isMobile ? "6px" : "10px"};
        }

        .nav-right {
          display: ${isMobile ? "none" : "inline-flex"};
          align-items: center;
          text-transform: uppercase;
          font-size: ${isMobile ? "12px" : "14px"};
          gap: ${isMobile ? "16px" : "24px"};
        }

        .active {
          position: relative;
        }

        .active:after {
          bottom: -8px;
          left: 0;
          right: 0;
          position: absolute;
          content: "";
          height: 3px;
          border-radius: 99px;
          background-color: #ecad29;
        }

        .pagination {
          position: absolute;
          left: 0px;
          top: 0px;
          display: inline-flex;
          align-items: center;
          flex-wrap: ${isMobile ? "wrap" : "nowrap"};
          gap: ${isMobile ? "10px" : "0px"};
        }

        .arrow {
          z-index: 60;
          width: ${isMobile ? "40px" : "50px"};
          height: ${isMobile ? "40px" : "50px"};
          border-radius: 999px;
          border: 2px solid rgba(255, 255, 255, 0.33);
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .arrow:hover {
          border-color: #ecad29;
          background-color: rgba(236, 173, 41, 0.1);
        }

        .arrow:nth-child(2) {
          margin-left: ${isMobile ? "0px" : "20px"};
        }

        .arrow svg {
          width: ${isMobile ? "18px" : "24px"};
          height: ${isMobile ? "18px" : "24px"};
          stroke-width: 2;
          color: rgba(255, 255, 255, 0.6);
        }

        .progress-sub-container {
          margin-left: ${isMobile ? "0px" : "24px"};
          z-index: 60;
          width: ${isMobile ? "200px" : isTablet ? "350px" : "500px"};
          height: ${isMobile ? "40px" : "50px"};
          display: flex;
          align-items: center;
          order: ${isMobile ? "3" : "0"};
          flex-basis: ${isMobile ? "100%" : "auto"};
        }

        .progress-sub-background {
          width: ${isMobile ? "200px" : isTablet ? "350px" : "500px"};
          height: 3px;
          background-color: rgba(255, 255, 255, 0.2);
        }

        .progress-sub-foreground {
          height: 3px;
          background-color: #ecad29;
        }

        .slide-numbers {
          width: ${isMobile ? "30px" : "50px"};
          height: ${isMobile ? "40px" : "50px"};
          overflow: hidden;
          z-index: 60;
          position: relative;
          flex-shrink: 0;
        }

        .slide-item {
          width: ${isMobile ? "30px" : "50px"};
          height: ${isMobile ? "40px" : "50px"};
          position: absolute;
          color: white;
          top: 0;
          left: 0;
          display: grid;
          place-items: center;
          font-size: ${isMobile ? "20px" : "32px"};
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .pagination {
            gap: 10px;
          }

          .pagination > div:first-child,
          .pagination > div:nth-child(2) {
            order: 1;
          }

          .pagination > div:nth-child(4) {
            order: 2;
          }
        }
      `}</style>

      {/* Navigation */}
      {/* Removed navigation bar */}

      {/* Cards */}
      <div id="demo">
        {data.map((item, index) => (
          <div key={index}>
            <div
              className={`card card-${index}`}
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className={`card-content card-content-${index}`}>
              <div className="content-start"></div>
              <div className="content-place">{item.place}</div>
              <div className="content-title-1">{item.title}</div>
              <div className="content-title-2">{item.title2}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Details sections */}
      <div className="details details-even">
        <div className="place-box">
          <div className="text">{data[order.current[0]]?.place}</div>
        </div>
        <div className="title-box-1">
          <div className="title-1">{data[order.current[0]]?.title}</div>
        </div>
        <div className="title-box-2">
          <div className="title-2">{data[order.current[0]]?.title2}</div>
        </div>
        <div className="desc">{data[order.current[0]]?.description}</div>
      </div>

      <div className="details details-odd">
        <div className="place-box">
          <div className="text">{data[order.current[0]]?.place}</div>
        </div>
        <div className="title-box-1">
          <div className="title-1">{data[order.current[0]]?.title}</div>
        </div>
        <div className="title-box-2">
          <div className="title-2">{data[order.current[0]]?.title2}</div>
        </div>
        <div className="desc">{data[order.current[0]]?.description}</div>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <div className="arrow arrow-left" onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="arrow arrow-right" onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="progress-sub-container">
          <div className="progress-sub-background">
            <div className="progress-sub-foreground"></div>
          </div>
        </div>
        <div className="slide-numbers">
          {data.map((_, index) => (
            <div key={index} className={`slide-item slide-item-${index}`}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
