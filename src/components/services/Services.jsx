import React, { useState } from "react";
import { PhoneCall, ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-[#030026] min-h-screen text-white">
      {/* Navbar */}
      <header className="w-full fixed top-0 left-0 z-50 bg-[#030026]/80 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-purple-500">L</span>igen
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-purple-400">
                Home <ChevronDown size={16} />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-purple-400">
                Services <ChevronDown size={16} />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-purple-400">
                Industries <ChevronDown size={16} />
              </button>
            </div>
            <a href="#" className="hover:text-purple-400">
              About
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-purple-400">
                Pages <ChevronDown size={16} />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-purple-400">
                Blog <ChevronDown size={16} />
              </button>
            </div>
            <a href="#" className="hover:text-purple-400">
              Contact
            </a>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-2 text-purple-400">
              <PhoneCall size={18} />
              <span>1-007-753-8039</span>
            </div>
            <button className="border border-purple-400 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-600 transition">
              Contact Us <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#090038]/95 px-6 py-4 space-y-3">
            <a href="#" className="block hover:text-purple-400">Home</a>
            <a href="#" className="block hover:text-purple-400">Services</a>
            <a href="#" className="block hover:text-purple-400">Industries</a>
            <a href="#" className="block hover:text-purple-400">About</a>
            <a href="#" className="block hover:text-purple-400">Pages</a>
            <a href="#" className="block hover:text-purple-400">Blog</a>
            <a href="#" className="block hover:text-purple-400">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="h-[80vh] flex items-center justify-center bg-cover bg-center relative mt-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#030026]/60 to-[#0b0033]/90"></div>

        <div className="relative text-center">
          <div className="flex justify-center space-x-2 text-gray-300 text-sm mb-2">
            <a href="#" className="hover:text-purple-400">
              Home
            </a>
            <span>/</span>
            <span>Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white">Services</h1>
        </div>
      </section>
    </div>
  );
};

export default Services;
