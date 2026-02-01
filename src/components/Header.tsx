import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto px-16 py-12">
        <div className="flex items-start justify-between">
          <Link href="/" className="text-xl font-bold text-zinc-50 hover:text-[var(--hover-color)] transition-colors hide-mouse-circle">
            SN
          </Link>
          <div className="flex flex-col space-y-4 text-right">
            <Link
              href="/about"
              className="hover:text-[var(--hover-color)] transition-colors hide-mouse-circle"
            >
              About Me
            </Link>
            <Link
              href="/experience"
              className="hover:text-[var(--hover-color)] transition-colors hide-mouse-circle"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="hover:text-[var(--hover-color)] transition-colors hide-mouse-circle"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-[var(--hover-color)] transition-colors hide-mouse-circle"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
