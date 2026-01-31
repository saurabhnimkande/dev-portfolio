import Link from 'next/link';

export default function Header() {
  return (
    <header className="hide-mouse-circle bg-zinc-900 border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-zinc-50">
            My Portfolio
          </Link>
          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/docs"
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              Docs
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}