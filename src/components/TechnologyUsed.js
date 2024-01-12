import React from "react";
import react from "../Assets/1174949_js_react js_logo_react_react native_icon.png";
import taiwind from "../Assets/9055799_bxl_tailwind_css_icon.png";
import java from "../Assets/282802_javascript_js_icon.png";
import redux from "../Assets/4691205_redux_icon.png";

const TechnologyUsed = () => {
  return (
    <div className="flex justify-center py-20 bg-[#F8F4EC]" id="skills">
      <div className="flex flex-col justify-center items-center w-[90%]">
        <h1 className=" font-semibold text-4xl">Skills</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 place-items-center space-x-5 sm:space-x-8 pt-5">
            <div className=" border-4 border-blue-500 rounded-full">
              <img className="w-8 md:w-10 m-2 sm:m-5" src={react} alt="" />
            </div>
            <div className=" border-4 border-blue-500 rounded-full">
              <img
                className="w-8 md:w-10 m-2 sm:m-5"
                src={taiwind}
                alt="tailwind logo"
              />
            </div>
            <div className=" border-4 border-blue-500 rounded-full">
              <img
                className="w-8 md:w-10  m-2 sm:m-5"
                src={java}
                alt="javascript logo"
              />
            </div>
            <div className=" border-4 border-blue-500 rounded-full">
              <img
                className="w-8 md:w-10  m-2 sm:m-5"
                src={redux}
                alt="redux logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyUsed;
