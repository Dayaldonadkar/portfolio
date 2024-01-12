import React, { useState } from "react";
import react from "../Assets/1174949_js_react js_logo_react_react native_icon.png";
import taiwind from "../Assets/9055799_bxl_tailwind_css_icon.png";
import java from "../Assets/282802_javascript_js_icon.png";
import redux from "../Assets/4691205_redux_icon.png";
import html from "../Assets/html logo.png";
import css from "../Assets/csslogo.png";

const TechnologyUsed = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isJavaHovered, setIsJavaHovered] = useState(false);
  const [isReact, setIsReact] = useState(false);
  const [isCss, setIsCss] = useState(false);
  const [isHtml, setIsHtml] = useState(false);
  const [isRedux, setIsRedux] = useState(false);

  return (
    <div className="flex justify-center py-32 bg-[#F8F4EC]" id="skills">
      <div className="flex flex-col justify-center items-center w-[90%]">
        <h1 className=" font-semibold text-4xl pb-4">Skills</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 place-items-center gap-x-10 gap-y-6 md:gap-y-10  pt-5">
            <div
              className=" border-4 border-blue-500 rounded-full relative"
              onMouseEnter={() => setIsReact(true)}
              onMouseLeave={() => setIsReact(false)}
            >
              <img className="w-10 md:w-14 m-4 sm:m-6" src={react} alt="" />
              {isReact && (
                <h1 className="absolute top-3 right-6 px-1 bg-gray-700 text-white text-sm rounded-md py-[2px]">
                  React
                </h1>
              )}
            </div>
            <div
              className="border-4 border-blue-500 rounded-full relative"
              onMouseEnter={(tailwind) => setIsHovered(true)}
              onMouseLeave={(tailwind) => setIsHovered(false)}
            >
              <img
                className="w-10 md:w-16 m-4 sm:m-6 "
                src={taiwind}
                alt="tailwind logo"
              />

              {isHovered && (
                <h1 className="absolute top-3 right-6 px-1 bg-gray-700 text-white text-sm rounded-md py-[2px]">
                  Tailwind
                </h1>
              )}
            </div>
            <div
              className=" border-4 border-blue-500 rounded-full relative"
              onMouseEnter={() => setIsJavaHovered(true)}
              onMouseLeave={() => setIsJavaHovered(false)}
            >
              <img
                className="w-10 md:w-16  m-4 sm:m-6"
                src={java}
                alt="javascript logo"
              />
              {isJavaHovered && (
                <h1 className="absolute top-3 right-6 px-1 bg-gray-700 text-white text-sm rounded-md py-[2px]">
                  JavaScript
                </h1>
              )}
            </div>
            <div
              className=" border-4 border-blue-500 rounded-full relative"
              onMouseEnter={() => setIsRedux(true)}
              onMouseLeave={() => setIsRedux(false)}
            >
              <img
                className="w-10 md:w-16  m-4 sm:m-6"
                src={redux}
                alt="redux logo"
              />
              {isRedux && (
                <h1 className="absolute top-3 right-6 px-1 bg-gray-700 text-white text-sm rounded-md py-[2px]">
                  Redux
                </h1>
              )}
            </div>
            <div
              className="border-4 border-blue-500 rounded-full relative"
              onMouseEnter={() => setIsHtml(true)}
              onMouseLeave={() => setIsHtml(false)}
            >
              <img
                className="w-10 md:w-16  m-4 sm:m-6 relative"
                src={html}
                alt="redux logo"
              />
              {isHtml && (
                <h1 className="absolute top-3 right-6 px-1 bg-gray-700 text-white text-sm rounded-md py-[2px]">
                  Html
                </h1>
              )}
            </div>
            <div
              className="border-4 border-blue-500 rounded-full relative"
              onMouseEnter={() => setIsCss(true)}
              onMouseLeave={() => setIsCss(false)}
            >
              <img
                className="w-10 md:w-16  m-4 sm:m-6"
                src={css}
                alt="redux logo"
              />
              {isCss && (
                <h1 className="absolute top-3 right-6 px-1 bg-gray-700 text-white text-sm rounded-md py-[2px]">
                  Css
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyUsed;
