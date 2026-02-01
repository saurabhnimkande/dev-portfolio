'use client';

import { useTypewriter } from 'react-simple-typewriter';

export default function Home() {
  const [text] = useTypewriter({
    words: ['SAURABH', 'DEVELOPER'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

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
    <div className="bg-background flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col">
        <div className="my-48 flex flex-col items-center">
          <div>
            <h1 className="text-9xl font-bold mb-6 expand-mouse-circle w-[500px]">
              HEY, I'M
            </h1>
            <div className="text-9xl font-semibold text-[#ffe76e] mb-8 h-26 w-[700px] flex items-center justify-start expand-mouse-circle">
              {text}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-background">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-zinc-50 mb-8">
            About Me
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-400">
              Welcome to my portfolio! I'm a passionate developer with expertise in modern web technologies.
              I love creating beautiful, functional, and user-friendly applications.
            </p>
            <p className="text-zinc-400">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>
        </main>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen bg-background">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-zinc-50 mb-8">
            Experience
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-400 mb-8">
              Here's a summary of my professional journey and key experiences.
            </p>
            <div className="space-y-6">
              <div className="bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-800">
                <h3 className="text-xl font-semibold text-zinc-50 mb-2">Software Developer</h3>
                <p className="text-zinc-400 mb-4">Current Role • 2023 - Present</p>
                <p className="text-zinc-400">
                  Developing and maintaining web applications using modern technologies.
                  Collaborating with cross-functional teams to deliver high-quality software solutions.
                </p>
              </div>
              <div className="bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-800">
                <h3 className="text-xl font-semibold text-zinc-50 mb-2">Junior Developer</h3>
                <p className="text-zinc-400 mb-4">Previous Role • 2022 - 2023</p>
                <p className="text-zinc-400">
                  Started my journey in software development, working on various projects
                  and learning industry best practices.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-background">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-background">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-zinc-50 mb-8">
            Contact
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-400 mb-8">
              I'd love to hear from you! Feel free to reach out for collaborations, opportunities, or just to say hello.
            </p>
            <div className="space-y-4">
              <div className="bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-800">
                <h3 className="text-xl font-semibold text-zinc-50 mb-2">Email</h3>
                <a href="mailto:contact@example.com" className="text-blue-400 hover:underline">
                  contact@example.com
                </a>
              </div>
              <div className="bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-800">
                <h3 className="text-xl font-semibold text-zinc-50 mb-2">LinkedIn</h3>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  linkedin.com/in/yourprofile
                </a>
              </div>
              <div className="bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-800">
                <h3 className="text-xl font-semibold text-zinc-50 mb-2">GitHub</h3>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  github.com/yourusername
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
