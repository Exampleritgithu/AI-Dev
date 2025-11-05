import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#08001a] text-white py-16 px-4 sm:px-8 md:px-12 lg:px-24">
      {/* ✅ Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-gray-800 pt-10">
        {/* Services We Offer */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-6">
            Services We Offer
          </h3>
          <ul className="space-y-4 text-gray-300">
            {[
              "Machine Learning Consulting",
              "Natural Language Processing",
              "Data Engineering Services",
              "Data Analytics Services",
              "Web Application Development",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-gray-800 pb-2 hover:text-purple-400 transition-all"
              >
                <span className="text-sm sm:text-base">{item}</span>
                <ArrowRight size={16} className="text-purple-400" />
              </li>
            ))}
          </ul>
        </div>

        {/* Explore Us */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-6">Explore Us</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="hover:text-purple-400 cursor-pointer transition text-sm sm:text-base">
              Case Studies
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition text-sm sm:text-base">
              Our Industries
            </li>
            <li className="flex items-center gap-2 hover:text-purple-400 cursor-pointer transition text-sm sm:text-base">
              Career{" "}
              <span className="text-[10px] sm:text-xs bg-blue-200 text-black px-2 py-0.5 rounded">
                We’re Hiring
              </span>
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition text-sm sm:text-base">
              Company Policies
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition text-sm sm:text-base">
              Contact With Us
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition text-sm sm:text-base">
              Join The Team
            </li>
          </ul>
        </div>

        {/* Our Industries */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-6">
            Our Industries
          </h3>
          <ul className="space-y-4 text-gray-300">
            {[
              "E-commerce",
              "Real Estate",
              "Cyber Security",
              "Medical Devices",
              "Digital Marketing",
              "Finance",
            ].map((industry, index) => (
              <li
                key={index}
                className="hover:text-purple-400 cursor-pointer transition text-sm sm:text-base"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Newsletter */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-6">
            Subscribe Newsletter
          </h3>
          <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
            We are used to analyzing your request and formulating the task
            accordingly.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-[#0f0326] border border-gray-700 text-gray-300 rounded-md py-3 px-4 mb-5 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
          />
          <button className="w-full bg-gradient-to-r from-purple-700 to-pink-500 py-3 rounded-md text-white font-medium hover:opacity-90 transition flex items-center justify-center gap-2 text-sm sm:text-base">
            Subscribe Now <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* ✅ Bottom Section (Optional) */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Ligen Technologies. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
