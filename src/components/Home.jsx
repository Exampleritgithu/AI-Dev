import React from "react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#030026] via-[#0b0033] to-[#1a004d] text-white min-h-screen flex flex-col overflow-hidden">
      <div className="relative z-20 flex flex-col justify-center items-start text-left flex-grow px-6 md:px-20 mt-20">
        <h1 className="text-5xl md:text-7xl font-light text-gray-400">
          Provide <span className="font-semibold text-white">Blockchain &</span>
        </h1>
        <h1 className="text-5xl md:text-7xl font-semibold text-white">
          AI Development
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-xl text-white font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-all">
            <span>Get Started Today!</span>
            <ArrowRight size={22} />
          </button>

          <button className="text-white flex items-center justify-center space-x-2 hover:text-purple-400 transition-all">
            <span>Our Services</span>
            <ArrowRight size={22} />
          </button>
        </div>
      </div>

      {/* Background Layers */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 pointer-events-none"
        style={{ backgroundImage: "url('/Bg-home.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030026]/60 to-[#030026]/95"></div>
    </section>
  );
};

export default Home;
