import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import What from "./components/What";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechnologyUsed from "./components/TechnologyUsed";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <What />
      <TechnologyUsed />
      <Contact />
    </BrowserRouter>
  );
};

export default App;
