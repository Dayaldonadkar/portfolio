import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleChange = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#F8F9FA] flex justify-center">
      <div className="flex justify-between w-[90%] md:w-[91%] py-3 relative">
        <div className="flex justify-between items-center w-[100%] space-x-5">
          <h1 className="text-3xl text-[#673AB7] font-lovelight">Dayal</h1>
          <div className="flex justify-end">
            <div className="hidden md:block md:text-sm lg:text-lg">
              <div className="flex space-x-6 justify-end  font-montserrat text-[#707071] ">
                <p className="hover:text-black hover:cursor-pointer">Home</p>
                <p className="hover:text-black hover:cursor-pointer">About</p>
                <p className="hover:text-black hover:cursor-pointer">
                  What I do
                </p>
                <p className="hover:text-black hover:cursor-pointer">Skills</p>
                <p className="hover:text-black hover:cursor-pointer">
                  Experience
                </p>
                <p className="hover:text-black hover:cursor-pointer">
                  Projects
                </p>
                <p className="hover:text-black hover:cursor-pointer">
                  Portfolio
                </p>
                <p className="hover:text-black hover:cursor-pointer">Contact</p>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => handleChange()} className="md:hidden">
          <MenuIcon />
        </div>
      </div>

      {showMenu && (
        <div className="absolute top-14 bg-[#F8F9FA] w-[100%] flex justify-center md:hidden">
          <div className="space-y-2 py-3 font-montserrat text-sm">
            <p>Home</p>
            <p>About</p>
            <p>What I do</p>
            <p>Skills</p>
            <p>Experience</p>
            <p>Projects</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
