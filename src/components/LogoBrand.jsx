import React, { useState, useEffect } from "react";

const logos = [
  { src: "/award-1.png", title: "Best Design Award" },
  { src: "/award-2.png", title: "Top Innovation 2024" },
  { src: "/award-3.png", title: "Excellence in Technology" },
  { src: "/award-5.png", title: "Customer Choice Award" },
  { src: "/award-6.png", title: "Outstanding Performance" },
];

const LogoBrand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("left");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 2) % logos.length);
        setSlideDirection("right");
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Get two logos to show at a time (looping around)
  const visibleLogos = [
    logos[currentIndex],
    logos[(currentIndex + 1) % logos.length],
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-16 bg-black text-center overflow-hidden">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-8">
        Our Awards & Recognition
      </h2>

      <div
        key={currentIndex}
        className={`flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16 transform transition-transform duration-500 ease-in-out ${
          slideDirection === "left"
            ? "-translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        {visibleLogos.map((logo, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-48 sm:w-56 md:w-64"
          >
            <img
              src={logo.src}
              alt={logo.title}
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain"
            />
            <p className="text-gray-400 text-base sm:text-lg mt-4 font-medium leading-snug">
              {logo.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoBrand;
