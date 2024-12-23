import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarsBackground from "./components/StarsBackground";

const App = () => {
  return (
    <div className="relative bg-transparent">
      {/* Moving Stars Background */}
      <StarsBackground />

      {/* Navbar */}
      <div className="relative z-10 container mx-auto px-8">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 container mx-auto px-8">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 container mx-auto px-8">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 container mx-auto px-8">
        <Projects />
      </section>

      {/* Technologies Section */}
      <section id="skills" className="relative z-10 container mx-auto px-8">
        <Technologies />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 container mx-auto px-8">
        <Contact />
      </section>
    </div>
  );
};

export default App;
