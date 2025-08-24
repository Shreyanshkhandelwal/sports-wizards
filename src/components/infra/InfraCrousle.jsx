// import React, { useEffect, useState } from "react";

// // Mock images for demonstration
// const slides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=500&fit=crop",
//     title: "Events",
//     heading: "Event Management",
//     sections: [
//       {
//         title: "Corporate Events",
//         content:
//           "Professional corporate gatherings, conferences, and team building activities. Complete event planning and execution services.",
//       },
//       {
//         title: "Social Gatherings",
//         content:
//           "Memorable social events including parties, celebrations, and community gatherings with full-service coordination.",
//       },
//       {
//         title: "Virtual Events",
//         content:
//           "Modern virtual and hybrid event solutions with cutting-edge technology and seamless user experience.",
//       },
//     ],
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
//     title: "Coaching",
//     heading: "Professional Coaching",
//     sections: [
//       {
//         title: "Life Coaching",
//         content:
//           "Personal development and goal achievement through structured coaching sessions and mentoring programs.",
//       },
//       {
//         title: "Business Coaching",
//         content:
//           "Strategic business guidance, leadership development, and performance optimization for entrepreneurs.",
//       },
//       {
//         title: "Career Coaching",
//         content:
//           "Career transition support, interview preparation, and professional growth strategies for success.",
//       },
//     ],
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=500&fit=crop",
//     title: "Training",
//     heading: "Skills Development",
//     sections: [
//       {
//         title: "Technical Training",
//         content:
//           "Comprehensive technical skill development programs with hands-on learning and certification paths.",
//       },
//       {
//         title: "Soft Skills",
//         content:
//           "Communication, leadership, and interpersonal skills training for professional and personal growth.",
//       },
//       {
//         title: "Online Courses",
//         content:
//           "Flexible online learning platforms with interactive content and progress tracking systems.",
//       },
//     ],
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop",
//     title: "Merchandise",
//     heading: "Premium Products",
//     sections: [
//       {
//         title: "Branded Apparel",
//         content:
//           "High-quality branded clothing and accessories with custom designs and premium materials.",
//       },
//       {
//         title: "Tech Accessories",
//         content:
//           "Modern technology accessories and gadgets with innovative features and sleek designs.",
//       },
//       {
//         title: "Custom Items",
//         content:
//           "Personalized merchandise and promotional items tailored to your brand and requirements.",
//       },
//     ],
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
//     title: "Consulting",
//     heading: "Expert Consultation",
//     sections: [
//       {
//         title: "Strategy Consulting",
//         content:
//           "Strategic business planning, market analysis, and growth strategies for sustainable success.",
//       },
//       {
//         title: "Digital Transformation",
//         content:
//           "Technology integration, digital workflow optimization, and modern business process solutions.",
//       },
//       {
//         title: "Performance Optimization",
//         content:
//           "Operational efficiency improvements, cost reduction strategies, and performance metrics analysis.",
//       },
//     ],
//   },
// ];

// const ImprovedCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(2); // Start from center (index 2)
//   const [expandedSections, setExpandedSections] = useState({});
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== "undefined" ? window.innerWidth : 1200,
//     height: typeof window !== "undefined" ? window.innerHeight : 800,
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Auto-loop functionality
//   //   useEffect(() => {
//   //     const interval = setInterval(() => {
//   //       setCurrentSlide((prev) => (prev + 1) % slides.length);
//   //     }, 4000);

//   //     return () => clearInterval(interval);
//   //   }, []);

//   const getSlideSize = () => {
//     const screenWidth = windowSize.width;

//     if (screenWidth < 320) return { width: 140, height: 180 };
//     if (screenWidth < 400) return { width: 160, height: 200 };
//     if (screenWidth < 520) return { width: 180, height: 225 };
//     if (screenWidth < 640) return { width: 200, height: 250 };
//     if (screenWidth < 768) return { width: 240, height: 300 };
//     return { width: 280, height: 350 };
//   };

