import React, { useEffect, useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);
  const handleChange = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      setShowMenu(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <Navbar
        handleChange={handleChange}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <div
        onClick={() => {
          setShowMenu(false);
        }}
      >
        <Home />
        <About />
        <Experience />
        <Projects />
        <What />
        <TechnologyUsed />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
