import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Contact = () => {
  return (
    <div className="flex justify-center  bg-[#F5F7F8] py-28">
      <div className="md:w-[90%] xl:w-[78%] 2xl:w-[65%]">
        <h1 className="flex justify-center font-semibold pb-10 text-4xl">
          <span className="border-b-2 border-[#C2B0E2]">Contact me</span>
        </h1>

        <div className="space-y-4 sm:space-y-0 sm:grid grid-cols-2 gap-y-8 gap-x-4 lg:gap-x-7 lg:grid-cols-3">
          <div className="flex items-center space-x-4 bg-white   px-4 py-6 rounded-lg hover:shadow-xl hover:border hover:border-[#C2B0E2] hover:scale-105 transition duration-200 cursor-pointer">
            <LinkedInIcon fontSize="large" />
            <div>
              <p className="text-xl font-medium">LinkedIn</p>
              <p>Dayaldonadkar</p>
            </div>
          </div>
          <div className="flex items-center space-x-4  bg-white  px-4 py-6 rounded-lg hover:shadow-xl hover:border hover:border-[#C2B0E2] hover:scale-105 transition duration-200 cursor-pointer">
            <MailIcon fontSize="large" />
            <div>
              <p className="text-xl font-medium">Email</p>
              <p>Dayaldonadkar@hotmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4  bg-white  px-4 py-6 rounded-xl hover:shadow-xl hover:border hover:border-[#C2B0E2] hover:scale-105 transition duration-200 cursor-pointer">
            <div className="">
              <GitHubIcon fontSize="large" />
            </div>
            <div>
              <p className="text-xl font-medium">Github</p>
              <p>Dayaldonadkar</p>
            </div>
          </div>
          <div className="flex items-center space-x-4  bg-white  px-4 py-6 rounded-lg hover:shadow-xl hover:border hover:border-[#C2B0E2] hover:scale-105 transition duration-200 cursor-pointer">
            <LocalPhoneIcon fontSize="large" />
            <div>
              <p className="text-xl font-medium">Phone</p>
              <p>9423669658</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
