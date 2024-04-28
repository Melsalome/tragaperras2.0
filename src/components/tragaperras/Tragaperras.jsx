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

  // const triggerSlotRotation = ref => {
  //   function setTop(top) {
  //     ref.style.top = `${top}px`;
  //   }
  //   let options = ref.children;
  //   let randomOption = Math.floor(
  //     Math.random() * fruits.length
  //   );
  //   let choosenOption = options[randomOption];
  //   setTop(-choosenOption.offsetTop + 2);
  //   return fruits[randomOption];
  // };

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
  
  // const triggerSlotRotation = ref => {
  //   function setTop(top) {
  //     ref.style.top = `${top}px`;
  //   }
    // let options = ref.children;
    // let randomOption = Math.floor(
    //   Math.random() * fruits.length
    // );
    
    // const triggerSlotRotation = ref => {
    //   function setTop(top) {
    //     ref.style.top = `${top}px`;
    //   }
    //   let options = ref.children;
    //   let randomOption = Math.floor(
    //     Math.random() * fruits.length
    //   );
    //   let choosenOption = options[randomOption];
    //   setTop(-choosenOption.offsetTop + 2);
    //   return fruits[randomOption];
    // };

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


// export default function Tragaperras({ fnWinner, currentWinner }) {
  
//   const [isPlaying, setIsPlaying] = useState(false);

//   const pictures = [pato, hongo, bm, patricio];
//   const [currentPictures, setCurrentPictures] = useState(pictures);
  
//   const getIndex = (arr) => {
//     return Math.floor(Math.random() * arr.length);
//   };
  


// const getRandomWheel = () => {
//   return [currentPictures[getIndex(currentPictures)],currentPictures[getIndex(currentPictures)],currentPictures[getIndex(currentPictures)],currentPictures[getIndex(currentPictures)]];
// }

 
//   const wheelOne = getRandomWheel();
//   const wheelTwo = getRandomWheel();
//   const wheelThree = getRandomWheel();

//   const spinWheel = () => {
//     const interval = setInterval(() => {
//       setCurrentPictures(pictures);
    
//     }, 300);


//     setTimeout(() => {
//       clearInterval(interval);
//       setIsPlaying(false)
//     }, 1000);
//   };


//   useEffect(() => {
//     if (isPlaying) {
//       spinWheel();
//     } else {
//       checkWinner();
//     }
//   }, [isPlaying]);


//   const checkWinner = () => {
//     if (wheelOne[2] === wheelTwo[2] && wheelTwo[2] === wheelThree[2]) {
//       fnWinner(true);

//     }
//     setIsPlaying(false);
//   };
//   return (
//     <>
//       <div className="container">
//       <div className='arrow'></div>
//         <div className="card-container">
//          <WheelOne></WheelOne>
//         </div>
//         <div className="card-container">
//           <WheelTwo></WheelTwo>
//         </div>
//         <div className="card-container">
//         <WheelThree></WheelThree>
//           <div className='arrow2'></div>
//         </div>
//       </div>
//       <BotonStart
//         fnStart={setIsPlaying}
//         fnCheckWinner={fnWinner}
//         fnWinning={currentWinner}
//       />
//     </>
//   );
// }
