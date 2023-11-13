import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import What from "./components/What";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
      </BrowserRouter>
    </div>
  );
};

export default App;
