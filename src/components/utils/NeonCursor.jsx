// "use client";
// import { useEffect, useRef } from "react";

// const NeonCursor = ({
//   element,
//   length = 100, // more points = longer ribbon
//   color = "#a020f0", // neon purple
//   size = 8, // thickness of ribbon core
//   trailSpeed = 0.4, // ribbon lag behind cursor
//   blur = 40, // glow softness
//   pulseSpeed = 0.005, // pulse animation
//   pulseMin = 0.9,
//   pulseMax = 1.2,
// }) => {
//   const canvasRef = useRef(null);
//   const contextRef = useRef(null);
//   const cursorRef = useRef({ x: 0, y: 0 });
//   const particlesRef = useRef([]);
//   const animationFrameRef = useRef(undefined);
//   const cursorsInittedRef = useRef(false);
//   const timeRef = useRef(0);

//   class Particle {
//     constructor(x, y) {
//       this.position = { x, y };
//     }
//   }

//   const getPulseSize = (baseSize, time) => {
//     const pulse = Math.sin(time * pulseSpeed);
//     const scaleFactor = pulseMin + ((pulse + 1) * (pulseMax - pulseMin)) / 2;
//     return baseSize * scaleFactor;
//   };

//   useEffect(() => {
//     const hasWrapperEl = element !== undefined;
//     const targetElement = hasWrapperEl ? element : document.body;
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     );
//     if (prefersReducedMotion.matches) {
//       console.log("Reduced motion is enabled - cursor animation disabled");
//       return;
//     }

//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d", { alpha: true });
//     if (!context) return;
//     canvasRef.current = canvas;
//     contextRef.current = context;

//     canvas.style.top = "0px";
//     canvas.style.left = "0px";
//     canvas.style.pointerEvents = "none";
//     canvas.style.position = hasWrapperEl ? "absolute" : "fixed";

//     if (hasWrapperEl) {
//       element?.appendChild(canvas);
//       canvas.width = element.clientWidth;
//       canvas.height = element.clientHeight;
//     } else {
//       document.body.appendChild(canvas);
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }

//     const onMouseMove = (e) => {
//       if (hasWrapperEl && element) {
//         const boundingRect = element.getBoundingClientRect();
//         cursorRef.current.x = e.clientX - boundingRect.left;
//         cursorRef.current.y = e.clientY - boundingRect.top;
//       } else {
//         cursorRef.current.x = e.clientX;
//         cursorRef.current.y = e.clientY;
//       }
//       if (!cursorsInittedRef.current) {
//         cursorsInittedRef.current = true;
//         for (let i = 0; i < length; i++) {
//           particlesRef.current.push(
//             new Particle(cursorRef.current.x, cursorRef.current.y)
//           );
//         }
//       }
//     };

//     const onWindowResize = () => {
//       if (hasWrapperEl && element) {
//         canvas.width = element.clientWidth;
//         canvas.height = element.clientHeight;
//       } else {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//       }
//     };

//     // const updateParticles = () => {
//     //   if (!contextRef.current || !canvasRef.current) return;
//     //   const ctx = contextRef.current;
//     //   const canvas = canvasRef.current;
//     //   ctx.clearRect(0, 0, canvas.width, canvas.height);

//     //   // update particle positions
//     //   const particleSets = [];
//     //   let x = cursorRef.current.x;
//     //   let y = cursorRef.current.y;
//     //   particlesRef.current.forEach((particle, index) => {
//     //     const nextParticle =
//     //       particlesRef.current[index + 1] || particlesRef.current[0];
//     //     particle.position.x = x;
//     //     particle.position.y = y;
//     //     particleSets.push({ x, y });
//     //     x += (nextParticle.position.x - particle.position.x) * trailSpeed;
//     //     y += (nextParticle.position.y - particle.position.y) * trailSpeed;
//     //   });

//     //   timeRef.current += 0.01;
//     //   const currentSize = getPulseSize(size, timeRef.current);

//     //   if (particleSets.length > 1) {
//     //     const numThreads = 3; // how many thin ribbons
//     //     const threadSpacing = currentSize * 1.5; // spacing between them

//     //     for (let t = 0; t < numThreads; t++) {
//     //       const offset = (t - (numThreads - 1) / 2) * threadSpacing;

//     //       ctx.beginPath();
//     //       ctx.moveTo(particleSets[0].x, particleSets[0].y + offset);

