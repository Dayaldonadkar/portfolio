import React from "react";
import react from "../Assets/1174949_js_react js_logo_react_react native_icon.png";
import taiwind from "../Assets/9055799_bxl_tailwind_css_icon.png";
import java from "../Assets/282802_javascript_js_icon.png";
import redux from "../Assets/4691205_redux_icon.png";

const TechnologyUsed = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-[90%]">
        <h1 className=" font-semibold text-4xl">Technology Used</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 place-items-center">
            <img className="w-[50%]" src={react} alt="" />
            <img className="w-[50%]" src={taiwind} alt="" />
            <img className="w-[50%]" src={java} alt="" />
            <img className="w-[50%]" src={redux} alt="" />
            <img className="w-[50%]" src="" alt="" />
            <img className="w-[50%]" src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyUsed;
