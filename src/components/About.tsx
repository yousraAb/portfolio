

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const About: React.FC = () => {
//   return (
//     <motion.section
//       id="about"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0a0118] via-[#121026] to-[#1b163d] text-gray-100"
//     >
//       {/* Background Glowing Orbs */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-200"></div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Side - Animated Avatar */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center md:justify-end"
//         >
//           <motion.div
//             animate={{
//               y: [0, -10, 0],
//               rotate: [0, 2, -2, 0],
//               boxShadow: [
//                 "0 0 30px rgba(236,72,153,0.3)",
//                 "0 0 40px rgba(99,102,241,0.4)",
//                 "0 0 30px rgba(236,72,153,0.3)",
//               ],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               repeatType: "mirror",
//               ease: "easeInOut",
//             }}
//             className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-tr from-fuchsia-500 to-indigo-400 p-[2px]"
//           >
//             <div className="rounded-full overflow-hidden bg-[#0a0118]">
//               {/* Replace this image with your own portrait */}
//               <Image
//                 src="/profile.jpeg"
//                 alt="Yousra Abid portrait"
//                 width={300}
//                 height={300}
//                 className="object-cover w-full h-full rounded-full"
//               />
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Right Side - Text */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="text-center md:text-left"
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent"
//           >
//             About Me
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.7 }}
//             className="text-lg leading-relaxed text-gray-300 mb-5"
//           >
//             Hi 👋 I’m <span className="text-indigo-400 font-semibold">Yousra Abid</span>, a passionate
//             <span className="text-fuchsia-400 font-semibold"> Full Stack Developer </span>
//             based in <span className="text-indigo-400">Marrakech, Morocco</span>. I build dynamic,
//             high-performance web apps using{" "}
//             <span className="text-fuchsia-400">Laravel</span>,{" "}
//             <span className="text-indigo-400">ReactJS</span>, and{" "}
//             <span className="text-indigo-400">Next.js</span>.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.7 }}
//             className="text-lg text-gray-400"
//           >
//             I’ve collaborated with <span className="text-fuchsia-300">international teams</span>,
//             integrated <span className="text-indigo-300">real-time WebSocket features</span>, and led{" "}
//             <span className="text-fuchsia-300">Agile projects</span>. I care deeply about{" "}
//             <span className="text-indigo-300">clean code</span>,{" "}
//             <span className="text-fuchsia-300">beautiful UX</span>, and continuous learning.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             <a
//               href="#projects"
//               className="inline-block mt-8 bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-400 hover:to-indigo-400 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
//             >
//               Explore My Work
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default About;
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0a0118] via-[#121026] to-[#1b163d] text-gray-100"
    >
      {/* Background Glowing Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-200"></div>
      </div>

      {/* GRID: 1/3 (image) - 2/3 (text) */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
        
        {/* Left Side - Animated Avatar */}
        <motion.div
          className="flex justify-center md:justify-end md:col-span-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
              boxShadow: [
                "0 0 30px rgba(236,72,153,0.3)",
                "0 0 40px rgba(99,102,241,0.4)",
                "0 0 30px rgba(236,72,153,0.3)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-tr from-fuchsia-500 to-indigo-400 p-[2px]"
          >
            <div className="rounded-full overflow-hidden bg-[#0a0118]">
              <Image
                src="/profile.jpeg"
                alt="Yousra Abid portrait"
                width={300}
                height={300}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="text-center md:text-left md:col-span-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          {/* Updated Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg leading-relaxed text-gray-300 mb-5"
          >
            Hi 👋 I’m <span className="text-indigo-400 font-semibold">Yousra Abid</span>, a passionate
            <span className="text-fuchsia-400 font-semibold"> Full Stack Developer </span>
            based in <span className="text-indigo-400">Morocco</span>. I build dynamic,
            high-performance web applications using{" "}
            <span className="text-fuchsia-400">Laravel</span>,{" "}
            <span className="text-indigo-400">ReactJS</span>, and{" "}
            <span className="text-indigo-400">Next.js</span>, while also managing full project
            life cycles from planning to deployment.
          </motion.p>

          {/* Updated Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg text-gray-400"
          >
            I’ve collaborated with <span className="text-fuchsia-300">international teams</span>,
            integrated <span className="text-indigo-300">real-time WebSocket features</span>, and led{" "}
            <span className="text-fuchsia-300">Agile projects</span>. Beyond development, I also handle{" "}
            <span className="text-indigo-300">project management & PMO responsibilities</span> —
            including task planning, estimations, sprint coordination, KPI reporting, and overseeing
            end-to-end delivery to ensure smooth, efficient, and well-organized projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="inline-block mt-8 bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-400 hover:to-indigo-400 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
            >
              Explore My Work
            </a>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;
