import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const trailPoints = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        timestamp: Date.now(),
      };

      // Add smoothing to prevent gaps during fast movement
      if (trailPoints.current.length > 0) {
        const lastPoint = trailPoints.current[trailPoints.current.length - 1];
        const distance = Math.sqrt(
          Math.pow(newPoint.x - lastPoint.x, 2) +
            Math.pow(newPoint.y - lastPoint.y, 2)
        );

        // Interpolate points for fast movements to prevent gaps
        if (distance > 20) {
          const steps = Math.ceil(distance / 10);
          for (let i = 1; i <= steps; i++) {
            const ratio = i / steps;
            trailPoints.current.push({
              x: lastPoint.x + (newPoint.x - lastPoint.x) * ratio,
              y: lastPoint.y + (newPoint.y - lastPoint.y) * ratio,
              opacity: 1,
              timestamp: Date.now() - (steps - i) * 2, // Slightly stagger timestamps
            });
          }
        } else {
          trailPoints.current.push(newPoint);
        }
      } else {
        trailPoints.current.push(newPoint);
      }

      // Limit trail length for performance
      if (trailPoints.current.length > 100) {
        trailPoints.current = trailPoints.current.slice(-100);
      }
    };

    // Animation loop
    const animate = () => {
      // Clear the entire canvas completely
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentTime = Date.now();

      // Update trail points and filter out old ones
      trailPoints.current = trailPoints.current.filter((point) => {
        const age = currentTime - point.timestamp;
        const maxAge = 1200; // Trail duration

        if (age > maxAge) return false;

        // Calculate opacity based on age
        point.opacity = Math.max(0, 1 - age / maxAge);

        return true;
      });

      // Draw connected glowing lines between trail points (no dots)
      if (trailPoints.current.length > 1) {
        // Set shadow for overall glow effect
        ctx.shadowColor = "rgba(0, 255, 1, 0.8)";
        ctx.shadowBlur = 15;

        for (let i = 0; i < trailPoints.current.length - 1; i++) {
          const currentPoint = trailPoints.current[i];
          const nextPoint = trailPoints.current[i + 1];

          // Skip if points are too far apart (fast movement gaps)
          const distance = Math.sqrt(
            Math.pow(nextPoint.x - currentPoint.x, 2) +
              Math.pow(nextPoint.y - currentPoint.y, 2)
          );
          if (distance > 100) continue;

          const avgOpacity = (currentPoint.opacity + nextPoint.opacity) / 2;

          // Draw outer glow (widest)
          ctx.strokeStyle = `rgba(0, 255, 1, ${avgOpacity * 0.2})`;
          ctx.lineWidth = 16;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.beginPath();
          ctx.moveTo(currentPoint.x, currentPoint.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.stroke();

          // Draw middle glow
          ctx.strokeStyle = `rgba(0, 255, 1, ${avgOpacity * 0.4})`;
          ctx.lineWidth = 10;
          ctx.beginPath();
          ctx.moveTo(currentPoint.x, currentPoint.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.stroke();

          // Draw main line
          ctx.strokeStyle = `rgba(0, 255, 1, ${avgOpacity * 0.7})`;
          ctx.lineWidth = 6;
          ctx.beginPath();
          ctx.moveTo(currentPoint.x, currentPoint.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.stroke();

          // Draw inner bright core
          ctx.shadowBlur = 5;
          ctx.strokeStyle = `rgba(255, 255, 255, ${avgOpacity * 0.9})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(currentPoint.x, currentPoint.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.stroke();
        }

        // Reset shadow
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen", // This creates a nice glow effect
      }}
    />
  );
};

export default CursorTrail;
