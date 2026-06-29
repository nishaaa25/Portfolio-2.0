import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Connect from "./Connect";
import { motion } from "framer-motion";
import { customVariants } from "../utils/Motion";
import Experience from "./Experience";

const About = () => {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-3 gap-3  z-10"
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="w-full flex flex-1 flex-col md:flex-row lg:flex-col gap-3 relative">
        <Experience />
        <Skills />
      </div>
      <Education />
      <Connect />
    </motion.div>
  );
};

export default About;
