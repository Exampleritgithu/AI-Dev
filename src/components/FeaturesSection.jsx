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
    <section className="bg-black text-white py-20 px-8">
      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center md:text-left bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex justify-center md:justify-start">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 mt-2">
              {feature.title}
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Banner Section */}
      <div className="mt-20 bg-gradient-to-r from-black-900 to-blue-900 py-12 rounded-2xl text-center flex flex-col items-center justify-center">
  <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-6 leading-tight">
    We Resolve <br />
    <span className="text-gray-200">Your Business Challenges</span>
  </h2>

  <button className="bg-white text-purple-700 font-semibold rounded-xl px-10 py-4 text-lg md:text-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
    Meet with an Expert
  </button>
</div>

    </section>
  );
};

export default FeaturesSection;
