import React from "react";

const solutions = [
  {
    title: "Expert Elicitation Global Survey",
    logo: "/drop-1.png",
    stats: [
      { number: "450+", label: "System Integrations" },
      { number: "890h+", label: "Manual Work Reduced" },
    ],
    image: "/Block-1.png",
  },
  {
    title: "Supply Chain Dashboard",
    logo: "/Drop-2.png",
    stats: [
      { number: "09k+", label: "QPS Performance" },
      { number: "90+", label: "Cost Reduction" },
    ],
    image: "/Block-2.png",
  },
];

const BlockchainSolutions = () => {
  return (
    <section className="bg-gradient-to-b from-[#030014] via-[#0b0620] to-[#120a2a] text-white py-16 px-4 sm:px-6 md:px-12">
      {/* Section Heading */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
          <span className="text-gray-400">Created Unique </span>
          <span className="text-white">Blockchain & AI</span>
          <br />
          <span className="text-gray-400">Solutions Both</span>
        </h2>
      </div>

      {/* Solution Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="bg-[#120a2a]/90 rounded-2xl p-6 sm:p-8 hover:-translate-y-2 transition-transform duration-300 border border-gray-800 shadow-xl"
          >
            {/* Top Logo Row */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-6 gap-4 sm:gap-0">
              <h3 className="text-xl sm:text-2xl font-semibold leading-snug sm:w-2/3">
                {item.title}
              </h3>
              <div className="bg-[#dbeafe] px-3 py-2 rounded-md self-start sm:self-auto">
                <img
                  src={item.logo}
                  alt="logo"
                  className="w-16 sm:w-20 object-contain mx-auto"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4 mb-6">
              {item.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-purple-500 text-2xl sm:text-3xl font-bold">
                    {stat.number}
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Case Study Link */}
            <a
              href="#"
              className="inline-flex items-center text-white text-sm sm:text-base font-medium hover:text-purple-400 transition-colors"
            >
              View Case Study <span className="ml-2 text-lg sm:text-xl">→</span>
            </a>

            {/* Image */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlockchainSolutions;
