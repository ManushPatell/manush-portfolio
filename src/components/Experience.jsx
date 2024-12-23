import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl font-bold">Experience</h2>
      <div className="container mx-auto px-4 lg:px-8">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:flex-row items-start text-left lg:justify-start gap-4"
          >
            {/* Year Column */}
            <div className="w-full lg:w-1/4 lg:pl-8 mb-4 lg:mb-0">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>

            {/*Role and Description*/}
            <div className="w-full lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-200">{experience.company}</span>
              </h6>
              <p className="text-neutral-400 mb-2">{experience.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
