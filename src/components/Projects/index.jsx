import React from "react";
import "./index.scss";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../../utils";

const Projects = () => {
  return (
    <div className="projects">
      <span className="projects__title">Projects</span>
      {projects.map((project, i) => {
        return <ProjectsCard project={project} key={i} />;
      })}
    </div>
  );
};

export default Projects;
