import { HERO_CONTENT, ABOUT_TEXT } from "../constants";
// import profilePic from "../assets/pacificpic2.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const fullText = "Hi, I'm Manush.";
  const [displayedText, setDisplayedText] = useState("");
  const [attributeText, setAttributeText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState("visible");

  const attributes = [
    "researching how systems work",
    "firmware developer",
    "learning how computers communicate",
    "exploring robotics",
    "",
  ];

  // Typing animation for "Hi, I'm Manush."
  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
        setTimeout(typeText, 150);
      }
    };
    typeText();
  }, []);

  // Typing animation for attributes with proper timing
  useEffect(() => {
    let charIndex = 0;
    const currentWord = attributes[currentWordIndex];
    setFadeState("visible");

    const typeCharacters = () => {
      if (charIndex <= currentWord.length) {
        setAttributeText(currentWord.substring(0, charIndex));
        charIndex++;
        setTimeout(typeCharacters, 100);
      } else {
        // After typing is done, wait before fading out and moving to next
        setTimeout(() => {
          setFadeState("hidden");
          setTimeout(() => {
            setCurrentWordIndex((prev) => (prev + 1) % attributes.length);
            setFadeState("visible");
          }, 500); // fade out duration
        }, 1200); // how long to show the full text after typing
      }
    };

    typeCharacters();
    // eslint-disable-next-line
  }, [currentWordIndex]);

  return (
    <div className="w-full max-w-screen-xl  py-20 px-6 lg:px-8 border-b border-neutral-900">
      <div className="flex flex-col items-start justify-center text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl lg:text-4xl font-normal tracking-tight mb-2 text-white"
          style={{ fontFamily: "'Minecraft', monospace" }}
        >
          {displayedText}
        </motion.h1>
        <div className="h-6 flex items-center min-h-[1.5rem] justify-start">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: fadeState === "visible" ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-base tracking-tight"
            style={{ fontFamily: "'Minecraft', monospace" }}
          >
            {attributeText}
          </motion.span>
        </div>
        <p className="mt-4 text-base leading-loose text-neutral-300 max-w-2xl" style={{ fontFamily: "'Minecraft', monospace" }}>
          {ABOUT_TEXT}
        </p>
      </div>
    </div>
  );
};
export default Hero;
