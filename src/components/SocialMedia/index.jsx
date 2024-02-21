import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./index.scss";

const SocialMedia = ({ isBurger, darkMode }) => {
  return (
    <div className={`${isBurger ? "social-media__burger" : "social-media"} `}>
      <FaLinkedin
        className={`social-media__icons ${
          darkMode && "social-media__icons__dark"
        }`}
        color={!darkMode && "#000000"}
        size={35}
        onClick={() =>
          window.open(`https://linkedin.com/in/martin-jusbicher`, "_blank")
        }
      />
      <FaGithub
        className={`social-media__icons ${
          darkMode && "social-media__icons__dark"
        }`}
        size={35}
        color={!darkMode && "#000000"}
        onClick={() => window.open(`https://github.com/mjusbicher`, "_blank")}
      />
    </div>
  );
};

export default SocialMedia;
