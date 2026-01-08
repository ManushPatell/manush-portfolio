import { useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";

const ProjectPage = () => {
  const renderSection = (section, index) => {
    if (section.type === "text") {
      return (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
          <p className="text-neutral-300 leading-relaxed">{section.content}</p>
        </section>
      );
    }

    if (section.type === "list") {
      return (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
          <ul className="list-disc ml-6 space-y-2 text-neutral-300">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      );
    }

    if (section.type === "media") {
      return (
        <section key={index} className="mb-12 space-y-8">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          {section.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={item.src}
                alt={item.caption || "Project visual"}
                className="rounded-lg border border-neutral-800 max-h-[500px] object-contain"
              />
              {item.caption && (
                <p className="mt-2 text-sm text-neutral-400 text-center">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </section>
      );
    }

    return null;
  };

  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 pt-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <p className="text-neutral-300 leading-relaxed mb-10">
          {project.details}
        </p>

        {/* Media / Diagrams */}
        {project.media && (
          <section className="space-y-10 mb-12">
            <h2 className="text-2xl font-semibold">Diagrams & Media</h2>

            {project.media.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.type === "image" && (
                  <img
                    src={item.src}
                    alt={item.caption || "Project visual"}
                    className="rounded-lg border border-neutral-800 max-h-[500px] max-w-full object-contain bg-black"
                  />
                )}

                {item.caption && (
                  <p className="mt-3 text-sm text-neutral-400 text-center max-w-xl">
                    {item.caption}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
