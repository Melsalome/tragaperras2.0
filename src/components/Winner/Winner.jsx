import React from 'react'
import './winner.css'

export default function Winner({ setStateWinner}) {
  return (
    <>
    <div className="container">
      <h1 className="winning-message">HAZ GANADO!</h1>
    </div>
    <button onClick={ () => {setStateWinner(false)}}>REINICIAR JUEGO</button>
    </>
  )
  
};
