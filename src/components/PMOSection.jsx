// PMOSection.jsx

"use client";


import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, CalendarCheck, BarChart, ListChecks } from "lucide-react";

const PMOSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="pmo"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-24 px-6 bg-gradient-to-b from-[#0a0118] via-[#121026] to-[#1b163d] text-gray-100 overflow-hidden"
    >
      {/* Glowing background orbs */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-fuchsia-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-200"></div>
      </div>

      {/* Title */}
      <motion.h2
        initial={prefersReducedMotion ? {} : { opacity: 0, y: -30 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent"
      >
        Project Management & PMO
      </motion.h2>

      {/* Two columns: Timeline + Description */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left — Timeline cards */}
        <div className="flex flex-col gap-8">
          {timelineItems.map((item, i) => (
            <motion.div
              key={i}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.5 + i * 0.1 }}
              className="relative flex items-start gap-4 p-6 bg-[#141026]/60 rounded-2xl border border-white/10 backdrop-blur-xl shadow-lg"
            >
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md text-white">
                {item.icon}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right — Description / Badges */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col p-10 bg-[#141026]/60 rounded-3xl border border-white/10 backdrop-blur-xl shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            How I Work as a PM / PMO
          </h3>

          <p className="text-gray-300 leading-relaxed mb-4">
            I ensure every project starts with a clear vision: requirements, planning,
            timelines, and risk assessment. I translate business needs into structured,
            actionable tasks for designers and developers.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Using Agile Scrum, I manage sprints, facilitate team communication,
            coordinate daily operations, and unblock issues quickly.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Through dashboards and performance indicators, I monitor progress, detect risks,
            and present clear reports to stakeholders and management.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {highlights.map((h, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-400/20"
              >
                {h}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom subtle animated gradient line */}
      <div
        aria-hidden="true"
        className="mt-20 h-[2px] w-2/3 mx-auto bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-transparent opacity-40 rounded-full animate-pulse"
      />
    </motion.section>
  );
};

// Timeline Data
const timelineItems = [
  {
    title: "Full Project Lifecycle Ownership",
    desc: "From initiation to deployment: planning, documentation, execution, and launch across multiple web applications.",
    icon: <CalendarCheck size={16} />,
  },
  {
    title: "Agile & Scrum Leadership",
    desc: "Creating sprint plans, managing standups, defining tasks, and ensuring alignment across design and development teams.",
    icon: <ListChecks size={16} />,
  },
  {
    title: "Performance Tracking & Reporting",
    desc: "Building dashboards, monitoring KPIs, identifying risks, and presenting clear executive-level project updates.",
    icon: <BarChart size={16} />,
  },
  {
    title: "Process Optimization",
    desc: "Improving workflows, enhancing team efficiency, removing blockers, and supporting better decision-making.",
    icon: <CheckCircle size={16} />,
  },
];

// Badges
const highlights = [
  "Agile Scrum",
  "Roadmaps",
  "Task Breakdown",
  "Team Coordination",
  "Risk Management",
  "Reporting",
  "Dashboards",
  "Cross-team Communication",
];

export default PMOSection;
