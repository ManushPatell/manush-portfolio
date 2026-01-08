import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/technologies";
import Projects from "../components/Projects";
import Background from "../components/StarsBackground";
import Socials from "../components/Social";
import Experience from "../components/Experience";



const Home = () => {
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <div className="relative bg-transparent">
      <Background />
      <div className="pr-8">
        <Navbar />
      </div>

      <section className="relative z-10 container mx-auto px-8 pt-24">
        <Hero />
      </section>

      <section className="relative z-10 container mx-auto px-8 mb-0">
        <About />
      </section>

      <section className="relative z-10 container mx-auto px-8 mb-8">
        <Experience />
      </section>

      <section className="relative z-10 container mx-auto px-8 mb-8">
        <Projects />
      </section>

      <section className="relative container mx-auto px-8 mb-8">
        <Technologies />
      </section>

      <section className="relative z-10 container mx-auto px-8 mb-16">
        <Socials />
      </section>

      <section className="relative z-10 container mx-auto px-8 py-8 text-center text-neutral-400 text-sm">
        <p>© {new Date().getFullYear()} ManushP. All Rights Reserved.</p>
      </section>
    </div>
  );
};

export default Home;
