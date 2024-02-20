import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import SocialMedia from "../SocialMedia";
import { ThemeContext } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

const BurgerMenu = ({ scroll }) => {
  const { darkMode } = useContext(ThemeContext);
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [menu_none, setMenuNone] = useState("menu-none");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [hasHamburguer, setHasHamburguer] = useState(
    width > 768 ? false : true
  );
  const { t } = useTranslation();

  const updateMenu = () => {
    if (!!hasHamburguer) {
      if (!isMenuClicked) {
        setBurgerClass("burger-bar clicked");
        setMenuClass("menu visible");
        setMenuNone("menu-active");
      } else {
        setBurgerClass("burger-bar unclicked");
        setMenuClass("menu hidden");
        setMenuNone("menu-none");
      }
      setIsMenuClicked(!isMenuClicked);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setMenuClass("menu hidden");
      setMenuNone("menu-hidden");
      if (window.innerWidth > 768) {
        setHasHamburguer(false);
      } else {
        setHasHamburguer(true);
        setIsMenuClicked(false);
      }
    };

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div
            className={`${burger_class} ${darkMode && "burger-bar__dark"}`}
          ></div>
          <div
            className={`${burger_class} ${darkMode && "burger-bar__dark"}`}
          ></div>
          <div
            className={`${burger_class} ${darkMode && "burger-bar__dark"}`}
          ></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className={menu_none}>
          <span
            onClick={() => {
              updateMenu();
              scroll(0);
            }}
            className={`menu-sections ${darkMode && "menu-sections__dark"}`}
          >
            {t("navbarHome")}
          </span>
          <span
            onClick={() => {
              updateMenu();
              scroll(width < 450 ? 0.8 : 0.9);
            }}
            className={`menu-sections ${darkMode && "menu-sections__dark"}`}
          >
             {t("navbarAbout")}
          </span>
          <span
            onClick={() => {
              updateMenu();
              scroll(1.6);
            }}
            className={`menu-sections ${darkMode && "menu-sections__dark"}`}
          >
             {t("navbarExperience")}
          </span>
          <span
            onClick={() => {
              updateMenu();
              scroll(width < 450 ? 4.7 : 4.7);
            }}
            className={`menu-sections ${darkMode && "menu-sections__dark"}`}
          >
             {t("navbarProjects")}
          </span>
        </div>
        {isMenuClicked && <SocialMedia isBurger={true} darkMode={darkMode} />}
      </div>
    </>
  );
};

export default BurgerMenu;
