
// "use client";

// import React, { useEffect, useState } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import { motion } from "framer-motion";

// const navLinks = [
//   { label: "Home", to: "hero" },
//   { label: "About", to: "about" },
//   { label: "Projects", to: "projects" },
//   { label: "Skills", to: "skills" },
//   { label: "Contact", to: "contact" },
// ];

// const Header: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-6">
//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
//         >
//           Yousra<span className="font-light">.dev</span>
//         </motion.div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex space-x-6">
//           {navLinks.map((link, index) => (
//             <motion.div
//               key={link.to}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//             >
//               <ScrollLink
//                 to={link.to}
//                 smooth
//                 duration={500}
//                 offset={-80}
//                 className={`cursor-pointer text-sm font-medium tracking-wide transition ${
//                   scrolled
//                     ? "text-white hover:text-indigo-300"
//                     : "text-white hover:text-indigo-300"
//                 }`}
//               >
//                 {link.label}
//               </ScrollLink>
//             </motion.div>
//           ))}
//         </div>

//         {/* Hamburger Menu */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden focus:outline-none text-white"
//         >
//           <svg
//             className="w-7 h-7"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="md:hidden backdrop-blur-md bg-gradient-to-b from-purple-700/30 to-indigo-900/40 border-t border-white/10 px-4 pt-2 pb-4"
//         >
//           {navLinks.map((link) => (
//             <ScrollLink
//               key={link.to}
//               to={link.to}
//               smooth
//               duration={500}
//               offset={-80}
//               onClick={() => setIsOpen(false)}
//               className="block py-3 text-white font-medium tracking-wide hover:text-indigo-300 transition"
//             >
//               {link.label}
//             </ScrollLink>
//           ))}
//         </motion.div>
//       )}
//     </header>
//   );
// };

// export default Header;
"use client";

import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

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
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          aria-label="Yousra Abid Developer Logo"
          className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
        >
          Yousra<span className="font-light">.dev</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden md:flex space-x-6"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <ScrollLink
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                aria-label={`Scroll to ${link.label} section`}
                className={`cursor-pointer text-sm font-medium tracking-wide transition text-white hover:text-indigo-300`}
              >
                {link.label}
              </ScrollLink>
            </motion.div>
          ))}
        </nav>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="md:hidden focus:outline-none text-white"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden backdrop-blur-md bg-gradient-to-b from-purple-700/30 to-indigo-900/40 border-t border-white/10 px-4 pt-2 pb-4"
        >
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              aria-label={`Navigate to ${link.label} section`}
              className="block py-3 text-white font-medium tracking-wide hover:text-indigo-300 transition"
            >
              {link.label}
            </ScrollLink>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
