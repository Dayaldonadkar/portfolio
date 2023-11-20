import React from "react";
import animate from "../Assets/animate.png";

const About = () => {
  return (
    <div className="flex justify-center font-montserrat">
      <div className="w-[90%]">
        <div className="my-10 flex justify-center">
          <img className="w-[60%]" src={animate} alt="boy" />
        </div>

        <div>
          <h1 className="text-4xl font-bold flex justify-center">
            <span className="border-b-4 border-[#673AB7]/40 px-1 py-2">
              About Me👦🏻
            </span>
          </h1>
          <div className="flex justify-center">
            <p className="text-sm text-center text-[#909090] py-3 w-[95%] flex justify-center">
              Experienced front-end developer with a robust background in the
              software industry and startup sector. Seeking a challenging
              front-end developer role where I can leverage my expertise in
              HTML5, CSS, Bootstrap, Tailwind CSS,JavaScript, and React.js to
              contribute to innovative web projects. Proficient in developing
              UI, Redux-saga, Hooks and Rest API, enhancing application
              responsiveness by 30%. I am an enthusiastic and passionate web
              developer from Yashwantrao Chavan University Nashik. I pursued my
              BA degree in Arts. Although I am from Arts Background, I always
              loved coding and my keen interest is in Python, my main
              specialization is in Front End Web Development. I pursue
              perfection in my projects. I put dedication in every project that
              I do. And I hope my dedication will help me to explore my
              expertise, and to boost up my career plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
