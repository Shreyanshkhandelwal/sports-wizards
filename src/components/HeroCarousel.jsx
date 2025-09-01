// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import Header from "./utils/Header";

// const HeroCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [detailsEven, setDetailsEven] = useState(true);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const containerRef = useRef(null);

//   const data = [
//     {
//       place: "Switzerland Alps",
//       title: "Powering India’s",
//       title2: "Playgrounds",
//       description:
//         "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.",
//       // image: "https://assets.codepen.io/3685267/timed-cards-1.jpg",
//       image: "/spotlight1.jpg",
//     },
//     {
//       place: "Japan Alps",
//       title: "Powering India’s",
//       title2: "Playgrounds",
//       description:
//         "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country's best powder.",
//       // image: "https://assets.codepen.io/3685267/timed-cards-2.jpg",
//       image: "/bb-court.jpg",
//     },
//     {
//       place: "Sahara Desert - Morocco",
//       title: "Powering India’s",
//       title2: "Playgrounds",
//       description:
//         "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
//       // image: "https://assets.codepen.io/3685267/timed-cards-3.jpg",
//       image: "/soccer-field.png",
//     },
//     {
//       place: "Sahara Desert - Morocco",
//       title: "Powering India’s",
//       title2: "Playgrounds",
//       description:
//         "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
//       // image: "https://assets.codepen.io/3685267/timed-cards-3.jpg",
//       image: "/soccer-field.png",
//     },
//   ];

//   let order = useRef([0, 1, 2, 3]);
//   const ease = "sine.inOut";

//   // Responsive values
//   const getResponsiveValues = () => {
//     const { innerWidth: width, innerHeight: height } = window;
//     const isMobile = width <= 768;
//     const isTablet = width <= 1024 && width > 768;

//     return {
//       cardWidth: isMobile ? 140 : isTablet ? 170 : 200,
//       cardHeight: isMobile ? 180 : isTablet ? 250 : 300,
//       gap: isMobile ? 15 : isTablet ? 25 : 40,
//       numberSize: isMobile ? 25 : isTablet ? 35 : 50,
//       offsetTop: isMobile
//         ? height - 320
//         : isTablet
//         ? height - 380
//         : height - 430,
//       offsetLeft: isMobile ? width - 350 : isTablet ? width - 530 : width - 700,
//       progressWidth: isMobile ? 200 : isTablet ? 350 : 500,
//     };
//   };

//   const handleResize = () => {
//     setDimensions({ width: window.innerWidth, height: window.innerHeight });
//   };

//   useEffect(() => {
//     setDimensions({ width: window.innerWidth, height: window.innerHeight });

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (dimensions.width > 0) {
//       initializeCards();
//     }
//   }, [dimensions]);

//   const initializeCards = () => {
//     const [active, ...rest] = order.current;
//     const detailsActive = detailsEven ? ".details-even" : ".details-odd";
//     const detailsInactive = detailsEven ? ".details-odd" : ".details-even";
//     const responsive = getResponsiveValues();

//     gsap.set(".pagination", {
//       top: responsive.offsetTop + responsive.cardHeight + 30,
//       left: responsive.offsetLeft,
//       opacity: 1,
//       zIndex: 60,
//     });
//     gsap.set("nav", { opacity: 0 }); // Hide nav since it's removed

//     gsap.set(`.card-${active}`, {
//       x: 0,
//       y: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });

//     gsap.set(`.card-content-${active}`, { x: 0, y: 0, opacity: 0 });
//     gsap.set(detailsActive, { opacity: 1, zIndex: 22, x: 0 });
//     gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });

//     gsap.set(".progress-sub-foreground", {
//       width:
//         responsive.progressWidth * (1 / order.current.length) * (active + 1),
//     });

//     rest.forEach((i, index) => {
//       gsap.set(`.card-${i}`, {
//         x:
//           responsive.offsetLeft +
//           index * (responsive.cardWidth + responsive.gap),
//         y: responsive.offsetTop,
//         width: responsive.cardWidth,
//         height: responsive.cardHeight,
//         zIndex: 30,
//         borderRadius: 10,
//       });
//       gsap.set(`.card-content-${i}`, {
//         x:
//           responsive.offsetLeft +
//           index * (responsive.cardWidth + responsive.gap),
//         zIndex: 40,
//         y: responsive.offsetTop + responsive.cardHeight - 100,
//       });
//       gsap.set(`.slide-item-${i}`, { x: (index + 1) * responsive.numberSize });
//     });
//   };

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);

//     order.current.push(order.current.shift());
//     setDetailsEven(!detailsEven);
//     setCurrentIndex((currentIndex + 1) % data.length);

//     animateStep();
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);

//     const lastItem = order.current.pop();
//     order.current.unshift(lastItem);
//     setDetailsEven(!detailsEven);
//     setCurrentIndex((currentIndex - 1 + data.length) % data.length);

//     animateStep(true);
//   };

//   const animateStep = (reverse = false) => {
//     const detailsActive = detailsEven ? ".details-even" : ".details-odd";
//     const detailsInactive = detailsEven ? ".details-odd" : ".details-even";
//     const [active, ...rest] = order.current;
//     const responsive = getResponsiveValues();

//     gsap.set(detailsActive, { zIndex: 22 });
//     gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });

//     gsap.set(detailsInactive, { zIndex: 12 });

//     const prv = rest[rest.length - 1];

//     gsap.set(`.card-${prv}`, { zIndex: 10 });
//     gsap.set(`.card-${active}`, { zIndex: 20 });

//     gsap.to(`.card-content-${active}`, {
//       y: responsive.offsetTop + responsive.cardHeight - 10,
//       opacity: 0,
//       duration: 0.3,
//       ease,
//     });

//     gsap.to(`.slide-item-${active}`, { x: 0, ease });
//     gsap.to(`.slide-item-${prv}`, { x: -responsive.numberSize, ease });

//     gsap.to(".progress-sub-foreground", {
//       width:
//         responsive.progressWidth * (1 / order.current.length) * (active + 1),
//       ease,
//     });

//     gsap.to(`.card-${active}`, {
//       x: 0,
//       y: 0,
//       ease,
//       width: window.innerWidth,
//       height: window.innerHeight,
//       borderRadius: 0,
//       onComplete: () => {
//         const xNew =
//           responsive.offsetLeft +
//           (rest.length - 1) * (responsive.cardWidth + responsive.gap);
//         gsap.set(`.card-${prv}`, {
//           x: xNew,
//           y: responsive.offsetTop,
//           width: responsive.cardWidth,
//           height: responsive.cardHeight,
//           zIndex: 30,
//           borderRadius: 10,
//           scale: 1,
//         });

//         gsap.set(`.card-content-${prv}`, {
//           x: xNew,
//           y: responsive.offsetTop + responsive.cardHeight - 100,
//           opacity: 1,
//           zIndex: 40,
//         });
//         gsap.set(`.slide-item-${prv}`, {
//           x: rest.length * responsive.numberSize,
//         });

//         gsap.set(detailsInactive, { opacity: 0 });
//         setIsAnimating(false);
//       },
//     });

//     rest.forEach((i, index) => {
//       if (i !== prv) {
//         const xNew =
//           responsive.offsetLeft +
//           index * (responsive.cardWidth + responsive.gap);
//         gsap.set(`.card-${i}`, { zIndex: 30 });
//         gsap.to(`.card-${i}`, {
//           x: xNew,
//           y: responsive.offsetTop,
//           width: responsive.cardWidth,
//           height: responsive.cardHeight,
//           ease,
//           delay: 0.1 * (index + 1),
//         });

//         gsap.to(`.card-content-${i}`, {
//           x: xNew,
//           y: responsive.offsetTop + responsive.cardHeight - 100,
//           opacity: 1,
//           zIndex: 40,
//           ease,
//           delay: 0.1 * (index + 1),
//         });
//         gsap.to(`.slide-item-${i}`, {
//           x: (index + 1) * responsive.numberSize,
//           ease,
//         });
//       }
//     });
//   };

//   const isMobile = dimensions.width <= 768;
//   const isTablet = dimensions.width <= 1024 && dimensions.width > 768;

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-screen bg-gray-900 text-white overflow-hidden relative font-sans"
//     >
//       <Header />
//       <style jsx>{`
//         @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500&display=swap");

//         .card {
//           position: absolute;
//           left: 0;
//           top: 0;
//           background-position: center;
//           background-size: cover;
//           box-shadow: 6px 6px 10px 2px rgba(0, 0, 0, 0.6);
//         }

