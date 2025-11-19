import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="sticky top-0 z-50 w-full flex justify-between items-center py-5 px-6 md:px-20 bg-[#030026]/80 backdrop-blur-md border-b border-purple-900/40">
      {/* ✅ Logo */}
      <div className="flex items-center space-x-3">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 md:w-44 h-auto object-contain"
          />
        </Link>
      </div>

      {/* ✅ Desktop Menu */}
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
            <div className="absolute left-0 mt-3 w-52 bg-[#12003d] border border-purple-800 rounded-lg shadow-lg z-50">
              <Link
                to="/services"
                className="block px-4 py-2 hover:bg-purple-700 rounded-t-lg"
              >
                Services
              </Link>
              <Link
                to="/services/web-development"
                className="block px-4 py-2 hover:bg-purple-700 rounded-b-lg"
              >
                Service Details
              </Link>
            </div>
          )}
        </div>

        <Link to="/about" className="hover:text-white transition-colors">
          About
        </Link>

        {/* Pages Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("pages")}
            className="flex items-center hover:text-white transition-colors"
          >
            Pages <ChevronDown size={18} className="ml-1" />
          </button>
          {openDropdown === "pages" && (
            <div className="absolute left-0 mt-3 w-48 bg-[#12003d] border border-purple-800 rounded-lg shadow-lg z-50">
              <Link
                to="/pages/faq"
                className="block px-4 py-2 hover:bg-purple-700"
              >
                FAQ
              </Link>
              <Link
                to="/pages/team"
                className="block px-4 py-2 hover:bg-purple-700"
              >
                Team
              </Link>
              <Link
                to="/pages/privacy"
                className="block px-4 py-2 hover:bg-purple-700 rounded-b-lg"
              >
                Privacy Policy
              </Link>
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
            <div className="absolute left-0 mt-3 w-48 bg-[#12003d] border border-purple-800 rounded-lg shadow-lg z-50">
              <Link
                to="/blog"
                className="block px-4 py-2 hover:bg-purple-700 rounded-t-lg"
              >
                Blog
              </Link>
              <Link
                to="/blog/how-to-build-ai-website"
                className="block px-4 py-2 hover:bg-purple-700 rounded-b-lg"
              >
                Blog Details
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* ✅ Contact + Mobile Menu Button */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2 text-sm text-gray-300">
          <PhoneCall className="text-purple-500" size={30} />
          <span className="text-xl">1-007-753-8039</span>
        </div>

        <Link
          to="/contact"
          className="hidden md:block border text-white border-purple-500 px-4 py-2 rounded-xl hover:bg-purple-600 transition-all text-lg"
        >
          Contact Us →
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0b0033] border-t border-purple-900 text-gray-300 px-6 py-5 space-y-4 md:hidden">
          {/* Services Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("services")}
              className="flex justify-between w-full hover:text-purple-400"
            >
              Services <ChevronDown size={18} />
            </button>
            {openDropdown === "services" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/services" className="block hover:text-purple-400">
                  Services
                </Link>
                <Link
                  to="/services/web-development"
                  className="block hover:text-purple-400"
                >
                  Service Details
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="block hover:text-purple-400">
            About
          </Link>

          {/* Pages Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("pages")}
              className="flex justify-between w-full hover:text-purple-400"
            >
              Pages <ChevronDown size={18} />
            </button>
            {openDropdown === "pages" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/pages/faq" className="block hover:text-purple-400">
                  FAQ
                </Link>
                <Link to="/pages/shop" className="block hover:text-purple-400">
                  Shop
                </Link>
                <Link
                  to="/pages/privacy-policy"
                  className="block hover:text-purple-400"
                >
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("blog")}
              className="flex justify-between w-full hover:text-purple-400"
            >
              Blog <ChevronDown size={18} />
            </button>
            {openDropdown === "blog" && (
              <div className="ml-4 mt-2 space-y-2">
                <Link to="/blog" className="block hover:text-purple-400">
                  Blog
                </Link>
                <Link
                  to="/blog/how-to-build-ai-website"
                  className="block hover:text-purple-400"
                >
                  Blog Details
                </Link>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-purple-800">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <PhoneCall className="text-purple-500" size={24} />
              <span>1-007-753-8039</span>
            </div>
            <Link
              to="/contact"
              className="w-full mt-4 inline-block bg-gradient-to-r from-purple-600 to-pink-500 py-2 rounded-lg text-center text-white"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
