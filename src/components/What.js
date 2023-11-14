import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const whatdata = [
  "Prepare variety of different designs, layouts and websites",
  "Actively listen to customers requests, confirming full understanding before addressing concerns",
  "Identify issues, analyzed information and provided solutions to problems",
  "Convert graphic designs to usable web images using React JS",
  "Plann website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding",
  "Code websites using HTML, CSS, JavaScript",
];

const What = () => {
  return (
    <div className="flex justify-center bg-[#F5F7F8] py-2 shadow-2xl">
      <div className="w-[90%]">
        <h1 className="text-4xl font-bold flex justify-center">
          <span className="border-b-4 border-[#673AB7]/40 px-1 pb-1">
            What I do?
          </span>
        </h1>
        <div className="flex justify-center">
          <div className="space-y-5 w-[90%] my-5">
            {whatdata.map((user) => {
              return (
                <div className="px-4 py-3 text-[#909090]  space-x-3 flex items-center bg-[#FFFFFF] rounded-lg">
                  <CheckIcon fontSize="smaller" />
                  <p className="">{user}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
