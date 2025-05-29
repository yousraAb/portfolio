"use client";

import { motion } from "framer-motion";
const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Yousra Abid</h1>
        <p className="text-xl mb-6">Full Stack Developer | Laravel & ReactJS</p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-100 transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};
