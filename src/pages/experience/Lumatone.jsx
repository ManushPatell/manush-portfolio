// import boardImage from "../../../dist/assets/keyboard.png";
// import bootVideo from "../../../dist/assets/IMG_0144.mp4";

// const Lumatone = () => {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <div className="container mx-auto px-8 pt-24 max-w-4xl">

//         {/* Title */}
//         <h1 className="text-5xl font-bold mb-4">
//           Firmware Engineer Intern
//         </h1>

//         {/* Company + Dates */}
//         <p className="text-xl text-neutral-400 mb-12">
//           Lumatone · April 2025 – August 2025
//         </p>

//         {/* Overview */}
//         <section className="mb-16">
//           <h2 className="text-2xl font-semibold mb-4">
//             Overview
//           </h2>
//           <p className="text-neutral-300 leading-relaxed">
//             Worked on embedded firmware and hardware validation systems for
//             pressure-sensitive musical instruments. My focus was on reliable
//             startup behavior, firmware bring-up, and test infrastructure for
//             validating sensor hardware.
//           </p>
//         </section>

//         {/* Hardware Context */}
//         <section className="mb-16">
//           <h2 className="text-2xl font-semibold mb-4">
//             Hardware Context
//           </h2>

//           <p className="text-neutral-300 leading-relaxed mb-6">
//             The firmware runs on a configured BeagleBone Black responsible
//             for system initialization, peripheral bring-up, and communication
//             with pressure-sensitive input hardware.
//           </p>

//           <video
//             src={bootVideo}
//             controls
//             className="rounded-xl border border-neutral-800 w-full"
//           />

//           <p className="mt-3 text-sm text-neutral-400">
//             Awesome light up sequence 
//           </p>
//         </section>

//         {/* Boot Sequence */}
//         <section className="mb-16">
//           <h2 className="text-2xl font-semibold mb-4">
//             Boot Sequence & Startup Logic
//           </h2>

//           <p className="text-neutral-300 leading-relaxed mb-6">
//             I worked on the system boot sequence, where I developed 
//             test sequences that identified poor performing keys by comparing ADC range readings 
//            This was helpful by telling us which keys 
//             may be poorly calibrated, or have physical deforms, allowing the QA team to avoid clicking through each key 
// </p>
//           <img
//             src={boardImage}
//             alt="Lumatone controller board"
//             className="rounded-xl border border-neutral-800 max-w-full"
//           />

//           <p className="mt-3 text-sm text-neutral-400">
//             Testing Sequence during firmware initialization/startup
//           </p>
//         </section>

//         {/* Contributions */}
//         <section className="mb-16">
//           <h2 className="text-2xl font-semibold mb-4">
//             My Contributions
//           </h2>

//           <ul className="list-disc ml-6 space-y-2 text-neutral-300">
//             <li>Added validation checks to prevent invalid startup states</li>
//             <li>Provided visual feedback during system initialization</li>
//             <li>Tested startup behavior across multiple hardware conditions</li>
//           </ul>
//         </section>

//         {/* Technologies */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-4">
//             Technologies
//           </h2>

//           <div className="flex flex-wrap gap-2">
//             {["C", "BeagleBone", "Embedded Linux", "PuTTY", "WinSCP"].map(
//               (tech) => (
//                 <span
//                   key={tech}
//                   className="bg-neutral-800 text-purple-300 px-3 py-1 rounded text-sm"
//                 >
//                   {tech}
//                 </span>
//               )
//             )}
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// };

export default Lumatone;
