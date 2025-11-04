import React from "react";
import { ArrowUp } from "lucide-react"; // optional: install via `npm install lucide-react`

const CaseStudySection = () => {
  return (
    <section className="relative bg-[#080021] text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-3 md:px-16 py-20 overflow-hidden">
      {/* Left Content */}
      <div className="md:w-1/2 w-full mb-10 md:mb-0 z-10">
        <h2 className="text-3xl md:text-5xl font-semibold leading-snug">
          Financial <br /> Intermediation <br /> Platform
        </h2>

        <div className="mt-8 space-y-8">
          <div>
            <p className="text-5xl font-bold text-purple-500">
              2.9<span className="text-white text-3xl">million+</span>
            </p>
            <p className="text-lg text-gray-300 mt-2">Shopify Stores</p>
          </div>

          <div>
            <p className="text-5xl font-bold text-purple-500">
              4<span className="text-white text-3xl">million+</span>
            </p>
            <p className="text-lg text-gray-300 mt-2">
              Pages Processed Daily
            </p>
          </div>

          <div className="pt-4">
            <a
              href="#"
              className="inline-flex items-center text-lg font-medium text-white hover:text-purple-400 transition-colors"
            >
              View Case Study
              <span className="ml-2 text-purple-400 text-2xl">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 w-full flex justify-center z-10">
        <img
          src="/Block-2.png"
          alt="Case Study"
          className="rounded-xl shadow-2xl w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-700/10 via-transparent to-transparent pointer-events-none"></div>

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

export default CaseStudySection;
