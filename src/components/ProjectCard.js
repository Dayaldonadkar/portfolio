import React from "react";
import hulu from "../Assets/Hulu.png";

const ProjectCard = ({ image, description, name }) => {
  return (
    <div className="flex justify-center my-10">
      <div className="w-[90%] font-montserrat bg-white pb-4 rounded-lg">
        <a
          href="https://classy-lollipop-f7b5e3.netlify.app/"
          target="_blank"
          f
          rel="noreferrer"
        >
          <img src={image} alt="" />
        </a>
        <h6 className="text-xl font-semibold py-1 mt-6 px-2 ">
          <span className="border-t-2 pt-2 border-[#E8E8E8]">{name}</span>
        </h6>

        <p className="px-2 text-xs">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