//         .card-content {
//           position: absolute;
//           left: 0;
//           top: 0;
//           color: rgba(255, 255, 255, 0.87);
//           padding-left: ${isMobile ? "12px" : "16px"};
//         }

//         .content-place {
//           margin-top: 6px;
//           font-size: ${isMobile ? "11px" : "13px"};
//           font-weight: 500;
//         }

//         .content-title-1,
//         .content-title-2 {
//           font-weight: 600;
//           font-size: ${isMobile ? "16px" : isTablet ? "18px" : "20px"};
//           /*  font-family: "Oswald", sans-serif;*/
//         }

//         .content-start {
//           width: ${isMobile ? "20px" : "30px"};
//           height: ${isMobile ? "3px" : "5px"};
//           border-radius: 99px;
//           background-color: rgba(255, 255, 255, 0.87);
//         }

//         .details {
//           z-index: 22;
//           position: absolute;
//           top: ${isMobile ? "50px" : isTablet ? "60px" : "240px"};
//           left: ${isMobile ? "20px" : isTablet ? "40px" : "60px"};
//           right: ${isMobile ? "20px" : "auto"};
//         }

//         .place-box {
//           height: ${isMobile ? "30px" : "46px"};
//           overflow: hidden;
//         }

//         .place-box .text {
//           padding-top: ${isMobile ? "10px" : "16px"};
//           font-size: ${isMobile ? "14px" : "20px"};
//           position: relative;
//         }
//         /*
//         .place-box .text:before {
//           top: 0;
//           left: 0;
//           position: absolute;
//           content: "";
//           width: ${isMobile ? "20px" : "30px"};
//           height: ${isMobile ? "3px" : "4px"};
//           border-radius: 99px;
//           background-color: white;
//         }
// */
//         .title-1,
//         .title-2 {
//           font-weight: 600;
//           font-size: ${isMobile ? "20px" : isTablet ? "35px" : "55px"};
//           /*font-family: "Oswald", sans-serif;*/
//           line-height: 0.9;
//         }

//         .title-box-1,
//         .title-box-2 {
//           margin-top: 2px;
//           height: ${isMobile ? "40px" : isTablet ? "60px" : "100px"};
//           overflow: hidden;
//         }

//         .desc {
//           margin-top: 16px;
//           width: ${isMobile ? "100%" : isTablet ? "400px" : "500px"};
//           font-size: ${isMobile ? "13px" : "16px"};
//           line-height: 1.5;
//         }

//         .cta {
//           width: ${isMobile ? "100%" : isTablet ? "400px" : "500px"};
//           margin-top: 24px;
//           display: flex;
//           align-items: center;
//           flex-wrap: ${isMobile ? "wrap" : "nowrap"};
//           gap: ${isMobile ? "12px" : "16px"};
//         }

//         .bookmark {
//           border: none;
//           background-color: #ecad29;
//           width: ${isMobile ? "32px" : "36px"};
//           height: ${isMobile ? "32px" : "36px"};
//           border-radius: 99px;
//           color: white;
//           display: grid;
//           place-items: center;
//           flex-shrink: 0;
//         }

//         .bookmark svg {
//           width: ${isMobile ? "16px" : "20px"};
//           height: ${isMobile ? "16px" : "20px"};
//         }

//         .discover {
//           border: 1px solid #ffffff;
//           background-color: transparent;
//           height: ${isMobile ? "32px" : "36px"};
//           border-radius: 99px;
//           color: #ffffff;
//           padding: ${isMobile ? "4px 16px" : "4px 24px"};
//           font-size: ${isMobile ? "11px" : "12px"};
//           text-transform: uppercase;
//           white-space: nowrap;
//         }

//         nav {
//           position: fixed;
//           left: 0;
//           top: 0;
//           right: 0;
//           z-index: 50;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: ${isMobile ? "16px 20px" : "20px 36px"};
//           font-weight: 500;
//         }

//         nav svg {
//           width: ${isMobile ? "16px" : "20px"};
//           height: ${isMobile ? "16px" : "20px"};
//         }

//         .nav-left {
//           display: inline-flex;
//           align-items: center;
//           text-transform: uppercase;
//           font-size: ${isMobile ? "12px" : "14px"};
//           gap: ${isMobile ? "6px" : "10px"};
//         }

//         .nav-right {
//           display: ${isMobile ? "none" : "inline-flex"};
//           align-items: center;
//           text-transform: uppercase;
//           font-size: ${isMobile ? "12px" : "14px"};
//           gap: ${isMobile ? "16px" : "24px"};
//         }

//         .active {
//           position: relative;
//         }

//         .active:after {
//           bottom: -8px;
//           left: 0;
//           right: 0;
//           position: absolute;
//           content: "";
//           height: 3px;
//           border-radius: 99px;
//           background-color: #ecad29;
//         }

//         .pagination {
//           position: absolute;
//           left: 0px;
//           top: 0px;
//           display: inline-flex;
//           align-items: center;
//           flex-wrap: ${isMobile ? "wrap" : "nowrap"};
//           gap: ${isMobile ? "10px" : "0px"};
//         }

//         .arrow {
//           z-index: 60;
//           width: ${isMobile ? "40px" : "50px"};
//           height: ${isMobile ? "40px" : "50px"};
//           border-radius: 999px;
//           border: 2px solid rgba(255, 255, 255, 0.33);
//           display: grid;
//           place-items: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }

//         .arrow:hover {
//           border-color: #ecad29;
//           background-color: rgba(236, 173, 41, 0.1);
//         }

//         .arrow:nth-child(2) {
//           margin-left: ${isMobile ? "0px" : "20px"};
//         }

//         .arrow svg {
//           width: ${isMobile ? "18px" : "24px"};
//           height: ${isMobile ? "18px" : "24px"};
//           stroke-width: 2;
//           color: rgba(255, 255, 255, 0.6);
//         }

//         .progress-sub-container {
//           margin-left: ${isMobile ? "0px" : "24px"};
//           z-index: 60;
//           width: ${isMobile ? "200px" : isTablet ? "350px" : "500px"};
//           height: ${isMobile ? "40px" : "50px"};
//           display: flex;
//           align-items: center;
//           order: ${isMobile ? "3" : "0"};
//           flex-basis: ${isMobile ? "100%" : "auto"};
//         }

//         .progress-sub-background {
//           width: ${isMobile ? "200px" : isTablet ? "350px" : "500px"};
//           height: 3px;
//           background-color: rgba(255, 255, 255, 0.2);
//         }

//         .progress-sub-foreground {
//           height: 3px;
//           background-color: #ecad29;
//         }

//         .slide-numbers {
//           width: ${isMobile ? "30px" : "50px"};
//           height: ${isMobile ? "40px" : "50px"};
//           overflow: hidden;
//           z-index: 60;
//           position: relative;
//           flex-shrink: 0;
//         }

//         .slide-item {
//           width: ${isMobile ? "30px" : "50px"};
//           height: ${isMobile ? "40px" : "50px"};
//           position: absolute;
//           color: white;
//           top: 0;
//           left: 0;
//           display: grid;
//           place-items: center;
//           font-size: ${isMobile ? "20px" : "32px"};
//           font-weight: bold;
//         }

//         @media (max-width: 768px) {
//           .pagination {
//             gap: 10px;
//           }

//           .pagination > div:first-child,
//           .pagination > div:nth-child(2) {
//             order: 1;
//           }

//           .pagination > div:nth-child(4) {
//             order: 2;
//           }
//         }
//       `}</style>

//       {/* Navigation */}
//       {/* Removed navigation bar */}

//       {/* Cards */}
//       <div id="demo">
//         {data.map((item, index) => (
//           <div key={index}>
//             <div
//               className={`card card-${index}`}
//               style={{ backgroundImage: `url(${item.image})` }}
//             />
//             <div className={`card-content card-content-${index}`}>
//               {/* <div className="content-start"></div> */}
//               {/* <div className="content-place">{item.place}</div> */}
//               <div className="content-title-1">{item.title}</div>
//               <div className="content-title-2">{item.title2}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Details sections */}
//       <div className="details details-even">
//         {/* <div className="place-box">
//           <div className="text">{data[order.current[0]]?.place}</div>
//         </div> */}
//         <div className="title-box-1">
//           <h1 className="title-1">{data[order.current[0]]?.title}</h1>
//         </div>
//         <div className="title-box-2">
//           <h1 className="title-2">{data[order.current[0]]?.title2}</h1>
//         </div>
//         <div className="btns flex-col lg:flex gap-5">
//           <button
//             style={{
//               background:
//                 "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
//             }}
//             className="font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg max-w-[250px]"
//           >
//             Explore What We Do
//           </button>
//           <button className="bg-white font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg max-w-[180px]">
//             EnquireNow
//           </button>
//         </div>
//         {/* <div className="desc">{data[order.current[0]]?.description}</div> */}
//       </div>

