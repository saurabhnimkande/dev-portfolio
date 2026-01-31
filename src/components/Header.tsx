import Link from 'next/link';

export default function Header() {
  return (
    <header className="hide-mouse-circle bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto px-16 py-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-zinc-50">
            SN
          </Link>
          <div className="flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              About Me
            </Link>
            <Link
              href="/experience"
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
