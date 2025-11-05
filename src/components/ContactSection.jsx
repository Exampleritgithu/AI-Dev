import React from "react";
import { Check, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-[#060014] text-white py-16 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ✅ Left Section — Image */}
        <div className="relative order-2 lg:order-1">
          <img
            src="/contact-1.png"
            alt="Professional"
            className="rounded-2xl w-full h-auto max-h-[600px] object-cover"
          />
        </div>

        {/* ✅ Right Section — Form */}
        <div className="order-1 lg:order-2">
          {/* Contact Button */}
          <div className="mb-4 sm:mb-6">
            <button className="px-6 py-2 rounded-full bg-[#120038] border border-gray-700 text-gray-300 text-sm hover:bg-purple-700/40 transition-all">
              Contact With Us
            </button>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-snug">
            Join <span className="text-purple-400">23K+</span> Companies
            <br /> Who Choose <span className="text-white">Ligen</span>
          </h2>

          {/* Form */}
          <form className="bg-[#0a0024] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {[
                { label: "Your name", type: "text" },
                { label: "Your email", type: "email" },
                { label: "Your phone", type: "text" },
                { label: "Your company", type: "text" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-gray-400 text-sm mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full p-3 sm:p-4 rounded-lg bg-[#120038] border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-all"
                  />
                </div>
              ))}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-400 text-sm mb-2">
                Describe Message
              </label>
              <textarea
                rows="4"
                className="w-full p-3 sm:p-4 rounded-lg bg-[#120038] border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-all"
              ></textarea>
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <label className="block text-gray-400 text-sm mb-2">
                Attach file
              </label>
              <input
                type="file"
                className="w-full text-gray-300 bg-[#120038] border border-gray-700 p-3 rounded-lg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 sm:py-4 rounded-lg font-medium flex justify-center items-center gap-2 hover:scale-[1.02] hover:shadow-xl transition-all"
            >
              Get Instant Quote <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Bottom Features */}
      <div className="max-w-7xl mx-auto mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 text-left px-2 sm:px-0">
        {[
          "Always support from our expert member when needed",
          "Instant pricing & lead-time options for all customers",
          "Support from our technical manufacture experts member",
        ].map((text, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="text-teal-300 mt-1 flex-shrink-0" />
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* ✅ Floating Scroll-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-[#7928CA] to-[#FF0080] p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <ArrowRight className="rotate-[-90deg] text-white w-5 h-5" />
      </button>
    </section>
  );
};

export default ContactSection;
