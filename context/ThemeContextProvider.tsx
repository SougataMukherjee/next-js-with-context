"use client";
import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
const ThemeContextProvider = ({ children }: { children: any }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") ?? "light"
  );
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    let dom = document.querySelector("html");
    if (dom) {
      dom.classList.remove("light", "dark");
      dom.classList.add(themeMode);
    }
  }, [themeMode]);
  useEffect(() => {
    if (localStorage.getItem("themeMode")) {
      setThemeMode(localStorage.getItem("themeMode") ?? "");
    }
  }, []);

  useEffect(() => {
    let dom = document.querySelector("html");
    if (dom) {
      dom.classList.remove("light", "dark");
      dom.classList.add(themeMode);
    }
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);
  return (
    <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
