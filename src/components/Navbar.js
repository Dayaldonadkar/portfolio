import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleChange = () => {
    setShowMenu(!showMenu);
  };

  const scrollTo = () => {
    scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
  };

  return (
    <div className="bg-[#F8F9FA] flex justify-center sticky top-0">
      <div className="flex justify-between w-[90%] md:w-[91%] lg:w-[80%] xl:w-[65%]  py-3 relative">
        <div className="flex justify-between items-center w-[100%] space-x-5">
          <h1 className="text-3xl text-[#673AB7] font-lovelight">Dayal</h1>
          <div className="flex justify-end">
            <div className="hidden md:block text-sm ">
              <div className="flex space-x-6 justify-end  font-montserrat text-[#707071] ">
                <p
                  onClick={scrollTo}
                  className="hover:text-black hover:cursor-pointer"
                >
                  Home
                </p>

                <p className="hover:text-black hover:cursor-pointer">
                  <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Experience
                  </Link>
                </p>

                <p className="hover:text-black hover:cursor-pointer">
                  <Link
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Projects
                  </Link>
                </p>

                <p className="hover:text-black hover:cursor-pointer">
                  <Link
                    activeClass="active"
                    to="what"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    What I do
                  </Link>
                </p>

                <p className="hover:text-black hover:cursor-pointer">Skills</p>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  <p className="hover:text-black hover:cursor-pointer">
                    Experience
                  </p>
                </Link>

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
