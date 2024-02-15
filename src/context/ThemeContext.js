import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ setDarkMode, darkMode }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeContextProvider;
