"use client";

import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-white/70 shadow-lg" : "bg-transparent"
      }`}>

      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-8">
        <div className={`text-lg font-bold transition ${scrolled ? "text-indigo-600" : "text-white"
          }`}>
          Yousra.dev
        </div>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              className={`cursor-pointer transition font-medium ${scrolled ? "text-indigo-600 hover:text-indigo-800" : "text-white hover:text-indigo-300"
                }`}
            >
              {link.label}
            </ScrollLink>
          ))}

        </div>
        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        // <div
        //   className="md:hidden bg-white animate-slide-down px-4 pb-4 transition-all duration-300"
        // >
          <div className="md:hidden bg-white px-4 pt-2 pb-4 animate-slide-down transition-all duration-300">

          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              // className="block py-2 text-gray-700 hover:text-indigo-600 cursor-pointer"
              className={`block py-2 cursor-pointer transition ${
  scrolled ? "text-indigo-600 hover:text-indigo-800" : "text-gray-700 hover:text-indigo-600"
}`}

            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      )}

    </header>
  );
};

export default Header;
