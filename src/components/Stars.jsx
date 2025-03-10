import { useEffect, useRef } from "react";

const TwinklingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      baseRadius: Math.random() * 2 + 1, // Base size (1px to 3px)
      radius: Math.random() * 2 + 1, // Start with visible size
      opacity: Math.random() * 0.5 + 0.5, // Random opacity (0.5 - 1)
      growthSpeed: Math.random() * 0.02 + 0.005, // Growth/shrink speed
      twinkleSpeed: Math.random() * 0.02 + 0.005, // Opacity change speed
      growing: Math.random() > 0.5, // Randomize growth direction
    }));

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Animate radius (grow & shrink)
        if (star.growing) {
          star.radius = Math.min(
            star.radius + star.growthSpeed,
            star.baseRadius
          );
          if (star.radius >= star.baseRadius) star.growing = false;
        } else {
          star.radius = Math.max(star.radius - star.growthSpeed, 0.5); // Ensure min radius is 0.5px
          if (star.radius <= 0.5) star.growing = true;
        }

        // Animate opacity along with size
        star.opacity =
          (star.radius / star.baseRadius) * (0.5 + Math.random() * 0.5);
      });

      requestAnimationFrame(drawStars);
    };

    resizeCanvas();
    drawStars();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bg-my-gray top-0 left-0 w-full h-full"
    />
  );
};

export default TwinklingStars;
