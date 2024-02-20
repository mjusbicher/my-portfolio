import React from "react";
import "./index.scss";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../../utils";
import { useTranslation } from "react-i18next";

const Projects = () => {  
  const { t } = useTranslation();

  return (
    <div className="projects">
      <span className="projects__title">{t("projectsTitle")}</span>
      {projects.map((project, i) => {
        return <ProjectsCard project={project} key={i} />;
      })}
    </div>
  );
};

export default Projects;
