import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-20 container mx-auto px-8 py-16 border-b border-neutral-900">
      <h2 className="text-3xl font-bold mb-12 text-white text-left">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.slug}
            className="relative bg-neutral-800 p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => navigate(`/projects/${project.slug}`)}
          >
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
            ) : project.media && project.media.length > 0 ? (
              <img
                src={project.media[0].src}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
            ) : (
              <div className="w-full h-56 bg-neutral-900 rounded-lg mb-4 flex items-center justify-center text-neutral-500 text-sm">
                No preview available
              </div>
            )}

            <h6 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h6>

            <p className="text-neutral-400 mb-4">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
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
