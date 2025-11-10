import React from "react";
import { ArrowRight, ArrowUp, Circle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: "🤖",
      title: "Computer Vision",
      description:
        "We contribute to the implementation of a project from step 0: we can already help our partners by giving them advice & for a suggestions, when they contact us having.",
    },
    {
      icon: "🧠",
      title: "Natural language processing",
      description:
        "We contribute to the implementation of a project from step 0: we can already help our partners by giving them advice & for a suggestions, when they contact us having.",
    },
    {
      icon: "⚙️",
      title: "E2E Solution",
      description:
        "We contribute to the implementation of a project from step 0: we can already help our partners by giving them advice & for a suggestions, when they contact us having.",
    },
  ];

  return (
    <section className="bg-[#090038] text-white py-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0d0044]/60 border border-[#1f005c] rounded-xl p-8 hover:shadow-xl hover:shadow-purple-700/20 transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="text-purple-400 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
              >
                View Details <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 space-x-3">
          <button className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
            1
          </button>
          <button className="bg-[#1c004b] text-gray-300 w-10 h-10 rounded-full flex items-center justify-center font-semibold hover:bg-purple-600 transition">
            2
          </button>
          <button className="bg-[#1c004b] text-gray-300 w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Scroll to Top Button */}
        <button className="fixed bottom-6 right-6 bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition">
          <ArrowUp size={20} />
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
