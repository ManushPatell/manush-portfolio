import React, { useEffect, useRef } from "react";

const StarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas to fill the screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log("Canvas resized to:", canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create multiple stars
    const stars = [];
    const numStars = 150; // Adjust number of stars as needed

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        velocity: Math.random() * 0.5 + 0.2,
      });
    }

    // Function to draw a single star
    const drawStar = (star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

      // Add twinkling effect with random brightness
      const brightness = Math.random() * 0.5 + 0.5; // Range: 0.5 to 1
      ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
      ctx.fill();
    };

    // Animation loop
    const animateStars = () => {
      // Fill the background with black
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Move star downward
        star.y += star.velocity;
        if (star.y > canvas.height) {
          star.y = 0; // Reset to top
          star.x = Math.random() * canvas.width; // Randomize X position
        }
        drawStar(star);
      });

      requestAnimationFrame(animateStars);
    };

    animateStars();

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    ></canvas>
  );
};

export default StarsBackground;
