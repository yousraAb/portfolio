// "use client";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-4 relative overflow-hidden"
//     >
//       {/* animated particles */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#6366f1,transparent_40%),radial-gradient(circle_at_80%_70%,#ec4899,transparent_40%)] animate-pulse opacity-20" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-2xl z-10"
//       >
//         <h1 className="text-5xl md:text-6xl font-bold mb-4">
//           Hi, I’m <span className="text-indigo-400">Yousra Abid</span>
//         </h1>
//         <p className="text-lg md:text-xl mb-8 text-gray-300">
//           Full Stack Developer crafting smart & scalable apps with Laravel and ReactJS
//         </p>
//         <div className="flex justify-center gap-4 flex-wrap">
//           <a
//             href="#projects"
//             className="bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-600 transition shadow-md"
//           >
//             View Projects
//           </a>
//           <a
//             href="#contact"
//             className="border border-indigo-400 text-indigo-300 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-950 transition"
//           >
//             Contact Me
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// };
// export default Hero;
"use client";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction Section"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-4 relative overflow-hidden"
    >
      {/* animated particles */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#6366f1,transparent_40%),radial-gradient(circle_at_80%_70%,#ec4899,transparent_40%)] animate-pulse opacity-20"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I’m{" "}
          <span
            className="text-indigo-400"
            aria-label="Yousra Abid"
          >
            Yousra Abid
          </span>
        </h1>

        {/* Secondary hidden heading for SEO */}
        <h2 className="sr-only">Full Stack Developer Portfolio</h2>

        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Full Stack Developer crafting smart & scalable apps with Laravel and ReactJS
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <ScrollLink
            to="projects"
            smooth={true}
            duration={600}
            offset={-70}
            className="bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-600 transition shadow-md cursor-pointer"
          >
            View Projects
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            className="border border-indigo-400 text-indigo-300 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-950 transition cursor-pointer"
          >
            Contact Me
          </ScrollLink>
        </div>

      </motion.div>
    </section>
  );
};
export default Hero;
