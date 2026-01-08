const Gerrits = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 pt-24 max-w-4xl">

        <h1 className="text-5xl font-bold mb-4">
          Software Developer Intern
        </h1>

        <p className="text-xl text-neutral-400 mb-10">
          Gerrits Engineering Ltd · Jan 2025 – June 2025
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Overview
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Worked on internal tooling and automation initiatives focused on
            improving engineering workflows. Explored agentic AI systems and
            containerized development environments.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Contributions
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-neutral-300">
            <li>Developed internal software tools</li>
            <li>Explored agentic AI concepts for workflow automation</li>
            <li>Worked with containerized development environments</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "Docker", "Agentic AI"].map((tech) => (
              <span
                key={tech}
                className="bg-neutral-800 text-purple-300 px-3 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Gerrits;
