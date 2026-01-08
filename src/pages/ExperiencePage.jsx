import { useParams, Link } from "react-router-dom";
import { EXPERIENCES } from "../constants";

const ExperiencePage = () => {
  const { slug } = useParams();
  const experience = EXPERIENCES.find((e) => e.slug === slug);

  if (!experience) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Experience not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-8 pt-24 pb-16 text-white max-w-4xl">
        
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={experience.logo}
            alt={experience.company}
            className="w-20 h-20 rounded bg-white"
          />
          <div>
            <h1 className="text-4xl font-bold">
              {experience.role}
            </h1>
            <p className="text-purple-300 text-lg">
              {experience.company}
            </p>
            <p className="text-neutral-400 text-sm">
              {experience.dateRange}
            </p>
          </div>
        </div>

        {/* Description */}
        {experience.description && (
          <p className="text-neutral-300 leading-relaxed mb-10">
            {experience.description}
          </p>
        )}

        {/* Technologies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-purple-900 text-white px-3 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Media / Diagrams (future-proof) */}
        {experience.media && (
          <section className="space-y-8 mb-12">
            <h2 className="text-2xl font-semibold">
              Diagrams & Media
            </h2>

            {experience.media.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.type === "image" && (
                  <img
                    src={item.src}
                    alt={item.caption || "Experience visual"}
                    className="rounded-lg border border-neutral-800 max-h-[500px] max-w-full object-contain"
                  />
                )}

                {item.caption && (
                  <p className="mt-2 text-sm text-neutral-400 text-center">
                    {item.caption}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Back */}
        <Link
          to="/#experience"
          className="text-blue-400 hover:underline"
        >
          ← Back to Experience
        </Link>

      </div>
    </div>
  );
};

export default ExperiencePage;
