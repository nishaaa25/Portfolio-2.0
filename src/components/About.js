import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Connect from "./Connect";
import { motion } from "framer-motion";
import { customVariants } from "../utils/Motion";

const About = () => {
  return (
    <motion.div className="flex flex-wrap gap-3 z-10" variants={customVariants} initial="hidden" whileInView="visible">
      <Education/>
      <Skills/>
      <Connect/>
    </motion.div>
  );
};

export default About;
