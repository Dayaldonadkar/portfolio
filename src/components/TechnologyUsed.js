import React from "react";
import react from "../Assets/1174949_js_react js_logo_react_react native_icon.png";
import taiwind from "../Assets/9055799_bxl_tailwind_css_icon.png";
import java from "../Assets/282802_javascript_js_icon.png";
import redux from "../Assets/4691205_redux_icon.png";
import html from "../Assets/html logo.png";
import css from "../Assets/csslogo.png";

const TechnologyUsed = () => {
  return (
    <div className="flex justify-center py-32 bg-[#F8F4EC]" id="skills">
      <div className="flex flex-col justify-center items-center w-[90%]">
        <h1 className=" font-semibold text-4xl pb-4">Skills</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 place-items-center gap-x-10 gap-y-6 md:gap-y-10  pt-5">
            <div className=" border-4 border-blue-500 rounded-full">
              <img className="w-10 md:w-14 m-4 sm:m-6" src={react} alt="" />
            </div>
            <div className=" border-4 border-blue-500 rounded-full">
              <img
                className="w-10 md:w-16 m-4 sm:m-6"
                src={taiwind}
                alt="tailwind logo"
              />
            </div>
            <div className=" border-4 border-blue-500 rounded-full">
              <img
                className="w-10 md:w-16  m-4 sm:m-6"
                src={java}
                alt="javascript logo"
              />
            </div>
            <div className=" border-4 border-blue-500 rounded-full">
              <img
                className="w-10 md:w-16  m-4 sm:m-6"
                src={redux}
                alt="redux logo"
              />
            </div>
            <div className="border-4 border-blue-500 rounded-full">
              <img
                className="w-10 md:w-16  m-4 sm:m-6"
                src={html}
                alt="redux logo"
              />
            </div>
            <div className="border-4 border-blue-500 rounded-full">
              <img
                className="w-10 md:w-16  m-4 sm:m-6"
                src={css}
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
