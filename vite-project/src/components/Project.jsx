import React from "react";


// ProjectCarousel.jsx
import { useState } from "react";


const projects = [
  { id: 1, title: "Project One" },
  { id: 2, title: "Project Two" },
  { id: 3, title: "Project Three" },
  { id: 4, title: "Project Four" },
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
    <section className="relative w-full h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden">

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
      <div className="relative w-[900px] h-[350px]">

        {projects.map((project, index) => {
          const position = getPosition(index);

          return (
            <div
              key={project.id}
              className={`
                absolute top-0 left-1/2 -translate-x-1/2
                w-[300px] h-full
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
              <div className="bg-white rounded-2xl shadow-xl p-6 h-full flex items-center justify-center">
                <h2 className="text-xl font-bold">
                  {project.title}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default ProjectCarousel;

