import React from "react";
import ProjectContainer from "./ProjectContainer";
import Connect from "./Connect";
import Card from "../utils/Card";
import asset22 from "../assets/asset22.png";
import asset20 from "../assets/asset20.png";
import asset23 from "../assets/asset23.png";
import asset25 from "../assets/asset25.png";
import asset24 from "../assets/asset24.png";
import Footer from "./Footer";
import LetsTalk from "./LetsTalk";
import { motion } from "framer-motion";
import { customVariants } from "../utils/Motion";

const ProjectSection = () => {
  return (
    <motion.div
      className="w-full pt-8 lg:pt-[72px] z-10"
      initial="hidden"
      whileInView="visible"
    >
      <motion.h1
        className="text-3xl lg:text-[42px] mb-2 lg:mb-6 font-semibold tracking-[0.9px]"
        variants={customVariants}
      >
        Projects
      </motion.h1>
      <motion.p
        className="text-xl lg:text-2xl text-white text-opacity-[50.0%] mb-12"
        variants={customVariants}
      >
        Check out some of my personal projects, meticulously crafted with love
        and dedication.
      </motion.p>
      <motion.div variants={customVariants}>
        <ProjectContainer projectToShow={6} />
      </motion.div>
      <div className="flex flex-wrap mt-2 gap-3 relative">
        <Connect />
        <motion.div className="w-full xl:w-[735px] h-[392px]" variants={customVariants} initial="hidden" whileInView="visible">
          <Card>
            <div>
              <div className="mb-4">
                <p className="text-lg font-semibold text-white text-opacity-[70.0%]">
                  Projects <span className="text-purple-400">Shots</span>
                </p>
              </div>
              <div className="flex overflow-hidden gap-2">
                <img src={asset24} className="h-[266px] rounded-lg" alt="img" />
                <img src={asset22} className="h-[266px] rounded-lg" alt="img" />
                <img src={asset25} className="h-[266px] rounded-lg" alt="img" />
                <img src={asset20} className="h-[266px] rounded-lg" alt="img" />
                <img src={asset23} className="h-[266px] rounded-lg" alt="img" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
      <LetsTalk />
      <Footer />
    </motion.div>
  );
};

export default ProjectSection;
