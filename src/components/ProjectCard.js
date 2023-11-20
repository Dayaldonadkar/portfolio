import React from "react";
import hulu from "../Assets/Hulu.png";

const ProjectCard = () => {
  return (
    <div className="flex justify-center shadow-2xl my-10">
      <div className="w-[90%] font-montserrat">
        <a
          href="https://classy-lollipop-f7b5e3.netlify.app/"
          target="_blank"
          f
          rel="noreferrer"
        >
          <img src={hulu} alt="" />
        </a>
        <h6 className="text-xl font-semibold py-1 pt-5">HackerNews Clone</h6>

        <p className="pl-2">
          I've crafted a sleek HackerNews clone, combining a minimalist design
          with powerful functionality. Experience the latest tech stories,
          engage in discussions, and stay informed in a user-friendly
          environment.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
