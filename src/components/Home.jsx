import React from "react";
import { PhoneCall, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#030026] via-[#0b0033] to-[#1a004d] text-white min-h-screen flex flex-col overflow-hidden">

      {/* ✅ Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full flex justify-between items-center py-5 px-6 md:px-20 bg-[#030026]/80 backdrop-blur-md border-b border-purple-900/40">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Ligen Logo"
            className="w-36 md:w-44 h-auto object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex text-lg xl:text-xl space-x-8 text-gray-300">
          <a href="#" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Pages
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Blog
          </a>
        </nav>

        {/* Contact Button */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-300">
            <PhoneCall className="text-purple-500" size={40} />
            <span className="text-xl">1-007-753-8039</span>
          </div>
          <button className="border border-purple-500 px-4 py-2 rounded-xl hover:bg-purple-600 transition-all text-lg">
            Contact Us →
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative z-20 flex flex-col justify-center items-start text-left flex-grow px-6 md:px-20 mt-10">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-gray-400 leading-tight">
          Provide{" "}
          <span className="font-semibold text-white">Blockchain &</span>
        </h1>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-white leading-tight">
          AI Development
        </h1>

        <div className="flex gap-6 mt-10">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-xl text-white font-medium flex items-center space-x-2 hover:opacity-90 transition-all">
            <span>Get Started Today!</span>
            <ArrowRight size={22} />
          </button>

          <button className="text-white flex items-center space-x-2 hover:text-purple-400 transition-all">
            <span>Our Services</span>
            <ArrowRight size={22} />
          </button>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/Bg-home.jpg')",
        }}
      ></div>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030026]/60 to-[#030026]/95"></div>
    </section>
  );
};

export default Home;
