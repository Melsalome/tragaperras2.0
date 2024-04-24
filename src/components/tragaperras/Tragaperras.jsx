import React, { useEffect } from 'react'
import bm from '../../assets/bm.png'
import hongo from '../../assets/hongo.png'
import pato from '../../assets/pato.png'
import patricio from '../../assets/patricio.png'
import './Tragaperras.css'
import { useState } from 'react'
import BotonStart from '../BotonStart/BotonStart'


export default function Tragaperras({ fnWinner, currentWinner }) {
 
  const getIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };
  const pictures1 = [pato, hongo, bm, patricio];

const [currentPictures, setCurrentPictures] = useState(pictures1);
const getRandomWheel = () => {
  return [currentPictures[getIndex(currentPictures)],currentPictures[getIndex(currentPictures)],currentPictures[getIndex(currentPictures)],currentPictures[getIndex(currentPictures)]];
}

  const [isPlaying, setIsPlaying] = useState(false);
  const wheelOne = getRandomWheel();
  const wheelTwo = getRandomWheel();
  const wheelThree = getRandomWheel();

  const spinWheel = () => {
    const interval = setInterval(() => {
      setCurrentPictures(pictures1);
    
    }, 300);


    setTimeout(() => {
      clearInterval(interval);
      setIsPlaying(false)
    }, 1000);
  };


  useEffect(() => {
    if (isPlaying) {
      spinWheel();
    } else {
      checkWinner();
    }
  }, [isPlaying]);


  const checkWinner = () => {
    console.log(wheelOne[2], wheelTwo[2], wheelThree[2])
    if (wheelOne[2] === wheelTwo[2] && wheelTwo[2] === wheelThree[2]) {
      fnWinner(true);

      console.log("hola");
    }
    setIsPlaying(false);
  };
  return (
    <>
      <div className="container">
      <div className='arrow'></div>
        <div className="card-container">
          <div className="card">
            {wheelOne.map((element, index) => (
              <img key={`${index}`} className={`${index}`} src={`${element}`} />
            ))}
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            {wheelTwo.map((element, index) => (
              <img key={`${index}`} className={`${index}`} src={`${element}`} />
            ))}
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            {wheelThree.map((element, index) => (
              <img key={`${index}`} className={`${index}`} src={`${element}`} />
            ))}
          </div>
          <div className='arrow2'></div>
        </div>
      </div>
      <BotonStart
        fnStart={setIsPlaying}
        fnCheckWinner={fnWinner}
        fnWinning={currentWinner}
      />
    </>
  );
}
