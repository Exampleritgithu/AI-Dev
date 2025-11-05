import React from "react";
import { ArrowRight } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    "Real Estate",
    "Marketing",
    "Cyber Security",
    "Finance",
    "Medical Devices",
    "Education",
    "E-commerce",
    "Pharma",
  ];

  return (
    <section className="bg-[#080021] text-white py-16 px-4 sm:px-8 md:px-16 text-center overflow-hidden">
      {/* Explore Button */}
      <div className="mb-6 sm:mb-10">
        <button className="px-6 py-2 rounded-full bg-[#100035] text-gray-300 text-sm border border-gray-700 hover:bg-purple-800/40 transition-all">
          Explore Our Industries
        </button>
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 sm:mb-20 leading-snug">
        <span className="text-gray-400 block sm:inline">Industries That Benefit</span>{" "}
        <br className="sm:hidden" />
        From Blockchain & AI,{" "}
        <span className="text-white">Development Company</span>
      </h2>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-14 sm:mb-20 px-2 sm:px-0">
        {industries.map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-between border-b border-gray-700 pb-4 sm:pb-6 hover:text-purple-400 hover:border-purple-500 transition-all cursor-pointer"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-medium">{item}</span>
            <ArrowRight
              className="text-gray-400 group-hover:text-purple-400 transition-transform duration-300 group-hover:translate-x-2"
              size={20}
            />
          </div>
        ))}
      </div>

      {/* ✅ Responsive Image */}
      <div className="w-full h-64 sm:h-96 md:h-[600px] rounded-2xl overflow-hidden">
        <img
          src="Ind.png"
          alt="Industries Illustration"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    </section>
  );
};

export default IndustriesSection;
