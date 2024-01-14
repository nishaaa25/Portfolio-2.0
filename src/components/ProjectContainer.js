import React from "react";
import { Projects } from "../Constant";
import ProjectCard from "./ProjectCard";

const ProjectContainer = ({projectToShow}) => {

  return (
    <div className="flex justify-between items-center flex-wrap relative" >
      {Projects.slice(0, projectToShow).map((project, index) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default ProjectContainer;
