import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Github } from "lucide-react";
import sudoku_logo from "../assets/sudoku.png";
import mayfield from "../assets/hackathon.png";
import soil_logo from "../assets/soil.jpg";
import car_logo from "../assets/car.jpg";
import driver_interface from "../assets/formulacode.png";
import circuit from "../assets/deltacircuit.jpg";
import camera from "../assets/deltacamera.jpg";
import first from "../assets/firstresponder.jpg";
import code from "../assets/driverinterfacee.png";
import ramp from "../assets/ramp.jpg";
import { article } from "framer-motion/client";
import powerpoint from "../assets/powerpoint.pdf";

const PROJECTS = [
  {
    title: "CAN Bus Load Calculator",
    shortDescription: "Calculates CAN bus load for optimal performance.",
    details:
      "Developed a tool to calculate the load on a CAN bus to ensure optimal performance and avoid overloading. The tool takes into account various parameters such as message frequency, data length, and bus speed.\n Check out my article explaining this: ",
    articleLink: "https://macformula.github.io/racecar/firmware/can-traffic/", // Added article link
    media: [
      { type: "image", src: car_logo },
    ],
    technologies: ["CAN Bus", "Python"],
  },
  {
    title: "Simulink Models to C++ Firmware",
    shortDescription: "Converted Simulink models to C++ for embedded systems.",
    details:
      " Refactored vehicle firmware by transitioning from Simulink models to C++, integrating it into the main repository to optimize compile times and streamline development",
    articleLink: powerpoint,
    media: [
      { type: "image", src:  code },
      { type: "image", src: driver_interface },
    ],
    technologies: ["Simulink", "C++", "Firmware"],
  },
  {
    title: "NavAid (Delta Hacks)",
    shortDescription: "Braille system for the deaf and blind to navigate streets.",
    details:
      "NavAid is a project developed during DeltaHacks that enables deaf and blind individuals to interpret street signs and navigate urban environments through a tactile Braille system. The device processes live camera input, extracts relevant text using OCR and AI filtering, and converts it into physical Braille characters, allowing users to read their surroundings in real-time.",
    articleLink: "https://devpost.com/software/nav-aid",
    github: "https://github.com/HiThereBoss/DHXI",

    media: [
      { type: "image", src: camera },
      { type: "image", src: circuit },
    ],

    technologies: ["Raspberry Pi", "Circuitry", "Accessibility"],
  },
  {
    title: "Route Optimizer for First Responders (Geese Hacks)",
    shortDescription: "Optimizes routes for emergency vehicles.",
    details:
      "This project optimizes emergency dispatch by using BigQuery to process incoming calls and assign them to the closest available responders based on location and availability. Integrated with Google APIs, it minimizes the need for manual communication between dispatchers and first responders, reducing delays and improving response times",
     articleLink: "https://devpost.com/software/route-optimizer-for-first-responders",
      github: "https://github.com/ManushPatell/Geesehacks",
    media: [
      { type: "image", src: first },

    ],
    technologies: ["Python", "BigQuery", "Google Cloud"],
  },
  {
    title: "Sudoku Solver",
    shortDescription: "Solves any size sudoku using backtracking.",
    details:
      "This project implements a backtracking algorithm to efficiently solve any NxN Sudoku puzzle. It leverages recursion and constraint propagation techniques to quickly arrive at solutions. Includes optimization techniques to handle large grids.",
    github: "https://github.com/ManushPatell/Sudoku-Solver",
    media: [
      { type: "image", src: sudoku_logo },
    ],
    technologies: ["C", "Git"],
  },
  {
    title: "Airport Lugagge Mechanism",
    shortDescription: "Design Studio Project.",
    details:
      "Our project improves airport baggage handling with a rotary-actuated ramp that uses retraction for smooth luggage transfer. We designed the system using CAD modeling, brought it to life with 3D printing, and programmed a Q-Arm robot to handle the luggage efficiently. By reducing mishandling and improving reliability, our solution helps airports to minimize lost luggage incidents",
    articleLink: "https://www.notion.so/International-Airport-16c834c6c5ae81419da7d2b091ceea37",
    media: [
      { type: "image", src: ramp },
    ],
    technologies: ["Event Planning", "Leadership"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const handleNext = () => {
    setCurrentMediaIndex((prevIndex) =>
      selectedProject
        ? (prevIndex + 1) % selectedProject.media.length
        : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentMediaIndex((prevIndex) =>
      selectedProject
        ? (prevIndex - 1 + selectedProject.media.length) %
          selectedProject.media.length
        : prevIndex
    );
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto py-16 px-6 lg:px-12 border-b border-neutral-900">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-bold mb-12 text-white">Projects</h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="relative bg-neutral-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer hover:shadow-2xl hover:border-purple-400 border border-transparent duration-300"
            onClick={() => {
              setSelectedProject(project);
              setCurrentMediaIndex(0);
            }}
          >
            {/* Project Image */}
            <div className="mb-4">
              <img
                src={project.media[0].src}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>

            {/* Project Info */}
            <h6 className="text-xl font-bold text-white mb-2">{project.title}</h6>
            <p className="text-neutral-400 mb-4">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-purple-900 text-white text-sm py-1 px-2 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-6 z-50 transition-opacity animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-neutral-900 text-white rounded-lg max-w-6xl w-full p-10 relative flex flex-col lg:flex-row shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white text-xl hover:scale-110 transition-transform"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>

            {/* Left Section: Text */}
            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-6">{selectedProject.title}</h3>
              <p className="text-neutral-300 mb-6 text-lg">{selectedProject.details}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="bg-purple-900 text-white text-sm py-2 px-3 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              {/* Links Section */}
              <div className="flex flex-col gap-4">
                {selectedProject.articleLink && (
                  <a
                    href={selectedProject.articleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:underline text-lg"
                  >
                    Read Article
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:underline text-lg"
                  >
                    <Github size={22} className="mr-2" />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Right Section: Larger Image Area */}
            <div className="w-full lg:w-1/2 relative flex items-center justify-center border border-neutral-700 rounded-lg p-4 bg-black">
              {/* Left Arrow */}
              {selectedProject.media.length > 1 && (
                <button
                  className="absolute left-4 bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-transform"
                  onClick={handlePrev}
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {/* Image */}
              <img
                src={selectedProject.media[currentMediaIndex].src}
                alt="Project media"
                className="w-full max-h-[500px] object-contain rounded-lg"
              />

              {/* Right Arrow */}
              {selectedProject.media.length > 1 && (
                <button
                  className="absolute right-4 bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-transform"
                  onClick={handleNext}
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
