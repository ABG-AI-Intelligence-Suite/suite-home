const tools = [
  {
    name: "ERD Visualizer",
    description: "Visualize and explore entity relationship diagrams interactively.",
    href: "https://github.com/ABG-AI-Intelligence-Suite/erd-visualizer",
    status: "live",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            ABG AI Intelligence Suite
          </h1>
          <p className="text-gray-400 text-lg">
            A collection of AI-powered tools built to accelerate workflows across the organization.
          </p>
        </div>

        <div className="grid gap-4">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-gray-800 bg-gray-900 p-6 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold group-hover:text-white text-gray-100 mb-1">
                    {tool.name}
                  </h2>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </div>
                <span
                  className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
                    tool.status === "live"
                      ? "bg-green-900 text-green-300"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {tool.status}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
