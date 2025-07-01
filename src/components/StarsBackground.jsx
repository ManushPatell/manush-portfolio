import minecraft from "../assets/blac.jpg";
import React from "react";

const Background = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        backgroundImage: `url(${minecraft})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default Background;
