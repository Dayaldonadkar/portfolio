import React from "react";
import ProjectCard from "./ProjectCard";
import hulu from "../Assets/Hulu.png";

const Projects = () => {
  return (
    <div
      className=" flex justify-center font-montserrat bg-[#F8F4EC] shadow-xl"
      id="project"
    >
      <div className="md:w-[90%] lg:w-[90%] xl:w-[78%] 2xl:w-[70%] lg:px-14">
        <h1 className="text-4xl font-semibold text-center mt-5 mb-6">
          <span className="border-b-4 border-[#673AB7]/40 px-1 pb-1">
            Projects
          </span>
        </h1>
        <div className="flex justify-center sm:grid sm:grid-cols-2">
          <ProjectCard
            image={hulu}
            name="Hulu Clone"
            description=" I've crafted a sleek HackerNews clone, combining a minimalist design
          with powerful functionality. Experience the latest tech stories,
          engage in discussions, and stay informed in a user-friendly
          environment."
          />
          <ProjectCard
            image={hulu}
            name="Hulu Clone"
            description=" I've crafted a sleek HackerNews clone, combining a minimalist design
          with powerful functionality. Experience the latest tech stories,
          engage in discussions, and stay informed in a user-friendly
          environment."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
