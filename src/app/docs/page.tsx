export default function Docs() {
  const docs = [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Learn how to set up and start using my projects",
    },
    {
      id: "api-reference",
      title: "API Reference",
      description: "Complete API documentation for my applications",
    },
    {
      id: "examples",
      title: "Examples",
      description: "Code examples and use cases",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zinc-50 mb-8">
          Documentation
        </h1>
        <p className="text-zinc-400 mb-12">
          Explore comprehensive documentation for my projects and tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {docs.map((doc) => (
            <a
              key={doc.id}
              href={`/docs/${doc.id}`}
              className="block bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-800 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-zinc-50 mb-2">
                {doc.title}
              </h3>
              <p className="text-zinc-400">
                {doc.description}
              </p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}