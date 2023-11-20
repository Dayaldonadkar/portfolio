import React from "react";
import ProjectCard from "./ProjectCard";
import hulu from "../Assets/Hulu.png";

const Projects = () => {
  return (
    <div className=" flex justify-center font-montserrat my-5 bg-[#F5F7F8]">
      <div className="w-[100%]">
        <h1 className="text-4xl font-semibold text-center mt-5 mb-6">
          <span className="border-b-4 border-[#673AB7]/40 px-1 pb-1">
            Projects
          </span>
        </h1>
        <div className="flex justify-center">
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
