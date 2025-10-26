"use client";

import { Mail, Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-gradient-to-t from-gray-950 via-gray-900 to-black border-t border-gray-800 text-gray-400 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="mailto:yousraabid93@gmail.com"
          className="hover:text-indigo-400 transition"
        >
          <Mail className="inline-block w-5 h-5" />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
        >
          <Github className="inline-block w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/yousra-abid/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
        >
          <Linkedin className="inline-block w-5 h-5" />
        </a>
      </div>

      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-indigo-400 font-semibold">Yousra Abid</span> — All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
