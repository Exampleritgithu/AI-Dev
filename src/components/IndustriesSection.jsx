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
    <section className="bg-[#080021] text-white py-20 px-6 md:px-16">
      {/* Explore Button */}
      <div className="mb-8">
        <button className="px-6 py-2 rounded-full bg-[#100035] text-gray-300 text-sm border border-gray-700 hover:bg-purple-800/40 transition-all">
          Explore Our Industries
        </button>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold mb-24 leading-snug">
        <span className="text-gray-400">Industries That Benefit</span>{" "}
        <br />
        From Blockchain & AI, 
        <span className="text-white">Development Company</span>
      </h2>

      {/* Industries Grid */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {industries.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-600 pb-12 hover:text-purple-400 hover:border-purple-500 transition-all cursor-pointer"
          >
            <span className="text-3xl font-medium">{item}</span>
            <ArrowRight className="text-gray-400 group-hover:text-purple-400 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
