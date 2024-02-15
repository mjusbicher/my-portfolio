import React, { useContext } from "react";
import MyPhoto from "../../assets/images/yopng.png";
import "./index.scss";
import SocialMedia from "../../components/SocialMedia";
import AboutMe from "../../components/AboutMe";
import { ThemeContext } from "../../context/ThemeContext";

const Main = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="main">
      <div className="main__container">
        <div
          className={`main__profile-container ${
            darkMode && "main__profile-container__dark"
          }`}
        >
          <img className="main__profile-container__img" alt="" src={MyPhoto} />
        </div>
        <div className="main__text">
          <div className="main__text__desktop">
            <span className="main__text__1">Hi! My name is</span>
            <span className="main__text__2">
              Martin <span style={{ color: "#3f65ff" }}>Jusbicher</span>
            </span>
            <span className="main__text__3">
              I'm a 25 years old Full Stack Developer from Buenos Aires,
              Argentina.
            </span>
          </div>
          <SocialMedia darkMode={darkMode} />
        </div>
      </div>
      <AboutMe />
    </div>
  );
};

export default Main;
