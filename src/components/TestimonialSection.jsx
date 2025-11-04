import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUp, Star } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Ligen is a reliable supplier with great delivery times & an easy-to-use procurement interface. Especially helpful during tough times.Ligen is a reliable supplier with great delivery times & an easy-to-use procurement interface. Especially helpful during tough times.Ligen is a reliable supplier with great delivery times & an easy-to-use procurement interface. Especially helpful during tough times.",
      name: "Elizabeth White",
      role: "Entrepreneur",
      image: "/client-1.png",
      logo: "/client-logo1.png",
    },
    {
      text: "Their professionalism and communication made our project smooth and successful. Highly recommended!Ligen is a reliable supplier with great delivery times & an easy-to-use procurement interface. Especially helpful during tough times.Ligen is a reliable supplier with great delivery times & an easy-to-use procurement interface. Especially helpful during tough times.",
      name: "Michel Anderson",
      role: "CTO, USA",
      image: "/client-2.png",
      logo: "/client-logo2.png",
    },
    {
      text: "Exceptional service and fast response! Ligen team truly cares about client satisfaction and quality.Ligen is a reliable supplier with great delivery times & an easy-to-use procurement interface. Especially helpful during tough times.Ligen is a reliable supplier with great delivery times & an easy-to-use procurement interface. Especially helpful during tough times.",
      name: "Sophia Carter",
      role: "Marketing Head",
      image: "/client-3.png",
      logo: "/client-logo3.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <section className="relative bg-[#080021] text-white py-24 px-6 md:px-16 overflow-hidden">
      

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Big Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="/testimonial-img.png"
            alt="Client Showcase"
            className="rounded-2xl shadow-2xl w-full max-w-2xl object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side: Testimonials Carousel */}
        <div className="md:w-2/3 w-full relative">
          {/* Review Badge */}
          <div className="absolute -right-2 md:-right-10 top-1/2 transform -translate-y-1/2 bg-[#D9F1FF] text-black rounded-lg shadow-lg px-6 py-4 flex items-center gap-3 w-[250px]">
            <div>
              <p className="text-sm font-medium">Review On</p>
              <div className="flex items-center gap-1 text-red-500 text-lg">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="red" size={18} />
                ))}
              </div>
              <p className="text-gray-700 font-semibold mt-1">Clutch</p>
              <p className="text-gray-600 text-sm">8654+ Reviews</p>
            </div>
          </div>

          {/* Testimonial Cards */}
          {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Trusted by over <span className="text-purple-400">15,000+</span>{" "}
          satisfied customers worldwide.
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          See what our clients have to say about working with us.
        </p>
      </div>
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
                  className="w-full flex-shrink-0 bg-gradient-to-b from-[#140037] to-[#090021] p-8 rounded-2xl shadow-lg mx-2"
                >
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {item.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-full border-2 border-purple-500"
                      />
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                    <img
                      src={item.logo}
                      alt="Company Logo"
                      className="h-10 opacity-80"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          
         

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full transition-all ${
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
        className="fixed bottom-6 right-6 bg-gradient-to-r from-[#7928CA] to-[#FF0080] p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <ArrowUp className="text-white" size={22} />
      </a>
    </section>
  );
};

export default TestimonialSection;
