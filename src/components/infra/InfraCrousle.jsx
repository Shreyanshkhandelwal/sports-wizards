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

// import React, { useEffect, useRef, useState } from "react";

// // Mock images for demonstration
// const slides = [
//   {
//     image: "/cricket-court.png",
//     title: "Pickleball Courts",
//     heading: "Pickleball Courts",
//     sections: [
//       {
//         title: "Acrylic Surface",
//         content:
//           "Personal development and goal achievement through structured coaching sessions and mentoring programs.",
//       },
//       {
//         title: "PU Flooring",
//         content:
//           "Strategic business guidance, leadership development, and performance optimization for entrepreneurs.",
//       },
//       {
//         title: "PP Tiles",
//         content:
//           "Career transition support, interview preparation, and professional growth strategies for success.",
//       },
//       {
//         title: "Wooden Flooring",
//         content:
//           "Career transition support, interview preparation, and professional growth strategies for success.",
//       },
//     ],
//   },
//   {
//     image: "/coaching.jpg",
//     title: "Basketball Courts",
//     heading: "Basketball Courts",
//     sections: [
//       {
//         title: "Acrylic Surface",
//         content:
//           "Personal development and goal achievement through structured coaching sessions and mentoring programs.",
//       },
//       {
//         title: "PU Flooring",
//         content:
//           "Strategic business guidance, leadership development, and performance optimization for entrepreneurs.",
//       },
//       {
//         title: "PP Tiles",
//         content:
//           "Career transition support, interview preparation, and professional growth strategies for success.",
//       },
//       {
//         title: "Wooden Flooring",
//         content:
//           "Career transition support, interview preparation, and professional growth strategies for success.",
//       },
//     ],
//   },

//   {
//     image: "/e3.png",
//     title: "Cricket Nets",
//     heading: "Cricket Nets",
//     sections: [
//       {
//         title: "Artificial Glass",
//         content:
//           "Comprehensive technical skill development programs with hands-on learning and certification paths.",
//       },
//       {
//         title: "Turf",
//         content:
//           "Communication, leadership, and interpersonal skills training for professional and personal growth.",
//       },
//     ],
//   },
//   {
//     image: "/badminton-court.png",
//     title: "Badminton Courts",
//     heading: "Badminton Courts",
//     sections: [
//       {
//         title: "PVC Vinyl Flooring",
//         content:
//           "High-quality branded clothing and accessories with custom designs and premium materials.",
//       },
//       {
//         title: "Wooden Flooring",
//         content:
//           "Modern technology accessories and gadgets with innovative features and sleek designs.",
//       },
//       {
//         title: "PP Tiles",
//         content:
//           "Personalized merchandise and promotional items tailored to your brand and requirements.",
//       },
//     ],
//   },
//   {
//     image: "/soccer-field.png",
//     title: "Foorball Courts",
//     heading: "Foorball Courts",
//     sections: [
//       {
//         title: "Artificial Grass",
//         content:
//           "Strategic business planning, market analysis, and growth strategies for sustainable success.",
//       },
//       {
//         title: "Turf",
//         content:
//           "Technology integration, digital workflow optimization, and modern business process solutions.",
//       },
//     ],
//   },
//   {
//     image: "/equipment.jpg",
//     title: "Foorball Courts",
//     heading: "Foorball Courts",
//     sections: [
//       {
//         title: "Artificial Grass",
//         content:
//           "Strategic business planning, market analysis, and growth strategies for sustainable success.",
//       },
//       {
//         title: "Turf",
//         content:
//           "Technology integration, digital workflow optimization, and modern business process solutions.",
//       },
//     ],
//   },
//   {
//     image: "/spotlight1.jpg",
//     title: "Foorball Courts",
//     heading: "Foorball Courts",
//     sections: [
//       {
//         title: "Artificial Grass",
//         content:
//           "Strategic business planning, market analysis, and growth strategies for sustainable success.",
//       },
//       {
//         title: "Turf",
//         content:
//           "Technology integration, digital workflow optimization, and modern business process solutions.",
//       },
//     ],
//   },
// ];

// const ImprovedCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(2);
//   const [expandedSections, setExpandedSections] = useState({});
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== "undefined" ? window.innerWidth : 1200,
//     height: typeof window !== "undefined" ? window.innerHeight : 800,
//   });

//   const intervalRef = useRef(null);

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

//   const startAutoLoop = () => {
//     if (!intervalRef.current) {
//       intervalRef.current = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 3000);
//     }
//   };

//   const stopAutoLoop = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   useEffect(() => {
//     startAutoLoop();
//     return () => stopAutoLoop();
//   }, []);

//   const getSlideSize = () => {
//     const screenWidth = windowSize.width;

//     if (screenWidth < 320) return { width: 160, height: 240 };
//     if (screenWidth < 400) return { width: 180, height: 280 };
//     if (screenWidth < 520) return { width: 200, height: 320 };
//     if (screenWidth < 640) return { width: 220, height: 360 };
//     if (screenWidth < 768) return { width: 260, height: 400 };
//     return { width: 300, height: 450 };
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

//   // FIXED: Better circular distance calculation
//   const getSlidePosition = (index) => {
//     const diff = index - currentSlide;
//     const totalSlides = slides.length;

//     // Calculate shortest circular distance
//     let normalizedDiff = diff;

//     // If the difference is more than half the total, go the other way
//     if (normalizedDiff > totalSlides / 2) {
//       normalizedDiff = normalizedDiff - totalSlides;
//     } else if (normalizedDiff < -totalSlides / 2) {
//       normalizedDiff = normalizedDiff + totalSlides;
//     }

