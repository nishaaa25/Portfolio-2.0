import React from "react";
import Card from "../utils/Card";
import {motion} from "framer-motion";
import { customVariants } from "../utils/Motion";


const Education = () => {
  return (
    <motion.div className="w-full xl:w-[386px] h-[392px] relative "  variants={customVariants} initial="hidden" whileInView="visible">
      <Card >
        <h3 className="heading-text pb-7">Education</h3>
        <div>
          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <div className="w-[6px] h-[6px] bg-green-400 rounded-full shadow-md"></div>
              <div className="h-20 w-[1px] ml-[2px] bg-white bg-opacity-[6.00%]"></div>
            </div>
            <div>
              <h6 className="text-[14px] text-white text-opacity-[80.0%] pb-1">
                Bachelors of Computer Application
              </h6>
              <p className="info-text pb-2">
                B.N.Mandal University, Madhepura, Bihar, India
              </p>
              <p className="info-text">
                2022-2025 - <span>90.75%</span>
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <div className="w-[6px] h-[6px] bg-white bg-opacity-[36.0%] rounded-full"></div>
              <div className="h-20 w-[1px] ml-[2px] bg-white bg-opacity-[6.00%]"></div>
            </div>
            <div>
              <h6 className="text-[14px] text-white text-opacity-[80.0%] pb-1">
                12th Science
              </h6>
              <p className="info-text pb-2">
                K.V.NTPC Shaktinagar, Sonebhadra, U.P, India
              </p>
              <p className="info-text">
                2020-2022 - <span>80.4%</span>
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="mt-1">
              <div className="w-[6px] h-[6px] bg-white bg-opacity-[36.0%] rounded-full"></div>
              <div className="h-20 w-[1px] ml-[2px] bg-white bg-opacity-[6.00%]"></div>
            </div>
            <div>
              <h6 className="text-[14px] text-white text-opacity-[80.0%] pb-1">
                10th
              </h6>
              <p className="info-text pb-2">
                K.V.NTPC Shaktinagar, Sonebhadra, U.P, India
              </p>
              <p className="info-text">
                2019-2020 - <span>77.4%</span>
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Education;
