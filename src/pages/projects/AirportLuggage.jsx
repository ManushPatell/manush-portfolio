const AirportLuggage = () => {
  const notionLink =
    "https://www.notion.so/International-Airport-16c834c6c5ae81419da7d2b091ceea37";

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 pt-24 pb-20 max-w-4xl">
        <h1 className="text-5xl font-bold mb-4">Airport Luggage Mechanism</h1>

        <p className="text-xl text-neutral-400 mb-10">
          Mechanical design studio project
        </p>

        <section className="mb-10">
          <p className="text-neutral-300 leading-relaxed">
            Full design process, sketches, and final write-up are documented in Notion.
          </p>
        </section>

        <section className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Notion Link</h2>

          <a
            href={notionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-300 hover:underline"
          >
            View the full write-up →
          </a>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Mechanical Design", "Prototyping", "Design Studio"].map((tag) => (
              <span
                key={tag}
                className="bg-neutral-800 text-purple-300 px-3 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AirportLuggage;
