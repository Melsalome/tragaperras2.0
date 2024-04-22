import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentLight, setCurrentLight] = useState('red');
  const setRed = () => {
    setCurrentLight('red');
    setTimeout( () => {
      setGreen();
    },1000)
  };
  const setGreen = () => {
    setCurrentLight('green');
    setTimeout( () => {
      setYellow();
    },1000)
  };
  const setYellow = () => {
    setCurrentLight('yellow');
    setTimeout( () => {
      setRed();
    },1000)
  };
  useEffect( () => {
    setGreen();
  },[])
  return (
    <>
    <p>{currentLight}</p>
    </>
  )
}

export default App
