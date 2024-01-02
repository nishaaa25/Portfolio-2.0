import Card from "../utils/Card";
import React from "react";
import asset82 from "../assets/asset 82.svg";
import ProjectContainer from "./ProjectContainer";

const Project = () => {
  return (
    <div className="w-full relative z-10 mt-3">
      <Card>
        <h3 className="heading-text mb-[10px] text-center">Works & Projects</h3>
        <p className="info-text text-center w-11/12 md:w-7/12 lg:w-1/2 m-auto mb-7">
          Check out some of my projects, meticulously crafted with love
          and dedication, each one reflecting the passion and soul I poured into
          every detail.
        </p>
        <ProjectContainer/>
        <div className="w-full flex justify-between items-center mt-7">
          <p className="text-sm text-white text-opacity-[70.0%]">
            Interested in Exploring More?
          </p>
          <div className="text-base custom-border px-4 py-2 rounded-3xl flex-short gap-2 bg-white bg-opacity-[2.0%] custom-transition group custom-shadow hover:bg-[rgba(255,255,255,0.05)] ">
            <p>View All </p>
            <img
              src={asset82}
              alt="arrow"
              className="w-3 transform group-hover:rotate-[45deg] transition "
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Project;
