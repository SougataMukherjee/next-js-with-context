"use client";
import useTheme from "@/context/ThemeContext";
import React from "react";

const ThemeButton = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const handleChange = (e: any) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <>
      <input
        type="checkbox"
        checked={themeMode === "dark"}
        onChange={handleChange}
      />
      <label>{themeMode}</label>
    </>
  );
};

export default ThemeButton;
