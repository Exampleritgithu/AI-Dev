import React from "react";
import { Hexagon, X, Network } from "lucide-react";

const features = [
  {
    icon: <Hexagon className="text-purple-400 w-12 h-12 mb-4" />,
    title: "Business Value",
    description:
      "We help you overcome business challenges by providing tailored solutions that align with your present needs and future goals. Our mission is to transform ideas into measurable outcomes.",
  },
  {
    icon: <X className="text-purple-400 w-12 h-12 mb-4" />,
    title: "Impact First",
    description:
      "Our focus is always on creating meaningful impact. We aim to build digital products that truly make a difference for your business and your customers.",
  },
  {
    icon: <Network className="text-purple-400 w-12 h-12 mb-4" />,
    title: "Pragmatic Product",
    description:
      "We deliver practical, scalable, and result-oriented digital solutions designed to evolve with your business growth and technological landscape.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#000000] text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      {/* ✅ Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center sm:text-left bg-white/10 hover:bg-white/20 p-6 sm:p-8 rounded-2xl transition-all duration-300"
          >
            <div className="flex justify-center sm:justify-start mb-3">
              {feature.icon}
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3 mt-2">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* ✅ CTA Banner Section */}
      <div className="mt-16 sm:mt-20 bg-gradient-to-r from-[#0d001f] via-[#150038] to-[#1a004d] py-12 px-6 rounded-2xl text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-6 leading-tight">
          We Resolve <br />
          <span className="text-white">Your Business Challenges</span>
        </h2>

        <button className="bg-white text-purple-700 font-semibold rounded-xl px-8 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
          Meet with an Expert
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
