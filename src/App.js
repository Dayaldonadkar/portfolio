import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import What from "./components/What";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <What />
        <Projects />
        <Experience />
      </BrowserRouter>
    </div>
  );
};

export default App;
