import navaid1 from "../../assets/navaid1.jpg";
import navaid2 from "../../assets/navaid2.jpg";
import circuitSetup from "../../assets/circuit_setup.png";

const NavAid = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 pt-24 max-w-4xl">

        {/* Title */}
        <h1 className="text-5xl font-bold mb-6">
          NavAid
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-neutral-400 mb-12">
          Wearable assistive navigation system for deaf-blind users
        </p>

        {/* ───────────── Overview ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>

          <p className="text-neutral-300 leading-relaxed">
            NavAid is a wearable assistive device developed during DeltaHacks to
            help deaf-blind users navigate urban environments. A shoulder-mounted
            camera captures street-level visual information, which is processed
            and translated into braille output on a handheld device.
          </p>

          <p className="text-neutral-300 leading-relaxed mt-4">
            The system focuses on extracting navigation-critical cues rather than
            attempting full scene understanding, reducing cognitive overload
            while maintaining safety and usability.
          </p>
        </section>

        {/* ───────────── System Architecture & Vision Pipeline ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            System Architecture & Vision Pipeline
          </h2>

          <p className="text-neutral-300 leading-relaxed">
            NavAid consists of three core subsystems: a vision input module,
            a real-time processing pipeline, and a tactile output interface.
            A forward-facing camera captures live imagery, which is processed
            using OpenCV-based techniques to extract navigation-relevant
            information.
          </p>

          <p className="text-neutral-300 leading-relaxed mt-4">
            The pipeline prioritizes features such as text, directional cues,
            and contextual indicators while suppressing non-essential details.
            This ensures low latency and clear, actionable output for the user.
          </p>
        </section>

        {/* ───────────── Vision Processing Outputs ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Vision Processing Outputs
          </h2>

          <p className="text-neutral-300 leading-relaxed mb-6">
            The following frames show intermediate and final outputs from the
            computer vision pipeline. These visualizations were used to verify
            text detection, feature extraction, and filtering behavior before
            translating information into braille output.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={navaid1}
              alt="NavAid vision pipeline output"
              className="rounded-lg border border-neutral-800"
            />
            <img
              src={navaid2}
              alt="NavAid processed frame highlighting navigation cues"
              className="rounded-lg border border-neutral-800"
            />
          </div>

          <p className="text-sm text-neutral-400 text-center mt-4 max-w-xl mx-auto">
            Example frames illustrating how raw camera input is filtered to
            extract navigation-relevant information
          </p>
        </section>

        {/* ───────────── Braille Output & Hardware Interface ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Braille Output & Hardware Interface
          </h2>

          <p className="text-neutral-300 leading-relaxed mb-6">
            Processed navigation cues are converted into braille patterns and
            transmitted to a handheld tactile interface. The hardware was
            designed for responsiveness and clarity, ensuring timely feedback
            without relying on audio or visual channels.
          </p>

          <img
            src={circuitSetup}
            alt="NavAid braille interface circuit setup"
            className="rounded-lg border border-neutral-800 mx-auto mb-4"
          />

          <p className="text-sm text-neutral-400 text-center max-w-xl mx-auto">
            Prototype circuit used to drive the braille output interface
          </p>
        </section>

        {/* ───────────── Engineering Constraints & Tradeoffs ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Engineering Constraints & Tradeoffs
          </h2>

          <p className="text-neutral-300 leading-relaxed">
            As a hackathon project, NavAid was developed under strict time and
            hardware constraints. Design decisions favored robustness, clarity,
            and low latency over feature completeness or full environmental
            modeling.
          </p>
        </section>

        {/* ───────────── Conclusion ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>

          <p className="text-neutral-300 leading-relaxed">
            NavAid demonstrates how assistive technology can be built by
            selectively extracting and translating information rather than
            attempting full scene understanding. The project emphasized
            accessibility-first design, real-time processing, and practical
            engineering tradeoffs.
          </p>

          <p className="text-neutral-300 leading-relaxed mt-4 text-sm text-neutral-400">
            Technologies used include Python, OpenCV, Raspberry Pi, and
            accessibility-oriented system design.
          </p>
        </section>

        {/* ───────────── Links ───────────── */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-3">Links</h2>

          <a
            href="https://github.com/HiThereBoss/DHXI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:underline block mb-2"
          >
            GitHub Repository
          </a>

          <a
            href="https://devpost.com/software/nav-aid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:underline"
          >
            Devpost Submission
          </a>
        </section>

      </div>
    </div>
  );
};

export default NavAid;
