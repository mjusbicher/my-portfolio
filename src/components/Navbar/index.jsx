import React, { useContext, useEffect, useState } from "react";
import BurgerMenu from "../BurgerMenu";
import "./index.scss";
import { CiDark, CiLight } from "react-icons/ci";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const Navbar = ({ scroll }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [lang, setLang] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const lang_code = lang ? "es" : "en";
    i18n.changeLanguage(lang_code);
  }, [lang]);

  return (
    <div className={`navbar ${darkMode && "navbar__dark"}`}>
      <div className="navbar__container">
        <div className="navbar__icons">
          {darkMode ? (
            <CiLight
              color="#FFFFFF"
              size={35}
              onClick={() => setDarkMode((prev) => !prev)}
              onMouseOver={() => setShowPopover(true)}
              onMouseOut={() => setShowPopover(false)}
              style={{ cursor: "pointer" }}
              />
              ) : (
                <CiDark
                color="#000000"
                size={35}
                onClick={() => setDarkMode((prev) => !prev)}
                onMouseOver={() => setShowPopover(true)}
                onMouseOut={() => setShowPopover(false)}
              style={{ cursor: "pointer" }}
            />
          )}
          <div style={{ alignSelf: "center" }}>
            <span
              className={`navbar__language ${
                darkMode && "navbar__language__dark"
              }`}
              style={{ padding: 0, margin: 0 }}
              onClick={() => setLang((prev) => !prev)}
            >
              {lang ? "ES" : "EN"}
            </span>
          </div>
          {showPopover ? <div className="navbar__icons__popover">
            <span>Toggle theme</span>
            </div> : null}
        </div>
        <BurgerMenu scroll={scroll} />
      </div>
    </div>
  );
};

export default Navbar;
