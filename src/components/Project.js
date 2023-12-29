import Card from "../utils/Card";
import React from "react";
import { Projects } from "../Constant";
import asset82 from "../assets/asset 82.svg";

const Project = () => {
  return (
    <div className="w-full relative z-10 mt-3">
      <Card>
        <h3 className="heading-text pb-[10px] text-center">Works & Projects</h3>
        <p className="info-text text-center w-1/2 m-auto">
          Check out some of my projects, meticulously crafted with love
          and dedication, each one reflecting the passion and soul I poured into
          every detail.
        </p>
        <div className="flex-short gap-3 flex-wrap my-8">
          {Projects.map((project) => {
            return (
              <div
                key={project.name}
                className="w-[330px] h-[290px] relative overflow-hidden group"
              >
                <div className="w-[330px] h-[200px] overflow-hidden rounded-xl rounded-b-none">
                  <img
                    src={project.imgUrl}
                    alt="projectimg"
                    className="w-full h-full scale-[1] object-cover custom-transition group-hover:scale-[1.3]"
                  />
                </div>

                <div className="h-[90px] w-full rounded-t-none rounded-xl p-4 bg-white bg-opacity-[2.0%] custom-border custom-shadow border-t-0">
                  <p className="heading-text pb-[6px]">{project.heading}</p>
                  <p className="info-text">{project.stack}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="text-sm text-white text-opacity-[70.0%]">
            Interested in Exploring More?
          </p>
          <div className="text-base custom-border px-4 py-2 rounded-3xl flex-short gap-2 bg-white bg-opacity-[2.0%] custom-transition group custom-shadow hover:bg-[rgba(255,255,255,0.05)] ">
            <p>View All </p>{" "}
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
