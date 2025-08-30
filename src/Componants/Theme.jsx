import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Theme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4" style={{ color: theme === "black" ? "white" : "black" }}>
        Current Theme: {theme}
      </h1>
      <button
        onClick={() => setTheme(theme === "black" ? "white" : "black")}
        className="px-4 py-2 rounded-lg border-2 "
        style={{ borderColor: theme === "black" ? "white" : "black" }}
      > {theme== "black" ? (<span className="text-white">Toggle</span>):(<span className="black">Toggle</span>)}
      </button>
    </div>
  );
}

export default Theme;
