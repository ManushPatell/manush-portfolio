import React from "react";
import {
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiArduino,
  SiGit,
  SiReact,
  SiDocker,
  SiJavascript,
  SiPostgresql,
  SiStmicroelectronics
} from "react-icons/si";
import { FaSwift } from "react-icons/fa";
import { BiLogoJava } from "react-icons/bi";
import matlab from "../assets/matlab.png";

const Technologies = () => {
  return (
    <div className="relative w-full max-w-screen-xl py-16 px-8 lg:px-12">
      {/* Section Title */}
      <h2
        className="text-3xl font-bold text-white mb-12"
        style={{ fontFamily: "'Minecraft', monospace" }}
      >
        Skills
      </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-white justify-items-start">
  <div className="flex flex-col items-center">
    <SiCplusplus className="text-6xl text-cyan-400 mb-2" />
    <span>C/C++</span>
  </div>
  <div className="flex flex-col items-center">
    <SiStmicroelectronics className="text-6xl text-blue-300 mb-2" />
    <span>STM32</span>
  </div>
  <div className="flex flex-col items-center">
    <SiPython className="text-6xl text-yellow-400 mb-2" />
    <span>Python</span>
  </div>
  <div className="flex flex-col items-center">
    <SiGit className="text-6xl text-red-600 mb-2" />
    <span>Git</span>
  </div>
  <div className="flex flex-col items-center">
    <BiLogoJava className="text-6xl text-orange-600 mb-2" />
    <span>Java</span>
  </div>
  <div className="flex flex-col items-center">
    <SiDocker className="text-6xl text-blue-300 mb-2" />
    <span>Docker</span>
  </div>

 


  <div className="flex flex-col items-center">
    <SiReact className="text-6xl text-cyan-400 mb-2" />
    <span>React</span>
  </div>

  <div className="flex flex-col items-center">
    <FaSwift className="text-6xl text-orange-600 mb-2" />
    <span>Swift</span>
  </div>
  <div className="flex flex-col items-center">
    <SiHtml5 className="text-6xl text-orange-600 mb-2" />
    <span>HTML</span>
  </div>
  <div className="flex flex-col items-center">
    <SiCss3 className="text-6xl text-blue-400 mb-2" />
    <span>CSS</span>
  </div>
  <div className="flex flex-col items-center">
    <SiArduino className="text-6xl text-blue-500 mb-2" />
    <span>Arduino</span>
  </div>
  <div className="flex flex-col items-center">
    <img src={matlab} alt="MATLAB" className="w-16 h-16 mb-2" />
    <span>MATLAB</span>
  </div>
  <div className="flex flex-col items-center">
    <SiPostgresql className="text-6xl text-blue-500 mb-2" />
    <span>SQL</span>
  </div>
   <div className="flex flex-col items-center">
  <SiJavascript className="text-6xl text-yellow-400 mb-2 ml-[-1.5rem]" />
  <span>JavaScript</span>
</div>

</div>


    </div>
  );
};

export default Technologies;
