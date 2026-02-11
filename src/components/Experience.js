import React from "react";
import Card from "../utils/Card";
import { motion } from "framer-motion";
import { customVariants } from "../utils/Motion";

const Experience = () => {
  return (
    <motion.div
      className="w-full xl:w-[345px] relative"
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
    >
      <Card>
        <h3 className="heading-text pb-7">Experience</h3>
        <div>
            <h6 className="text-[14px] text-white text-opacity-[80.0%] pb-1">
              Mapoptimist Technologies
            </h6>
            <p className="info-text pb-2">
              Full Stack Developer  ( <span className="info-text w-[40%]">Oct 2023 – Current </span> )
            </p> 
        </div>
      </Card>
    </motion.div>
  );
};

export default Experience;
