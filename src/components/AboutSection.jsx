import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="bg-[#06021A] text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between"
    >
      {/* Left Image */}
      <div className="md:w-1/2 w-full mb-10 md:mb-0 relative">
        <img
          src="AboutSection.png" // 👉 replace with your actual image path
          alt="About Us"
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full md:pl-12">
        <button className="bg-[#1A103D] text-sm px-6 py-2 rounded-full mb-4 border border-gray-500 hover:bg-purple-700 transition">
          About Us
        </button>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Delivering Creative Solutions For All Digital-First Company
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          Our mission is to deliver creative and innovative solutions that help
          businesses succeed in a fast-paced digital world. With over 10 years
          of experience, we have designed and developed award-winning platforms
          that have generated billions in revenue.
        </p>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-7xl font-bold text-gray-400">
              {inView ? <CountUp end={56} duration={2} /> : 0}%
            </h2>
            <p className="text-lg text-gray-300 mt-2 max-w-xs">
              Global companies invest in artificial intelligence regularly.
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center md:text-left md:border-l border-gray-700 md:pl-10 pt-6 md:pt-0"
          >
            <h2 className="text-7xl font-bold text-gray-400">
              {inView ? <CountUp end={89} duration={2.5} /> : 0}%
            </h2>
            <p className="text-lg text-gray-300 mt-2 max-w-xs">
              CEOs define artificial intelligence as their organization’s core
              technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
