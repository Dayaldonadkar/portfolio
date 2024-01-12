import React from "react";

const ProjectCard = ({ image, description, name, link }) => {
  return (
    <div className="flex justify-center my-10 group hover:scale-105 transition duration-150 cursor-pointer">
      <div className="w-[90%] font-montserrat bg-white pb-4 rounded-xl">
        <a href={link} target="_blank" f rel="noreferrer">
          <img
            className="lg:h-80 xl:h-60 xl:w-full rounded-tl-xl rounded-tr-xl"
            src={image}
            alt=""
          />
        </a>
        <h6 className="text-xl font-semibold py-1 mt-6 px-2 ">
          <span className="border-t-4 pt-2 border-[#E8E8E8] group-hover:border-blue-600">
            {name}
          </span>
        </h6>

        <p className="px-2 text-xs">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