//     return normalizedDiff;
//   };

//   const getSlideStyle = (index) => {
//     const position = getSlidePosition(index);
//     const isCenter = position === 0;

//     // Show slides at positions -3 to 3 for smooth exit animations
//     const isVisible = Math.abs(position) <= 3;

//     // Main visible slides (positions -2, -1, 0, 1, 2)
//     const isMainVisible = Math.abs(position) <= 2;

//     if (!isVisible) {
//       return {
//         opacity: 0,
//         transform: `translateX(${position > 0 ? 2000 : -2000}px) scale(0.4)`,
//         zIndex: 0,
//         pointerEvents: "none",
//         transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
//       };
//     }

//     let scale, opacity, translateX;

//     if (isMainVisible) {
//       // Main 5 visible slides
//       scale = isCenter ? 1 : Math.max(0.85, 1 - Math.abs(position) * 0.1);
//       opacity = 1;
//       translateX = position * (slideSize.width * 0.8);
//     } else {
//       // Exit slides at position ±3 (smooth exit animation)
//       scale = 0.7;
//       opacity = 0.3;
//       translateX = position * (slideSize.width * 0.9); // Slightly more spread for exit
//     }

//     return {
//       transform: `translateX(${translateX}px) scale(${scale})`,
//       opacity: opacity,
//       zIndex: isCenter ? 10 : Math.max(0, 5 - Math.abs(position)),
//       transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
//       pointerEvents: isMainVisible ? "auto" : "none",
//     };
//   };

//   return (
//     <>
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1
//               style={{
//
//                 background:
//                   "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//               className="inline-block text-center text-base font-bold uppercase tracking-widest mb-6 underline underline-offset-8 decoration-green-500"
//             >
//               What WE Build
//             </h1>
//           </div>
//           <div className="relative w-full min-h-[600px]  overflow-hidden py-12">
//             <style jsx>{`
//               .carousel-container {
//                 perspective: 1200px;
//                 perspective-origin: center center;
//               }

//               .slide-card {
//                 transform-style: preserve-3d;
//                 cursor: pointer;
//                 transition: transform 0.6s ease;
//               }

//               .slide-card:hover .card-inner {
//                 transform: rotateY(180deg);
//               }

//               .card-inner {
//                 position: relative;
//                 width: 100%;
//                 height: 100%;
//                 transform-style: preserve-3d;
//                 transition: transform 0.6s ease;
//               }

//               .slide-front,
//               .slide-back {
//                 position: absolute;
//                 width: 100%;
//                 height: 100%;
//                 backface-visibility: hidden;
//                 border-radius: 16px;
//                 -webkit-backface-visibility: hidden;
//               }

//               .slide-back {
//                 transform: rotateY(180deg);
//                 background: rgba(0, 0, 0, 0.95);
//                 display: flex;
//                 flex-direction: column;
//                 padding: 20px;
//                 text-align: left;
//                 border: 4px solid #10b981;

//                 overflow-y: auto;
//                 scrollbar-width: none;
//                 -ms-overflow-style: none;
//               }

//               .slide-back::-webkit-scrollbar {
//                 display: none;
//               }

//               .slide-back h2 {
//                 color: white;
//                 font-size: ${windowSize.width < 480 ? "16px" : "20px"};
//                 font-weight: bold;
//                 margin-bottom: 20px;
//                 text-align: center;
//                 padding-bottom: 10px;
//                 border-bottom: 1px solid rgba(255, 255, 255, 0.2);
//               }

//               .section-item {
//                 margin-bottom: 8px;
//                 border: 1px solid rgba(255, 255, 255, 0.1);
//                 border-radius: 8px;
//                 overflow: hidden;
//                 background: rgba(255, 255, 255, 0.05);
//               }

//               .section-header {
//                 padding: 12px 16px;
//                 background: rgba(255, 255, 255, 0.1);
//                 cursor: pointer;
//                 display: flex;
//                 justify-content: space-between;
//                 align-items: center;
//                 transition: background 0.2s ease;
//               }

//               .section-header:hover {
//                 background: rgba(255, 255, 255, 0.15);
//               }

//               .section-title {
//                 color: white;
//                 font-size: ${windowSize.width < 480 ? "13px" : "14px"};
//                 font-weight: 500;
//                 margin: 0;
//               }

//               .section-content {
//                 padding: 0 16px;
//                 color: white;
//                 font-size: ${windowSize.width < 480 ? "11px" : "12px"};
//                 line-height: 1.5;
//                 max-height: 0;
//                 overflow: hidden;
//                 transition: all 0.3s ease;
//                 opacity: 0;
//               }

//               .section-content.expanded {
//                 max-height: 200px;
//                 padding: 12px 16px;
//                 opacity: 1;
//               }

//               .chevron {
//                 width: 16px;
//                 height: 16px;
//                 stroke: white;
//                 transition: transform 0.3s ease;
//               }

//               .chevron.rotated {
//                 transform: rotate(180deg);
//               }

//               .hover-indicator {
//                 position: absolute;
//                 top: 10px;
//                 right: 10px;
//                 background: rgba(255, 255, 255, 0.2);
//                 backdrop-filter: blur(10px);
//                 border-radius: 50%;
//                 width: 30px;
//                 height: 30px;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 opacity: 0;
//                 transform: scale(0.8);
//                 transition: all 0.3s ease;
//                 z-index: 5;
//               }

