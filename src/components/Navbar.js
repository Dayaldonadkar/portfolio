import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleChange = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#F8F9FA] flex justify-center">
      <div className="flex justify-between w-[90%] py-3 relative">
        <div className="flex justify-between w-[100%] space-x-5">
          <h1>Dayal</h1>
          <div className="hidden lg:block">
            <div className="flex w-[80%] space-x-5 justify-end  lg:space-x-5 font-montserrat text-[#707071] ">
              <p>Home</p>
              <p className="">About</p>
              <p className="">What I do</p>
              <p className="">Skills</p>
              <p className="">Experience</p>
              <p className="">Projects</p>
              <p className="">Portfolio</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div onClick={() => handleChange()} className="md:hidden">
          <MenuIcon />
        </div>
      </div>

      {showMenu && (
        <div className="absolute top-10 bg-[#F8F9FA] w-[100%] flex justify-center md:hidden">
          <div className="space-y-2 py-3 font-montserrat">
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
