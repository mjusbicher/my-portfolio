import React, { useContext } from "react";
import "./index.scss";
import ExperienceCard from "./ExperienceCard";
import { jobs } from "../../utils";
import { ThemeContext } from "../../context/ThemeContext";

const Experience = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`experience__container ${darkMode}`}>
      <span className="experience__title">Proffesional Experience</span>
      {jobs.map((job, i) => {
        return (
          <ExperienceCard
            key={i}
            title={job.title}
            info={job.info}
            description={job.description}
            darkMode={darkMode}
          />
        );
      })}
    </div>
  );
};

export default Experience;
