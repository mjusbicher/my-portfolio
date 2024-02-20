import React, { useContext } from "react";
import "./index.scss";
import SocialMedia from "../SocialMedia";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="footer">
      <SocialMedia darkMode={darkMode} />
      <span className={`footer__text ${darkMode && "footer__text__dark"}`}>
        © 2024 Martin Jusbicher - {t("footerText")} 💜
      </span>
    </div>
  );
};

export default Footer;
