import simulink from "../../assets/powerpoint-D2wtQ37r.pdf"

const SimulinkToCpp = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 pt-24 pb-20 max-w-4xl">

        <h1 className="text-5xl font-bold mb-6">
          Simulink Models to C++ Firmware
        </h1>

        <p className="text-xl text-neutral-400 mb-12">
          Transitioning control logic from model-based design to production firmware
        </p>

        {/* ───────────── Overview ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-neutral-300 leading-relaxed">
            This project involved refactoring control logic originally developed
            in Simulink into readable, maintainable C++ firmware suitable for
            embedded deployment.
          </p>
        </section>

        {/* ───────────── Why the Transition ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Why the Transition</h2>
          <ul className="list-disc ml-6 space-y-2 text-neutral-300">
            <li>Improve firmware maintainability</li>
            <li>Enable version control and code reviews</li>
            <li>Reduce generated-code complexity</li>
            <li>Increase runtime transparency</li>
          </ul>
        </section>

        {/* ───────────── Slides ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Project Slides
          </h2>

          <div className="w-full h-[600px] border border-neutral-800 rounded-lg overflow-hidden">
            <iframe
              src={simulink}
              title="Simulink to C++ Presentation"
              className="w-full h-full"
            />
          </div>

          <p className="text-sm text-neutral-400 text-center mt-3">
            Slides outlining the motivation, architecture, and refactoring process
          </p>
        </section>

        {/* ───────────── Technologies ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {["Simulink", "C++", "Embedded Firmware"].map((tech) => (
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

export default SimulinkToCpp;
