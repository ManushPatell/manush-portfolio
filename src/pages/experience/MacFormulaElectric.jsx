const MacFormulaElectric = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 pt-24 max-w-4xl">

        <h1 className="text-5xl font-bold mb-4">
          Controls & Firmware Developer
        </h1>

        <p className="text-xl text-neutral-400 mb-10">
          Mac Formula Electric · Sept 2024 – Present
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Overview
          </h2>
          <p className="text-neutral-300 leading-relaxed">
            Developing embedded firmware and control systems for a Formula SAE
            electric vehicle. Focused on low-voltage systems, CAN communication,
            and firmware reliability for pre-drive safety.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Responsibilities
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-neutral-300">
            <li>Implemented C++ drivers for low-voltage battery systems</li>
            <li>Migrated control logic from Simulink models to C++</li>
            <li>Collaborated with electrical subteams</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {["C", "C++", "CAN", "Python", "Git"].map((tech) => (
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

export default MacFormulaElectric;
