import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className=" flex justify-center font-montserrat my-5">
      <div className="w-[100%]">
        <h1 className="text-4xl font-semibold text-center mt-5 mb-6">
          <span className="border-b-4 border-[#673AB7]/40 px-1 pb-1">
            Projects
          </span>
        </h1>
        <div className="flex justify-center">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
