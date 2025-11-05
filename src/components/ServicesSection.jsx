import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title1: "Artificial",
      title2: "Intelligence",
      desc: "Using our AI solutions, it becomes possible to perform even those operations efficiently, rapidly, and precisely that previously could not have been performed at all.",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
      ],
    },
    {
      title1: "Cloud",
      title2: "Development",
      desc: "Our cloud development services help businesses migrate, modernize, and optimize their applications using powerful cloud infrastructure — ensuring scalability, security, and reliability.",
      features: [
        "Cloud Infrastructure Setup",
        "Cloud Migration Services",
        "DevOps & Automation",
        "Cloud Security & Monitoring",
      ],
    },
    {
      title1: "Web",
      title2: "Development",
      desc: "We create fast, responsive, and SEO-friendly websites that help businesses stand out and grow online with powerful modern technologies.",
      features: [
        "Frontend Development",
        "Backend Development",
        "SEO Optimization",
        "Maintenance & Support",
      ],
    },
    {
      title1: "Digital",
      title2: "Marketing",
      desc: "Our digital marketing services enhance your online presence through targeted campaigns, social media strategies, and SEO growth solutions.",
      features: [
        "Social Media Marketing",
        "Content Creation",
        "Search Engine Marketing",
        "Brand Strategy",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#030026] via-[#0b0033] to-[#1a004d] text-white py-16 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-14 sm:mb-20">
        <button className="bg-[#12013d] px-6 sm:px-8 py-2 rounded-full text-gray-300 text-base sm:text-lg mb-5 border border-[#3c006a]/30">
          Our Services
        </button>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-gray-400">Explore Our</span>{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col items-center space-y-10 sm:space-y-12 max-w-5xl mx-auto relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full bg-gradient-to-br from-[#0d0026] via-[#15003b] to-[#1f004d]
            p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border border-[#2a005f]/40 
            hover:shadow-purple-700/40 transform hover:-translate-y-2 hover:scale-[1.02]
            transition-all duration-300 group"
          >
            {/* Title */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="block text-gray-400">{service.title1}</span>
              <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {service.title2}
              </span>
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {service.desc}
            </p>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4">
              {service.features.map((item, i) => (
                <div
                  key={i}
                  className="border-b border-gray-700 flex justify-between items-center pb-2 sm:pb-3 cursor-pointer"
                >
                  <span className="text-base sm:text-lg group-hover:text-purple-400 transition-colors">
                    {item}
                  </span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>

            {/* Floating Icon */}
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition p-3 sm:p-4 rounded-full">
              <ArrowUpRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
