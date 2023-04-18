import React, { useState } from "react";
import pics from "./img/troll-face.png";

export default function Meme(props) {

  return (
    <header className={props.mode ? "header" : "header--darkMode"}>
      <img src={pics} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      {/* <h4 className="header--project">React Course - Project 3</h4> */}
      <button className="toggle" onClick={props.toggle}>Change Theme</button>
    </header>
  );
}
