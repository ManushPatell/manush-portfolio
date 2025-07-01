import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/technologies";
import Projects from "./components/Projects";
import Background from "./components/StarsBackground";
import Socials from "./components/Social";
import { useEffect } from "react";
import mcmasterCrest from "./assets/mac-removebg-preview.png"; // Add this import at the top
import Experience from "./components/Experience";



const WhatAmIWorkingOn = () => {
  return (
    <div className="relative z-10 container mx-auto px-8" style={{ top: "-96px" }}>
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-6 rounded-lg shadow-lg border border-purple-700/50">
        <h3 className="text-xl font-bold text-white mb-2">What Am I Working On?</h3>
        <p className="text-neutral-200">
          Building an assistive technology solution to empower individuals with Usher syndrome to live more independently.
        </p>
      </div>
    </div>
  );
};

const App = () => {

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);


  return (
    <div className="relative bg-transparent">
      <Background />
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm py-4">
        <div className="flex justify-between items-center"> {/* Removed container and mx-auto */}
          <div className="flex items-center gap-3 pl-4"> {/* Added pl-4 for minimal spacing from edge */}
            <img 
              src={mcmasterCrest} 
              alt="McMaster University Crest" 
              className="h-8 w-auto"
            />
            <h1
              className="text-lg text-white font-bold cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Manush Patel
            </h1>
          </div>
          <div className="pr-8"> {/* Changed to pr-8 to keep right padding */}
            <Navbar />
          </div>
        </div>
      </div>

 

      <section id="hero" className="relative z-10 container mx-auto px-8 pt-24">
        <Hero />
      </section>

      <section id="about" className="relative z-10 container mx-auto px-8 mb-0">
        <About />
      </section>

      <section id="experience" className="relative z-10 container mx-auto px-8 mb-8" style={{ marginTop: "0px" }}>
        <Experience />
      </section>

           {/* <Experience /> */}

      <section id="projects" className="relative z-10 container mx-auto px-8 mb-8" style={{ marginTop: "-32px" }}>
        <Projects />
      </section>

      <section id="skills" className="relative container mx-auto px-8 mb-8"> {/* Remove any additional z-index here */}
        <Technologies />
      </section>

      <section className="relative z-10 container mx-auto px-8 mb-16"> {/* Changed from mb-0 to mb-16 */}
        <Socials />
      </section>

      <section className="relative z-10 container mx-auto px-8 py-8 text-center text-neutral-400 text-sm">
        <p>© {new Date().getFullYear()} ManushP. All Rights Reserved.</p>
      </section>
    </div>
  );
};

export default App;
// import React from "react";

// export default function Portfolio() {
//   const projects = [
//     {
//       title: "♻️ Thermal Recycler",
//       description: "Developed a compact heat recycling system using SolidWorks, simulated thermal flow in ANSYS, and optimized efficiency for real-world HVAC applications.",
//       link: "/projects/thermal-recycler",
//     },
//     {
//       title: "🌬️ Wind Rover",
//       description: "Engineered a rover harnessing wind energy for mobility. Combined mechanical design with control systems to validate environmental energy use cases.",
//       link: "/projects/wind-rover",
//     },
//   ];

//   return (
//     <div style={{ minHeight: '100vh', padding: '2rem', fontFamily: 'Trebuchet MS, sans-serif', background: 'linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)', color: '#d8f3dc' }}>
//       <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
//         <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#90e0ef', textShadow: '1px 1px 5px #52b788' }}>Jonathan</h1>
//         <p style={{ fontSize: '1.25rem', marginTop: '0.25rem', color: '#ade8f4' }}>Mechanical Engineering Student | CAD & Simulation Specialist | Sustainable Design Advocate</p>
//       </header>

//       <main style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', maxWidth: '1000px', margin: '0 auto' }}>
//         <section>
//           <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '2px solid #80ed99', color: '#b7e4c7' }}>🌿 About Me</h2>
//           <p style={{ fontSize: '1.1rem', lineHeight: '1.75', background: 'rgba(144, 238, 144, 0.05)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #80ed99', boxShadow: 'inset 0 0 8px rgba(255,255,255,0.05)' }}>
//             I'm a mechanical engineering student passionate about bridging cutting-edge tech and environmental innovation. I specialize in CAD, FEA, and smart mechanical systems with sustainability at the core.
//           </p>
//         </section>

//         <section>
//           <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '2px solid #80ed99', color: '#b7e4c7' }}>🔧 Projects</h2>
//           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
//             {projects.map((project, index) => (
//               <a
//                 key={index}
//                 href={project.link}
//                 style={{ flex: '1 1 45%', backgroundColor: '#1b3a4b', borderRadius: '1rem', padding: '1.5rem', border: '2px solid #52b788', boxShadow: '6px 6px 12px rgba(0,0,0,0.4)', textDecoration: 'none', color: '#caf0f8', display: 'block' }}
//               >
//                 <h3 style={{ fontSize: '1.5rem', color: '#9ef01a' }}>{project.title}</h3>
//                 <p style={{ marginTop: '0.75rem', fontSize: '1rem' }}>{project.description}</p>
//               </a>
//             ))}
//           </div>
//         </section>

//         <section style={{ textAlign: 'center' }}>
//           <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '2px solid #80ed99', color: '#b7e4c7' }}>📄 Resume</h2>
//           <a href="/resume.pdf" download style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: '#38b000', color: '#fff', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 0 10px #52b788', border: '2px solid #1b4332' }}>
//             ⬇ Download PDF
//           </a>
//         </section>

//         <section>
//           <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', borderBottom: '2px solid #80ed99', color: '#b7e4c7' }}>📬 Contact</h2>
//           <div style={{ lineHeight: '2', fontSize: '1.1rem' }}>
//             📧 <strong>Email:</strong> <a href="mailto:jonathan@email.com" style={{ color: '#9ef01a' }}>jonathan@email.com</a><br/>
//             🔗 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/jonathan" style={{ color: '#9ef01a' }}>linkedin.com/in/jonathan</a><br/>
//             💻 <strong>GitHub:</strong> <a href="https://github.com/jonathan" style={{ color: '#9ef01a' }}>github.com/jonathan</a>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }