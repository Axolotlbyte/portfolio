import { useRef, useEffect, useState } from "react";

const useCanvas = (callback) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const stars = canvasRef.current;
    const starsCtx = stars.getContext("2d");
    callback([stars, starsCtx]);
  }, []);

  return canvasRef;
};

const StarsCanvas = ({ children }) => {
  const canvasHeightRef = useRef();
  const [height, setHeight] = useState(0);

  // Stars
  const canvasRef = useCanvas(([stars, starsCtx]) => {
    let screen,
      starsElements,
      starsParams = {
        speed: stars.width > 640 ? 2 : 1,
        number: 300,
        extinction: 4,
      };

    // run stars
    setupStars();
    updateStars();

    function Star() {
      this.x = Math.random() * stars.width;
      this.y = Math.random() * stars.height;
      this.z = Math.random() * stars.width;

      this.move = function () {
        this.z -= starsParams.speed;
        if (this.z <= 0) {
          this.z = stars.width;
        }
      };

      this.show = function () {
        let x, y, rad, opacity;
        x = (this.x - screen.c[0]) * (stars.width / this.z);
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * (stars.width / this.z);
        y = y + screen.c[1];
        rad = stars.width / this.z;
        opacity =
          rad > starsParams.extinction
            ? 1.5 * (2 - rad / starsParams.extinction)
            : 1;

        starsCtx.beginPath();
        starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
        starsCtx.arc(x, y, rad, 0, Math.PI * 2);
        starsCtx.fill();
      };
    }

    function setupStars() {
      screen = {
        w: window.innerWidth,
        h: window.innerHeight,
        c: [window.innerWidth * 0.5, window.innerHeight * 0.5],
      };
      window.cancelAnimationFrame(updateStars);
      stars.width = screen.w;
      stars.height = screen.h;
      starsElements = [];
      for (let i = 0; i < starsParams.number; i++) {
        starsElements[i] = new Star();
      }
    }

    function updateStars() {
      var gradient = starsCtx.createLinearGradient(950, 0, 0, 0);
      gradient.addColorStop(0, "rgb(45, 5, 45)");
      gradient.addColorStop(0.20707070707070707, "rgb(49, 14, 56)");
      gradient.addColorStop(1, "rgb(16, 4, 56)");

      starsCtx.fillStyle = gradient;
      //   starsCtx.fillStyle = "black";
      starsCtx.fillRect(0, 0, stars.width, stars.height);
      starsElements.forEach(function (s) {
        s.show();
        s.move();
      });
      window.requestAnimationFrame(updateStars);
    }

    window.onresize = function () {
      starsParams.speed = stars.width > 640 ? 2 : 1;
      setupStars();
    };
  });

  const handleSize = () => setHeight(canvasHeightRef.current.offsetHeight);

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, [height, canvasHeightRef]);

  return (
    <div className="relative h-auto overflow-hidden">
      <canvas height={height} id="stars" ref={canvasRef} />

      <div
        ref={canvasHeightRef}
        className="absolute top-0 left-0 w-full h-auto bg-opacity-0 z-20"
      >
        {children}
      </div>

      <style jsx>{`
        #stars {
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default StarsCanvas;
