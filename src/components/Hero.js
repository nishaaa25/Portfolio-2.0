import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { customVariants } from "../utils/Motion";

const Hero = () => {
  return (
    <motion.div className="w-full px-0 py-8 lg:py-[78px] xl:px-8 z-10" variants={customVariants} initial="hidden" whileInView="visible">
      <div>
        <p className="text-base pb-6 text-white text-opacity-[80.0%]">Hey there!</p>
        <h1 className="text-2xl leading-[36px] md:text-[42px] md:leading-[63px] pb-6 font-semibold tracking-[0.9px]">
          I'm Nisha, a frontend developer crafting captivating websites, turning
          code into digital masterpieces.
        </h1>
        <div className="flex items-center gap-2">
          <div className="w-[6px] h-[6px] bg-green-400 rounded-full"></div>
          <p className="info-text">
            <Link to="https://drive.google.com/file/d/1QPbEPZR5t6vnspxeVBFb3Q-tn68yIrzK/view?usp=sharing" target="blank">
              Download My Resume
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