//     //       for (let i = 1; i < particleSets.length - 1; i++) {
//     //         const xc = (particleSets[i].x + particleSets[i + 1].x) / 2;
//     //         const yc = (particleSets[i].y + particleSets[i + 1].y) / 2;
//     //         ctx.quadraticCurveTo(
//     //           particleSets[i].x,
//     //           particleSets[i].y + offset,
//     //           xc,
//     //           yc + offset
//     //         );
//     //       }

//     //       // gradient per thread
//     //       const gradient = ctx.createLinearGradient(
//     //         0,
//     //         0,
//     //         canvas.width,
//     //         canvas.height
//     //       );
//     //       gradient.addColorStop(0, color);
//     //       gradient.addColorStop(0.5, "white");
//     //       gradient.addColorStop(1, color);

//     //       ctx.strokeStyle = gradient;
//     //       ctx.lineWidth = currentSize * 0.6; // thinner line
//     //       ctx.lineCap = "round";
//     //       ctx.lineJoin = "round";
//     //       ctx.shadowBlur = blur;
//     //       ctx.shadowColor = color;
//     //       ctx.globalAlpha = 0.9;
//     //       ctx.stroke();
//     //     }

//     //     ctx.globalAlpha = 1;
//     //   }
//     // };

//     const updateParticles = () => {
//       if (!contextRef.current || !canvasRef.current) return;
//       const ctx = contextRef.current;
//       const canvas = canvasRef.current;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // update particle positions
//       const particleSets = [];
//       let x = cursorRef.current.x;
//       let y = cursorRef.current.y;
//       particlesRef.current.forEach((particle, index) => {
//         const nextParticle =
//           particlesRef.current[index + 1] || particlesRef.current[0];
//         particle.position.x = x;
//         particle.position.y = y;
//         particleSets.push({ x, y });
//         x += (nextParticle.position.x - particle.position.x) * trailSpeed;
//         y += (nextParticle.position.y - particle.position.y) * trailSpeed;
//       });

//       timeRef.current += 0.01;
//       const currentSize = getPulseSize(size, timeRef.current);

//       if (particleSets.length > 1) {
//         const numThreads = 10; // total threads
//         const maxOffset = currentSize * 2; // max offset from center

//         for (let t = 0; t < numThreads; t++) {
//           ctx.beginPath();

//           // Random per-thread properties (but seeded once for consistency)
//           const offset =
//             (t / (numThreads - 1) - 0.5) * 2 * maxOffset +
//             (Math.random() - 0.5) * currentSize; // vary offset a bit
//           const lineWidth = 1 + Math.random() * 3; // some thick, some thin
//           const alpha = 0.3 + Math.random() * 0.7; // random opacity
//           const hueShift = (Math.random() - 0.5) * 20; // +/- hue variation
//           const threadColor = `hsl(${280 + hueShift}, 100%, 60%)`; // base around purple

//           ctx.moveTo(particleSets[0].x, particleSets[0].y + offset);

//           for (let i = 1; i < particleSets.length - 1; i++) {
//             const xc = (particleSets[i].x + particleSets[i + 1].x) / 2;
//             const yc = (particleSets[i].y + particleSets[i + 1].y) / 2;
//             ctx.quadraticCurveTo(
//               particleSets[i].x,
//               particleSets[i].y + offset,
//               xc,
//               yc + offset
//             );
//           }

//           ctx.strokeStyle = threadColor;
//           ctx.globalAlpha = alpha;
//           ctx.lineWidth = lineWidth;
//           ctx.lineCap = "round";
//           ctx.lineJoin = "round";
//           ctx.shadowBlur = blur;
//           ctx.shadowColor = threadColor;
//           ctx.stroke();
//         }

//         ctx.globalAlpha = 1; // reset
//       }
//     };

//     const loop = () => {
//       updateParticles();
//       animationFrameRef.current = requestAnimationFrame(loop);
//     };

//     targetElement.addEventListener("mousemove", onMouseMove);
//     window.addEventListener("resize", onWindowResize);
//     loop();

//     return () => {
//       if (canvasRef.current) {
//         canvasRef.current.remove();
//       }
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//       targetElement.removeEventListener("mousemove", onMouseMove);
//       window.removeEventListener("resize", onWindowResize);
//     };
//   }, [
//     element,
//     length,
//     color,
//     size,
//     trailSpeed,
//     blur,
//     pulseSpeed,
//     pulseMin,
//     pulseMax,
//   ]);

//   return null;
// };

// export default NeonCursor;

