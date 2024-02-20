import React, { useContext } from "react";
import "./index.scss";
import ExperienceCard from "./ExperienceCard";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const jobs = [
    {
      title: t("jobTitle1"),
      info: t("jobInfo1"),
      description: t("jobDescription1"),
    },
    {
      title: t("jobTitle2"),
      info: t("jobInfo2"),
      description: t("jobDescription2"),
    },
    {
      title: t("jobTitle3"),
      info: t("jobInfo3"),
      description: t("jobDescription3"),
    },
    {
      title: t("jobTitle4"),
      info: t("jobInfo4"),
      description: t("jobDescription4"),
    },
    {
      title: t("jobTitle5"),
      info: t("jobInfo5"),
      description: t("jobDescription5"),
    },
    {
      title: t("jobTitle6"),
      info: t("jobInfo6"),
      description: t("jobDescription6"),
    },
  ];

  return (
    <div className={`experience__container ${darkMode}`}>
      <span className="experience__title">{t("experienceTitle")}</span>
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
