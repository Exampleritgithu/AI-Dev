import React from "react";

const Blogs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">

        {/* Background Image */}
        <img
          src="Blog-1.jpg"
          alt="Blogs Banner"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#140028] via-[#140028]/90 to-transparent"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 animate-fadeIn">
          
          {/* Breadcrumb */}
          <div className="inline-flex items-center space-x-2 mb-5">
            <span className="text-white/80 text-sm bg-white/10 backdrop-blur-lg px-5 py-1 rounded-full shadow-sm border border-white/10">
              <span className="hover:text-purple-300 cursor-pointer transition">Home</span>
              <span className="text-purple-400 px-1">/</span>
              <span>Blogs</span>
            </span>
          </div>

          {/* Page Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Our Blogs
          </h1>
        </div>
      </div>

      
    </div>
  );
};

export default Blogs;
