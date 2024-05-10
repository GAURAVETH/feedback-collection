import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // access to html element

  // set theme to localStorage and html element
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light"); // Remove 'light' class
    } else {
      element.classList.remove("dark"); // Remove 'dark' class
      element.classList.add("light");
    }
  }, [theme]); // Added theme as a dependency

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BiSolidMoon
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkMode;