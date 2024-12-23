import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pacificpic2.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const fullText = "Hi, I'm Manush."; // Full text to type out
  const [displayedText, setDisplayedText] = useState(""); // State to hold displayed text
  const [attributeText, setAttributeText] = useState(""); // State for typing attributes
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Index for cycling attributes
  const [fadeState, setFadeState] = useState("visible"); // Track fading for smooth transitions

  // Attributes to cycle through
  const attributes = [
    "Engineer",
    "Hardware Enthusiast",
    "Programmer",
    "Problem Solver",
    "Tech Innovator",
    "Firmware Developer",
    
  ];

  useEffect(() => {
    // Typing animation for "Hi, I'm Manush."
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex)); // Update the displayed text
        currentIndex++;
        setTimeout(typeText, 150); // Delay between each character
      }
    };

    typeText(); // Start typing effect
  }, []);

  useEffect(() => {
    // Smooth transition for attributes
    const interval = setInterval(() => {
      setFadeState("hidden"); // Start fade-out

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % attributes.length); // Move to the next word
        setFadeState("visible"); // Start fade-in
      }, 500); // Duration of fade-out
    }, 3000); // Total interval duration (display time + fade time)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [attributes.length]);

  useEffect(() => {
    // Typing animation for attributes
    const typeAttribute = () => {
      let charIndex = 0;
      const currentWord = attributes[currentWordIndex];

      const typeCharacters = () => {
        if (charIndex <= currentWord.length) {
          setAttributeText(currentWord.substring(0, charIndex));
          charIndex++;
          setTimeout(typeCharacters, 100); // Adjust typing speed here
        }
      };

      typeCharacters();
    };

    typeAttribute();
  }, [currentWordIndex]); // Re-run whenever the word index changes

  return (
    <div className="w-full max-w-screen-xl mx-auto py-20 px-6 lg:px-12 border-b border-neutral-900">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          {/* Typing Animation for "Hi, I'm Manush." */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl lg:text-8xl font-thin tracking-tight mb-4 text-white font-mono"
          >
            {displayedText}
          </motion.h1>

          {/* Smooth Transition for Attributes */}
          <div
            className="h-8 flex items-center" // Fixed height for the container
            style={{ minHeight: "2rem" }} // Ensure consistent height
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: fadeState === "visible" ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl tracking-tight font-mono"
            >
              {attributeText} {/* Render the currently typing attribute */}
            </motion.span>
          </div>

          {/* <p className="mt-4 text-lg leading-relaxed text-neutral-400">
            {HERO_CONTENT}
          </p> */}
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <motion.img
            src={profilePic}
            alt="Manush Patel"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
