import React, { useEffect } from 'react'
import bm from '../../assets/bm.png'
import hongo from '../../assets/hongo.png'
import patricio from '../../assets/patricio.png'
import './Tragaperras.css'
import { useState } from 'react'
import BotonStart from '../BotonStart/BotonStart'
import Wheel from '../Wheel/Wheel.jsx'


export default function Tragaperras({ fnWinner, currentWinner }) {


  const pictures = [bm, hongo, patricio];
  const [currentPictures, setCurrentPictures] = useState(pictures);
  const getIndex = (arr) => {
    // console.log(Math.floor(Math.random() * arr.length));
    return Math.floor(Math.random() * arr.length);
  };


  const getRandomWheel = () => {
    return [
      currentPictures[getIndex(currentPictures)],
      currentPictures[getIndex(currentPictures)],
      currentPictures[getIndex(currentPictures)],
      currentPictures[getIndex(currentPictures)],
    ];
  };

  console.log(currentWinner);

  const [currentWheel1, setCurrentWheels1] = useState(getRandomWheel());
  const [currentWheel2, setCurrentWheels2] = useState(getRandomWheel());
  const [currentWheel3, setCurrentWheels3] = useState(getRandomWheel());
  const [isPlaying, setIsPlaying] = useState(false);

  const spinWheel = (setCurrentWheel) => {
    const intervalWheelOne = setInterval(() => {
      setCurrentWheel(getRandomWheel());
    }, 200);

    setTimeout(() => {
      clearInterval(intervalWheelOne);
      setIsPlaying(false);
    }, 800);
  };

  useEffect(() => {
    if (isPlaying) {
      spinWheel(setCurrentWheels1);
      setTimeout(() => {
        spinWheel(setCurrentWheels2);
      }, 900);
      setTimeout(() => {
        spinWheel(setCurrentWheels3);
      }, 1800);
    } else {
      setTimeout(() => {
        console.log("cheking winner");
        checkWinner();
      }, 2000);
      checkWinner();
    }
  }, [isPlaying]);

  const checkWinner = () => {
    const wheelOneImg$$ = document.querySelectorAll(
      '[data-selector="wheel1"] img'
    );
    const wheelTwoImg$$ = document.querySelectorAll(
      '[data-selector="wheel2"] img'
    );
    const wheelThreeImg$$ = document.querySelectorAll(
      '[data-selector="wheel3"] img'
    );
    if (
      wheelOneImg$$[2].currentSrc === wheelTwoImg$$[2].currentSrc &&
      wheelTwoImg$$[2].currentSrc === wheelThreeImg$$[2].currentSrc
    ) {
      fnWinner(true);
      
    }
  };
  

  return (
    <>
      {/* {matchCard(1, "hola")} */}

      <div className="board">
        <div className="container">
          <Wheel currentWheel1={currentWheel1} wheel={"1"}></Wheel>
          <Wheel currentWheel1={currentWheel2} wheel={"2"}></Wheel>
          <Wheel currentWheel1={currentWheel3} wheel={"3"}></Wheel>
        </div>
        <BotonStart
          fnStart={setIsPlaying}
          fnCheckWinner={fnWinner}
          fnWinning={currentWinner}
        />
      </div>
    </>
  );
}

