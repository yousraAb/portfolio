
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Layers,
  Globe2,
  Rocket,
  Workflow,
} from "lucide-react";

const services = [
  {
    title: "Full‑Stack Web Development",
    icon: Code2,
    description:
      "Building high‑performance web applications using Laravel, React, and Next.js — with clean architecture, scalable APIs, and modern UI implementations.",
    seo:
      "Optimized code structure, fast loading, strong Core Web Vitals, and clean semantic markup for better search indexing.",
  },
  {
    title: "Figma → React / Next.js Conversion",
    icon: Layers,
    description:
      "Transforming any Figma design into pixel‑perfect, production‑ready React or Next.js code using TypeScript and Tailwind CSS.",
    seo:
      "SEO‑friendly components, accessible structures, optimized images, and lightweight responsive layouts.",
  },
  {
    title: "WordPress Development & SEO Optimization",
    icon: Globe2,
    description:
      "Custom WordPress development including themes, plugins, performance boosting, and technical SEO improvements.",
    seo:
      "Keyword optimization, schema markup, sitemaps, caching, indexing optimization, and website ranking improvements.",
  },
  {
    title: "Project Management & PMO",
    icon: Workflow,
    description:
      "Managing full project lifecycles — planning, execution, coordination with teams, risk management, reporting, and delivery.",
    seo:
      "Clear documentation, optimized workflows, process consistency, and delivery tracking that improves operational efficiency.",
  },
  {
    title: "CI/CD & DevOps Assistance",
    icon: Rocket,
    description:
      "Implementing basic CI/CD pipelines, automated deployments, GitHub Actions, and development workflow optimization.",
    seo:
      "Improved deployment speed, zero‑downtime strategies, and optimized development cycles for better productivity.",
  },
];

export default function ServicesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="services"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-28 px-6 bg-gradient-to-b from-[#1b163d] via-[#100b28] to-[#0a0118] text-gray-100 overflow-hidden"
    >
      {/* background glow */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-fuchsia-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-200"></div>
      </div>

      <motion.h2
        initial={prefersReducedMotion ? {} : { opacity: 0, y: -30 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent"
      >
        Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.03,
                    rotateY: 5,
                    rotateX: 2,
                    transition: { duration: 0.4 },
                  }
            }
            className="group relative bg-[#141026]/60 border border-white/10 backdrop-blur-xl rounded-2xl p-7 hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-all duration-500 cursor-pointer"
          >
            {/* glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 blur-xl -z-10"></div>

            <service.icon className="w-12 h-12 mb-5 text-fuchsia-300 group-hover:text-indigo-300 transition" />

            <h3 className="text-2xl font-semibold text-indigo-300 group-hover:text-fuchsia-300 mb-3 transition">
              {service.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {service.description}
            </p>

            <p className="text-xs text-fuchsia-300/80 italic leading-relaxed">
              {service.seo}
            </p>
          </motion.div>
        ))}
      </div>

      {/* bottom gradient line */}
      <div
        aria-hidden="true"
        className="mt-20 h-[2px] w-2/3 mx-auto bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-transparent opacity-40 rounded-full animate-pulse"
      ></div>
    </motion.section>
  );
}
