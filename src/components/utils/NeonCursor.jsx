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
