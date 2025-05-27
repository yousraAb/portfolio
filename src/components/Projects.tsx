type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Appointment Calendar System",
    description: "A real-time appointment management app with role-based access using Laravel + ReactJS + WebSockets.",
    tech: ["Laravel", "ReactJS", "WebSockets", "MySQL"],
    link: "#"
  },
  {
    title: "E-commerce WordPress Site",
    description: "Custom WordPress theme with WooCommerce, SEO optimization and admin dashboard.",
    tech: ["WordPress", "WooCommerce", "PHP", "SEO"],
    link: "#"
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Tech:</strong> {project.tech.join(", ")}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  className="text-indigo-600 hover:underline text-sm"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
