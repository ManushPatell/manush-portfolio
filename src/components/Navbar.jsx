import React from "react";
import resume from "../assets/Website_Resume.pdf";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-end py-6 pr-8">
      {/* Navigation Links */}
      <div className="flex gap-8 text-white text-lg font-medium">
        <a href="#about" className="hover:text-cyan-300 transition-colors">
          About Me
        </a>
        <a href="#projects" className="hover:text-cyan-300 transition-colors">
          Projects
        </a>
        <a href="#skills" className="hover:text-cyan-300 transition-colors">
          Skills
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
