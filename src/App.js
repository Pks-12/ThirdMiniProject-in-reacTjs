import Dicegame from "./components/Dicegame";
import StartGame from "./components/StartGame";
import { useState } from "react";
import "./App.css";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
   {isGameStarted ? <StartGame /> : <Dicegame toggle={toggleGamePlay} />}</>
     );
}

export default App;