//               .slide-card:hover .hover-indicator {
//                 opacity: 1;
//                 transform: scale(1);
//               }
//             `}</style>

//             <div
//               className="carousel-container relative flex justify-center items-center"
//               style={{ height: `${slideSize.height + 120}px` }}
//               onMouseEnter={stopAutoLoop}
//               onMouseLeave={startAutoLoop}
//             >
//               {slides.map((slide, index) => {
//                 const position = getSlidePosition(index);
//                 const isVisible = Math.abs(position) <= 2;

//                 if (!isVisible) return null;

//                 return (
//                   <div
//                     key={index}
//                     className="slide-card absolute"
//                     style={{
//                       ...getSlideStyle(index),
//                       width: `${slideSize.width}px`,
//                       height: `${slideSize.height}px`,
//                     }}
//                     onClick={() => setCurrentSlide(index)}
//                   >
//                     <div className="card-inner">
//                       <div className="slide-front">
//                         <img
//                           src={slide.image}
//                           alt={slide.title}
//                           className="w-full h-full object-cover rounded-2xl shadow-2xl"
//                           style={{
//                             boxShadow:
//                               position === 0
//                                 ? "0 25px 50px rgba(0, 0, 0, 0.6)"
//                                 : "0 15px 30px rgba(0, 0, 0, 0.4)",
//                           }}
//                         />
//                         <div className="hover-indicator">
//                           <svg
//                             width="12"
//                             height="12"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="white"
//                             strokeWidth="2"
//                           >
//                             <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
//                           </svg>
//                         </div>
//                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
//                           <h3 className="text-white font-bold text-lg tracking-wider text-center">
//                             {slide.title}
//                           </h3>
//                         </div>
//                       </div>

//                       <div className="slide-back relative">
//                         <h2>{slide.heading}</h2>
//                         <div className="sections-container">
//                           {slide.sections.map((section, sectionIndex) => {
//                             const key = `${index}-${sectionIndex}`;
//                             const isExpanded = expandedSections[key];

//                             return (
//                               <div key={sectionIndex} className="section-item">
//                                 <div
//                                   className="section-header"
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     toggleSection(index, sectionIndex);
//                                   }}
//                                 >
//                                   <h3 className="section-title">
//                                     {section.title}
//                                   </h3>
//                                   <svg
//                                     className={`chevron ${
//                                       isExpanded ? "rotated" : ""
//                                     }`}
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M19 9l-7 7-7-7"
//                                     />
//                                   </svg>
//                                 </div>
//                                 <div
//                                   className={`section-content ${
//                                     isExpanded ? "expanded" : ""
//                                   }`}
//                                 >
//                                   {section.content}
//                                 </div>
//                               </div>
//                             );
//                           })}
//                         </div>
//                         <a
//                           href="#"
//                           style={{
//                             background:
//                               "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
//                           }}
//                           className=" text-center lg:absolute  lg:bottom-5  font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full transition-transform hover:scale-105 text-black w-[88%]"
//                         >
//                           Build My Court Now
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Navigation */}
//             <div className="flex items-center justify-center gap-6 mt-8">
//               <button
//                 onClick={prevSlide}
//                 className="group cursor-pointer p-3 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2.5}
//                   stroke="currentColor"
//                   className="w-5 h-5 text-white group-hover:text-white/90"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15.75 19.5L8.25 12l7.5-7.5"
//                   />
//                 </svg>
//               </button>

//               <button
//                 onClick={nextSlide}
//                 className="group cursor-pointer p-3 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2.5}
//                   stroke="currentColor"
//                   className="w-5 h-5 text-white group-hover:text-white/90"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M8.25 4.5l7.5 7.5-7.5 7.5"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="py-5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Container */}
//           <div
//             className="bg-black/40 rounded-2xl p-6 sm:p-10"
//             style={{
//               border: "1.74px solid rgba(255, 255, 255, 0.12)",
//               backdropFilter: " blur(38.59733963012695px)",
//             }}
//           >
//             {/* Heading */}
//             <h2
//               className="text-lg font-semibold mb-8 inline-block"
//               style={{
//
//                 background: "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Add-on services
//             </h2>

//             {/* Services Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 text-center">
//               {/* Item 1 */}
//               <div className="flex gap-2 items-center">
//                 <img
//                   src="/infraServices/1.png"
//                   alt="Lighting"
//                   className="h-[30px] w-[30px]"
//                 />
//                 <p className="text-white text-xl ">Lighting</p>
//               </div>

//               {/* Item 2 */}
//               <div className="flex gap-2 items-center">
//                 <img
//                   src="/infraServices/2.png"
//                   alt="Netting"
//                   className="h-[30px] w-[30px]"
//                 />
//                 <p className="text-white text-xl ">Netting</p>
//               </div>

//               {/* Item 3 */}
//               <div className="flex gap-2 items-center">
//                 <img
//                   src="/infraServices/3.png"
//                   alt="Fencing"
//                   className="h-[30px] w-[30px]"
//                 />
//                 <p className="text-white text-xl ">Fencing</p>
//               </div>

//               {/* Item 4 */}
//               <div className="flex gap-2 items-center">
//                 <img
//                   src="/infraServices/4.png"
//                   alt="Roofing"
//                   className="h-[30px] w-[30px]"
//                 />
//                 <p className="text-white text-xl ">Roofing</p>
//               </div>

