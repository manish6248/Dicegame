import styled from "styled-components"
import Startgame from "./components/Startgame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";


function App() {
 
  const [isGameStatred,setIsGameStatred]= useState(false)
   const toggleGamePlay =()=>{
    setIsGameStatred((prev)=>!prev);
   };
  return (
     <>
    {isGameStatred ? <GamePlay/> : <Startgame toggle={toggleGamePlay }/>}
     </>
  );
}

export default App
const Button = styled.button`
background-color:black;
color:white;
padding:10px;
`;