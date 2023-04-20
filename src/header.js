import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import pics from "./img/troll-face.png";

export default function Meme(props) {

  return (
    <header className={props.mode ? "header" : "header--darkMode"}>
      <img src={pics} className="header--image" alt="meme-img" />
      <h2 className="header--title">Meme Generator</h2>
      {/* <h4 className="header--project">React Course - Project 3</h4> */}
      {/* <button className="toggle" >Change Theme</button> */}
      {props.mode ? <FaMoon onClick={props.toggle} /> : <FaSun onClick={props.toggle} />}
    </header>
  );
}