//               {/* Item 5 */}
//               <div className="flex gap-2 items-center">
//                 <img
//                   src="/infraServices/5.png"
//                   alt="Branding Zones"
//                   className="h-[30px] w-[30px]"
//                 />
//                 <p className="text-white text-xl l">Branding Zones</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ImprovedCarousel;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock images for demonstration
// const slides = [
//   {
//     image: "/coaching.jpg",
//     title: "Basketball Courts",
//     heading: "Basketball Courts",
//     sections: [
//       {
//         title: "Synthetic Acrylic Surface",
//         content:
//           "Available in hard coat, cushion coat, and SBR base options. Durable, low-maintenance, and professional play surfaces for outdoor basketball.",
//       },
//       {
//         title: "PU Flooring",
//         content:
//           "Seamless poured surface, 5–7mm thick. Highly elastic, shock-absorbent, anti-slip, and UV resistant. Suitable for indoor & outdoor basketball courts.",
//       },
//       {
//         title: "PP Interlocking Tiles",
//         content:
//           "UV-resistant modular tiles, 12–15mm thick, with drainage. Easy DIY installation and relocation for indoor & outdoor basketball setups.",
//       },
//       {
//         title: "Wooden Flooring",
//         content:
//           "Maple or beechwood planks with shock pads. Offers excellent ball bounce and a professional indoor basketball experience.",
//       },
//       {
//         title: "PVC Vinyl Flooring",
//         content:
//           "Multi-layer cushioned rolls with excellent grip and shock absorption. Economical and reliable for indoor basketball courts.",
//       },
//       {
//         title: "EPDM Rubber Flooring",
//         content:
//           "Safe, shock-absorbent, anti-slip surface suitable for outdoor basketball and multi-sport use.",
//       },
//     ],
//   },
//   {
//     image: "/soccer-field.png",
//     title: "Football Fields",
//     heading: "Football Fields",
//     sections: [
//       {
//         title: "Artificial Turf / Grass",
//         content:
//           "Synthetic grass with sand & rubber infill. Thickness 30–60mm, all-weather playable, low maintenance. Perfect for football pitches.",
//       },
//       {
//         title: "Artificial Multisport Turf",
//         content:
//           "Synthetic grass (10–15mm) suitable for multi-sports, including football, basketball, and cricket.",
//       },
//     ],
//   },
//   {
//     image: "/cricket-court.png",
//     title: "Pickleball Courts",
//     heading: "Pickleball Courts",
//     sections: [
//       {
//         title: "Synthetic Acrylic Surface",
//         content:
//           "Fast and consistent bounce courts available in hard coat, cushioned, or SBR base options.",
//       },
//       {
//         title: "PU Flooring",
//         content:
//           "Shock-absorbent, anti-slip flooring with excellent durability and comfort for indoor pickleball.",
//       },
//       {
//         title: "PP Tiles",
//         content:
//           "Weather-resistant, interlocking tiles for easy installation. Great for outdoor pickleball courts.",
//       },
//       {
//         title: "Wooden Flooring",
//         content:
//           "Professional-grade maple/beechwood planks ideal for indoor pickleball.",
//       },
//       {
//         title: "PVC Vinyl Flooring",
//         content:
//           "Multi-layer cushioned rolls with high grip. Great for indoor pickleball.",
//       },
//     ],
//   },
//   {
//     image: "/offer4.jpg",
//     title: "Padel",
//     heading: "Padel",
//     sections: [
//       {
//         title: "Padel Setup (Flooring + Glass)",
//         content:
//           "Artificial turf (monofilament/fibrillated) + silica sand infill for consistent ball bounce. Surrounded by tempered glass walls (10–12mm) + steel mesh fencing. Standard size ~20m x 10m.",
//       },
//     ],
//   },
//   {
//     image: "/badminton-court.png",
//     title: "Tennis Courts",
//     heading: "Tennis Courts",
//     sections: [
//       {
//         title: "Synthetic Acrylic Surface",
//         content:
//           "Professional tennis courts with fast, consistent ball speed. Available in cushioned and non-cushioned systems.",
//       },
//       {
//         title: "PU Flooring",
//         content:
//           "Seamless cushioned surface, reducing joint stress. Excellent for indoor tennis training centers.",
//       },
//       {
//         title: "PP Interlocking Tiles",
//         content:
//           "Modular tiles with weather tolerance and easy maintenance. Suitable for multi-purpose outdoor tennis courts.",
//       },
//     ],
//   },
//   {
//     image: "/e3.png",
//     title: "Cricket Nets",
//     heading: "Cricket Nets",
//     sections: [
//       {
//         title: "Artificial Multisport Turf",
//         content:
//           "Synthetic grass, 10–15mm thick, offering realistic pace and bounce. Ideal for cricket practice pitches.",
//       },
//     ],
//   },
//   {
//     image: "/badminton.jpg",
//     title: "Badminton Courts",
//     heading: "Badminton Courts",
//     sections: [
//       {
//         title: "PVC Vinyl Flooring",
//         content:
//           "Cushioned multi-layer flooring (4.5–7mm thick). Excellent grip, shock absorption, and economical for indoor badminton.",
//       },
//       {
//         title: "Wooden Flooring",
//         content:
//           "Maple/beechwood planks with shock pads. Professional spring and bounce, used for competitive indoor badminton.",
//       },
//       {
//         title: "PU Flooring",
//         content:
//           "Durable, shock-absorbent surface with UV resistance. Suitable for both indoor & outdoor badminton.",
//       },
//       {
//         title: "PP Tiles",
//         content:
//           "Portable interlocking tiles, ideal for indoor & outdoor badminton setups.",
//       },
//       {
//         title: "Artificial Multisport Turf",
//         content:
//           "Synthetic grass surfaces suitable for indoor & outdoor recreational badminton.",
//       },
//     ],
//   },
//   {
//     image: "/offer5.jpg",
//     title: "Athletic Running Tracks",
//     heading: "Athletic Running Tracks",
//     sections: [
//       {
//         title: "Sandwich System",
//         content:
//           "PU binder + SBR base layer + EPDM granules. 13–15mm thickness. High durability and certified for international-level running tracks.",
//       },
//       {
//         title: "Spray-Coat System",
//         content:
//           "10–13mm thickness with spray-coated EPDM granules. More economical but slightly shorter lifespan than Sandwich System.",
//       },
//     ],
//   },
//   {
//     image: "/offer2.png",
//     title: "Outdoor Multisports",
//     heading: "Outdoor Multisports",
//     sections: [
//       {
//         title: "Synthetic Acrylic Surface",
//         content:
//           "Fast and durable acrylic coatings, available in cushioned or hard coat systems, suitable for multiple sports.",
//       },
//       {
//         title: "PU Flooring",
//         content:
//           "Shock-absorbent, anti-slip, and UV-resistant seamless surfaces for versatile outdoor multi-sport courts.",
//       },
//       {
//         title: "PP Tiles",
//         content:
//           "Weather-resistant, easy to install interlocking tiles ideal for outdoor multi-sports.",
//       },
//       {
//         title: "EPDM Rubber Flooring",
//         content:
//           "Safe, cushioned surface perfect for multi-sports and outdoor recreation areas.",
//       },
//     ],
//   },
//   {
//     image: "/offer3.png",
//     title: "Indoor Multisports",
//     heading: "Indoor Multisports",
//     sections: [
//       {
//         title: "PVC Vinyl Flooring",
//         content:
//           "Economical, cushioned, and slip-resistant indoor flooring suitable for multiple sports.",
//       },
//       {
//         title: "Wooden Flooring",
//         content:
//           "Professional-grade maple/beechwood flooring offering excellent bounce and grip for indoor multi-sport arenas.",
//       },
//       {
//         title: "PU Flooring",
//         content:
//           "Durable, shock-absorbent seamless flooring for indoor multi-sport setups.",
//       },
//     ],
//   },
//   {
//     image: "/track3.png",
//     title: "Kids Play Area",
//     heading: "Kids Play Area",
//     sections: [
//       {
//         title: "Artificial Turf",
//         content:
//           "Soft synthetic grass with infill options, providing safe and low-maintenance play areas.",
//       },
//       {
//         title: "EPDM Rubber Flooring",
//         content:
//           "Cushioned, anti-slip, and weatherproof flooring designed for children’s safety.",
//       },
//       {
//         title: "Rubber Interlocking Tiles",
//         content:
//           "High shock absorption, non-slip tiles ideal for kids' play areas, ensuring safety and comfort.",
//       },
//     ],
//   },
//   {
//     image: "/gym.jpg",
//     title: "Gym Flooring",
//     heading: "Gym Flooring",
//     sections: [
//       {
//         title: "Rubber Interlocking Tiles",
//         content:
//           "Pre-molded, heavy-duty rubber tiles offering impact resistance, non-slip safety, and easy maintenance. Perfect for gyms and fitness areas.",
//       },
//     ],
//   },
// ];

