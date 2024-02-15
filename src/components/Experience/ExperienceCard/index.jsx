import React from "react";
import { FaRegCircle } from "react-icons/fa";

const ExperienceCard = ({ title, info, description, darkMode }) => {
  return (
    <div
      className={`experience__job__container ${
        darkMode && "experience__job__container__dark"
      }`}
    >
      <FaRegCircle className="experience__job__icon" size={15} />
      <span className="experience__job__title">{title}</span>
      <span className="experience__job__info">{info}</span>
      <span className="experience__job__description">{description}</span>
    </div>
  );
};

export default ExperienceCard;
