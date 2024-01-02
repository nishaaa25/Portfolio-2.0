import React from "react";

const ProjectCard = ({project}) => {
  return (
    <div
      key={project.name}
      className="w-[32.5%] h-[290px] my-1.5 relative overflow-hidden group"
    >
      <div className="w-[full] h-[200px] overflow-hidden rounded-xl rounded-b-none">
        <img
          src={project.imgUrl}
          alt="projectimg"
          className="w-full h-full scale-[1.3] object-cover custom-transition group-hover:scale-[1.8]"
        />
      </div>

      <div className="h-[90px] w-full rounded-t-none rounded-xl p-4 bg-white bg-opacity-[2.0%] custom-border custom-shadow border-t-0">
        <p className="heading-text pb-[6px]">{project.heading}</p>
        <p className="info-text">{project.stack}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
