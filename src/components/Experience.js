import React from "react";
import Card from "../utils/Card";
import { motion } from "framer-motion";
import { customVariants } from "../utils/Motion";

const Experience = () => {
  return (
    <motion.div
      className="w-full flex-1 relative"
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
    >
      <Card>
        <h3 className="heading-text pb-7">Experience</h3>
        <div>
            <h6 className="text-[14px] text-white text-opacity-[80.0%] pb-1">
              The Design Shop
            </h6>
            <p className="info-text pb-2">
              Creative Developer ( <span className="info-text w-[40%]">Apr 2025 - Sep 2025</span> )
            </p>
        </div>
         <div>
            <h6 className="text-[14px] text-white text-opacity-[80.0%] pb-1">
              Vapusdata
            </h6>
            <p className="info-text pb-2">
              Frontend Developer ( <span className="info-text w-[40%]">Dec 2025 - Current</span> )
            </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default Experience;
