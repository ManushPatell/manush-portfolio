import React, { useState } from "react";
import resume from "../assets/Manush_Patel_Resume.pdf";
import mcmasterCrest from "../assets/mac-removebg-preview.png";
import { Menu, X } from "lucide-react"; // Optional

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/20 backdrop-blur-sm px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Crest + Name */}
        <div className="flex items-center gap-3">
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

        {/* Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white "
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md py-4 flex flex-col items-center space-y-4 md:hidden">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => (
  <>
    <a
      href="https://github.com/ManushPatell"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-400 transition-colors duration-300"
    >
      GitHub
    </a>
    <a
      href="https://www.linkedin.com/in/manushp/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-400 transition-colors duration-300"
    >
      LinkedIn
    </a>
    <a
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-400 transition-colors duration-300"
    >
      Resume
    </a>
  </>
);

export default Navbar;
