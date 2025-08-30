import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../App";

 
function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
     const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);

  },[setTheme])
 
  const switchTheme = () => {
    const newTheme = theme === "black" ? "white" : "black";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4" style={{ color: theme === "black" ? "white" : "black" }}>
        Current Theme: {theme}
      </h1>
      <button
        onClick={() => switchTheme() }
        className="px-4 py-2 cursor-pointer rounded-lg border-2 "
        style={{ borderColor: theme === "black" ? "white" : "black" }}
      > {theme== "black" ? (<span className="text-white">Toggle</span>):
        (
        <span className="textblack">Toggle</span>)}
      </button>
    </div>
  );
}

export default Theme;