const slides = [
  {
    image: "/1.png",
    title: "Basketball Courts",
    heading: "Basketball Courts",
    sections: [
      {
        title: "Synthetic Acrylic Surface (5 layer hard coat)",
        content:
          "Basic acrylic coating over asphalt/concrete. 1 primer + 2 resurfacer + 2 acrylic color coats. Non-cushioned, durable, low-maintenance, fast surface.",
      },
      {
        title: "Synthetic Acrylic Cushion Surface (8 layer coat)",
        content:
          "Premium cushioned system. 1 primer + 3 cushion coats + 2 resurfacer coats + 2 acrylic color coats. Softer feel, reduces joint stress, more professional play experience.",
      },
      {
        title: "SBR + 5 layer Acrylic Flooring",
        content:
          "Shock pad base (SBR granules + PU binder) topped with acrylic layers. Combines cushioning + professional finish.",
      },
      {
        title: "Polyurethane (PU) Flooring",
        content:
          "Seamless poured surface (5–7mm thick). Highly elastic, shock-absorbent, anti-slip, UV resistant. Long life, great indoor/outdoor durability. Customizable colors & markings.",
      },
      {
        title: "Polypropylene Interlocking Tiles (PP Tiles)",
        content:
          "Interlocking modular tiles (12–15mm thick). UV-resistant, perforated for drainage. Easy DIY installation & relocation. Requires even base.",
      },
      {
        title: "Wooden Flooring",
        content:
          "Maple or beechwood planks on shock pads. Professional spring, anti-glare finish, excellent ball bounce. Needs periodic polishing/recoating.",
      },
    ],
  },
  {
    image: "/2.png",
    title: "Football Turfs",
    heading: "Football Tufs",
    sections: [
      {
        title: "Artificial Turf / Grass",
        content:
          "Synthetic grass + infill (sand + rubber). Thickness 30–60mm depending on sport. Shock pad optional. Low maintenance, all-weather playable.",
      },
      {
        title: "Artificial Multisport Turf / Grass",
        content: "Synthetic grass Thickness 10–15 mm for multisports gaming.",
      },
    ],
  },
  {
    image: "/3.png",
    title: "Pickleball Courts",
    heading: "Pickleball Courts",
    sections: [
      {
        title: "Synthetic Acrylic Surface (5 layer hard coat)",
        content:
          "Basic acrylic coating over asphalt/concrete. 1 primer + 2 resurfacer + 2 acrylic color coats. Non-cushioned, durable, low-maintenance, fast surface.",
      },
      {
        title: "Synthetic Acrylic Cushion Surface (8 layer coat)",
        content:
          "Premium cushioned system. 1 primer + 3 cushion coats + 2 resurfacer coats + 2 acrylic color coats. Softer feel, reduces joint stress, more professional play experience.",
      },
      {
        title: "SBR + 5 layer Acrylic Flooring",
        content:
          "Shock pad base (SBR granules + PU binder) topped with acrylic layers. Combines cushioning + professional finish.",
      },
      {
        title: "Polyurethane (PU) Flooring",
        content:
          "Seamless poured surface (5–7mm thick). Highly elastic, shock-absorbent, anti-slip, UV resistant. Long life, great indoor/outdoor durability. Customizable colors & markings.",
      },
      {
        title: "Polypropylene Interlocking Tiles (PP Tiles)",
        content:
          "Interlocking modular tiles (12–15mm thick). UV-resistant, perforated for drainage. Easy DIY installation & relocation. Requires even base.",
      },
      {
        title: "Wooden Flooring",
        content:
          "Maple or beechwood planks on shock pads. Professional spring, anti-glare finish, excellent ball bounce. Needs periodic polishing/recoating.",
      },
    ],
  },
  {
    image: "/4.png",
    title: "Padel Courts",
    heading: "Padel Courts",
    sections: [
      {
        title: "Padel Setup (Flooring + Glass)",
        content:
          "Artificial turf (monofilament/fibrillated) + silica sand infill for consistent ball bounce. Surrounded by tempered glass walls (10–12mm) + steel mesh fencing. Standard size ~20m x 10m.",
      },
    ],
  },
  {
    image: "/5.png",
    title: "Tennis Courts",
    heading: "Tennis Courts",
    sections: [
      {
        title: "Synthetic Acrylic Surface (5 layer hard coat)",
        content:
          "Basic acrylic coating over asphalt/concrete. 1 primer + 2 resurfacer + 2 acrylic color coats. Non-cushioned, durable, low-maintenance, fast surface.",
      },
      {
        title: "Synthetic Acrylic Cushion Surface (8 layer coat)",
        content:
          "Premium cushioned system. 1 primer + 3 cushion coats + 2 resurfacer coats + 2 acrylic color coats. Softer feel, reduces joint stress, more professional play experience.",
      },
      {
        title: "SBR + 5 layer Acrylic Flooring",
        content:
          "Shock pad base (SBR granules + PU binder) topped with acrylic layers. Combines cushioning + professional finish.",
      },
      {
        title: "Polyurethane (PU) Flooring",
        content:
          "Seamless poured surface (5–7mm thick). Highly elastic, shock-absorbent, anti-slip, UV resistant. Long life, great indoor/outdoor durability. Customizable colors & markings.",
      },
      {
        title: "Polypropylene Interlocking Tiles (PP Tiles)",
        content:
          "Interlocking modular tiles (12–15mm thick). UV-resistant, perforated for drainage. Easy DIY installation & relocation. Requires even base.",
      },
    ],
  },
  {
    image: "/6.png",
    title: "Cricket Turfs",
    heading: "Cricket Turfs",
    sections: [
      {
        title: "Artificial Turf / Grass",
        content:
          "Synthetic grass + infill (sand + rubber). Thickness 30–60mm depending on sport. Shock pad optional. Low maintenance, all-weather playable.",
      },
      {
        title: "Artificial Multisport Turf / Grass",
        content: "Synthetic grass Thickness 10–15 mm for multisports gaming.",
      },
    ],
  },
  {
    image: "/7.png",
    title: "Badminton Court",
    heading: "Badminton Court",
    sections: [
      {
        title: "PVC Vinyl Flooring",
        content:
          "Multi-layer cushioned rolls (4.5–7mm thick). Top wear-layer + fiber-reinforced layer + foam cushion base. Excellent shock absorption, good grip, economical indoor solution.",
      },
      {
        title: "Wooden Flooring",
        content:
          "Maple or beechwood planks on shock pads. Professional spring, anti-glare finish, excellent ball bounce. Needs periodic polishing/recoating.",
      },

      {
        title: "Polypropylene Interlocking Tiles (PP Tiles)",
        content:
          "Interlocking modular tiles (12–15mm thick). UV-resistant, perforated for drainage. Easy DIY installation & relocation. Requires even base.",
      },
    ],
  },
  {
    image: "/8.png",
    title: "Athletic Running Track",
    heading: "Athletic Running Track",
    sections: [
      {
        title: "Sandwich System 15 mm (SBR + PU + EPDM)",
        content:
          "PU binder + SBR layer + PU seal + EPDM granule top layer. 13–15mm thickness. High durability, certified performance. Preferred for international-level tracks.",
      },
      {
        title: "Spray-Coat System 13 mm (SBR + PU & EPDM)",
        content:
          "U + SBR base layer + spray-coated EPDM granules. 10–13mm thickness. More economical than Sandwich system but slightly less lifespan.",
      },
    ],
  },
  {
    image: "/9.png",
    title: "Outdoor Multisports",
    heading: "Outdoor Multisports",
    sections: [
      {
        title: "Synthetic Acrylic Surface (5 layer hard coat)",
        content:
          "Basic acrylic coating over asphalt/concrete. 1 primer + 2 resurfacer + 2 acrylic color coats. Non-cushioned, durable, low-maintenance, fast surface.",
      },
      {
        title: "Synthetic Acrylic Cushion Surface (8 layer coat)",
        content:
          "Premium cushioned system. 1 primer + 3 cushion coats + 2 resurfacer coats + 2 acrylic color coats. Softer feel, reduces joint stress, more professional play experience.",
      },
      {
        title: "SBR + 5 layer Acrylic Flooring",
        content:
          "Shock pad base (SBR granules + PU binder) topped with acrylic layers. Combines cushioning + professional finish.",
      },
      {
        title: "Polyurethane (PU) Flooring",
        content:
          "Seamless poured surface (5–7mm thick). Highly elastic, shock-absorbent, anti-slip, UV resistant. Long life, great indoor/outdoor durability. Customizable colors & markings.",
      },
      {
        title: "Polypropylene Interlocking Tiles (PP Tiles)",
        content:
          "Interlocking modular tiles (12–15mm thick). UV-resistant, perforated for drainage. Easy DIY installation & relocation. Requires even base.",
      },
    ],
  },
  {
    image: "/10.png",
    title: "Indoor Multisports",
    heading: "Indoor Multisports",
    sections: [
      {
        title: "PVC Vinyl Flooring",
        content:
          "Multi-layer cushioned rolls (4.5–7mm thick). Top wear-layer + fiber-reinforced layer + foam cushion base. Excellent shock absorption, good grip, economical indoor solution.",
      },
      {
        title: "Wooden Flooring",
        content:
          "Maple or beechwood planks on shock pads. Professional spring, anti-glare finish, excellent ball bounce. Needs periodic polishing/recoating.",
      },
    ],
  },
  {
    image: "/11.png",
    title: "Kids Play Area",
    heading: "Kids Play Area",
    sections: [
      {
        title: "EPDM Rubber Flooring (15mm)",
        content:
          "EPDM granules bonded over asphalt/concrete. Thickness 10–25mm. Very safe, anti-slip, weatherproof, shock-absorbent.",
      },
    ],
  },
  {
    image: "/12.png",
    title: "Gym Flooring",
    heading: "Gym Flooring",
    sections: [
      {
        title: "Rubber Interlocking Tiles",
        content:
          "Pre-molded interlocking rubber tiles (thickness 10–50mm). Easy to install/remove, high shock absorption, non-slip, water-resistant. Great for both indoor/outdoor use and heavy traffic zones.",
      },
    ],
  },
];

const ImprovedCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(2);
  const [expandedSections, setExpandedSections] = useState({});
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  const [initialFlipDone, setInitialFlipDone] = useState(false);
  const [initialFlipBack, setInitialFlipBack] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [flippedCards, setFlippedCards] = useState({}); // Track manually flipped cards

  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

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

  // ✅ Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true); // section is visible
          }
        });
      },
      { threshold: 0.4 } // 40% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasStarted]);

  const startAutoLoop = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
  };

  const stopAutoLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // ✅ Initial flip after 2s of entering view
  useEffect(() => {
    if (hasStarted && !initialFlipDone) {
      const timer = setTimeout(() => {
        setInitialFlipDone(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasStarted, initialFlipDone]);

  // ✅ Flip back after another 2s
  useEffect(() => {
    if (initialFlipDone && !initialFlipBack) {
      const timer = setTimeout(() => {
        setInitialFlipBack(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [initialFlipDone, initialFlipBack]);

  // ✅ Start autoplay only after initial flip sequence is complete
  useEffect(() => {
    if (initialFlipBack) {
      startAutoLoop();
      return () => stopAutoLoop();
    }
  }, [initialFlipBack]);

  // ✅ Auto flip back cards that are no longer in center
  useEffect(() => {
    if (initialFlipBack) {
      setFlippedCards((prev) => {
        const updated = { ...prev };
        let hasChanges = false;

        // Check all flipped cards
        Object.keys(updated).forEach((cardIndex) => {
          const index = parseInt(cardIndex);
          if (updated[index] && index !== currentSlide) {
            // Card is flipped but not in center anymore, flip it back
            updated[index] = false;
            hasChanges = true;
          }
        });

        return hasChanges ? updated : prev;
      });
    }
  }, [currentSlide, initialFlipBack]);

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

  // Handle card click to flip
  const handleCardClick = (index) => {
    if (index === currentSlide) {
      // If clicking the center card, flip it
      setFlippedCards((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    } else {
      // If clicking non-center card, make it center
      setCurrentSlide(index);
    }
  };

  // FIXED: Better circular distance calculation
  const getSlidePosition = (index) => {
    const diff = index - currentSlide;
    const totalSlides = slides.length;

    // Calculate shortest circular distance
    let normalizedDiff = diff;

    // If the difference is more than half the total, go the other way
    if (normalizedDiff > totalSlides / 2) {
      normalizedDiff = normalizedDiff - totalSlides;
    } else if (normalizedDiff < -totalSlides / 2) {
      normalizedDiff = normalizedDiff + totalSlides;
    }

    return normalizedDiff;
  };

  const getSlideStyle = (index) => {
    const position = getSlidePosition(index);
    const isCenter = position === 0;

    // Show slides at positions -3 to 3 for smooth exit animations
    const isVisible = Math.abs(position) <= 3;

    // Main visible slides (positions -2, -1, 0, 1, 2)
    const isMainVisible = Math.abs(position) <= 2;

    if (!isVisible) {
      return {
        opacity: 0,
        transform: `translateX(${position > 0 ? 2000 : -2000}px) scale(0.4)`,
        zIndex: 0,
        pointerEvents: "none",
        transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
      };
    }

    let scale, opacity, translateX;

    if (isMainVisible) {
      // Main 5 visible slides
      scale = isCenter ? 1 : Math.max(0.85, 1 - Math.abs(position) * 0.1);
      opacity = 1;
      translateX = position * (slideSize.width * 0.8);
    } else {
      // Exit slides at position ±3 (smooth exit animation)
      scale = 0.7;
      opacity = 0.3;
      translateX = position * (slideSize.width * 0.9); // Slightly more spread for exit
    }

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity: opacity,
      zIndex: isCenter ? 10 : Math.max(0, 5 - Math.abs(position)),
      transition: "all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)",
      pointerEvents: isMainVisible ? "auto" : "none",
    };
  };

  return (
    <>
      <section className="py-16" ref={sectionRef} id="infra-head">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              What WE Build
            </h5>
          </div>
          <div className="relative w-full min-h-[600px] overflow-hidden py-12">
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

              .card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                transition: transform 0.6s ease;
              }

              .card-inner.flipped {
                transform: rotateY(180deg);
              }

              .slide-front,
              .slide-back {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                border-radius: 16px;
                -webkit-backface-visibility: hidden;
                border: 4px solid #10b981;
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
                font-size: ${windowSize.width < 480 ? "9px" : "12px"};
                font-weight: 500;
                margin: 0;
              }

              .section-content {
                padding: 0 16px;
                color: white;
                font-size: ${windowSize.width < 480 ? "7px" : "10px"};
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
              .build-button {
                bottom: 0;
                margin-top: auto;
              }
            `}</style>

            <div
              className="carousel-container relative flex justify-center items-center"
              style={{ height: `${slideSize.height + 120}px` }}
              onMouseEnter={stopAutoLoop}
              onMouseLeave={startAutoLoop}
            >
              {slides.map((slide, index) => {
                const position = getSlidePosition(index);
                const isVisible = Math.abs(position) <= 3; // Show exit slides too

                if (!isVisible) return null;

                // ✅ New flip logic:
                // 1. During initial sequence: flip center card if in flip phase and not in flip-back phase
                // 2. After sequence: only flip manually clicked cards
                let shouldFlip = false;

                if (!initialFlipBack) {
                  // During initial flip sequence
                  shouldFlip = initialFlipDone && index === currentSlide;
                } else {
                  // After initial sequence, only flip manually clicked cards
                  shouldFlip = flippedCards[index] || false;
                }

                return (
                  <div
                    key={index}
                    className="slide-card absolute"
                    style={{
                      ...getSlideStyle(index),
                      width: `${slideSize.width}px`,
                      height: `${slideSize.height}px`,
                    }}
                    onClick={() => handleCardClick(index)}
                  >
                    <div
                      className={`card-inner ${shouldFlip ? "flipped" : ""}`}
                    >
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
                          <p className="text-white font-bold text-lg tracking-wider text-center font-Race">
                            {slide.title}
                          </p>
                        </div>
                      </div>

                      <div className="slide-back relative">
                        <p>{slide.heading}</p>
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
                                  <span className="section-title">
                                    {section.title}
                                  </span>
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
                          href="/contact#contact-head"
                          style={{
                            background:
                              "linear-gradient(91.1deg, #26FEB2 -0.39%, #46FD3E 81.76%)",
                          }}
                          className="text-center build-button font-bold text-sm md:text-base py-2 px-5 md:py-3 md:px-6 rounded-full transition-transform hover:scale-105 text-black w-full lg:w-[88%]"
                        >
                          <span className="text-center text-[15px] w-full">
                            Build My Court Now
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

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

      <section
  className="py-5"
  style={{
    borderBottom: "1px solid",
    borderImageSource:
      "linear-gradient(90deg, #000000 0%, #00FF01 49.05%, #000000 100%)",
    borderImageSlice: 1,
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className="bg-black/40 rounded-2xl p-6 sm:p-10"
      style={{
        border: "1.74px solid rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(38.59733963012695px)",
      }}
    >
      <h5
        className="text-lg font-semibold mb-8 inline-block"
        style={{
          background: "linear-gradient(180deg, #26FEB2 0%, #46FD3E 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <span className="font-poppins">Add-on services</span>
      </h5>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 text-center">
        <div className="flex flex-col gap-2 items-center">
          <img
            src="/infraServices/1.png"
            alt="Lighting"
            className="h-[30px] w-[30px]"
          />
          <p className="text-white text-xl">Lighting</p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <img
            src="/infraServices/2.png"
            alt="Netting"
            className="h-[30px] w-[30px]"
          />
          <p className="text-white text-xl">Netting</p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <img
            src="/infraServices/3.png"
            alt="Fencing"
            className="h-[30px] w-[30px]"
          />
          <p className="text-white text-xl">Fencing</p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <img
            src="/infraServices/4.png"
            alt="Roofing"
            className="h-[30px] w-[30px]"
          />
          <p className="text-white text-xl">Roofing</p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <img
            src="/infraServices/5.png"
            alt="Branding Zones"
            className="h-[30px] w-[30px]"
          />
          <p className="text-white text-xl">Branding Zones</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default ImprovedCarousel;
