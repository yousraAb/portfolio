const skills = [
  "Laravel", "ReactJS", "Next.js", "Node.js", "TypeScript",
  "WebSockets", "MySQL", "Docker", "GitHub", "WordPress", "CI/CD"
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
