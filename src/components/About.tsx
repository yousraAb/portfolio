// "use client";

// import { motion } from "framer-motion";

// const About: React.FC = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.7 }}
//       id="about"
//       className="py-20 ..."
//     >
//       <section
//   id="about"
//   className="py-24 bg-gradient-to-b from-[#121026] via-[#1a1635] to-[#f5f5f7] text-gray-100 text-center relative overflow-hidden"
// >
//   <div className="max-w-3xl mx-auto px-6">
//     <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
//       About Me
//     </h2>
//     <p className="text-lg leading-relaxed text-gray-300 mb-8">
//       Hi 👋 I’m <span className="text-indigo-400 font-semibold">Yousra Abid</span>, a passionate
//       <span className="text-fuchsia-400 font-semibold"> Full Stack Developer </span> based in
//       <span className="text-indigo-400"> Marrakech, Morocco</span>. I specialize in building
//       dynamic, high-performance web apps using <span className="text-fuchsia-400">Laravel</span>,
//       <span className="text-indigo-400"> ReactJS</span>, and <span className="text-indigo-400">Next.js</span>.
//     </p>

//     <p className="text-lg text-gray-400">
//       I’ve worked with <span className="text-fuchsia-300">international teams</span>, implemented
//       <span className="text-indigo-300"> real-time WebSocket features</span>, and led
//       <span className="text-fuchsia-300"> Agile projects</span>. I’m passionate about
//       <span className="text-indigo-300"> clean code</span> and
//       <span className="text-fuchsia-300"> UX-driven design</span>.
//     </p>

//     <button className="mt-10 bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:opacity-90 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all duration-300">
//       Explore My Work 🚀
//     </button>
//   </div>
// </section>



//     </motion.section>
//   );
// };

// export default About;
"use client";

import { motion } from "framer-motion";

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
      {/* soft glowing background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-200"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8"
        >
          Hi 👋 I’m <span className="text-indigo-400 font-semibold">Yousra Abid</span>, a passionate
          <span className="text-fuchsia-400 font-semibold"> Full Stack Developer </span>
          based in <span className="text-indigo-400">Marrakech, Morocco</span>. I build dynamic,
          high-performance web apps using{" "}
          <span className="text-fuchsia-400">Laravel</span>,{" "}
          <span className="text-indigo-400">ReactJS</span>, and{" "}
          <span className="text-indigo-400">Next.js</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-lg text-gray-400"
        >
          I’ve collaborated with <span className="text-fuchsia-300">international teams</span>,
          integrated <span className="text-indigo-300">real-time WebSocket features</span>, and led{" "}
          <span className="text-fuchsia-300">Agile projects</span>. I care deeply about{" "}
          <span className="text-indigo-300">clean code</span>,{" "}
          <span className="text-fuchsia-300">beautiful UX</span>, and continuous learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="inline-block mt-10 bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:opacity-90 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
