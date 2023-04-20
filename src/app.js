import React from "react";
import Meme from "./header";
import Component from "./component";
import "./style.css";

export default function App() {
  const [theme, setTheme] = React.useState(false);
  const toggleDarkMode = () => {
    setTheme((prev) => !prev);
  };
  React.useEffect(() => {
    document.body.style.backgroundColor = theme ? "#fff" : "#555";
  }, [theme]);

  return (
    <div>
      <Meme mode={theme} toggle={toggleDarkMode} />
      <Component mode={theme} />
    </div>
  );
}
