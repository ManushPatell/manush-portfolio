import React from "react";
import resume from "../assets/ManushsResume.pdf";

const Navbar = () => {
  return (
    <nav className="flex items-center space-x-8">
      <a
        href="https://github.com/ManushPatell"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500 pb-1"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/manushp/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-500 pb-1"
      >
        LinkedIn
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

