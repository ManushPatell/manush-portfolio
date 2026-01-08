import lumatone from "../assets/side_lumatone.jpg";
import gerrits from "../assets/gerrits.png";
import macfe from "../assets/macfe.jpg";

export const HERO_CONTENT = `I am Manush Patel and this is a test. blha blha blah blah blah blha blh a I am Manush Patel and this is a test. blha blha blah blah blah blha blh a I am Manush Patel and this is a test. blha blha blah blah blah blha blh a I am Manush Patel and this is a test. blha blha blah blah blah blha blh a I am Manush Patel and this is a test. blha blha blah blah blah blha blh a I am Manush Patel and this is a test. blha blha blah blah blah blha blh a I am Manush Patel and this is a test. blha blha blah blah blah blha blh a `;

export const ABOUT_TEXT = `Computer Engineering @ McMaster University - focused on control systems, embedded software, and digital design`;

export const EXPERIENCES = [
  {
    role: "Controls and Firmware Developer",
    company: "Mac Formula Electric",
    slug: "mac-formula-electric-firmware",
    companyLink: "https://macformularacing.com/",
    dateRange: "Sep 2024 – Present",
    logo: macfe,
    description: "",
    technologies: ["C/C++", "CAN", "Python", "Git", "LaTeX"],
    borderColor: "border-red-700",
    route: "/experience/mac-formula-electric" 
  },
  
  
  {
    role: "Firmware Engineer Intern",
    company: "Lumatone",
    slug: "lumatone-firmware-intern",
    companyLink: "https://www.lumatone.io/",
    dateRange: "Apr 2025 - Aug 2025",
    logo: lumatone,
    description: "",
    technologies: ["C", "PuTTy", "WinSCP", "BeagleBone"],
    borderColor: "border-purple-700",
    route: "/experience/lumatone" 
  },
  
  {
    role: "Software Developer Intern",
    company: "Gerrits Engineering Ltd",
    slug: "gerrits-software-intern",
    companyLink: "https://www.gerreng.com/",
    dateRange: "Jan 2025 – Mar 2025",
    logo: gerrits,
    description: "",
    technologies: ["Agentic AI", "Docker", "JavaScript"],
    borderColor: "border-black-700",
    route: "/experience/gerrits"
  },
];



