import React, { useState } from "react";
import { ArrowUp, Star } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Ligen is a reliable supplier with great delivery times & an easy-to-use procurement interface. Especially helpful during tough times.",
      name: "Elizabeth White",
      role: "Entrepreneur",
      image: "/client-1.png",
      logo: "/client-logo1.png",
    },
    {
      text: "Their professionalism and communication made our project smooth and successful. Highly recommended!",
      name: "Michel Anderson",
      role: "CTO, USA",
      image: "/client-2.png",
      logo: "/client-logo2.png",
    },
    {
      text: "Exceptional service and fast response! Ligen team truly cares about client satisfaction and quality.",
      name: "Sophia Carter",
      role: "Marketing Head",
      image: "/client-3.png",
      logo: "/client-logo3.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <section className="relative bg-[#080021] text-white py-16 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Trusted by over{" "}
          <span className="text-purple-400">15,000+</span>{" "}
          satisfied customers worldwide.
        </h2>
        <p className="text-gray-300 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
          See what our clients have to say about working with us.
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <img
            src="/testimonial-img.png"
            alt="Client Showcase"
            className="rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg object-cover hover:scale-105 transition-transform duration-500"
          />

          {/* Review Badge */}
          <div className="absolute bottom-[-30px] sm:bottom-[-40px] md:bottom-auto md:top-1/2 md:-right-12 transform md:-translate-y-1/2 bg-[#D9F1FF] text-black rounded-lg shadow-lg px-5 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-[200px] sm:w-[230px]">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm font-medium">Review On</p>
              <div className="flex justify-center sm:justify-start items-center gap-1 text-red-500 text-lg">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="red" size={16} />
                ))}
              </div>
              <p className="text-gray-700 font-semibold text-sm sm:text-base mt-1">
                Clutch
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">8654+ Reviews</p>
            </div>
          </div>
        </div>

        {/* Right Side: Testimonials Carousel */}
        <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 bg-gradient-to-b from-[#140037] to-[#090021] p-6 sm:p-8 rounded-2xl shadow-lg"
                >
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                    {item.text}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-purple-500"
                      />
                      <div className="text-center sm:text-left">
                        <h4 className="font-semibold text-base sm:text-lg">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                    <img
                      src={item.logo}
                      alt="Company Logo"
                      className="h-8 sm:h-10 opacity-80"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-purple-500 scale-110 border-2 border-purple-300"
                    : "border border-gray-500 hover:bg-purple-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Up Arrow */}
      <a
        href="#top"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-gradient-to-r from-[#7928CA] to-[#FF0080] p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <ArrowUp className="text-white" size={20} />
      </a>
    </section>
  );
};

export default TestimonialSection;