//       <div className="details details-odd">
//         {/* <div className="place-box">
//           <div className="text">{data[order.current[0]]?.place}</div>
//         </div> */}
//         <div className="title-box-1">
//           <div className="title-1">{data[order.current[0]]?.title}</div>
//         </div>
//         <div className="title-box-2">
//           <div className="title-2">{data[order.current[0]]?.title2}</div>
//         </div>
//         <div className="btns flex-col lg:flex gap-5">
//           <button
//             style={{
//               background:
//                 "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
//             }}
//             className=" font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg max-w-[250px]"
//           >
//             Explore What We Do
//           </button>
//           <button className="bg-white font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg max-w-[180px]">
//             EnquireNow
//           </button>
//         </div>
//         {/* <div className="desc">{data[order.current[0]]?.description}</div> */}
//       </div>

//       {/* Pagination */}
//       <div className="pagination">
//         <div className="arrow arrow-left" onClick={prevSlide}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 19.5L8.25 12l7.5-7.5"
//             />
//           </svg>
//         </div>
//         <div className="arrow arrow-right" onClick={nextSlide}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 4.5l7.5 7.5-7.5 7.5"
//             />
//           </svg>
//         </div>
//         <div className="progress-sub-container">
//           <div className="progress-sub-background">
//             <div className="progress-sub-foreground"></div>
//           </div>
//         </div>
//         <div className="slide-numbers">
//           {data.map((_, index) => (
//             <div key={index} className={`slide-item slide-item-${index}`}>
//               {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroCarousel;

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import Header from "./utils/Header";

// const HeroCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [detailsEven, setDetailsEven] = useState(true);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const containerRef = useRef(null);

//   const data = [
//     {
//       place: "Switzerland Alps",
//       title: "Powering India's",
//       title2: "Playgrounds",
//       description:
//         "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.",
//       // image: "https://assets.codepen.io/3685267/timed-cards-1.jpg",
//       image: "/spotlight1.jpg",
//     },
//     {
//       place: "Japan Alps",
//       title: "Powering India's",
//       title2: "Playgrounds",
//       description:
//         "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country's best powder.",
//       // image: "https://assets.codepen.io/3685267/timed-cards-2.jpg",
//       image: "/bb-court.jpg",
//     },
//     {
//       place: "Sahara Desert - Morocco",
//       title: "Powering India's",
//       title2: "Playgrounds",
//       description:
//         "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
//       // image: "https://assets.codepen.io/3685267/timed-cards-3.jpg",
//       image: "/soccer-field.png",
//     },
//     {
//       place: "Sahara Desert - Morocco",
//       title: "Powering India's",
//       title2: "Playgrounds",
//       description:
//         "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
//       // image: "https://assets.codepen.io/3685267/timed-cards-3.jpg",
//       image: "/soccer-field.png",
//     },
//   ];

//   let order = useRef([0, 1, 2, 3]);
//   const ease = "sine.inOut";

//   // Responsive values with different sizes for middle card
//   const getResponsiveValues = () => {
//     const { innerWidth: width, innerHeight: height } = window;
//     const isMobile = width <= 768;
//     const isTablet = width <= 1024 && width > 768;

//     return {
//       // Regular card dimensions (side cards)
//       cardWidth: isMobile ? 120 : isTablet ? 150 : 170,
//       cardHeight: isMobile ? 160 : isTablet ? 220 : 260,
//       // Middle card dimensions (larger)
//       middleCardWidth: isMobile ? 160 : isTablet ? 200 : 240,
//       middleCardHeight: isMobile ? 200 : isTablet ? 280 : 340,
//       // Smaller gap between cards
//       gap: isMobile ? -5 : isTablet ? -5 : -5,
//       numberSize: isMobile ? 25 : isTablet ? 35 : 50,
//       offsetTop: isMobile
//         ? height - 380
//         : isTablet
//         ? height - 400
//         : height - 450,
//       offsetLeft: isMobile ? width - 380 : isTablet ? width - 600 : width - 600,
//       progressWidth: isMobile ? 200 : isTablet ? 350 : 500,
//     };
//   };

//   const handleResize = () => {
//     setDimensions({ width: window.innerWidth, height: window.innerHeight });
//   };

//   useEffect(() => {
//     setDimensions({ width: window.innerWidth, height: window.innerHeight });

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (dimensions.width > 0) {
//       initializeCards();
//     }
//   }, [dimensions]);

//   const getCardDimensions = (index, cardPosition) => {
//     const responsive = getResponsiveValues();

//     // Middle card (position 0 in rest array) gets larger dimensions
//     if (cardPosition === 1) {
//       return {
//         width: responsive.middleCardWidth,
//         height: responsive.middleCardHeight,
//         // Adjust Y position to center the taller middle card
//         yOffset: (responsive.cardHeight - responsive.middleCardHeight) / 2,
//       };
//     }

//     return {
//       width: responsive.cardWidth,
//       height: responsive.cardHeight,
//       yOffset: 0,
//     };
//   };

//   const initializeCards = () => {
//     const [active, ...rest] = order.current;
//     const detailsActive = detailsEven ? ".details-even" : ".details-odd";
//     const detailsInactive = detailsEven ? ".details-odd" : ".details-even";
//     const responsive = getResponsiveValues();

//     gsap.set(".pagination", {
//       top: responsive.offsetTop + responsive.middleCardHeight + 30,
//       left: responsive.offsetLeft,
//       opacity: 1,
//       zIndex: 60,
//     });
//     gsap.set("nav", { opacity: 0 }); // Hide nav since it's removed

//     gsap.set(`.card-${active}`, {
//       x: 0,
//       y: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });

//     gsap.set(`.card-content-${active}`, { x: 0, y: 0, opacity: 0 });
//     gsap.set(detailsActive, { opacity: 1, zIndex: 22, x: 0 });
//     gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });

//     gsap.set(".progress-sub-foreground", {
//       width:
//         responsive.progressWidth * (1 / order.current.length) * (active + 1),
//     });

//     let currentX = responsive.offsetLeft;

//     rest.forEach((i, index) => {
//       const cardDims = getCardDimensions(i, index);

//       const zIndex = index === 1 ? 40 : 30;

//       gsap.set(`.card-${i}`, {
//         x: currentX,
//         y: responsive.offsetTop + cardDims.yOffset,
//         width: cardDims.width,
//         height: cardDims.height,
//         zIndex: zIndex,
//         borderRadius: 10,
//       });
//       gsap.set(`.card-content-${i}`, {
//         x: currentX,
//         zIndex: index === 1 ? 45 : 40,
//         y: responsive.offsetTop + cardDims.yOffset + cardDims.height - 100,
//       });
//       gsap.set(`.slide-item-${i}`, { x: (index + 1) * responsive.numberSize });

//       // Update currentX for next card
//       currentX += cardDims.width + responsive.gap;
//     });
//   };

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);

//     order.current.push(order.current.shift());
//     setDetailsEven(!detailsEven);
//     setCurrentIndex((currentIndex + 1) % data.length);

//     animateStep();
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);

//     const lastItem = order.current.pop();
//     order.current.unshift(lastItem);
//     setDetailsEven(!detailsEven);
//     setCurrentIndex((currentIndex - 1 + data.length) % data.length);

//     animateStep(true);
//   };

//   const animateStep = (reverse = false) => {
//     const detailsActive = detailsEven ? ".details-even" : ".details-odd";
//     const detailsInactive = detailsEven ? ".details-odd" : ".details-even";
//     const [active, ...rest] = order.current;
//     const responsive = getResponsiveValues();

//     gsap.set(detailsActive, { zIndex: 22 });
//     gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });

//     gsap.set(detailsInactive, { zIndex: 12 });

//     const prv = rest[rest.length - 1];

//     gsap.set(`.card-${prv}`, { zIndex: 10 });
//     gsap.set(`.card-${active}`, { zIndex: 20 });

//     const activeCardDims = getCardDimensions(active, 0); // Active card position
//     gsap.to(`.card-content-${active}`, {
//       y: responsive.offsetTop + activeCardDims.height - 10,
//       opacity: 0,
//       duration: 0.3,
//       ease,
//     });

