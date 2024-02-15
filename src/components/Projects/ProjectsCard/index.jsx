import React, { useContext } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ThemeContext } from "../../../context/ThemeContext";

const ProjectsCard = ({ project }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`projects__card ${darkMode && "projects__card__dark"}`}>
      <img className="projects__card__img" src={project.img} alt="project"/>
      <div className="projects__card__container">
        <div className="projects__card__info">
          <span className="projects__card__info__title">{project.title}</span>
          <span className="projects__card__info__description">
            {project.description}
          </span>
        </div>
        <div
          className={`projects__card__info__button ${
            darkMode && "projects__card__info__button__dark"
          }`}
          onClick={() => window.open(project.link, "_blank")}
        >
          <FaExternalLinkAlt />
          <span>Visit Website</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
