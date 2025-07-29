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
import powerpoint from "../assets/powerpoint.pdf";

const PROJECTS = [
  {
    title: "CAN Bus Load Calculator",
    shortDescription: "Calculates CAN bus load for optimal performance.",
    details:
      "Developed a tool to calculate the load on a CAN bus to ensure optimal performance and avoid overloading...",
    articleLink: "https://macformula.github.io/racecar/firmware/can-traffic/",
    media: [{ type: "image", src: car_logo }],
    technologies: ["CAN Bus", "Python"],
  },
  {
    title: "Simulink Models to C++ Firmware",
    shortDescription: "Converted Simulink models to C++ for embedded systems.",
    details:
      "Refactored vehicle firmware by transitioning from Simulink models to C++...",
    articleLink: powerpoint,
    media: [{ type: "image", src: code }, { type: "image", src: driver_interface }],
    technologies: ["Simulink", "C++", "Firmware"],
  },
  {
    title: "NavAid",
    shortDescription: "Braille system for the deaf and blind to navigate streets.",
    details:
      "NavAid is a project developed during DeltaHacks that enables deaf and blind individuals to navigate streets safely...",
    articleLink: "https://devpost.com/software/nav-aid",
    github: "https://github.com/HiThereBoss/DHXI",
    media: [{ type: "image", src: camera }, { type: "image", src: circuit }],
    technologies: ["Raspberry Pi", "Circuitry", "Accessibility"],
  },
  {
    title: "Route Optimizer for First Responders",
    shortDescription: "Optimizes routes for emergency vehicles.",
    details:
      "This project optimizes emergency dispatch by using BigQuery to process incoming calls...",
    articleLink: "https://devpost.com/software/route-optimizer-for-first-responders",
    github: "https://github.com/ManushPatell/Geesehacks",
    media: [{ type: "image", src: first }],
    technologies: ["Python", "BigQuery", "Google Cloud"],
  },
  {
    title: "Sudoku Solver",
    shortDescription: "Solves any size sudoku using backtracking.",
    details:
      "This project implements a backtracking algorithm to efficiently solve any NxN Sudoku puzzle...",
    github: "https://github.com/ManushPatell/Sudoku-Solver",
    media: [{ type: "image", src: sudoku_logo }],
    technologies: ["C", "Git"],
  },
  {
    title: "Airport Lugagge Mechanism",
    shortDescription: "Design Studio Project.",
    details:
      "Our project improves airport baggage handling with a rotary-actuated ramp...",
    articleLink: "https://www.notion.so/International-Airport-16c834c6c5ae81419da7d2b091ceea37",
    media: [{ type: "image", src: ramp }],
    technologies: ["Event Planning", "Leadership"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedProject]);

  const handleNext = () => {
    setCurrentMediaIndex((prevIndex) =>
      selectedProject ? (prevIndex + 1) % selectedProject.media.length : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentMediaIndex((prevIndex) =>
      selectedProject ? (prevIndex - 1 + selectedProject.media.length) % selectedProject.media.length : prevIndex
    );
  };

  return (
    <div className="relative z-20 container mx-auto px-8 py-16 border-b border-neutral-900">
      <h2
        className="text-3xl font-bold mb-12 text-white text-left"
        style={{ fontFamily: "'Minecraft', monospace" }}
      >
        Projects
      </h2>

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
            <div className="mb-4">
              <img
                src={project.media[0].src}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
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

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
         <div
          className="bg-neutral-900 text-white rounded-lg w-full max-w-4xl h-[80vh] overflow-y-auto relative flex flex-col lg:flex-row shadow-xl"
            onClick={(e) => e.stopPropagation()}
        >

           <button
            className="absolute top-8 sm:top-10 right-5 text-white text-xl hover:scale-110 transition-transform z-50"
            onClick={() => setSelectedProject(null)}
          >
            <X size={24} />
          </button>


            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-6">{selectedProject.title}</h3>
              <p className="text-neutral-300 mb-6 text-lg whitespace-pre-line">{selectedProject.details}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="bg-purple-900 text-white text-sm py-2 px-3 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {selectedProject.articleLink && (
                  <a
                    href={selectedProject.articleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-lg"
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

            <div className="w-full lg:w-1/2 relative flex items-center justify-center border border-neutral-700 rounded-lg p-4 bg-black">
              {selectedProject.media.length > 1 && (
                <button
                  className="absolute left-4 bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-transform"
                  onClick={handlePrev}
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              <img
                src={selectedProject.media[currentMediaIndex].src}
                alt="Project media"
                className="w-full max-h-[500px] object-contain rounded-lg"
              />

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
