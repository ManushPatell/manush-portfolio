import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="relative z-20 container mx-auto px-4 sm:px-8 pt-24 pb-12">
      <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Minecraft', monospace" }}>
        Experience
      </h2>
      <div className="flex flex-col gap-6">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row bg-neutral-900/80 rounded-lg shadow-lg p-6 border-l-8 ${experience.borderColor || "border-purple-700"}`}
          >
            <img
              src={experience.logo}
              alt={`${experience.company} Logo`}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded mb-4 sm:mb-0 sm:mr-6 bg-white"
            />
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full">
                <h3 className="text-lg sm:text-xl font-bold text-white" style={{ fontFamily: "'Minecraft', monospace" }}>
                  {experience.role} @{" "}
                  <a
                    href={experience.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {experience.company}
                  </a>
                </h3>
                <p className="text-purple-300 text-sm font-semibold mt-1 sm:mt-0 sm:ml-6" style={{ fontFamily: "'Minecraft', monospace" }}>
                  {experience.dateRange}
                </p>
              </div>
              <p className="text-neutral-300 mt-2 text-sm sm:text-base" style={{ fontFamily: "'Minecraft', monospace" }}>
                {experience.description}
              </p>
              <div className="flex flex-wrap mt-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-300"
                    style={{ fontFamily: "'Minecraft', monospace" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
