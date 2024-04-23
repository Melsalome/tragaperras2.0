import { useEffect, useState } from 'react'
import './App.css'
import Tragaperras from './components/tragaperras/Tragaperras';
import Winner from './components/Winner/Winner';

function App() {
  const [isWinner, setIsWinner] = useState(false);

  const winner = () => {
    if(isWinner) {
      return <Winner setStateWinner={setIsWinner}></Winner>
    } else {
      return  <Tragaperras fnWinner={setIsWinner} currentWinner={isWinner}></Tragaperras>
    }
  } 

  
  return (
    <>
  
  {winner()}
    
    </>
  )
}

export default App
