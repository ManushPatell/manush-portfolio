import sudoku_logo from "../assets/sudoku.png";
import camera from "../assets/deltacamera.jpg";
import circuit from "../assets/deltacircuit.jpg";
import ramp from "../assets/ramp.jpg";
import code from "../assets/driverinterfacee.png";
import driver_interface from "../assets/formulacode.png";
import first from "../assets/firstresponder.jpg";
import powerpoint from "../assets/powerpoint.pdf";
import stm32 from "../assets/stm32.jpg"
import bms from "../assets/bms.jpg"

/* You can replace these later with better visuals */

export const PROJECTS = [
  /* ───────────── FEATURED PROJECTS ───────────── */

  {
    title: "STM32 Custom Bootloader",
    slug: "stm32-bootloader",
    shortDescription:
      "Bare-metal STM32 bootloader supporting safe application validation and handoff.",
    thumbnail: stm32,
    technologies: ["STM32", "Bare Metal", "Linker Scripts", "Embedded C"],
    customPage: true,
  },

  {
    title: "Low Voltage Battery Management System (LV BMS)",
    slug: "lv-bms",
    shortDescription:
      "STM32-based LV battery monitoring and CAN diagnostics system for Formula Electric.",
    thumbnail: bms,
    technologies: ["STM32", "C++", "CAN", "Embedded Systems"],
    customPage: true,
  },

  {
    title: "NavAid",
    slug: "navaid",
    shortDescription: "Braille system for the deaf and blind to navigate streets.",
    thumbnail: camera,
    technologies: ["Raspberry Pi", "OpenCV", "Accessibility", "Python"],
    github: "https://github.com/HiThereBoss/DHXI",
    articleLink: "https://devpost.com/software/nav-aid",
    customPage: true,

    sections: [
      {
        type: "text",
        title: "Overview",
        content:
          "NavAid is a wearable assistive device developed during DeltaHacks to help deaf and blind users navigate urban environments. A shoulder-mounted camera captures street-level information which is translated into braille output."
      },
      {
        type: "text",
        title: "System Overview",
        content:
          "A shoulder-mounted camera captures visual cues such as street signs and crosswalk indicators. Computer vision pipelines extract relevant information, which is filtered and transmitted to a handheld braille interface in real time."
      },
      {
        type: "list",
        title: "Key Contributions",
        items: [
          "Designed the end-to-end assistive system architecture",
          "Implemented computer vision pipelines using OpenCV",
          "Selected and prioritized environmental cues for navigation",
          "Integrated camera input with braille output hardware"
        ]
      },
      {
        type: "media",
        title: "Prototype & Hardware",
        items: [
          {
            src: camera,
            caption: "Camera mounted on the user's shoulder for real-time scene capture"
          },
          {
            src: circuit,
            caption: "Prototype circuit used to drive the braille output interface"
          }
        ]
      }
    ]
  },

  /* ───────────── OTHER PROJECTS ───────────── */

  {
    title: "Simulink Models to C++ Firmware",
    slug: "simulink-to-cpp-firmware",
    shortDescription:
      "Refactored control logic from Simulink models into production-ready C++ firmware.",
    thumbnail: code,
    technologies: ["Simulink", "C++", "Firmware"],
    articleLink: powerpoint,
    customPage: true,
  },

  {
    title: "Route Optimizer for First Responders",
    slug: "first-responder-route-optimizer",
    shortDescription: "Optimizes routes for emergency vehicles.",
    thumbnail: first,
    technologies: ["Python", "BigQuery", "Google Cloud"],
    github: "https://github.com/ManushPatell/Geesehacks",
    articleLink:
      "https://devpost.com/software/route-optimizer-for-first-responders",
    customPage: true,
  },

  {
    title: "Sudoku Solver",
    slug: "sudoku-solver",
    shortDescription: "Solves any size Sudoku using backtracking.",
    thumbnail: sudoku_logo,
    technologies: ["C", "Git"],
    github: "https://github.com/ManushPatell/Sudoku-Solver",
    customPage: true,
  },

  {
    title: "Airport Luggage Mechanism",
    slug: "airport-luggage-mechanism",
    shortDescription: "Mechanical design studio project.",
    thumbnail: ramp,
    technologies: ["Leadership", "Mechanical Design"],
    articleLink:
      "https://www.notion.so/International-Airport-16c834c6c5ae81419da7d2b091ceea37",
    customPage: true,
  },
];
