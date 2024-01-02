import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Connect from "./Connect";

const About = () => {
  return (
    <div className="flex flex-wrap gap-3 z-10">
      <Education/>
      <Skills/>
      <Connect/>
    </div>
  );
};

export default About;
