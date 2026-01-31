export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400">
            © 2024 My Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}