//     gsap.to(`.slide-item-${active}`, { x: 0, ease });
//     gsap.to(`.slide-item-${prv}`, { x: -responsive.numberSize, ease });

//     gsap.to(".progress-sub-foreground", {
//       width:
//         responsive.progressWidth * (1 / order.current.length) * (active + 1),
//       ease,
//     });

//     gsap.to(`.card-${active}`, {
//       x: 0,
//       y: 0,
//       ease,
//       width: window.innerWidth,
//       height: window.innerHeight,
//       borderRadius: 0,
//       onComplete: () => {
//         // Calculate position for the previous card (will be rightmost)
//         let totalWidth = responsive.offsetLeft;
//         rest.forEach((_, idx) => {
//           if (idx < rest.length - 1) {
//             const dims = getCardDimensions(rest[idx], idx);
//             totalWidth += dims.width + responsive.gap;
//           }
//         });

//         const prvCardDims = getCardDimensions(prv, rest.length - 1);

//         gsap.set(`.card-${prv}`, {
//           x: totalWidth,
//           y: responsive.offsetTop + prvCardDims.yOffset,
//           width: prvCardDims.width,
//           height: prvCardDims.height,
//           zIndex: 30,
//           borderRadius: 10,
//           scale: 1,
//         });

//         gsap.set(`.card-content-${prv}`, {
//           x: totalWidth,
//           y:
//             responsive.offsetTop +
//             prvCardDims.yOffset +
//             prvCardDims.height -
//             100,
//           opacity: 1,
//           zIndex: 40,
//         });
//         gsap.set(`.slide-item-${prv}`, {
//           x: rest.length * responsive.numberSize,
//         });

//         gsap.set(detailsInactive, { opacity: 0 });
//         setIsAnimating(false);
//       },
//     });

//     let currentX = responsive.offsetLeft;
//     rest.forEach((i, index) => {
//       if (i !== prv) {
//         const cardDims = getCardDimensions(i, index);

//         gsap.set(`.card-${i}`, { zIndex: 30 });
//         gsap.to(`.card-${i}`, {
//           x: currentX,
//           y: responsive.offsetTop + cardDims.yOffset,
//           width: cardDims.width,
//           height: cardDims.height,
//           ease,
//           delay: 0.1 * (index + 1),
//         });

//         gsap.to(`.card-content-${i}`, {
//           x: currentX,
//           y: responsive.offsetTop + cardDims.yOffset + cardDims.height - 100,
//           opacity: 1,
//           zIndex: 40,
//           ease,
//           delay: 0.1 * (index + 1),
//         });
//         gsap.to(`.slide-item-${i}`, {
//           x: (index + 1) * responsive.numberSize,
//           ease,
//         });

//         currentX += cardDims.width + responsive.gap;
//       }
//     });
//   };

//   const isMobile = dimensions.width <= 768;
//   const isTablet = dimensions.width <= 1024 && dimensions.width > 768;

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-screen bg-gray-900 text-white overflow-hidden relative font-sans"
//     >
//       <Header />
//       <style jsx>{`
//         @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500&display=swap");

//         .card {
//           position: absolute;
//           left: 0;
//           top: 0;
//           background-position: center;
//           background-size: cover;
//           box-shadow: 6px 6px 10px 2px rgba(0, 0, 0, 0.6);
//         }

//         .card-content {
//           position: absolute;
//           left: 0;
//           top: 0;
//           color: rgba(255, 255, 255, 0.87);
//           padding-left: ${isMobile ? "12px" : "16px"};
//         }

//         .content-place {
//           margin-top: 6px;
//           font-size: ${isMobile ? "11px" : "13px"};
//           font-weight: 500;
//         }

//         .content-title-1,
//         .content-title-2 {
//           font-weight: 600;
//           font-size: ${isMobile ? "16px" : isTablet ? "18px" : "20px"};
//           /*  font-family: "Oswald", sans-serif;*/
//         }

//         .content-start {
//           width: ${isMobile ? "20px" : "30px"};
//           height: ${isMobile ? "3px" : "5px"};
//           border-radius: 99px;
//           background-color: rgba(255, 255, 255, 0.87);
//         }

//         .details {
//           z-index: 22;
//           position: absolute;
//           top: ${isMobile ? "50px" : isTablet ? "60px" : "240px"};
//           left: ${isMobile ? "20px" : isTablet ? "40px" : "60px"};
//           right: ${isMobile ? "20px" : "auto"};
//         }

//         .place-box {
//           height: ${isMobile ? "30px" : "46px"};
//           overflow: hidden;
//         }

//         .place-box .text {
//           padding-top: ${isMobile ? "10px" : "16px"};
//           font-size: ${isMobile ? "14px" : "20px"};
//           position: relative;
//         }
//         /*
//         .place-box .text:before {
//           top: 0;
//           left: 0;
//           position: absolute;
//           content: "";
//           width: ${isMobile ? "20px" : "30px"};
//           height: ${isMobile ? "3px" : "4px"};
//           border-radius: 99px;
//           background-color: white;
//         }
// */
//         .title-1,
//         .title-2 {
//           font-weight: 600;
//           font-size: ${isMobile ? "20px" : isTablet ? "35px" : "55px"};
//           /*font-family: "Oswald", sans-serif;*/
//           line-height: 0.9;
//         }

//         .title-box-1,
//         .title-box-2 {
//           margin-top: 2px;
//           height: ${isMobile ? "40px" : isTablet ? "60px" : "100px"};
//           overflow: hidden;
//         }

//         .desc {
//           margin-top: 16px;
//           width: ${isMobile ? "100%" : isTablet ? "400px" : "500px"};
//           font-size: ${isMobile ? "13px" : "16px"};
//           line-height: 1.5;
//         }

//         .cta {
//           width: ${isMobile ? "100%" : isTablet ? "400px" : "500px"};
//           margin-top: 24px;
//           display: flex;
//           align-items: center;
//           flex-wrap: ${isMobile ? "wrap" : "nowrap"};
//           gap: ${isMobile ? "12px" : "16px"};
//         }

//         .bookmark {
//           border: none;
//           background-color: #ecad29;
//           width: ${isMobile ? "32px" : "36px"};
//           height: ${isMobile ? "32px" : "36px"};
//           border-radius: 99px;
//           color: white;
//           display: grid;
//           place-items: center;
//           flex-shrink: 0;
//         }

//         .bookmark svg {
//           width: ${isMobile ? "16px" : "20px"};
//           height: ${isMobile ? "16px" : "20px"};
//         }

//         .discover {
//           border: 1px solid #ffffff;
//           background-color: transparent;
//           height: ${isMobile ? "32px" : "36px"};
//           border-radius: 99px;
//           color: #ffffff;
//           padding: ${isMobile ? "4px 16px" : "4px 24px"};
//           font-size: ${isMobile ? "11px" : "12px"};
//           text-transform: uppercase;
//           white-space: nowrap;
//         }

//         nav {
//           position: fixed;
//           left: 0;
//           top: 0;
//           right: 0;
//           z-index: 50;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: ${isMobile ? "16px 20px" : "20px 36px"};
//           font-weight: 500;
//         }

//         nav svg {
//           width: ${isMobile ? "16px" : "20px"};
//           height: ${isMobile ? "16px" : "20px"};
//         }

//         .nav-left {
//           display: inline-flex;
//           align-items: center;
//           text-transform: uppercase;
//           font-size: ${isMobile ? "12px" : "14px"};
//           gap: ${isMobile ? "6px" : "10px"};
//         }

//         .nav-right {
//           display: ${isMobile ? "none" : "inline-flex"};
//           align-items: center;
//           text-transform: uppercase;
//           font-size: ${isMobile ? "12px" : "14px"};
//           gap: ${isMobile ? "16px" : "24px"};
//         }

//         .active {
//           position: relative;
//         }

//         .active:after {
//           bottom: -8px;
//           left: 0;
//           right: 0;
//           position: absolute;
//           content: "";
//           height: 3px;
//           border-radius: 99px;
//           background-color: #ecad29;
//         }

//         .pagination {
//           position: absolute;
//           left: 0px;
//           top: 0px;
//           display: inline-flex;
//           align-items: center;
//           flex-wrap: ${isMobile ? "wrap" : "nowrap"};
//           gap: ${isMobile ? "10px" : "0px"};
//         }

//         .arrow {
//           z-index: 60;
//           width: ${isMobile ? "40px" : "50px"};
//           height: ${isMobile ? "40px" : "50px"};
//           border-radius: 999px;
//           border: 2px solid rgba(255, 255, 255, 0.33);
//           display: grid;
//           place-items: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }

