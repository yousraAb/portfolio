
// "use client";

// import { motion } from "framer-motion";

// const skills = [
//   "Laravel",
//   "ReactJS",
//   "Next.js",
//   "Node.js",
//   "TypeScript",
//   "WebSockets",
//   "MySQL",
//   "Docker",
//   "GitHub",
//   "WordPress",
//   "CI/CD",
// ];

// const Skills: React.FC = () => {
//   return (
//     <motion.section
//       id="skills"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="relative py-28 bg-gradient-to-b from-[#0a0118] via-[#121026] to-[#1b163d] text-white overflow-hidden"
//     >
//       {/* floating orbs for depth */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-10 left-1/4 w-40 h-40 bg-fuchsia-500/20 blur-3xl rounded-full animate-pulse"></div>
//         <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-200"></div>
//       </div>

//       <div className="max-w-5xl mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent"
//         >
//           Technical Skills
//         </motion.h2>

//         <div className="relative flex flex-wrap justify-center gap-6">
//           {skills.map((skill, index) => (
//             <motion.span
//               key={index}
//               initial={{
//                 opacity: 0,
//                 y: Math.random() * 100 - 50,
//                 x: Math.random() * 100 - 50,
//                 scale: 0.8,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//                 x: 0,
//                 scale: 1,
//               }}
//               whileHover={{
//                 scale: 1.15,
//                 textShadow: "0 0 20px rgba(236,72,153,0.8)",
//                 boxShadow: "0 0 20px rgba(99,102,241,0.4)",
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: index * 0.05,
//                 type: "spring",
//               }}
//               className="relative px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 border border-fuchsia-400/20 text-fuchsia-200 backdrop-blur-lg cursor-default select-none transition-all duration-300 hover:from-fuchsia-500/30 hover:to-indigo-500/30"
//             >
//               {skill}
//               {/* subtle glowing dot behind each skill */}
//               <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 blur-xl -z-10 opacity-50 group-hover:opacity-80 transition"></span>
//             </motion.span>
//           ))}
//         </div>

//         {/* floating particles background effect */}
//         <div className="absolute inset-0 overflow-hidden -z-20">
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 rounded-full bg-fuchsia-400/30"
//               initial={{
//                 x: Math.random() * 100 + "%",
//                 y: Math.random() * 100 + "%",
//               }}
//               animate={{
//                 y: ["0%", "100%", "0%"],
//                 opacity: [0.2, 0.8, 0.2],
//               }}
//               transition={{
//                 duration: 6 + Math.random() * 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.5,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Skills;
"use client";

import { motion, useReducedMotion } from "framer-motion";

const skills = [
  "Laravel",
  "ReactJS",
  "Next.js",
  "Node.js",
  "TypeScript",
  "WebSockets",
  "MySQL",
  "Docker",
  "GitHub",
  "WordPress",
  "CI/CD",
];

const Skills: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="skills"
      aria-labelledby="skills-heading"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative py-28 bg-gradient-to-b from-[#0a0118] via-[#121026] to-[#1b163d] text-white overflow-hidden"
    >
      {/* floating orbs for depth (decorative only) */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-fuchsia-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-200"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          id="skills-heading"
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <ul
          className="relative flex flex-wrap justify-center gap-6"
          aria-label="List of technical skills"
        >
          {skills.map((skill, index) => (
            <motion.li
              key={skill}
              initial={
                prefersReducedMotion
                  ? {}
                  : {
                      opacity: 0,
                      y: Math.random() * 100 - 50,
                      x: Math.random() * 100 - 50,
                      scale: 0.8,
                    }
              }
              whileInView={
                prefersReducedMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                      x: 0,
                      scale: 1,
                    }
              }
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: 1.15,
                      textShadow: "0 0 20px rgba(236,72,153,0.8)",
                      boxShadow: "0 0 20px rgba(99,102,241,0.4)",
                    }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                type: "spring",
              }}
              className="relative px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 border border-fuchsia-400/20 text-fuchsia-200 backdrop-blur-lg cursor-default select-none transition-all duration-300 hover:from-fuchsia-500/30 hover:to-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              tabIndex={0}
            >
              {skill}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 blur-xl -z-10 opacity-50 group-hover:opacity-80 transition"
              ></span>
            </motion.li>
          ))}
        </ul>

        {/* floating particles background effect */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden -z-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-fuchsia-400/30"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: ["0%", "100%", "0%"],
                      opacity: [0.2, 0.8, 0.2],
                    }
              }
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
