import arch from "../../assets/BMS.png"
import dpec from "../../assets/writecommand.png"

const LvBms = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 pt-24 max-w-4xl">

        <h1 className="text-5xl font-bold mb-6">
          Low Voltage Battery Management System (LV BMS)
        </h1>

        <p className="text-xl text-neutral-400 mb-12">
          STM32-based battery monitoring and safety system for a Formula Electric vehicle
        </p>


        <img
                    src={arch}
                    alt="Architecture of Communication"
                    className="rounded-lg border border-neutral-800 mx-auto mb-6"
                  />

        {/* ───────────── Overview ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>

          <p className="text-neutral-300 leading-relaxed">
            This project involved developing firmware for a low-voltage battery
            management system (LV BMS) used in a Formula Electric race car. The
            system is responsible for monitoring cell voltages, reporting system
            health, and enforcing safety constraints required for vehicle operation.
          </p>
        </section>

        {/* ───────────── Firmware Architecture ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">
            Firmware Architecture
          </h2>

          <p className="text-neutral-300 leading-relaxed">
            The firmware was designed around a modular architecture to separate the
            communication protocol (SPI), command codes, and application logic.
            This separation made the system easier to debug, test, and extend
            as vehicle requirements evolved.
          </p>
        </section>


       {/* ───────────── SPI Communication & Data Integrity ───────────── */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-3">
    SPI Communication & Data Integrity
  </h2>

  <p className="text-neutral-300 leading-relaxed">
    The LV BMS communicates with battery monitoring hardware over SPI.
    Unlike higher-level vehicle buses, SPI provides no built-in protection
    against corrupted or misaligned data, making integrity checks a
    firmware responsibility rather than a hardware guarantee.
  </p>

  <p className="text-neutral-300 leading-relaxed mt-4">
    To address this, a cyclic redundancy check (CRC) was implemented on
    transmitted and received messages. Each SPI frame includes a Packet
    Error Code (PEC) used to detect corrupted data before it is processed
    by the system.
  </p>

  <p className="text-neutral-300 leading-relaxed mt-4">
    Incoming messages are validated by recomputing the CRC locally and
    comparing it against the received PEC. Any mismatch results in the
    frame being rejected, preventing invalid measurements from
    propagating into safety-critical logic.
  </p>
</section>

<figure className="mx-auto mb-6">
  <img
    src={dpec}
    alt="SPI packet diagram with PEC"
    className="rounded-lg border border-neutral-800 mx-auto"
  />
  <figcaption className="text-sm text-neutral-400 mt-2 text-center">
    SPI write-command frame structure with Packet Error Code (PEC) used for CRC validation.
  </figcaption>
</figure>

        {/* ───────────── Conclusion ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>

          <p className="text-neutral-300 leading-relaxed">
            This project reinforced the importance of defensive design in
            safety-critical embedded systems. Accuracy, determinism, and
            reliability were prioritized over complexity to ensure the LV BMS
            could be trusted as part of the vehicle’s safety chain.
          </p>

        
        </section>

{/* ───────────── Technologies ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Technologies</h2>

          <div className="flex flex-wrap gap-2">
            {["STM32", "C/C++", "SPI", "Embedded Systems"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-neutral-800 text-purple-300 px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </section>

        {/* ───────────── Source Code ───────────── */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-3">Source Code</h2>

          <p className="text-neutral-300 leading-relaxed mb-4">
           PR: https://github.com/macformula/racecar/pull/529
          </p>
        </section>

      </div>
    </div>
  );
};

export default LvBms;
