import React from "react";
import quadb from "../Assets/QBT Logo Black.png";

const Card = () => {
  return (
    <div className="bg-white my-8 py-3 w-[90%] font-montserrat shadow-lg rounded-2xl shadow-lg">
      <div className="flex justify-center">
        <img src={quadb} alt="" />
      </div>
      <div className="">
        <div className="text-center space-y-2">
          <h3 className="font-bold text-lg pt-5">QuadB TECH</h3>
          <p className="text-sm">Oct 2022-Nov 2023</p>
          <h6 className="font-semibold">React Js Developer</h6>
          <p className="text-xs px-4">
            I worked on the Website for Dukaandar.com. The project is included
            complete design of the website. It is an E-commerce website.
          </p>
        </div>
        <div className="py-5 space-y-2">
          <h6 className="text-sm text-center font-semibold">Responsibilites</h6>
          <div className="text-xs">
            <ul className="list-disc list-inside px-5 space-y-1">
              <li>Converting the figma desings into code</li>
              <li>Work on the feedback points</li>
              <li>Made figma design responsive in all devices</li>
              <li>Writing clean and standard code</li>
              <li>Integrating stripe payment gateway to the application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
