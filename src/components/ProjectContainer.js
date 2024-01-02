import React from "react";
import { Projects } from "../Constant";
import ProjectCard from "./ProjectCard";

const ProjectContainer = () => {
  return (
    <div className="flex justify-between items-center flex-wrap relative">
      {Projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default ProjectContainer;
