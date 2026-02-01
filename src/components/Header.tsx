'use client';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto px-16 py-12">
        <div className="flex items-start justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-zinc-50 hover:text-[var(--hover-color)] transition-colors hide-mouse-circle"
          >
            SN
          </button>
          <div className="flex flex-col space-y-4 text-right">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[var(--hover-color)] transition-colors hide-mouse-circle text-left"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="hover:text-[var(--hover-color)] transition-colors hide-mouse-circle text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-[var(--hover-color)] transition-colors hide-mouse-circle text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[var(--hover-color)] transition-colors hide-mouse-circle text-left"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
