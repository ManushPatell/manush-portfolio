import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ABOUT_TEXT } from "../constants";
import email_logo from "../assets/email.png";

const About = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-16 px-6 lg:px-12 flex flex-col items-start text-left">
      {/* Title
      <h2 className="text-4xl font-bold mb-4 text-neutral-100 font-space text-left">
        About Me
      </h2> */}

      {/* Text
      <div className="text-lg leading-loose text-neutral-300 max-w-5xl font-space text-left">
        <p>{ABOUT_TEXT}</p>
      </div> */}
    </div>
  );
};

export default About;
