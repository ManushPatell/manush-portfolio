import sudoku_logo from "../assets/sudoku.png";
import soil_logo from "../assets/soil.jpg"
import mayfield from "../assets/mayfieldtech.jpg"
const PROJECTS = [
    {
      title: "Sudoku Solver",
      description: "Solves any size sudoku utilizing a backtracking algorithm.",
      image: sudoku_logo, // Replace with your image path
      technologies: ["C", "Git"],
    },
    {
      title: "Water Planting System",
      description: "Utilizes soil moisture sensors to monitor water levels and sends email alerts to clients for notifications.",
      image: soil_logo, // Replace with your image path
      technologies: ["Arduino", "ESP32", "C/C++"],
    },
    {
      title: "Hackathon Organizer ",
      description:
        "Organized and led the first-ever hackathon in the school district with hackathon winnings. Attracted over 200 participants, resulting in a successful event and a 10% increase in tech club enrollment ",
      image: mayfield, // Replace with your image path
      technologies: [""],
    },
  ];
  
  const Projects = () => {
    return (
      <div className="w-full max-w-screen-xl mx-auto py-16 px-6 lg:px-12 border-b border-neutral-900">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold mb-12 text-white">
          Projects
        </h2>
  
        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              {/* Project Image */}
              <div className="mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
  
              {/* Project Details */}
              <h6 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h6>
              <p className="text-neutral-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-900 text-white text-sm py-1 px-2 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  