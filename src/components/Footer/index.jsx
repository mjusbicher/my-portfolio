import React, { useContext } from "react";
import "./index.scss";
import SocialMedia from "../SocialMedia";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="footer">
      <SocialMedia darkMode={darkMode} />
      <span className={`footer__text ${darkMode && "footer__text__dark"}`}>
        © 2024 Martin Jusbicher - Created with React and lots of 💜
      </span>
    </div>
  );
};

export default Footer;
