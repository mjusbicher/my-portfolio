import React, { useContext, useEffect, useState } from "react";
import BurgerMenu from "../BurgerMenu";
import "./index.scss";
import { CiDark, CiLight } from "react-icons/ci";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { languages } from "../../utils";

const Navbar = ({ scroll }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [lang, setLang] = useState(false);
  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

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
          {/* <select defaultValue={i18n.language} onChange={onChangeLang}>
            {languages.map(({ code, label }) => (
              <option key={code} value={code}>
              {label}
              </option>
              ))}
            </select> */}
          <div style={{ alignSelf: "center" }}>
            <span
              className={`menu-sections ${darkMode && "menu-sections__dark"}`}
              style={{ padding: 0, margin: 0 }}
              onClick={() => setLang((prev) => !prev)}
            >
              {lang ? "ES" : "EN"}
            </span>
          </div>
        </div>
        <BurgerMenu scroll={scroll} />
      </div>
    </div>
  );
};

export default Navbar;