//   const slideSize = getSlideSize();

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const toggleSection = (slideIndex, sectionIndex) => {
//     const key = `${slideIndex}-${sectionIndex}`;
//     setExpandedSections((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   const getSlidePosition = (index) => {
//     const diff = index - currentSlide;
//     const totalSlides = slides.length;

//     // Handle wrapping for smooth infinite loop
//     let normalizedDiff = diff;
//     if (diff > totalSlides / 2) {
//       normalizedDiff = diff - totalSlides;
//     } else if (diff < -totalSlides / 2) {
//       normalizedDiff = diff + totalSlides;
//     }

//     return normalizedDiff;
//   };

//   const getSlideStyle = (index) => {
//     const position = getSlidePosition(index);
//     const isCenter = position === 0;
//     const isVisible = Math.abs(position) <= 2;

//     if (!isVisible) {
//       return {
//         opacity: 0,
//         transform: `translateX(${
//           position * 100
//         }px) scale(0.6) translateZ(-200px)`,
//         zIndex: 0,
//         pointerEvents: "none",
//       };
//     }

//     const scale = isCenter ? 1 : Math.max(0.7, 1 - Math.abs(position) * 0.15);
//     const translateX = position * (slideSize.width * 0.8);
//     const translateZ = isCenter ? 0 : -Math.abs(position) * 100;
//     const opacity = Math.max(0.4, 1 - Math.abs(position) * 0.3);

//     return {
//       transform: `translateX(${translateX}px) scale(${scale}) translateZ(${translateZ}px) rotateY(${
//         position * 15
//       }deg)`,
//       opacity: opacity,
//       zIndex: isCenter ? 10 : 5 - Math.abs(position),
//       transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
//     };
//   };

//   return (
//     <div className="relative w-full min-h-[500px] bg-gradient-to-br from-gray-900 to-black overflow-hidden py-12">
//       <style jsx>{`
//         .carousel-container {
//           perspective: 1200px;
//           perspective-origin: center center;
//         }

//         .slide-card {
//           transform-style: preserve-3d;
//           cursor: pointer;
//           transition: transform 0.6s ease;
//         }

//         .slide-card:hover .card-inner {
//           transform: rotateY(180deg);
//         }

//         .card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transform-style: preserve-3d;
//           transition: transform 0.6s ease;
//         }

//         .slide-front,
//         .slide-back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           backface-visibility: hidden;
//           border-radius: 16px;
//           -webkit-backface-visibility: hidden;
//         }

//         .slide-back {
//           transform: rotateY(180deg);
//           background: rgba(0, 0, 0, 0.95);
//           display: flex;
//           flex-direction: column;
//           padding: 20px;
//           text-align: left;
//           border: 2px solid #10b981;
//           overflow-y: auto;
//           scrollbar-width: none;
//           -ms-overflow-style: none;
//         }

//         .slide-back::-webkit-scrollbar {
//           display: none;
//         }

//         .slide-back h2 {
//           color: white;
//           font-size: ${windowSize.width < 480 ? "16px" : "20px"};
//           font-weight: bold;
//           margin-bottom: 20px;
//           text-align: center;
//           padding-bottom: 10px;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .section-item {
//           margin-bottom: 8px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 8px;
//           overflow: hidden;
//           background: rgba(255, 255, 255, 0.05);
//         }

//         .section-header {
//           padding: 12px 16px;
//           background: rgba(255, 255, 255, 0.1);
//           cursor: pointer;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           transition: background 0.2s ease;
//         }

//         .section-header:hover {
//           background: rgba(255, 255, 255, 0.15);
//         }

//         .section-title {
//           color: white;
//           font-size: ${windowSize.width < 480 ? "13px" : "14px"};
//           font-weight: 500;
//           margin: 0;
//         }

//         .section-content {
//           padding: 0 16px;
//           color: white;
//           font-size: ${windowSize.width < 480 ? "11px" : "12px"};
//           line-height: 1.5;
//           max-height: 0;
//           overflow: hidden;
//           transition: all 0.3s ease;
//           opacity: 0;
//         }

//         .section-content.expanded {
//           max-height: 200px;
//           padding: 12px 16px;
//           opacity: 1;
//         }

//         .chevron {
//           width: 16px;
//           height: 16px;
//           stroke: white;
//           transition: transform 0.3s ease;
//         }

//         .chevron.rotated {
//           transform: rotate(180deg);
//         }

//         .hover-indicator {
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           background: rgba(255, 255, 255, 0.2);
//           backdrop-filter: blur(10px);
//           border-radius: 50%;
//           width: 30px;
//           height: 30px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           opacity: 0;
//           transform: scale(0.8);
//           transition: all 0.3s ease;
//           z-index: 5;
//         }

//         .slide-card:hover .hover-indicator {
//           opacity: 1;
//           transform: scale(1);
//         }
//       `}</style>

//       <div
//         className="carousel-container relative flex justify-center items-center"
//         style={{ height: `${slideSize.height + 100}px` }}
//       >
//         {slides.map((slide, index) => {
//           const position = getSlidePosition(index);
//           const isVisible = Math.abs(position) <= 2;

//           if (!isVisible) return null;

//           return (
//             <div
//               key={index}
//               className="slide-card absolute"
//               style={{
//                 ...getSlideStyle(index),
//                 width: `${slideSize.width}px`,
//                 height: `${slideSize.height}px`,
//               }}
//               onClick={() => setCurrentSlide(index)}
//             >
//               <div className="card-inner">
//                 <div className="slide-front">
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className="w-full h-full object-cover rounded-2xl shadow-2xl"
//                     style={{
//                       boxShadow:
//                         position === 0
//                           ? "0 25px 50px rgba(0, 0, 0, 0.6)"
//                           : "0 15px 30px rgba(0, 0, 0, 0.4)",
//                     }}
//                   />
//                   <div className="hover-indicator">
//                     <svg
//                       width="12"
//                       height="12"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="white"
//                       strokeWidth="2"
//                     >
//                       <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
//                     </svg>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
//                     <h3 className="text-white font-bold text-lg tracking-wider text-center">
//                       {slide.title}
//                     </h3>
//                   </div>
//                 </div>

//                 <div className="slide-back">
//                   <h2>{slide.heading}</h2>
//                   <div className="sections-container">
//                     {slide.sections.map((section, sectionIndex) => {
//                       const key = `${index}-${sectionIndex}`;
//                       const isExpanded = expandedSections[key];

//                       return (
//                         <div key={sectionIndex} className="section-item">
//                           <div
//                             className="section-header"
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               toggleSection(index, sectionIndex);
//                             }}
//                           >
//                             <h3 className="section-title">{section.title}</h3>
//                             <svg
//                               className={`chevron ${
//                                 isExpanded ? "rotated" : ""
//                               }`}
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M19 9l-7 7-7-7"
//                               />
//                             </svg>
//                           </div>
//                           <div
//                             className={`section-content ${
//                               isExpanded ? "expanded" : ""
//                             }`}
//                           >
//                             {section.content}
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Navigation */}
//       <div className="flex items-center justify-center gap-6 mt-8">
//         <button
//           onClick={prevSlide}
//           className="group cursor-pointer p-3 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2.5}
//             stroke="currentColor"
//             className="w-5 h-5 text-white group-hover:text-white/90"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 19.5L8.25 12l7.5-7.5"
//             />
//           </svg>
//         </button>

