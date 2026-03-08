import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

import "./main.css";


// ProjectCarousel.jsx
import { useState } from "react";


const projects = [
  { id: 1, title: "Microsoft Clone", image: project1, description:"Built a mobile-first clone of the Microsoft homepage to practice Tailwind CSS, focusing on responsive UI design and utility-first styling." ,url:"https://mshivam20.github.io/microsoft/"},
  { id: 2, title: "AI Powered Deburger", image: project2 , description:"Developed an AI-powered debugging tool using LLMs that detects code errors, explains issues, and suggests solutions. Contributed to research and documentation as part of the team.", url:"https://deburger.omnarkhede.tech/"},
  { id: 3, title: "Detectify", image: project3 , description:"Created an AI-based forensic analysis tool that analyzes and organizes UFDR mobile data files to help identify potential digital evidence. Contributed to research and documentation in the project.", url:"https://detectify1.vercel.app/" },
  { id: 4, title: "Coming soon", url:"" },
];

 function ProjectCarousel() {
  const [active, setActive] = useState(1);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const getPosition = (index) => {
    if (index === active) return "center";
    if (
      index === (active - 1 + projects.length) % projects.length
    )
      return "left";
    if (
      index === (active + 1) % projects.length
    )
      return "right";
    return "hidden";
  };

  return (
    <div id="projects">
      <h1 className="text-white text-4xl font-bold ml-40 m-5 mb-10">Projects</h1>
    <section className="project relative   w-full h-125 flex items-center justify-center  ">

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-10 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
      >
        ←
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-10 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
      >
        →
      </button>

      {/* Cards */}
      <div className="relative w-225 h-88">

        {projects.map((project, index) => {
          const position = getPosition(index);

          return (
            <div
              key={project.id}
              className={`
                absolute top-0 left-1/2 -translate-x-1/2
                w-75 h-full
                transition-all duration-500 ease-in-out
                ${
                  position === "center"
                    ? "scale-100 opacity-100 z-20"
                    : position === "left"
                    ? "-translate-x-[150%] scale-75 opacity-40 blur-sm z-10"
                    : position === "right"
                    ? "translate-x-[50%] scale-75 opacity-40 blur-sm z-10"
                    : "opacity-0 scale-50 z-0"
                }
              `}
            >
              
              <div  className="bg-white rounded-2xl shadow-xl p-2 h-full   justify-center">
                
                <img src={project.image} alt="" className=" w-full h-45 rounded-2xl"/><br />
                <a href={project.url} className=""><h2 className="text-xl font-bold hover:text-blue-800">{project.title}</h2></a>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
}
export default ProjectCarousel;

