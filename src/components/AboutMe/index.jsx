import React from "react";
import "./index.scss";

const AboutMe = () => {
  return (
    <div className="aboutme__container">
      <span className="aboutme__title">About Me</span>
      <div className="aboutme__description__container">
        <div>
          <span className="aboutme__description">
            I am a passionate software developer with 3 years of experience
            developing robust and efficient technological solutions.
          </span>
        </div>
        <div>
          <span className="aboutme__description">
            I am always seeking opportunities to enhance my skills and stay
            current with the latest technological trends.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
