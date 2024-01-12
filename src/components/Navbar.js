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

const Navbar = ({ handleChange, showMenu, setShowMenu }) => {
  const scrollTo = () => {
    scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
  };

  const combinedFunction = () => {
    scrollTo();
    handleChange();
  };

  return (
    <div className="bg-[#F8F9FA] flex justify-center sticky top-0 z-10">
      <div className="flex justify-between w-[90%] md:w-[91%] lg:w-[80%] xl:w-[65%]  py-3 relative">
        <div className="flex justify-between items-center w-[100%] space-x-5">
          <h1 className="text-3xl text-[#673AB7] font-lovelight font-medium">
            Dayal.<span className="text-lg font-semibold">dev</span>
          </h1>
          <div className="flex justify-end">
            <div className="hidden md:block text-sm ">
              <div className="flex space-x-6 justify-end  font-montserrat text-[#707071] ">
                <p
                  onClick={combinedFunction}
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

                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  <p className="hover:text-black hover:cursor-pointer">
                    Skills
                  </p>
                </Link>

                <p className="hover:text-black hover:cursor-pointer">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                  >
                    Contact
                  </Link>
                </p>
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
          <div className=" py-3 font-montserrat text-[15px]">
            <p
              onClick={combinedFunction}
              className="hover:text-black hover:cursor-pointer py-1"
            >
              Home
            </p>

            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <p
                className="hover:text-black hover:cursor-pointer"
                onClick={() => handleChange()}
              >
                Experience
              </p>
            </Link>
            <Link
              activeClass="active"
              to="what"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <div
                className="hover:text-black hover:cursor-pointer py-1"
                onClick={handleChange}
              >
                What I do
              </div>
            </Link>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <p
                className="hover:text-black hover:cursor-pointer"
                onClick={handleChange}
              >
                Projects
              </p>
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <p
                className="hover:text-black hover:cursor-pointer py-1"
                onClick={handleChange}
              >
                Skills
              </p>
            </Link>

            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <p
                className="hover:text-black hover:cursor-pointer"
                onClick={handleChange}
              >
                {" "}
                Contact{" "}
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
