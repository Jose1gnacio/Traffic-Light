import React from "react";
import { useState } from "react";

const Azul = () => {
    
    const [opened, setOpened] = useState(true);
   
    return opened ? (
      <div>
        <div
          onClick={() => setSelectedColor("blue")}
          className={"luz blue" + (selectedColor === "blue" ? " glow" : "")}
        ></div>
        <button type="button" onClick={() => setOpened(false)}>
          Close
        </button>
      </div>
    ) : (
      <button type="button" onClick={() => setOpened(true)}>
        Open
      </button>
    );
};

export default Azul;
  
