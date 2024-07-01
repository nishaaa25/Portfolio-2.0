import React from "react";
import Card from "../utils/Card";
import asset2 from "../assets/asset 2.png";
import asset3 from "../assets/asset 3.png";
import asset4 from "../assets/asset 4.png";
import asset5 from "../assets/asset 5.png";
import asset6 from "../assets/asset 6.png";
import asset8 from "../assets/asset 8.png";
import asset9 from "../assets/asset 9.png";
import asset11 from "../assets/asset11.png";
import asset12 from "../assets/asset12.png";
import asset10 from "../assets/asset 10.png";
import asset21 from "../assets/asset21.png";
import {motion} from "framer-motion";
import { customVariants } from "../utils/Motion";

const Skills = () => {
  return (
    <motion.div className="w-full xl:w-[345px]  relative" variants={customVariants} initial="hidden" whileInView="visible">
      <Card>
        <h3 className="heading-text pb-4">Skills</h3>
        <div className="grid grid-cols-6 justify-start">
          <img src={asset2} alt="html" className="w-[40px] h-[40px] mb-2" />
          <img src={asset3} alt="css" className="w-[40px] h-[40px] mb-2" />
          <img src={asset4} alt="js" className="w-[40px] h-[40px] mb-2" />
          <img src={asset5} alt="react" className="w-[40px] h-[40px] mb-2" />
          <img src={asset6} alt="tailwind" className="w-[40px] h-[40px] mb-2" />
          <img src={asset12} alt="html" className="w-[40px] h-[40px] mb-2" />
          <img src={asset8} alt="html" className="w-[40px] h-[40px] mb-2" />
          <img src={asset9} alt="html" className="w-[40px] h-[40px] mb-2" />
          <img src={asset10} alt="html" className="w-[40px] h-[40px] mb-2" />
          <img src={asset11} alt="html" className="w-[40px] h-[40px] mb-2" />      
          <img src={asset21} alt="html" className="w-[40px] h-[40px] mb-2" />      
        </div>
      </Card>
    </motion.div>
  );
};

export default Skills;
