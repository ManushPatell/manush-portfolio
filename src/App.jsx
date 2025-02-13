import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/technologies";
import Projects from "./components/Projects";
import StarsBackground from "./components/StarsBackground";
import Socials from "./components/Social";
import { useEffect } from "react";
import mcmasterCrest from "./assets/mac-removebg-preview.png"; // Add this import at the top

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
      <StarsBackground />
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm py-4">
        <div className="flex justify-between items-center"> {/* Removed container and mx-auto */}
          <div className="flex items-center gap-3 pl-4"> {/* Added pl-4 for minimal spacing from edge */}
            <img 
              src={mcmasterCrest} 
              alt="McMaster University Crest" 
              className="h-8 w-auto"
            />
            <h1 className="text-lg text-white font-bold"> {/* Changed font-normal to font-bold */}
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

      <section id="about" className="relative z-10 container mx-auto px-8 pt-50"> {/* Added scroll-mt-20 */}
        <About />
      </section>

      <div className="relative z-10 container mx-auto px-8 mb-0">
        <WhatAmIWorkingOn />
      </div>

      <section id="projects" className="relative z-10 container mx-auto px-8 mb-8" style={{ marginTop: "-32px" }}>
        <Projects />
      </section>

      <section id="skills" className="relative container mx-auto px-8"> {/* Remove any additional z-index here */}
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
