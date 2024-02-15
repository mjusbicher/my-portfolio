import React, { useContext } from "react";
import BurgerMenu from "../BurgerMenu";
import "./index.scss";
import { CiDark, CiLight } from "react-icons/ci";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = ({ scroll }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className={`navbar ${darkMode && "navbar__dark"}`}>
      <div className="navbar__container">
        <div className="navbar__icons">
          {darkMode ? (
            <CiLight
              color="#FFFFFF"
              size={35}
              onClick={() => setDarkMode((prev) => !prev)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <CiDark
              color="#000000"
              size={35}
              onClick={() => setDarkMode((prev) => !prev)}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
        <BurgerMenu scroll={scroll} />
      </div>
    </div>
  );
};

export default Navbar;
