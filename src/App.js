import "./App.css";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import SunBackground from "./assets/images/sun-background2.png";
import MoonBackground from "./assets/images/moon-background.png";
import Forest from "./assets/images/forest.png";
import Stars from "./assets/images/stars.svg";
import Cloud from "./assets/images/cloud.svg";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  const [width, setWidth] = useState(window.innerWidth);
  const parallax = useRef(null);

  const scroll = (number) => {
    if (parallax.current) {
      parallax.current.scrollTo(number);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (darkMode) {
      document.body.style.background = "#000000";
      document.body.style.color = "#FFFFFF";
    } else {
      document.body.style.background = "#d6d6d6";
      document.body.style.color = "#000000";
    }
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar scroll={scroll} />
      <Parallax
        ref={parallax}
        key={width}
        pages={width < 450 ? 6.1 : 5.8}
        style={{ height: "calc(100% - 70px)" }}
      >
        <ParallaxLayer
          offset={0}
          speed={0.4}
          style={{
            backgroundImage: `url(${
              darkMode ? MoonBackground : SunBackground
            })`,
            backgroundSize: "45% auto",
            backgroundPosition: "center top",
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={5.2}
          style={{
            backgroundImage: `url(${Stars}`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={1.4}
          speed={1}
          factor={3}
          style={{
            backgroundColor: `${darkMode ? "#253237" : "#87BCDE"}`,
            zIndex: -2,
          }}
        />
        <ParallaxLayer offset={1.4} speed={0.8} style={{ opacity: 0.4 }}>
          <img
            src={Cloud}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
            alt="cloud"
          />
          <img
            src={Cloud}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
            alt="cloud"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5} style={{ opacity: 0.4 }}>
          <img
            src={Cloud}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
            alt="cloud"
          />
          <img
            src={Cloud}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
            alt="cloud"
          />
          <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 0.4 }}>
            <img
              src={Cloud}
              style={{ display: "block", width: "10%", marginLeft: "10%" }}
              alt="cloud"
            />
            <img
              src={Cloud}
              style={{ display: "block", width: "20%", marginLeft: "75%" }}
              alt="cloud"
            />
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer
          offset={width < 450 ? 4.8 : 5}
          speed={-0.3}
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img
            src={Forest}
            style={{ width: "calc(100% + 150px)", marginLeft: "-150px" }}
            alt="forest"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1} factor={1}>
          <Main />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.1}>
          <Experience />
        </ParallaxLayer>
        <ParallaxLayer offset={width < 450 ? 4.2 : 3.6} speed={0.1}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={width < 450 ? 5.4 : 5} speed={0.1}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
