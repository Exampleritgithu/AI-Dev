import React, { useState, useEffect } from "react";

const logos = [
  { src: "/award-1.png", title: "Best Design Award" },
  { src: "/award-2.png", title: "Top Innovation 2024" },
  { src: "/award-3.png", title: "Excellence in Technology" },
  { src: "/award-5.png", title: "Customer Choice Award" },
  { src: "/award-6.png", title: "Outstanding Performance" },
];

const LogoBrand = () => {
  const [currentLogo, setCurrentLogo] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("left");
      setTimeout(() => {
        setCurrentLogo((prev) => (prev + 1) % logos.length);
        setSlideDirection("right");
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-black text-center overflow-hidden">
      <div
        key={currentLogo}
        className={`transform transition-transform duration-500 ease-in-out ${
          slideDirection === "left"
            ? "-translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        <img
          src={logos[currentLogo].src}
          alt={`Award ${currentLogo + 1}`}
          className="w-40 h-40 md:w-52 md:h-52 object-contain mx-auto"
        />
        <p className="text-gray-300 text-lg mt-10 font-medium">
          {logos[currentLogo].title}
        </p>
      </div>
    </div>
  );
};

export default LogoBrand;