//         .arrow:hover {
//           border-color: #ecad29;
//           background-color: rgba(236, 173, 41, 0.1);
//         }

//         .arrow:nth-child(2) {
//           margin-left: ${isMobile ? "0px" : "20px"};
//         }

//         .arrow svg {
//           width: ${isMobile ? "18px" : "24px"};
//           height: ${isMobile ? "18px" : "24px"};
//           stroke-width: 2;
//           color: rgba(255, 255, 255, 0.6);
//         }

//         .progress-sub-container {
//           margin-left: ${isMobile ? "0px" : "24px"};
//           z-index: 60;
//           width: ${isMobile ? "200px" : isTablet ? "350px" : "500px"};
//           height: ${isMobile ? "40px" : "50px"};
//           display: flex;
//           align-items: center;
//           order: ${isMobile ? "3" : "0"};
//           flex-basis: ${isMobile ? "100%" : "auto"};
//         }

//         .progress-sub-background {
//           width: ${isMobile ? "200px" : isTablet ? "350px" : "500px"};
//           height: 3px;
//           background-color: rgba(255, 255, 255, 0.2);
//         }

//         .progress-sub-foreground {
//           height: 3px;
//           background-color: #ecad29;
//         }

//         .slide-numbers {
//           width: ${isMobile ? "30px" : "50px"};
//           height: ${isMobile ? "40px" : "50px"};
//           overflow: hidden;
//           z-index: 60;
//           position: relative;
//           flex-shrink: 0;
//         }

//         .slide-item {
//           width: ${isMobile ? "30px" : "50px"};
//           height: ${isMobile ? "40px" : "50px"};
//           position: absolute;
//           color: white;
//           top: 0;
//           left: 0;
//           display: grid;
//           place-items: center;
//           font-size: ${isMobile ? "20px" : "32px"};
//           font-weight: bold;
//         }

//         @media (max-width: 768px) {
//           .pagination {
//             gap: 10px;
//           }

//           .pagination > div:first-child,
//           .pagination > div:nth-child(2) {
//             order: 1;
//           }

//           .pagination > div:nth-child(4) {
//             order: 2;
//           }
//         }
//       `}</style>

//       {/* Navigation */}
//       {/* Removed navigation bar */}

//       {/* Cards */}
//       <div id="demo">
//         {data.map((item, index) => (
//           <div key={index}>
//             <div
//               className={`card card-${index}`}
//               style={{ backgroundImage: `url(${item.image})` }}
//             />
//             <div className={`card-content card-content-${index}`}>
//               {/* <div className="content-start"></div> */}
//               {/* <div className="content-place">{item.place}</div> */}
//               <div className="content-title-1">{item.title}</div>
//               <div className="content-title-2">{item.title2}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Details sections */}
//       <div className="details details-even">
//         {/* <div className="place-box">
//           <div className="text">{data[order.current[0]]?.place}</div>
//         </div> */}
//         <div className="title-box-1">
//           <h1 className="title-1">{data[order.current[0]]?.title}</h1>
//         </div>
//         <div className="title-box-2">
//           <h1 className="title-2">{data[order.current[0]]?.title2}</h1>
//         </div>
//         <div className="btns flex-col lg:flex gap-5">
//           <button
//             style={{
//               background:
//                 "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
//             }}
//             className="font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg max-w-[250px]"
//           >
//             Explore What We Do
//           </button>
//           <button className="bg-white font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg max-w-[180px]">
//             EnquireNow
//           </button>
//         </div>
//         {/* <div className="desc">{data[order.current[0]]?.description}</div> */}
//       </div>

//       <div className="details details-odd">
//         {/* <div className="place-box">
//           <div className="text">{data[order.current[0]]?.place}</div>
//         </div> */}
//         <div className="title-box-1">
//           <div className="title-1">{data[order.current[0]]?.title}</div>
//         </div>
//         <div className="title-box-2">
//           <div className="title-2">{data[order.current[0]]?.title2}</div>
//         </div>
//         <div className="btns flex-col lg:flex gap-5">
//           <button
//             style={{
//               background:
//                 "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
//             }}
//             className=" font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg max-w-[250px]"
//           >
//             Explore What We Do
//           </button>
//           <button className="bg-white font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg max-w-[180px]">
//             EnquireNow
//           </button>
//         </div>
//         {/* <div className="desc">{data[order.current[0]]?.description}</div> */}
//       </div>

//       {/* Pagination */}
//       <div className="pagination">
//         <div className="arrow arrow-left" onClick={prevSlide}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 19.5L8.25 12l7.5-7.5"
//             />
//           </svg>
//         </div>
//         <div className="arrow arrow-right" onClick={nextSlide}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 4.5l7.5 7.5-7.5 7.5"
//             />
//           </svg>
//         </div>
//         <div className="progress-sub-container">
//           <div className="progress-sub-background">
//             <div className="progress-sub-foreground"></div>
//           </div>
//         </div>
//         <div className="slide-numbers">
//           {data.map((_, index) => (
//             <div key={index} className={`slide-item slide-item-${index}`}>
//               {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroCarousel;

// other <code></code>

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import Header from "./utils/Header";

// const HeroCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [detailsEven, setDetailsEven] = useState(true);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const containerRef = useRef(null);
//   const intervalRef = useRef(null);

//   const startAutoPlay = () => {
//     stopAutoPlay(); // clear if already running
//     intervalRef.current = setInterval(() => {
//       if (!isAnimating) {
//         nextSlide();
//       }
//     }, 3000);
//   };

//   const stopAutoPlay = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   useEffect(() => {
//     startAutoPlay();
//     return () => stopAutoPlay(); // cleanup on unmount
//   }, []); // re-run whenever slide changes

//   const data = [
//     {
//       place: "Switzerland Alps",
//       title: "Powering India's",
//       title2: "Playgrounds",
//       title3: "Coaching",
//       description:
//         "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.",
//       // image: "https://assets.codepen.io/3685267/timed-cards-1.jpg",
//       image: "/spotlight1.jpg",
//     },
//     {
//       place: "Japan Alps",
//       title: "Powering India's",
//       title2: "Playgrounds",
//       title3: "Events",
//       description:
//         "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country's best powder.",
//       // image: "https://assets.codepen.io/3685267/timed-cards-2.jpg",
//       image: "/bb-court.jpg",
//     },
//     {
//       place: "Sahara Desert - Morocco",
//       title: "Powering India's",
//       title2: "Playgrounds",
//       title3: "Merchandise",
//       description:
//         "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
//       // image: "https://assets.codepen.io/3685267/timed-cards-3.jpg",
//       image: "/soccer-field.png",
//     },
//     {
//       place: "Sahara Desert - Morocco",
//       title: "Powering India's",
//       title2: "Playgrounds",
//       title3: "Equipment",
//       description:
//         "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
//       // image: "https://assets.codepen.io/3685267/timed-cards-3.jpg",
//       image: "/equipment.jpg",
//     },
//   ];

//   let order = useRef([0, 1, 2, 3]);
//   const ease = "sine.inOut";

//   // Responsive values with different sizes for middle card
//   const getResponsiveValues = () => {
//     const { innerWidth: width, innerHeight: height } = window;
//     const isMobile = width <= 768;
//     const isTablet = width <= 1024 && width > 768;

//     // Calculate total width of all cards for mobile centering
//     const cardWidth = isMobile ? 120 : isTablet ? 150 : 170;
//     const middleCardWidth = isMobile ? 160 : isTablet ? 200 : 240;
//     const gap = isMobile ? -5 : isTablet ? -5 : -5;

//     // For mobile: calculate total width and center it
//     const totalCardsWidth = cardWidth + middleCardWidth + cardWidth + 2 * gap;
//     const mobileOffsetLeft = (width - totalCardsWidth) / 2;

//     return {
//       // Regular card dimensions (side cards)
//       cardWidth,
//       cardHeight: isMobile ? 160 : isTablet ? 220 : 260,
//       // Middle card dimensions (larger)
//       middleCardWidth,
//       middleCardHeight: isMobile ? 200 : isTablet ? 280 : 340,
//       // Smaller gap between cards
//       gap,
//       numberSize: isMobile ? 25 : isTablet ? 35 : 50,
//       offsetTop: isMobile
//         ? height - 320
//         : isTablet
//         ? height - 400
//         : height - 450,
//       // For mobile: center the cards, for larger screens: move more to the left
//       offsetLeft: isMobile
//         ? mobileOffsetLeft
//         : isTablet
//         ? width - 520
//         : width - 620,
//       progressWidth: isMobile ? 200 : isTablet ? 350 : 500,
//     };
//   };

