import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./index.scss";

const SocialMedia = ({ isBurger, darkMode }) => {
  return (
    <div className={`${isBurger ? "social-media__burger" : "social-media"} `}>
      <FaLinkedin
        className="social-media__icons"
        color={!darkMode && "#000000"}
        size={35}
        onClick={() =>
          window.open(`https://linkedin.com/in/martin-jusbicher`, "_blank")
        }
      />
      <FaGithub
        className="social-media__icons"
        size={35}
        color={!darkMode && "#000000"}
        onClick={() => window.open(`https://github.com/mjusbicher`, "_blank")}
      />
    </div>
  );
};

export default SocialMedia;
