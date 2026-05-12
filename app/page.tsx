const tools = [
  {
    name: "ERD Visualizer",
    description:
      "Visualize and explore entity relationship diagrams interactively. Map data models, trace relationships, and share insights across teams.",
    href: "https://github.com/ABG-AI-Intelligence-Suite/erd-visualizer",
    status: "live",
    category: "Data",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-6 lg:py-8">
        <div className="flex items-center gap-2">
          <span className="text-4xl lg:text-5xl font-bold leading-none" style={{ color: "#A100FF" }}>
            &gt;
          </span>
        </div>
        <a
          href="mailto:bradley.harrison@accenture.com"
          className="text-sm lg:text-base px-5 lg:px-7 py-2 lg:py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
        >
          Get Access
        </a>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 sm:px-10 pt-10 pb-12 max-w-4xl mx-auto w-full">
        <h1
          className="font-semibold leading-[1.1] tracking-tight mb-5"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
        >
          Intelligent tools{" "}
          <span className="relative inline-block">
            built for ABG
            <svg
              viewBox="0 0 220 10"
              className="absolute -bottom-1 left-0 w-full"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2,6 Q30,1 60,5 Q90,9 120,4 Q155,0 190,5 Q205,7 218,4"
                stroke="#A100FF"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M5,8 Q40,5 80,7 Q120,9 160,6 Q185,4 218,7"
                stroke="#A100FF"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </span>
        </h1>
        <p
          className="text-white/50 leading-relaxed max-w-xl mx-auto"
          style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)" }}
        >
          A curated suite of AI-powered tools designed to reduce manual effort,
          accelerate workflows, and drive better decisions across the organization.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="border-t border-white/10" />
      </div>

      {/* Tools Grid */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 py-10">
        <div className="mb-6">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-white/30">
            Tools — {tools.length} available
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full border"
                  style={{
                    color: "#A100FF",
                    borderColor: "#A100FF40",
                    backgroundColor: "#A100FF10",
                  }}
                >
                  {tool.category}
                </span>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    tool.status === "live"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-white/5 text-white/30 border border-white/10"
                  }`}
                >
                  {tool.status === "live" ? "● Live" : "Coming soon"}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{tool.name}</h3>
              <p className="text-white/50 text-base leading-relaxed">{tool.description}</p>

              <div className="mt-5 flex items-center gap-1 text-sm font-medium" style={{ color: "#A100FF" }}>
                Open tool
                <svg
                  className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}

          {/* Placeholder card */}
          <div className="rounded-2xl border border-dashed border-white/10 p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
            <p className="text-white/40 text-base">More tools coming soon</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 sm:px-10 py-6 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold" style={{ color: "#A100FF" }}>&gt;</span>
          <span className="text-white/50 text-xs">ABG AI Intelligence Suite</span>
        </div>
        <span className="text-white/50 text-xs">Accenture Internal</span>
      </footer>
    </div>
  );
}