//   const handleResize = () => {
//     setDimensions({ width: window.innerWidth, height: window.innerHeight });
//   };

//   useEffect(() => {
//     setDimensions({ width: window.innerWidth, height: window.innerHeight });

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (dimensions.width > 0) {
//       initializeCards();
//     }
//   }, [dimensions]);

//   const getCardDimensions = (index, cardPosition) => {
//     const responsive = getResponsiveValues();

//     // Middle card (position 0 in rest array) gets larger dimensions
//     if (cardPosition === 1) {
//       return {
//         width: responsive.middleCardWidth,
//         height: responsive.middleCardHeight,
//         // Adjust Y position to center the taller middle card
//         yOffset: (responsive.cardHeight - responsive.middleCardHeight) / 2,
//       };
//     }

//     return {
//       width: responsive.cardWidth,
//       height: responsive.cardHeight,
//       yOffset: 0,
//     };
//   };

//   const initializeCards = () => {
//     const [active, ...rest] = order.current;
//     const detailsActive = detailsEven ? ".details-even" : ".details-odd";
//     const detailsInactive = detailsEven ? ".details-odd" : ".details-even";
//     const responsive = getResponsiveValues();

//     gsap.set(".pagination", {
//       top: responsive.offsetTop + responsive.middleCardHeight,
//       left: responsive.offsetLeft,
//       opacity: 1,
//       zIndex: 60,
//     });
//     gsap.set("nav", { opacity: 0 }); // Hide nav since it's removed

//     gsap.set(`.card-${active}`, {
//       x: 0,
//       y: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });

//     gsap.set(`.card-content-${active}`, { x: 0, y: 0, opacity: 0 });
//     gsap.set(detailsActive, { opacity: 1, zIndex: 22, x: 0 });
//     gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });

//     gsap.set(".progress-sub-foreground", {
//       width:
//         responsive.progressWidth * (1 / order.current.length) * (active + 1),
//     });

//     let currentX = responsive.offsetLeft;

//     rest.forEach((i, index) => {
//       const cardDims = getCardDimensions(i, index);
//       // The middle card is at index 1 in the rest array (position 1 visually)
//       // So we check if this is the middle position
//       const isMiddleCard = index === 1;
//       const zIndex = isMiddleCard ? 35 : 30;

//       gsap.set(`.card-${i}`, {
//         x: currentX,
//         y: responsive.offsetTop + cardDims.yOffset,
//         width: cardDims.width,
//         height: cardDims.height,
//         zIndex: zIndex,
//         borderRadius: 10,
//       });
//       gsap.set(`.card-content-${i}`, {
//         x: currentX,
//         zIndex: isMiddleCard ? 45 : 40, // Higher z-index for middle card text
//         y: responsive.offsetTop + cardDims.yOffset + cardDims.height - 100,
//       });
//       gsap.set(`.slide-item-${i}`, { x: (index + 1) * responsive.numberSize });

//       // Update currentX for next card
//       currentX += cardDims.width + responsive.gap;
//     });
//   };

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);

//     order.current.push(order.current.shift());
//     setDetailsEven(!detailsEven);
//     setCurrentIndex((currentIndex + 1) % data.length);

//     animateStep();
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);

//     const lastItem = order.current.pop();
//     order.current.unshift(lastItem);
//     setDetailsEven(!detailsEven);
//     setCurrentIndex((currentIndex - 1 + data.length) % data.length);

//     animateStep(true);
//   };

//   const animateStep = (reverse = false) => {
//     const detailsActive = detailsEven ? ".details-even" : ".details-odd";
//     const detailsInactive = detailsEven ? ".details-odd" : ".details-even";
//     const [active, ...rest] = order.current;
//     const responsive = getResponsiveValues();

//     gsap.set(detailsActive, { zIndex: 22 });
//     gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });

//     gsap.set(detailsInactive, { zIndex: 12 });

//     const prv = rest[rest.length - 1];

//     gsap.set(`.card-${prv}`, { zIndex: 10 });
//     gsap.set(`.card-${active}`, { zIndex: 20 });

//     const activeCardDims = getCardDimensions(active, 0); // Active card position
//     gsap.to(`.card-content-${active}`, {
//       y: responsive.offsetTop + activeCardDims.height - 10,
//       opacity: 0,
//       duration: 0.3,
//       ease,
//     });

//     gsap.to(`.slide-item-${active}`, { x: 0, ease });
//     gsap.to(`.slide-item-${prv}`, { x: -responsive.numberSize, ease });

//     gsap.to(".progress-sub-foreground", {
//       width:
//         responsive.progressWidth * (1 / order.current.length) * (active + 1),
//       ease,
//     });

//     gsap.to(`.card-${active}`, {
//       x: 0,
//       y: 0,
//       ease,
//       width: window.innerWidth,
//       height: window.innerHeight,
//       borderRadius: 0,
//       onComplete: () => {
//         // Calculate position for the previous card (will be rightmost)
//         let totalWidth = responsive.offsetLeft;
//         rest.forEach((_, idx) => {
//           if (idx < rest.length - 1) {
//             const dims = getCardDimensions(rest[idx], idx);
//             totalWidth += dims.width + responsive.gap;
//           }
//         });

//         const prvCardDims = getCardDimensions(prv, rest.length - 1);

//         gsap.set(`.card-${prv}`, {
//           x: totalWidth,
//           y: responsive.offsetTop + prvCardDims.yOffset,
//           width: prvCardDims.width,
//           height: prvCardDims.height,
//           zIndex: 30,
//           borderRadius: 10,
//           scale: 1,
//         });

//         gsap.set(`.card-content-${prv}`, {
//           x: totalWidth,
//           y:
//             responsive.offsetTop +
//             prvCardDims.yOffset +
//             prvCardDims.height -
//             100,
//           opacity: 1,
//           zIndex: 40,
//         });
//         gsap.set(`.slide-item-${prv}`, {
//           x: rest.length * responsive.numberSize,
//         });

//         gsap.set(detailsInactive, { opacity: 0 });
//         setIsAnimating(false);
//       },
//     });

//     let currentX = responsive.offsetLeft;
//     rest.forEach((i, index) => {
//       if (i !== prv) {
//         const cardDims = getCardDimensions(i, index);
//         // The middle card is at index 1 in the rest array (position 1 visually)
//         const isMiddleCard = index === 1;
//         const zIndex = isMiddleCard ? 35 : 30;

//         gsap.set(`.card-${i}`, { zIndex: zIndex });
//         gsap.to(`.card-${i}`, {
//           x: currentX,
//           y: responsive.offsetTop + cardDims.yOffset,
//           width: cardDims.width,
//           height: cardDims.height,
//           ease,
//           delay: 0.1 * (index + 1),
//         });

//         gsap.to(`.card-content-${i}`, {
//           x: currentX,
//           y: responsive.offsetTop + cardDims.yOffset + cardDims.height - 100,
//           opacity: 1,
//           zIndex: isMiddleCard ? 45 : 40, // Higher z-index for middle card text
//           ease,
//           delay: 0.1 * (index + 1),
//         });
//         gsap.to(`.slide-item-${i}`, {
//           x: (index + 1) * responsive.numberSize,
//           ease,
//         });

//         currentX += cardDims.width + responsive.gap;
//       }
//     });
//   };

//   const isMobile = dimensions.width <= 768;
//   const isTablet = dimensions.width <= 1024 && dimensions.width > 768;

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-screen bg-gray-900 text-white overflow-hidden relative font-sans"
//       onMouseEnter={stopAutoPlay} // pause when hovering
//       onMouseLeave={startAutoPlay} // resume when leaving
//     >
//       <Header />
//       <style jsx>{`
//         @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500&display=swap");

//         .card {
//           position: absolute;
//           left: 0;
//           top: 0;
//           background-position: center;
//           background-size: cover;
//           box-shadow: 6px 6px 10px 2px rgba(0, 0, 0, 0.6);
//         }

//         .card-content {
//           position: absolute;
//           left: 0;
//           top: 0;
//           color: rgba(255, 255, 255, 0.87);
//           padding-left: ${isMobile ? "12px" : "16px"};
//         }

//         .content-place {
//           margin-top: 6px;
//           font-size: ${isMobile ? "11px" : "13px"};
//           font-weight: 500;
//         }

