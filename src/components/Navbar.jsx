import React from "react";
import resume from "../assets/ManushsResume.pdf";

const Navbar = () => {
  const handleScroll = (id) => {
    if (id === "about") {
      // Find the "About" section and scroll to its exact position
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const offset = 1200; // Adjust this to match navbar height
        const aboutPosition = aboutSection.getBoundingClientRect().top + window.scrollY - offset;
  
        window.scrollTo({
          top: aboutPosition,
          behavior: "smooth",
        });
      }
      return;
    }
  
    // Normal scrolling for other sections
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust this based on your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
  
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };
  
  
  return (
    <nav className="flex items-center space-x-8">
      <a 
        href="#about" 
        onClick={(e) => {
          e.preventDefault();
          handleScroll("about");
        }}
        className="text-white hover:text-blue-500 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500 pb-1"
      >
        About Me
      </a>
      <a 
        href="#projects" 
        onClick={(e) => {
          e.preventDefault();
          handleScroll("projects");
        }}
        className="text-white hover:text-blue-500 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500 pb-1"
      >
        Projects
      </a>
      <a 
        href="#skills" 
        onClick={(e) => {
          e.preventDefault();
          handleScroll("skills");
        }}
        className="text-white hover:text-blue-500 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500 pb-1"
      >
        Skills
      </a>
      <a 
        href={resume} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white hover:text-blue-500 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500 pb-1"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
          
