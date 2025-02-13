import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Social = () => {
  return (
    <div className="mt-12 text-center">
      <h3 className="text-center text-4xl font-bold mb-12 text-white">
        Connect with Me: 
      </h3>

      <div className="flex justify-center items-center gap-8 text-4xl text-white">
        <a
          href="https://www.linkedin.com/in/manushp/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/ManushPatell"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:manush.patelll@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 hover:scale-110 transition-transform"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Social;