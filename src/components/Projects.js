import React from "react";
import ProjectCard from "./ProjectCard";
import hulu from "../Assets/Hulu.png";
import ecom from "../Assets/ecomsnap.png";
import dukaandar from "../Assets/Dukanndar.com.png";
import todo from "../Assets/TodoList.png";
import hackernews from "../Assets/hackernews.png";
import alemeno from "../Assets/Alemeno.png";

const Projects = () => {
  return (
    <div
      className=" flex justify-center font-montserrat bg-[#F8F4EC] shadow-xl lg:py-10 -z-10"
      id="project"
    >
      <div className="md:w-[90%] lg:w-[90%] xl:w-[78%] 2xl:w-[80%] lg:px-14">
        <h1 className="text-4xl font-semibold text-center mt-5 mb-6">
          <span className="border-b-4 border-[#673AB7]/40 px-1 pb-1">
            Projects
          </span>
        </h1>
        <div className="flex justify-center">
          <div className="sm:grid sm:grid-cols-2 xl:grid-cols-3">
            <ProjectCard
              image={hulu}
              name="Hulu Clone"
              description="This project showcases my proficiency in building responsive user interfaces, dynamic content rendering, and seamless navigation. With features such as 
              search functionality, and an intuitive user experience, the Hulu clone offers a compelling environment. Leveraging React.js
               I successfully recreated the essence of Hulu."
              link="https://classy-lollipop-f7b5e3.netlify.app/"
            />
            <ProjectCard
              image={ecom}
              name="Dayal Ecom"
              description=" I've crafted a sleek HackerNews clone, combining a minimalist design
          with powerful functionality. Experience the latest tech stories,
          engage in discussions, and stay informed in a user-friendly
          environment."
            />
            <ProjectCard
              image={dukaandar}
              name="Dukaandar.com"
              description="In my role as a React.js developer, 
              I enhanced the user interface by integrating captivating 
              features such as dynamic 'Add to Cart' animations, crafted 
              with precision using Tailwind CSS. These animations "
              link="https://marketplace.quadbtech.com/"
            />
            <ProjectCard
              image={todo}
              name="Todo List"
              description="I crafted a To-Do List clone that offers a comprehensive set of functionalities. Users can effortlessly create, edit, delete, and clear all tasks, fostering a dynamic and intuitive task management experience. Leveraging React's component-based architecture, I ensured a responsive and user-friendly interface"
              link="https://todo-app-iota-lilac.vercel.app/"
            />
            <ProjectCard
              image={hackernews}
              name="Hackernews Clone"
              description="I've crafted a sleek HackerNews clone, combining a minimalist design
              with powerful functionality. Experience the latest tech stories,
              engage in discussions, and stay informed in a user-friendly
              environment."
              link="https://todo-app-iota-lilac.vercel.app/"
            />
            <ProjectCard
              image={alemeno}
              name="Assignmment for Alemeno"
              description="I've crafted a sleek HackerNews clone, combining a minimalist design
              with powerful functionality. Experience the latest tech stories,
              engage in discussions, and stay informed in a user-friendly
              environment."
              link="https://todo-app-iota-lilac.vercel.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
