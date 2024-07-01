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
      className="flex flex-wrap gap-3 z-10"
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="w-full min-h-[270px] md:h-[200px] xl:w-[345px] xl:h-[392px] flex flex-col gap-3 relative">
        <Experience />
        <Skills />
      </div>
      <Education />
      <Connect />
    </motion.div>
  );
};

export default About;
