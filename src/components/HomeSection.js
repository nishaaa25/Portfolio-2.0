import React from "react";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import LetsTalk from "./LetsTalk";
import Footer from "./Footer";

const HomeSection = () => {
  return (
    <div className="w-full relative">
      <Hero />
      <About />
      <Project />
      <LetsTalk />
    <Footer/>
    </div>
  );
};

export default HomeSection;