// other cursor ribbon effeect
"use client";
import { useEffect, useRef } from "react";

const NeonCursor = ({
  element,
  length = 120, // number of trail points
  baseColor = 280, // base hue (purple ~280)
  size = 8, // core ribbon thickness
  trailSpeed = 0.4, // follow delay
  blur = 40, // glow blur
  numThreads = 10, // how many neon fibers
}) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(undefined);
  const cursorsInittedRef = useRef(false);
  const threadsRef = useRef([]);

  class Particle {
    constructor(x, y) {
      this.position = { x, y };
    }
  }

  useEffect(() => {
    const hasWrapperEl = element !== undefined;
    const targetElement = hasWrapperEl ? element : document.body;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    canvasRef.current = canvas;
    contextRef.current = ctx;

    canvas.style.top = "0px";
    canvas.style.left = "0px";
    canvas.style.pointerEvents = "none";
    canvas.style.position = hasWrapperEl ? "absolute" : "fixed";

    if (hasWrapperEl) {
      element?.appendChild(canvas);
      canvas.width = element.clientWidth;
      canvas.height = element.clientHeight;
    } else {
      document.body.appendChild(canvas);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent")
      .trim();

    const secondaryColors = [
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-bg-foreground")
        .trim(),
      // getComputedStyle(document.documentElement)
      //   .getPropertyValue("--color-bg-foreground-secondary")
      //   .trim(),
    ];

    const onMouseMove = (e) => {
      if (hasWrapperEl && element) {
        const boundingRect = element.getBoundingClientRect();
        cursorRef.current.x = e.clientX - boundingRect.left;
        cursorRef.current.y = e.clientY - boundingRect.top;
      } else {
        cursorRef.current.x = e.clientX;
        cursorRef.current.y = e.clientY;
      }

      if (!cursorsInittedRef.current) {
        cursorsInittedRef.current = true;
        for (let i = 0; i < length; i++) {
          particlesRef.current.push(
            new Particle(cursorRef.current.x, cursorRef.current.y)
          );
        }

        // Initialize threads ONCE
        threadsRef.current = Array.from({ length: numThreads }, () => {
          // 70% chance to pick accent, 30% chance for secondary
          const color =
            Math.random() < 0.7
              ? accent
              : secondaryColors[
                  Math.floor(Math.random() * secondaryColors.length)
                ];

          return {
            baseOffset: (Math.random() - 0.5) * 3.0,
            lineWidth: 1 + Math.random() * 3,
            alpha: 0.4 + Math.random() * 0.6,
            color,
            jitter: Math.random() * 1.2,
          };
        });
      }
    };

    const onWindowResize = () => {
      if (hasWrapperEl && element) {
        canvas.width = element.clientWidth;
        canvas.height = element.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const updateParticles = () => {
      if (!contextRef.current || !canvasRef.current) return;
      const ctx = contextRef.current;
      const canvas = canvasRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // update particle positions
      const particleSets = [];
      let x = cursorRef.current.x;
      let y = cursorRef.current.y;
      particlesRef.current.forEach((particle, index) => {
        const nextParticle =
          particlesRef.current[index + 1] || particlesRef.current[0];
        particle.position.x = x;
        particle.position.y = y;
        particleSets.push({ x, y });
        x += (nextParticle.position.x - particle.position.x) * trailSpeed;
        y += (nextParticle.position.y - particle.position.y) * trailSpeed;
      });

      if (particleSets.length > 1) {
        const maxOffset = size * 1.2; // smaller so threads stay bundled

        threadsRef.current.forEach((thread) => {
          ctx.beginPath();
          ctx.moveTo(particleSets[0].x, particleSets[0].y);

          for (let i = 1; i < particleSets.length - 1; i++) {
            const taper = 1 - i / particleSets.length; // near tail thinner
            // distance variation + jitter so threads overlap organically
            const offset =
              thread.baseOffset * maxOffset * taper +
              Math.sin(i * 0.2) * thread.jitter;

            const xc = (particleSets[i].x + particleSets[i + 1].x) / 2;
            const yc = (particleSets[i].y + particleSets[i + 1].y) / 2;

            ctx.quadraticCurveTo(
              particleSets[i].x,
              particleSets[i].y + offset,
              xc,
              yc + offset
            );
          }

          // const threadColor = `hsl(${baseColor + thread.hueShift}, 100%, 60%)`;

          // ✅ Theme color directly
          ctx.strokeStyle = thread.color;
          ctx.globalAlpha = thread.alpha;
          ctx.lineWidth = thread.lineWidth;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.shadowBlur = blur;
          ctx.shadowColor = thread.color;
          ctx.stroke();
        });

        ctx.globalAlpha = 1; // reset
      }
    };

    const loop = () => {
      updateParticles();
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    targetElement.addEventListener("pointermove", onMouseMove);
    window.addEventListener("resize", onWindowResize);
    loop();

    return () => {
      if (canvasRef.current) {
        canvasRef.current.remove();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      targetElement.removeEventListener("pointermove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
    };
  }, [element, length, size, trailSpeed, blur, baseColor, numThreads]);

  return null;
};

export default NeonCursor;

// import { useEffect, useState } from "react";

// const NeonCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [hovering, setHovering] = useState(false);

//   useEffect(() => {
//     const move = (e) => {
//       // update position directly without transitions
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const addHover = () => setHovering(true);
//     const removeHover = () => setHovering(false);

//     window.addEventListener("mousemove", move);
//     document.querySelectorAll("a, button, .hoverable").forEach((el) => {
//       el.addEventListener("mouseenter", addHover);
//       el.addEventListener("mouseleave", removeHover);
//     });

//     return () => {
//       window.removeEventListener("mousemove", move);
//       document.querySelectorAll("a, button, .hoverable").forEach((el) => {
//         el.removeEventListener("mouseenter", addHover);
//         el.removeEventListener("mouseleave", removeHover);
//       });
//     };
//   }, []);

//   return (
//     <div
//       className="fixed top-0 left-0 pointer-events-none z-[9999] text-accent"
//       style={{
//         transform: `translate(${position.x}px, ${position.y}px)`,
//       }}
//     >
//       <div
//         className={`transition-transform ${
//           hovering ? "scale-150 rotate-180" : "scale-100 rotate-0"
//         } duration-300 ease-in-out`}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           height="30px"
//           width="30px"
//           viewBox="0 0 512 512"
//           fill="currentColor"
//           pointerEvents="none"
//           className="text-accent"
//         >
//           <g>
//             <path d="M270.53,468.118c-20.387-26.737-29.981-61.49-30.024-98.106c0.026-39.603,11.328-81.828,34.762-119.712   c23.407-37.842,59.256-71.257,107.614-91.956c26.798-11.484,44.555-23.545,56.125-35.158c8.783-8.861,14.21-17.36,17.721-26.048   c-4.615-5.815-9.456-11.518-14.65-17.014C359.122-7.682,228.754-23.722,128.422,34.007c-3.702,5.315-7.162,10.716-10.147,16.264   c-9.577,17.782-15.211,36.435-15.228,56.599c0.026,17.212,4.081,35.823,14.46,56.642c15.47,31.035,23.2,67.479,23.244,103.828   c-0.026,30.973-5.668,61.956-18.059,89.401c-12.354,27.368-31.88,51.465-59.334,66.244c-0.328,0.173-0.673,0.329-1.001,0.501   c2.451,2.821,4.935,5.625,7.524,8.37c65.891,69.73,161.652,94.207,248.526,72.447c-3.15-1.216-6.282-2.459-9.258-3.951   C293.696,492.63,280.712,481.44,270.53,468.118z" />
//             <path d="M481.784,135.264c-8.111,11.441-18.783,22.346-32.398,32.354c-13.701,10.104-30.336,19.438-50.49,28.084   c-40.482,17.376-69.67,44.735-89.083,76.002c-19.378,31.233-28.688,66.469-28.661,98.306c-0.018,22.087,4.468,42.431,12.51,58.608   c8.084,16.23,19.336,28.188,33.674,35.383c9.603,4.797,20.793,7.593,34.296,7.61c13.14,0,28.662-2.969,46.254-9.56   c8.274-6.117,16.298-12.717,23.959-19.964C517.702,360.969,534.975,234.605,481.784,135.264z" />
//             <path d="M100.105,267.34c0.043-30.474-6.747-61.354-18.946-85.65c-12.908-25.771-18.766-51.016-18.749-74.82   c0-6.894,0.638-13.589,1.553-20.198c-75.046,84.985-84.442,208.725-26.142,303.4c2.113-0.923,4.271-1.803,6.272-2.873   c12.14-6.548,22.234-15.91,30.56-27.748C91.321,335.879,100.174,302.023,100.105,267.34z" />
//           </g>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default NeonCursor;
