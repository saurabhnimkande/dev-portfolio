export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Mobile app development using React Native",
      tech: ["React Native", "Firebase"],
      link: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description: "E-commerce platform with modern UI/UX",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zinc-50 mb-12">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-800"
            >
              <h3 className="text-xl font-semibold text-zinc-50 mb-3">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-zinc-800 text-zinc-300 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}