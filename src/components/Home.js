import React from "react";
import Dayal from "../Assets/picofme.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="flex justify-center" id="home">
      <div className="lg:flex lg:flex-row-reverse items-center lg:my-6 lg:w-[90%] xl:w-[78%] 2xl:w-[70%]">
        <div className="flex justify-center py-10">
          <img className="w-[60%] lg:w-[70%]" src={Dayal} alt="" />
        </div>

        <div className="flex justify-center font-montserrat">
          <div className="sm:w-[80%] space-y-5 lg:space-y-2 xl:space-y-4">
            <h1 className="flex justify-center md:justify-start text-center text-5xl font-bold">
              Hi, I'm Dayal
            </h1>
            <p className="flex justify-center md:justify-start  text-center text-xl font-medium ">
              <span className="pr-3"> and I am</span>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(" Front end Developer")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(" Front end Developer")

                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
              />
            </p>

            <div className="flex justify-center md:justify-start  text-[#909090]">
              <p className="flex justify-center md:text-left w-[85%] sm:w-[90%] lg:w-[90%]">
                A passionate Front End Developer 🚀 having a special interest in
                Frontend technologies and experience of building Web
                applications with JavaScript / Reactjs / Nodejs and some other
                cool libraries and frameworks.
              </p>
            </div>

            <div className="flex justify-center md:justify-start text-white pt-5">
              <div className="flex flex-col  sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5">
                <a
                  href="https://github.com/Dayaldonadkar"
                  target="_blank"
                  f
                  rel="noreferrer"
                >
                  <button className="flex items-center justify-center text-center bg-[#673AB7] w-48 py-3 rounded-md space-x-2">
                    <GitHubIcon />
                    <p>View on Github</p>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/dayal-sudhakar-6657b8286/">
                  <button className="flex items-center justify-center bg-[#673AB7] w-48 py-3 rounded-md space-x-2">
                    <LinkedInIcon />
                    <p>View on LinkedIn</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
