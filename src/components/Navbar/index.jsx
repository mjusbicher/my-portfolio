import React, { useContext, useEffect, useState } from "react";
import BurgerMenu from "../BurgerMenu";
import "./index.scss";
import { CiDark, CiLight } from "react-icons/ci";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const Navbar = ({ scroll }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [lang, setLang] = useState(false);
  const [popoverTheme, setPopoverTheme] = useState(false);
  const [popoverLanguage, setPopoverLanguage] = useState(false);
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
              onMouseOver={() => setPopoverTheme(true)}
              onMouseOut={() => setPopoverTheme(false)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <CiDark
              color="#000000"
              size={35}
              onClick={() => setDarkMode((prev) => !prev)}
              onMouseOver={() => setPopoverTheme(true)}
              onMouseOut={() => setPopoverTheme(false)}
              style={{ cursor: "pointer" }}
            />
          )}
          <div
            className={`navbar__icons__container ${
              darkMode && "navbar__icons__container__dark"
            }`}
          >
            <span
              className={`navbar__language ${
                darkMode && "navbar__language__dark"
              }`}
              style={{ padding: 0, margin: 0 }}
              onClick={() => setLang((prev) => !prev)}
              onMouseOver={() => setPopoverLanguage(true)}
              onMouseOut={() => setPopoverLanguage(false)}
            >
              {lang ? "EN" : "ES"}
            </span>
          </div>
          {popoverTheme ? (
            <div className="navbar__icons__popover">
              <span>{t("navbarPopoverTheme")}</span>
            </div>
          ) : null}
          {popoverLanguage ? (
            <div className="navbar__icons__popover" style={{ left: "90px" }}>
              <span>{t("navbarPopoverLanguage")}</span>
            </div>
          ) : null}
        </div>
        <BurgerMenu scroll={scroll} />
      </div>
    </div>
  );
};

export default Navbar;
