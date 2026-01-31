export default function About() {
  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
}