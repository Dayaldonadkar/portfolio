import React from "react";
import Card from "./Card";

const Experience = () => {
  return (
    <div className="flex justify-center font-montserrat  bg-[#F5F7F8] py-10">
      <div className="w-[100%]">
        <h1 className="text-4xl font-semibold text-center">
          <span className="border-b-4 border-[#673AB7]/40 px-1 pb-1">
            Experience
          </span>
        </h1>
        <div className="flex justify-center">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Experience;