//         .content-title-1,
//         .content-title-2 {
//           margin-top: 50px;
//           font-weight: 600;
//           font-size: ${isMobile ? "16px" : isTablet ? "18px" : "20px"};
//           /*  font-family: "Oswald", sans-serif;*/
//         }

//         .content-start {
//           width: ${isMobile ? "20px" : "30px"};
//           height: ${isMobile ? "3px" : "5px"};
//           border-radius: 99px;
//           background-color: rgba(255, 255, 255, 0.87);
//         }

//         .details {
//           z-index: 22;
//           position: absolute;
//           top: ${isMobile ? "180px" : isTablet ? "150px" : "250px"};
//           left: ${isMobile ? "10px" : isTablet ? "10px" : "10px"};
//           right: ${isMobile ? "20px" : "auto"};
//         }

//         .place-box {
//           height: ${isMobile ? "30px" : "46px"};
//           overflow: hidden;
//         }

//         .place-box .text {
//           padding-top: ${isMobile ? "10px" : "16px"};
//           font-size: ${isMobile ? "14px" : "20px"};
//           position: relative;
//         }
//         /*
//         .place-box .text:before {
//           top: 0;
//           left: 0;
//           position: absolute;
//           content: "";
//           width: ${isMobile ? "20px" : "30px"};
//           height: ${isMobile ? "3px" : "4px"};
//           border-radius: 99px;
//           background-color: white;
//         }
// */
//         .title-1 {
//           font-weight: 600;
//           font-size: ${isMobile ? "20px" : isTablet ? "28px" : "40px"};
//           /*font-family: "Oswald", sans-serif;*/
//         }
//         .title-2 {
//           font-weight: 600;
//           font-size: ${isMobile ? "25px" : isTablet ? "35px" : "55px"};
//           /*font-family: "Oswald", sans-serif;*/
//         }

//         .title-box-1 {
//           height: ${isMobile ? "25px" : isTablet ? "40px" : "50px"};
//           overflow: hidden;
//         }
//         .title-box-2 {
//           height: ${isMobile ? "40px" : isTablet ? "60px" : "70px"};
//           overflow: hidden;
//           margin-bottom: 30px;
//         }

//         .desc {
//           margin-top: 16px;
//           width: ${isMobile ? "100%" : isTablet ? "400px" : "500px"};
//           font-size: ${isMobile ? "13px" : "16px"};
//           line-height: 1.5;
//         }

//         .cta {
//           width: ${isMobile ? "100%" : isTablet ? "400px" : "500px"};
//           margin-top: 24px;
//           display: flex;
//           align-items: center;
//           flex-wrap: ${isMobile ? "wrap" : "nowrap"};
//           gap: ${isMobile ? "12px" : "16px"};
//         }

//         .bookmark {
//           border: none;
//           background-color: #ecad29;
//           width: ${isMobile ? "32px" : "36px"};
//           height: ${isMobile ? "32px" : "36px"};
//           border-radius: 99px;
//           color: white;
//           display: grid;
//           place-items: center;
//           flex-shrink: 0;
//         }

//         .bookmark svg {
//           width: ${isMobile ? "16px" : "20px"};
//           height: ${isMobile ? "16px" : "20px"};
//         }

//         .discover {
//           border: 1px solid #ffffff;
//           background-color: transparent;
//           height: ${isMobile ? "32px" : "36px"};
//           border-radius: 99px;
//           color: #ffffff;
//           padding: ${isMobile ? "4px 16px" : "4px 24px"};
//           font-size: ${isMobile ? "11px" : "12px"};
//           text-transform: uppercase;
//           white-space: nowrap;
//         }

//         nav {
//           position: fixed;
//           left: 0;
//           top: 0;
//           right: 0;
//           z-index: 50;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: ${isMobile ? "16px 20px" : "20px 36px"};
//           font-weight: 500;
//         }

//         nav svg {
//           width: ${isMobile ? "16px" : "20px"};
//           height: ${isMobile ? "16px" : "20px"};
//         }

//         .nav-left {
//           display: inline-flex;
//           align-items: center;
//           text-transform: uppercase;
//           font-size: ${isMobile ? "12px" : "14px"};
//           gap: ${isMobile ? "6px" : "10px"};
//         }

//         .nav-right {
//           display: ${isMobile ? "none" : "inline-flex"};
//           align-items: center;
//           text-transform: uppercase;
//           font-size: ${isMobile ? "12px" : "14px"};
//           gap: ${isMobile ? "16px" : "24px"};
//         }

//         .active {
//           position: relative;
//         }

//         .active:after {
//           bottom: -8px;
//           left: 0;
//           right: 0;
//           position: absolute;
//           content: "";
//           height: 3px;
//           border-radius: 99px;
//           background-color: #ecad29;
//         }

//         .pagination {
//           position: absolute;
//           left: 0px;
//           top: 0px;
//           display: inline-flex;
//           align-items: center;
//           flex-wrap: ${isMobile ? "wrap" : "nowrap"};
//           gap: ${isMobile ? "10px" : "0px"};
//         }

//         .arrow {
//           z-index: 60;
//           width: ${isMobile ? "40px" : "50px"};
//           height: ${isMobile ? "40px" : "50px"};
//           border-radius: 999px;
//           border: 2px solid rgba(255, 255, 255, 0.33);
//           display: grid;
//           place-items: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }

//         .arrow:hover {
//           /*border-color: #ecad29;*/
//           border-color: #00ff01;
//           background-color: rgba(236, 173, 41, 0.1);
//         }

//         .arrow:nth-child(2) {
//           margin-left: ${isMobile ? "0px" : "20px"};
//         }

//         .arrow svg {
//           width: ${isMobile ? "18px" : "24px"};
//           height: ${isMobile ? "18px" : "24px"};
//           stroke-width: 2;
//           color: rgba(255, 255, 255, 0.6);
//         }

//         .progress-sub-container {
//           margin-left: ${isMobile ? "0px" : "24px"};
//           z-index: 60;
//           width: ${isMobile ? "200px" : isTablet ? "350px" : "400px"};
//           height: ${isMobile ? "40px" : "50px"};
//           display: flex;
//           align-items: center;
//           order: ${isMobile ? "3" : "0"};
//           disply: none;
//           flex-basis: ${isMobile ? "100%" : "auto"};
//         }

//         .progress-sub-background {
//           width: ${isMobile ? "200px" : isTablet ? "350px" : "500px"};
//           height: 3px;
//           background-color: rgba(255, 255, 255, 0.2);
//         }

//         .progress-sub-foreground {
//           height: 3px;
//           background-color: #ecad29;
//         }

//         .slide-numbers {
//           width: ${isMobile ? "30px" : "50px"};
//           height: ${isMobile ? "40px" : "50px"};
//           overflow: hidden;
//           z-index: 60;
//           position: relative;
//           flex-shrink: 0;
//         }

//         .slide-item {
//           width: ${isMobile ? "30px" : "50px"};
//           height: ${isMobile ? "40px" : "50px"};
//           position: absolute;
//           color: white;
//           top: 0;
//           left: 0;
//           display: grid;
//           place-items: center;
//           font-size: ${isMobile ? "20px" : "32px"};
//           font-weight: bold;
//         }

//         @media (max-width: 768px) {
//           .pagination {
//             gap: 10px;
//           }

//           .pagination > div:first-child,
//           .pagination > div:nth-child(2) {
//             order: 1;
//           }

//           .pagination > div:nth-child(4) {
//             order: 2;
//           }
//         }
//       `}</style>

//       {/* Navigation */}
//       {/* Removed navigation bar */}

//       {/* Cards */}
//       <div id="demo">
//         {data.map((item, index) => (
//           <div key={index}>
//             <div
//               className={`card card-${index}`}
//               style={{ backgroundImage: `url(${item.image})` }}
//             />
//             <div className={`card-content card-content-${index}`}>
//               {/* <div className="content-start"></div> */}
//               {/* <div className="content-place">{item.place}</div> */}
//               {/* <div className="content-title-1">{item.title}</div> */}
//               <div className="content-title-2">{item.title3}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Details sections */}
//       <div className="details details-even">
//         {/* <div className="place-box">
//           <div className="text">{data[order.current[0]]?.place}</div>
//         </div> */}
//         <div className="title-box-1">
//           <h1 className="title-1">
//             <span
//               style={{
//                 background:
//                   "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               {data[order.current[0]]?.title.split(" ")[0]}
//             </span>{" "}
//             {data[order.current[0]]?.title.split(" ").slice(1).join(" ")}
//           </h1>
//         </div>
//         <div className="title-box-2">
//           <h1 className="title-2">{data[order.current[0]]?.title2}</h1>
//         </div>
//         <div className="btns flex gap-5">
//           <button
//             style={{
//               background:
//                 "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
//             }}
//             className="font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg max-w-[250px]"
//           >
//             Explore What We Do
//           </button>
//           <button className="bg-white font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg max-w-[180px]">
//             EnquireNow
//           </button>
//         </div>
//         {/* <div className="desc">{data[order.current[0]]?.description}</div> */}
//       </div>

