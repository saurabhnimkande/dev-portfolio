import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-zinc-50 mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            I'm a passionate developer specializing in modern web technologies.
            Explore my projects and learn more about my work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="expand-mouse-circle bg-zinc-50 text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
            >
              View My Projects
            </Link>
            <Link
              href="/about"
              className="expand-mouse-circle border border-zinc-700 text-zinc-300 px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors"
            >
              Learn More About Me
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="expand-mouse-circle bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-800">
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              Full-Stack Development
            </h3>
            <p className="text-zinc-400">
              Building end-to-end web applications with modern frameworks and best practices.
            </p>
          </div>
          <div className="expand-mouse-circle bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-800">
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              API Design
            </h3>
            <p className="text-zinc-400">
              Creating robust and scalable APIs that power modern applications.
            </p>
          </div>
          <div className="expand-mouse-circle bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-800">
            <h3 className="text-xl font-semibold text-zinc-50 mb-3">
              Open Source
            </h3>
            <p className="text-zinc-400">
              Contributing to the developer community through open source projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
