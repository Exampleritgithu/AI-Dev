import React, { useState } from "react";
import { PhoneCall, ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const Home = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#030026] via-[#0b0033] to-[#1a004d] text-white min-h-screen flex flex-col overflow-hidden">
      {/* ✅ Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full flex justify-between items-center py-5 px-6 md:px-20 bg-[#030026]/80 backdrop-blur-md border-b border-purple-900/40">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Ligen Logo"
            className="w-32 md:w-44 h-auto object-contain"
          />
        </div>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex text-lg xl:text-xl space-x-8 text-gray-300 relative">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="flex items-center hover:text-white transition-colors"
            >
              Services <ChevronDown size={18} className="ml-1" />
            </button>
            {openDropdown === "services" && (
              <div className="absolute left-0 mt-3 w-48 bg-[#12003d] border border-purple-800 rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-purple-700 rounded-t-lg">
                  Services
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-purple-700 rounded-b-lg">
                  Service Details
                </a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-white transition-colors">
            About
          </a>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("pages")}
              className="flex items-center hover:text-white transition-colors"
            >
              Pages <ChevronDown size={18} className="ml-1" />
            </button>
            {openDropdown === "pages" && (
              <div className="absolute left-0 mt-3 w-48 bg-[#12003d] border border-purple-800 rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-purple-700 rounded-t-lg">
                  FAQ
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-purple-700">
                  Shop
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-purple-700 rounded-b-lg">
                  Privacy Policy
                </a>
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("blog")}
              className="flex items-center hover:text-white transition-colors"
            >
              Blog <ChevronDown size={18} className="ml-1" />
            </button>
            {openDropdown === "blog" && (
              <div className="absolute left-0 mt-3 w-48 bg-[#12003d] border border-purple-800 rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-purple-700 rounded-t-lg">
                  Blog
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-purple-700 rounded-b-lg">
                  Blog Details
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* ✅ Contact + Hamburger */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-300">
            <PhoneCall className="text-purple-500" size={30} />
            <span className="text-xl">1-007-753-8039</span>
          </div>

          <button className="hidden md:block border border-purple-500 px-4 py-2 rounded-xl hover:bg-purple-600 transition-all text-lg">
            Contact Us →
          </button>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* ✅ Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0b0033] border-t border-purple-900 text-gray-300 px-6 py-5 space-y-4">
          <button
            onClick={() => toggleDropdown("services")}
            className="flex justify-between w-full hover:text-purple-400"
          >
            Services <ChevronDown size={18} />
          </button>
          {openDropdown === "services" && (
            <div className="ml-4 space-y-2">
              <a href="#" className="block hover:text-purple-400">
                Services
              </a>
              <a href="#" className="block hover:text-purple-400">
                Service Details
              </a>
            </div>
          )}

          <a href="#" className="block hover:text-purple-400">
            About
          </a>

          <button
            onClick={() => toggleDropdown("pages")}
            className="flex justify-between w-full hover:text-purple-400"
          >
            Pages <ChevronDown size={18} />
          </button>
          {openDropdown === "pages" && (
            <div className="ml-4 space-y-2">
              <a href="#" className="block hover:text-purple-400">
                FAQ
              </a>
              <a href="#" className="block hover:text-purple-400">
                Shop
              </a>
              <a href="#" className="block hover:text-purple-400">
                Privacy Policy
              </a>
            </div>
          )}

          <button
            onClick={() => toggleDropdown("blog")}
            className="flex justify-between w-full hover:text-purple-400"
          >
            Blog <ChevronDown size={18} />
          </button>
          {openDropdown === "blog" && (
            <div className="ml-4 space-y-2">
              <a href="#" className="block hover:text-purple-400">
                Blog
              </a>
              <a href="#" className="block hover:text-purple-400">
                Blog Details
              </a>
            </div>
          )}

          <div className="pt-4 border-t border-purple-800">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <PhoneCall className="text-purple-500" size={24} />
              <span>1-007-753-8039</span>
            </div>
            <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-500 py-2 rounded-lg">
              Contact Us →
            </button>
          </div>
        </div>
      )}

      {/* ✅ Hero Section */}
      <div className="relative z-20 flex flex-col justify-center items-start text-left flex-grow px-6 md:px-20 mt-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-gray-400 leading-tight">
          Provide <span className="font-semibold text-white">Blockchain &</span>
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-tight">
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

      {/* Background & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: "url('/Bg-home.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#030026]/60 to-[#030026]/95"></div>
    </section>
  );
};

export default Home;