//       <div className="details details-odd">
//         {/* <div className="place-box">
//           <div className="text">{data[order.current[0]]?.place}</div>
//         </div> */}
//         <div className="title-box-1">
//           <h1 className="title-1">
//             <span
//               style={{
//                 background:
//                   "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               {data[order.current[0]]?.title.split(" ")[0]}
//             </span>{" "}
//             {data[order.current[0]]?.title.split(" ").slice(1).join(" ")}
//           </h1>
//         </div>
//         <div className="title-box-2">
//           <h1 className="title-2">{data[order.current[0]]?.title2}</h1>
//         </div>
//         <div className="btns flex gap-5">
//           <button
//             style={{
//               background:
//                 "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
//             }}
//             className=" font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg max-w-[250px]"
//           >
//             Explore What We Do
//           </button>
//           <button className="bg-white font-bold text-sm md:text-base py-2 px-6 md:py-3 md:px-8 rounded-full transition-transform hover:scale-105 text-bg max-w-[180px]">
//             EnquireNow
//           </button>
//         </div>
//         {/* <div className="desc">{data[order.current[0]]?.description}</div> */}
//       </div>

//       {/* Pagination */}
//       <div className="pagination">
//         <div className="arrow arrow-left" onClick={prevSlide}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 19.5L8.25 12l7.5-7.5"
//             />
//           </svg>
//         </div>
//         <div className="min-w-[15px] px-3 text-xl">
//           {/* {data.map((_, index) => (
//             <div key={index} className={`slide-item slide-item-${index}`}>
//               {index + 1}
//             </div>
//           ))} */}
//           Unlock the Services
//         </div>
//         <div className="arrow arrow-right" onClick={nextSlide}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 4.5l7.5 7.5-7.5 7.5"
//             />
//           </svg>
//         </div>
//         {/* <div className="progress-sub-container">
//           <div className="progress-sub-background">
//             <div className="progress-sub-foreground"></div>
//           </div>
//         </div> */}
//         {/* <div className="slide-numbers">
//           {data.map((_, index) => (
//             <div key={index} className={`slide-item slide-item-${index}`}>
//               {index + 1}
//             </div>
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default HeroCarousel;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import CarouselImg1 from "/carousel/carousel-1.png";
import CarouselImg2 from "/carousel/carousel-2.png";
import CarouselImg3 from "/carousel/carousel-3.png";
import CarouselImg4 from "/carousel/carousel-4.png";

const slides = [
  { image: CarouselImg1, title: "Events", link: "/events" },
  { image: CarouselImg3, title: "Coaching", link: "/coaching" },
  { image: CarouselImg2, title: "Merchandise", link: "/equipment" },
  { image: CarouselImg4, title: "Infrastructure", link: "/infra" },
];

const HeroCarousel = () => {
  const swiperRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  const [activeIndex, setActiveIndex] = useState(2);

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

    if (screenWidth < 480) {
      return { width: Math.min(150, screenWidth * 0.7), height: 200 };
    }
    if (screenWidth < 640) {
      return { width: Math.min(220, screenWidth * 0.65), height: 300 };
    }
    if (screenWidth < 768) {
      return { width: 240, height: 320 };
    }
    if (screenWidth < 1024) {
      return { width: 260, height: 340 };
    }
    return { width: 230, height: 300 };
  };

  const slideSize = getSlideSize();

  return (
    <div className="flex justify-center w-full px-4">
      <div className="relative w-full p-4 max-w-6xl">
        <style jsx>{`
          .hero-carousel {
            width: 100%;
            padding: 20px 0;
            overflow: visible;
          }

          .hero-carousel .swiper-wrapper {
            align-items: center;
            display: flex;
            /*justify-content: center;*/ /* ✅ keeps slides centered on mobile */
            transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .hero-carousel .swiper-slide {
            background-position: center;
            background-size: cover;
            width: ${slideSize.width}px;
            height: ${slideSize.height}px;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            opacity: 0.6;
            transform: scale(0.85);
           /* margin: 0 0 0 -10px !important;*/
          }

          /* Center slide (active) */
          .hero-carousel .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
            z-index: 3;
          }

          /* Adjacent slides */
          .hero-carousel .swiper-slide-prev,
          .hero-carousel .swiper-slide-next {
            opacity: 1;
            transform: scale(0.9);
            z-index: 2;
          }
           

          /* Hide slides that are too far */
          .hero-carousel
            .swiper-slide:not(.swiper-slide-prev):not(.swiper-slide-active):not(
              .swiper-slide-next
            ) {
            opacity: 0;
            transform: scale(0.8);
          }

          .hero-carousel .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
           /* border: 2px solid rgba(76, 175, 80, 0.8);*/
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
              0 4px 16px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(76, 175, 80, 0.3);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            z-index: 1;
          }

          .hero-carousel .swiper-slide-active img {
           /* border: 6px solid rgba(76, 175, 80, 1);*/ /* ✅ thicker border */
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4),
              0 8px 24px rgba(0, 0, 0, 0.3), 0 0 0 4px rgba(76, 175, 80, 0.4),
              0 0 0 6px rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }

          .hero-carousel .swiper-slide-prev img,
          .hero-carousel .swiper-slide-next img {
           /* border: 3px solid rgba(76, 175, 80, 0.6);*/
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
              0 4px 16px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(76, 175, 80, 0.2);
          }

          .slide-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
            color: white;
            padding: ${
              windowSize.width < 480 ? "30px 5px 15px" : "40px 10px 20px"
            };
            border-radius: 0 0 16px 16px;
            /* text-align: center;*/
            z-index: 2;
            opacity: 1;
            transition: all 0.4s ease;
          }

          .slide-title {
            font-size: ${
              windowSize.width < 480
                ? "16px"
                : windowSize.width < 640
                ? "18px"
                : "22px"
            };
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: ${windowSize.width < 480 ? "1px" : "2px"};
            margin: 0;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
            }
            @media (max-width: 1008px) {
              .hero-carousel .swiper-slide {
                margin: 0 0 0 -30px !important;
              }
            }
          }
        `}</style>
        <div className="relative w-full p-4 max-w-6xl">
          <Swiper
            ref={swiperRef}
            grabCursor={true}
            // centeredSlides={true}
            slidesPerView="auto"
            // centeredSlidesBounds={true}
            spaceBetween={0} // ✅ reduced base spacing
            loop={true}
            speed={600}
            initialSlide={2}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="hero-carousel"
            onSwiper={(swiper) => {
              if (swiperRef.current) {
                swiperRef.current.swiper = swiper;
                swiper.slideToLoop(activeIndex, 0);
              }
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              320: {
                spaceBetween: -45, // ✅ closer on very small screens
              },
              480: {
                spaceBetween: 10,
              },
              640: {
                spaceBetween: 12,
              },
              768: {
                spaceBetween: 15,
              },
              1024: {
                spaceBetween: -70, // ✅ reasonable on large screens
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={`${index}-${windowSize.width}`}>
                <Link
                  to={slide.link}
                  className="relative w-full h-full block group overflow-hidden rounded-2xl"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="slide-content">
                    {/* <h3
                      className="slide-title font-Race "
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      {slide.title}
                    </h3> */}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ navigation section centered under carousel */}
          <div
            className="relative flex justify-center lg:justify-around "
            style={{
              paddingBottom: "8px",
            }}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-4 px-4 py-2 rounded-xl ">
              <button className="swiper-button-prev-custom group cursor-pointer p-2 sm:p-3 rounded-full  border border-white border-opacity-30 transition-all duration-300 hover:scale-110 hover:bg-opacity-30 active:scale-95 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <span className="text-white font-bold text-xs sm:text-sm md:text-[22px] tracking-wider px-2 whitespace-nowrap">
                Unlock the Services
              </span>

              <button className="swiper-button-next-custom group cursor-pointer p-2 sm:p-3 rounded-full  border border-white border-opacity-30 transition-all duration-300 hover:scale-110 hover:bg-opacity-30 active:scale-95 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
