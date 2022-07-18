import React from "react";
import { useState } from "react";
import Azul from "./azul.jsx";

//create your first component
const Home = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [boton, setboton] = useState("");

  return (
    <div>
      <div className="stick"></div>
      <div
        className={"semaforo" + (boton === "blue" ? " semaforo2" : "")}
      >
        <div
          onClick={() => setSelectedColor("red")}
          className={"luz red" + (selectedColor === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("yellow")}
          className={"luz yellow" + (selectedColor === "yellow" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("green")}
          className={"luz green" + (selectedColor === "green" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setSelectedColor("blue")}
          className={(boton === "blue" ? " luz blue" : "") + (selectedColor === "blue" ? " glow" : "")}
        ></div>
		<button onClick={() => setboton("blue")} className={"button"}> More</button>
		<button onClick={() => setboton("dark")} className={"button"}> Less</button>
      </div>
    </div>
  );
};

export default Home;
