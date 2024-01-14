import React from "react";
import asset82 from "../assets/asset 82.svg";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.name}
      className="w-full md:w-[49%] xl:w-[32.5%] h-[290px] my-1.5 relative overflow-hidden group"
    >
      <div className="w-[full] h-[200px] relative overflow-hidden rounded-xl rounded-b-none group">
        <img
          src={project.imgUrl}
          alt="projectimg"
          className="w-full h-full scale-[1.3] object-cover custom-transition group-hover:scale-[1.8]"
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-black w-full h-full flex justify-center items-center bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-700">
            <Link
              to={project.demo}
              className="py-3 px-6 rounded-full cursor-pointer text-white border-2 border-white hover:bg-white hover:bg-opacity-30"
            >
              Demo
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[90px] relative w-full rounded-t-none rounded-xl p-4 bg-white bg-opacity-[2.0%] custom-border custom-shadow border-t-0">
        <p className="heading-text pb-[6px]">{project.heading}</p>
        <p className="info-text">{project.stack}</p>
        <Link to={project.url}>
          <div className="p-2 absolute right-2 top-3 rounded-full  bg-white bg-opacity-[6.00%] ">
            <img
              src={asset82}
              alt="arrow"
              className="w-4 transform group-hover:rotate-[45deg] transition "
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
