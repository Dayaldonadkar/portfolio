import React from "react";
import Card from "./Card";

const Experience = () => {
  return (
    <div
      className="flex justify-center lg:justify-center font-montserrat  bg-[#F5F7F8] shadow-lg py-20"
      id="experience"
    >
      <div className="lg:w-[90%] xl:w-[78%] 2xl:w-[70%] sm:px-14">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-4xl font-semibold text-center lg:text-left">
            <span className="border-b-4 border-[#673AB7]/40 px-1 pb-1">
              Experience
            </span>
          </h1>
          <div className="flex justify-center lg:w-[60%] xl:w-[50%]">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
