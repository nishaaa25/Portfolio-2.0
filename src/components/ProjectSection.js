import React from "react";
import ProjectContainer from "./ProjectContainer";
import Connect from "./Connect";
import asset82 from "../assets/asset 82.svg";
import Card from "../utils/Card";
import asset19 from "../assets/asset19.png";
import asset20 from "../assets/asset20.png";
import asset21 from "../assets/asset21.png";
import Footer from "./Footer";
import LetsTalk from "./LetsTalk";

const ProjectSection = () => {
  return (
    <div className="w-full pt-8 lg:pt-[72px] z-10">
      <h1 className="text-3xl lg:text-[42px] mb-2 lg:mb-6 font-semibold tracking-[0.9px]">
        Projects
      </h1>
      <p className="text-xl lg:text-2xl text-white text-opacity-[50.0%] mb-12">
        Check out some of my personal projects, meticulously crafted with love
        and dedication.
      </p>
      <ProjectContainer />
      <div className="flex flex-wrap mt-2 gap-3 relative">
        <Connect />
        <div className="w-full xl:w-[735px] h-[392px]">
          <Card>
            <div className="mb-4">
              <p className="text-lg font-semibold text-white text-opacity-[70.0%]">
                Projects <span className="text-purple-400">Shots</span>
              </p>
            </div>
            <div className="flex overflow-hidden gap-2">
              <img src={asset19} className="h-[266px]" alt="img" />
              <img src={asset20} className="h-[266px]" alt="img" />
              <img src={asset21} className="h-[266px]" alt="img" />
            </div>
          </Card>
        </div>
      </div>
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default ProjectSection;
