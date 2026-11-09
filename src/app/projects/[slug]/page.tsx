"use client";

import { useParams } from "next/navigation";
import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#121026] to-[#1b163d] text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition mb-10"
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent"
        >
          {project.title}
        </motion.h1>

        <p className="text-gray-300 mb-8 max-w-3xl">{project.description}</p>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-indigo-300">
              Project Overview
            </h2>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {project.content}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-300">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 rounded-full text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {(project.liveUrl || project.repositoryUrl) && (
            <div className="flex flex-wrap gap-4 pt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-white shadow-md transition hover:bg-indigo-600"
                >
                  <ExternalLink size={18} /> View live project
                </a>
              )}
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-indigo-400/30 px-6 py-3 text-indigo-300 transition hover:bg-indigo-500/10"
                >
                  <Github size={18} /> View source code
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
