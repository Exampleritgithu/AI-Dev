import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const SeoSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id="ai-insights"
      className="relative bg-[#030026] text-white py-20 overflow-hidden"
    >
      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* LEFT SIDE – Stats Section */}
        <div
          ref={ref}
          className="flex flex-col md:flex-row md:space-x-20 space-y-10 md:space-y-0 md:w-1/2"
        >
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-8xl font-bold text-gray-400">
              {inView ? <CountUp end={56} duration={2} /> : 0}%
            </h2>
            <p className="text-lg text-gray-300 mt-2">
              Global companies invest in artificial intelligence regularly.
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center md:text-left border-t md:border-t-0 md:border-l border-gray-700 pt-6 md:pt-0 md:pl-10"
          >
            <h2 className="text-8xl font-bold text-gray-400">
              {inView ? <CountUp end={89} duration={2.5} /> : 0}%
            </h2>
            <p className="text-lg text-gray-300 mt-2">
              CEOs define artificial intelligence as their organization’s core
              technology.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE – Foreground Image */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          <img
            src="/seo.png"
            alt="AI professional"
            className="relative z-10 rounded-lg object-cover w-full max-w-lg shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* COMPANY LOGO MARQUEE BELOW SECTION */}
      <div className="mt-20 w-full overflow-hidden opacity-70">
        <div className="flex space-x-16 w-max animate-marquee justify-center items-center">
          <img src="/brand-1.png" alt="brand" className="h-16 w-auto" />
          <img src="/brand-2.png" alt="brand" className="h-16 w-auto" />
          <img src="/brand-3.png" alt="brand" className="h-16 w-auto" />
          <img src="/brand-1.png" alt="brand" className="h-16 w-auto" />
          <img src="/brand-2.png" alt="brand" className="h-16 w-auto" />
          <img src="/brand-3.png" alt="brand" className="h-16 w-auto" />
        </div>
      </div>

      {/* Scroll-to-top Button */}
      <button
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 p-3 rounded-full shadow-lg transition-all"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="white"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </section>
  );
};

export default SeoSection;
