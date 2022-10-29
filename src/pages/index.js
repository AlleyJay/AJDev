import React, { useState } from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Skills from "../components/Skills";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <About id="about" />
      <Skills id="skills" />
    </>
  );
};

export default Home;
