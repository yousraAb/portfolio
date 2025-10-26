// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { projects } from "@/lib/projects";

// const Projects: React.FC = () => {
//   return (
//     <section id="projects" className="py-20 px-4 bg-gray-100 text-gray-900">
//       <div className="max-w-5xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-bold text-center mb-10"
//         >
//           Projects
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Link key={index} href={`/projects/${project.slug}`} passHref>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.15 }}
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 cursor-pointer"
//               >
//                 <h3 className="text-2xl font-semibold mb-2 text-indigo-700">
//                   {project.title}
//                 </h3>
//                 <p className="mb-3 text-gray-700">{project.description}</p>
//                 <div className="mb-2 flex flex-wrap gap-2">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <p className="text-sm text-indigo-500 hover:underline mt-2">
//                   → View more
//                 </p>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-24 px-6 bg-gradient-to-b from-[#1b163d] via-[#100b28] to-[#0a0118] text-gray-100 overflow-hidden"
    >
      {/* Glowing background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-fuchsia-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-200"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.slug}`} passHref>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
                rotateX: 2,
                transition: { duration: 0.4 },
              }}
              className="group relative bg-[#141026]/60 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-all duration-500 cursor-pointer"
            >
              {/* glowing gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 blur-xl -z-10"></div>

              <h3 className="text-2xl font-semibold mb-3 text-indigo-300 group-hover:text-fuchsia-300 transition">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-indigo-500/20 to-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-400/20 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm font-medium text-indigo-400 group-hover:text-fuchsia-300 transition">
                → View details
              </p>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* subtle animated gradient line at bottom */}
      <div className="mt-20 h-[2px] w-2/3 mx-auto bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-transparent opacity-40 rounded-full animate-pulse"></div>
    </motion.section>
  );
};

export default Projects;
