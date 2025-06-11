"use client";

import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      id="about"
      className="py-20 ..."
    >
      <section id="about" className="py-20 px-4 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I&apos;m <strong>Yousra Abid</strong>, a passionate Full Stack Developer based in Marrakech, Morocco.
            I specialize in <strong>Laravel, ReactJS, and Next.js</strong>, and I love crafting clean,
            scalable web applications with great user experience.
          </p>
          <p className="mt-4 text-lg">
            I&apos;ve worked with international teams, integrated real-time features with WebSockets, and led Agile projects.
            I&apos;m always exploring new technologies like TypeScript and AI-driven solutions.
          </p>
        </div>
      </section>


    </motion.section>
  );
};

export default About;
