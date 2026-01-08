const FirstResponder = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 pt-24 max-w-4xl">

        <h1 className="text-5xl font-bold mb-6">
          Route Optimizer for First Responders
        </h1>

        <p className="text-xl text-neutral-400 mb-12">
          Emergency dispatch optimization using cloud data processing
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Overview
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            This project focuses on optimizing emergency vehicle dispatch routes
            by processing incoming incident data and identifying optimal paths
            under time-critical constraints.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Approach
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-neutral-300">
            <li>Ingested emergency call data</li>
            <li>Processed routes using cloud-based analytics</li>
            <li>Optimized dispatch decisions under latency constraints</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Python", "BigQuery", "Google Cloud"].map((tech) => (
              <span
                key={tech}
                className="bg-neutral-800 text-purple-300 px-3 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Devpost Submission
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-neutral-300">
            <li>https://devpost.com/software/route-optimizer-for-first-responders</li>
           
          </ul>
        </section>

      </div>
    </div>
  );
};

export default FirstResponder;
