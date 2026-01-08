import memoryMap from "../../assets/memory_map.png";
import initialInstruction from "../../assets/bootloader_initial_instruction.png";
import appValid from "../../assets/app_is_valid.png";

const Stm32Bootloader = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 pt-24 max-w-4xl">

        <h1 className="text-5xl font-bold mb-6">
          STM32 Custom Bootloader
        </h1>

        <p className="text-xl text-neutral-400 mb-12">
          Flash-resident bootloader enabling application updates and validation
        </p>

        {/* ───────────── Overview ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>

          <p className="text-neutral-300 leading-relaxed">
            During my time at Lumatone, I updated firmware on microtonal keyboards
            hundreds of times. Each update involved clicking a button, watching the
            LEDs strobe across the keyboard, and trusting that the device would come
            back to life.
          </p>

          <p className="text-neutral-300 leading-relaxed mt-4">
            What actually happened during that process was a mystery and that bothered
            me. To understand it properly, I took an STM32F446RE and built a custom
            bootloader, focusing on how firmware is validated, protected,
            and safely executed at the lowest level.
          </p>
        </section>

        {/* ───────────── What a Bootloader Does ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">What a Bootloader Does</h2>

          <p className="text-neutral-300 leading-relaxed">
            A bootloader is the first piece of software that runs after a system reset.
            Its responsibility is to decide whether the main application is safe to
            execute and to place the system into a clean, predictable state before
            handing over control.
          </p>

          <p className="text-neutral-300 leading-relaxed mt-4">
            Unlike application firmware, a bootloader must be extremely defensive. It
            cannot assume valid memory, working peripherals, or even that the
            application exists at all. A single incorrect jump can permanently brick
            the device (uh oh).
          </p>
        </section>

        {/* ───────────── Design Goals ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Design Goals</h2>

          <ul className="list-decimal ml-6 space-y-2 text-neutral-300">
            <li>Execute immediately after reset as the system’s first layer of control</li>
            <li>Reside in a protected flash region separate from user firmware</li>
            <li>Validate application memory and entry points before execution</li>
            <li>Safely transfer control to the application without residual state</li>
            <li>Provide a foundation for future firmware update mechanisms (ex. CRC) </li>
          </ul>
        </section>

        {/* ───────────── Flash Memory Map (IMAGE GOES HERE) ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Flash Memory Map</h2>

          <p className="text-neutral-300 leading-relaxed mb-6">
            Flash memory is partitioned to isolate the bootloader from
            application firmware. This guarantees the bootloader always executes first
            and remains intact even if application updates fail.
          </p>

          <img
            src={memoryMap}
            alt="STM32 Flash Memory Map"
            className="rounded-lg border border-neutral-800 mx-auto mb-4"
          />

          <p className="text-sm text-neutral-400 text-center max-w-xl mx-auto">
            Flash layout showing protected bootloader region and application firmware space
          </p>
        </section>

        {/* ───────────── Boot Process (IMAGE GOES HERE) ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Boot Process</h2>

          <p className="text-neutral-300 leading-relaxed mb-6">
            After reset, execution begins at a fixed address defined by the Cortex-M
            architecture. The processor loads the initial stack pointer and reset
            handler directly from the vector table located at the start of flash.
          </p>

          <img
            src={initialInstruction}
            alt="Bootloader Initial Instruction"
            className="rounded-lg border border-neutral-800 mx-auto mb-6"
          />

          <p className="text-sm text-neutral-400 text-center max-w-xl mx-auto mb-6">
            Initial instruction flow showing how the stack pointer and reset handler
            are loaded on reset
          </p>

          <ol className="list-decimal ml-6 space-y-2 text-neutral-300">
            <li>System reset triggers execution at the bootloader reset vector</li>
            <li>Bootloader reads application vector table from flash</li>
            <li>Initial stack pointer is validated against SRAM boundaries</li>
            <li>Reset handler address is validated against application flash region</li>
            <li>Interrupts are disabled and system state is reset</li>
            <li>Vector table is relocated to the application base address</li>
            <li>Main stack pointer is set and execution jumps to the application</li>
          </ol>

         <details className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 mt-6">
  <summary className="cursor-pointer text-purple-300 font-medium">
    Deep Dive: STM32 Boot Process (Optional)
  </summary>

  <div className="mt-4 space-y-4 text-neutral-300 leading-relaxed text-sm">
   <p>
  <strong>Step 1 - Vector Table & Initial CPU State</strong><br />
  On reset, the Cortex-M core performs exactly two memory reads from the vector
  table: the initial Main Stack Pointer (MSP) and the Reset Handler address.
  These two values completely define the CPU’s execution state before any
  instructions run.
</p>
 

    <p>
      <strong>Step 2 — Locating the application:</strong><br />
      The bootloader assumes the application begins at a fixed flash offset.
      Rather than executing application code directly, the bootloader reads
      the application’s vector table to extract the initial stack pointer and
      reset handler safely.
    </p>

    <p>
      <strong>Step 3 — Stack pointer validation:</strong><br />
      The initial stack pointer is validated to ensure it falls within the
      valid SRAM address range. This prevents execution if the application
      image is missing, corrupted, or incorrectly linked.
    </p>

    <p>
      <strong>Step 4 — Reset handler validation:</strong><br />
      The reset handler address is checked to ensure it lies within the
      application flash region and is properly aligned. This ensures control
      will never jump into invalid memory or peripheral space.
    </p>

    <p>
      <strong>Step 5 — System cleanup:</strong><br />
      Before transferring control, interrupts are disabled and system state
      is reset. This prevents bootloader configuration, peripheral state, or
      interrupt handlers from leaking into the application runtime.
    </p>

    <p>
      <strong>Step 6 — Vector table relocation:</strong><br />
      The VTOR register is updated to point to the application’s vector table.
      This ensures all interrupts are handled by the application once
      execution begins.
    </p>

    <p>
      <strong>Step 7 — Control handoff:</strong><br />
      The main stack pointer is set using the application’s initial value, and
      execution branches to the application’s reset handler. From this point
      forward, the bootloader is no longer involved in execution.
    </p>
  </div>
</details>

        </section>

   

    {/* ───────────── Application Validation Strategy ───────────── */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-3">
    Application Validation Strategy
  </h2>

  <p className="text-neutral-300 leading-relaxed">
    Before transferring control, the bootloader must determine whether the
    application image in flash is safe to execute. Flash memory may contain
    erased regions, partially written firmware, or corrupted data from failed
    updates. Blindly jumping into this memory can permanently brick the device.
  </p>

  <p className="text-neutral-300 leading-relaxed mt-4">
    Validation is performed by inspecting the application’s vector table rather
    than executing any application code. Two critical values are checked:
  </p>

  <ul className="list-disc ml-6 mt-4 space-y-2 text-neutral-300">
    <li>
      <strong>Main Stack Pointer (MSP):</strong> Must fall within valid SRAM
      boundaries. The stack stores runtime data, interrupt context, and return
      addresses so placing it outside SRAM will cause an immediate fault.
    </li>
    <li>
      <strong>Reset Handler:</strong> Must lie within the application flash
      region and be properly aligned. This ensures execution begins at valid,
      executable memory.
    </li>
  </ul>

  <p className="text-neutral-300 leading-relaxed mt-4">
    If either check fails, the application is considered invalid and execution
    is halted or redirected to a recovery path. This defensive validation step
    is the primary mechanism that prevents corrupted firmware from executing.
  </p>
</section>

<img
            src={appValid}
            alt="Bootloader Initial Instruction"
            className="rounded-lg border border-neutral-800 mx-auto mb-6"
          />

  {/* ───────────── Safe Control Transfer ───────────── */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-3">
    Safe Control Transfer
  </h2>

  <p className="text-neutral-300 leading-relaxed">
    Once the application has been validated, the bootloader’s final
    responsibility is to transfer control in a way that accurately
    replicates a true hardware reset. This step is subtle but critical:
    the application must not inherit any runtime state from the
    bootloader.
  </p>

  <p className="text-neutral-300 leading-relaxed mt-4">
    A common misconception is that jumping to an application simply
    means calling its reset handler. In reality, the CPU requires
    several pieces of state to be explicitly reset and reconfigured
    before execution can safely continue.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    Why Order Matters
  </h3>

  <p className="text-neutral-300 leading-relaxed">
    The application assumes it is starting from a clean reset state.
    If the bootloader leaves interrupts enabled, peripherals active,
    or system timers running, those components may trigger handlers
    that no longer exist once execution has moved to the application.
    This often results in immediate HardFaults or unpredictable behavior.
  </p>

  <h3 className="text-xl font-semibold mt-6 mb-3">
    Control Transfer Sequence
  </h3>

  <ol className="list-decimal ml-6 space-y-2 text-neutral-300">
    <li>
      <strong>Disable interrupts:</strong> Prevents bootloader interrupts
      from firing inside the application.
    </li>
    <li>
      <strong>Stop SysTick:</strong> Ensures the system timer does not
      trigger unexpected context switches.
    </li>
    <li>
      <strong>Relocate the vector table (VTOR):</strong> Redirects all
      interrupt lookups to the application’s vector table.
    </li>
    <li>
      <strong>Load the application’s Main Stack Pointer (MSP): </strong>
       Sets the CPU stack to the application-defined SRAM location.
    </li>
    <li>
      <strong>Jump to the application Reset_Handler:</strong> Transfers
      execution to the application’s startup routine.
    </li>
  </ol>

  <p className="text-neutral-300 leading-relaxed mt-4">
  
    Once the Program Counter branches to the application’s reset
    handler, the bootloader is no longer involved in execution.
  </p>
</section>

 <section className="mb-12">
  <h2 className="text-2xl font-semibold mb-3">
    Jump Implementation (Simplified)
  </h2>

  <pre className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-sm text-neutral-300 overflow-x-auto">
{`__disable_irq();
SysTick->CTRL = 0;

SCB->VTOR = APP_START_ADDR;

__set_MSP(*(uint32_t*)APP_START_ADDR);

void (*app_reset_handler)(void) =
  (void*)(*(uint32_t*)(APP_START_ADDR + 4));

app_reset_handler();`}
  </pre>

  <p className="text-neutral-400 text-sm mt-2">
    Simplified jump sequence showing interrupt shutdown, VTOR relocation,
    MSP setup, and reset handler execution.
  </p>
</section>



{/* ───────────── Conclusion ───────────── */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>

  <p className="text-neutral-300 leading-relaxed">
    This project helped break down the firmware update process
    into its lowest-level components. By building a bootloader,
    I gained an understanding of how the Cortex-M CPU initializes
    execution, how memory boundaries protect system integrity, and why
    defensive validation is essential in embedded systems.
  </p>

  <p className="text-neutral-300 leading-relaxed mt-4">
    The bootloader remains stable and protected,
    while applications can evolve independently without risking device
    corruption. This architecture forms the foundation for safe firmware
    updates, recovery mechanisms, and future expansion.
  </p>

  <p className="text-neutral-300 leading-relaxed mt-4">
    PR: https://github.com/ManushPatell/stm32-bootloader
  </p>
</section>

     {/* ───────────── Technologies ───────────── */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Technologies</h2>

          <div className="flex flex-wrap gap-2">
            {["STM32","Computer Architecture", "Linker Scripts", "CRC", "Embedded C"].map((tech) => (
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

export default Stm32Bootloader;
