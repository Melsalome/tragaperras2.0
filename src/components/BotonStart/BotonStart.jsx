
import React from "react";
import "./BotonStart.css";
export default function BotonStart({ fnStart, fnCheckWinner }) {
  const changeState = () => {
    fnStart(true);
    fnCheckWinner(false);
  };


  return (
    <div>
      <button className="traga-perras-button" onClick={changeState}>
        ¡EMPIEZA A JUGAR!
      </button>
    </div>
  );
}
