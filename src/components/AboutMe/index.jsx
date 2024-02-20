import React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutme__container">
      <span className="aboutme__title">{t("aboutTitle")}</span>
      <div className="aboutme__description__container">
        <div>
          <span className="aboutme__description">
            {t("aboutDescriptionFirst")}
          </span>
        </div>
        <div>
          <span className="aboutme__description">
            {t("aboutDescriptionSecond")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
