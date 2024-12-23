import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ABOUT_TEXT } from "../constants";
import email_logo from "../assets/email.png"

const About = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-16 px-6 lg:px-12">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-4 text-neutral-100">
        About Me
      </h2>

      {/* Text */}
      <div className="text-left text-lg leading-loose text-neutral-300 max-w-5xl mx-auto">
        <p>{ABOUT_TEXT}</p>
      </div>

      {/* Socials Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold mb-6 text-neutral-100">
          Connect with Me:
        </h3>

        <div className="flex justify-center items-center gap-8 text-4xl text-white">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/manushp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a

            href="https://github.com/ManushPatell"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <FaGithub />
          </a>

          {/* Email */}
          {/* Email */}
          <a
            href="mailto:manush.patelll@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <img
              src={email_logo}
              alt="Email"
              className="w-12 h-12 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
