import React, { useState, createContext, useRef } from "react";
import Theme from "./Componants/Theme";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("black");
  const reftheme = useRef();

  return (
    <ThemeContext.Provider value={{ theme, setTheme, reftheme }}>
      <div
        ref={reftheme}
        className="w-screen h-screen flex justify-center items-center"
        style={{ background: theme }}
      >
        <Theme />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
