import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import About from "./components/About";
import What from "./components/What";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechnologyUsed from "./components/TechnologyUsed";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expe" element={<Experience />} />
          <Route path="/ido" element={<What />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech" element={<TechnologyUsed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
