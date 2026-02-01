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
      <section id="hero" className="min-h-screen flex flex-col relative">
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
        <div className="absolute bottom-0 left-0 p-16 flex flex-col space-y-4">
          <a
            href="https://github.com/saurabhnimkande"
            target="_blank"
            rel="noopener noreferrer"
            className="hide-mouse-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-foreground hover:text-[#ffe76e] transition-colors"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/saurabhnimkande"
            target="_blank"
            rel="noopener noreferrer"
            className="hide-mouse-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-foreground hover:text-[#ffe76e] transition-colors"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
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
