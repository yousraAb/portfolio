import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#121026] to-[#1b163d] px-6 py-20 text-gray-100">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center text-indigo-300 transition hover:text-fuchsia-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
        >
          Back to home
        </Link>

        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Projects
          </h1>
          <p className="max-w-2xl leading-relaxed text-gray-300">
            A selection of web development and project delivery work.
          </p>
        </header>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full rounded-lg border border-white/10 bg-white/5 p-6 transition hover:border-fuchsia-400/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
              >
                <h2 className="mb-3 text-xl font-semibold text-indigo-200 transition group-hover:text-fuchsia-200">
                  {project.title}
                </h2>
                <p className="mb-5 text-sm leading-relaxed text-gray-300">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-white/10 px-2 py-1 text-xs text-gray-300"
                    >
                      {tech.trim()}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-block text-sm font-medium text-fuchsia-200">
                  View case study <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
