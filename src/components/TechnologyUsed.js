import React, { useState } from "react";
import react from "../Assets/1174949_js_react js_logo_react_react native_icon.png";
import taiwind from "../Assets/9055799_bxl_tailwind_css_icon.png";
import java from "../Assets/282802_javascript_js_icon.png";
import redux from "../Assets/4691205_redux_icon.png";
import html from "../Assets/html logo.png";
import css from "../Assets/csslogo.png";
import git from "../Assets/git.svg";

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
          <div className="grid grid-cols-3 2xl:grid-cols-4 place-items-center gap-x-10 gap-y-6 md:gap-y-10  pt-5">
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
            <div
              className="border-4 border-blue-500 rounded-full relative"
              onMouseEnter={() => setIsCss(true)}
              onMouseLeave={() => setIsCss(false)}
            >
              <img
                className="w-10 md:w-16  m-4 sm:m-6"
                src="data:image/png;base64,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"
                alt="redux logo"
              />
              {isCss && (
                <h1 className="absolute top-3 right-6 px-1 bg-gray-700 text-white text-sm rounded-md py-[2px]">
                  Node Js
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
                src="https://hamna.dev/static/media/api.dfa7afca97451dea786b1c8395dbf6ff.svg"
                alt="redux logo"
              />
              {isCss && (
                <h1 className="absolute top-3 right-6 px-1 bg-gray-700 text-white text-sm rounded-md py-[2px]">
                  Api Integration
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
                src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
                alt="redux logo"
              />
              {isCss && (
                <h1 className="absolute top-3 right-6 px-1 bg-gray-700 text-white text-sm rounded-md py-[2px]">
                  MongoDB
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
                src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                alt="redux logo"
              />
              {isCss && (
                <h1 className="absolute top-3 right-6 px-1 bg-gray-700 text-white text-sm rounded-md py-[2px]">
                  Express
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
                src={git}
                alt="redux logo"
              />
              {isCss && (
                <h1 className="absolute top-3 right-6 px-1 bg-gray-700 text-white text-sm rounded-md py-[2px]">
                  Git
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
