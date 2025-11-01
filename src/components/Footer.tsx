"use client";

import { Mail, Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      className="py-10 bg-gradient-to-t from-gray-950 via-gray-900 to-black border-t border-gray-800 text-gray-400 text-center"
      role="contentinfo"
    >
      <nav
        aria-label="Social links"
        className="flex justify-center gap-6 mb-4"
      >
        <a
          href="mailto:yousraabid93@gmail.com"
          className="hover:text-indigo-400 transition"
          aria-label="Send an email to Yousra Abid"
        >
          <Mail
            className="inline-block w-5 h-5"
            aria-hidden="true"
            focusable="false"
          />
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
          aria-label="Visit Yousra Abid's GitHub profile"
        >
          <Github
            className="inline-block w-5 h-5"
            aria-hidden="true"
            focusable="false"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/yousra-abid/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
          aria-label="Visit Yousra Abid's LinkedIn profile"
        >
          <Linkedin
            className="inline-block w-5 h-5"
            aria-hidden="true"
            focusable="false"
          />
        </a>
      </nav>

      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-indigo-400 font-semibold">Yousra Abid</span> — All
        Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
