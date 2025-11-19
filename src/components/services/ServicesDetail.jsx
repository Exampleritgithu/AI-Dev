import React from "react";

const ServicesDetail = () => {
  return (
    <div className="bg-[#030026] min-h-screen text-white">

      {/* Hero Section */}
      <section
        className="h-[80vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('/Blog-3.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#030026]/60 to-[#0b0033]/90"></div>

        <div className="relative text-center">
          <div className="flex justify-center space-x-2 text-gray-300 text-sm mb-2">
            <a href="#" className="hover:text-purple-400">
              Home
            </a>
            <span>/</span>
            <span>Services Details</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Service Details
          </h1>
        </div>
      </section>

    </div>
  );
};

export default ServicesDetail;
