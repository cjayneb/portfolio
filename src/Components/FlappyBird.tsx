import React, { useState } from 'react'
import "./FlappyBird.css"
import Pipe from './Pipe'

interface FlappyBirdProps {

}

const generatePipes = () => {
    let middle = Math.random();
    const heightTop = 500 * middle - 100;
    const heightBottom = 500 - heightTop - 100;
    return (
        <>
            <Pipe h={heightTop + 'px'} type='pipeTop'/>
            <Pipe h={heightBottom + 'px'} type='pipeBottom'/>
        </>
    );
}

const FlappyBird = () => {
    const [gameStarted, setGameStarted] = useState(0);
    const handleClick = () => {
        console.log(gameStarted);
    };

  return (
    <div id='flappyContainer' onClick={() => {setGameStarted(gameStarted+1); handleClick();}}>
        {gameStarted > 0 && 
        (
            generatePipes()
        )}
    </div>
  )
}

export default FlappyBird