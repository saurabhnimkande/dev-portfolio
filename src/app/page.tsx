'use client';

import { useTypewriter } from 'react-simple-typewriter';

export default function Home() {
  const [text] = useTypewriter({
    words: ['SAURABH', 'DEVELOPER'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="bg-background flex flex-col">
      <div className="my-48 flex flex-col items-center">
        <div>
          <h1 className="text-9xl font-bold text-zinc-50 mb-6 expand-mouse-circle w-[500px]">
            HEY, I'M
          </h1>
          <div className="text-9xl font-semibold text-zinc-300 mb-8 h-26 w-[700px] flex items-center justify-start expand-mouse-circle">
            {text}
          </div>
        </div>
      </div>
      <div className="max-w-6xl px-4 py-16">
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
