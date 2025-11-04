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
    <section className="bg-gradient-to-b from-[#030014] via-[#0b0620] to-[#120a2a] text-white py-24 px-6 md:px-12">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold leading-snug">
          <span className="text-gray-400">Created Unique </span>
          <span className="text-white">Blockchain & AI</span>
          <br />
          <span className="text-gray-400">Solutions Both</span>
        </h2>
      </div>

      {/* Solution Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="bg-[#120a2a]/90 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 border border-gray-800 shadow-xl"
          >
            {/* Top Logo Row */}
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-semibold leading-snug w-2/3">
                {item.title}
              </h3>
              <div className="bg-[#dbeafe] px-4 py-2 rounded-md">
                <img
                  src={item.logo}
                  alt="logo"
                  className="w-20 object-contain"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4 mb-6">
              {item.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-purple-500 text-3xl font-bold">
                    {stat.number}
                  </p>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Case Study Link */}
            <a
              href="#"
              className="inline-flex items-center text-white font-medium hover:text-purple-400 transition-colors"
            >
              View Case Study <span className="ml-2 text-xl">→</span>
            </a>

            {/* Image */}
            <div className="mt-6 rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlockchainSolutions;
