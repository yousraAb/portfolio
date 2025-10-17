// import { notFound } from "next/navigation";
// import { projects } from "@/lib/projects";

// export async function generateStaticParams() {
//   return projects.map((project) => ({ slug: project.slug }));
// }

// export default function ProjectDetail({ params }: { params: { slug: string } }) {
//   const project = projects.find((p) => p.slug === params.slug);
//   if (!project) return notFound();

//   return (
//     <section className="py-20 px-6 max-w-3xl mx-auto text-gray-800">
//       <h1 className="text-4xl font-bold text-indigo-700 mb-4">{project.title}</h1>
//       <p className="mb-4 text-lg">{project.description}</p>
//       <div className="flex flex-wrap gap-2 mb-6">
//         {project.tech.map((tech, i) => (
//           <span
//             key={i}
//             className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//       <p className="text-gray-700 whitespace-pre-line">{project.content}</p>
//     </section>
//   );
// }

import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">
        {project.title}
      </h1>
      <p className="mb-4 text-lg">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-700 whitespace-pre-line">{project.content}</p>
    </section>
  );
}
