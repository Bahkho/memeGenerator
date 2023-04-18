import React from "react";
import Meme from "./header";
import Component from "./component";
import "./style.css";

export default function App() {
  const [theme, setTheme] = React.useState(true);
  const toggleDarkMode = () => {
    setTheme((prev) => !prev);
  };

  return (
    <div>
      <Meme mode={theme} toggle={toggleDarkMode} />
      <Component mode={theme} />
    </div>
  );
}
