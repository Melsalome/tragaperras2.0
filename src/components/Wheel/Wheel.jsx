import React from "react";
import './wheel.css'



const Wheel = ({ currentWheel1, wheel }) => {
  const arrows = (index, elemento) => {
    if (index === 2) {
      return (
        <>
          <div key={`${index}`} className="card___div--winner">
            <img key={`${index}`} src={`${elemento}`} />
          </div>
        </>
      );
    } else {
      return (
        <div key={`${index}`} className="card___div">
          <img key={`${index}`} src={`${elemento}`} />
        </div>
      );
    }
  };
  return (
    <div className="card-container">
      <div className="card" data-selector={`wheel${wheel}`}>
        {currentWheel1.map((element, i) => arrows(i, element))}
      </div>
    </div>
  );
}


export default Wheel