//         <div className="text-center">
//           {/* <span className="text-white/90 font-bold text-lg tracking-wider px-4">
//             Unlock the Services
//           </span> */}
//           <div className="flex justify-center gap-2 mt-2">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === currentSlide
//                     ? "bg-white scale-125"
//                     : "bg-white/40 hover:bg-white/70"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={nextSlide}
//           className="group cursor-pointer p-3 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2.5}
//             stroke="currentColor"
//             className="w-5 h-5 text-white group-hover:text-white/90"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 4.5l7.5 7.5-7.5 7.5"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImprovedCarousel;

import React, { useEffect, useRef, useState } from "react";

// Mock images for demonstration
const slides = [
  {
    image: "/coaching.jpg",
    title: "Basketball",
    heading: "Event Management",
    sections: [
      {
        title: "Corporate Events",
        content:
          "Professional corporate gatherings, conferences, and team building activities. Complete event planning and execution services.",
      },
      {
        title: "Social Gatherings",
        content:
          "Memorable social events including parties, celebrations, and community gatherings with full-service coordination.",
      },
      {
        title: "Virtual Events",
        content:
          "Modern virtual and hybrid event solutions with cutting-edge technology and seamless user experience.",
      },
    ],
  },
  {
    image: "/cricket-court.png",
    title: "Pickleball",
    heading: "Professional Coaching",
    sections: [
      {
        title: "Life Coaching",
        content:
          "Personal development and goal achievement through structured coaching sessions and mentoring programs.",
      },
      {
        title: "Business Coaching",
        content:
          "Strategic business guidance, leadership development, and performance optimization for entrepreneurs.",
      },
      {
        title: "Career Coaching",
        content:
          "Career transition support, interview preparation, and professional growth strategies for success.",
      },
    ],
  },
  {
    image: "/gym.jpg",
    title: "Gym",
    heading: "Skills Development",
    sections: [
      {
        title: "Technical Training",
        content:
          "Comprehensive technical skill development programs with hands-on learning and certification paths.",
      },
      {
        title: "Soft Skills",
        content:
          "Communication, leadership, and interpersonal skills training for professional and personal growth.",
      },
      {
        title: "Online Courses",
        content:
          "Flexible online learning platforms with interactive content and progress tracking systems.",
      },
    ],
  },
  {
    image: "/badminton-court.png",
    title: "Badminton",
    heading: "Premium Products",
    sections: [
      {
        title: "Branded Apparel",
        content:
          "High-quality branded clothing and accessories with custom designs and premium materials.",
      },
      {
        title: "Tech Accessories",
        content:
          "Modern technology accessories and gadgets with innovative features and sleek designs.",
      },
      {
        title: "Custom Items",
        content:
          "Personalized merchandise and promotional items tailored to your brand and requirements.",
      },
    ],
  },
  {
    image: "/soccer-field.png",
    title: "Soccer",
    heading: "Expert Consultation",
    sections: [
      {
        title: "Strategy Consulting",
        content:
          "Strategic business planning, market analysis, and growth strategies for sustainable success.",
      },
      {
        title: "Digital Transformation",
        content:
          "Technology integration, digital workflow optimization, and modern business process solutions.",
      },
      {
        title: "Performance Optimization",
        content:
          "Operational efficiency improvements, cost reduction strategies, and performance metrics analysis.",
      },
    ],
  },
];

const ImprovedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(2); // Start from center (index 2)
  const [expandedSections, setExpandedSections] = useState({});
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-loop functionality
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((prev) => (prev + 1) % slides.length);
  //     }, 4000);

  //     return () => clearInterval(interval);
  //   }, []);

  const getSlideSize = () => {
    const screenWidth = windowSize.width;

    if (screenWidth < 320) return { width: 160, height: 240 };
    if (screenWidth < 400) return { width: 180, height: 280 };
    if (screenWidth < 520) return { width: 200, height: 320 };
    if (screenWidth < 640) return { width: 220, height: 360 };
    if (screenWidth < 768) return { width: 260, height: 400 };
    return { width: 300, height: 450 };
  };

  const slideSize = getSlideSize();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleSection = (slideIndex, sectionIndex) => {
    const key = `${slideIndex}-${sectionIndex}`;
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getSlidePosition = (index) => {
    const diff = index - currentSlide;
    const totalSlides = slides.length;

    // Handle wrapping for smooth infinite loop
    let normalizedDiff = diff;
    if (diff > totalSlides / 2) {
      normalizedDiff = diff - totalSlides;
    } else if (diff < -totalSlides / 2) {
      normalizedDiff = diff + totalSlides;
    }

    return normalizedDiff;
  };

  const getSlideStyle = (index) => {
    const position = getSlidePosition(index);
    const isCenter = position === 0;
    const isVisible = Math.abs(position) <= 2;

    if (!isVisible) {
      return {
        opacity: 0,
        transform: `translateX(${position * 100}px) scale(0.6)`,
        zIndex: 0,
        pointerEvents: "none",
      };
    }

    const scale = isCenter ? 1 : Math.max(0.85, 1 - Math.abs(position) * 0.1);
    const translateX = position * (slideSize.width * 0.8);
    // const opacity = Math.max(0.6, 1 - Math.abs(position) * 0.2);
    const opacity = 1;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity: opacity,
      zIndex: isCenter ? 10 : 5 - Math.abs(position),
      transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
    };
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          style={{ fontSize: "24px" }}
          className="bg-gradient-to-r from-teal-300 to-green-500 bg-clip-text text-transparent text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
        >
          Who We Are
        </h1>
        <div className="relative w-full min-h-[600px]  overflow-hidden py-12">
          <style jsx>{`
            .carousel-container {
              perspective: 1200px;
              perspective-origin: center center;
            }

            .slide-card {
              transform-style: preserve-3d;
              cursor: pointer;
              transition: transform 0.6s ease;
            }

            .slide-card:hover .card-inner {
              transform: rotateY(180deg);
            }

            .card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              transform-style: preserve-3d;
              transition: transform 0.6s ease;
            }

            .slide-front,
            .slide-back {
              position: absolute;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
              border-radius: 16px;
              -webkit-backface-visibility: hidden;
            }

            .slide-back {
              transform: rotateY(180deg);
              background: rgba(0, 0, 0, 0.95);
              display: flex;
              flex-direction: column;
              padding: 20px;
              text-align: left;
              border: 4px solid #10b981;
              overflow-y: auto;
              scrollbar-width: none;
              -ms-overflow-style: none;
            }

            .slide-back::-webkit-scrollbar {
              display: none;
            }

            .slide-back h2 {
              color: white;
              font-size: ${windowSize.width < 480 ? "16px" : "20px"};
              font-weight: bold;
              margin-bottom: 20px;
              text-align: center;
              padding-bottom: 10px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }

            .section-item {
              margin-bottom: 8px;
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 8px;
              overflow: hidden;
              background: rgba(255, 255, 255, 0.05);
            }

            .section-header {
              padding: 12px 16px;
              background: rgba(255, 255, 255, 0.1);
              cursor: pointer;
              display: flex;
              justify-content: space-between;
              align-items: center;
              transition: background 0.2s ease;
            }

            .section-header:hover {
              background: rgba(255, 255, 255, 0.15);
            }

            .section-title {
              color: white;
              font-size: ${windowSize.width < 480 ? "13px" : "14px"};
              font-weight: 500;
              margin: 0;
            }

            .section-content {
              padding: 0 16px;
              color: white;
              font-size: ${windowSize.width < 480 ? "11px" : "12px"};
              line-height: 1.5;
              max-height: 0;
              overflow: hidden;
              transition: all 0.3s ease;
              opacity: 0;
            }

            .section-content.expanded {
              max-height: 200px;
              padding: 12px 16px;
              opacity: 1;
            }

            .chevron {
              width: 16px;
              height: 16px;
              stroke: white;
              transition: transform 0.3s ease;
            }

            .chevron.rotated {
              transform: rotate(180deg);
            }

            .hover-indicator {
              position: absolute;
              top: 10px;
              right: 10px;
              background: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(10px);
              border-radius: 50%;
              width: 30px;
              height: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 0;
              transform: scale(0.8);
              transition: all 0.3s ease;
              z-index: 5;
            }

            .slide-card:hover .hover-indicator {
              opacity: 1;
              transform: scale(1);
            }
          `}</style>

          <div
            className="carousel-container relative flex justify-center items-center"
            style={{ height: `${slideSize.height + 120}px` }}
          >
            {slides.map((slide, index) => {
              const position = getSlidePosition(index);
              const isVisible = Math.abs(position) <= 2;

              if (!isVisible) return null;

              return (
                <div
                  key={index}
                  className="slide-card absolute"
                  style={{
                    ...getSlideStyle(index),
                    width: `${slideSize.width}px`,
                    height: `${slideSize.height}px`,
                  }}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="card-inner">
                    <div className="slide-front">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        style={{
                          boxShadow:
                            position === 0
                              ? "0 25px 50px rgba(0, 0, 0, 0.6)"
                              : "0 15px 30px rgba(0, 0, 0, 0.4)",
                        }}
                      />
                      <div className="hover-indicator">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                        >
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
                        <h3 className="text-white font-bold text-lg tracking-wider text-center">
                          {slide.title}
                        </h3>
                      </div>
                    </div>

                    <div className="slide-back relative">
                      <h2>{slide.heading}</h2>
                      <div className="sections-container">
                        {slide.sections.map((section, sectionIndex) => {
                          const key = `${index}-${sectionIndex}`;
                          const isExpanded = expandedSections[key];

                          return (
                            <div key={sectionIndex} className="section-item">
                              <div
                                className="section-header"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleSection(index, sectionIndex);
                                }}
                              >
                                <h3 className="section-title">
                                  {section.title}
                                </h3>
                                <svg
                                  className={`chevron ${
                                    isExpanded ? "rotated" : ""
                                  }`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>
                              <div
                                className={`section-content ${
                                  isExpanded ? "expanded" : ""
                                }`}
                              >
                                {section.content}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <a
                        href="#"
                        className=" text-center lg:absolute  lg:bottom-5 bg-gradient-to-r from-teal-300 via-green-400 to-green-500 font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full transition-transform hover:scale-105 text-black w-[88%]"
                      >
                        Build My Court Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="group cursor-pointer p-3 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 text-white group-hover:text-white/90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="group cursor-pointer p-3 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 text-white group-hover:text-white/90"
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
    </section>
  );
};

export default ImprovedCarousel;
